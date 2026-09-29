// Deskgeon 부트 진단: 게임이 못 뜨면 원인과 복구 버튼을 화면에 띄운다 (모듈보다 먼저 실행되는 일반 스크립트)
(() => {
  const api = globalThis.browser ?? globalThis.chrome;
  const errs = [];
  let shown = false;
  const T0 = Date.now();
  let ctx = 'popup';
  try { api.tabs && api.tabs.getCurrent && api.tabs.getCurrent(tb => { if (tb) ctx = 'tab'; }); } catch (e) {}
  // 동기 저장(localStorage): 페이지가 멈춰도 멈추기 직전까지 기록이 남는다
  window.__dmLog = (m) => {
    try {
      const list = JSON.parse(localStorage.getItem('dm.diag') || '[]');
      list.push({ at: Date.now(), ms: Date.now() - T0, ctx, m: String(m).slice(0, 400) });
      localStorage.setItem('dm.diag', JSON.stringify(list.slice(-100)));
    } catch (e) {}
  };
  let step = 'html';
  Object.defineProperty(window, '__dmStep', { get: () => step, set: v => { step = v; window.__dmLog('step ' + v); }, configurable: true });
  window.__dmLog('open v' + (api?.runtime?.getManifest?.().version || '?'));
  document.addEventListener('visibilitychange', () => window.__dmLog('visibility ' + document.visibilityState));
  window.addEventListener('pagehide', () => window.__dmLog('pagehide'));
  const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  function show(reason) {
    if (window.__dmReady || shown) return;
    shown = true;
    const d = document.createElement('div');
    d.id = 'dmBoot';
    d.style.cssText = 'position:fixed;inset:0;z-index:99;background:#12101f;color:#e8e4ff;font:12px/1.5 system-ui,sans-serif;padding:14px;display:flex;flex-direction:column;gap:8px;overflow:auto';
    d.innerHTML = '<b style="color:#ffd98a;font-size:14px">Deskgeon failed to start / 게임을 불러오지 못했어</b>' +
      '<div>step: <b>' + esc(window.__dmStep) + '</b> · ' + esc(reason) + '</div>' +
      '<pre id="dmBootErr" style="white-space:pre-wrap;background:#0b0916;border:1px solid #342e4f;padding:6px;margin:0;font-size:10px;max-height:220px;overflow:auto">' + esc(errs.join('\n\n') || '(no error message)') + '</pre>' +
      '<button id="dmCopy">Copy error report / 오류 내용 복사</button>' +
      '<button id="dmRetry">Retry / 다시 시도</button>' +
      '<button id="dmRestore">Restore latest backup / 최근 백업으로 복구</button>' +
      '<div id="dmMsg" style="color:#7ee08a"></div>';
    for (const b of d.querySelectorAll('button')) b.style.cssText = 'font:inherit;padding:6px;background:#2a2447;color:#fff;border:2px solid #4a4080;cursor:pointer';
    document.body.appendChild(d);
    const msg = t => { d.querySelector('#dmMsg').textContent = t; };
    d.querySelector('#dmRetry').onclick = () => location.reload();
    d.querySelector('#dmCopy').onclick = async () => {
      let info = 'Deskgeon ' + (api?.runtime?.getManifest?.().version || '?') + '\nstep: ' + window.__dmStep + '\n' + reason + '\n\n' + errs.join('\n\n');
      try { const o = await api.storage.local.get('deskmate.rpg.v1'); const s = o['deskmate.rpg.v1']; if (s) info += '\n\nsave: v' + s.v + ' cls=' + s.cls + ' lv=' + s.level + ' floor=' + s.floor + ' bag=' + (s.bag || []).length + ' comp=' + Object.keys(s.comp || {}).length + ' team=' + JSON.stringify(s.team) + ' lang=' + s.lang; } catch (e) { info += '\n(storage read failed: ' + e.message + ')'; }
      try { await navigator.clipboard.writeText(info); msg('Copied / 복사됨'); } catch (e) { d.querySelector('#dmBootErr').textContent = info; msg('Select the text above and copy / 위 내용을 직접 복사해줘'); }
    };
    let armed = false;
    d.querySelector('#dmRestore').onclick = async () => {
      if (!armed) { armed = true; msg('Press again to restore / 한 번 더 누르면 복구'); return; }
      try {
        const o = await api.storage.local.get('dm.backups'); const b = (o['dm.backups'] || [])[0];
        if (!b) { msg('No backup / 백업 없음'); return; }
        const s = b.s; s.lastTick = Date.now(); s.savedAt = Date.now() + 1000;
        await api.storage.local.set({ 'deskmate.rpg.v1': s });
        try { await api.storage.sync.clear(); } catch (e) {}
        msg('Restored / 복구 완료'); setTimeout(() => location.reload(), 600);
      } catch (e) { msg('Restore failed: ' + e.message); }
    };
  }
  window.addEventListener('error', e => { window.__dmLog('error ' + (e.message || '') + ' @' + (e.filename || '').split('/').pop() + ':' + e.lineno); errs.push((e.error && e.error.stack) || (e.message + ' @' + (e.filename || '').split('/').pop() + ':' + e.lineno)); if (!window.__dmReady) setTimeout(() => show('error'), 4000); });
  window.addEventListener('unhandledrejection', e => { const r = e.reason; window.__dmLog('rejection ' + ((r && r.message) || r)); errs.push('rejection: ' + ((r && r.stack) || r)); if (!window.__dmReady) setTimeout(() => show('rejection'), 4000); });
  window.__dmFail = (err) => { errs.push((err && err.stack) || String(err)); show('init'); };
  setTimeout(() => { if (!window.__dmReady) window.__dmLog('timeout 12s at ' + step); show('timeout (12s)'); }, 12000);
})();
