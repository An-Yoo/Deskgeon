// Early, bounded health diagnostics. No SDK/storage/network/timer here.
// Raw error messages, stacks, URLs, saves and identifiers are never captured.
(() => {
  if (window.__dgHealth) return;
  const clock = () => { try { return performance.now(); } catch { return 0; } };
  const pending = [], seen = new Set();
  let sink = null, ready = false, previous = null;
  const emit = (name, params, id = name) => {
    if (seen.has(id)) return;
    seen.add(id);
    if (sink) { try { sink(name, params, { dedupe: 'session', key: id }); } catch {} }
    else if (pending.length < 6) pending.push([name, params, { dedupe: 'session', key: id }]);
  };
  const duration = ms => Math.max(0, Math.min(600000, Math.round(Number(ms) || 0)));
  const api = {
    connect(track) { if (sink || typeof track !== 'function') return; sink = track; for (const event of pending.splice(0)) { try { sink(...event); } catch {} } },
    ready() { if (ready) return; ready = true; emit('dg_start_ready', { duration_ms: duration(clock()) }); },
    fail(reason) { if (!ready) emit('dg_start_failed', { reason: ['init','error','rejection','timeout'].includes(reason) ? reason : 'init', duration_ms: duration(clock()) }); },
    frame() {
      if (!ready || document.visibilityState !== 'visible' || window.__dgMonetizationBusy?.()) { previous = null; return; }
      const now = clock();
      if (previous !== null && now - previous >= 2000) emit('dg_frame_stall', { duration_ms: duration(now - previous), reason: 'foreground_gap' });
      previous = now;
    },
    pause() { previous = null; },
    stats() { return { ready, queued: pending.length, observed: seen.size }; }
  };
  window.__dgHealth = Object.freeze(api);
  window.addEventListener('error', () => emit('dg_runtime_error', { reason: 'uncaught_error', phase: ready ? 'play' : 'startup' }, 'error'));
  window.addEventListener('unhandledrejection', () => emit('dg_runtime_error', { reason: 'unhandled_rejection', phase: ready ? 'play' : 'startup' }, 'rejection'));
  document.addEventListener('visibilitychange', api.pause);
  window.addEventListener('pagehide', api.pause);
  window.addEventListener('blur', api.pause);
  window.addEventListener('focus', api.pause);
})();
