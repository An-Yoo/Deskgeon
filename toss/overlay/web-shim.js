// Deskgeon 앱인토스 버전용 chrome.* 대체 구현 (localStorage 기반)
// 저장 키 앞에 사용자별 접두어(window.__dgPrefix)를 붙여 토스 계정별로 세이브를 분리한다.
(() => {
  const VERSION = '__VERSION__';
  const P = () => globalThis.__dgPrefix || 'dg.t.pending.';
  const listeners = [];
  const clone = v => (v === undefined ? undefined : JSON.parse(JSON.stringify(v)));
  const fire = (changes, area) => {
    if (!Object.keys(changes).length) return;
    for (const fn of listeners.slice()) { try { fn(changes, area); } catch (e) { console.error(e); } }
  };
  function makeArea(area, persist) {
    const mem = new Map();
    const read = k => {
      if (!persist) return mem.has(k) ? clone(mem.get(k)) : undefined;
      const raw = localStorage.getItem(P() + k);
      if (raw == null) return undefined;
      try { return JSON.parse(raw); } catch (e) { return undefined; }
    };
    const write = (k, v) => { if (!persist) { mem.set(k, clone(v)); return; } localStorage.setItem(P() + k, JSON.stringify(v)); };
    const del = k => { if (!persist) mem.delete(k); else localStorage.removeItem(P() + k); };
    const allKeys = () => {
      if (!persist) return [...mem.keys()];
      const out = [], pre = P();
      for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith(pre)) out.push(k.slice(pre.length)); }
      return out;
    };
    return {
      async get(keys) {
        const out = {};
        if (keys == null) { for (const k of allKeys()) out[k] = read(k); return out; }
        if (typeof keys === 'string') keys = [keys];
        if (Array.isArray(keys)) { for (const k of keys) { const v = read(k); if (v !== undefined) out[k] = v; } return out; }
        for (const [k, def] of Object.entries(keys)) { const v = read(k); out[k] = v !== undefined ? v : def; }
        return out;
      },
      async set(obj) {
        const changes = {};
        for (const [k, v] of Object.entries(obj || {})) {
          const oldValue = read(k);
          try { write(k, v); } catch (e) { throw new Error('Storage full: ' + (e && e.message || e)); }
          changes[k] = { oldValue, newValue: clone(v) };
        }
        fire(changes, area);
      },
      async remove(keys) {
        if (typeof keys === 'string') keys = [keys];
        const changes = {};
        for (const k of keys || []) { const oldValue = read(k); if (oldValue !== undefined) { del(k); changes[k] = { oldValue }; } }
        fire(changes, area);
      },
      async clear() {
        const changes = {};
        for (const k of allKeys()) { changes[k] = { oldValue: read(k) }; del(k); }
        fire(changes, area);
      },
    };
  }
  globalThis.chrome = {
    __web: true, __toss: true,
    storage: {
      local: makeArea('local', true),
      sync: makeArea('sync', false),
      onChanged: { addListener(fn) { listeners.push(fn); }, removeListener(fn) { const i = listeners.indexOf(fn); if (i >= 0) listeners.splice(i, 1); } },
    },
    runtime: {
      id: 'deskgeon-toss',
      getManifest: () => ({ version: VERSION, name: 'Deskgeon' }),
      async sendMessage(msg) { if (msg && msg.type === 'drive-auth') return { ok: false, err: 'unsupported' }; return { ok: true }; },
      onMessage: { addListener() {} },
    },
  };
})();
