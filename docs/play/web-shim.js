// Deskgeon 웹(PWA) 버전용 chrome.* 대체 구현.
// 확장 프로그램 코드(game.js / popup.js / boot.js)를 그대로 쓰기 위해
// chrome.storage / chrome.runtime 을 localStorage 기반으로 흉내 낸다.
// identity(구글 드라이브)는 제공하지 않으므로 드라이브 동기화는 "지원 안 함"으로 표시된다.
(() => {
  if (globalThis.chrome && globalThis.chrome.storage && globalThis.chrome.storage.local) return; // 실제 확장 환경이면 그대로
  const VERSION = '5.7.0';
  const PREFIX = 'dg.web.';
  const listeners = [];
  const clone = v => (v === undefined ? undefined : JSON.parse(JSON.stringify(v)));
  const fire = (changes, area) => {
    if (!Object.keys(changes).length) return;
    for (const fn of listeners.slice()) { try { fn(changes, area); } catch (e) { console.error(e); } }
  };
  // area: 'local' = localStorage 에 영구 저장, 'sync' = 메모리(웹에는 계정 동기화가 없음)
  function makeArea(area, persist) {
    const mem = new Map();
    const read = k => {
      if (!persist) return mem.has(k) ? clone(mem.get(k)) : undefined;
      const raw = localStorage.getItem(PREFIX + k);
      if (raw == null) return undefined;
      try { return JSON.parse(raw); } catch (e) { return undefined; }
    };
    const write = (k, v) => {
      if (!persist) { mem.set(k, clone(v)); return; }
      localStorage.setItem(PREFIX + k, JSON.stringify(v));
    };
    const del = k => { if (!persist) mem.delete(k); else localStorage.removeItem(PREFIX + k); };
    const allKeys = () => {
      if (!persist) return [...mem.keys()];
      const out = [];
      for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith(PREFIX)) out.push(k.slice(PREFIX.length)); }
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
          try { write(k, v); }
          catch (e) { throw new Error('Storage full: ' + (e && e.message || e)); }
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
    __web: true,
    storage: {
      local: makeArea('local', true),
      sync: makeArea('sync', false),
      onChanged: { addListener(fn) { listeners.push(fn); }, removeListener(fn) { const i = listeners.indexOf(fn); if (i >= 0) listeners.splice(i, 1); } },
    },
    runtime: {
      id: 'deskgeon-web',
      getManifest: () => ({ version: VERSION, name: 'Deskgeon' }),
      // 확장에서는 서비스 워커가 받던 메시지. 웹에서는 팝업(=이 페이지)이 직접 저장하므로 성공만 돌려준다.
      async sendMessage(msg) {
        if (msg && msg.type === 'drive-auth') return { ok: false, err: 'unsupported' };
        return { ok: true };
      },
      onMessage: { addListener() {} },
    },
  };
  // 저장 공간이 브라우저 정리로 지워지지 않도록 요청 (지원 브라우저만)
  try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) {}
})();
