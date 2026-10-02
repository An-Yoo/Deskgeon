// 크롬(chrome.*)·파이어폭스(browser.*) 공용: promise 기반 확장 API
const chrome = globalThis.browser ?? globalThis.chrome;
import { t, setLang, getLang, LANGS } from './i18n.js';
export { t, setLang, getLang, LANGS };
// Deskgeon (구 Deskmate) - core logic. 저장 키·파일명은 세이브 호환을 위해 deskmate 유지 (no DOM)
export const SAVE_KEY = 'deskmate.rpg.v1';
export const SAVE_VER = 6;
export const OFFLINE_CAP_H = 12;
export const OFFLINE_RATE = 0.6;
export const BOSS_EVERY = 5;
export const BOSS_TIME = 30;
export const ARMOR_K = 3;                  // 방어력 1당 효과 (롤 방식: 받는 피해 = 100 / (100 + K × 방어력))
export const CLR_COMP_CRIT = 0.5;           // 성직자 동료 치명타 1단계당 추가 피해 (+50%)
export const BAG_SOFT_CAP = 1000;       // 칸 수 상한 (넘으면 가장 약한 것부터 자동 판매)
export const DROP_PER_SEC = 1 / 6;      // 드랍 상한: 평균 6초에 1개 (빠른 사냥에서 가방 폭증 방지)   // 사실상 무제한 (계정 동기화 용량 보호용 안전장치)
export const TEAM_MAX = 3;
export const SKILL_MAX = 10;

// ---------- 직업 ----------
export const CLASS_IDS = ['war', 'rog', 'mag', 'clr'];
export const CLASSES = {
  war: { name: '전사',   color: '#ff8a5c', desc: '체력 +30% · 공격력 +30% · 받는 피해 -10%',               mods: { hpP: 30, def: 10, atkP: 30 } },
  rog: { name: '도적',   color: '#7ee08a', desc: '치명타 +8% · 치명타 피해 +40% · 공격속도 +15 · 골드 +15%',     mods: { crit: 8, spd: 15, goldP: 15, critDmg: 40 } },
  mag: { name: '마법사', color: '#8fb8ff', desc: '스킬 피해 +30% · 쿨타임 -10% · 체력 -15%', mods: { skillP: 30, cdr: 10, hpP: -15 } },
  clr: { name: '성직자', color: '#ffd98a', desc: '체력 +15% · 보스 피해 +30% · 보스전 재생 1.5%/초 · 동료 피해 +90%', mods: { hpP: 15, bossP: 30, regen: 1.5, compP: 90 } },
};

// 스탯 키 표시명
const STAT_UNIT = { xpP: '%', atkP: '%', hpP: '%', crit: '%', spd: '', goldP: '%', bossP: '%', def: '', cdr: '', critDmg: '%', skillP: '%', compP: '%', regen: '%/s', atk: '', hp: '' };
function _labelProxy(keys) {
  return new Proxy({}, {
    get: (_, k) => (typeof k === 'string' && keys.includes(k)) ? [t('stat.' + k), STAT_UNIT[k]] : undefined,
    has: (_, k) => keys.includes(k),
    ownKeys: () => keys.slice(),
    getOwnPropertyDescriptor: (_, k) => keys.includes(k) ? { enumerable: true, configurable: true } : undefined,
  });
}
const _STAT_KEYS = ['xpP', 'atkP', 'hpP', 'crit', 'spd', 'goldP', 'bossP', 'def', 'cdr', 'critDmg', 'skillP', 'compP', 'regen'];
export const STAT_LABEL = _labelProxy(_STAT_KEYS);
export function statText(k, v) {
  const [n, u] = STAT_LABEL[k] || [k, ''];
  return `${n} +${(Math.round(v * 10) / 10)}${u}`;
}

// ---------- 장비 ----------
// perClass: 직업에 따라 이름과 모습이 바뀌는 슬롯
export const SLOTS = [
  { id: 'weapon', name: '무기',   stat: 'atk',     base: 5,   g: 2.45, tiers: 8, perClass: true,  flat: true },
  { id: 'body',   name: '갑옷',   stat: 'hp',      base: 26,  g: 2.45, tiers: 8, perClass: true,  flat: true },
  { id: 'head',   name: '투구',   stat: 'crit',    base: 1.2, g: 1.45, tiers: 6, perClass: true },
  { id: 'cloak',  name: '망토',   stat: 'def',     base: 1.6, g: 1.40, tiers: 5 },
  { id: 'gloves', name: '장갑',   stat: 'spd',     base: 3.0, g: 1.45, tiers: 5 },
  { id: 'boots',  name: '신발',   stat: 'cdr',     base: 1.2, g: 1.40, tiers: 5 },
  { id: 'ring',   name: '반지',   stat: 'critDmg', base: 8,   g: 1.40, tiers: 6 },
  { id: 'amulet', name: '목걸이', stat: 'goldP',   base: 5,   g: 1.60, tiers: 6 },
];
for (const s of SLOTS) Object.defineProperty(s, 'name', { get: () => t('slot.' + s.id), configurable: true });
export const SLOT_BY_ID = Object.fromEntries(SLOTS.map(s => [s.id, s]));
export const SLOT_STAT_NAME = _labelProxy(['atk', 'hp', ..._STAT_KEYS]);

export const GEAR_NAMES = {
  weapon: {
    war: ['나무 몽둥이', '숏소드', '롱소드', '팔시온', '그레이트소드', '워액스', '룬 대검', '권능의 검'],
    rog: ['단검', '곡단검', '레이피어', '시미터', '쌍날검', '삼중검', '쌍룡검', '블러드베인'],
    mag: ['나무 지팡이', '견습 지팡이', '화염 지팡이', '서리 지팡이', '폭풍 지팡이', '죽음의 지팡이', '권능의 지팡이', '올그레브의 지팡이'],
    clr: ['메이스', '강철 메이스', '플레일', '모닝스타', '그레이트 메이스', '이브닝스타', '심판의 철퇴', '광휘의 메이스'],
  },
  body: {
    war: ['가죽 조각', '링메일', '스케일메일', '체인메일', '반판금 갑옷', '흑철 판금', '은룡 비늘갑', '황금 드래곤 갑주'],
    rog: ['짧은 가죽옷', '가죽 재킷', '징 박힌 가죽', '두꺼운 가죽', '늪용 가죽', '그림자용 가죽', '수은용 가죽', '청룡 가죽'],
    mag: ['갈색 로브', '푸른 로브', '진홍 로브', '금테 로브', '보랏빛 로브', '흑금 로브', '밤의 로브', '무지개 로브'],
    clr: ['수도사 옷', '성포 갑옷', '백색 성포 갑옷', '반판금 성갑', '백은 반판금', '청금 성갑', '백룡 성갑', '진주룡 성갑'],
  },
  head: {
    war: ['붉은 철투구', '녹색 전투모', '기사 투구', '뿔 투구', '황금 투구', '용사의 왕관'],
    rog: ['회색 두건', '검은 두건', '숲의 두건', '핏빛 두건', '닌자 두건', '백색 암살자 두건'],
    mag: ['갈색 고깔', '푸른 고깔', '진홍 고깔', '보랏빛 고깔', '흑금 고깔', '백색 대현자관'],
    clr: ['치유사 모자', '백색 머리띠', '사제 터번', '깃털 성투구', '성왕의 관', '태양 왕관'],
  },
  cloak:  ['가죽 망토', '여행자 망토', '진홍 망토', '마도사의 망토', '용가죽 망토'],
  gloves: ['가죽 장갑', '철 장갑', '암살자 장갑', '푸른 건틀릿', '황금 건틀릿'],
  boots:  ['가죽 신발', '여행자 장화', '강철 장화', '바람의 장화', '황금 장화'],
  ring:   ['무쇠 반지', '금 반지', '에메랄드 반지', '루비 반지', '백금 반지', '그림자 반지'],
  amulet: ['청옥 부적', '카메오 부적', '황금 매듭 부적', '마안 부적', '수정 부적', '황금 가면 부적'],
};
export function baseName(it, cls) {
  const n = GEAR_NAMES[it.s];
  return Array.isArray(n) ? t(`gear.${it.s}.${it.t}`) : t(`gear.${it.s}.${cls || 'war'}.${it.t}`);
}
export function itemName(it, cls) {
  const p = itemPrefix(it);
  return (p ? p + ' ' : '') + baseName(it, cls);
}
export function itemIcon(it, cls) {
  const c = cls || 'war';
  if (it.s === 'weapon') return `assets/wpn/${c}${it.t}.png`;
  if (it.s === 'body' || it.s === 'head') return `assets/gear/${it.s}_${c}${it.t}.png`;
  return `assets/gear/${it.s}${it.t}.png`;
}
export function itemDoll(slot, t, cls) {
  const c = cls || 'war';
  if (slot === 'weapon') return `wpn/${c}${t}_d`;
  if (slot === 'body' || slot === 'head') return `gear/${slot}_${c}${t}_d`;
  if (slot === 'ring' || slot === 'amulet') return null;
  return `gear/${slot}${t}_d`;
}

export const RARITIES = [
  { name: '일반', mult: 1.00, color: '#cfd6e6' },
  { name: '고급', mult: 1.35, color: '#7ee08a' },
  { name: '희귀', mult: 1.85, color: '#6fb7ff' },
  { name: '영웅', mult: 2.50, color: '#c78dff' },
  { name: '전설', mult: 3.40, color: '#ffc35c' },
];

// ---------- 몬스터 / 난이도 ----------
function _nameArr(prefix, n) {
  return new Proxy(Array.from({ length: n }, (_, i) => i), { get: (arr, k) => (typeof k === 'string' && /^\d+$/.test(k)) ? t(prefix + k) : arr[k] });
}
export const ZONES = 26;
export const MONSTERS = _nameArr('mon.', ZONES);
export const FLOOR_NAMES = _nameArr('floor.', ZONES);
export const FLOOR_TILES = [1, 3, 1, 11, 2, 2, 0, 1, 10, 11, 4, 6, 6, 4, 9, 8, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
// 한 바퀴 = B1~128: 3층마다 새 구역(B1~48, 16곳) · 8층마다(B49~120, 9곳) · 혼돈의 왕좌(B121~128)
// B129부터는 같은 구역을 처음부터 다시 돌고, 적 능력치만 층수대로 계속 오른다
export const LOOP_LEN = 128;
export function loopOf(f) { return Math.floor((Math.max(1, f) - 1) / LOOP_LEN); }
export function monsterIndex(f) { const g = ((Math.max(1, f) - 1) % LOOP_LEN) + 1; return g <= 48 ? Math.floor((g - 1) / 3) : Math.min(ZONES - 1, 16 + Math.floor((g - 49) / 8)); }
export function zoneStart(z) { return z < 16 ? z * 3 + 1 : 49 + (z - 16) * 8; }
export function isBossFloor(f) { return f % BOSS_EVERY === 0; }
export function killsNeeded(f) { return Math.min(30, 10 + Math.floor((f - 1) / 10) * 3); }
export function monHp(f) { return 14 * Math.pow(1.4, f - 1); }
export function bossHp(f) { return monHp(f) * 20; }
// 보스 공격력: B80까지는 그대로, 그 뒤로는 성장을 완만하게 (용사 체력 성장과 비슷한 속도) → 후반 벽이 "즉사"가 아니라 "화력·생존 싸움"이 되게
export const BOSS_DPS_KNEE = 80, BOSS_DPS_G2 = 1.135;
export function bossDps(f) { return f <= BOSS_DPS_KNEE ? 5 * Math.pow(1.235, f - 1) : 5 * Math.pow(1.235, BOSS_DPS_KNEE - 1) * Math.pow(BOSS_DPS_G2, f - BOSS_DPS_KNEE); }
export function goldPerKill(f) { return 4 * Math.pow(1.37, f - 1); }
export function xpPerKill(f) { return 3 * Math.pow(1.26, f - 1); }

// ---------- 강화 ----------
export const UPGRADES = [
  { id: 'atk',   name: '검술 훈련',   desc: '공격력 +2 · +4%', c0: 20,  cg: 1.19 },
  { id: 'hp',    name: '체력 단련',   desc: '체력 +12 · +4%',  c0: 24,  cg: 1.19 },
  { id: 'crit',  name: '급소 노리기', desc: '치명타 +0.5%',    c0: 70,  cg: 1.26 },
  { id: 'spd',   name: '연속 공격',   desc: '공격속도 +3',     c0: 90,  cg: 1.24 },
  { id: 'gold',  name: '보물 감각',   desc: '골드 획득 +5%',   c0: 55,  cg: 1.22 },
  { id: 'skill', name: '마법 연구',   desc: '스킬 피해 +4%',   c0: 150, cg: 1.25 },
  { id: 'comp',  name: '지휘술',      desc: '동료 피해 +5%',   c0: 180, cg: 1.25 },
];
export function upgradeCost(u, n) { return Math.ceil(u.c0 * Math.pow(u.cg, n)); }
// 돌파: 검술 훈련·체력 단련은 25레벨마다 이후 레벨당 효과 ×1.5 (골드/스킬/동료까지 넣으면 성장이 폭주해서 두 개만)
export const BREAK_EVERY = 25;
export const BREAK_X = 1.5;
export const BREAK_IDS = ['atk', 'hp'];
export function breakMult(id, lv) { return BREAK_IDS.includes(id) ? Math.pow(BREAK_X, Math.floor((lv || 0) / BREAK_EVERY)) : 1; }
// 강화 효과 합: 25레벨 구간마다 그 구간 레벨의 효과가 ×1.5씩 커진다
export function upEff(id, lv) {
  lv = lv || 0;
  if (!BREAK_IDS.includes(id)) return lv;
  const K = Math.floor(lv / BREAK_EVERY), rem = lv - K * BREAK_EVERY;           // 등비수열 합 (레벨이 커도 계산량 일정)
  return BREAK_EVERY * (Math.pow(BREAK_X, K) - 1) / (BREAK_X - 1) + rem * Math.pow(BREAK_X, K);
}

// ---------- 유물 (명예로 구매, 환생해도 유지) ----------
// 명예 보너스(+5%/명예)는 '누적 명예' 기준이라 유물을 사도 줄지 않는다.
export const RELICS = [
  { id: 'horn',   c0: 1, cg: 1.32, v: 25,              k: 'atk' },     // 공격력 +25%/Lv (별도 곱연산)
  { id: 'grail',  c0: 1, cg: 1.32, v: 25,              k: 'hp' },      // 체력 +25%/Lv
  { id: 'crown',  c0: 2, cg: 1.36, v: 30,              k: 'gold' },    // 골드 +30%/Lv
  { id: 'fang',   c0: 3, cg: 1.38, v: 20,              k: 'boss' },    // 보스 피해 +20%/Lv
  { id: 'glass',  c0: 4, cg: 1.7,  v: 2,   max: 10,    k: 'btime' },   // 보스 제한시간 +2초/Lv
  { id: 'scroll', c0: 1, cg: 1.34, v: 25,              k: 'xp' },      // 경험치 +25%/Lv
  { id: 'sand',   c0: 5, cg: 1.8,  v: 4,   max: 10,    k: 'offline' }, // 오프라인 효율 +4%p/Lv (60% → 100%)
  { id: 'tome',   c0: 6, cg: 2.0,  v: 1,   max: 5,     k: 'stone' },   // 새 층 도달 소환석 +1/Lv
];
export const RELIC_BY_ID = Object.fromEntries(RELICS.map(r => [r.id, r]));
export function relicLv(s, id) { return (s.relic && s.relic[id]) || 0; }
export function relicCost(r, lv) { return Math.ceil(r.c0 * Math.pow(r.cg, lv)); }
export function relicVal(s, k) { const r = RELICS.find(x => x.k === k); return r ? r.v * relicLv(s, r.id) : 0; }
export function buyRelic(s, id) {
  const r = RELIC_BY_ID[id]; if (!r) return false;
  const lv = relicLv(s, id);
  if (r.max && lv >= r.max) return false;
  const c = relicCost(r, lv);
  if ((s.honorPts || 0) < c) return false;
  s.honorPts -= c; (s.relic ||= {})[id] = lv + 1;
  return true;
}
export function bossTime(s) { return BOSS_TIME + relicVal(s, 'btime'); }
export function offlineRate(s) { return Math.min(1, OFFLINE_RATE + relicVal(s, 'offline') / 100); }

// n레벨부터 k번 연속 구매 총액 (등비수열 합)
export function upgradeCostN(u, n, k) { let c = 0; for (let i = 0; i < k; i++) c += upgradeCost(u, n + i); return c; }

// ---------- 스킬 ----------
// active: 쿨타임마다 자동 시전 / passive: 공격할 때 확률 발동
export const SKILLS = [
  // 전사
  { id: 'war_bash',   cls: 'war', type: 'active',  name: '강타',        unlock: 1,  cd: 6,  eff: 'burst', v0: 6,  vl: 0.9, fx: 'slash',  desc: v => `DPS ${v.toFixed(1)}배 일격` },
  { id: 'war_cry',    cls: 'war', type: 'active',  name: '전투의 함성', unlock: 8,  cd: 24, eff: 'buff', dur: 12, v0: 40, vl: 8, buff: v => ({ atkP: v }), fx: 'aura', color: '#ff7a4a', desc: v => `12초간 공격력 +${v.toFixed(0)}%` },
  { id: 'war_wall',   cls: 'war', type: 'active',  name: '철벽',        unlock: 20, cd: 30, eff: 'buff', dur: 10, v0: 40, vl: 3, heal: 15, buff: v => ({ def: v }), fx: 'shield', color: '#c9d6ff', desc: v => `10초간 받는 피해 -${v.toFixed(0)}% · 체력 15% 회복` },
  { id: 'war_cleave', cls: 'war', type: 'passive', name: '연속 베기',   unlock: 3,  c0: 15, cl: 1.0, eff: 'extra', m0: 1.0, ml: 0.05, fx: 'slash2', desc: (c, m) => `${c.toFixed(1)}% 확률로 ${m.toFixed(2)}배 추가 타격` },
  { id: 'war_leech',  cls: 'war', type: 'passive', name: '흡혈 일격',   unlock: 12, c0: 10, cl: 0.8, eff: 'heal',  m0: 5,   ml: 0.5,  fx: 'blood',  desc: (c, m) => `${c.toFixed(1)}% 확률로 체력 ${m.toFixed(1)}% 흡수` },
  { id: 'war_crush',  cls: 'war', type: 'passive', name: '분쇄',        unlock: 28, c0: 6,  cl: 0.4, eff: 'extra', m0: 3.0, ml: 0.3,  fx: 'crush',  desc: (c, m) => `${c.toFixed(1)}% 확률로 ${m.toFixed(1)}배 분쇄` },
  // 도적
  { id: 'rog_assa',   cls: 'rog', type: 'active',  name: '암살',        unlock: 1,  cd: 12, eff: 'burst', v0: 6,  vl: 0.8, fx: 'dagger', desc: v => `DPS ${v.toFixed(1)}배 급소 찌르기` },
  { id: 'rog_rush',   cls: 'rog', type: 'active',  name: '그림자 질주', unlock: 8,  cd: 20, eff: 'buff', dur: 6, v0: 50, vl: 8, buff: v => ({ spd: v }), fx: 'aura', color: '#7ee08a', desc: v => `6초간 공격속도 +${v.toFixed(0)}` },
  { id: 'rog_steal',  cls: 'rog', type: 'active',  name: '소매치기',    unlock: 20, cd: 15, eff: 'gold', v0: 8, vl: 2, fx: 'gold', desc: v => `처치 골드 ${v.toFixed(0)}배 즉시 획득` },
  { id: 'rog_back',   cls: 'rog', type: 'passive', name: '급소 찌르기', unlock: 3,  c0: 20, cl: 1.0, eff: 'extra', m0: 0.8, ml: 0.06, fx: 'dagger2', desc: (c, m) => `${c.toFixed(1)}% 확률로 ${m.toFixed(2)}배 추가 타격` },
  { id: 'rog_poison', cls: 'rog', type: 'passive', name: '독 바르기',   unlock: 12, c0: 14, cl: 0.8, eff: 'extra', m0: 1.6, ml: 0.12, fx: 'poison', desc: (c, m) => `${c.toFixed(1)}% 확률로 중독 (${m.toFixed(1)}배)` },
  { id: 'rog_double', cls: 'rog', type: 'passive', name: '더블 스텝',   unlock: 28, c0: 10, cl: 0.8, eff: 'extra', m0: 1.0, ml: 0.08, fx: 'double', desc: (c, m) => `${c.toFixed(1)}% 확률로 한 번 더 공격 (${m.toFixed(2)}배)` },
  // 마법사
  { id: 'mag_fire',   cls: 'mag', type: 'active',  name: '화염구',      unlock: 1,  cd: 6,  eff: 'burst', v0: 4.5,  vl: 0.55, fx: 'fireball', desc: v => `DPS ${v.toFixed(1)}배 화염 폭발` },
  { id: 'mag_chain',  cls: 'mag', type: 'active',  name: '사슬 번개',   unlock: 8,  cd: 14, eff: 'burst', v0: 8,  vl: 1.0, fx: 'lightning', desc: v => `DPS ${v.toFixed(1)}배 번개` },
  { id: 'mag_ice',    cls: 'mag', type: 'active',  name: '얼음 폭풍',   unlock: 20, cd: 24, eff: 'burst', v0: 7,  vl: 0.8, weak: 40, dur: 6, fx: 'ice', desc: v => `DPS ${v.toFixed(1)}배 · 6초간 보스 공격력 -40%` },
  { id: 'mag_dart',   cls: 'mag', type: 'passive', name: '마법 화살',   unlock: 3,  c0: 25, cl: 1.0, eff: 'extra', m0: 0.6, ml: 0.04, fx: 'dart', desc: (c, m) => `${c.toFixed(1)}% 확률로 ${m.toFixed(2)}배 마법 화살` },
  { id: 'mag_surge',  cls: 'mag', type: 'passive', name: '마력 폭주',   unlock: 12, c0: 8,  cl: 0.6, eff: 'cdr',   m0: 2.0, ml: 0.1,  fx: 'surge', desc: (c, m) => `${c.toFixed(1)}% 확률로 모든 쿨타임 -${m.toFixed(1)}초` },
  { id: 'mag_arcane', cls: 'mag', type: 'passive', name: '비전 폭발',   unlock: 28, c0: 5,  cl: 0.3, eff: 'extra', m0: 4.0, ml: 0.4,  fx: 'mystic', desc: (c, m) => `${c.toFixed(1)}% 확률로 ${m.toFixed(1)}배 비전 폭발` },
  // 성직자
  { id: 'clr_smite',  cls: 'clr', type: 'active',  name: '신성한 심판', unlock: 1,  cd: 12, eff: 'burst', v0: 7,  vl: 0.8, bossX: 2, fx: 'holy', desc: v => `DPS ${v.toFixed(1)}배 (보스에게 2배)` },
  { id: 'clr_heal',   cls: 'clr', type: 'active',  name: '치유',        unlock: 8,  cd: 10, eff: 'heal', v0: 35, vl: 3, fx: 'heal', desc: v => `보스전에서 체력 ${v.toFixed(0)}% 회복` },
  { id: 'clr_bless',  cls: 'clr', type: 'active',  name: '축복',        unlock: 20, cd: 30, eff: 'buff', dur: 10, v0: 25, vl: 4, buff: v => ({ atkP: v, spd: v * 0.6, compP: v * 2 }), fx: 'aura', color: '#ffd98a', desc: v => `10초간 공격력 +${v.toFixed(0)}% · 동료 피해 +${(v * 2).toFixed(0)}%` },
  { id: 'clr_light',  cls: 'clr', type: 'passive', name: '성스러운 빛', unlock: 3,  c0: 18, cl: 0.8, eff: 'extra', m0: 1.2, ml: 0.05, heal: 2, fx: 'light', desc: (c, m) => `${c.toFixed(1)}% 확률로 ${m.toFixed(2)}배 + 체력 2% 회복` },
  { id: 'clr_shield', cls: 'clr', type: 'passive', name: '신앙의 방패', unlock: 12, c0: 8,  cl: 0.5, eff: 'shield', m0: 1.5, ml: 0.1, fx: 'shield', desc: (c, m) => `${c.toFixed(1)}% 확률로 ${m.toFixed(1)}초간 피해 50% 차단` },
  { id: 'clr_fortune',cls: 'clr', type: 'passive', name: '행운의 기도', unlock: 28, c0: 12, cl: 0.8, eff: 'gold',  m0: 3.0, ml: 0.2,  fx: 'gold', desc: (c, m) => `${c.toFixed(1)}% 확률로 골드 ${m.toFixed(1)}배` },

  // ---- v4.2 추가 스킬 (직업당 액티브 2 + 패시브 2)
  { id: 'war_whirl',   cls: 'war', type: 'active',  name: '회오리 베기', unlock: 32, cd: 18, eff: 'burst', v0: 12, vl: 1.6, fx: 'whirl', desc: v => `5연속 회전 베기, 총 DPS ${v.toFixed(1)}배` },
  { id: 'war_unbreak', cls: 'war', type: 'active',  name: '불굴',        unlock: 45, cd: 40, eff: 'timer', v0: 4,  vl: 0.4, heal: 25, fx: 'unbreak', desc: v => `보스전 제한시간 +${v.toFixed(1)}초 · 체력 25% 회복` },
  { id: 'war_counter', cls: 'war', type: 'passive', name: '반격',        unlock: 38, c0: 12, cl: 0.8, eff: 'extra', m0: 1.5, ml: 0.1,  fx: 'counter', desc: (c, m) => `${c.toFixed(1)}% 확률로 ${m.toFixed(1)}배 반격` },
  { id: 'war_wisdom',  cls: 'war', type: 'passive', name: '전장의 지혜', unlock: 55, c0: 10, cl: 0.6, eff: 'xp',    m0: 2.0, ml: 0.15, fx: 'xp', desc: (c, m) => `${c.toFixed(1)}% 확률로 경험치 ${m.toFixed(1)}배` },
  { id: 'rog_smoke',   cls: 'rog', type: 'active',  name: '연막탄',      unlock: 32, cd: 25, eff: 'buff', dur: 8, v0: 35, vl: 3, buff: v => ({ def: v, crit: v * 0.4 }), fx: 'smoke', color: '#a9b0c9', desc: v => `8초간 받는 피해 -${v.toFixed(0)}% · 치명타 +${(v * 0.4).toFixed(0)}%` },
  { id: 'rog_flurry',  cls: 'rog', type: 'active',  name: '칼날 폭풍',   unlock: 45, cd: 20, eff: 'burst', v0: 10, vl: 1.3, fx: 'flurry', desc: v => `단검 난사, DPS ${v.toFixed(1)}배` },
  { id: 'rog_plunder', cls: 'rog', type: 'passive', name: '약탈',        unlock: 38, c0: 10, cl: 0.7, eff: 'gold',  m0: 2.0, ml: 0.15, fx: 'gold', desc: (c, m) => `${c.toFixed(1)}% 확률로 골드 ${m.toFixed(1)}배` },
  { id: 'rog_exploit', cls: 'rog', type: 'passive', name: '치명적 약점', unlock: 55, c0: 6,  cl: 0.35, eff: 'extra', m0: 5.0, ml: 0.5,  fx: 'exploit', desc: (c, m) => `${c.toFixed(1)}% 확률로 ${m.toFixed(1)}배 약점 공격` },
  { id: 'mag_meteor',  cls: 'mag', type: 'active',  name: '메테오',      unlock: 32, cd: 30, eff: 'burst', v0: 18, vl: 2.5, fx: 'meteor', desc: v => `운석 낙하, DPS ${v.toFixed(1)}배` },
  { id: 'mag_warp',    cls: 'mag', type: 'active',  name: '시간 왜곡',   unlock: 45, cd: 45, eff: 'timer', v0: 5,  vl: 0.5, cdAll: 3, fx: 'warp', desc: v => `보스전 제한시간 +${v.toFixed(1)}초 · 다른 스킬 쿨타임 -3초` },
  { id: 'mag_reson',   cls: 'mag', type: 'passive', name: '원소 공명',   unlock: 38, c0: 12, cl: 0.8, eff: 'extra', m0: 1.2, ml: 0.08, fx: 'reson', desc: (c, m) => `${c.toFixed(1)}% 확률로 ${m.toFixed(2)}배 원소 폭발` },
  { id: 'mag_absorb',  cls: 'mag', type: 'passive', name: '지식의 흡수', unlock: 55, c0: 10, cl: 0.6, eff: 'xp',    m0: 2.0, ml: 0.15, fx: 'xp', desc: (c, m) => `${c.toFixed(1)}% 확률로 경험치 ${m.toFixed(1)}배` },
  { id: 'clr_sanct',   cls: 'clr', type: 'active',  name: '신성한 방벽', unlock: 32, cd: 35, eff: 'buff', dur: 10, v0: 45, vl: 3, buff: v => ({ def: v, regen: 3 }), fx: 'sanct', color: '#fff2b8', desc: v => `10초간 받는 피해 -${v.toFixed(0)}% · 재생 +3%/초` },
  { id: 'clr_judge',   cls: 'clr', type: 'active',  name: '천벌',        unlock: 45, cd: 22, eff: 'burst', v0: 12, vl: 1.5, bossX: 1.5, fx: 'judge', desc: v => `하늘의 빛기둥, DPS ${v.toFixed(1)}배 (보스에게 1.5배)` },
  { id: 'clr_prayer',  cls: 'clr', type: 'passive', name: '치유의 기도', unlock: 38, c0: 12, cl: 0.8, eff: 'heal',  m0: 4,   ml: 0.4,  fx: 'prayer', desc: (c, m) => `${c.toFixed(1)}% 확률로 체력 ${m.toFixed(1)}% 회복` },
  { id: 'clr_grace',   cls: 'clr', type: 'passive', name: '은총',        unlock: 55, c0: 10, cl: 0.6, eff: 'comp',  m0: 3.0, ml: 0.25, fx: 'grace', desc: (c, m) => `${c.toFixed(1)}% 확률로 동료 공격 ${m.toFixed(1)}배` },
];
export const SKILL_BY_ID = Object.fromEntries(SKILLS.map(s => [s.id, s]));
// ---------- 스킬 변이: Lv.10 스킬마다 둘 중 하나를 고른다 (언제든 바꿀 수 있고 환생해도 선택은 유지) ----------
export function mutKind(sd) {
  if (sd.type === 'active') return sd.eff === 'burst' ? 'burst' : sd.eff === 'buff' ? 'buff' : sd.eff === 'heal' ? 'heal' : sd.eff === 'timer' ? 'timer' : 'goldA';
  return { extra: 'extra', heal: 'pheal', cdr: 'pcdr', shield: 'pshield', gold: 'pgold', xp: 'pxp', comp: 'pcomp' }[sd.eff] || 'extra';
}
export const MUT_DEF = { burst: 'b', buff: 'b', heal: 'a', timer: 'a', goldA: 'a', extra: 'a', pheal: 'b', pcdr: 'a', pshield: 'a', pgold: 'a', pxp: 'b', pcomp: 'a' };
export function mutOf(s, sd) { if ((s.skills[sd.id] || 0) < 10) return null; const m = s.mut && s.mut[sd.id]; return m === 'a' || m === 'b' ? m : null; }
export function setMut(s, id, m) { const sd = SKILL_BY_ID[id]; if (!sd || sd.cls !== s.cls || (s.skills[id] || 0) < 10 || (m !== 'a' && m !== 'b' && m !== null)) return false; (s.mut ||= {}); if (m) s.mut[id] = m; else delete s.mut[id]; return true; }
export function mutPending(s) { return classSkills(s.cls || 'war').filter(sd => (s.skills[sd.id] || 0) >= 10 && !mutOf(s, sd)).length; }
function mutCd(s, sd) { const m = mutOf(s, sd), k = mutKind(sd); if (k === 'timer' && m === 'b') return 0.5; return 1; }

// ---------- 던전 이벤트: 진행하다 보면 선택지가 생기고, 열지 않으면 기본 선택으로 지나간다 ----------
export const EVENT_EVERY = 1200, EVENT_TTL = 7200, EVENT_MAX = 3, EBUFF_T = 1800;
export const EVENTS = [
  { id: 'altar',   o: [{ b: [['atkX', 1.4], ['hpX', 0.8]] }, { r: { goldMin: 20 } }, { r: { stones: 5 } }] },
  { id: 'smith',   o: [{ b: [['atkX', 1.25]], t: 3600 }, { r: { essF: 1 } }, { r: { goldMin: 5 } }] },
  { id: 'stairs',  o: [{ b: [['monX', 1.3], ['goldX', 2]] }, { r: { stones: 3 } }] },
  { id: 'wounded', o: [{ r: { shardsF: 1 } }, { r: { goldMin: 15 }, b: [['atkX', 0.9]] }, { b: [['xpX', 1.5]] }] },
  { id: 'chest',   o: [{ gamble: 0.7, r: { goldMin: 30 }, fail: [['hpX', 0.8], ['atkX', 0.9]] }, { r: { goldMin: 3 } }] },
  { id: 'spring',  o: [{ rand: [[['atkX', 1.5]], [['goldX', 1.8]], [['xpX', 2]]] }, { r: { boost: 1 } }, { b: [['hpX', 1.2]] }] },
  { id: 'library', o: [{ b: [['xpX', 2]] }, { r: { essF: 0.5 } }] },
  { id: 'merchant',o: [{ cost: 10, r: { stones: 30 } }, { r: { stones: 3 } }] },
  { id: 'spirit',  o: [{ b: [['armor', 80]] }, { b: [['goldX', 1.5]] }] },
  { id: 'crack',   need: s => riftUnlocked(s), o: [{ r: { keys: 1 } }, { r: { dust: 20 } }] },
];
export const EVENT_BY_ID = Object.fromEntries(EVENTS.map(e => [e.id, e]));
function goldPerMin(s, st) { const f = s.floor; return goldPerKill(f) * st.goldMult * Math.min(20, st.dps / monHp(f)) * 60; }
export function eventReward(s, o, st) {
  const r = {}, x = o.r || {};
  if (x.goldMin) r.gold = goldPerMin(s, st || stats(s)) * x.goldMin;
  if (x.stones) r.stones = x.stones;
  if (x.essF) r.ess = Math.ceil((3 + s.maxFloor / 10) * x.essF);
  if (x.shardsF) r.shards = Math.ceil((5 + s.maxFloor / 20) * x.shardsF);
  if (x.boost) r.boost = x.boost;
  if (x.keys) r.keys = x.keys;
  if (x.dust) r.dust = x.dust;
  return r;
}
export function eventOptOk(s, ev, i) { const o = EVENT_BY_ID[ev.id].o[i]; if (!o) return false; if (o.cost) return s.gold >= goldPerMin(s, stats(s)) * o.cost; return true; }
function addEbuff(s, list, t) { s.ebuffs ||= []; for (const [k, v] of list) s.ebuffs.push({ k, v, t: t || EBUFF_T }); if (s.ebuffs.length > 12) s.ebuffs.splice(0, s.ebuffs.length - 12); }
export function resolveEvent(s, idx, choice) {
  const ev = (s.events || [])[idx]; if (!ev) return null;
  const E = EVENT_BY_ID[ev.id]; const ci = choice == null ? E.o.length - 1 : choice;
  if (!eventOptOk(s, ev, ci)) return null;
  const o = E.o[ci], st = stats(s), out = { id: ev.id, c: ci, auto: choice == null, r: {}, b: [] };
  if (o.cost) s.gold -= goldPerMin(s, st) * o.cost;
  let buffs = o.b || null;
  if (o.gamble != null) { if (Math.random() < o.gamble) out.r = eventReward(s, o, st); else { buffs = o.fail; out.fail = true; } }
  else out.r = eventReward(s, o, st);
  if (o.rand) buffs = o.rand[Math.floor(Math.random() * o.rand.length)];
  if (buffs) { addEbuff(s, buffs, o.t); out.b = buffs; out.t = o.t || EBUFF_T; }
  const r = out.r; if (r.gold) s.gold += r.gold; if (r.dust) runeState(s).dust += r.dust; giveReward(s, r);
  s.events.splice(idx, 1);
  (s.evLog ||= []).unshift({ id: ev.id, c: ci, auto: out.auto, at: Date.now() }); s.evLog.length = Math.min(s.evLog.length, 10);
  return out;
}
function eventTick(s, dt, ev) {
  if (!s.cls || s.maxFloor < 5) return;
  s.events ||= [];
  for (const e of s.events) e.age = (e.age || 0) + dt;
  for (let i = s.events.length - 1; i >= 0; i--) if (s.events[i].age >= EVENT_TTL) { const r = resolveEvent(s, i, null); if (r) (ev.evAuto ||= []).push(r); }
  if (s.boss && s.boss.tower) return;
  s.evT = (s.evT || 0) + dt;
  if (s.evT >= EVENT_EVERY && s.events.length < EVENT_MAX) {
    s.evT = 0;
    const pool = EVENTS.filter(e => (!e.need || e.need(s)) && !s.events.some(x => x.id === e.id));
    const e = pool[Math.floor(Math.random() * pool.length)];
    if (e) { s.events.push({ id: e.id, f: s.floor, age: 0 }); ev.newEvent = e.id; }
  } else if (s.events.length >= EVENT_MAX) s.evT = Math.min(s.evT, EVENT_EVERY);
}
const EB_ADD = { armor: 1, critD: 1, spdA: 1 };
export function ebuffMult(s, k) { const add = EB_ADD[k]; let m = add ? 0 : 1; for (const b of s.ebuffs || []) if (b.k === k) m = add ? m + b.v : m * b.v; return m; }

// ---------- 초보자 가이드: 순서대로 하나씩, 달성하면 보상 ----------
const _sum = o => Object.values(o || {}).reduce((a, b) => a + (+b || 0), 0);
export const GUIDE = [
  { id: 'equip',   go: 'gear',    r: 10, ok: s => Object.values(s.equip || {}).filter(Boolean).length >= 3 },
  { id: 'upgrade', go: 'shop',    r: 10, ok: s => _sum(s.up) >= 10 },
  { id: 'skill',   go: 'skill',   r: 10, ok: s => _sum(s.skills) >= 3 || (s.rebirths || 0) > 0 },
  { id: 'boss',    go: 'dungeon', r: 15, ok: s => (s.bestFloor || s.maxFloor) >= 6 },
  { id: 'summon',  go: 'comp',    r: 20, ok: s => (s.pulls || 0) >= 10 },
  { id: 'team',    go: 'comp',    r: 15, ok: s => (s.team || []).length >= 3 },
  { id: 'mission', go: 'quest',   r: 15, ok: s => { const q = s.quest || {}; return !!(q.att && q.att.n) || Object.keys(q.dc || {}).length > 0 || Object.keys(q.wc || {}).length > 0; } },
  { id: 'floor20', go: 'dungeon', r: 20, ok: s => (s.bestFloor || s.maxFloor) >= 20 },
  { id: 'tower',   go: 'quest',   r: 20, ok: s => towerBestAll(s) >= 1 },
  { id: 'rebirth', go: 'rebirth', r: 30, ok: s => (s.rebirths || 0) >= 1 },
  { id: 'auto',    go: 'settings',r: 20, ok: s => Object.entries(s.auto || {}).some(([k, v]) => v === true && k !== 'boss' && AUTO.some(a => a.id === k && a.need(s))) },
  { id: 'relic',   go: 'rebirth', r: 30, ok: s => _sum(s.relic) >= 1 },
];
export function guideStep(s) { const n = (s.guide && s.guide.n) || 0; return n < GUIDE.length ? GUIDE[n] : null; }
export function guideClaim(s) { const g = guideStep(s); if (!g || !g.ok(s)) return 0; (s.guide ||= {}).n = ((s.guide.n) || 0) + 1; s.stones += g.r; return g.r; }

// ---------- 오늘의 던전: 모두 같은 날짜 시드로 Lv.1부터 15분 (즉시 계산) ----------
export const DAILY_TRIES = 3, DAILY_SEC = 900;
export const DAILY_MODS = [
  { id: 'bloodmoon', b: [['critD', 100], ['regenX', 0.3]] },
  { id: 'arcane',    b: [['skillX', 3], ['atkX', 0.6]] },
  { id: 'legion',    b: [['compX', 3], ['atkX', 0.7]] },
  { id: 'giants',    b: [['monX', 1.6], ['goldX', 2.5]] },
  { id: 'glass',     b: [['atkX', 1.8], ['hpX', 0.45]] },
  { id: 'fortress',  b: [['armor', 120], ['atkX', 0.8]] },
  { id: 'haste',     b: [['spdA', 80], ['hpX', 0.75]] },
];
export const DAILY_BLESS = [{ id: 'power', b: [['atkX', 1.3]] }, { id: 'fortune', b: [['goldX', 2]] }, { id: 'wisdom', b: [['xpX', 2]] }];
function hash32(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
export function dailyKey(now = Date.now()) { return localDay(now); }
export function dailyMod(day) { return DAILY_MODS[hash32('mod' + day) % DAILY_MODS.length]; }
export function dailyState(s, now = Date.now()) { const d = dailyKey(now); if (!s.daily || s.daily.day !== d) s.daily = { day: d, tries: DAILY_TRIES, best: null, last: null }; return s.daily; }
export function dailyRun(s, cls, bless, now = Date.now()) {
  const ds = dailyState(s, now); if (ds.tries <= 0 || !CLASSES[cls]) return null;
  const B = DAILY_BLESS.find(x => x.id === bless) || DAILY_BLESS[0];
  const day = ds.day, mod = dailyMod(day);
  let seed = hash32(day + '|' + cls + '|' + B.id) || 1;
  const rnd = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const realRandom = Math.random; Math.random = rnd;
  const OC = OWN_CACHE; OWN_CACHE = { ref: null, ver: -1, list: [] };
  let r;
  try {
    const d = newSave(); d.cls = cls; d.daily = null; d.noEv = true; d.noSig = true; d.quest = null; d.auto = {}; d.autoEquip = true; d.lastTick = 0; d.stones = 0;
    d.ebuffs = [...mod.b, ...B.b].map(([k, v]) => ({ k, v, t: 1e9 }));
    let bossT = 0, reachAt = 0, best = 1;
    for (let T = 0; T < DAILY_SEC; T += 0.5) {
      const e = {}; step(d, 0.5, e);
      if (d.maxFloor > best) { best = d.maxFloor; reachAt = T; }
      if (((T * 2) | 0) % 4 === 0) {
        for (let g2 = 0; g2 < 20 && d.sp > 0; g2++) { const c = classSkills(cls).filter(sd => skillUnlocked(d, sd) && (d.skills[sd.id] || 0) < SKILL_MAX).sort((a, b) => (d.skills[a.id] || 0) - (d.skills[b.id] || 0) || (a.type === 'active' ? -1 : 1)); if (!c.length || !learnSkill(d, c[0].id)) break; }
        for (let g3 = 0; g3 < 200; g3++) { let bu = null, bc = Infinity; for (const u of UPGRADES) { const c = upgradeCost(u, d.up[u.id] || 0); if (c < bc) { bc = c; bu = u; } } if (!bu || bc > d.gold) break; buyUpgrade(d, bu.id, 1); }
      }
      if (canChallenge(d)) { bossT += 0.5; if (bossT >= (d.bossFails ? 20 : 2)) { bossT = 0; challengeBoss(d); } }
    }
    r = { day, cls, bless: B.id, mod: mod.id, floor: best, at: Math.round(reachAt), lv: d.level, dps: stats(d).dps };
  } finally { Math.random = realRandom; OWN_CACHE = OC; COMP_VER++; }
  ds.tries--; ds.last = r;
  const prev = ds.best ? ds.best.floor : 0;
  r.reward = Math.max(0, r.floor - prev) + (prev ? 0 : 10);
  if (!ds.best || r.floor > ds.best.floor || (r.floor === ds.best.floor && r.at < ds.best.at)) ds.best = r;
  s.stones += r.reward;
  return r;
}
export function skillVal(sd, lv) { return sd.v0 + sd.vl * (Math.max(1, lv) - 1); }
export function passiveChance(sd, lv) { return sd.c0 + sd.cl * (Math.max(1, lv) - 1); }
export function passiveMult(sd, lv) { return sd.m0 + sd.ml * (Math.max(1, lv) - 1); }
const SKILL_TPL = {
  war_bash: 'burst', war_cry: 'buff.atk', war_wall: 'wall', war_cleave: 'p.extra', war_leech: 'p.heal', war_crush: 'p.extra', war_whirl: 'burst', war_unbreak: 'timer', war_counter: 'p.extra', war_wisdom: 'p.xp',
  rog_assa: 'burst', rog_rush: 'buff.spd', rog_steal: 'gold', rog_back: 'p.extra', rog_poison: 'p.extra', rog_double: 'p.extra', rog_smoke: 'smoke', rog_flurry: 'burst', rog_plunder: 'p.gold', rog_exploit: 'p.extra',
  mag_fire: 'burst', mag_chain: 'burst', mag_ice: 'ice', mag_dart: 'p.extra', mag_surge: 'p.cdr', mag_arcane: 'p.extra', mag_meteor: 'burst', mag_warp: 'warp', mag_reson: 'p.extra', mag_absorb: 'p.xp',
  clr_smite: 'bossx', clr_heal: 'heal', clr_bless: 'bless', clr_light: 'p.light', clr_shield: 'p.shield', clr_fortune: 'p.gold', clr_sanct: 'sanct', clr_judge: 'bossx', clr_prayer: 'p.heal', clr_grace: 'p.comp',
};
export function skillDesc(sd, lv) {
  const tpl = 'sk.' + (SKILL_TPL[sd.id] || 'burst');
  if (sd.type === 'active') {
    const v = skillVal(sd, lv);
    const v2 = sd.id === 'clr_bless' ? v * 2 : sd.id === 'rog_smoke' ? v * 0.4 : 0;
    return t(tpl, { v: String(Math.round(v * 10) / 10), v0: Math.round(v), v2: Math.round(v2), d: sd.dur, b: sd.bossX });
  }
  const c = passiveChance(sd, lv), m = passiveMult(sd, lv);
  return t(tpl, { c: String(Math.round(c * 10) / 10), m: String(Math.round(m * 100) / 100) });
}
export function classSkills(cls, type) { return SKILLS.filter(s => s.cls === cls && (!type || s.type === type)); }
export function skillUnlocked(s, sd) { return s.maxFloor >= sd.unlock; }
export function learnSkill(s, id) {
  const sd = SKILL_BY_ID[id];
  if (!sd || sd.cls !== s.cls || !skillUnlocked(s, sd)) return false;
  const lv = s.skills[id] || 0;
  if (lv >= SKILL_MAX || s.sp < 1) return false;
  s.sp--; s.skills[id] = lv + 1;
  if (sd.type === 'active' && lv === 0) s.cd[id] = 1;
  return true;
}
// 레벨 L까지 받는 스킬 포인트 총량: 레벨업마다 1 + 5레벨마다 1
export function spTotal(level) { level = Math.max(1, level || 1); return level - 1 + Math.floor(level / 5); }
// ---- 마스터리: 현재 직업 스킬을 모두 Lv.10으로 만든 뒤 남는 포인트를 쓰는 곳 (환생하면 초기화)
export const MASTERY = [
  { id: 'atk',  v: 3 },   // 공격력 +3% (별도 곱연산)
  { id: 'hp',   v: 3 },   // 체력 +3%
  { id: 'crit', v: 4 },   // 치명타 피해 +4%p
  { id: 'gold', v: 3 },   // 골드 +3%
];
export function masteryLv(s, id) { return (s.mastery && s.mastery[id]) || 0; }
export function masterySpent(s) { return MASTERY.reduce((a, m) => a + masteryLv(s, m.id), 0); }
export function skillsMaxed(s) { const L = classSkills(s.cls || 'war'); return L.filter(sd => (s.skills[sd.id] || 0) >= SKILL_MAX).length; }
export function masteryUnlocked(s) { return !!s.cls && skillsMaxed(s) >= classSkills(s.cls).length; }
export function buyMastery(s, id) {
  if (!masteryUnlocked(s) || (s.sp || 0) < 1 || !MASTERY.some(m => m.id === id)) return false;
  s.sp--; (s.mastery ||= {})[id] = masteryLv(s, id) + 1;
  return true;
}
function skillSpent(s) { return classSkills(s.cls || 'war').reduce((a, sd) => a + (s.skills[sd.id] || 0), 0); }
export function resetSkills(s) {
  const spent = skillSpent(s) + masterySpent(s);
  s.skills = {}; s.cd = {}; s.buffs = []; s.mastery = {};
  s.sp = (s.sp || 0) + spent;
  return spent;
}
export function changeClass(s, cls) {
  if (!CLASSES[cls]) return false;
  s.cls = cls;
  s.skills = {}; s.cd = {}; s.buffs = []; s.mastery = {};
  s.sp = spTotal(s.level);                 // 5레벨 보너스 포인트까지 정확히 돌려준다
  return true;
}

// ---------- 동료 ----------
export const C_RARITY = [
  { name: 'R',   color: '#cfd6e6', rate: 0.60, coef: 0.18 },
  { name: 'SR',  color: '#6fb7ff', rate: 0.30, coef: 0.28 },
  { name: 'SSR', color: '#c78dff', rate: 0.085, coef: 0.42 },
  { name: 'UR',  color: '#ffc35c', rate: 0.0125, coef: 0.65 },
  { name: 'LR',  color: '#ff6fae', rate: 0.002, coef: 1.0 },
  { name: 'MR',  color: '#ff4040', rate: 0.0005, coef: 1.6 },   // 신화 (v5.6)
];
export const C_MAXR = 5;
const C = (id, name, cls, r, tk, tv, ok, ov) => ({ id, name, cls, r, team: { k: tk, v: tv }, own: { k: ok, v: ov } });
export const COMPANIONS = [
  C('edmund',     '에드먼드',        'war', 0, 'atkP', 6,    'hpP', 2),
  C('donald',     '도널드',          'war', 0, 'hpP', 12,    'def', 0.8),
  C('joseph',     '조셉',            'war', 0, 'bossP', 8,   'atkP', 1.5),
  C('duvessa',    '검사 에리카',          'war', 1, 'atkP', 12,   'critDmg', 4),
  C('rupert',     '광전사 루퍼트',   'war', 1, 'critDmg', 25,'atkP', 3),
  C('asterion',   '외눈 거인 폴리페무스',      'war', 2, 'bossP', 25,  'hpP', 6),
  C('dispater',   '철의 군주 디스파테르', 'war', 2, 'def', 12, 'def', 2.5),
  C('cerebov',    '대악마 케레보프', 'war', 3, 'atkP', 40,   'atkP', 10),

  C('harold',     '사냥꾼 해럴드',   'rog', 0, 'crit', 2,    'goldP', 3),
  C('terence',    '테렌스',          'rog', 0, 'spd', 6,     'crit', 0.4),
  C('grinder',    '그라인더',        'rog', 0, 'goldP', 12,  'goldP', 3),
  C('sonja',      '소냐',            'rog', 1, 'crit', 4,    'critDmg', 5),
  C('maurice',    '도둑 모리스',     'rog', 1, 'goldP', 25,  'spd', 1.5),
  C('nessos',     '켄타우로스 네소스', 'rog', 2, 'spd', 18,  'crit', 1.2),
  C('jory',       '흡혈귀 조리',     'rog', 2, 'critDmg', 50,'atkP', 5),
  C('mara',       '환영술사 마라',   'rog', 3, 'crit', 10,   'critDmg', 20),

  C('jorgrun',    '요르그룬',        'mag', 0, 'skillP', 10, 'skillP', 3),
  C('dowan',      '네르갈레',            'mag', 0, 'cdr', 4,     'skillP', 2),
  C('jessica',    '제시카',          'mag', 0, 'atkP', 5,    'cdr', 0.5),
  C('louise',     '서리술사 판나르',          'mag', 1, 'skillP', 22, 'skillP', 5),
  C('nikola',     '매혹의 마녀', 'mag', 1, 'cdr', 8,     'atkP', 3),
  C('agnes',      '대마법사 아그네스', 'mag', 2, 'skillP', 40, 'cdr', 1.5),
  C('boris',      '리치 보리스',     'mag', 2, 'bossP', 30,  'skillP', 8),
  C('asmodeus',   '마왕 아스모데우스', 'mag', 3, 'skillP', 70, 'skillP', 18),

  C('crazy_yiuf', '광인 유이프',     'clr', 0, 'compP', 15,  'compP', 4),
  C('josephine',  '조세핀',          'clr', 0, 'regen', 0.6, 'hpP', 2),
  C('kirke',      '키르케',          'clr', 0, 'hpP', 12,    'goldP', 2),
  C('saint_roka', '성자 로카',       'clr', 1, 'compP', 30,  'compP', 8),
  C('zenata',     '수정의 록산',          'clr', 1, 'regen', 1.2, 'def', 1),
  C('khufu',      '사이키',     'clr', 2, 'def', 14,    'hpP', 6),
  C('menkaure',   '불꽃 천사 아즈라엘',        'clr', 2, 'compP', 50,  'atkP', 5),
  C('mennas',     '대천사 멘나스',   'clr', 3, 'regen', 3,   'compP', 20),
];
// ---- v4.5 추가 동료 (효과는 직업 성향 + 등급으로 결정)
const CLS_KEYS = { war: ['atkP', 'hpP', 'bossP', 'def', 'critDmg'], rog: ['crit', 'spd', 'goldP', 'critDmg', 'atkP'], mag: ['skillP', 'cdr', 'atkP', 'bossP', 'xpP'], clr: ['compP', 'regen', 'hpP', 'def', 'xpP'] };
const KEY_BASE = { atkP: 6, hpP: 12, bossP: 8, def: 4, critDmg: 15, crit: 2, spd: 6, goldP: 12, skillP: 10, cdr: 3, compP: 15, regen: 0.6, xpP: 10 };
const R_MULT = [1, 2, 3.5, 6, 10, 16];
const rnd1 = x => Math.round(x * 10) / 10;
const NEW_COMPS = [["orc_warrior","war",0],["gnoll_sergeant","war",0],["hobgoblin","war",0],["dwarf","war",0],["deep_elf_fighter","war",0],["vault_guard","war",0],["human","war",0],["orc_knight","war",1],["deep_elf_knight","war",1],["hell_knight","war",1],["grum","war",1],["frederick","war",1],["wiglaf","war",1],["death_knight","war",2],["juggernaut","war",2],["titan","war",2],["tiamat","war",3],["halfling","rog",0],["big_kobold","rog",0],["boggart","rog",0],["satyr","rog",0],["merfolk_javelineer","rog",0],["tengu","rog",0],["faun","rog",0],["deep_elf_master_archer","rog",1],["naga_sharpshooter","rog",1],["tengu_reaver","rog",1],["yaktaur_captain","rog",1],["urug","rog",1],["robin","rog",1],["vashnia","rog",2],["sojobo","rog",2],["ilsuiw","rog",2],["rakshasa","rog",3],["orc_wizard","mag",0],["deep_elf_mage","mag",0],["gnoll_shaman","mag",0],["kobold_demonologist","mag",0],["naga_mage","mag",0],["merfolk_aquamancer","mag",0],["salamander_mystic","mag",0],["deep_elf_sorcerer","mag",1],["deep_elf_conjurer","mag",1],["ogre_mage","mag",1],["tengu_conjurer","mag",1],["salamander_stormcaller","mag",1],["erolcha","mag",1],["aizul","mag",2],["ereshkigal","mag",2],["ancient_lich","mag",2],["efreet","mag",3],["orc_priest","clr",0],["deep_elf_priest","clr",0],["deep_troll_shaman","clr",0],["water_nymph","clr",0],["dryad","clr",0],["ironheart_preserver","clr",0],["deep_dwarf","clr",0],["orc_high_priest","clr",1],["deep_elf_high_priest","clr",1],["naga_ritualist","clr",1],["margery","clr",1],["maud","clr",1],["cherub","clr",1],["angel","clr",2],["daeva","clr",2],["sphinx","clr",2],["seraph","clr",3],["balrug","war",4],["shadow_fiend","rog",4],["xtahua","mag",4],["ophan","clr",4],["iron_giant","war",3],["chuck","war",3],["giaggostuono","war",4],["jormungandr","war",4],["ijyb","rog",3],["natasha","rog",3],["lamia","rog",4],["tiamat_black","rog",4],["sigmund","mag",3],["murray","mag",3],["tiamat_red","mag",4],["geryon","mag",4],["norris","clr",3],["dissolution","clr",3],["tiamat_white","clr",4],["tiamat_purple","clr",4],["azrael","war",5],["mnoleg","rog",5],["lom_lobon","mag",5],["gloorx_vloq","clr",5]];
const LR_FX = { balrug: ['atkP', 70, 'atkP', 15], shadow_fiend: ['critDmg', 110, 'critDmg', 28], xtahua: ['skillP', 110, 'skillP', 28], ophan: ['compP', 120, 'compP', 30],
  // v5.2 추가 LR
  giaggostuono: ['atkP', 75, 'atkP', 16], jormungandr: ['bossP', 120, 'bossP', 28], lamia: ['goldP', 120, 'goldP', 30], tiamat_black: ['atkP', 75, 'atkP', 16],
  tiamat_red: ['bossP', 120, 'bossP', 28], geryon: ['skillP', 105, 'skillP', 26], tiamat_white: ['hpP', 140, 'hpP', 32], tiamat_purple: ['compP', 125, 'compP', 30],
  // v5.6 신화(MR)
  azrael: ['atkP', 120, 'atkP', 26], mnoleg: ['critDmg', 180, 'critDmg', 45], lom_lobon: ['skillP', 180, 'skillP', 45], gloorx_vloq: ['compP', 200, 'compP', 50] };
NEW_COMPS.forEach(([id, cls, r], i) => {
  if (LR_FX[id]) { COMPANIONS.push(C(id, id, cls, r, ...LR_FX[id])); return; }
  const ks = CLS_KEYS[cls], tk = ks[i % 5], ok = ks[(i + 2) % 5];
  COMPANIONS.push(C(id, id, cls, r, tk, rnd1(KEY_BASE[tk] * R_MULT[r] * (0.9 + 0.05 * (i % 5))), ok, rnd1(KEY_BASE[ok] * R_MULT[r] * 0.25)));
});
export const COMP_BY_ID = Object.fromEntries(COMPANIONS.map(c => [c.id, c]));

// ---- 동료 각성 스킬: 3각성 패시브, 5각성 액티브 (파티에 편성했을 때만 발동)
export const CSK_AW_P = 3, CSK_AW_A = 5;
const CSK_RS = [1, 1.4, 2, 3, 4.5, 6.5];      // 패시브·폭딜 등급 배율
const CSK_RB = [1, 1.25, 1.6, 2.1, 2.8, 3.6]; // 버프·회복 등급 배율
const CSK_P = {
  war: [{ id: 'cleave', eff: 'self', v: 30 }, { id: 'guard', eff: 'stat', k: 'def', v: 4 }],
  rog: [{ id: 'precise', eff: 'self', v: 30 }, { id: 'loot', eff: 'stat', k: 'goldP', v: 15 }],
  mag: [{ id: 'overload', eff: 'self', v: 30 }, { id: 'haste', eff: 'stat', k: 'cdr', v: 3 }],
  clr: [{ id: 'mend', eff: 'stat', k: 'regen', v: 0.5 }, { id: 'inspire', eff: 'allcomp', v: 10 }],
};
const CSK_A = {
  war: [{ id: 'charge', eff: 'burst', v: 8, cd: 20 }, { id: 'wall', eff: 'buff', k: 'def', v: 20, dur: 8, cd: 30 }],
  rog: [{ id: 'assassin', eff: 'burst', v: 10, cd: 24 }, { id: 'smoke', eff: 'buff', k: 'crit', v: 10, dur: 8, cd: 28 }],
  mag: [{ id: 'meteor', eff: 'burst', v: 9, cd: 24, bossX: 1.5 }, { id: 'warp', eff: 'cdr', v: 3, cd: 30 }],
  clr: [{ id: 'heal', eff: 'heal', v: 20, cd: 18 }, { id: 'bless', eff: 'buff', k: 'atkP', v: 20, dur: 10, cd: 30 }],
};
{ const cnt = {}; for (const c of COMPANIONS) { const i = cnt[c.cls] = (cnt[c.cls] ?? -1) + 1; c.pv = i % 2; c.av = Math.floor(i / 2) % 2; } }
const r1 = x => Math.round(x * 10) / 10;
export function compPassive(c) { const b = CSK_P[c.cls][c.pv]; return { ...b, val: r1(b.v * CSK_RS[c.r]) }; }
export function compActive(c) { const b = CSK_A[c.cls][c.av]; return { ...b, val: r1(b.v * (b.eff === 'burst' ? CSK_RS : CSK_RB)[c.r]) }; }
export function compSkillName(sk) { return t('csk.' + sk.id); }
export function compSkillDesc(sk) {
  if (sk.eff === 'self') return t('csk.d.self', { v: sk.val });
  if (sk.eff === 'allcomp') return t('csk.d.allcomp', { v: sk.val });
  if (sk.eff === 'stat') return statText(sk.k, sk.val);
  if (sk.eff === 'burst') return t(sk.bossX ? 'csk.d.burstBoss' : 'csk.d.burst', { v: sk.val, cd: sk.cd, b: sk.bossX });
  if (sk.eff === 'buff') return t('csk.d.buff', { s: statText(sk.k, sk.val), d: sk.dur, cd: sk.cd });
  if (sk.eff === 'cdr') return t('csk.d.cdr', { v: sk.val, cd: sk.cd });
  if (sk.eff === 'heal') return t('csk.d.heal', { v: sk.val, cd: sk.cd });
  return '';
}
const OLD_COMP_IDS = ['edmund', 'crazy_yiuf', 'jessica', 'jorgrun', 'duvessa', 'grinder', 'josephine', 'donald', 'agnes', 'jory', 'asterion', 'asmodeus', 'cerebov'];

export const PULL_COST = 10;
export const PULL10_COST = 90;
export const AWAKEN_MAX = 5;
export const PITY = 50;
// ---- 동료 조각: 5각성 이후 중복은 등급별 조각으로 바뀌고, 조각으로 동료 레벨을 올린다
export const SHARD_GAIN = [2, 4, 8, 20, 60, 200];   // R · SR · SSR · UR · LR · MR
export const CLV_MAX = 20;
export const CLV_STEP = 0.1;                       // 레벨당 동행·보유 효과·공격력 +10% (곱연산)
const CLV_C0 = [3, 6, 12, 24, 40, 70];                 // 높은 등급일수록 훨씬 비싸게 (UR·LR은 효과 원값이 커서)
export function compLvCost(c, lv) { return Math.ceil(CLV_C0[c.r] * Math.pow(1.25, lv || 0)); }
export function compLvMult(lv) { return 1 + CLV_STEP * (lv || 0); }
export function compLevelUp(s, id) {
  const c = COMP_BY_ID[id], st = (s.comp || {})[id];
  if (!c || !st) return false;
  const lv = st.lv || 0;
  if (lv >= CLV_MAX) return false;
  const cost = compLvCost(c, lv);
  if ((s.shards || 0) < cost) return false;
  s.shards -= cost; st.lv = lv + 1; COMP_VER++; qAdd(s, 'clv', 1);
  return true;
}
// 일괄 레벨업: 파티 동료를 먼저(가장 싼 레벨부터), 그다음 나머지 보유 동료를 가장 싼 순서로 조각이 떨어질 때까지
export function compLevelUpAll(s) {
  const owned = Object.keys(s.comp || {}).filter(id => COMP_BY_ID[id]);
  const team = new Set(s.team || []);
  let n = 0, spent = 0; const ups = {};
  for (const group of [owned.filter(id => team.has(id)), owned.filter(id => !team.has(id))]) {
    for (let g = 0; g < 20000; g++) {
      let best = null, bc = Infinity;
      for (const id of group) { const st = s.comp[id]; if ((st.lv || 0) >= CLV_MAX) continue; const c = compLvCost(COMP_BY_ID[id], st.lv || 0); if (c < bc) { bc = c; best = id; } }
      if (!best || bc > (s.shards || 0)) break;
      compLevelUp(s, best); n++; spent += bc; ups[best] = (ups[best] || 0) + 1;
    }
  }
  return { n, spent, ups };
}
const _lv = (s, c) => (((s && s.comp) || {})[c.id] || {}).lv || 0;
export function teamValue(s, c, aw, lv) {
  const syn = s.cls === c.cls ? 1.5 : 1;
  return c.team.v * (1 + 0.2 * (aw || 0)) * syn * compLvMult(lv ?? _lv(s, c));
}
export function ownValue(c, aw, lv) { return c.own.v * (1 + 0.25 * (aw || 0)) * compLvMult(lv); }
export function compCoef(c, aw, lv) { return C_RARITY[c.r].coef * (1 + 0.2 * (aw || 0)) * compLvMult(lv); }
export function stoneDiscount(s) { return Math.min(0.5, 0.05 * (s.rebirths || 0)); }
export function stonePrice(s) { return Math.ceil(600 * Math.pow(1.28, s.stoneBuys || 0) * (1 - stoneDiscount(s))); }

export function rollCompanion(s, minR) {
  const x = Math.random();
  // R 60% · SR 30% · SSR 8.5% · UR 1.25% · LR 0.2% · MR 0.05%
  let r = x < 0.60 ? 0 : x < 0.90 ? 1 : x < 0.985 ? 2 : x < 0.9975 ? 3 : x < 0.9995 ? 4 : 5;
  if (minR != null && r < minR) {
    const y = Math.random();
    if (minR === 1) r = y < 0.75 ? 1 : y < 0.965 ? 2 : y < 0.995 ? 3 : y < 0.999 ? 4 : 5;
    else r = y < 0.86 ? 2 : y < 0.985 ? 3 : y < 0.998 ? 4 : 5;
  }
  let pool = COMPANIONS.filter(c => c.r === r);
  if (s.banner && s.banner !== 'all' && Math.random() < 0.5) {
    const p2 = pool.filter(c => c.cls === s.banner);
    if (p2.length) pool = p2;
  }
  return pool[Math.floor(Math.random() * pool.length)];
}
let OWN_CACHE = { ref: null, ver: -1, list: [] };
let COMP_VER = 0;
function ownSumCached(s) {
  const comp = s.comp || {};
  if (OWN_CACHE.ref === comp && OWN_CACHE.ver === COMP_VER) return OWN_CACHE.list;
  const acc = {};
  for (const [id, st] of Object.entries(comp)) { const c = COMP_BY_ID[id]; if (c) acc[c.own.k] = (acc[c.own.k] || 0) + ownValue(c, st.aw, st.lv) * cgMult(s, id, 'sigil'); }
  OWN_CACHE = { ref: comp, ver: COMP_VER, list: Object.entries(acc) };
  return OWN_CACHE.list;
}
export function gainCompanion(s, c) {
  COMP_VER++;
  const cur = s.comp[c.id];
  if (!cur) {
    s.comp[c.id] = { n: 1, aw: 0 };
    if (s.team.length < TEAM_MAX) s.team.push(c.id);
    if (c.r >= 3) cgAutoMaybe(s);   // UR 이상 새 동료면 장비를 다시 나눔 (낮은 등급은 어차피 뒤쪽)
    return { c, isNew: true, aw: 0 };
  }
  cur.n++;
  if (cur.aw < AWAKEN_MAX) { cur.aw++; if (c.r >= 3) cgAutoMaybe(s); return { c, isNew: false, aw: cur.aw }; }
  const sh = SHARD_GAIN[c.r];
  s.shards = (s.shards || 0) + sh;
  return { c, isNew: false, aw: cur.aw, shards: sh };
}
export function pull(s, ten) {
  const cost = ten ? PULL10_COST : PULL_COST;
  if (s.stones < cost) return null;
  s.stones -= cost;
  const n = ten ? 10 : 1;
  const out = [];
  for (let i = 0; i < n; i++) {
    let minR = null;
    if ((s.pity || 0) + 1 >= PITY) minR = 2;
    else if (ten && i === n - 1 && !out.some(o => o.c.r >= 1)) minR = 1;
    const c = rollCompanion(s, minR);
    s.pity = c.r >= 2 ? 0 : (s.pity || 0) + 1;
    out.push(gainCompanion(s, c));
  }
  s.pulls += n; s.mile = (s.mile || 0) + n; qAdd(s, 'pull', n);
  return out;
}
export const PRESET_MAX = 3;
export function savePreset(s, i) {
  s.presets = s.presets || [];
  const old = s.presets[i] && s.presets[i].name;
  s.presets[i] = { name: old && !/^프리셋 \d$/.test(old) ? old : null, team: (s.team || []).slice() };
  return true;
}
export function renamePreset(s, i, name) {
  const p = (s.presets || [])[i]; if (!p || i < 0 || i >= PRESET_MAX) return false;
  const n = String(name == null ? '' : name).replace(/[<>&"'\u0000-\u001f]/g, '').trim().slice(0, 24).trim();
  p.name = n || null; return true;
}
export function applyPreset(s, i) {
  const p = (s.presets || [])[i];
  if (!p || !p.team) return false;
  s.team = p.team.filter(id => s.comp && s.comp[id]).slice(0, TEAM_MAX); cgAutoMaybe(s);
  return true;
}
// ---------- 코스튬: 장착 장비와 상관없이 겉모습만 바꾼다 ----------
// base(외형)·hair(머리)는 몸 자체를 바꾸는 칸, offhand(보조손)는 장비 칸이 없는 순수 꾸미기 칸
export const COS_SLOTS = ['base', 'hair', 'head', 'body', 'cloak', 'weapon', 'offhand', 'gloves', 'boots'];
export const COSTUMES = [{"id":"weapon_wyrmbane","slot":"weapon"},{"id":"weapon_plutoniumsword","slot":"weapon"},{"id":"weapon_majin","slot":"weapon"},{"id":"weapon_eos","slot":"weapon"},{"id":"weapon_elementalstaff","slot":"weapon"},{"id":"weapon_finisher","slot":"weapon"},{"id":"body_gandalfg","slot":"body"},{"id":"body_dragonscgold","slot":"body"},{"id":"body_dragonscshadow","slot":"body"},{"id":"body_coatred","slot":"body"},{"id":"body_robeblackred","slot":"body"},{"id":"body_karate","slot":"body"},{"id":"head_artdragonhelm","slot":"head"},{"id":"head_gandalf","slot":"head"},{"id":"head_blackhorn","slot":"head"},{"id":"head_vikinggold","slot":"head"},{"id":"head_featherred","slot":"head"},{"id":"head_wizardblackred","slot":"head"},{"id":"cloak_black","slot":"cloak"},{"id":"cloak_cyan","slot":"cloak"},{"id":"cloak_white","slot":"cloak"},{"id":"cloak_yellow","slot":"cloak"},{"id":"boots_bluegold","slot":"boots"},{"id":"boots_meshwhite","slot":"boots"},{"id":"boots_middlepurple","slot":"boots"},{"id":"gloves_glovered","slot":"gloves"},{"id":"gloves_glovewhite","slot":"gloves"},{"id":"gloves_claws","slot":"gloves"},{"id":"weapon_stafffancy","slot":"weapon"},{"id":"weapon_sceptre","slot":"weapon"},{"id":"weapon_katanaslant","slot":"weapon"},{"id":"weapon_rapier","slot":"weapon"},{"id":"weapon_greatbow","slot":"weapon"},{"id":"weapon_rodmoon","slot":"weapon"},{"id":"weapon_rodruby","slot":"weapon"},{"id":"weapon_staffruby","slot":"weapon"},{"id":"weapon_tridentelec","slot":"weapon"},{"id":"weapon_swordtwist","slot":"weapon"},{"id":"weapon_quarterstaffjester","slot":"weapon"},{"id":"weapon_enchantressdagger","slot":"weapon"},{"id":"body_dresswhite","slot":"body"},{"id":"body_dresspink","slot":"body"},{"id":"body_dressblue","slot":"body"},{"id":"body_dressblack","slot":"body"},{"id":"body_dressgreen","slot":"body"},{"id":"body_arwen","slot":"body"},{"id":"body_jessica","slot":"body"},{"id":"body_roberainbow","slot":"body"},{"id":"body_robejester","slot":"body"},{"id":"body_chinared","slot":"body"},{"id":"body_chunli","slot":"body"},{"id":"body_maxwell","slot":"body"},{"id":"body_robeofnight","slot":"body"},{"id":"body_robeclouds","slot":"body"},{"id":"body_dragonarmpearl","slot":"body"},{"id":"body_faeriedragonarmour","slot":"body"},{"id":"body_pj","slot":"body"},{"id":"body_plateblack","slot":"body"},{"id":"head_bunnypink","slot":"head"},{"id":"head_bunnywhite","slot":"head"},{"id":"head_bunnyblack","slot":"head"},{"id":"head_crowngold1","slot":"head"},{"id":"head_crowngold2","slot":"head"},{"id":"head_crowngold3","slot":"head"},{"id":"head_bear","slot":"head"},{"id":"head_healer","slot":"head"},{"id":"head_clown1","slot":"head"},{"id":"head_helmplume","slot":"head"},{"id":"head_hoodwhite","slot":"head"},{"id":"head_isildur","slot":"head"},{"id":"head_featherwhite","slot":"head"},{"id":"head_taisomagenta","slot":"head"},{"id":"cloak_pink","slot":"cloak"},{"id":"cloak_magenta","slot":"cloak"},{"id":"cloak_dragonskin","slot":"cloak"},{"id":"cloak_blue","slot":"cloak"},{"id":"boots_pink","slot":"boots"},{"id":"boots_middlegold","slot":"boots"},{"id":"boots_shortpurple","slot":"boots"},{"id":"boots_pj","slot":"boots"},{"id":"gloves_glovegold","slot":"gloves"},{"id":"gloves_glovepurple","slot":"gloves"},{"id":"gloves_glovechunli","slot":"gloves"},{"id":"gloves_gauntletblue","slot":"gloves"},{"id":"gloves_gloveshortwhite","slot":"gloves"},{"id":"offhand_bucklerspiral","slot":"offhand"},{"id":"offhand_lshieldgold","slot":"offhand"},{"id":"offhand_lshieldlouise","slot":"offhand"},{"id":"offhand_shieldknightblue","slot":"offhand"},{"id":"offhand_shieldofresistance","slot":"offhand"},{"id":"offhand_bucklerspriggan","slot":"offhand"},{"id":"base_humanf","slot":"base","free":1},{"id":"base_humanm","slot":"base","free":1},{"id":"base_elff","slot":"base","free":1},{"id":"base_elfm","slot":"base","free":1},{"id":"base_deepelff","slot":"base"},{"id":"base_demigodf","slot":"base"},{"id":"base_demigodm","slot":"base"},{"id":"base_vampiref","slot":"base"},{"id":"base_vampirem","slot":"base"},{"id":"base_gargoylem","slot":"base"},{"id":"base_tenguwingedf","slot":"base"},{"id":"base_sprigganf","slot":"base"},{"id":"base_demonspawnpink","slot":"base"},{"id":"base_draconianwhitef","slot":"base"},{"id":"hair_femyellow","slot":"hair","free":1},{"id":"hair_femred","slot":"hair","free":1},{"id":"hair_femblack","slot":"hair","free":1},{"id":"hair_femwhite","slot":"hair","free":1},{"id":"hair_arwen","slot":"hair","free":1},{"id":"hair_pigtailsyellow","slot":"hair","free":1},{"id":"hair_pigtailsbrown","slot":"hair","free":1},{"id":"hair_pigtailred","slot":"hair","free":1},{"id":"hair_ponytailyellow","slot":"hair","free":1},{"id":"hair_knotred","slot":"hair","free":1},{"id":"hair_elfblack","slot":"hair","free":1},{"id":"hair_legolas","slot":"hair","free":1},{"id":"hair_djinn1","slot":"hair","free":1},{"id":"hair_brown1","slot":"hair","free":1}];
export const COS_BY_ID = Object.fromEntries(COSTUMES.map(c => [c.id, c]));
const COS_TIERS = { weapon: 8, body: 8, head: 6, cloak: 5, boots: 5, gloves: 5, offhand: 0, base: 0, hair: 0 };
const COS_NOHIDE = { body: 1, base: 1, hair: 1, offhand: 1 };   // hair·offhand는 "장비대로"가 곧 없음
export function cosHas(s, id) { const z = COS_BY_ID[id]; return !!z && (!!z.free || ((s.cos || {}).own || []).includes(id)); }
function cosState(s) { const c = s.cos || (s.cos = {}); c.own ||= []; c.look ||= {}; c.seen ||= {}; return c; }
function markSeen(s, it) { if (!it || !COS_TIERS[it.s]) return; const c = cosState(s); c.seen[it.s] = Math.max(c.seen[it.s] ?? -1, it.t); }
export function lookOf(s, slot) { const v = ((s.cos || {}).look || {})[slot]; return v || 'auto'; }
export function lookOptions(s, slot) {
  const c = cosState(s), out = ['auto'];
  if (!COS_NOHIDE[slot]) out.push('hide');
  const mx = Math.max(c.seen[slot] ?? -1, s.equip[slot] ? s.equip[slot].t : -1);
  for (let t = 0; t <= mx && t < COS_TIERS[slot]; t++) out.push('t' + t);
  for (const z of COSTUMES) if (z.slot === slot && (z.free || c.own.includes(z.id))) out.push(z.id);
  return out;
}
export function setLook(s, slot, v) { if (!(slot in COS_TIERS) || !lookOptions(s, slot).includes(v)) return false; const c = cosState(s); if (v === 'auto') delete c.look[slot]; else c.look[slot] = v; return true; }
export function cosCount(s) { const own = cosState(s).own; return COSTUMES.filter(z => z.free || own.includes(z.id)).length; }

// ---------- 펫: 골드로 뽑고(가진 펫은 안 나옴) 골드로 키우고, 효과도 골드로 다시 뽑는다. 환생·윤회해도 남는다 ----------
export const PETS = ['quokka', 'cat6', 'cat9', 'jackal', 'hound', 'wolf', 'hellhound', 'blackbear', 'polarbear', 'sheep', 'holyswine', 'butterfly', 'bat', 'firebat', 'raiju', 'wyvern'];
export const PET_MAX = 100, PET_UNLOCK = 30;
// 효과 종류: v = 전설·Lv.100 기준 수치. flat이면 그대로 더하고, 아니면 해당 배율에 따로 곱한다 (다른 보너스에 묻히지 않게)
export const PET_FX = { atk: { v: 15 }, hp: { v: 22 }, skill: { v: 15 }, basic: { v: 40 }, comp: { v: 22 }, boss: { v: 15 }, crit: { v: 8, flat: 1 }, haste: { v: 8, flat: 1 }, gold: { v: 30 }, xp: { v: 30 } };
export const PET_FX_KEYS = Object.keys(PET_FX);
export const PET_TIER_W = [40, 30, 18, 9, 3], PET_TIER_M = [0.4, 0.55, 0.7, 0.85, 1];
// 펫 저금통: 사냥으로 번 골드의 10%만큼이 따로 쌓인다 (골드에서 빼지 않음 → 자동 강화와 골드를 다투지 않음)
// 가격 기준 petRef(f) = "그 층에서 저금통이 1분에 모이는 양" (실제 세이브 B197 실측 골드 7e37/분, 층당 ×1.57 = 시뮬 기울기)
//  · n번째 펫 뽑기 = B(30+10n) 기준 10분어치 → 펫이 층을 따라 하나씩 풀린다 (16번째 ≈ B180)
//  · Lv.L → L+1 = B(2L+2) 기준 5분어치 → 그 층쯤 오면 그 레벨까지 올릴 수 있다 (B200 ≈ Lv.100)
//  · 효과 다시 뽑기 = 최고 기록 층 기준 2분어치
//  층에 묶어 둬서 환생 직후 싸게 사는 꼼수가 없다
export const PET_POT = 0.1, PET_DRAW_MIN = 10, PET_LV_MIN = 5, PET_ROLL_MIN = 2;
export function petRef(f) { return Math.pow(10, 36.85 + 0.196 * (f - 197)); }
function petState(s) { const p = s.pets || (s.pets = {}); p.own ||= {}; if (p.act === undefined) p.act = null; if (p.cand === undefined) p.cand = null; p.pot ||= 0; p.ppm ||= 0; p.peak ||= 0; p.pin ||= 0; p.pt ||= 0; return p; }
export function petPot(s) { return petState(s).pot; }
export function petDeposit(s) { const g = Math.max(0, s.gold || 0); if (!g || !petUnlocked(s)) return 0; petState(s).pot += g; s.gold = 0; return g; }
function petGain(s, g) { if (!petUnlocked(s)) return; const p = petState(s), v = g * PET_POT; p.pot += v; p.pin += v; }
function petTick(s, dt) { const p = s.pets; if (!p || !petUnlocked(s)) return; p.pt = (p.pt || 0) + dt; if (p.pt < 60) return; const m = p.pt / 60, r = (p.pin || 0) / m; p.ppm = p.ppm ? p.ppm * 0.9 + r * 0.1 : r; p.peak = Math.max(p.ppm, (p.peak || 0) * Math.pow(0.9995, m)); p.pin = 0; p.pt = 0; }
const petBest = s => Math.max(s.bestFloor || 0, s.maxFloor || 0);
export function petUnlocked(s) { return petBest(s) >= PET_UNLOCK; }
export function petCap(s) { return Math.min(PET_MAX, Math.max(1, Math.floor(petBest(s) / 2))); }   // 최고 기록 B200이면 Lv.100
export function petOwned(s) { return Object.keys(petState(s).own); }
export function petLeft(s) { const o = petState(s).own; return PETS.filter(id => !o[id]); }
export function petDrawCost(s) { return Math.ceil(PET_DRAW_MIN * petRef(PET_UNLOCK + 10 * Object.keys(petState(s).own).length)); }
export function petRollCost(s) { return Math.ceil(PET_ROLL_MIN * petRef(Math.max(PET_UNLOCK, petBest(s)))); }
export function petLvCost(s, lv) { return Math.ceil(PET_LV_MIN * petRef(2 * (lv + 1))); }
function rollPetFx() { const k = PET_FX_KEYS[Math.floor(Math.random() * PET_FX_KEYS.length)]; let x = Math.random() * 100, r = 0; while (r < 4 && x >= PET_TIER_W[r]) { x -= PET_TIER_W[r]; r++; } return { k, r }; }
export function petVal(p) { return p && PET_FX[p.k] ? PET_FX[p.k].v * PET_TIER_M[p.r] * (0.1 + 0.9 * Math.min(PET_MAX, p.lv) / PET_MAX) : 0; }
export function petAgg(s) { const o = {}; for (const k of PET_FX_KEYS) o[k] = 0; const own = ((s.pets || {}).own) || {}; for (const id in own) { const p = own[id]; if (PET_FX[p.k]) o[p.k] += petVal(p); } return o; }
export function petDraw(s) {
  if (!petUnlocked(s)) return null; const left = petLeft(s); if (!left.length) return null;
  const p = petState(s), c = petDrawCost(s); if (p.pot < c) return null; p.pot -= c;
  const id = left[Math.floor(Math.random() * left.length)], fx = rollPetFx();
  p.own[id] = { lv: 1, k: fx.k, r: fx.r }; if (!p.act) p.act = id; return { id, ...p.own[id] };
}
export function petLevelUp(s, id) { const ps = petState(s), p = ps.own[id]; if (!p || p.lv >= petCap(s)) return false; const c = petLvCost(s, p.lv); if (ps.pot < c) return false; ps.pot -= c; p.lv++; return true; }
export function petRoll(s, id) { const ps = petState(s), p = ps.own[id]; if (!p) return null; const c = petRollCost(s); if (ps.pot < c) return null; ps.pot -= c; ps.cand = { id, ...rollPetFx() }; return ps.cand; }
export function petKeep(s, accept) { const ps = petState(s), c = ps.cand; if (!c) return false; if (accept && ps.own[c.id]) { ps.own[c.id].k = c.k; ps.own[c.id].r = c.r; } ps.cand = null; return true; }
// 자동 다시 뽑기: 원하는 효과(k, 'any'면 아무거나)·최소 등급(minR)이 나올 때까지 최대 n번 굴린다. 나오면 바로 적용
export function petWant(p, k, minR) { return !!p && (k === 'any' || p.k === k) && p.r >= minR; }
export function petAutoOdds(k, minR) { let w = 0; for (let r = minR; r < 5; r++) w += PET_TIER_W[r]; return (k === 'any' ? 1 : 1 / PET_FX_KEYS.length) * w / 100; }
export function petAutoRoll(s, id, k, minR, n) {
  const ps = petState(s), p = ps.own[id]; if (!p || (k !== 'any' && !PET_FX[k]) || !(minR >= 0 && minR <= 4)) return null;
  let rolls = 0, spent = 0;
  for (; rolls < n; rolls++) {
    const c = petRollCost(s); if (ps.pot < c) return { rolls, spent, hit: false, out: true };
    ps.pot -= c; spent += c; const fx = rollPetFx();
    if (petWant(fx, k, minR)) { p.k = fx.k; p.r = fx.r; ps.cand = null; return { rolls: rolls + 1, spent, hit: true, k: fx.k, r: fx.r }; }
  }
  ps.cand = null; return { rolls, spent, hit: false };
}
export function petSetAct(s, id) { const ps = petState(s); if (id !== null && !ps.own[id]) return false; ps.act = id; return true; }

// ---------- 영혼무기: 외형·이름·옵션을 직접 정해 만드는 나만의 무기. 장비 칸과 별개이고 윤회해도 남는다 ----------
// 윤회를 한 번 하면 만들 수 있다. 보스를 잡거나 새 층에 처음 오르면 영혼력이 쌓여 레벨이 오르고(정수로도 채울 수 있음), 레벨 상한은 최고 기록 층과 같다
// 옵션은 일반 능력치가 아니라 전투 방식을 바꾸는 특수 효과. v = Lv.200 기준 (레벨에 비례, Lv.300이면 1.5배)
export const SOUL_REINC = 1, SOUL_MAXLV = 300, SOUL_ESS_XP = 20;
export const SOUL_SLOT_AT = [1, 50, 120];   // 이 레벨에서 옵션 칸이 하나씩 열린다
// (수치는 같은 세이브로 4직업을 직접 싸워 보고 맞춤)
export const SOUL_FX = {
  cut:      0.1,  // 영혼 베기: 용사 평타·동료 공격이 적중할 때마다 적 현재 체력의 v% 추가 피해 (보스·탑·균열)
  archmage: 55,   // 마력 순환: 스킬을 쓰면 그 스킬 쿨타임의 v%만큼 다른 무작위 스킬 쿨타임을 돌려받음
  echo:     90,   // 잔영 시전: 피해 스킬마다 잔영이 v% 위력으로 한 번 더 시전
  awaken:   70,   // 영혼 해방: 쿨타임이 가장 긴 스킬을 쓰면 다른 스킬 쿨타임 초기화 + 6초간 스킬 피해 +v% (별도 곱)
  enpass:   3.5,  // 급소 간파: 보스전 5초마다 급소 공격, 보스 최대 체력의 v% 피해 + 용사 체력 v×3% 회복
  tank:     40,   // 날 선 감각: 치명타 확률만큼(최대 v%) 확률로 받는 피해 절반
  titan:    1.2,  // 전투 고양: 보스전 0.5초마다 1중첩(최대 30), 중첩당 주는 피해 +v%·받는 피해 -v%
  power:    0.5,  // 영혼 수확: 이번 윤회에서 보스를 잡을 때마다 스킬 피해 +v% (최대 v×200%)
};
export const COMP_HIT_RATE = 1 / 1.6;   // 동료 1명이 초당 공격하는 횟수 (화면 연출과 같은 간격)
export const SOUL_FX_KEYS = Object.keys(SOUL_FX);
export const SOUL_LOOKS = ["great_sword_slant","great_sword_slant2","long_sword_slant","long_sword_slant2","scimitar","falchion","falchion2","double_sword","double_sword2","double_sword3","triple_sword","triple_sword2","sword_black","sword_jag","sword_thief","sword_three","black_sword","heavy_sword","broadsword","rapier2","short_sword_slant2","axe_blood","axe_double","axe_executioner","battleaxe2","broad_axe","war_axe","hand_axe2","great_mace","great_mace2","large_mace","mace_ruby","morningstar2","eveningstar2","flail_great","glaive_three","halberd","pike","scythe2","trident_demon","trident_two2","lance","spear_five","d_glaive","staff_mage","staff_mage_two","staff_skull","staff_evil","staff_large","staff_organic","staff_ring_blue","staff_sceptre","great_staff","rod_aries","rod_emerald","rod_magenta","rod_hammer","bow_three","storm_bow","arbalest_three","whip2","black_whip","gandalf","saruman","aragorn","legolas","boromir","gimli","arwen","frodo"];
function soulState(s) { const w = s.soul || (s.soul = {}); w.lv ||= 1; w.xp ||= 0; w.opt ||= []; if (w.show === undefined) w.show = true; return w; }
export function soulUnlocked(s) { return (s.reinc || 0) >= SOUL_REINC; }
export function soulMade(s) { return !!(s.soul && s.soul.made); }
export function soulCap(s) { return Math.min(SOUL_MAXLV, Math.max(1, Math.max(s.bestFloor || 0, s.maxFloor || 0))); }
export function soulNeed(lv) { return 2 + Math.floor(lv / 10); }
export function soulSlots(s) { const lv = soulMade(s) ? s.soul.lv : 0; return SOUL_SLOT_AT.filter(x => lv >= x).length; }
const cleanName = v => String(v == null ? '' : v).replace(/[<>&"'\u0000-\u001f]/g, '').trim().slice(0, 16).trim();
export function soulCraft(s, look, name, k) {
  if (!soulUnlocked(s) || soulMade(s) || !SOUL_LOOKS.includes(look) || !SOUL_FX[k]) return false;
  const w = soulState(s); Object.assign(w, { made: true, look, name: cleanName(name) || null, lv: 1, xp: 0, opt: [k], show: true }); return true;
}
export function soulSetLook(s, look) { if (!soulMade(s) || !SOUL_LOOKS.includes(look)) return false; s.soul.look = look; return true; }
export function soulRename(s, name) { if (!soulMade(s)) return false; s.soul.name = cleanName(name) || null; return true; }
export function soulSetOpt(s, i, k) { if (!soulMade(s) || !SOUL_FX[k] || i < 0 || i >= soulSlots(s)) return false; const o = s.soul.opt; const j = o.indexOf(k); if (j >= 0 && j !== i) o[j] = o[i] || null; o[i] = k; s.soul.opt = o.filter(Boolean); return true; }
export function soulShow(s, on) { if (!soulMade(s)) return false; s.soul.show = !!on; return true; }
export function soulGain(s, n, ev) {
  if (!soulMade(s)) return 0; const w = s.soul, cap = soulCap(s); if (w.lv >= cap) { w.xp = 0; return 0; }
  w.xp += n; let up = 0; while (w.lv < cap && w.xp >= soulNeed(w.lv)) { w.xp -= soulNeed(w.lv); w.lv++; up++; }
  if (w.lv >= cap) w.xp = 0; if (up && ev) ev.soulUp = w.lv; return up;
}
export function soulFeedCost(s) { return soulMade(s) && s.soul.lv < soulCap(s) ? (soulNeed(s.soul.lv) - s.soul.xp) * SOUL_ESS_XP : 0; }
export function soulFeed(s) { const c = soulFeedCost(s); if (!c || (s.ess || 0) < c) return false; s.ess -= c; soulGain(s, c / SOUL_ESS_XP); return true; }
export function soulVal(k, lv) { return SOUL_FX[k] * Math.min(SOUL_MAXLV, lv) / 200; }
// 대마법사·궁극의 각성: 스킬 하나를 쓴 직후 다른 스킬 쿨타임을 줄인다
function soulOnCast(s, st, sd) {
  const sf = st.sfx, act = classSkills(s.cls, 'active').filter(x => x.id !== sd.id && (s.skills[x.id] || 0) > 0);
  if (!act.length) return;
  if (sf.archmage) { const o = act[Math.floor(Math.random() * act.length)]; s.cd[o.id] = (s.cd[o.id] ?? 0) - sd.cd * Math.min(60, sf.archmage) / 100; }
  if (sf.awaken) { const top = classSkills(s.cls, 'active').filter(x => (s.skills[x.id] || 0) > 0).reduce((m, x) => x.cd > m.cd ? x : m, sd); if (top.id === sd.id) { for (const o of act) if ((s.cd[o.id] ?? 0) > 0) s.cd[o.id] = 0; pushBuff(s, 'soul:awaken', 6, { xskillP: sf.awaken }); } }
}
// 적중 1번마다 현재 체력의 p%씩 깎이는 것을 dt 동안 누적 (평타 + 동료 적중 횟수 기준)
export function soulCutDmg(hp, st, dt) { const p = Math.min(0.5, (st.sfx.cut || 0) / 100); return hp * (1 - Math.pow(1 - p, (st.hitRate || 1) * dt)); }
export function soulAgg(s) { const o = {}; for (const k of SOUL_FX_KEYS) o[k] = 0; if (!soulMade(s)) return o; const n = soulSlots(s); s.soul.opt.slice(0, n).forEach(k => { if (SOUL_FX[k]) o[k] += soulVal(k, s.soul.lv); }); return o; }

// ---------- 원정대: 파티 밖 동료를 보내 조각·정수·동료 장비·코스튬을 가져온다 ----------
export const EXP_SLOTS = 2, EXP_SIZE = 3, EXP_DUR = [1, 4, 8];
const EXP_NEED = [1.5, 3, 5], EXP_GEAR = [1, 2, 4], EXP_COS = [0.02, 0.08, 0.18];
export const EXP_MAX = 4;
export function expCap(s) { return Math.min(EXP_MAX, EXP_SLOTS + ((s.shopBuy || {}).expSlot || 0)); }
function expState(s) { const e = s.exped || (s.exped = {}); e.slots ||= []; const cap = expCap(s); while (e.slots.length < cap) e.slots.push(null); return e; }
export function expSlots(s) { return expState(s).slots; }
export function onExped(s, id) { return expState(s).slots.some(x => x && x.ids.includes(id)); }
export function expFree(s) { return Object.keys(s.comp || {}).filter(id => COMP_BY_ID[id] && !(s.team || []).includes(id) && !onExped(s, id)); }
export function expPower(s, ids) { return ids.reduce((a, id) => { const c = COMP_BY_ID[id], o = (s.comp || {})[id]; return a + (c && o ? compCoef(c, o.aw, o.lv) * (1 + (((((s.cg || {}).eq || {})[id] || {}).blade) ? cgExpVal(s.cg.eq[id].blade) / 100 : 0)) : 0); }, 0); }
export function expMult(s, ids, di) { return Math.min(1.5, 0.4 + 0.6 * expPower(s, ids) / EXP_NEED[di]); }
export function expAutoPick(s) { return expFree(s).sort((a, b) => expPower(s, [b]) - expPower(s, [a])).slice(0, EXP_SIZE); }
export function expPreview(s, ids, di) {
  const m = expMult(s, ids, di), h = EXP_DUR[di], bf = s.bestFloor || s.maxFloor || 1;
  return { mult: m, shards: Math.round((4 + bf / 12) * h * m), ess: Math.round((1 + bf / 40) * h * m), dust: riftUnlocked(s) ? Math.round(3 * h * m) : 0, gear: EXP_GEAR[di], cos: Math.min(1, EXP_COS[di] * Math.min(1, m)) };
}
export function expStart(s, slot, ids, di, now = Date.now()) {
  const e = expState(s); if (slot < 0 || slot >= expCap(s) || e.slots[slot] || !EXP_DUR[di]) return false;
  ids = [...new Set(ids)].filter(id => expFree(s).includes(id)).slice(0, EXP_SIZE); if (!ids.length) return false;
  e.slots[slot] = { ids, di, start: now, end: now + EXP_DUR[di] * 3600e3, mult: expMult(s, ids, di) };
  qAdd(s, 'exped', 1); return true;
}
// 빈 자리마다 파티 밖 동료 중 강한 순으로 자동 편성해서 한 번에 보낸다
export function expSendAll(s, di, now = Date.now()) { let n = 0; const sl = expSlots(s); for (let i = 0; i < sl.length; i++) if (!sl[i]) { const ids = expAutoPick(s); if (!ids.length) break; if (expStart(s, i, ids, di, now)) n++; } return n; }
// 끝난 원정을 모두 받는다 (보상 합산)
export function expClaimAll(s, now = Date.now()) { const tot = { n: 0, shards: 0, ess: 0, dust: 0, gear: [], cos: [] }; expSlots(s).forEach((x, i) => { const r = expClaim(s, i, now); if (!r) return; tot.n++; tot.shards += r.shards; tot.ess += r.ess; tot.dust += r.dust || 0; tot.gear.push(...r.gear); if (r.cos && r.cos !== 'dup') tot.cos.push(r.cos); }); return tot; }
export function expRecall(s, slot) { const e = expState(s); if (!e.slots[slot]) return false; e.slots[slot] = null; return true; }
export function expClaim(s, slot, now = Date.now()) {
  const e = expState(s), x = e.slots[slot]; if (!x || now < x.end) return null;
  const pv = expPreview(s, x.ids, x.di); const m = x.mult; pv.shards = Math.round(pv.shards / pv.mult * m); pv.ess = Math.round(pv.ess / pv.mult * m); pv.dust = Math.round(pv.dust / (pv.mult || 1) * m);
  s.shards = (s.shards || 0) + pv.shards; s.ess = (s.ess || 0) + pv.ess; if (pv.dust) runeState(s).dust += pv.dust;
  const gear = []; for (let i = 0; i < pv.gear; i++) { const it = rollCGear(s, m); gear.push(it); cgAdd(s, it); }
  let cos = null; if (Math.random() < pv.cos) { const c = cosState(s); const left = COSTUMES.filter(z => !z.free && !c.own.includes(z.id)); if (left.length) { cos = left[Math.floor(Math.random() * left.length)].id; c.own.push(cos); } else { s.shards += 50; cos = 'dup'; } }
  e.slots[slot] = null; (s.life ||= {}).exped = ((s.life || {}).exped || 0) + 1;
  return { shards: pv.shards, ess: pv.ess, dust: pv.dust, gear, cos, ids: x.ids };
}

// ---------- 동료 장비: 동료마다 칼날(공격)·부적(동행 효과)·인장(보유 효과) ----------
export const CG_KINDS = ['blade', 'charm', 'sigil'];
export const CG_BASE = { blade: [30, 60, 105, 165, 240], charm: [5, 10, 18, 28, 40], sigil: [8, 15, 25, 40, 60] };
export const CG_BAG = 80, CG_DUST = [2, 5, 12, 30, 80];
function cgState(s) { const c = s.cg || (s.cg = {}); c.bag ||= []; c.eq ||= {}; return c; }
export function cgVal(it) { return Math.round(CG_BASE[it.k][it.r] * it.q) / 100; }
// 칼날: 장착한 모든 칼날 수치를 더해 용사 평타 피해를 증폭 (스킬 피해에는 안 들어감)
export function cgBladeSum(s) { let t = 0; const eq = (s.cg || {}).eq || {}; for (const id in eq) { const it = eq[id] && eq[id].blade; if (it && (s.comp || {})[id]) t += cgVal(it); } return t; }
// 평타 배율 = 1 + 칼날 합계 + 스킬 피해 보너스의 절반 (곱하지 않고 더해서 후반에 폭주하지 않게)
export const BASIC_SKILL_K = 0.5;
// 원정 전투력에는 칼날이 예전 수치(1/3)만큼만
export function cgExpVal(it) { return cgVal(it) / 3; }
export function cgMult(s, id, k) { const e = ((s.cg || {}).eq || {})[id]; const it = e && e[k]; return it ? 1 + cgVal(it) / 100 : 1; }
export function cgScore(it) { return CG_BASE[it.k][it.r] * it.q; }
function rollCGear(s, m) {
  const bf = s.bestFloor || 1, w = [Math.max(10, 50 - bf / 4), 30, 14 + bf / 20, 4 + bf / 60 + 4 * (m - 1), 0.8 + bf / 200 + 2 * (m - 1)];
  let x = Math.random() * w.reduce((a, b) => a + b, 0), r = 0; for (; r < 4; r++) { x -= w[r]; if (x <= 0) break; }
  return { k: CG_KINDS[Math.floor(Math.random() * 3)], r, q: 80 + Math.floor(Math.random() * 41) };
}
function cgAdd(s, it) { const c = cgState(s); c.bag.push(it); if (s.cgAuto !== false) cgAutoEquip(s); if (c.bag.length > CG_BAG) { c.bag.sort((a, b) => cgScore(b) - cgScore(a)); for (const z of c.bag.splice(CG_BAG)) s.shards = (s.shards || 0) + CG_DUST[z.r]; } }
export function cgBag(s) { return cgState(s).bag; }
export function cgEq(s, id) { return cgState(s).eq[id] || {}; }
export function cgEquip(s, id, bi) { const c = cgState(s), it = c.bag[bi]; if (!it || !s.comp[id]) return false; const e = c.eq[id] || (c.eq[id] = {}); const old = e[it.k]; e[it.k] = it; c.bag.splice(bi, 1); if (old) c.bag.push(old); COMP_VER++; return true; }
export function cgUnequip(s, id, k) { const c = cgState(s), e = c.eq[id]; if (!e || !e[k] || c.bag.length >= CG_BAG) return false; c.bag.push(e[k]); delete e[k]; COMP_VER++; return true; }
export function cgDismantle(s, pred) { const c = cgState(s); let n = 0, sh = 0; c.bag = c.bag.filter(it => { if (pred(it)) { n++; sh += CG_DUST[it.r]; return false; } return true; }); s.shards = (s.shards || 0) + sh; return { n, shards: sh }; }
export function cgMerge(s) {   // 같은 종류·등급 3개 → 한 등급 위 1개 (전설 제외), 반복
  const c = cgState(s); let made = 0;
  for (let r = 0; r < 4; r++) for (const k of CG_KINDS) { let L = c.bag.filter(it => it.k === k && it.r === r).sort((a, b) => a.q - b.q); while (L.length >= 3) { const use = L.splice(0, 3); c.bag = c.bag.filter(it => !use.includes(it)); const nw = { k, r: r + 1, q: Math.round(use.reduce((a, b) => a + b.q, 0) / 3) }; c.bag.push(nw); made++; if (r + 1 < 4) L = c.bag.filter(it => it.k === k && it.r === r).sort((a, b) => a.q - b.q); } }
  if (made) cgAutoMaybe(s);
  return made;
}
// 자동 장착: 가진 장비(낀 것 + 가방)를 종류별로 점수 순으로 줄 세워, 등급 → 각성·레벨 순서의 동료에게 다시 나눠 준다
// 부적은 파티에 있을 때만 효과가 나서 파티 3명을 먼저 챙긴다. 바뀐 칸 수를 돌려준다
let CG_MOVED = 0;
export function cgTakeMoved() { const n = CG_MOVED; CG_MOVED = 0; return n; }
export function cgPriority(s) {
  const ids = Object.keys(s.comp || {}).filter(id => COMP_BY_ID[id]);
  const p = id => { const c = COMP_BY_ID[id], o = s.comp[id]; return c.r * 1e9 + compCoef(c, o.aw, o.lv); };
  return ids.sort((a, b) => p(b) - p(a));
}
export function cgAutoEquip(s) {
  const c = cgState(s), pool = { blade: [], charm: [], sigil: [] };
  for (const it of c.bag) if (pool[it.k]) pool[it.k].push(it);
  for (const id in c.eq) for (const k in c.eq[id]) if (pool[k]) pool[k].push(c.eq[id][k]);
  const byR = cgPriority(s), team = (s.team || []).filter(id => s.comp[id] && COMP_BY_ID[id]);
  const order = { blade: byR, sigil: byR, charm: [...team, ...byR.filter(id => !team.includes(id))] };
  const eq = {}, bag = []; let n = 0;
  for (const k of CG_KINDS) { const items = pool[k].sort((a, b) => cgScore(b) - cgScore(a)); order[k].forEach((id, i) => { const it = items[i]; if (!it) return; (eq[id] ||= {})[k] = it; const old = (c.eq[id] || {})[k]; if (!old || cgScore(old) !== cgScore(it)) n++; }); bag.push(...items.slice(order[k].length)); }
  c.eq = eq; c.bag = bag; if (n) { COMP_VER++; CG_MOVED += n; } return n;
}
export function cgAutoMaybe(s) { return s.cgAuto !== false ? cgAutoEquip(s) : 0; }
// ---------- 소환석 상점 (남는 소환석 사용처) ----------
export const STONE_SHOP = {
  gearBox: 2000,                        // 동료 장비 상자: 희귀 이상 1개
  gearBoxHi: 20000,                     // 고급 동료 장비 상자: 영웅 이상 확정 (전설 30%), 품질 100~120%
  key: 1500, keyDaily: 3,               // 균열 열쇠 (하루 3개)
  rush: 10,                             // 원정 즉시 귀환: 남은 1분당
  expSlot: [30000, 100000],             // 원정대 3·4번째 자리 (영구)
  costume: 15000,                       // 원하는 특별 코스튬
};
export const MILE_LR = 5000, MILE_MR = 40000;
// ---------- 신화 권능: MR 동료가 파티에 있으면 보스 처치·새 층 도달마다 성장 (환생·윤회에도 유지) ----------
export const MR_POW = {
  azrael:      { k: 'atk',   v: 2 },                      // 업화: 공격력 ×(1 + 2%·Lv)
  mnoleg:      { k: 'crit',  v: 2.5 },                    // 광기: 치명타 확률 +2.5%·Lv (100%를 넘으면 다단 치명타)
  lom_lobon:   { k: 'haste', v: 2, k2: 'skill', v2: 0.5 },// 대마도: 스킬 가속 +2·Lv, 스킬 피해 ×(1 + 0.5%·Lv)
  gloorx_vloq: { k: 'comp',  v: 4.5 },                    // 그림자 군세: 동료 피해 ×(1 + 4.5%·Lv)
};
export const MRP_MAX = 60;
export function mrpNeed(lv) { return 8 + 4 * lv; }   // Lv.60까지 약 8,000 (자동 진행 기준 열흘 정도)
export function mrpLv(s, id) { return ((s.mrp || {})[id] || {}).lv || 0; }
export function mrpXp(s, id) { return ((s.mrp || {})[id] || {}).xp || 0; }
function mrGain(s, n, ev) {
  for (const id of s.team || []) {
    if (!MR_POW[id] || !(s.comp || {})[id] || onExped(s, id)) continue;
    const p = (s.mrp ||= {})[id] || (s.mrp[id] = { lv: 0, xp: 0 });
    if (p.lv >= MRP_MAX) continue;
    p.xp += n;
    while (p.lv < MRP_MAX && p.xp >= mrpNeed(p.lv)) { p.xp -= mrpNeed(p.lv); p.lv++; if (ev) (ev.mrUp ||= []).push({ id, lv: p.lv }); }
    if (p.lv >= MRP_MAX) p.xp = 0;
  }
}   // 소환 마일리지로 원하는 LR·MR 동료
export function shopKeyLeft(s, now = Date.now()) { const b = s.shopBuy || {}; return b.keyDay === localDay(now) ? Math.max(0, STONE_SHOP.keyDaily - (b.keyN || 0)) : STONE_SHOP.keyDaily; }
export function rushAllCost(s, now = Date.now()) { return expSlots(s).reduce((a, x, i) => a + rushCost(s, i, now), 0); }
export function cosLeftN(s) { const own = ((s.cos || {}).own) || []; return COSTUMES.filter(z => !z.free && !own.includes(z.id)).length; }
// 같은 상품을 n번 연속으로 산다 (돈이 모자라거나 한도에 걸리면 거기서 멈춤)
export function shopBuyN(s, what, n, now = Date.now()) { const out = []; for (let i = 0; i < n; i++) { const r = shopBuy(s, what, undefined, now); if (!r) break; out.push(r); } return out; }
export function rushCost(s, slot, now = Date.now()) { const x = expSlots(s)[slot]; return x && now < x.end ? Math.ceil((x.end - now) / 60000) * STONE_SHOP.rush : 0; }
export function shopBuy(s, what, arg, now = Date.now()) {
  const b = s.shopBuy || (s.shopBuy = {}); const pay = c => { if (s.stones < c) return false; s.stones -= c; return true; };
  if (what === 'gearBox') { if (!pay(STONE_SHOP.gearBox)) return null; let it, g2 = 0; do { it = rollCGear(s, 1.5); } while (it.r < 2 && ++g2 < 50); if (it.r < 2) it.r = 2; cgAdd(s, it); return { gear: it }; }
  if (what === 'gearBoxHi') { if (!pay(STONE_SHOP.gearBoxHi)) return null; const it = { k: CG_KINDS[Math.floor(Math.random() * 3)], r: Math.random() < 0.3 ? 4 : 3, q: 100 + Math.floor(Math.random() * 21) }; cgAdd(s, it); return { gear: it }; }
  if (what === 'cosAll') { const c = cosState(s), left = COSTUMES.filter(z => !z.free && !c.own.includes(z.id)), got = []; for (const z of left) { if (!pay(STONE_SHOP.costume)) break; c.own.push(z.id); got.push(z.id); } return got.length ? { cosAll: got } : null; }
  if (what === 'rushAll') { const c = rushAllCost(s, now); if (!c || !pay(c)) return null; for (const x of expSlots(s)) if (x && now < x.end) x.end = now; return { rushAll: true, cost: c }; }
  if (what === 'key') { if (shopKeyLeft(s, now) <= 0 || !pay(STONE_SHOP.key)) return null; if (b.keyDay !== localDay(now)) { b.keyDay = localDay(now); b.keyN = 0; } b.keyN++; const rs = riftState(s); rs.keys = Math.min(KEY_MAX + 20, rs.keys + 1); return { keys: 1 }; }
  if (what === 'rush') { const c = rushCost(s, arg, now); if (!c || !pay(c)) return null; expSlots(s)[arg].end = now; return { rush: arg }; }
  if (what === 'expSlot') { const n = b.expSlot || 0; if (n >= EXP_MAX - EXP_SLOTS || !pay(STONE_SHOP.expSlot[n])) return null; b.expSlot = n + 1; expState(s); return { expSlot: expCap(s) }; }
  if (what === 'costume') { const c = cosState(s); if (!COS_BY_ID[arg] || COS_BY_ID[arg].free || c.own.includes(arg) || !pay(STONE_SHOP.costume)) return null; c.own.push(arg); return { cos: arg }; }
  return null;
}
export function mileBuy(s, id) {
  const c = COMP_BY_ID[id]; if (!c || c.r < 4) return null; const cost = c.r >= 5 ? MILE_MR : MILE_LR;
  if ((s.mile || 0) < cost) return null; s.mile -= cost; return gainCompanion(s, c);
}
export function toggleTeam(s, id) {
  const k = s.team.indexOf(id);
  if (k >= 0) { s.team.splice(k, 1); cgAutoMaybe(s); return false; }
  if (s.team.length >= TEAM_MAX || onExped(s, id)) return false;
  s.team.push(id); cgAutoMaybe(s);
  return true;
}
export function ownSummary(s) {
  const acc = {};
  for (const [id, st] of Object.entries(s.comp || {})) {
    const c = COMP_BY_ID[id];
    if (!c) continue;
    acc[c.own.k] = (acc[c.own.k] || 0) + ownValue(c, st.aw, st.lv);
  }
  return acc;
}

// ---------- 세이브 ----------
export function newSave() {
  return {
    v: SAVE_VER,
    cls: null,
    gold: 0, level: 1, xp: 0, sp: 0,
    floor: 1, maxFloor: 1, kills: 0, totalKills: 0,
    prog: 0, boss: null, hp: null,
    equip: Object.fromEntries(SLOTS.map(s => [s.id, null])),
    bag: [], up: {},
    skills: {}, cd: {}, buffs: [],
    comp: {}, team: [], banner: 'all', presets: [], bossLock: false, autoSell: -1, lang: 'en',
    stones: 30, pulls: 0, pity: 0, stoneBuys: 0, shards: 0,
    honor: 0, honorPts: 0, relic: {}, bestFloor: 0, rebirths: 0,
    life: { kills: 0, bosses: 0 }, quest: {}, boost: { until: 0, charges: 0 }, tower: { best: 0, tries: 3, prev: null }, auto: { boss: true, rbMode: 'stuck', rbStuck: 30, rbFloor: 0 },
    ench: {}, enchX: {}, ess: 0, ach: {}, bestiary: [], karma: 0, reinc: 0, cycleBest: 0, stuckT: 0, bossFails: 0,
    mastery: {}, gachaOpt: { stopUR: true, stopNew: false, autoBuy: false },
    mrp: {}, pets: { own: {}, act: null, cand: null, pot: 0, ppm: 0, peak: 0, pin: 0, pt: 0 }, soul: null, lowFx: false, cgAuto: true, goldConv: true, cos: { own: [], look: {}, seen: {} }, exped: { slots: [null, null] }, cg: { bag: [], eq: {} }, mut: {}, events: [], ebuffs: [], evT: 0, evLog: [], bossPity: {}, sigGot: {}, daily: null, guide: { n: 0 }, autoSeen: [],
    towers: {}, rift: { keys: 2, best: 0, lvl: 1 }, runes: { eq: [null, null, null, null], bag: [], dust: 0 },
    autoEquip: true, pending: null,
    lastTick: Date.now(), createdAt: Date.now(),
  };
}
function clampItem(it) {
  if (it && typeof it === 'string') it = decItem(it);
  if (!it || typeof it !== 'object' || !SLOT_BY_ID[it.s]) return null;
  const sl = SLOT_BY_ID[it.s];
  const o = { s: it.s, t: int(it.t, 0, 0, sl.tiers - 1), r: int(it.r, 0, 0, 4), f: int(it.f, 0, 0, 100000) };
  if (it.n != null) o.n = int(it.n, 1, 1, 1e9);
  if (it.u && UNIQUES[it.u] && UNIQUES[it.u].slot === it.s && o.r === 4) o.u = it.u;
  if (Array.isArray(it.a)) {
    // 옵션 값은 그 등급·단계에서 나올 수 있는 최대치(기준값 × 1.3 × 등급 보정)까지만 인정
    o.a = it.a.filter(x => Array.isArray(x) && AFFIXES[x[0]]).slice(0, AFFIX_COUNT[o.r]).map(([k, v]) => [k, Math.round(num(v, 0, 0, affixBase(k, o.t) * 1.3 * (1 + 0.15 * o.r)) * 10) / 10]);
    if (!o.a.length) delete o.a;
  }
  return o;
}
// ---- 세이브 값 검증 도우미: 숫자가 아니거나 범위를 벗어나면 기본값/경계값으로
function num(v, d = 0, lo = 0, hi = 1e300) { v = Number(v); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; }
function int(v, d = 0, lo = 0, hi = 1e15) { return Math.floor(num(v, d, lo, hi)); }
const isDay = v => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);
function pickObj(src, keys, fn) { const o = {}; if (src && typeof src === 'object') for (const k of keys) if (Object.prototype.hasOwnProperty.call(src, k)) { const v = fn(src[k], k); if (v != null) o[k] = v; } return o; }
// 불러온 세이브(로컬·동기화·드라이브·세이브 코드 공통)를 게임이 다룰 수 있는 값으로 정리한다
function sanitize(o, now = Date.now()) {
  o.cls = CLASSES[o.cls] ? o.cls : null;
  o.banner = o.banner === 'all' || CLASSES[o.banner] ? o.banner : 'all';
  o.lang = typeof o.lang === 'string' && /^[a-z]{2}$/.test(o.lang) ? o.lang : 'en';
  o.gold = num(o.gold); o.xp = num(o.xp); o.honor = num(o.honor); o.honorPts = num(o.honorPts); o.totalKills = num(o.totalKills);
  o.level = int(o.level, 1, 1, 1e6); o.sp = int(o.sp, 0, 0, 1e7);
  o.floor = int(o.floor, 1, 1, 1e6); o.maxFloor = int(o.maxFloor, 1, o.floor, 1e6);
  o.bestFloor = int(o.bestFloor, 0, o.maxFloor, 1e6); o.cycleBest = int(o.cycleBest, 0, o.maxFloor, o.bestFloor); o.savedAt = num(o.savedAt, 0, 0, now + 60000);
  o.kills = int(o.kills, 0, 0, 1e6); o.prog = num(o.prog, 0, 0, 1);
  o.stones = int(o.stones, 0, 0, 1e12); o.shards = int(o.shards, 0, 0, 1e15); o.ess = num(o.ess, 0, 0, 1e15);
  o.pulls = int(o.pulls); o.pity = int(o.pity, 0, 0, PITY); o.stoneBuys = int(o.stoneBuys, 0, 0, 1e5);
  o.rebirths = int(o.rebirths, 0, 0, 1e8); o.karma = int(o.karma, 0, 0, 1e9); o.reinc = int(o.reinc, 0, 0, 1e8);
  o.stuckT = num(o.stuckT, 0, 0, 1e8); o.bossFails = int(o.bossFails, 0, 0, 1000); o.autoSell = int(o.autoSell, -1, -1, 2);
  o.autoEquip = o.autoEquip !== false; o.bossLock = !!o.bossLock;
  o.lastTick = num(o.lastTick, now, 0, now + 60000); o.createdAt = num(o.createdAt, now, 0, now);
  // 장비 층 보정은 도달한 최고 층에서 나올 수 있는 값까지만
  const fMax = Math.floor(o.bestFloor / 4) + 1;
  for (const k of Object.keys(o.equip || {})) if (o.equip[k]) o.equip[k].f = Math.min(o.equip[k].f || 0, fMax);
  for (const it of o.bag || []) it.f = Math.min(it.f || 0, fMax);
  o.up = pickObj(o.up, UPGRADES.map(u => u.id), v => int(v, 0, 0, 20000));
  o.relic = pickObj(o.relic, RELICS.map(r => r.id), (v, k) => int(v, 0, 0, RELIC_BY_ID[k].max || 1e5));
  o.ench = pickObj(o.ench, SLOTS.map(s => s.id), v => int(v, 0, 0, ENCH_MAX));
  o.enchX = pickObj(o.enchX, SLOTS.map(s => s.id), v => int(v, 0, 0, ENCHX_MAX)); for (const k of Object.keys(o.enchX)) if ((o.ench[k] || 0) < ENCH_MAX || !o.enchX[k]) delete o.enchX[k];
  o.ach = pickObj(o.ach, ACH.map(a => a.id), (v, k) => int(v, 0, 0, ACH.find(a => a.id === k).t.length));
  o.skills = pickObj(o.skills, SKILLS.map(sd => sd.id), v => int(v, 0, 0, SKILL_MAX));
  o.mastery = pickObj(o.mastery, MASTERY.map(m => m.id), v => int(v, 0, 0, 1e6));
  { const g = o.gachaOpt || {}; o.gachaOpt = { stopUR: g.stopUR !== false, stopNew: !!g.stopNew, autoBuy: !!g.autoBuy }; }
  // 스킬 포인트 보정: 남은 + 쓴 포인트가 레벨 총량보다 적으면 채워준다 (예전 직업 변경 버그로 잃은 포인트 복구)
  if (o.cls) { const have = o.sp + skillSpent(o) + masterySpent(o), need = spTotal(o.level); if (have < need) o.sp += need - have; }
  o.cd = pickObj(o.cd, SKILLS.map(sd => sd.id), v => num(v, 0, -100, 100));
  o.ccd = pickObj(o.ccd, COMPANIONS.map(c => c.id), v => num(v, 0, -100, 100));
  o.buffs = [];                                                           // 버프는 몇 초짜리라 불러올 때 비움 (조작된 버프 차단)
  o.comp = pickObj(o.comp, COMPANIONS.map(c => c.id), v => v && typeof v === 'object' ? { n: int(v.n, 1, 1, 1e9), aw: int(v.aw, 0, 0, AWAKEN_MAX), lv: int(v.lv, 0, 0, CLV_MAX) } : null);
  o.team = [...new Set((o.team || []).filter(id => typeof id === 'string' && o.comp[id]))].slice(0, TEAM_MAX);
  o.presets = (o.presets || []).slice(0, PRESET_MAX).map(p => p && typeof p === 'object' ? { name: typeof p.name === 'string' ? p.name.replace(/[<>&"']/g, '').slice(0, 24) || null : null, team: (Array.isArray(p.team) ? p.team : []).filter(id => COMP_BY_ID[id]).slice(0, TEAM_MAX) } : null);
  o.life = { kills: num(o.life && o.life.kills), bosses: num(o.life && o.life.bosses) };
  o.bestiary = Array.from({ length: ZONES }, (_, i) => num((o.bestiary || [])[i]));
  const q = o.quest && typeof o.quest === 'object' ? o.quest : {};
  const cnt = src => pickObj(src, ['kill', 'boss', 'up', 'pull', 'tower', 'floor', 'rebirth', 'sell', 'clv', 'ench', 'exped', 'rift'], v => num(v));
  const flags = (src, L) => pickObj(src, [...L.map(m => m.id), 'all'], v => (v ? true : null));
  o.quest = { day: isDay(q.day) ? q.day : '', d: cnt(q.d), dc: flags(q.dc, DAILY), wk: isDay(q.wk) ? q.wk : '', w: cnt(q.w), wc: flags(q.wc, WEEKLY),
    att: { last: q.att && isDay(q.att.last) ? q.att.last : '', n: int(q.att && q.att.n, 0, 0, 1e6) } };
  o.boost = { charges: int(o.boost && o.boost.charges, 0, 0, 999), until: num(o.boost && o.boost.until, 0, 0, now + 24 * 3600e3) };
  { const MS = Object.fromEntries(SKILLS.map(x => [x.id, 1]));
    const mu = o.mut && typeof o.mut === 'object' ? o.mut : {}; o.mut = {}; for (const [k, v] of Object.entries(mu)) if (MS[k] && (v === 'a' || v === 'b') && !/__proto__|constructor|prototype/.test(k)) o.mut[k] = v;
    o.events = (Array.isArray(o.events) ? o.events : []).filter(e => e && EVENT_BY_ID[e.id]).slice(0, EVENT_MAX).map(e => ({ id: e.id, f: int(e.f, 1, 1, 1e6), age: num(e.age, 0, 0, EVENT_TTL) }));
    const EBK = { atkX: [0.5, 1.5], hpX: [0.4, 1.3], goldX: [1, 2.5], xpX: [1, 2.5], monX: [1, 1.6], armor: [0, 150], critD: [0, 100], spdA: [0, 80], skillX: [1, 3], compX: [1, 3], regenX: [0.3, 1] };
    o.ebuffs = (Array.isArray(o.ebuffs) ? o.ebuffs : []).filter(b => b && EBK[b.k]).slice(0, 12).map(b => ({ k: b.k, v: num(b.v, 1, EBK[b.k][0], EBK[b.k][1]), t: num(b.t, 0, 0, 3600) }));
    o.evT = num(o.evT, 0, 0, EVENT_EVERY); o.evLog = (Array.isArray(o.evLog) ? o.evLog : []).filter(e => e && EVENT_BY_ID[e.id]).slice(0, 10).map(e => ({ id: e.id, c: int(e.c, 0, 0, 3), auto: !!e.auto, at: num(e.at, 0, 0, now + 60000) }));
    const zk = Array.from({ length: ZONES }, (_, i) => String(i));
    o.bossPity = pickObj(o.bossPity, zk, v => int(v, 0, 0, SIG_PITY)); o.sigGot = pickObj(o.sigGot, zk, v => int(v, 0, 0, 1e6));
    const dl = o.daily; o.daily = dl && typeof dl === 'object' && isDay(dl.day) ? { day: dl.day, tries: int(dl.tries, DAILY_TRIES, 0, DAILY_TRIES), best: dl.best && typeof dl.best === 'object' ? { floor: int(dl.best.floor, 1, 1, 400), at: int(dl.best.at, 0, 0, DAILY_SEC), lv: int(dl.best.lv, 1, 1, 1000), cls: CLASSES[dl.best.cls] ? dl.best.cls : 'war', bless: DAILY_BLESS.some(x => x.id === dl.best.bless) ? dl.best.bless : 'power', mod: DAILY_MODS.some(x => x.id === dl.best.mod) ? dl.best.mod : DAILY_MODS[0].id, day: dl.day } : null, last: null } : null;
    o.guide = { n: int(o.guide && o.guide.n, 0, 0, GUIDE.length), hide: !!(o.guide && o.guide.hide) };
    o.autoSeen = Array.isArray(o.autoSeen) ? o.autoSeen.filter(x => AUTO.some(a => a.id === x)) : AUTO.filter(a => a.need(o)).map(a => a.id);
    o.noEv = false; o.noSig = false; o.goldConv = o.goldConv !== false; o.lowFx = o.lowFx === true; o.cgAuto = o.cgAuto !== false;
    o.autoNew = (Array.isArray(o.autoNew) ? o.autoNew : []).filter((x, i, a) => AUTO.some(z => z.id === x) && a.indexOf(x) === i);
    { const cs = o.cos && typeof o.cos === 'object' ? o.cos : {}; const own = [...new Set((Array.isArray(cs.own) ? cs.own : []).filter(id => COS_BY_ID[id] && !COS_BY_ID[id].free))];
      const seen = {}; for (const k of COS_SLOTS) { const v = cs.seen && cs.seen[k]; if (v != null && COS_TIERS[k] > 0) seen[k] = int(v, 0, 0, COS_TIERS[k] - 1); }
      o.cos = { own, seen, look: {} }; for (const k of COS_SLOTS) { const v = cs.look && cs.look[k]; if (typeof v === 'string' && (v === 'hide' && !COS_NOHIDE[k] || /^t\d$/.test(v) && +v.slice(1) <= (seen[k] ?? -1) || COS_BY_ID[v] && (own.includes(v) || COS_BY_ID[v].free) && COS_BY_ID[v].slot === k)) o.cos.look[k] = v; } }
    { const cgs = o.cg && typeof o.cg === 'object' ? o.cg : {}; const ci = it => it && typeof it === 'object' && CG_BASE[it.k] ? { k: it.k, r: int(it.r, 0, 0, 4), q: int(it.q, 100, 80, 120) } : null;
      o.cg = { bag: (Array.isArray(cgs.bag) ? cgs.bag : []).map(ci).filter(Boolean).slice(0, CG_BAG), eq: {} };
      for (const [id, e] of Object.entries(cgs.eq || {})) if (o.comp[id] && e && typeof e === 'object' && !/__proto__|constructor|prototype/.test(id)) { const z = {}; for (const k of CG_KINDS) { const it = ci(e[k]); if (it && it.k === k) z[k] = it; } if (Object.keys(z).length) o.cg.eq[id] = z; } }
    { const ex = o.exped && typeof o.exped === 'object' ? o.exped : {}; const used = new Set();
      o.shopBuy = { expSlot: int(o.shopBuy && o.shopBuy.expSlot, 0, 0, EXP_MAX - EXP_SLOTS), keyDay: o.shopBuy && isDay(o.shopBuy.keyDay) ? o.shopBuy.keyDay : '', keyN: int(o.shopBuy && o.shopBuy.keyN, 0, 0, 99) };
      o.mile = int(o.mile, 0, 0, 1e9);
      { const w = o.soul; o.soul = w && typeof w === 'object' && w.made ? { made: true, look: SOUL_LOOKS.includes(w.look) ? w.look : SOUL_LOOKS[0], name: cleanName(w.name) || null, lv: Math.min(int(w.lv, 1, 1, SOUL_MAXLV), Math.max(1, num(o.bestFloor) || 1, num(o.maxFloor) || 1)), xp: Math.max(0, Math.min(1e6, Number(w.xp) || 0)), opt: [...new Set((Array.isArray(w.opt) ? w.opt : []).filter(k => SOUL_FX[k]))].slice(0, SOUL_SLOT_AT.length), show: w.show !== false } : null; if (o.soul && !o.soul.opt.length) o.soul.opt = ['cut']; o.soulKills = int(o.soulKills, 0, 0, 1e7); }
      { const ps = o.pets && typeof o.pets === 'object' ? o.pets : {}; const own = {}; for (const id of PETS) { const p = ps.own && ps.own[id]; if (p && typeof p === 'object') own[id] = { lv: int(p.lv, 1, 1, PET_MAX), k: PET_FX[p.k] ? p.k : 'atk', r: int(p.r, 0, 0, 4) }; }
        const c = ps.cand; const fin = v => { const x = Number(v); return Number.isFinite(x) && x > 0 ? Math.min(x, 1e300) : 0; };
        o.pets = { own, pot: fin(ps.pot), ppm: fin(ps.ppm), peak: fin(ps.peak), pin: fin(ps.pin), pt: Math.min(600, fin(ps.pt)), act: own[ps.act] ? ps.act : (Object.keys(own)[0] || null), cand: c && typeof c === 'object' && own[c.id] && PET_FX[c.k] ? { id: c.id, k: c.k, r: int(c.r, 0, 0, 4) } : null }; }
      delete o.resolve;
      { const mp = o.mrp && typeof o.mrp === 'object' ? o.mrp : {}; o.mrp = {}; for (const id of Object.keys(MR_POW)) { const x = mp[id]; if (x && typeof x === 'object') { const lv = int(x.lv, 0, 0, MRP_MAX); o.mrp[id] = { lv, xp: lv >= MRP_MAX ? 0 : num(x.xp, 0, 0, mrpNeed(lv)) }; } } }
      o.exped = { slots: Array.from({ length: expCap(o) }, (_, i) => { const x = (ex.slots || [])[i]; if (!x || typeof x !== 'object' || !EXP_DUR[x.di]) return null; const ids = [...new Set(Array.isArray(x.ids) ? x.ids : [])].filter(id => typeof id === 'string' && o.comp[id] && !used.has(id)).slice(0, EXP_SIZE); if (!ids.length) return null; ids.forEach(id => used.add(id)); const start = num(x.start, now, 0, now + 60000); return { ids, di: int(x.di, 0, 0, 2), start, end: Math.min(num(x.end, start, start, start + 8 * 3600e3), start + EXP_DUR[int(x.di, 0, 0, 2)] * 3600e3), mult: num(x.mult, 1, 0.4, 1.5) }; }) }; } }
  const clampRune = ru => (ru && typeof ru === 'object' && RUNE_STATS[ru.k]) ? Object.assign({ k: ru.k, r: int(ru.r, 0, 0, 4), t: int(ru.t, 1, 1, 1000), u: int(ru.u, 0, 0, RUNE_UP_MAX) }, (ru.k2 && RUNE_STATS[ru.k2] && ru.k2 !== ru.k && int(ru.r, 0, 0, 4) === 4) ? { k2: ru.k2 } : {}) : null;
  { const rs = o.rift || {}; o.rift = { keys: int(rs.keys, KEY_DAILY, 0, KEY_MAX + 20), best: int(rs.best, 0, 0, 1000), lvl: 1 }; o.rift.lvl = int(rs.lvl, 1, 1, o.rift.best + 1);
    const ru = o.runes || {}; o.runes = { eq: Array.from({ length: RUNE_SLOTS }, (_, i) => clampRune((ru.eq || [])[i])), bag: (Array.isArray(ru.bag) ? ru.bag : []).map(clampRune).filter(Boolean).slice(0, RUNE_BAG), dust: num(ru.dust, 0, 0, 1e15) };
    const tws = o.towers || {}; o.towers = {}; for (const T of TOWERS) if (T.id !== 'inf') o.towers[T.id] = { best: int(tws[T.id] && tws[T.id].best, 0, 0, 1e6), tries: int(tws[T.id] && tws[T.id].tries, TOWER_TRIES, 0, TOWER_TRIES) }; }
  const tw = o.tower || {};
  o.tower = { best: int(tw.best, 0, 0, 1e6), tries: int(tw.tries, TOWER_TRIES, 0, TOWER_TRIES), prev: tw.prev && typeof tw.prev === 'object' ? { floor: int(tw.prev.floor, o.floor, 1, 1e6), kills: int(tw.prev.kills), prog: num(tw.prev.prog, 0, 0, 1), bossLock: !!tw.prev.bossLock } : null };
  const au = o.auto || {};
  o.auto = { ...pickObj(au, AUTO.map(a => a.id), v => !!v), rbMode: au.rbMode === 'floor' ? 'floor' : 'stuck', rbStuck: int(au.rbStuck, 30, 5, 9999), rbFloor: int(au.rbFloor, 0, 0, 1e6) };
  // 진행 중이던 보스/탑 상태
  const bo = o.boss;
  if (bo && typeof bo === 'object' && Number.isFinite(+bo.hp) && Number.isFinite(+bo.max)) {
    const tmax = num(bo.tmax, BOSS_TIME, 1, BOSS_TIME + 60);
    o.boss = { hp: num(bo.hp, 1, 0, +bo.max), max: num(bo.max, 1, 1), timer: num(bo.timer, tmax, 0, tmax), tmax };
    if (bo.tower && o.tower.prev) {
      const tid = bo.tower === 'rift' ? 'rift' : (TOWER_BY_ID[bo.tower] ? bo.tower : 'inf');
      o.boss.tower = tid; o.boss.tf = int(bo.tf, 1, 1, tid === 'rift' ? RIFT_WAVES : 1e6);
      if (tid === 'rift') { o.boss.L = int(bo.L, 1, 1, o.rift.best + 1); o.boss.max = riftHp(o.boss.L, o.boss.tf); }
      else o.boss.max = towerHp(o.boss.tf, tid);
      o.boss.hp = Math.min(o.boss.hp, o.boss.max);
      const gn = bo.gain || {}; o.boss.gain = {}; for (const k of ['ess', 'stones', 'shards', 'keys']) if (gn[k]) o.boss.gain[k] = int(gn[k]);
    }
    else if (!isBossFloor(o.floor)) o.boss = null;
    else { o.boss.max = bossHp(o.floor); o.boss.hp = Math.min(o.boss.hp, o.boss.max); }
  } else o.boss = null;
  o.hp = o.boss && o.hp != null ? num(o.hp, 0, 0) : null;
  // 오프라인 보고서
  const p = o.pending;
  o.pending = p && typeof p === 'object' ? { seconds: num(p.seconds), gold: num(p.gold), floors: int(p.floors, 0, 0, 1e6), kills: num(p.kills), levels: int(p.levels, 0, 0, 1e6), stones: int(p.stones, 0, 0, 1e9), rebirths: int(p.rebirths), drops: (Array.isArray(p.drops) ? p.drops : []).map(clampItem).filter(Boolean).slice(0, 8) } : null;
  return o;
}
export function normalize(s) {
  const b = newSave();
  if (!s || typeof s !== 'object') return b;
  const o = { ...b, ...s };
  o.equip = { ...b.equip };
  for (const k of Object.keys(b.equip)) { const e = clampItem((s.equip || {})[k]); if (e) delete e.n; o.equip[k] = e; }
  {
    const merged = new Map();
    for (const raw of (Array.isArray(s.bag) ? s.bag : [])) {
      const it = clampItem(decItem(raw));
      if (!it) continue;
      const k = itemKey(it);
      if (merged.has(k)) merged.get(k).n += it.n || 1;
      else merged.set(k, { ...cloneItem(it), n: it.n || 1 });
    }
    o.bag = [...merged.values()];
    o._trimmed = trimBag(o);
  }
  o.up = { ...(s.up || {}) };
  o.relic = { ...(s.relic || {}) };
  o.life = { ...b.life, ...(s.life || {}) }; if (!s.life) o.life.kills = s.totalKills || 0;
  o.quest = s.quest && typeof s.quest === 'object' ? s.quest : {};
  o.boost = { ...b.boost, ...(s.boost || {}) };
  o.tower = { ...b.tower, ...(s.tower || {}) };
  o.auto = { ...b.auto, ...(s.auto || {}) };
  if (!Array.isArray(s.autoSeen)) o.autoSeen = null;
  if (!s.guide && ((s.rebirths || 0) > 0 || (s.bestFloor || s.maxFloor || 0) >= 30)) o.guide = { n: 0, hide: true };   // 이미 익숙한 플레이어는 가이드를 접어 둔다
  o.ench = { ...(s.ench || {}) }; o.enchX = { ...(s.enchX || {}) }; o.ach = { ...(s.ach || {}) };
  o.bestiary = Array.isArray(s.bestiary) ? s.bestiary.slice(0, ZONES) : [];
  // 탑 도중 저장된 세이브: 보스 상태는 그대로 이어서 진행
  if (s.honorPts == null) o.honorPts = o.honor || 0;   // v4.6 이전 세이브: 지금까지 모은 명예를 유물 구매용으로 지급
  o.bestFloor = Math.max(o.bestFloor || 0, o.maxFloor || 0);
  if (s.cycleBest == null) o.cycleBest = o.bestFloor;
  o.skills = { ...(s.skills || {}) };
  o.cd = { ...(s.cd || {}) };
  o.buffs = Array.isArray(s.buffs) ? s.buffs : [];
  o.comp = {};
  for (const [id, v] of Object.entries(s.comp || {})) o.comp[id] = { ...v };
  if (s.shards == null) {   // v4.8 이전: 지금까지 5각성 이후로 뽑힌 중복을 조각으로 소급 지급
    let sh = 0;
    for (const [id, v] of Object.entries(o.comp)) { const c = COMP_BY_ID[id]; if (c && v.aw >= AWAKEN_MAX) sh += Math.max(0, (v.n || 0) - 1 - AWAKEN_MAX) * SHARD_GAIN[c.r]; }
    o.shards = sh;
  }
  o.team = Array.isArray(s.team) ? s.team.slice(0, TEAM_MAX) : [];
  o.presets = Array.isArray(s.presets) ? s.presets.slice(0, 3) : [];
  if ((s.v || 0) >= 4 && (s.v || 0) < 6 && !s.lang) o.lang = 'ko';   // 기존 한국어 플레이어는 한국어 유지
  if ((s.v || 0) >= 4 && (s.v || 0) < 6) o.v = 6;
  if ((s.v || 0) >= 4 && (s.v || 0) < 5) {        // v4 → v5: 5레벨 보너스 스킬 포인트 소급
    o.sp = (o.sp || 0) + Math.floor((o.level || 1) / 5);
    o.v = 5;
  }
  if ((s.v || 0) < 4) {
    // v3 이하 → v4 이관: 동료 id 문자열화, 스킬 초기화 후 SP 환급, 직업 선택 대기
    const comp = {};
    for (const [k, v] of Object.entries(s.comp || {})) {
      const id = OLD_COMP_IDS[Number(k)] || k;
      if (COMP_BY_ID[id]) comp[id] = v;
    }
    o.comp = comp;
    o.team = (s.team || []).map(k => OLD_COMP_IDS[Number(k)] || k).filter(id => COMP_BY_ID[id]).slice(0, TEAM_MAX);
    o.skills = {}; o.cd = {}; o.buffs = [];
    o.sp = Math.max(0, (o.level || 1) - 1);
    o.cls = null;
    o.v = SAVE_VER;
  }
  return sanitize(o);
}

// ---------- 아이템 ----------
export function itemValue(it) {
  const sl = SLOT_BY_ID[it.s];
  const v = sl.base * Math.pow(sl.g, it.t) * RARITIES[it.r].mult;
  return sl.flat ? v * (1 + 0.05 * (it.f || 0)) : v;
}
export function sellPrice(it) { return Math.ceil((1 + 0.25 * (it.a ? it.a.length : 0) + (it.u ? 1 : 0)) * (SLOT_BY_ID[it.s].flat ? itemValue(it) : itemValue(it) * 6) * 2.2 * Math.pow(1.25, it.t) * (1 + (it.f || 0) * 0.08)); }
// ---------- 추가 옵션 ----------
// 등급별 옵션 개수: 일반 0 · 고급 1 · 희귀 2 · 영웅 3 · 전설 3 + 고유 효과
export const AFFIX_COUNT = [0, 1, 2, 3, 3];
export const AFFIXES = {
  atkP:    { base: 3,   pre: '예리한' },
  hpP:     { base: 4,   pre: '견고한' },
  crit:    { base: 1.2, pre: '정밀한' },
  critDmg: { base: 6,   pre: '잔혹한' },
  spd:     { base: 3,   pre: '신속한' },
  cdr:     { base: 1.2, pre: '현자의' },
  skillP:  { base: 4,   pre: '마력의' },
  compP:   { base: 5,   pre: '지휘관의' },
  bossP:   { base: 4,   pre: '용사냥꾼의' },
  goldP:   { base: 5,   pre: '행운의' },
  def:     { base: 1.5, pre: '수호의' },
  regen:   { base: 0.3, pre: '재생의' },
  xpP:     { base: 4,   pre: '깨달음의' },
};
const AFFIX_KEYS = Object.keys(AFFIXES);
export function affixBase(k, t) { return AFFIXES[k].base * (1 + 0.3 * t); }

// ---------- 전설 고유 효과 (부위마다 2종) ----------
export const UNIQUES = {
  thunder:   { slot: 'weapon', name: '뇌신',   desc: '치명타 때 20% 확률로 낙뢰 (공격력 4배)', mech: 'thunder' },
  vamp:      { slot: 'weapon', name: '흡혈귀', desc: '공격력 +15% · 보스전 초당 체력 2% 회복', stats: { atkP: 15, regen: 2 } },
  immortal:  { slot: 'body',   name: '불멸',   desc: '보스전 시작 후 5초간 무적', mech: 'invuln' },
  thorns:    { slot: 'body',   name: '가시',   desc: '받는 피해 -20% · 보스 피해 +15%', stats: { def: 20, bossP: 15 } },
  sage:      { slot: 'head',   name: '대현자', desc: '스킬 피해 +40% · 쿨타임 -10%', stats: { skillP: 40, cdr: 10 } },
  eagle:     { slot: 'head',   name: '매의 눈', desc: '치명타 +10% · 치명타 피해 +40%', stats: { crit: 10, critDmg: 40 } },
  shade:     { slot: 'cloak',  name: '그림자', desc: '받는 피해 -15% · 공격속도 +20', stats: { def: 15, spd: 20 } },
  phoenix:   { slot: 'cloak',  name: '불사조', desc: '보스전에서 쓰러지면 1회 체력 30%로 부활', mech: 'revive' },
  fury:      { slot: 'gloves', name: '연타',   desc: '공격할 때 15% 확률로 한 번 더 공격', mech: 'double' },
  midas:     { slot: 'gloves', name: '미다스', desc: '골드 획득 +80%', stats: { goldP: 80 } },
  chrono:    { slot: 'boots',  name: '시간',   desc: '쿨타임 -20%', stats: { cdr: 20 } },
  gale:      { slot: 'boots',  name: '질풍',   desc: '공격속도 +35', stats: { spd: 35 } },
  dragoneye: { slot: 'ring',   name: '용의 눈', desc: '치명타 피해 +80%', stats: { critDmg: 80 } },
  echo:      { slot: 'ring',   name: '공명',   desc: '액티브 스킬을 쓸 때 동료가 즉시 함께 공격 (동료 DPS 3초분)', mech: 'echo' },
  command:   { slot: 'amulet', name: '총사령관', desc: '동료 피해 +80%', stats: { compP: 80 } },
  wisdom:    { slot: 'amulet', name: '깨달음', desc: '경험치 +40% · 골드 획득 +30%', stats: { xpP: 40, goldP: 30 } },
};
// ---------- 보스 전용 드롭: 구역마다 정해진 전설 고유 효과 + 천장 ----------
export const SIG_RATE = 0.01, SIG_PITY = 40;
export const SIG_ORDER = ['vamp', 'thorns', 'gale', 'eagle', 'midas', 'shade', 'fury', 'chrono', 'command', 'sage', 'immortal', 'wisdom', 'dragoneye', 'phoenix', 'echo', 'thunder'];
export function sigOf(zone) { return SIG_ORDER[zone % SIG_ORDER.length]; }
const UNIQ_BY_SLOT = {};
for (const [id, u] of Object.entries(UNIQUES)) (UNIQ_BY_SLOT[u.slot] ||= []).push(id);

// ---------- 등급 확률 (층이 깊을수록 윗등급 가중치가 조금씩 오름) ----------
export function rarityWeights(floor, boss = false) {
  const f = Math.max(1, floor);
  const w = [
    Math.max(32, 62 - 0.45 * f),
    Math.min(36, 28 + 0.15 * f),
    Math.min(22, 8 + 0.22 * f),
    Math.min(8, 1.8 + 0.1 * f),
    Math.min(1.6, 0.2 + 0.022 * f),
  ];
  if (boss) { w[0] = 0; w[1] = 0; w[4] *= 3; }
  return w;
}
export function rarityOdds(floor, boss = false) {
  const w = rarityWeights(floor, boss); const sum = w.reduce((a, b) => a + b, 0);
  return w.map(x => x / sum);
}
function pickRarity(floor, boss) {
  const w = rarityWeights(floor, boss); let x = Math.random() * w.reduce((a, b) => a + b, 0);
  for (let i = 0; i < w.length; i++) { x -= w[i]; if (x <= 0) return i; }
  return 0;
}
export function rollItem(floor, boss = false) {
  const sl = SLOTS[Math.floor(Math.random() * SLOTS.length)];
  const maxT = sl.tiers - 1;
  let t = Math.min(maxT, Math.floor(floor / (64 / sl.tiers)));
  if (Math.random() < 0.3) t = Math.max(0, t - 1);
  if (Math.random() < 0.1) t = Math.min(maxT, t + 1);
  const r = pickRarity(floor, boss);
  const it = { s: sl.id, t, r, f: Math.floor(floor / 4) };
  const n = AFFIX_COUNT[r];
  if (n) {
    const keys = AFFIX_KEYS.slice().sort(() => Math.random() - 0.5).slice(0, n);
    it.a = keys.map(k => [k, Math.round(affixBase(k, t) * (0.7 + Math.random() * 0.6) * (1 + 0.15 * r) * 10) / 10]);
  }
  if (r === 4) { const pool = UNIQ_BY_SLOT[sl.id]; it.u = pool[Math.floor(Math.random() * pool.length)]; }
  return it;
}
export function rollSig(floor, uid) {
  const u = UNIQUES[uid]; let it, g = 0;
  do { it = rollItem(floor, true); } while (it.s !== u.slot && ++g < 80);
  if (it.s !== u.slot) { const sl = SLOT_BY_ID[u.slot]; it = { s: sl.id, t: Math.min(sl.tiers - 1, Math.floor(floor / (64 / sl.tiers))), r: 4, f: Math.floor(floor / 4) }; it.a = AFFIX_KEYS.slice().sort(() => Math.random() - 0.5).slice(0, AFFIX_COUNT[4]).map(k => [k, Math.round(affixBase(k, it.t) * (0.7 + Math.random() * 0.6) * 1.6 * 10) / 10]); }
  if (it.r !== 4) { it.r = 4; it.a = AFFIX_KEYS.slice().sort(() => Math.random() - 0.5).slice(0, AFFIX_COUNT[4]).map(k => [k, Math.round(affixBase(k, it.t) * (0.7 + Math.random() * 0.6) * 1.6 * 10) / 10]); }
  it.u = uid; return it;
}
function sigRoll(s, f, ev) {
  const z = monsterIndex(f); s.bossPity ||= {}; s.sigGot ||= {};
  const n = (s.bossPity[z] || 0) + 1;
  if (n >= SIG_PITY || Math.random() < SIG_RATE) {
    s.bossPity[z] = 0; s.sigGot[z] = (s.sigGot[z] || 0) + 1;
    const it = rollSig(f, sigOf(z)); (ev.drops ||= []).push(it); ev.sig = { z, u: it.u }; pickup(s, it, ev);
  } else s.bossPity[z] = n;
}
export function itemScore(it) {
  const sl = SLOT_BY_ID[it.s];
  const main = Math.pow(sl.g, it.t) * RARITIES[it.r].mult * (sl.flat ? 1 + 0.05 * (it.f || 0) : 1);
  let q = 0;
  for (const [k, v] of it.a || []) if (AFFIXES[k]) q += v / affixBase(k, it.t);
  return main * (1 + 0.12 * q + (it.u ? 0.5 : 0));
}
export function itemPrefix(it) {
  if (it.u && UNIQUES[it.u]) return '【' + UNIQUES[it.u].name + '】';
  if (!it.a || !it.a.length) return '';
  let best = it.a[0], bq = 0;
  for (const [k, v] of it.a) { const q = v / affixBase(k, it.t); if (q > bq) { bq = q; best = [k, v]; } }
  return AFFIXES[best[0]] ? AFFIXES[best[0]].pre : '';
}

// ---------- 스탯 ----------
export function stats(s) {
  const up = s.up || {};
  const honorMult = 1 + (s.honor || 0) * 0.05;
  const a = { atkP: 0, hpP: 0, crit: 0, spd: 0, goldP: 0, bossP: 0, def: 0, cdr: 0, critDmg: 0, skillP: 0, compP: 0, regen: 0, weak: 0, xpP: 0 };
  const mech = {};
  const add = (k, v) => { if (k in a) a[k] += v; };

  const cl = CLASSES[s.cls || 'war'];
  for (const [k, v] of Object.entries(cl.mods)) add(k, v);

  const eAtk = upEff('atk', up.atk), eHp = upEff('hp', up.hp);
  let atk = 5 + (s.level - 1) * 3 + eAtk * 2;
  let hp = 60 + (s.level - 1) * 14 + eHp * 12;
  add('atkP', eAtk * 4);
  add('hpP', eHp * 4);
  add('crit', (up.crit || 0) * 0.5);
  add('spd', (up.spd || 0) * 3);
  add('goldP', upEff('gold', up.gold) * 5);
  add('skillP', upEff('skill', up.skill) * 4);
  add('compP', upEff('comp', up.comp) * 5);

  for (const sl of SLOTS) {
    const it = s.equip[sl.id];
    if (!it) continue;
    const v = itemValue(it) * enchMult(s, sl.id);
    if (sl.stat === 'atk') atk += v;
    else if (sl.stat === 'hp') hp += v;
    else add(sl.stat, v);
    for (const [k, av] of it.a || []) add(k, av);
    const u = it.u && UNIQUES[it.u];
    if (u) { for (const [k, uv] of Object.entries(u.stats || {})) add(k, uv); if (u.mech) mech[u.mech] = true; }
  }
  // 보유 효과 (획득한 모든 동료) — 동료 구성이 바뀔 때만 다시 계산
  for (const [k, v] of ownSumCached(s)) add(k, v);
  // 동행 효과 (편성한 동료)
  const team = [], selfX = {}, mrX = { atk: 1, comp: 1, skill: 1 };
  let pAll = 0;
  for (const id of s.team || []) {
    const c = COMP_BY_ID[id], st = (s.comp || {})[id];
    if (!c || !st || onExped(s, id)) continue;
    add(c.team.k, teamValue(s, c, st.aw, st.lv) * cgMult(s, id, 'charm'));
    team.push({ c, aw: st.aw, lv: st.lv || 0 });
    { const mp = MR_POW[id], ml = mp ? mrpLv(s, id) : 0;
      if (ml) { if (mp.k === 'atk') mrX.atk *= 1 + mp.v * ml / 100; else if (mp.k === 'crit') add('crit', mp.v * ml); else if (mp.k === 'haste') add('cdr', mp.v * ml); else if (mp.k === 'comp') mrX.comp *= 1 + mp.v * ml / 100;
        if (mp.k2 === 'skill') mrX.skill *= 1 + mp.v2 * ml / 100; } }
    if (st.aw >= CSK_AW_P) {
      const p = compPassive(c);
      if (p.eff === 'stat') add(p.k, p.val);
      else if (p.eff === 'self') selfX[c.id] = 1 + p.val / 100;
      else if (p.eff === 'allcomp') pAll += p.val / 100;
    }
  }
  // 버프 (변이 B 버프는 공격력·동료·스킬 효과가 따로 곱해진다)
  const xm = { atkP: 1, compP: 1, skillP: 1 };
  for (const b of s.buffs || []) for (const [k, v] of Object.entries(b.stats || {})) { if (k[0] === 'x' && xm[k.slice(1)] != null) xm[k.slice(1)] *= 1 + v / 100; else add(k, v); }
  // 던전 이벤트·오늘의 던전 효과
  add('def', ebuffMult(s, 'armor')); add('critDmg', ebuffMult(s, 'critD')); add('spd', ebuffMult(s, 'spdA'));

  // 패시브 (현재 직업) + Lv.10 변이
  let extra = 0, extraBoss = 0, pHeal = 0, pCdr = 0, pShield = 0, pGold = 0, pXp = 0, pComp = 0, cdrCap = 0.35;
  let muAtk = 1, muSkill = 1, muComp = 1;
  const spd = Math.max(20, 100 + a.spd);
  const aps = spd / 100;
  for (const sd of classSkills(s.cls || 'war', 'passive')) {
    const lv = s.skills[sd.id] || 0;
    if (!lv) continue;
    let c = passiveChance(sd, lv) / 100, m = passiveMult(sd, lv), blk = 50;
    const mu = mutOf(s, sd), k = mutKind(sd);
    if (mu) {
      if (k === 'extra') { if (mu === 'a') c *= 1.35; }
      else if (k === 'pheal') { if (mu === 'a') m *= 2; else a.def += 40; }
      else if (k === 'pcdr') { if (mu === 'a') { m *= 1.5; cdrCap = 0.55; } else muSkill *= 1.4; }
      else if (k === 'pshield') { if (mu === 'a') blk = 75; else c *= 2; }
      else if (k === 'pgold') { if (mu === 'a') m *= 2; else { m *= 0.5; muAtk *= 1.2; } }
      else if (k === 'pxp') { if (mu === 'a') m *= 2.5; else muAtk *= 1.2; }
      else if (k === 'pcomp') { if (mu === 'a') m *= 1.6; else muComp *= 1.5; }
    }
    if (sd.eff === 'extra') { extra += c * m; if (mu === 'b') extraBoss += c * m; if (sd.heal) pHeal += aps * c * sd.heal; }
    else if (sd.eff === 'heal') pHeal += aps * c * m;
    else if (sd.eff === 'cdr') pCdr += aps * c * m;
    else if (sd.eff === 'shield') pShield += Math.min(1, aps * c * m) * blk;
    else if (sd.eff === 'gold') pGold += c * m;
    else if (sd.eff === 'xp') pXp += c * m;
    else if (sd.eff === 'comp') pComp += c * m;
  }

  const rt = runeTotals(s);
  add('critDmg', 4 * masteryLv(s, 'crit') + (rt.crit || 0));
  const pa = petAgg(s); add('crit', pa.crit); add('cdr', pa.haste);
  const sfx = soulAgg(s);
  if (mech.double) extra += 0.15;
  const crit = Math.min(1000, 5 + a.crit);   // 100% 초과분은 확률로 다단 치명타 (워프레임 방식, 기대값은 선형)
  const critMult = 2.5 + a.critDmg / 100;
  const sb = setBonus(s), ap = achPower(s), kx = 1 + KARMA_POW * (s.karma || 0);
  const xcd = 1 + ENCHX_POW * enchXSum(s), pAtkX = 1 + pa.atk / 100, pHpX = 1 + pa.hp / 100;
  const mAtk = (1 + 0.03 * masteryLv(s, 'atk')) * (1 + (rt.atk || 0) / 100) * xcd * pAtkX, mHp = (1 + 0.03 * masteryLv(s, 'hp')) * (1 + (rt.hp || 0) / 100) * xcd * pHpX;
  const rAtk = (1 + relicVal(s, 'atk') / 100) * (1 + sb / 100) * ap.atk * kx * mAtk, rHp = (1 + relicVal(s, 'hp') / 100) * (1 + sb / 100) * ap.hp * kx * mHp;
  const atkF = atk * Math.max(0.1, 1 + a.atkP / 100) * honorMult * rAtk * ebuffMult(s, 'atkX') * muAtk * xm.atkP * mrX.atk;
  const hpF = hp * Math.max(0.2, 1 + a.hpP / 100) * rHp * ebuffMult(s, 'hpX');
  const hit = atkF * (1 + (crit / 100) * (critMult - 1));
  const thunder = mech.thunder ? Math.min(1, crit / 100) * 0.2 * 4 : 0;
  const heroDps = hit * aps * (1 + extra) + atkF * aps * thunder;
  const heroDpsBoss = hit * aps * (1 + extra + extraBoss) + atkF * aps * thunder;
  const basicAmp = cgBladeSum(s) / 100;   // 칼날 합계 (평타에만, 스킬은 heroDps 기준 그대로)
  // 성직자: 동료도 용사의 치명타 확률로 치명타 (동료 치명타는 고정 보너스, 100% 초과분은 여러 단계)
  const compCrit = s.cls === 'clr' ? 1 + (crit / 100) * CLR_COMP_CRIT : 1;
  const compMult = (1 + a.compP / 100) * (1 + pComp) * (1 + pAll) * (1 + (rt.comp || 0) / 100) * compCrit * ebuffMult(s, 'compX') * muComp * xm.compP * mrX.comp * (1 + pa.comp / 100);
  let compDps = 0;
  const compHits = team.map(({ c, aw, lv }) => { const d = compCoef(c, aw, lv) * atkF * compMult * (selfX[c.id] || 1); compDps += d; return { id: c.id, dps: d }; });
  const compActs = team.filter(x => x.aw >= CSK_AW_A).map(x => x.c);
  const skM = (1 + a.skillP / 100) * (1 + (rt.skill || 0) / 100) * ebuffMult(s, 'skillX') * muSkill * xm.skillP * mrX.skill * (1 + pa.skill / 100) * (1 + Math.min(sfx.power * 200, sfx.power * (s.soulKills || 0)) / 100);
  const basicX = (1 + basicAmp + BASIC_SKILL_K * Math.max(0, skM - 1)) * (1 + pa.basic / 100);
  const cdr = a.cdr;                    // 스킬 가속 (롤 방식): 쿨타임 = 기본 × 100 / (100 + 가속), 상한 없음
  // 숫자가 무한대로 터지면 이후 계산이 전부 NaN이 되므로 상한을 둔다
  const cap = v => (Number.isFinite(v) ? Math.min(v, 1e300) : (v > 0 ? 1e300 : 0));
  return {
    atk: cap(atkF), hp: cap(hpF), crit, critMult, spd, aps, hit: cap(hit),
    heroDps: cap(heroDps), compDps: cap(compDps), compHits, compActs, dps: cap(heroDps * basicX + compDps), dpsBoss: cap(heroDpsBoss * basicX + compDps), basicAmp, basicX: cap(basicX), sfx, hitRate: aps + team.length * COMP_HIT_RATE, 
    def: 100 * (1 - (100 / (100 + ARMOR_K * Math.max(0, a.def))) * (1 - Math.min(50, pShield) / 100)), armor: a.def, cdr,
    cdRate: 1 + cdr * 1 / 100 + Math.min(cdrCap, pCdr),
    regen: (a.regen + pHeal) * ebuffMult(s, 'regenX'),
    goldMult: (1 + a.goldP / 100 + pGold) * honorMult * (1 + relicVal(s, 'gold') / 100) * ap.gold * (1 + 0.03 * masteryLv(s, 'gold')) * (1 + (rt.gold || 0) / 100) * ebuffMult(s, 'goldX') * (1 + pa.gold / 100),
    bossMult: (1 + a.bossP / 100) * (1 + relicVal(s, 'boss') / 100) * (1 + (rt.boss || 0) / 100) * (1 + pa.boss / 100),
    skillMult: skM,
    weak: Math.min(80, a.weak),
    xpMult: (1 + pXp) * (1 + a.xpP / 100) * (1 + relicVal(s, 'xp') / 100) * ebuffMult(s, 'xpX') * (1 + pa.xp / 100), pet: pa,
    mech,
    extra, honorMult, raw: a,
  };
}

export function xpNeed(level) { return Math.ceil(xpPerKill(Math.max(1, Math.round(level * 1))) * (10 + 8 * level)); }

// ---------- 진행 엔진 ----------
function cast(s, st, sd, lv, ev) {
  const v = skillVal(sd, lv), mu = mutOf(s, sd);
  if (sd.eff === 'burst') {
    const muX = mu === 'a' ? (s.boss ? 1.6 : 1.1) : mu === 'b' ? (s.boss ? 1.1 : 1.5) : 1;
    let dmg = muX * st.heroDps * v * st.skillMult * (s.boss && sd.bossX ? sd.bossX : 1);
    if (st.sfx && st.sfx.echo) { dmg *= 1 + Math.min(135, st.sfx.echo) / 100; ev.soulEcho = (ev.soulEcho || 0) + 1; }
    if (sd.weak) pushBuff(s, sd.id, sd.dur, { weak: sd.weak });
    (ev.casts ||= []).push({ id: sd.id, dmg });
    return dmg;
  }
  if (sd.eff === 'buff') {
    const bs = sd.buff(v);
    if (mu === 'b') { for (const k of Object.keys(bs)) if (k === 'atkP' || k === 'compP' || k === 'skillP') { bs['x' + k] = bs[k]; delete bs[k]; } }
    pushBuff(s, sd.id, sd.dur * (mu === 'a' ? 2 : 1), bs);
    if (sd.heal && s.boss && s.hp != null) s.hp = Math.min(st.hp, s.hp + st.hp * sd.heal / 100);
    (ev.casts ||= []).push({ id: sd.id });
    return 0;
  }
  if (sd.eff === 'heal') {
    if (!s.boss || s.hp == null || s.hp > st.hp * 0.8) return -1;   // 필요할 때까지 대기
    const hv = v * (mu === 'a' ? 1.5 : 1);
    s.hp = Math.min(st.hp, s.hp + st.hp * hv / 100);
    if (mu === 'b') pushBuff(s, sd.id + ':b', 6, { def: 60 });
    (ev.casts ||= []).push({ id: sd.id, heal: st.hp * hv / 100 });
    return 0;
  }
  if (sd.eff === 'timer') {
    if (!s.boss || s.boss.timer > (s.boss.tmax || BOSS_TIME) * 0.5) return -1;   // 보스전 후반까지 대기
    s.boss.timer += v * (mu === 'a' ? 1.6 : 1);
    if (sd.heal && s.hp != null) s.hp = Math.min(st.hp, s.hp + st.hp * sd.heal / 100);
    if (sd.cdAll) for (const k of Object.keys(s.cd)) if (k !== sd.id) s.cd[k] = Math.max(0, s.cd[k] - sd.cdAll);
    (ev.casts ||= []).push({ id: sd.id, time: v });
    return 0;
  }
  if (sd.eff === 'gold') {
    const g = goldPerKill(s.floor) * st.goldMult * v * (mu === 'a' ? 2 : 1);
    if (mu === 'b') pushBuff(s, sd.id + ':b', 6, { xatkP: 40 });
    s.gold += g;
    ev.gold = (ev.gold || 0) + g;
    (ev.casts ||= []).push({ id: sd.id, gold: g });
    return 0;
  }
  return 0;
}
function compCast(s, st, c, a, ev) {
  const h = st.compHits.find(x => x.id === c.id), self = h ? h.dps : 0;
  const push = o => (ev.compCasts ||= []).push({ id: c.id, sk: a.id, eff: a.eff, ...o });
  if (a.eff === 'burst') { const dmg = self * a.val * (s.boss && a.bossX ? a.bossX : 1); push({ dmg }); return dmg; }
  if (a.eff === 'buff') { pushBuff(s, 'c:' + c.id, a.dur, { [a.k]: a.val }); push({}); return 0; }
  if (a.eff === 'cdr') { for (const k of Object.keys(s.cd)) s.cd[k] = Math.max(0, s.cd[k] - a.val); push({ v: a.val }); return 0; }
  if (a.eff === 'heal') {
    if (!s.boss || s.hp == null || s.hp > st.hp * 0.8) return -1;   // 필요할 때까지 대기
    s.hp = Math.min(st.hp, s.hp + st.hp * a.val / 100); push({ heal: st.hp * a.val / 100 }); return 0;
  }
  return 0;
}
function pushBuff(s, id, t, stats) {
  const b = s.buffs.find(x => x.id === id);
  if (b) { b.t = t; b.max = t; b.stats = stats; }
  else s.buffs.push({ id, t, max: t, stats });
}

export function step(s, dt, ev) {
  petTick(s, dt);
  ev = ev || {};
  if (!s.cls) return ev;
  autoTick(s, dt, ev);
  if (!s.noEv) eventTick(s, dt, ev);
  if (s.ebuffs && s.ebuffs.length) { for (const b of s.ebuffs) b.t -= dt; s.ebuffs = s.ebuffs.filter(b => b.t > 0); }
  if (!s.boss || !s.boss.tower) s.stuckT = (s.stuckT || 0) + dt;
  s.dropBank = Math.min(3, (s.dropBank || 0) + dt * DROP_PER_SEC);                    // 직업 선택 전에는 멈춤
  const st = stats(s);

  // 버프 시간
  for (const b of s.buffs) b.t -= dt;
  s.buffs = s.buffs.filter(b => b.t > 0);

  // 액티브 자동 시전
  let burst = 0;
  for (const sd of classSkills(s.cls, 'active')) {
    const lv = s.skills[sd.id] || 0;
    if (!lv) continue;
    let cd = s.cd[sd.id] ?? 1;
    cd -= dt * st.cdRate;
    // 큰 간격(오프라인)에서도 시전 횟수가 줄지 않게 밀린 만큼 여러 번 시전
    for (let n = 0; cd <= 0 && n < 8; n++) {
      const r = cast(s, st, sd, lv, ev);
      if (r >= 0) {
        burst += r; cd += sd.cd * mutCd(s, sd);
        if (st.sfx) soulOnCast(s, st, sd);
        if (st.mech.echo) { burst += st.compDps * 3; ev.echo = true; }
      } else { cd = 0; break; }
    }
    s.cd[sd.id] = Math.max(cd, -sd.cd);
  }
  // 동료 액티브 (5각성)
  if (st.compActs.length) {
    s.ccd ||= {};
    for (const c of st.compActs) {
      const a = compActive(c);
      let cd = s.ccd[c.id] ?? a.cd * 0.5;
      cd -= dt;
      for (let n = 0; cd <= 0 && n < 8; n++) { const r = compCast(s, st, c, a, ev); if (r < 0) { cd = 0; break; } cd += a.cd; if (r > 0) burst += r; }
      s.ccd[c.id] = cd;
    }
  }

  if (s.boss && s.boss.tower) return towerStep(s, st, dt, burst, ev);
  if (s.boss) {
    s.boss.timer -= dt;
    const sf = st.sfx || {}, tmx = s.boss.tmax || BOSS_TIME, el = tmx - s.boss.timer;
    const titanN = sf.titan ? Math.min(30, Math.floor(el / 0.5)) : 0;
    s.boss.hp -= (st.dpsBoss * dt + burst) * st.bossMult * (1 + titanN * sf.titan / 100);
    if (sf.cut && s.boss.hp > 0) s.boss.hp -= soulCutDmg(s.boss.hp, st, dt);
    let h = (s.hp == null ? st.hp : s.hp);
    if (sf.enpass) { s.boss.ep = (s.boss.ep || 0) + dt; if (s.boss.ep >= 5) { s.boss.ep -= 5; s.boss.hp -= s.boss.max * Math.min(5.25, sf.enpass) / 100; h += st.hp * Math.min(30, sf.enpass * 3) / 100; ev.soulEnpass = true; } }
    h += st.hp * (st.regen / 100) * dt;
    const invuln = st.mech.invuln && s.boss.timer > tmx - 5;
    const tankCut = sf.tank ? Math.min(sf.tank, Math.min(100, st.crit)) / 100 * 0.5 : 0;
    if (!invuln) h -= bossDps(s.floor) * (1 - st.def / 100) * (1 - st.weak / 100) * (1 - titanN * Math.min(2, sf.titan) / 100) * (1 - tankCut) * dt;
    if (h <= 0 && st.mech.revive && !s.boss.revived) { s.boss.revived = true; h = st.hp * 0.3; ev.revive = true; }
    s.hp = Math.min(st.hp, h);
    if (s.boss.hp <= 0) {
      ev.bossWin = true;
      gainKill(s, st, true, ev, 1); mrGain(s, 1, ev); soulGain(s, 1, ev); if (soulMade(s)) s.soulKills = (s.soulKills || 0) + 1;
      const bonus = 3 + Math.floor(s.floor / 5);
      s.stones += bonus;
      ev.stones = (ev.stones || 0) + bonus;
      s.boss = null; s.hp = null; s.bossFails = 0;
      advanceFloor(s, ev);
    } else if (s.boss.timer <= 0 || s.hp <= 0) {
      ev.bossLose = true;
      s.boss = null; s.hp = null;
      s.kills = 0; s.prog = 0;
      s.floor = Math.max(1, s.floor - 1);
      s.bossLock = true; s.bossFails = (s.bossFails || 0) + 1; s.autoBossT = 0;
    }
    return ev;
  }

  if (isBossFloor(s.floor)) {
    const bh = bossHp(s.floor);
    const tmax = bossTime(s);
    s.boss = { hp: bh, max: bh, timer: tmax, tmax };
    s.hp = st.hp;
    ev.bossStart = true; firstStrike(s);
    return ev;
  }

  const M = monHp(s.floor);
  s.prog += (st.dps * dt + burst) / (M * ebuffMult(s, 'monX'));
  let k = Math.floor(s.prog);
  if (k <= 0) return ev;
  s.prog -= k;
  let guard = 0;
  while (k > 0 && guard++ < 400) {
    const need = killsNeeded(s.floor);
    // 보스 대기 중: 다음 층이 보스면 올라가지 않고 이 층에서 계속 사냥
    if (s.bossLock && isBossFloor(s.floor + 1) && s.kills >= need) { gainKill(s, st, false, ev, k); s.kills = need; break; }
    const take = Math.min(k, need - s.kills);
    gainKill(s, st, false, ev, take);
    k -= take;
    if (s.kills >= need) {
      if (s.bossLock && isBossFloor(s.floor + 1)) { s.kills = need; ev.bossWait = true; continue; }
      advanceFloor(s, ev);
      if (isBossFloor(s.floor)) { s.prog = 0; break; }
    } else break;
  }
  return ev;
}
// 변이 B 버프: 보스전·탑·균열이 시작되면 바로 발동
function firstStrike(s) { for (const sd of classSkills(s.cls || 'war', 'active')) if (sd.eff === 'buff' && mutOf(s, sd) === 'b') s.cd[sd.id] = 0; }
export function canChallenge(s) { return !!s.bossLock && !s.boss && isBossFloor(s.floor + 1); }
export function challengeBoss(s) {
  if (!canChallenge(s)) { s.bossLock = false; return false; }
  s.bossLock = false; s.kills = 0; s.prog = 0; s.floor += 1;
  return true;
}

function gainKill(s, st, boss, ev, n) {
  const f = s.floor;
  const g = goldPerKill(f) * st.goldMult * (boss ? 20 : 1) * n;
  s.gold += g; petGain(s, g);
  s.xp += xpPerKill(f) * (boss ? 14 : 1) * n * (st.xpMult || 1);
  s.totalKills += n;
  if (!boss) { s.kills += n; const mi = monsterIndex(f); (s.bestiary ||= [])[mi] = (s.bestiary[mi] || 0) + n; }
  (s.life ||= {}).kills = (s.life.kills || 0) + n;
  qAdd(s, 'kill', n);
  if (boss) { s.life.bosses = (s.life.bosses || 0) + 1; qAdd(s, 'boss', 1); }
  ev.gold = (ev.gold || 0) + g;
  ev.kills = (ev.kills || 0) + n;
  let guard = 0;
  while (s.xp >= xpNeed(s.level) && guard++ < 300) {
    s.xp -= xpNeed(s.level);
    s.level++; s.sp++;
    if (s.level % 5 === 0) { s.sp++; ev.bonusSp = (ev.bonusSp || 0) + 1; }
    ev.levelUp = s.level;
  }
  let drops = 0;
  if (boss) drops = 1 + (Math.random() < 0.3 ? 1 : 0);
  else {
    const expected = n * 0.05;
    drops = Math.floor(expected);
    if (Math.random() < expected - drops) drops++;
    drops = Math.min(drops, Math.floor(s.dropBank || 0));
    s.dropBank = (s.dropBank || 0) - drops;
  }
  if (boss && !s.noSig) sigRoll(s, f, ev);
  for (let i = 0; i < drops; i++) {
    const it = rollItem(f, boss);
    (ev.drops ||= []).push(it);
    pickup(s, it, ev);
  }
}
function advanceFloor(s, ev) {
  s.floor++;
  s.kills = 0; s.prog = 0;
  if (s.floor > s.maxFloor) {
    s.maxFloor = s.floor; s.stuckT = 0; qAdd(s, 'floor', 1); mrGain(s, 1, ev); soulGain(s, 1, ev);
    if (s.floor > (s.bestFloor || 0)) s.bestFloor = s.floor;
    if (s.floor > (s.cycleBest || 0)) s.cycleBest = s.floor;
    const ns = 2 + relicVal(s, 'stone');
    s.stones += ns;
    ev.stones = (ev.stones || 0) + ns;
    ev.newDepth = s.floor;
  }
  ev.floorUp = s.floor;
}

// 희귀 이상 장비는 팔 때 강화 재료인 정수를 남긴다 (희귀 1 · 영웅 3 · 전설 10)
export const ESS_BY_R = [0, 0, 1, 3, 10];
function sellGain(s, it, cnt = 1) { const g = sellPrice(it) * cnt; s.gold += g; s.ess = (s.ess || 0) + ESS_BY_R[it.r] * cnt; qAdd(s, 'sell', cnt); return g; }
export function pickup(s, it, ev) {
  ev = ev || {}; markSeen(s, it);
  const cur = s.equip[it.s];
  // 자동 판매: 설정한 등급 이하이고 착용 중보다 좋지 않으면 바로 판다
  if ((s.autoSell ?? -1) >= 0 && it.r <= s.autoSell && cur && itemScore(it) <= itemScore(cur)) {
    sellGain(s, it); ev.autoSold = (ev.autoSold || 0) + 1; return;
  }
  if (s.autoEquip && (!cur || itemScore(it) > itemScore(cur))) {
    s.equip[it.s] = it;
    if (cur) addToBag(s, cur, ev);
    ev.equipped = it;
    return;
  }
  addToBag(s, it, ev);
}
const affSig = it => (it.a && it.a.length ? '|' + it.a.map(([k, v]) => k + v).join(',') : '') + (it.u ? '!' + it.u : '');
export const itemKey = it => it.s + it.t + it.r + ':' + (it.f || 0) + affSig(it);
const cloneItem = it => { const o = { s: it.s, t: it.t, r: it.r, f: it.f || 0 }; if (it.a && it.a.length) o.a = it.a.map(x => [x[0], x[1]]); if (it.u) o.u = it.u; return o; };
// 같은 장비(부위·단계·등급·층보정)는 한 칸에 겹쳐 쌓는다
const BAG_IDX = new WeakMap();                 // bag 배열 → Map(key → 묶음)
function bagIndex(s) {
  let m = BAG_IDX.get(s.bag);
  if (!m || m.size !== s.bag.length) { m = new Map(); for (const b of s.bag) m.set(itemKey(b), b); BAG_IDX.set(s.bag, m); }
  return m;
}
export function trimBag(s) {
  if (s.bag.length <= BAG_SOFT_CAP) return 0;
  const drop = s.bag.map((b, i) => [itemScore(b), i]).sort((a, b) => a[0] - b[0]).slice(0, s.bag.length - BAG_SOFT_CAP);
  const rm = new Set(drop.map(x => x[1]));
  s.bag = s.bag.filter((b, i) => { if (rm.has(i)) { sellGain(s, b, b.n || 1); return false; } return true; });
  return rm.size;
}
function addToBag(s, it, ev) {
  const k = itemKey(it);
  const idx = bagIndex(s);
  const st = idx.get(k);
  if (st) st.n = (st.n || 1) + 1;
  else { const o = { ...cloneItem(it), n: 1 }; s.bag.push(o); idx.set(k, o); }
  if (ev) (ev.bagKeys ||= new Set()).add(k);
  if (s.bag.length > BAG_SOFT_CAP + 50) { const n = trimBag(s); if (ev) ev.autoSold = (ev.autoSold || 0) + n; }
}
export function bagCount(s) { return s.bag.reduce((a, b) => a + (b.n || 1), 0); }
export function equipFromBag(s, idx) {
  const it = s.bag[idx];
  if (!it) return false;
  const cur = s.equip[it.s];
  s.equip[it.s] = cloneItem(it);
  if ((it.n || 1) > 1) it.n--; else s.bag.splice(idx, 1);
  if (cur) addToBag(s, cur, null);
  return true;
}
export function sellFromBag(s, idx, all = true) {
  const it = s.bag[idx];
  if (!it) return 0;
  const cnt = all ? (it.n || 1) : 1;
  const p = sellGain(s, it, cnt);
  if (all || (it.n || 1) <= 1) s.bag.splice(idx, 1); else it.n--;
  return p;
}
export function sellAllWorse(s) {
  let total = 0, cnt = 0;
  s.bag = s.bag.filter(it => {
    const cur = s.equip[it.s];
    if (cur && itemScore(it) <= itemScore(cur)) { total += sellGain(s, it, it.n || 1); cnt += it.n || 1; return false; }
    return true;
  });
  return total;
}
export function sellByRarity(s, maxR) {
  let total = 0;
  s.bag = s.bag.filter(it => {
    if (it.r <= maxR) { total += sellGain(s, it, it.n || 1); return false; }
    return true;
  });
  return total;
}

// ---------- 압축 직렬화 (가방이 커져도 동기화 한도 안에) ----------
const SLOT_CODE = { weapon: 'w', body: 'b', head: 'h', cloak: 'c', gloves: 'g', boots: 'o', ring: 'i', amulet: 'a' };
const CODE_SLOT = Object.fromEntries(Object.entries(SLOT_CODE).map(([k, v]) => [v, k]));
// 예: w35a|atkP4.2,crit1.8!thunder*3
function encItem(it) {
  return SLOT_CODE[it.s] + it.t + it.r + (it.f || 0).toString(36) + affSig(it) + ((it.n || 1) > 1 ? '*' + it.n : '');
}
function decItem(str) {
  if (typeof str !== 'string') return str;
  let [body, n] = str.split('*');
  let u = null; if (body.includes('!')) [body, u] = body.split('!');
  let aff = null; if (body.includes('|')) { const p = body.split('|'); body = p[0]; aff = p[1]; }
  const it = { s: CODE_SLOT[body[0]], t: +body[1], r: +body[2], f: parseInt(body.slice(3) || '0', 36), n: n ? +n : 1 };
  if (aff) it.a = aff.split(',').map(x => { const m = /^([a-zA-Z]+)(-?[\d.]+)$/.exec(x); return m ? [m[1], +m[2]] : null; }).filter(Boolean);
  if (u) it.u = u;
  return it;
}
export function serialize(s) {
  const c = { ...s };
  delete c._from; delete c._trimmed;
  c.bag = (s.bag || []).map(encItem);
  c.equip = Object.fromEntries(Object.entries(s.equip || {}).map(([k, v]) => [k, v ? encItem(v) : null]));
  return c;
}
export function buyUpgrade(s, id, k = 1) {
  const u = UPGRADES.find(x => x.id === id);
  if (!u || k < 1) return false;
  const n = s.up[id] || 0, c = upgradeCostN(u, n, k);
  if (s.gold < c) return false;
  s.gold -= c; s.up[id] = n + k; qAdd(s, 'up', k);
  return true;
}
// 소지금으로 살 수 있는 만큼 (가격이 구매마다 1.28배씩 오르므로 반복 횟수는 작다)
export function stoneMaxCount(s) {
  const disc = 1 - stoneDiscount(s); let b = s.stoneBuys || 0, g = s.gold, n = 0;
  for (; n < 5000; n++) { const c = Math.ceil(600 * Math.pow(1.28, b) * disc); if (g < c) break; g -= c; b++; }
  return n;
}
export function buyStoneMax(s) { let n = 0; const g0 = s.gold; for (; n < 5000; n++) if (!buyStone(s)) break; return { stones: n * 10, spent: g0 - s.gold }; }
export function buyStone(s) {
  const c = stonePrice(s);
  if (s.gold < c) return 0;
  s.gold -= c; s.stoneBuys = (s.stoneBuys || 0) + 1; s.stones += 10;
  return 10;
}

// ---------- 환생 ----------
export const REBIRTH_FLOOR = 30;
export function honorGain(s) {
  if (s.maxFloor < REBIRTH_FLOOR) return 0;
  // 층이 깊을수록 기하급수로 증가: B30 3 · B35 4 · B40 7 · B45 12 · B50 20 · B60 52 · B70 135
  return Math.max(1, Math.floor(3 * Math.pow(1.10, s.maxFloor - REBIRTH_FLOOR) * (1 + KARMA_HONOR * (s.karma || 0))));
}
// 환생·윤회 직전 남은 골드로 소환석을 산다 (가격 규칙은 일반 구매와 같음). 환경설정에서 끌 수 있다.
export let LAST_CONV = { stones: 0, gold: 0 };
function convertGold(s) { LAST_CONV = { stones: 0, gold: 0 }; if (s.goldConv === false) return LAST_CONV; const r = buyStoneMax(s); LAST_CONV = { stones: r.stones, gold: r.spent }; return LAST_CONV; }
export function convPreview(s) { return s.goldConv === false ? 0 : stoneMaxCount(s) * 10; }
export function rebirth(s) {
  const g = honorGain(s);
  if (!g) return 0;
  convertGold(s);
  const keep = {
    honor: s.honor + g, honorPts: (s.honorPts || 0) + g, relic: { ...(s.relic || {}) }, bestFloor: Math.max(s.bestFloor || 0, s.maxFloor), rebirths: s.rebirths + 1, autoEquip: s.autoEquip, createdAt: s.createdAt,
    cls: s.cls, banner: s.banner,
    comp: s.comp, team: s.team, presets: s.presets, stones: s.stones, shards: s.shards || 0, pulls: s.pulls, pity: s.pity, stoneBuys: 0, lang: s.lang,
    ...persistKeep(s),
  };
  keep.ess += gearEssence(s);
  Object.assign(s, newSave(), keep);
  s.lastTick = Date.now();
  qAdd(s, 'rebirth', 1);
  return g;
}
// 환생·윤회에도 남는 것
function persistKeep(s) {
  return {
    life: { ...(s.life || {}) }, quest: s.quest || {}, boost: { ...(s.boost || {}) }, tower: { ...(s.tower || {}), prev: null }, towers: JSON.parse(JSON.stringify(s.towers || {})), rift: { ...(s.rift || {}) }, runes: JSON.parse(JSON.stringify(s.runes || {})), auto: { ...(s.auto || {}) },
    ench: { ...(s.ench || {}) }, enchX: { ...(s.enchX || {}) }, ess: s.ess || 0, ach: { ...(s.ach || {}) }, bestiary: (s.bestiary || []).slice(), karma: s.karma || 0, reinc: s.reinc || 0,
    autoSell: s.autoSell, goldConv: s.goldConv !== false, lowFx: s.lowFx === true, cgAuto: s.cgAuto !== false, gachaOpt: { ...(s.gachaOpt || {}) }, mut: { ...(s.mut || {}) }, bossPity: { ...(s.bossPity || {}) }, sigGot: { ...(s.sigGot || {}) }, daily: s.daily ? JSON.parse(JSON.stringify(s.daily)) : null, guide: { ...(s.guide || {}) }, autoSeen: (s.autoSeen || []).slice(), autoNew: (s.autoNew || []).slice(), mrp: JSON.parse(JSON.stringify(s.mrp || {})), pets: JSON.parse(JSON.stringify(s.pets || {})), soul: s.soul ? JSON.parse(JSON.stringify(s.soul)) : null, soulKills: s.soulKills || 0, cos: JSON.parse(JSON.stringify(s.cos || {})), exped: JSON.parse(JSON.stringify(s.exped || {})), cg: JSON.parse(JSON.stringify(s.cg || {})), events: (s.events || []).slice(), evT: s.evT || 0, evLog: (s.evLog || []).slice(), bestFloor: Math.max(s.bestFloor || 0, s.maxFloor || 0), cycleBest: Math.max(s.cycleBest || 0, s.maxFloor || 0),
  };
}
// 환생·윤회 때 가방과 착용 장비는 사라지는 대신 정수로 분해된다
export function gearEssence(s) {
  let e = 0;
  for (const it of s.bag || []) e += ESS_BY_R[it.r] * (it.n || 1);
  for (const it of Object.values(s.equip || {})) if (it) e += ESS_BY_R[it.r];
  return e;
}

// ---------- 윤회 (2차 환생) ----------
// 누적 최고 B100 이후 해금. 명예·유물·환생 보상을 모두 내려놓고 업보를 얻는다.
export const REINC_FLOOR = 100;
export const KARMA_HONOR = 0.3;   // 업보 1당 명예 획득 +30%
export const KARMA_POW = 0.15;    // 업보 1당 공격력·체력 +15% (곱연산)
// 이번 윤회 주기에서 도달한 최고 층 기준: B100 1 · B110 4 · B120 9 · B130 16 · B150 36
export function karmaGain(s) { const c = s.cycleBest || 0; return c < REINC_FLOOR ? 0 : Math.floor(Math.pow((c - 90) / 10, 2)); }
export function canReinc(s) { return karmaGain(s) > 0; }
export function reincarnate(s) {
  if (!canReinc(s)) return 0;
  const k = karmaGain(s);
  convertGold(s);
  const keep = {
    cls: s.cls, banner: s.banner, autoEquip: s.autoEquip, createdAt: s.createdAt, lang: s.lang,
    comp: s.comp, team: s.team, presets: s.presets, stones: s.stones, shards: s.shards || 0, pulls: s.pulls, pity: s.pity,
    rebirths: s.rebirths, ...persistKeep(s),
  };
  keep.karma = (s.karma || 0) + k; keep.reinc = (s.reinc || 0) + 1; keep.cycleBest = 0; keep.soulKills = 0;
  keep.ess = (keep.ess || 0) + gearEssence(s);
  Object.assign(s, newSave(), keep);
  s.lastTick = Date.now();
  return k;
}

// ---------- 미션 · 출석 · 부스트 ----------
const pad2 = n => String(n).padStart(2, '0');
export function localDay(now = Date.now()) { const d = new Date(now); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
export function weekKey(now = Date.now()) { const d = new Date(now); const back = (d.getDay() + 6) % 7; return localDay(new Date(d.getFullYear(), d.getMonth(), d.getDate() - back).getTime()); }
export function qAdd(s, k, n) { const q = s.quest; if (!q) return; if (q.d) q.d[k] = (q.d[k] || 0) + n; if (q.w) q.w[k] = (q.w[k] || 0) + n; }
export const DAILY = [
  { id: 'kill', need: 3000, r: { stones: 20 } },
  { id: 'boss', need: 5, r: { stones: 20 } },
  { id: 'up', need: 50, r: { stones: 15 } },
  { id: 'pull', need: 20, r: { shards: 10 } },
  { id: 'tower', need: 1, r: { ess: 10 } },
];
export const WEEKLY = [
  { id: 'kill', need: 50000, r: { stones: 100 } },
  { id: 'boss', need: 50, r: { stones: 100 } },
  { id: 'pull', need: 200, r: { shards: 60 } },
  { id: 'floor', need: 30, r: { boost: 1 } },
  { id: 'rebirth', need: 3, r: { stones: 80 } },
  { id: 'tower', need: 7, r: { ess: 60 } },
];
export const DAILY_ALL = { boost: 1, stones: 30 };
export const WEEKLY_ALL = { boost: 2, stones: 150, shards: 40, keys: 3 };
export const ATTEND = [{ stones: 30 }, { stones: 40 }, { shards: 20 }, { stones: 50 }, { ess: 20 }, { stones: 70 }, { stones: 100, boost: 2, keys: 1 }];
export const BOOST_MIN = 30, BOOST_X = 2;
export function questRoll(s, now = Date.now()) {
  const q = s.quest || (s.quest = {});
  const dk = localDay(now), wk = weekKey(now);
  if (!q.day || dk > q.day) { const first = !q.day; q.day = dk; q.d = {}; q.dc = {}; for (const T of TOWERS) towerState(s, T.id).tries = TOWER_TRIES; const r = riftState(s); if (!first) r.keys = Math.min(KEY_MAX, Math.max(r.keys, 0) + KEY_DAILY); }   // 시계를 되돌려도 다시 열리지 않게 앞으로만
  if (!q.wk || wk > q.wk) { q.wk = wk; q.w = {}; q.wc = {}; }
  q.att ||= { last: '', n: 0 };
}
export function giveReward(s, r) {
  if (r.stones) s.stones += r.stones;
  if (r.shards) s.shards = (s.shards || 0) + r.shards;
  if (r.ess) s.ess = (s.ess || 0) + r.ess;
  if (r.boost) { s.boost ||= { until: 0, charges: 0 }; s.boost.charges = (s.boost.charges || 0) + r.boost; }
  if (r.keys) { const rs = riftState(s); rs.keys = Math.min(KEY_MAX + 20, (rs.keys || 0) + r.keys); }
}
function qList(kind) { return kind === 'd' ? DAILY : WEEKLY; }
export function missionState(s, kind, m) {
  const q = s.quest || {}, cnt = (kind === 'd' ? q.d : q.w) || {}, done = (kind === 'd' ? q.dc : q.wc) || {};
  if (m === 'all') { const L = qList(kind); return { v: L.filter(x => done[x.id]).length, need: L.length, claimed: !!done.all }; }
  return { v: cnt[m.id] || 0, need: m.need, claimed: !!done[m.id] };
}
export function claimMission(s, kind, id) {
  questRoll(s);
  const q = s.quest, done = kind === 'd' ? q.dc : q.wc;
  if (id === 'all') { const ms = missionState(s, kind, 'all'); if (ms.claimed || ms.v < ms.need) return null; done.all = true; const r = kind === 'd' ? DAILY_ALL : WEEKLY_ALL; giveReward(s, r); return r; }
  const m = qList(kind).find(x => x.id === id); if (!m) return null;
  const ms = missionState(s, kind, m); if (ms.claimed || ms.v < ms.need) return null;
  done[id] = true; giveReward(s, m.r); return m.r;
}
export function canAttend(s, now = Date.now()) { questRoll(s, now); const a = s.quest.att; return !a.last || localDay(now) > a.last; }
export function attend(s, now = Date.now()) {
  if (!canAttend(s, now)) return null;
  const a = s.quest.att; const i = a.n % 7; a.n++; a.last = localDay(now);
  giveReward(s, ATTEND[i]); return { day: i + 1, r: ATTEND[i] };
}
export function boostLeft(s, now = Date.now()) { return Math.max(0, ((s.boost && s.boost.until) || 0) - now); }
export function boostMult(s, now = Date.now()) { return boostLeft(s, now) > 0 ? BOOST_X : 1; }
export function useBoost(s, now = Date.now()) {
  s.boost ||= { until: 0, charges: 0 };
  if ((s.boost.charges || 0) < 1) return false;
  s.boost.charges--; s.boost.until = Math.max(now, s.boost.until || 0) + BOOST_MIN * 60000;
  return true;
}

// ---------- 자동화 (진행하면 해금) ----------
export const AUTO = [
  { id: 'skill',   need: s => (s.bestFloor || s.maxFloor) >= 15, cond: { k: 'floor', n: 15 } },
  { id: 'boss',    need: s => (s.bestFloor || s.maxFloor) >= 25, cond: { k: 'floor', n: 25 } },
  { id: 'upgrade', need: s => (s.rebirths || 0) >= 1,            cond: { k: 'rebirth', n: 1 } },
  { id: 'relic',   need: s => (s.rebirths || 0) >= 3,            cond: { k: 'rebirth', n: 3 } },
  { id: 'rebirth', need: s => (s.rebirths || 0) >= 5,            cond: { k: 'rebirth', n: 5 } },
];
export function autoOn(s, id) { const a = AUTO.find(x => x.id === id); return !!(a && a.need(s) && s.auto && s.auto[id]); }
export function bossRetryWait(s) { return Math.min(600, 60 * Math.pow(2, Math.min(3, s.bossFails || 0))); }
function autoTick(s, dt, ev) {
  if (!s.auto) return;
  s.autoT = (s.autoT || 0) + dt;
  const slow = s.autoT >= 2; if (slow) s.autoT = 0;
  if (slow && autoOn(s, 'skill') && s.sp > 0) {
    for (let g = 0; g < 50 && s.sp > 0; g++) {
      const c = classSkills(s.cls).filter(sd => skillUnlocked(s, sd) && (s.skills[sd.id] || 0) < SKILL_MAX).sort((a, b) => (s.skills[a.id] || 0) - (s.skills[b.id] || 0) || (a.type === 'active' ? -1 : 1));
      if (!c.length) {
        if (!masteryUnlocked(s)) break;
        const m = MASTERY.slice().sort((a, b) => masteryLv(s, a.id) - masteryLv(s, b.id))[0];
        if (!buyMastery(s, m.id)) break;
        ev.autoSkill = true; continue;
      }
      if (!learnSkill(s, c[0].id)) break;
      ev.autoSkill = true;
    }
    for (const sd of classSkills(s.cls)) if ((s.skills[sd.id] || 0) >= SKILL_MAX && !mutOf(s, sd)) { setMut(s, sd.id, MUT_DEF[mutKind(sd)]); ev.autoMut = true; }
  }
  if (autoOn(s, 'boss') && canChallenge(s)) {
    s.autoBossT = (s.autoBossT || 0) + dt;
    if (s.autoBossT >= bossRetryWait(s)) { s.autoBossT = 0; challengeBoss(s); ev.autoBoss = true; }
  }
  if (slow && autoOn(s, 'upgrade')) {
    for (let g = 0; g < 300; g++) {
      let best = null, bc = Infinity;
      for (const u of UPGRADES) { const c = upgradeCost(u, s.up[u.id] || 0); if (c < bc) { bc = c; best = u; } }
      if (!best || bc > s.gold) break;
      buyUpgrade(s, best.id, 1); ev.autoUp = (ev.autoUp || 0) + 1;
    }
  }
  if (slow && autoOn(s, 'relic')) autoRelics(s, ev);
  if (autoOn(s, 'rebirth') && !s.boss && honorGain(s) > 0) {
    const a = s.auto;
    const ok = a.rbMode === 'floor' ? s.maxFloor >= Math.max(REBIRTH_FLOOR, a.rbFloor || REBIRTH_FLOOR) : (s.stuckT || 0) >= (a.rbStuck || 30) * 60;
    if (ok) { const g = rebirth(s); ev.autoRebirth = (ev.autoRebirth || 0) + g; ev.convStones = (ev.convStones || 0) + LAST_CONV.stones; ev.autoRebirths = (ev.autoRebirths || 0) + 1; if (autoOn(s, 'relic')) autoRelics(s, ev); }
  }
}
function autoRelics(s, ev) {
  for (let g = 0; g < 500; g++) {
    let best = null, bc = Infinity;
    for (const r of RELICS) { const lv = relicLv(s, r.id); if (r.max && lv >= r.max) continue; const c = relicCost(r, lv); if (c < bc) { bc = c; best = r; } }
    if (!best || bc > (s.honorPts || 0)) break;
    buyRelic(s, best.id); ev.autoRelic = (ev.autoRelic || 0) + 1;
  }
}

// ---------- 탑 (하루 3회씩, 종류별 기록) ----------
export const TOWER_TRIES = 3, TOWER_TIME = 20;
// 무한의 탑: 균형 · 폭풍의 탑: 8초 안에 순간 화력 · 강철의 탑: 강한 공격을 버티는 생존력
export const TOWERS = [
  { id: 'inf',   hp: 1,    dps: 1,   time: 20, heal: 0.3,  floorR: { ess: 1 },    tenR: { shards: 15, keys: 1 } },
  { id: 'storm', hp: 0.45, dps: 0.7, time: 8,  heal: 0.15, floorR: { ess: 2 },    tenR: { ess: 30, keys: 1 } },
  { id: 'iron',  hp: 0.8,  dps: 3.5, time: 30, heal: 0.3,  floorR: { shards: 3 }, tenR: { shards: 30, keys: 1 } },
];
export const TOWER_BY_ID = Object.fromEntries(TOWERS.map(t => [t.id, t]));
export const TOWER_REC_STONES = 3;          // 최고 기록을 갱신한 층마다 소환석
export function towerState(s, id = 'inf') {
  if (id === 'inf') return s.tower || (s.tower = { best: 0, tries: TOWER_TRIES, prev: null });
  const T = s.towers || (s.towers = {});
  return T[id] || (T[id] = { best: 0, tries: TOWER_TRIES });
}
export function towerBestAll(s) { return Math.max(0, ...TOWERS.map(t => towerState(s, t.id).best || 0)); }
export function towerHp(k, id = 'inf') { return monHp(k + 4) * 25 * (TOWER_BY_ID[id] || TOWERS[0]).hp; }
export function towerDps(k, id = 'inf') { return bossDps(k + 4) * 1.1 * (TOWER_BY_ID[id] || TOWERS[0]).dps; }
export function towerMon(k) { return (k - 1) % ZONES; }
export function canTower(s, id = 'inf') { questRoll(s); return !s.boss && !!TOWER_BY_ID[id] && (towerState(s, id).tries ?? TOWER_TRIES) > 0 && !!s.cls; }
function savePrev(s) { towerState(s, 'inf').prev = { floor: s.floor, kills: s.kills, prog: s.prog, bossLock: s.bossLock }; }
export function towerStart(s, id = 'inf') {
  if (!canTower(s, id)) return false;
  const ts = towerState(s, id), T = TOWER_BY_ID[id];
  ts.tries = (ts.tries ?? TOWER_TRIES) - 1;
  savePrev(s);
  const hp = towerHp(1, id);
  s.boss = { tower: id, tf: 1, hp, max: hp, timer: T.time, tmax: T.time, gain: {} };
  s.hp = null; firstStrike(s);
  qAdd(s, 'tower', 1);
  return true;
}
function addGain(s, gain, r) { giveReward(s, r); for (const [k, v] of Object.entries(r)) gain[k] = (gain[k] || 0) + v; }
function towerStep(s, st, dt, burst, ev) {
  const b = s.boss;
  if (b.tower === 'rift') return riftStep(s, st, dt, burst, ev);
  const id = TOWER_BY_ID[b.tower] ? b.tower : 'inf', T = TOWER_BY_ID[id], ts = towerState(s, id);
  b.timer -= dt;
  let dmg = (st.dpsBoss * dt + burst) * st.bossMult * runeMult(s, 'tower');
  if (st.sfx && st.sfx.cut) dmg += soulCutDmg(b.hp, st, dt);
  let h = (s.hp == null ? st.hp : s.hp);
  h += st.hp * (st.regen / 100) * dt;
  h -= towerDps(b.tf, id) * (1 - st.def / 100) * (1 - st.weak / 100) * dt;
  s.hp = Math.min(st.hp, h);
  for (let g = 0; dmg > 0 && g < 60 && s.hp > 0; g++) {
    if (dmg < b.hp) { b.hp -= dmg; break; }
    dmg -= b.hp;
    addGain(s, b.gain, T.floorR);
    if (b.tf > (ts.best || 0)) {
      ts.best = b.tf; addGain(s, b.gain, { stones: TOWER_REC_STONES });
      if (b.tf % 10 === 0) addGain(s, b.gain, T.tenR);
    }
    ev.towerClear = b.tf;
    b.tf++;
    const hp = towerHp(b.tf, id); b.hp = hp; b.max = hp; b.timer = b.tmax;
    s.hp = Math.min(st.hp, s.hp + st.hp * T.heal);
  }
  if (b.timer <= 0 || s.hp <= 0) {
    ev.towerEnd = { id, floor: b.tf - 1, best: ts.best, ...b.gain };
    endChallenge(s);
  }
  return ev;
}
function endChallenge(s) {
  const p = towerState(s, 'inf').prev || {};
  s.boss = null; s.hp = null;
  s.floor = p.floor ?? s.floor; s.kills = p.kills ?? 0; s.prog = p.prog ?? 0; s.bossLock = p.bossLock ?? s.bossLock;
  towerState(s, 'inf').prev = null;
}

// ---------- 차원 균열 (열쇠 1개, 5웨이브) → 룬 (환생·윤회에도 유지) ----------
export const RIFT_UNLOCK = 50, RIFT_WAVES = 5, RIFT_TIME = 25, KEY_DAILY = 2, KEY_MAX = 10;
export function riftFloor(L) { return 25 + 10 * L; }                 // 균열 단계 L = 던전 B(25+10L) 보스 수준
export function riftHp(L, w) { return bossHp(riftFloor(L)) * (0.5 + 0.25 * w); }
export function riftDps(L) { return bossDps(riftFloor(L)); }
export function riftState(s) { return s.rift || (s.rift = { keys: KEY_DAILY, best: 0, lvl: 1 }); }
export function riftUnlocked(s) { return (s.bestFloor || s.maxFloor || 0) >= RIFT_UNLOCK; }
export function canRift(s) { const r = riftState(s); return !s.boss && !!s.cls && riftUnlocked(s) && r.keys > 0; }
export function riftStart(s, L) {
  const r = riftState(s);
  L = Math.max(1, Math.min(Math.floor(L || r.lvl || 1), (r.best || 0) + 1));
  if (!canRift(s)) return false;
  r.keys--; r.lvl = L;
  savePrev(s);
  const hp = riftHp(L, 1);
  s.boss = { tower: 'rift', L, tf: 1, hp, max: hp, timer: RIFT_TIME, tmax: RIFT_TIME, gain: {} };
  s.hp = null; firstStrike(s);
  qAdd(s, 'rift', 1);
  return true;
}
function riftStep(s, st, dt, burst, ev) {
  const b = s.boss, L = b.L;
  b.timer -= dt;
  let dmg = (st.dpsBoss * dt + burst) * st.bossMult * runeMult(s, 'tower');
  if (st.sfx && st.sfx.cut) dmg += soulCutDmg(b.hp, st, dt);
  let h = (s.hp == null ? st.hp : s.hp);
  h += st.hp * (st.regen / 100) * dt;
  h -= riftDps(L) * (1 - st.def / 100) * (1 - st.weak / 100) * dt;
  s.hp = Math.min(st.hp, h);
  for (let g = 0; dmg > 0 && g < 10 && s.hp > 0; g++) {
    if (dmg < b.hp) { b.hp -= dmg; break; }
    dmg -= b.hp;
    ev.towerClear = b.tf;
    if (b.tf >= RIFT_WAVES) {                                   // 클리어
      const r = riftState(s), drops = rollRunes(L);
      for (const ru of drops) addRune(s, ru);
      const dust = 10 * L; s.runes.dust += dust;
      if (L > (r.best || 0)) { r.best = L; r.lvl = L + 1; }
      ev.riftEnd = { win: true, L, waves: RIFT_WAVES, runes: drops, dust };
      endChallenge(s);
      return ev;
    }
    b.tf++;
    const hp = riftHp(L, b.tf); b.hp = hp; b.max = hp; b.timer = b.tmax;
    s.hp = Math.min(st.hp, s.hp + st.hp * 0.3);
  }
  if (b.timer <= 0 || s.hp <= 0) {                               // 실패: 넘긴 웨이브만큼 룬 가루
    const dust = (b.tf - 1) * 2 * L; runeState(s).dust += dust;
    ev.riftEnd = { win: false, L, waves: b.tf - 1, runes: [], dust };
    endChallenge(s);
  }
  return ev;
}
// ---- 룬: 4칸 장착, 효과는 모두 별도 곱연산. 가루로 +10까지 강화
export const RUNE_SLOTS = 4, RUNE_BAG = 60, RUNE_UP_MAX = 10;
export const RUNE_STATS = { atk: 4, hp: 5, boss: 5, crit: 7, gold: 5, skill: 5, comp: 6, tower: 6 };
export const RUNE_KEYS = Object.keys(RUNE_STATS);
export const RUNE_RMULT = [1, 1.4, 2, 2.8, 4];
export const RUNE_DUST = [1, 2, 4, 8, 16];
export function runeState(s) { const r = s.runes || (s.runes = {}); r.eq ||= Array(RUNE_SLOTS).fill(null); r.bag ||= []; r.dust ||= 0; return r; }
export function runeVal(ru, k = ru.k) { const main = RUNE_STATS[k] * RUNE_RMULT[ru.r] * (1 + 0.12 * (ru.t - 1)) * (1 + 0.1 * (ru.u || 0)); return Math.round((k === ru.k ? main : main * 0.5) * 10) / 10; }
export function runeScore(ru) { return RUNE_RMULT[ru.r] * (1 + 0.12 * (ru.t - 1)) * (1 + 0.1 * (ru.u || 0)) * (ru.k2 ? 1.5 : 1); }
function runeTotals(s) { const tot = {}; for (const ru of runeState(s).eq) if (ru) { tot[ru.k] = (tot[ru.k] || 0) + runeVal(ru); if (ru.k2) tot[ru.k2] = (tot[ru.k2] || 0) + runeVal(ru, ru.k2); } return tot; }
export function runeMult(s, k) { return 1 + (runeTotals(s)[k] || 0) / 100; }
export function runeSum(s) { return runeTotals(s); }
function rollRunes(L) {
  const n = 1 + (L >= 5 ? 1 : 0) + (Math.random() < 0.3 ? 1 : 0), out = [];
  const w = [Math.max(10, 50 - 3 * L), 30, 14 + L, 5 + 0.8 * L, 1 + 0.4 * L], sum = w.reduce((a, b) => a + b, 0);
  for (let i = 0; i < n; i++) {
    let x = Math.random() * sum, r = 0; for (; r < 4; r++) { x -= w[r]; if (x <= 0) break; }
    const k = RUNE_KEYS[Math.floor(Math.random() * RUNE_KEYS.length)];
    const ru = { k, r, t: L, u: 0 };
    if (r === 4) { const others = RUNE_KEYS.filter(x2 => x2 !== k); ru.k2 = others[Math.floor(Math.random() * others.length)]; }
    out.push(ru);
  }
  return out;
}
function addRune(s, ru) {
  const R = runeState(s);
  R.bag.push(ru);
  if (R.bag.length > RUNE_BAG) { R.bag.sort((a, b) => runeScore(b) - runeScore(a)); for (const x of R.bag.splice(RUNE_BAG)) R.dust += runeDustOf(x); }
}
// 분해: 기본 가루 + 강화에 쓴 가루의 절반 환급
export function runeDustOf(ru) { let inv = 0; for (let u = 0; u < (ru.u || 0); u++) inv += runeUpCost({ r: ru.r, u }); return Math.ceil(RUNE_DUST[ru.r] * (1 + 0.1 * ru.t)) + Math.floor(inv / 2); }
export function runeEquip(s, bagIdx, slot) {
  const R = runeState(s), ru = R.bag[bagIdx]; if (!ru) return false;
  if (slot == null) { slot = R.eq.findIndex(x => !x); if (slot < 0) { let lo = 0; R.eq.forEach((x, i) => { if (runeScore(x) < runeScore(R.eq[lo])) lo = i; }); slot = lo; } }
  const old = R.eq[slot]; R.eq[slot] = ru; R.bag.splice(bagIdx, 1); if (old) R.bag.push(old);
  return true;
}
export function runeUnequip(s, slot) { const R = runeState(s), ru = R.eq[slot]; if (!ru || R.bag.length >= RUNE_BAG) return false; R.eq[slot] = null; R.bag.push(ru); return true; }
export function runeUpCost(ru) { return Math.ceil(5 * Math.pow(1.35, ru.u || 0) * (1 + 0.5 * ru.r)); }
export function runeUpgrade(s, slot) { const R = runeState(s), ru = R.eq[slot]; if (!ru || (ru.u || 0) >= RUNE_UP_MAX) return false; const c = runeUpCost(ru); if (R.dust < c) return false; R.dust -= c; ru.u = (ru.u || 0) + 1; return true; }
export function runeDismantle(s, pred) { const R = runeState(s); let d = 0, n = 0; R.bag = R.bag.filter(ru => { if (pred(ru)) { d += runeDustOf(ru); n++; return false; } return true; }); R.dust += d; return { n, dust: d }; }
export function runeWeakest(s) { const eq = runeState(s).eq; return eq.every(Boolean) ? Math.min(...eq.map(runeScore)) : 0; }

// ---------- 장비 부위 강화 (정수, 영구) · 세트 효과 ----------
export const ENCH_MAX = 20, ENCH_STEP = 0.1;
export function enchLv(s, slot) { return (s.ench && s.ench[slot]) || 0; }
// 초월: +20을 다 채운 부위는 남는 정수로 계속 올린다 (단계마다 +10%, 비용은 완만하게 증가, 환생·윤회해도 유지)
export const ENCHX_MAX = 9999, ENCHX_G = 1.08;
// 후반엔 장비 기본 수치가 다른 배율에 묻혀서, 초월은 "모든 부위 초월 단계 합 × 1%"를 최종 공격력·체력에 곱한다
export const ENCHX_POW = 0.01;
export function enchXSum(s) { let t = 0; for (const sl of SLOTS) t += enchX(s, sl.id); return t; }
export function enchX(s, slot) { return enchLv(s, slot) >= ENCH_MAX ? ((s.enchX && s.enchX[slot]) || 0) : 0; }
export function enchMult(s, slot) { return 1 + ENCH_STEP * enchLv(s, slot); }
export function enchCost(lv) { return Math.ceil(6 * Math.pow(1.3, lv)); }
export function enchXCost(x) { return Math.ceil(enchCost(ENCH_MAX) * Math.pow(ENCHX_G, x)); }
export function enchNextCost(s, slot) { const lv = enchLv(s, slot); return lv < ENCH_MAX ? enchCost(lv) : enchXCost(enchX(s, slot)); }
export function enchant(s, slot) {
  const lv = enchLv(s, slot);
  if (!SLOT_BY_ID[slot]) return false;
  if (lv >= ENCH_MAX) { const x = enchX(s, slot); if (x >= ENCHX_MAX) return false; const c = enchXCost(x); if ((s.ess || 0) < c) return false; s.ess -= c; (s.enchX ||= {})[slot] = x + 1; qAdd(s, 'ench', 1); return true; }
  const c = enchCost(lv);
  if ((s.ess || 0) < c) return false;
  s.ess -= c; (s.ench ||= {})[slot] = lv + 1; qAdd(s, 'ench', 1);
  return true;
}
// 같은 등급 이상 장비를 4·8부위 맞추면 공격력·체력 보너스 (가장 높은 단계 하나만 적용)
export const SETS = [{ r: 2, t: [[4, 10], [8, 25]] }, { r: 3, t: [[4, 20], [8, 50]] }, { r: 4, t: [[4, 40], [8, 100]] }];
export function setInfo(s) {
  const eq = Object.values(s.equip || {}).filter(Boolean);
  let best = { v: 0, r: -1, n: 0 };
  const rows = SETS.map(st => { const n = eq.filter(it => it.r >= st.r).length; let v = 0, need = 0; for (const [k, b] of st.t) if (n >= k) { v = b; need = k; } if (v > best.v) best = { v, r: st.r, n: need }; return { r: st.r, n, t: st.t, v }; });
  return { rows, best };
}
export function setBonus(s) { return setInfo(s).best.v; }

// ---------- 업적 · 도감 (영구 보너스) ----------
export const ACH = [
  { id: 'kill',    t: [1e3, 1e4, 1e5, 1e6, 1e7],       m: s => (s.life && s.life.kills) || 0 },
  { id: 'floor',   t: [25, 50, 75, 100, 150],          m: s => Math.max(s.bestFloor || 0, s.maxFloor || 0) },
  { id: 'boss',    t: [10, 100, 500, 2000, 10000],     m: s => (s.life && s.life.bosses) || 0 },
  { id: 'rebirth', t: [1, 5, 10, 25, 50],              m: s => s.rebirths || 0 },
  { id: 'pull',    t: [100, 500, 1000, 3000, 10000],   m: s => s.pulls || 0 },
  { id: 'comp',    t: [10, 30, 60, 90, 120],           m: s => Object.keys(s.comp || {}).length },
  { id: 'clv',     t: [10, 50, 100, 200, 400],         m: s => Object.values(s.comp || {}).reduce((a, v) => a + (v.lv || 0), 0) },
  { id: 'relic',   t: [10, 30, 60, 100, 150],          m: s => Object.values(s.relic || {}).reduce((a, b) => a + b, 0) },
  { id: 'ench',    t: [10, 40, 80, 120, 160],             m: s => Object.values(s.ench || {}).reduce((a, b) => a + b, 0) },
  { id: 'tower',   t: [10, 25, 50, 75, 100],           m: s => towerBestAll(s) },
  { id: 'rift',    t: [1, 5, 10, 15, 20],              m: s => (s.rift && s.rift.best) || 0 },
];
export const ACH_REWARD = [20, 40, 80, 150, 300];     // 단계별 소환석
export const ACH_PCT = 2;                              // 업적 점수 1당 공격력·체력 +2%
export const BEST_STARS = [100, 1000, 10000];          // 몬스터 처치 도감 별
export const BEST_PCT = 1;                             // 별 1개당 공격력·골드 +1%
export function achMet(s, a) { const v = a.m(s); return a.t.filter(x => v >= x).length; }
export function achClaimed(s, id) { return (s.ach && s.ach[id]) || 0; }
export function achPoints(s) { return ACH.reduce((a, x) => a + Math.min(achClaimed(s, x.id), x.t.length), 0); }
export function claimAch(s, id) {
  const a = ACH.find(x => x.id === id); if (!a) return 0;
  const c = achClaimed(s, id); if (c >= achMet(s, a)) return 0;
  (s.ach ||= {})[id] = c + 1; const r = ACH_REWARD[c] || 0; s.stones += r;
  return r;
}
export function bestStars(s) { let n = 0; for (const k of s.bestiary || []) for (const t of BEST_STARS) if ((k || 0) >= t) n++; return n; }
function achPower(s) { const p = achPoints(s), b = bestStars(s); return { atk: (1 + ACH_PCT * p / 100) * (1 + BEST_PCT * b / 100), hp: 1 + ACH_PCT * p / 100, gold: 1 + BEST_PCT * b / 100 }; }

// ---------- 오프라인 ----------
export function advance(s, now = Date.now()) {
  if ((s.lastTick || 0) > now + 60000) { s.lastTick = now; return { offline: false, seconds: 0 }; }   // 시계를 과거로 돌린 경우: 진행 없이 기준만 맞춤
  const last = s.lastTick || now;
  const realSec = Math.max(0, (now - last) / 1000);
  s.lastTick = now;
  if (realSec < 1 || !s.cls) return { offline: false, seconds: 0 };
  const offline = realSec > 30;
  questRoll(s, now);
  const rate = offline ? offlineRate(s) : 1;
  const boostSec = Math.max(0, Math.min(now, (s.boost && s.boost.until) || 0) - last) / 1000;   // 부스트가 켜져 있던 구간은 한 번 더 진행
  const sec = (offline ? Math.min(realSec, OFFLINE_CAP_H * 3600) : realSec) * rate + Math.min(boostSec, OFFLINE_CAP_H * 3600) * rate * (BOOST_X - 1);
  const before = { gold: s.gold, floor: s.floor, kills: (s.life && s.life.kills) || 0, level: s.level, stones: s.stones };
  const ev = {};
  // 긴 오프라인은 큰 간격으로 묶어서 계산 (12시간이어도 약 9천 번 → 1초 안팎)
  const CH = sec > 600 ? Math.min(3, Math.max(0.5, sec / 8000)) : 0.5;
  const n = Math.min(Math.ceil(sec / CH), 12000);
  for (let i = 0; i < n; i++) { step(s, CH, ev); if (ev.casts && ev.casts.length > 50) ev.casts.length = 0; if (ev.compCasts && ev.compCasts.length > 50) ev.compCasts.length = 0; }
  const res = {
    offline, seconds: realSec,
    gold: ev.gold || 0, floors: ev.autoRebirths ? 0 : Math.max(0, s.floor - before.floor),
    kills: ((s.life && s.life.kills) || 0) - before.kills, levels: ev.autoRebirths ? 0 : Math.max(0, s.level - before.level),
    stones: s.stones - before.stones, drops: ev.drops || [], rebirths: ev.autoRebirths || 0,
  };
  if (offline) {
    const p = s.pending || { seconds: 0, gold: 0, floors: 0, kills: 0, levels: 0, stones: 0, drops: [] };
    p.seconds += res.seconds; p.gold += res.gold; p.floors += res.floors;
    p.kills += res.kills; p.levels += res.levels; p.stones += res.stones; p.rebirths = (p.rebirths || 0) + res.rebirths;
    p.drops = p.drops.concat(res.drops).sort((a, b) => (b.r * 10 + b.t) - (a.r * 10 + a.t)).slice(0, 8);
    s.pending = p;
  }
  return res;
}

// ---------- 표시 ----------
const U = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
export function fmt(n) {
  if (!isFinite(n)) return '∞';
  if (n < 0) return '-' + fmt(-n);
  if (n < 1000) return n < 10 ? String(Math.round(n * 10) / 10) : String(Math.floor(n));
  let i = 0;
  while (n >= 1000) { n /= 1000; i++; }
  const u = i < U.length ? U[i] : String.fromCharCode(97 + Math.floor((i - U.length) / 26) % 26) + String.fromCharCode(97 + (i - U.length) % 26);
  return (n < 10 ? n.toFixed(2) : n < 100 ? n.toFixed(1) : Math.floor(n)) + u;
}
export function fmtDur(sec) {
  sec = Math.max(0, Math.floor(sec));
  const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60);
  if (h) return t('ui.dur.h', { h, m });
  if (m) return t('ui.dur.m', { m });
  return t('ui.dur.s', { s: sec });
}
// ---------- 저장 (로컬 + 크롬 계정 동기화) ----------
// 로컬(chrome.storage.local)에 항상 저장하고, 크롬에 로그인해 동기화가 켜져 있으면
// chrome.storage.sync 로도 올려서 다른 PC에서 이어서 할 수 있게 한다.
// 두 곳 중 savedAt 이 더 최근인 쪽을 불러온다.
const SYNC_META = 'dm.meta';
const SYNC_CHUNK = 'dm.c';
const CHUNK_LEN = 6000;              // 항목당 8KB 한도 여유
const BAK_KEY = 'dm.backups';
export const SYNC_EVERY_MS = 30000;  // 팝업에서 동기화 올리는 최소 간격
let lastSyncWrite = 0, lastSyncN = null;
export const syncState = { ok: null, at: 0, err: '', remoteAt: 0, dev: '' };

async function deviceId() {
  const o = await chrome.storage.local.get('dm.dev');
  if (o['dm.dev']) return o['dm.dev'];
  const id = Math.random().toString(36).slice(2, 10);
  await chrome.storage.local.set({ 'dm.dev': id });
  return id;
}
async function readSync() {
  try {
    const m = (await chrome.storage.sync.get(SYNC_META))[SYNC_META];
    if (!m || !m.n) return null;
    lastSyncN = m.n;
    const keys = Array.from({ length: m.n }, (_, i) => SYNC_CHUNK + i);
    const o = await chrome.storage.sync.get(keys);
    const str = keys.map(k => o[k] || '').join('');
    const s = JSON.parse(str);
    syncState.remoteAt = s.savedAt || 0;
    syncState.remoteDev = m.dev;
    return s;
  } catch (e) { return null; }
}
async function writeSync(s) {
  lastSyncWrite = Date.now();
  try {
    const dev = await deviceId();
    const str = JSON.stringify(s);
    if (str.length > 90000) throw new Error('Save too large for browser sync (Drive/local OK)');
    const n = Math.max(1, Math.ceil(str.length / CHUNK_LEN));
    const obj = { [SYNC_META]: { n, savedAt: s.savedAt, dev, v: s.v } };
    for (let i = 0; i < n; i++) obj[SYNC_CHUNK + i] = str.slice(i * CHUNK_LEN, (i + 1) * CHUNK_LEN);
    await chrome.storage.sync.set(obj);
    if (lastSyncN && lastSyncN > n) await chrome.storage.sync.remove(Array.from({ length: lastSyncN - n }, (_, i) => SYNC_CHUNK + (n + i)));
    lastSyncN = n;
    Object.assign(syncState, { ok: true, at: Date.now(), err: '', remoteAt: s.savedAt });
  } catch (e) {
    Object.assign(syncState, { ok: false, err: String(e && e.message || e) });
  }
}
export async function load() {
  const [lo, remote] = await Promise.all([chrome.storage.local.get(SAVE_KEY), readSync()]);
  const local = lo[SAVE_KEY];
  syncState.dev = await deviceId();
  let pickS = local, from = 'local';
  if (remote && (!local || (remote.savedAt || 0) > (local.savedAt || 0))) { pickS = remote; from = 'sync'; }
  const s = normalize(pickS);
  s._from = from;
  return s;
}
// mode: 'auto' = 간격 지나면 동기화, 'force' = 즉시 동기화, 'local' = 로컬만
export async function save(s, mode = 'auto') {
  s.savedAt = Date.now();
  const clean = serialize(s);
  await chrome.storage.local.set({ [SAVE_KEY]: clean });
  if (mode === 'force' || (mode === 'auto' && Date.now() - lastSyncWrite > SYNC_EVERY_MS)) await writeSync(clean);
}

// ---------- 자동 백업 (로컬 최근 6개) ----------
export async function backup(s, reason) {
  const o = await chrome.storage.local.get(BAK_KEY);
  const list = o[BAK_KEY] || [];
  const clean = serialize(s);
  list.unshift({ at: Date.now(), reason, s: clean });
  await chrome.storage.local.set({ [BAK_KEY]: list.slice(0, 6) });
}
export async function listBackups() { return (await chrome.storage.local.get(BAK_KEY))[BAK_KEY] || []; }

// ---------- 세이브 코드 (수동 이동용) ----------
function b64e(str) { return btoa(unescape(encodeURIComponent(str))); }
function b64d(str) { return decodeURIComponent(escape(atob(str))); }
function sum(str) { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h.toString(36); }
export function exportCode(s) {
  const clean = serialize(s); delete clean.pending;
  const body = b64e(JSON.stringify(clean));
  return 'DM4-' + sum(body) + '-' + body;
}
export function importCode(code) {
  if (String(code).length > 300000) throw new Error('Save code is too long');
  const m = /^DM4-([0-9a-z]+)-([A-Za-z0-9+/=]+)$/.exec(String(code).replace(/\s+/g, ''));
  if (!m) throw new Error('Not a save code');
  if (sum(m[2]) !== m[1]) throw new Error('Code is truncated or corrupted');
  const s = normalize(JSON.parse(b64d(m[2])));
  s.lastTick = Date.now();
  return s;
}


// ---------- 구글 드라이브 동기화 (브라우저 종류와 무관하게 계정 간 이어하기) ----------
// 크롬 계열(Aside 포함)·파이어폭스 공통: identity.launchWebAuthFlow 로 로그인하고,
// 사용자 드라이브의 앱 전용 숨김 폴더(appDataFolder)에 세이브 파일 하나만 저장한다.
export const DRIVE = {
  clientId: '446865858894-02kfl849vb66vah9324tr03l62c34ias.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/drive.appdata',
  file: 'deskmate-save.json',
};
const DRV_KEY = 'dm.drive';
export const driveState = { supported: !!(chrome.identity && chrome.identity.launchWebAuthFlow), linked: false, ok: null, at: 0, err: '', pulledAt: 0 };

async function drvGet() { return (await chrome.storage.local.get(DRV_KEY))[DRV_KEY] || {}; }
async function drvSet(patch) { const cur = await drvGet(); const n = { ...cur, ...patch }; await chrome.storage.local.set({ [DRV_KEY]: n }); return n; }

// 로그인 창은 한 번에 하나만 열 수 있다(크롬 제한). 그래서
//  1) 모든 로그인 요청을 서비스 워커 한 곳에서 처리하고(팝업이 닫혀도 로그인이 끝까지 진행돼 토큰이 저장된다)
//  2) 진행 중인 로그인이 있으면 새로 열지 않고 그 결과를 같이 기다린다.
//  3) 창 없는 갱신은 8초 안에 끝내고, 실패하면 10분 동안 다시 시도하지 않는다(숨은 창이 계속 열려 느려지는 것 방지).
const IN_SW = typeof document === 'undefined';
const SILENT_BACKOFF = 10 * 60 * 1000;
let authP = null;
async function authFlow(interactive) {
  const redirect = chrome.identity.getRedirectURL();
  const q = new URLSearchParams({
    client_id: DRIVE.clientId, response_type: 'token', redirect_uri: redirect,
    scope: DRIVE.scope, include_granted_scopes: 'true',
  });
  if (!interactive) q.set('prompt', 'none');
  const url = 'https://accounts.google.com/o/oauth2/v2/auth?' + q;
  let back;
  try {
    back = await chrome.identity.launchWebAuthFlow(interactive ? { url, interactive } : { url, interactive, abortOnLoadForNonInteractive: true, timeoutMsForNonInteractive: 8000 });
  } catch (e) {
    // 옵션을 모르는 브라우저(구버전·파이어폭스)는 기본 옵션으로 다시
    if (!interactive && /abortOnLoad|timeoutMs|unexpected property|Invalid/i.test(String(e && e.message))) back = await chrome.identity.launchWebAuthFlow({ url, interactive });
    else throw e;
  }
  const h = new URLSearchParams(((back || '').split('#')[1] || ''));
  if (h.get('error')) throw new Error(h.get('error'));
  const token = h.get('access_token');
  if (!token) throw new Error('No token received');
  const exp = Date.now() + (Number(h.get('expires_in') || 3600) - 60) * 1000;
  await drvSet({ linked: true, token, exp, silentFailAt: 0 });
  return token;
}
export async function driveAuthLocal(interactive) {
  if (authP) {
    try { const tk = await authP; if (tk) return tk; }
    catch (e) { if (!interactive) throw e; }
    if (authP) return authP;
  }
  authP = authFlow(interactive)
    .catch(async e => { if (!interactive) await drvSet({ silentFailAt: Date.now() }); throw e; })
    .finally(() => { authP = null; });
  return authP;
}
async function driveAuth(interactive) {
  if (!IN_SW && chrome.runtime && chrome.runtime.sendMessage) {
    let r = null;
    try { r = await chrome.runtime.sendMessage({ type: 'drive-auth', interactive }); } catch (e) { r = null; }
    if (r && r.ok) return r.token;
    if (r && !r.ok) throw new Error(r.err || 'auth failed');
  }
  return driveAuthLocal(interactive);                    // 서비스 워커를 못 쓰면 이 화면에서 직접
}
async function driveToken(interactive = false) {
  const d = await drvGet();
  if (d.token && d.exp > Date.now()) return d.token;
  if (!d.linked && !interactive) throw new Error('not-linked');
  if (!interactive && d.silentFailAt && Date.now() - d.silentFailAt < SILENT_BACKOFF) throw new Error('login-needed');
  const recentFail = d.silentFailAt && Date.now() - d.silentFailAt < SILENT_BACKOFF;
  if (interactive && recentFail) return driveAuth(true);   // 방금 조용한 갱신이 실패했으면 바로 로그인 창
  try { return await driveAuth(false); }                 // 로그인 세션이 살아 있으면 창 없이 갱신
  catch (e) { if (interactive) return await driveAuth(true); throw new Error('login-needed'); }
}
async function driveFetch(url, opts = {}, interactive = false, retry = true) {
  const token = await driveToken(interactive);
  const r = await fetch(url, { ...opts, headers: { ...(opts.headers || {}), Authorization: 'Bearer ' + token } });
  if (r.status === 401 && retry) { await drvSet({ token: null, exp: 0 }); return driveFetch(url, opts, interactive, false); }
  if (!r.ok) throw new Error('Drive error ' + r.status);
  return r;
}
async function driveFileId(interactive) {
  const d = await drvGet();
  if (d.fileId) return d.fileId;
  const q = encodeURIComponent(`name='${DRIVE.file}' and trashed=false`);
  const r = await driveFetch(`https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=${q}&fields=files(id,modifiedTime)&pageSize=10`, {}, interactive);
  const j = await r.json();
  const f = (j.files || [])[0];
  if (f) await drvSet({ fileId: f.id });
  return f ? f.id : null;
}
export async function driveRead(interactive = false) {
  const id = await driveFileId(interactive);
  if (!id) return null;
  try {
    const r = await driveFetch(`https://www.googleapis.com/drive/v3/files/${id}?alt=media`, {}, interactive);
    const s = await r.json();
    Object.assign(driveState, { ok: true, pulledAt: Date.now(), err: '' });
    return s;
  } catch (e) {
    if (String(e.message).includes('404')) { await drvSet({ fileId: null }); return null; }
    throw e;
  }
}
export async function driveWrite(s, interactive = false) {
  const body = JSON.stringify(serialize(s));
  let id = await driveFileId(interactive);
  if (id) {
    try {
      await driveFetch(`https://www.googleapis.com/upload/drive/v3/files/${id}?uploadType=media`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body }, interactive);
    } catch (e) {
      if (!String(e.message).includes('404')) throw e;
      await drvSet({ fileId: null }); id = null;
    }
  }
  if (!id) {
    const boundary = 'dm' + Math.random().toString(36).slice(2);
    const meta = JSON.stringify({ name: DRIVE.file, parents: ['appDataFolder'], mimeType: 'application/json' });
    const multipart = `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${meta}\r\n--${boundary}\r\nContent-Type: application/json\r\n\r\n${body}\r\n--${boundary}--`;
    const r = await driveFetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', { method: 'POST', headers: { 'Content-Type': 'multipart/related; boundary=' + boundary }, body: multipart }, interactive);
    const j = await r.json();
    if (!j.id) throw new Error('Unexpected Drive response');
    await drvSet({ fileId: j.id });
  }
  await drvSet({ lastWrite: Date.now(), lastSavedAt: s.savedAt });
  Object.assign(driveState, { ok: true, at: Date.now(), err: '' });
}
export async function driveStatus() {
  const d = await drvGet();
  driveState.linked = !!d.linked;
  if (d.lastWrite) driveState.at = Math.max(driveState.at, d.lastWrite);
  return driveState;
}
export async function driveLink() {
  if (!driveState.supported) throw new Error('Google sign-in not supported');
  await driveAuth(true);
  driveState.linked = true; driveState.ok = null; driveState.err = '';
  return true;
}
export async function driveUnlink() {
  const d = await drvGet();
  if (d.token) { try { await fetch('https://oauth2.googleapis.com/revoke?token=' + encodeURIComponent(d.token), { method: 'POST' }); } catch (e) {} }
  await chrome.storage.local.remove(DRV_KEY);
  Object.assign(driveState, { linked: false, ok: null, at: 0, err: '' });
}
// 로컬과 드라이브를 비교해 최신 쪽을 돌려주고, 로컬이 더 최신이면 드라이브에 올린다
// 진행도 비교: 윤회 → 최고층 → 환생 → 레벨 → 처치 수
export function progressCmp(a, b) {
  const k = s => [s.reinc || 0, s.bestFloor || s.maxFloor || 0, s.rebirths || 0, s.level || 0, s.totalKills || 0];
  const x = k(a), y = k(b); for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return x[i] > y[i] ? 1 : -1; return 0;
}
export async function driveSync(s, { interactive = false, push = true } = {}) {
  await driveStatus();
  if (!driveState.linked || !driveState.supported) return { action: 'off' };
  try {
    const d0 = await drvGet();
    const remote = await driveRead(interactive);
    if (remote && !d0.lastSavedAt) {
      const n = normalize(remote);
      if (progressCmp(n, s) > 0) return { action: 'pull', save: n };
      if (push) { await driveWrite(s, interactive); return { action: 'push' }; }
      return { action: 'same' };
    }
    if (remote && (remote.savedAt || 0) > (s.savedAt || 0) + 1000) {
      const n = normalize(remote);
      return { action: 'pull', save: n };
    }
    if (push) {
      const d = await drvGet();
      if (!remote || (s.savedAt || 0) > (d.lastSavedAt || 0)) { await driveWrite(s, interactive); return { action: 'push' }; }
    }
    return { action: 'same' };
  } catch (e) {
    Object.assign(driveState, { ok: false, err: String(e.message || e) });
    return { action: 'error', err: driveState.err };
  }
}


// ---------- 다국어 이름 게터 ----------
for (const id of CLASS_IDS) Object.defineProperties(CLASSES[id], { name: { get: () => t('cls.' + id), configurable: true }, desc: { get: () => t('cls.' + id + '.d'), configurable: true } });
RARITIES.forEach((r, i) => Object.defineProperty(r, 'name', { get: () => t('rar.' + i), configurable: true }));
for (const u of UPGRADES) Object.defineProperties(u, { name: { get: () => t('up.' + u.id), configurable: true }, desc: { get: () => t('up.' + u.id + '.d'), configurable: true } });
for (const s of SKILLS) Object.defineProperty(s, 'name', { get: () => t('sk.' + s.id), configurable: true });
for (const c of COMPANIONS) Object.defineProperty(c, 'name', { get: () => t('comp.' + c.id), configurable: true });
for (const [k, a] of Object.entries(AFFIXES)) Object.defineProperty(a, 'pre', { get: () => t('pre.' + k), configurable: true });
for (const [k, u] of Object.entries(UNIQUES)) Object.defineProperties(u, { name: { get: () => t('uq.' + k), configurable: true }, desc: { get: () => t('uq.' + k + '.d'), configurable: true } });
