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
export const BAG_SOFT_CAP = 1000;       // 칸 수 상한 (넘으면 가장 약한 것부터 자동 판매)
export const DROP_PER_SEC = 1 / 6;      // 드랍 상한: 평균 6초에 1개 (빠른 사냥에서 가방 폭증 방지)   // 사실상 무제한 (계정 동기화 용량 보호용 안전장치)
export const TEAM_MAX = 3;
export const SKILL_MAX = 10;

// ---------- 직업 ----------
export const CLASS_IDS = ['war', 'rog', 'mag', 'clr'];
export const CLASSES = {
  war: { name: '전사',   color: '#ff8a5c', desc: '체력 +30% · 받는 피해 -10%',               mods: { hpP: 30, def: 10 } },
  rog: { name: '도적',   color: '#7ee08a', desc: '치명타 +8% · 공격속도 +15 · 골드 +15%',     mods: { crit: 8, spd: 15, goldP: 15 } },
  mag: { name: '마법사', color: '#8fb8ff', desc: '스킬 피해 +40% · 쿨타임 -10% · 체력 -15%', mods: { skillP: 40, cdr: 10, hpP: -15 } },
  clr: { name: '성직자', color: '#ffd98a', desc: '체력 +15% · 보스 피해 +15% · 보스전 재생 1.5%/초 · 동료 피해 +40%', mods: { hpP: 15, bossP: 15, regen: 1.5, compP: 40 } },
};

// 스탯 키 표시명
const STAT_UNIT = { xpP: '%', atkP: '%', hpP: '%', crit: '%', spd: '', goldP: '%', bossP: '%', def: '%', cdr: '%', critDmg: '%', skillP: '%', compP: '%', regen: '%/s', atk: '', hp: '' };
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
export const MONSTERS = _nameArr('mon.', 16);
export const FLOOR_NAMES = _nameArr('floor.', 16);
export const FLOOR_TILES = [1, 3, 1, 11, 2, 2, 0, 1, 10, 11, 4, 6, 6, 4, 9, 8];
export function monsterIndex(f) { return Math.min(MONSTERS.length - 1, Math.floor((f - 1) / 3)); }
export function isBossFloor(f) { return f % BOSS_EVERY === 0; }
export function killsNeeded(f) { return Math.min(30, 10 + Math.floor((f - 1) / 10) * 3); }
export function monHp(f) { return 14 * Math.pow(1.4, f - 1); }
export function bossHp(f) { return monHp(f) * 20; }
export function bossDps(f) { return 5 * Math.pow(1.235, f - 1); }
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
// n레벨부터 k번 연속 구매 총액 (등비수열 합)
export function upgradeCostN(u, n, k) { let c = 0; for (let i = 0; i < k; i++) c += upgradeCost(u, n + i); return c; }

// ---------- 스킬 ----------
// active: 쿨타임마다 자동 시전 / passive: 공격할 때 확률 발동
export const SKILLS = [
  // 전사
  { id: 'war_bash',   cls: 'war', type: 'active',  name: '강타',        unlock: 1,  cd: 8,  eff: 'burst', v0: 4,  vl: 0.6, fx: 'slash',  desc: v => `DPS ${v.toFixed(1)}배 일격` },
  { id: 'war_cry',    cls: 'war', type: 'active',  name: '전투의 함성', unlock: 8,  cd: 24, eff: 'buff', dur: 8, v0: 30, vl: 6, buff: v => ({ atkP: v }), fx: 'aura', color: '#ff7a4a', desc: v => `8초간 공격력 +${v.toFixed(0)}%` },
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
  { id: 'mag_fire',   cls: 'mag', type: 'active',  name: '화염구',      unlock: 1,  cd: 6,  eff: 'burst', v0: 5,  vl: 0.7, fx: 'fireball', desc: v => `DPS ${v.toFixed(1)}배 화염 폭발` },
  { id: 'mag_chain',  cls: 'mag', type: 'active',  name: '사슬 번개',   unlock: 8,  cd: 14, eff: 'burst', v0: 9,  vl: 1.2, fx: 'lightning', desc: v => `DPS ${v.toFixed(1)}배 번개` },
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
  { id: 'war_whirl',   cls: 'war', type: 'active',  name: '회오리 베기', unlock: 32, cd: 18, eff: 'burst', v0: 8,  vl: 1.1, fx: 'whirl', desc: v => `5연속 회전 베기, 총 DPS ${v.toFixed(1)}배` },
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
export function resetSkills(s) {
  const spent = Object.values(s.skills || {}).reduce((a, b) => a + b, 0);
  s.skills = {}; s.cd = {}; s.buffs = [];
  s.sp = (s.sp || 0) + spent;
  return spent;
}
export function changeClass(s, cls) {
  if (!CLASSES[cls]) return false;
  s.cls = cls;
  s.skills = {}; s.cd = {}; s.buffs = [];
  s.sp = Math.max(0, s.level - 1);
  return true;
}

// ---------- 동료 ----------
export const C_RARITY = [
  { name: 'R',   color: '#cfd6e6', rate: 0.60, coef: 0.18 },
  { name: 'SR',  color: '#6fb7ff', rate: 0.30, coef: 0.28 },
  { name: 'SSR', color: '#c78dff', rate: 0.085, coef: 0.42 },
  { name: 'UR',  color: '#ffc35c', rate: 0.013, coef: 0.65 },
  { name: 'LR',  color: '#ff6fae', rate: 0.002, coef: 1.0 },
];
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
const R_MULT = [1, 2, 3.5, 6, 10];
const rnd1 = x => Math.round(x * 10) / 10;
const NEW_COMPS = [["orc_warrior","war",0],["gnoll_sergeant","war",0],["hobgoblin","war",0],["dwarf","war",0],["deep_elf_fighter","war",0],["vault_guard","war",0],["human","war",0],["orc_knight","war",1],["deep_elf_knight","war",1],["hell_knight","war",1],["grum","war",1],["frederick","war",1],["wiglaf","war",1],["death_knight","war",2],["juggernaut","war",2],["titan","war",2],["tiamat","war",3],["halfling","rog",0],["big_kobold","rog",0],["boggart","rog",0],["satyr","rog",0],["merfolk_javelineer","rog",0],["tengu","rog",0],["faun","rog",0],["deep_elf_master_archer","rog",1],["naga_sharpshooter","rog",1],["tengu_reaver","rog",1],["yaktaur_captain","rog",1],["urug","rog",1],["robin","rog",1],["vashnia","rog",2],["sojobo","rog",2],["ilsuiw","rog",2],["rakshasa","rog",3],["orc_wizard","mag",0],["deep_elf_mage","mag",0],["gnoll_shaman","mag",0],["kobold_demonologist","mag",0],["naga_mage","mag",0],["merfolk_aquamancer","mag",0],["salamander_mystic","mag",0],["deep_elf_sorcerer","mag",1],["deep_elf_conjurer","mag",1],["ogre_mage","mag",1],["tengu_conjurer","mag",1],["salamander_stormcaller","mag",1],["erolcha","mag",1],["aizul","mag",2],["ereshkigal","mag",2],["ancient_lich","mag",2],["efreet","mag",3],["orc_priest","clr",0],["deep_elf_priest","clr",0],["deep_troll_shaman","clr",0],["water_nymph","clr",0],["dryad","clr",0],["ironheart_preserver","clr",0],["deep_dwarf","clr",0],["orc_high_priest","clr",1],["deep_elf_high_priest","clr",1],["naga_ritualist","clr",1],["margery","clr",1],["maud","clr",1],["cherub","clr",1],["angel","clr",2],["daeva","clr",2],["sphinx","clr",2],["seraph","clr",3],["balrug","war",4],["shadow_fiend","rog",4],["xtahua","mag",4],["ophan","clr",4]];
const LR_FX = { balrug: ['atkP', 70, 'atkP', 15], shadow_fiend: ['critDmg', 110, 'critDmg', 28], xtahua: ['skillP', 110, 'skillP', 28], ophan: ['compP', 120, 'compP', 30] };
NEW_COMPS.forEach(([id, cls, r], i) => {
  if (LR_FX[id]) { COMPANIONS.push(C(id, id, cls, r, ...LR_FX[id])); return; }
  const ks = CLS_KEYS[cls], tk = ks[i % 5], ok = ks[(i + 2) % 5];
  COMPANIONS.push(C(id, id, cls, r, tk, rnd1(KEY_BASE[tk] * R_MULT[r] * (0.9 + 0.05 * (i % 5))), ok, rnd1(KEY_BASE[ok] * R_MULT[r] * 0.25)));
});
export const COMP_BY_ID = Object.fromEntries(COMPANIONS.map(c => [c.id, c]));

// ---- 동료 각성 스킬: 3각성 패시브, 5각성 액티브 (파티에 편성했을 때만 발동)
export const CSK_AW_P = 3, CSK_AW_A = 5;
const CSK_RS = [1, 1.4, 2, 3, 4.5];      // 패시브·폭딜 등급 배율
const CSK_RB = [1, 1.25, 1.6, 2.1, 2.8]; // 버프·회복 등급 배율
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
export function teamValue(s, c, aw) {
  const syn = s.cls === c.cls ? 1.5 : 1;
  return c.team.v * (1 + 0.2 * (aw || 0)) * syn;
}
export function ownValue(c, aw) { return c.own.v * (1 + 0.25 * (aw || 0)); }
export function compCoef(c, aw) { return C_RARITY[c.r].coef * (1 + 0.2 * (aw || 0)); }
export function stoneDiscount(s) { return Math.min(0.5, 0.05 * (s.rebirths || 0)); }
export function stonePrice(s) { return Math.ceil(600 * Math.pow(1.28, s.stoneBuys || 0) * (1 - stoneDiscount(s))); }

export function rollCompanion(s, minR) {
  const x = Math.random();
  // R 60% · SR 30% · SSR 8.5% · UR 1.3% · LR 0.2%
  let r = x < 0.60 ? 0 : x < 0.90 ? 1 : x < 0.985 ? 2 : x < 0.998 ? 3 : 4;
  if (minR != null && r < minR) {
    const y = Math.random();
    if (minR === 1) r = y < 0.75 ? 1 : y < 0.965 ? 2 : y < 0.995 ? 3 : 4;
    else r = y < 0.86 ? 2 : y < 0.985 ? 3 : 4;
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
  for (const [id, st] of Object.entries(comp)) { const c = COMP_BY_ID[id]; if (c) acc[c.own.k] = (acc[c.own.k] || 0) + ownValue(c, st.aw); }
  OWN_CACHE = { ref: comp, ver: COMP_VER, list: Object.entries(acc) };
  return OWN_CACHE.list;
}
export function gainCompanion(s, c) {
  COMP_VER++;
  const cur = s.comp[c.id];
  if (!cur) {
    s.comp[c.id] = { n: 1, aw: 0 };
    if (s.team.length < TEAM_MAX) s.team.push(c.id);
    return { c, isNew: true, aw: 0 };
  }
  cur.n++;
  if (cur.aw < AWAKEN_MAX) { cur.aw++; return { c, isNew: false, aw: cur.aw }; }
  s.stones += 3;
  return { c, isNew: false, aw: cur.aw, refund: 3 };
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
  s.pulls += n;
  return out;
}
export const PRESET_MAX = 3;
export function savePreset(s, i) {
  s.presets = s.presets || [];
  const old = s.presets[i] && s.presets[i].name;
  s.presets[i] = { name: old && !/^프리셋 \d$/.test(old) ? old : null, team: (s.team || []).slice() };
  return true;
}
export function applyPreset(s, i) {
  const p = (s.presets || [])[i];
  if (!p || !p.team) return false;
  s.team = p.team.filter(id => s.comp && s.comp[id]).slice(0, TEAM_MAX);
  return true;
}
export function toggleTeam(s, id) {
  const k = s.team.indexOf(id);
  if (k >= 0) { s.team.splice(k, 1); return false; }
  if (s.team.length >= TEAM_MAX) return false;
  s.team.push(id);
  return true;
}
export function ownSummary(s) {
  const acc = {};
  for (const [id, st] of Object.entries(s.comp || {})) {
    const c = COMP_BY_ID[id];
    if (!c) continue;
    acc[c.own.k] = (acc[c.own.k] || 0) + ownValue(c, st.aw);
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
    stones: 30, pulls: 0, pity: 0, stoneBuys: 0,
    honor: 0, rebirths: 0,
    autoEquip: true, pending: null,
    lastTick: Date.now(), createdAt: Date.now(),
  };
}
function clampItem(it) {
  if (it && typeof it === 'string') it = decItem(it);
  if (!it || !SLOT_BY_ID[it.s]) return null;
  const o = { ...it, t: Math.min(it.t, SLOT_BY_ID[it.s].tiers - 1), r: Math.min(it.r || 0, 4) };
  if (o.u && !UNIQUES[o.u]) delete o.u;
  if (o.a) o.a = o.a.filter(x => Array.isArray(x) && AFFIXES[x[0]]);
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
  o.skills = { ...(s.skills || {}) };
  o.cd = { ...(s.cd || {}) };
  o.buffs = Array.isArray(s.buffs) ? s.buffs : [];
  o.comp = { ...(s.comp || {}) };
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
  return o;
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

  let atk = 5 + (s.level - 1) * 3 + (up.atk || 0) * 2;
  let hp = 60 + (s.level - 1) * 14 + (up.hp || 0) * 12;
  add('atkP', (up.atk || 0) * 4);
  add('hpP', (up.hp || 0) * 4);
  add('crit', (up.crit || 0) * 0.5);
  add('spd', (up.spd || 0) * 3);
  add('goldP', (up.gold || 0) * 5);
  add('skillP', (up.skill || 0) * 4);
  add('compP', (up.comp || 0) * 5);

  for (const sl of SLOTS) {
    const it = s.equip[sl.id];
    if (!it) continue;
    const v = itemValue(it);
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
  const team = [], selfX = {};
  let pAll = 0;
  for (const id of s.team || []) {
    const c = COMP_BY_ID[id], st = (s.comp || {})[id];
    if (!c || !st) continue;
    add(c.team.k, teamValue(s, c, st.aw));
    team.push({ c, aw: st.aw });
    if (st.aw >= CSK_AW_P) {
      const p = compPassive(c);
      if (p.eff === 'stat') add(p.k, p.val);
      else if (p.eff === 'self') selfX[c.id] = 1 + p.val / 100;
      else if (p.eff === 'allcomp') pAll += p.val / 100;
    }
  }
  // 버프
  for (const b of s.buffs || []) for (const [k, v] of Object.entries(b.stats || {})) add(k, v);

  // 패시브 (현재 직업)
  let extra = 0, pHeal = 0, pCdr = 0, pShield = 0, pGold = 0, pXp = 0, pComp = 0;
  const spd = Math.max(20, 100 + a.spd);
  const aps = spd / 100;
  for (const sd of classSkills(s.cls || 'war', 'passive')) {
    const lv = s.skills[sd.id] || 0;
    if (!lv) continue;
    const c = passiveChance(sd, lv) / 100, m = passiveMult(sd, lv);
    if (sd.eff === 'extra') { extra += c * m; if (sd.heal) pHeal += aps * c * sd.heal; }
    else if (sd.eff === 'heal') pHeal += aps * c * m;
    else if (sd.eff === 'cdr') pCdr += aps * c * m;
    else if (sd.eff === 'shield') pShield += Math.min(1, aps * c * m) * 50;
    else if (sd.eff === 'gold') pGold += c * m;
    else if (sd.eff === 'xp') pXp += c * m;
    else if (sd.eff === 'comp') pComp += c * m;
  }

  if (mech.double) extra += 0.15;
  const crit = Math.min(90, 5 + a.crit);
  const critMult = 2.5 + a.critDmg / 100;
  const atkF = atk * Math.max(0.1, 1 + a.atkP / 100) * honorMult;
  const hpF = hp * Math.max(0.2, 1 + a.hpP / 100);
  const hit = atkF * (1 + (crit / 100) * (critMult - 1));
  const thunder = mech.thunder ? (crit / 100) * 0.2 * 4 : 0;
  const heroDps = hit * aps * (1 + extra) + atkF * aps * thunder;
  const compMult = (1 + a.compP / 100) * (1 + pComp) * (1 + pAll);
  let compDps = 0;
  const compHits = team.map(({ c, aw }) => { const d = compCoef(c, aw) * atkF * compMult * (selfX[c.id] || 1); compDps += d; return { id: c.id, dps: d }; });
  const compActs = team.filter(x => x.aw >= CSK_AW_A).map(x => x.c);
  const cdr = Math.min(50, a.cdr);
  return {
    atk: atkF, hp: hpF, crit, critMult, spd, aps, hit,
    heroDps, compDps, compHits, compActs, dps: heroDps + compDps,
    def: Math.min(75, a.def + pShield), cdr,
    cdRate: 1 / (1 - cdr / 100) + pCdr,
    regen: a.regen + pHeal,
    goldMult: (1 + a.goldP / 100 + pGold) * honorMult,
    bossMult: 1 + a.bossP / 100,
    skillMult: 1 + a.skillP / 100,
    weak: Math.min(80, a.weak),
    xpMult: (1 + pXp) * (1 + a.xpP / 100),
    mech,
    extra, honorMult, raw: a,
  };
}

export function xpNeed(level) { return Math.ceil(xpPerKill(Math.max(1, Math.round(level * 1))) * (10 + 8 * level)); }

// ---------- 진행 엔진 ----------
function cast(s, st, sd, lv, ev) {
  const v = skillVal(sd, lv);
  if (sd.eff === 'burst') {
    const dmg = st.heroDps * v * st.skillMult * (s.boss && sd.bossX ? sd.bossX : 1);
    if (sd.weak) pushBuff(s, sd.id, sd.dur, { weak: sd.weak });
    (ev.casts ||= []).push({ id: sd.id, dmg });
    return dmg;
  }
  if (sd.eff === 'buff') {
    pushBuff(s, sd.id, sd.dur, sd.buff(v));
    if (sd.heal && s.boss && s.hp != null) s.hp = Math.min(st.hp, s.hp + st.hp * sd.heal / 100);
    (ev.casts ||= []).push({ id: sd.id });
    return 0;
  }
  if (sd.eff === 'heal') {
    if (!s.boss || s.hp == null || s.hp > st.hp * 0.8) return -1;   // 필요할 때까지 대기
    s.hp = Math.min(st.hp, s.hp + st.hp * v / 100);
    (ev.casts ||= []).push({ id: sd.id, heal: st.hp * v / 100 });
    return 0;
  }
  if (sd.eff === 'timer') {
    if (!s.boss || s.boss.timer > BOSS_TIME * 0.5) return -1;   // 보스전 후반까지 대기
    s.boss.timer += v;
    if (sd.heal && s.hp != null) s.hp = Math.min(st.hp, s.hp + st.hp * sd.heal / 100);
    if (sd.cdAll) for (const k of Object.keys(s.cd)) if (k !== sd.id) s.cd[k] = Math.max(0, s.cd[k] - sd.cdAll);
    (ev.casts ||= []).push({ id: sd.id, time: v });
    return 0;
  }
  if (sd.eff === 'gold') {
    const g = goldPerKill(s.floor) * st.goldMult * v;
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
  ev = ev || {};
  if (!s.cls) return ev;
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
        burst += r; cd += sd.cd;
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

  if (s.boss) {
    s.boss.timer -= dt;
    s.boss.hp -= (st.dps * dt + burst) * st.bossMult;
    let h = (s.hp == null ? st.hp : s.hp);
    h += st.hp * (st.regen / 100) * dt;
    const invuln = st.mech.invuln && s.boss.timer > BOSS_TIME - 5;
    if (!invuln) h -= bossDps(s.floor) * (1 - st.def / 100) * (1 - st.weak / 100) * dt;
    if (h <= 0 && st.mech.revive && !s.boss.revived) { s.boss.revived = true; h = st.hp * 0.3; ev.revive = true; }
    s.hp = Math.min(st.hp, h);
    if (s.boss.hp <= 0) {
      ev.bossWin = true;
      gainKill(s, st, true, ev, 1);
      const bonus = 3 + Math.floor(s.floor / 5);
      s.stones += bonus;
      ev.stones = (ev.stones || 0) + bonus;
      s.boss = null; s.hp = null;
      advanceFloor(s, ev);
    } else if (s.boss.timer <= 0 || s.hp <= 0) {
      ev.bossLose = true;
      s.boss = null; s.hp = null;
      s.kills = 0; s.prog = 0;
      s.floor = Math.max(1, s.floor - 1);
      s.bossLock = true;
    }
    return ev;
  }

  if (isBossFloor(s.floor)) {
    const bh = bossHp(s.floor);
    s.boss = { hp: bh, max: bh, timer: BOSS_TIME };
    s.hp = st.hp;
    ev.bossStart = true;
    return ev;
  }

  const M = monHp(s.floor);
  s.prog += (st.dps * dt + burst) / M;
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
export function canChallenge(s) { return !!s.bossLock && !s.boss && isBossFloor(s.floor + 1); }
export function challengeBoss(s) {
  if (!canChallenge(s)) { s.bossLock = false; return false; }
  s.bossLock = false; s.kills = 0; s.prog = 0; s.floor += 1;
  return true;
}

function gainKill(s, st, boss, ev, n) {
  const f = s.floor;
  const g = goldPerKill(f) * st.goldMult * (boss ? 20 : 1) * n;
  s.gold += g;
  s.xp += xpPerKill(f) * (boss ? 14 : 1) * n * (st.xpMult || 1);
  s.totalKills += n;
  if (!boss) s.kills += n;
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
    s.maxFloor = s.floor;
    s.stones += 2;
    ev.stones = (ev.stones || 0) + 2;
    ev.newDepth = s.floor;
  }
  ev.floorUp = s.floor;
}

export function pickup(s, it, ev) {
  ev = ev || {};
  const cur = s.equip[it.s];
  // 자동 판매: 설정한 등급 이하이고 착용 중보다 좋지 않으면 바로 판다
  if ((s.autoSell ?? -1) >= 0 && it.r <= s.autoSell && cur && itemScore(it) <= itemScore(cur)) {
    s.gold += sellPrice(it); ev.autoSold = (ev.autoSold || 0) + 1; return;
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
  let g = 0; s.bag = s.bag.filter((b, i) => { if (rm.has(i)) { g += sellPrice(b) * (b.n || 1); return false; } return true; });
  s.gold += g;
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
  const p = sellPrice(it) * cnt;
  s.gold += p;
  if (all || (it.n || 1) <= 1) s.bag.splice(idx, 1); else it.n--;
  return p;
}
export function sellAllWorse(s) {
  let total = 0, cnt = 0;
  s.bag = s.bag.filter(it => {
    const cur = s.equip[it.s];
    if (cur && itemScore(it) <= itemScore(cur)) { total += sellPrice(it) * (it.n || 1); cnt += it.n || 1; return false; }
    return true;
  });
  s.gold += total;
  return total;
}
export function sellByRarity(s, maxR) {
  let total = 0;
  s.bag = s.bag.filter(it => {
    if (it.r <= maxR) { total += sellPrice(it) * (it.n || 1); return false; }
    return true;
  });
  s.gold += total;
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
  s.gold -= c; s.up[id] = n + k;
  return true;
}
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
  return Math.max(1, Math.floor(2.2 * Math.pow(s.maxFloor / REBIRTH_FLOOR, 1.9)));
}
export function rebirth(s) {
  const g = honorGain(s);
  if (!g) return 0;
  const keep = {
    honor: s.honor + g, rebirths: s.rebirths + 1, autoEquip: s.autoEquip, createdAt: s.createdAt,
    cls: s.cls, banner: s.banner,
    comp: s.comp, team: s.team, presets: s.presets, stones: s.stones, pulls: s.pulls, pity: s.pity, stoneBuys: 0, lang: s.lang,
  };
  Object.assign(s, newSave(), keep);
  s.lastTick = Date.now();
  return g;
}

// ---------- 오프라인 ----------
export function advance(s, now = Date.now()) {
  const last = s.lastTick || now;
  const realSec = Math.max(0, (now - last) / 1000);
  s.lastTick = now;
  if (realSec < 1 || !s.cls) return { offline: false, seconds: 0 };
  const offline = realSec > 30;
  const sec = offline ? Math.min(realSec, OFFLINE_CAP_H * 3600) * OFFLINE_RATE : realSec;
  const before = { gold: s.gold, floor: s.floor, kills: s.totalKills, level: s.level, stones: s.stones };
  const ev = {};
  // 긴 오프라인은 큰 간격으로 묶어서 계산 (12시간이어도 약 9천 번 → 1초 안팎)
  const CH = sec > 600 ? Math.min(3, Math.max(0.5, sec / 8000)) : 0.5;
  const n = Math.min(Math.ceil(sec / CH), 12000);
  for (let i = 0; i < n; i++) { step(s, CH, ev); if (ev.casts && ev.casts.length > 50) ev.casts.length = 0; if (ev.compCasts && ev.compCasts.length > 50) ev.compCasts.length = 0; }
  const res = {
    offline, seconds: realSec,
    gold: s.gold - before.gold, floors: s.floor - before.floor,
    kills: s.totalKills - before.kills, levels: s.level - before.level,
    stones: s.stones - before.stones, drops: ev.drops || [],
  };
  if (offline) {
    const p = s.pending || { seconds: 0, gold: 0, floors: 0, kills: 0, levels: 0, stones: 0, drops: [] };
    p.seconds += res.seconds; p.gold += res.gold; p.floors += res.floors;
    p.kills += res.kills; p.levels += res.levels; p.stones += res.stones;
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
  while (n >= 1000 && i < U.length - 1) { n /= 1000; i++; }
  return (n < 10 ? n.toFixed(2) : n < 100 ? n.toFixed(1) : Math.floor(n)) + U[i];
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

async function driveAuth(interactive) {
  const redirect = chrome.identity.getRedirectURL();
  const q = new URLSearchParams({
    client_id: DRIVE.clientId, response_type: 'token', redirect_uri: redirect,
    scope: DRIVE.scope, include_granted_scopes: 'true',
  });
  if (!interactive) q.set('prompt', 'none');
  const back = await chrome.identity.launchWebAuthFlow({ url: 'https://accounts.google.com/o/oauth2/v2/auth?' + q, interactive });
  const h = new URLSearchParams((back.split('#')[1] || ''));
  if (h.get('error')) throw new Error(h.get('error'));
  const token = h.get('access_token');
  if (!token) throw new Error('No token received');
  const exp = Date.now() + (Number(h.get('expires_in') || 3600) - 60) * 1000;
  await drvSet({ linked: true, token, exp });
  return token;
}
async function driveToken(interactive = false) {
  const d = await drvGet();
  if (d.token && d.exp > Date.now()) return d.token;
  if (!d.linked && !interactive) throw new Error('not-linked');
  try { return await driveAuth(false); }                 // 로그인 세션이 살아 있으면 창 없이 갱신
  catch (e) { if (interactive) return await driveAuth(true); throw e; }
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
  driveState.linked = true;
  return true;
}
export async function driveUnlink() {
  const d = await drvGet();
  if (d.token) { try { await fetch('https://oauth2.googleapis.com/revoke?token=' + encodeURIComponent(d.token), { method: 'POST' }); } catch (e) {} }
  await chrome.storage.local.remove(DRV_KEY);
  Object.assign(driveState, { linked: false, ok: null, at: 0, err: '' });
}
// 로컬과 드라이브를 비교해 최신 쪽을 돌려주고, 로컬이 더 최신이면 드라이브에 올린다
export async function driveSync(s, { interactive = false, push = true } = {}) {
  await driveStatus();
  if (!driveState.linked || !driveState.supported) return { action: 'off' };
  try {
    const remote = await driveRead(interactive);
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
