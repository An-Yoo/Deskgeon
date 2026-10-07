import {
  SLOTS, SLOT_BY_ID, SLOT_STAT_NAME, RARITIES, MONSTERS, FLOOR_NAMES, FLOOR_TILES, UPGRADES, SKILLS, SKILL_BY_ID, SKILL_MAX, CLASSES, CLASS_IDS, COMPANIONS, COMP_BY_ID, C_RARITY, TEAM_MAX, AWAKEN_MAX, PULL_COST, PULL10_COST, PITY, BOSS_TIME, REBIRTH_FLOOR, OFFLINE_RATE, STAT_LABEL, load, save, advance, step, stats, monsterIndex, killsNeeded, xpNeed, itemValue, itemName, itemIcon, itemDoll, sellPrice, equipFromBag, sellFromBag, sellAllWorse, buyUpgrade, upgradeCost, upgradeCostN, buyStone, buyStoneMax, stoneMaxCount, bagCount, sellByRarity, itemKey, stonePrice, learnSkill, skillUnlocked, skillVal, skillDesc, passiveChance, passiveMult, classSkills, changeClass, teamValue, ownValue, compCoef, ownSummary, statText, pull, toggleTeam, honorGain, rebirth, fmt, fmtDur, syncState, backup, listBackups, exportCode, importCode, SYNC_EVERY_MS, driveState, driveStatus, driveLink, driveUnlink, driveSync, itemScore, baseName, AFFIXES, UNIQUES, rarityOdds, canChallenge, challengeBoss, savePreset, applyPreset, PRESET_MAX, t, setLang, getLang, LANGS, resetSkills, stoneDiscount, serialize, compPassive, compActive, compSkillName, compSkillDesc, CSK_AW_P, CSK_AW_A, RELICS, relicLv, relicCost, buyRelic, offlineRate, BREAK_EVERY, BREAK_X, BREAK_IDS, breakMult, SHARD_GAIN, CLV_MAX, CLV_STEP, compLvCost, compLevelUp, MASTERY, masteryLv, masteryUnlocked, buyMastery, skillsMaxed, spTotal, compLevelUpAll, ZONES, zoneStart, loopOf, LOOP_LEN, ESS_BY_R, gearEssence, REINC_FLOOR, KARMA_HONOR, KARMA_POW, karmaGain, canReinc, reincarnate, DAILY, WEEKLY, DAILY_ALL, WEEKLY_ALL, ATTEND, BOOST_MIN, BOOST_X, questRoll, missionState, claimMission, canAttend, attend, boostLeft, boostMult, useBoost, AUTO, autoOn, bossRetryWait, TOWER_TRIES, TOWER_TIME, towerMon, canTower, towerStart, mutKind, mutOf, setMut, mutPending, EVENTS, EVENT_BY_ID, EVENT_TTL, resolveEvent, eventOptOk, eventReward, GUIDE, guideStep, guideClaim, DAILY_TRIES, DAILY_MODS, DAILY_BLESS, dailyState, dailyMod, dailyRun, sigOf, SIG_PITY, TOWERS, towerState, riftState, canRift, riftStart, riftUnlocked, riftFloor, RIFT_UNLOCK, RIFT_WAVES, RIFT_TIME, KEY_DAILY, KEY_MAX, RUNE_SLOTS, RUNE_BAG, RUNE_UP_MAX, runeState, runeVal, runeEquip, runeUnequip, runeUpgrade, runeUpCost, runeDismantle, runeDustOf, runeSum, runeScore, ENCH_MAX, ENCH_STEP, enchLv, enchCost, enchant, SETS, setInfo, ACH, ACH_REWARD, ACH_PCT, BEST_STARS, BEST_PCT, achMet, achClaimed, achPoints, claimAch, bestStars, convPreview, LAST_CONV, COS_SLOTS, COSTUMES, COS_BY_ID, lookOf, lookOptions, setLook, cosCount, EXP_SLOTS, EXP_SIZE, EXP_DUR, expSlots, onExped, expFree, expPower, expMult, expAutoPick, expPreview, expStart, expRecall, expClaim, CG_KINDS, CG_BAG, CG_DUST, cgVal, cgBag, cgEq, cgEquip, cgUnequip, cgDismantle, cgMerge, cgAutoEquip, cgScore, C_MAXR, STONE_SHOP, MILE_LR, MILE_MR, shopKeyLeft, rushCost, shopBuy, mileBuy, expCap, EXP_MAX, MR_POW, MRP_MAX, mrpNeed, mrpLv, mrpXp, cgBladeSum, cgExpVal, BASIC_SKILL_K, renamePreset, enchX, enchNextCost, enchXSum, ENCHX_POW, PETS, PET_MAX, PET_UNLOCK, PET_FX, PET_FX_KEYS, petUnlocked, petCap, petOwned, petLeft, petDrawCost, petRollCost, petLvCost, petVal, petAgg, petDraw, petLevelUp, petRoll, petKeep, petSetAct, petPot, petDeposit, SOUL_REINC, SOUL_MAXLV, SOUL_SLOT_AT, SOUL_FX_KEYS, SOUL_LOOKS, soulUnlocked, soulMade, soulCap, soulNeed, soulSlots, soulCraft, soulSetLook, soulRename, soulSetOpt, soulShow, soulFeedCost, soulFeed, soulVal, petAutoRoll, petAutoOdds, petWant, rushAllCost, cosLeftN, shopBuyN, expSendAll, expClaimAll, cgTakeMoved, soulAwakenSkill, cosBonus, cosFxOf, COS_FX, COS_FX_V, petLevelUpAll, compSyn, teamMax, TEAM5_FLOOR,
} from './game.js';
// 크롬(chrome.*)·파이어폭스(browser.*) 공용: promise 기반 확장 API
const chrome = globalThis.browser ?? globalThis.chrome;

const $ = s => document.querySelector(s);
// ---- 다국어
function reasonText(r) {
  if (!r) return '';
  if (r.startsWith('before:')) return t('ui.r.before', { w: reasonText(r.slice(7)) });
  const k = 'ui.r.' + r, v = t(k);
  return v === k ? r : v;          // 예전 세이브의 한국어 사유는 그대로 표시
}
function applyI18n() {
  document.documentElement.lang = getLang();
  for (const el of document.querySelectorAll('[data-i18n]')) el.textContent = t(el.dataset.i18n);
  for (const el of document.querySelectorAll('[data-i18n-ph]')) el.placeholder = t(el.dataset.i18nPh);
  for (const el of document.querySelectorAll('[data-i18n-title]')) el.title = t(el.dataset.i18nTitle);
  $('#pull1Cost').textContent = t('ui.stones', { n: PULL_COST });
  $('#pull10Cost').textContent = t('ui.stones', { n: PULL10_COST }) + ' · ' + t('ui.srPlus');
  $('#pull100Cost').textContent = t('ui.stones', { n: PULL10_COST * 10 });
  $('#rateLine').textContent = C_RARITY.map(r => r.name + ' ' + +(r.rate * 100).toFixed(2) + '%').join(' · ');
  const ls = $('#langSel');
  ls.innerHTML = Object.entries(LANGS).map(([k, n]) => `<option value="${k}" ${k === getLang() ? 'selected' : ''}>${n}</option>`).join('');
}
function changeLang(l) {
  S.lang = setLang(l); save(S, 'force');
  applyI18n();
  hudSig = '';
  buildSlots(); buildBag(); buildShop(); buildSkills(); buildComps(); buildRelics(); buildEnch(); refreshSave(); refreshSyncLine();
  render();
}
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const A = {};
let S = null, st = null;

// ================= 에셋 =================
function img(src) { return new Promise(r => { const i = new Image(); i.onload = () => r(i); i.onerror = () => r(null); i.src = src; }); }
async function preload() {
  const n = ['ui/gold', 'ui/stone', 'ui/orb', 'ui/rune'];
  for (const c of CLASS_IDS) {
    n.push('cls/' + c);
    for (let t = 0; t < 8; t++) n.push(`wpn/${c}${t}_d`, `gear/body_${c}${t}_d`);
    for (let t = 0; t < 6; t++) n.push(`gear/head_${c}${t}_d`);
  }
  for (const s of ['cloak', 'gloves', 'boots']) for (let t = 0; t < 5; t++) n.push(`gear/${s}${t}_d`);
  for (let i = 0; i < ZONES; i++) n.push('mon/m' + i);
  for (let i = 0; i < 22; i++) n.push('floor/f' + i);
  for (let z = 0; z < ZONES; z++) n.push('wall/w' + z + '_0', 'wall/w' + z + '_1');
  for (const d of ['col1', 'col2', 'col3', 'idol', 'wraith', 'demon', 'evil', 'dragon', 'iron']) n.push('deco/' + d);
  for (const c of COMPANIONS) n.push('comp/' + c.id);
  for (const z of COSTUMES) n.push('cos/' + z.id);
  for (const p of PETS) n.push('pet/' + p);
  for (const w of SOUL_LOOKS) n.push('soul/' + w);
  for (const s of SKILLS) n.push('skill/' + s.id);
  for (const f of ['arrow', 'dagger', 'icicle', 'beam', 'zap', 'dart', 'poison', 'flame', 'frost', 'b_fire', 'b_blue', 'b_yellow', 'b_pink', 'b_green', 'b_smoke', 'firestorm', 'iceblast', 'arc', 'eblast', 'holy', 'mystic', 'pcloud', 'shadow', 'blood', 'drain', 'meteor', 'smoke', 'warp', 'sanct', 'gold_dust', 'orb']) n.push('fx/' + f);
  await Promise.all(n.map(async k => { A[k] = await img(`assets/${k}.png`); }));
}
const compSrc = id => `assets/comp/${id}.png`;
const skillSrc = id => `assets/skill/${id}.png`;

// ================= 연출 시스템 =================
const W = 180, H = 96, GROUND = 62;
const HERO_X = 50, MON_X = 122;
const cv = $('#cv'), cx = cv.getContext('2d');
const parts = [], sprites = [], projs = [], slashes = [], bolts = [], timers = [];
let shake = { t: 0, d: 1, m: 0 };
const hero = { lunge: 0, lungeV: 0, flash: 0, dash: 0, ghosts: [] };
const mon = { flash: 0, knock: 0, die: 0, spawn: 0, drop: 0 };
let trans = null;              // 층 돌파 연출
let pillar = null;             // 레벨업 / 성광 기둥
const compState = {};

// 이펙트 간소화: 번쩍임·화면 흔들림·가산 발광·컷인을 끄고 파티클을 1/4로
const lowFx = () => !!(S && S.lowFx);
function applyLowFx() { document.documentElement.classList.toggle('lowfx', lowFx()); }
function later(t, fn) { timers.push({ t, fn }); }
function part(o) { parts.push(Object.assign({ x: 0, y: 0, vx: 0, vy: 0, g: 0, t: 0, life: .6, size: 2, color: '#fff', drag: 2 }, o)); }
function burst(x, y, n, colors, spd = 60, g = 140, size = 2, life = .5) {
  if (lowFx()) n = Math.ceil(n / 4);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, v = spd * rnd(.35, 1.1);
    part({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - spd * .35, g, size: size * rnd(.7, 1.3), color: pick(colors), life: life * rnd(.6, 1.3) });
  }
}
function rise(x, y, n, colors, w = 14) {
  if (lowFx()) n = Math.ceil(n / 4);
  for (let i = 0; i < n; i++) part({ x: x + rnd(-w, w), y: y + rnd(-4, 6), vx: rnd(-6, 6), vy: rnd(-40, -18), g: -10, size: rnd(1, 2.2), color: pick(colors), life: rnd(.5, 1), drag: .5 });
}
function fxs(key, x, y, o = {}) { const im = A['fx/' + key]; if (!im) return; const sp = Object.assign({ im, x, y, t: 0, dur: .4, s0: .6, s1: 1.6, a0: 1, rot: 0, add: true }, o); if (lowFx()) { sp.add = false; sp.a0 = Math.min(sp.a0, .55); sp.s1 = Math.min(sp.s1, 1.2); } sprites.push(sp); }
function proj(key, x0, y0, x1, y1, dur, o = {}) { projs.push(Object.assign({ im: A['fx/' + key], x0, y0, x1, y1, t: 0, dur, arc: 0, scale: 1, rot: 0, trail: null }, o)); }
function slash(x, y, o = {}) { slashes.push(Object.assign({ x, y, t: 0, dur: .16, r: 12, a0: -2.2, a1: .6, color: '#ffffff', w: 2 }, o)); }
function bolt(x0, y0, x1, y1, o = {}) { if (lowFx()) return; bolts.push(Object.assign({ x0, y0, x1, y1, t: 0, dur: .28, color: '#bfe4ff' }, o)); }
function doShake(m, d = .25) { if (lowFx()) return; if (m >= shake.m * (shake.t / shake.d || 0)) shake = { t: d, d, m }; }
function flash(color, o = .6, d = .3) {
  if (lowFx()) return;
  const f = $('#flash');
  f.style.background = color; f.style.setProperty('--fo', o); f.style.setProperty('--fd', d + 's');
  f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
}
function popText(txt, x, y, cls = '') {
  const box = $('#dmgs');
  if (box.childElementCount > 26) box.firstElementChild.remove();
  const d = document.createElement('span');
  d.textContent = txt; if (cls) d.className = cls;
  d.style.left = (x * 2) + 'px'; d.style.top = (y * 2) + 'px';
  box.appendChild(d);
  setTimeout(() => d.remove(), 1000);
}
function banner(html, cls, ms = 1600) {
  const b = document.createElement('div');
  b.className = 'bnr ' + cls; b.innerHTML = html;
  $('#banners').appendChild(b);
  setTimeout(() => b.remove(), ms);
}
function cutin(sd) {
  if (lowFx()) return;
  const b = document.createElement('div');
  b.className = 'cutin';
  b.style.color = CLASSES[sd.cls].color;
  b.innerHTML = `<img class="px" src="${skillSrc(sd.id)}">${sd.name}`;
  $('#banners').appendChild(b);
  setTimeout(() => b.remove(), 1000);
}
function flyTo(src, cxp, cyp, target, n = 1) {
  const fl = $('#flyer'), sr = $('#screen').getBoundingClientRect(), tr = target.getBoundingClientRect();
  for (let i = 0; i < n; i++) {
    const im = document.createElement('img');
    im.src = src; im.className = 'px';
    const x0 = sr.left + 2 + cxp * 2 + rnd(-10, 10), y0 = sr.top + 2 + cyp * 2 + rnd(-8, 8);
    im.style.left = x0 + 'px'; im.style.top = y0 + 'px';
    fl.appendChild(im);
    setTimeout(() => {
      im.style.transform = `translate(${tr.left + tr.width / 2 - x0 - 9}px, ${tr.top + tr.height / 2 - y0 - 9}px) scale(.7)`;
      im.style.opacity = '.3';
    }, 30 + i * 60);
    setTimeout(() => { im.remove(); target.classList.remove('bump'); void target.offsetWidth; target.classList.add('bump'); }, 780 + i * 60);
  }
}

// 몬스터 좌표
function monBox() {
  const boss = !!(S && S.boss);
  const sc = boss ? 1.55 : 1;
  const w = 32 * sc;
  return { x: MON_X + (32 - w) / 2 + mon.knock, y: GROUND - w, w, sc, cx: MON_X + 16 + mon.knock, cy: GROUND - w / 2 };
}
const heroC = () => ({ x: HERO_X + 16 + hero.lunge, y: GROUND - 16 });

// ================= 그리기 =================
// 스프라이트 윤곽선: 어두운 1px 테두리로 배경 위에서도 캐릭터가 또렷하게
const SIL = new WeakMap();
function silhouette(im, color = 'rgba(6,4,12,.9)') {
  let c = SIL.get(im); if (c) return c;
  c = document.createElement('canvas'); c.width = im.width + 2; c.height = im.height + 2;
  const o = c.getContext('2d');
  for (const [dx, dy] of [[0, 1], [2, 1], [1, 0], [1, 2]]) o.drawImage(im, dx, dy);
  o.globalCompositeOperation = 'source-in'; o.fillStyle = color; o.fillRect(0, 0, c.width, c.height);
  SIL.set(im, c); return c;
}
let heroComp = null, heroSig = '';
function heroLayers(cls, ov) {
  const c = cls || 'war', eq = S.equip;
  const L = [], look = slot => ov && ov.slot === slot ? ov.v : lookOf(S, slot);
  const soulLook = ov && ov.soul ? ov.soul : (S.soul && S.soul.made && S.soul.show ? S.soul.look : null);
  const lay = slot => { const v = look(slot); if (v === 'hide') return null; if (v === 'auto' && slot === 'weapon' && soulLook) return 'soul/' + soulLook; if (v === 'auto') return eq[slot] ? itemDoll(slot, eq[slot].t, c) : (slot === 'weapon' ? itemDoll('weapon', 0, c) : null); if (v[0] === 't') return itemDoll(slot, +v.slice(1), c); return 'cos/' + v; };
  // 외형(base)은 직업 기본 몸을 바꾸고, 머리(hair)·보조손(offhand)은 "장비대로"면 그리지 않는다
  const extra = slot => { const v = look(slot); return v && v !== 'auto' && v !== 'hide' && !/^t\d$/.test(v) ? 'cos/' + v : null; };
  for (const sl of ['cloak', 'base', 'boots', 'body', 'gloves', 'hair', 'head', 'weapon', 'offhand']) { if (sl === 'base') { L.push(extra('base') || 'cls/' + c); continue; } const k = (sl === 'hair' || sl === 'offhand') ? extra(sl) : lay(sl); if (k) L.push(k); }
  return L;
}
function heroSprite(cls) {
  const L = heroLayers(cls);
  const sig = L.join('|') + L.map(k => A[k] ? 1 : 0).join('');
  if (sig !== heroSig || !heroComp) {
    heroSig = sig;
    heroComp = document.createElement('canvas'); heroComp.width = 32; heroComp.height = 32;
    const o = heroComp.getContext('2d');
    for (const k of L) { const im = A[k]; if (im) o.drawImage(im, 0, 0); }
  }
  return heroComp;
}
function drawHero(ctx, x, y, cls, alpha = 1, outline = false) {
  const im = heroSprite(cls);
  ctx.globalAlpha = alpha;
  if (outline) ctx.drawImage(silhouette(im), Math.round(x) - 1, Math.round(y) - 1);
  ctx.drawImage(im, Math.round(x), Math.round(y));
  ctx.globalAlpha = 1;
}

// ---- 던전 배경 (구역별 벽 · 횃불 · 석상 · 부유 입자 · 조명) ----
const FIRE = {
  warm:  { c: ['#fff1b8', '#ffc25a', '#ff7a2a'], g: '255,150,60' },
  ghost: { c: ['#e6fff8', '#7ef0d0', '#2fb99a'], g: '90,240,200' },
  hell:  { c: ['#fff0a0', '#ff6a2a', '#d61e1e'], g: '255,80,40' },
  void:  { c: ['#f3e2ff', '#b77bff', '#6a2cd6'], g: '170,100,255' },
  gold:  { c: ['#fffbe0', '#ffd75a', '#e0a020'], g: '255,210,90' },
};
const ZONE = [
  ['warm', 'col1', 'dust'], ['warm', 'col2', 'drip'], ['warm', 'col3', 'dust'], ['warm', 'col1', 'dust'],
  ['warm', 'idol', 'ember'], ['warm', 'col2', 'dust'], ['ghost', 'wraith', 'wisp'], ['warm', 'col3', 'dust'],
  ['warm', 'col1', 'drip'], ['warm', 'iron', 'dust'], ['ghost', 'wraith', 'wisp'], ['hell', 'demon', 'ember'],
  ['hell', 'demon', 'ember'], ['ghost', 'evil', 'wisp'], ['void', 'evil', 'void'], ['gold', 'dragon', 'gold'],
  ['ghost', 'iron', 'drip'], ['ghost', 'col2', 'dust'], ['warm', 'iron', 'ember'], ['void', 'col3', 'gold'], ['void', 'wraith', 'void'],
  ['hell', 'demon', 'ember'], ['ghost', 'evil', 'wisp'], ['hell', 'idol', 'ember'], ['gold', 'dragon', 'gold'], ['void', 'evil', 'void'],
].map(([fire, deco, mote]) => ({ fire, deco, mote }));
let bgX = 0;                      // 누적 스크롤 (층 돌파 때만 흐름)
const COMP_FORM = [{ x: 27, y: 0, s: .8 }, { x: 11, y: -5, s: .7, back: true }, { x: -4, y: 0, s: .8 }, { x: 40, y: -8, s: .62, back: true }, { x: -17, y: -8, s: .62, back: true }];
const motes = [];
const hash = n => { n = (n ^ 61) ^ (n >>> 16); n = n + (n << 3); n = n ^ (n >>> 4); n = Math.imul(n, 0x27d4eb2d); return ((n ^ (n >>> 15)) >>> 0) / 4294967296; };
function drawBackdrop(dt, now, zi) {
  const z = ZONE[zi] || ZONE[0], F = FIRE[z.fire];
  const boss = !!S.boss;
  // 천장 쪽 어둠
  cx.fillStyle = boss ? '#1a070d' : '#0c0a14'; cx.fillRect(-6, -6, W + 12, H + 12);
  // 벽 (시차 0.6)
  const wx = bgX * .6, w0 = A['wall/w' + zi + '_0'], w1 = A['wall/w' + zi + '_1'] || w0;
  if (w0) {
    const c0 = Math.floor(wx / 32) - 1;
    for (let c = c0; c < c0 + 8; c++) {
      const x = Math.round(c * 32 - wx);
      for (let r = 0; r < 2; r++) cx.drawImage(hash(c * 7 + r * 131 + zi * 977) < .72 ? w0 : w1, x, GROUND - 32 - r * 32);
    }
  }
  // 벽 음영: 위로 갈수록 어둡게 + 전체 톤 다운
  const wg = cx.createLinearGradient(0, 0, 0, GROUND);
  wg.addColorStop(0, boss ? 'rgba(30,4,10,.92)' : 'rgba(6,5,12,.9)');
  wg.addColorStop(.55, boss ? 'rgba(40,6,14,.68)' : 'rgba(8,7,16,.66)');
  wg.addColorStop(1, 'rgba(8,7,16,.5)');
  cx.fillStyle = wg; cx.fillRect(-6, -6, W + 12, GROUND + 6);
  // 석상 (벽과 같은 시차, 횃불 사이)
  const dim = A['deco/' + z.deco];
  const SP = 96;
  const t0 = Math.floor((wx - 60) / SP);
  for (let k = t0; k < t0 + 4; k++) {
    const x = Math.round(k * SP + 48 - wx);
    if (dim && hash(k * 31 + zi) < .55) { cx.globalAlpha = .55; cx.drawImage(dim, x - 16, GROUND - 32); cx.globalAlpha = 1; }
  }
  // 벽-바닥 경계 그림자
  cx.fillStyle = 'rgba(0,0,0,.35)'; cx.fillRect(-6, GROUND - 3, W + 12, 3);
  // 바닥
  const tile = A['floor/f' + (FLOOR_TILES[zi] ?? 0)];
  const fx0 = ((bgX % 32) + 32) % 32;
  if (tile) for (let x = -32; x < W + 32; x += 32) { cx.drawImage(tile, Math.round(x - fx0), GROUND); cx.drawImage(tile, Math.round(x - fx0), GROUND + 32); }
  const fg = cx.createLinearGradient(0, GROUND, 0, H);
  fg.addColorStop(0, 'rgba(10,8,18,.25)'); fg.addColorStop(1, 'rgba(6,5,12,.8)');
  cx.fillStyle = fg; cx.fillRect(-6, GROUND, W + 12, H - GROUND + 6);
  cx.fillStyle = 'rgba(255,255,255,.07)'; cx.fillRect(-6, GROUND, W + 12, 1);
  // 횃불 (벽 시차)
  for (let k = t0; k < t0 + 4; k++) {
    const x = Math.round(k * SP - wx), y = 20;
    if (x < -40 || x > W + 40) continue;
    const fl = lowFx() ? .9 : .85 + .15 * Math.sin(now * 13 + k * 3.1) + .08 * Math.sin(now * 29 + k);
    // 벽·바닥에 번지는 빛
    cx.save(); cx.globalCompositeOperation = 'lighter';
    let rg = cx.createRadialGradient(x, y, 1, x, y, 34 * fl);
    rg.addColorStop(0, `rgba(${F.g},.34)`); rg.addColorStop(.4, `rgba(${F.g},.12)`); rg.addColorStop(1, `rgba(${F.g},0)`);
    cx.fillStyle = rg; cx.fillRect(x - 40, y - 40, 80, 80);
    rg = cx.createRadialGradient(x, GROUND + 4, 1, x, GROUND + 4, 26 * fl);
    rg.addColorStop(0, `rgba(${F.g},.13)`); rg.addColorStop(1, `rgba(${F.g},0)`);
    cx.fillStyle = rg; cx.fillRect(x - 30, GROUND - 8, 60, 30);
    cx.restore();
    // 받침대
    cx.fillStyle = '#1b1622'; cx.fillRect(x - 2, y + 2, 4, 2); cx.fillRect(x - 1, y + 4, 2, 5);
    cx.fillStyle = '#4a3f58'; cx.fillRect(x - 2, y + 2, 4, 1);
    // 불꽃 (도트)
    const h = Math.round(4 + 2 * fl + Math.sin(now * 17 + k) * .8);
    cx.fillStyle = F.c[2]; cx.fillRect(x - 2, y + 1 - h + 2, 4, h - 1);
    cx.fillStyle = F.c[1]; cx.fillRect(x - 1, y + 2 - h, 2, h);
    cx.fillStyle = F.c[0]; cx.fillRect(x - (Math.sin(now * 23 + k) > 0 ? 1 : 0), y + 1 - Math.round(h * .45), 1, 2);
    if (Math.random() < dt * 5) part({ x: x + rnd(-1, 1), y: y - h + 1, vx: rnd(-4, 4), vy: rnd(-22, -10), g: -6, size: 1, color: pick(F.c), life: rnd(.3, .7), drag: .6 });
  }
  // 부유 입자 (구역 분위기)
  const want = z.mote === 'drip' ? 10 : 16;
  while (motes.length < want) motes.push({ x: rnd(0, W), y: rnd(0, GROUND + 20), s: rnd(.3, 1), p: rnd(0, 6.28) });
  cx.save(); cx.globalCompositeOperation = 'lighter';
  for (const m of motes) {
    let col, a;
    if (z.mote === 'ember') { m.y -= dt * (8 + 10 * m.s); m.x += Math.sin(now * 2 + m.p) * dt * 6; col = m.s > .6 ? '#ffb347' : '#ff6a2a'; a = .55 * m.s; }
    else if (z.mote === 'wisp') { m.y -= dt * 3 * m.s; m.x += Math.sin(now + m.p) * dt * 8; col = '#9ff5dd'; a = .25 + .2 * Math.sin(now * 2 + m.p); }
    else if (z.mote === 'void') { m.y += Math.sin(now * 1.5 + m.p) * dt * 4; m.x -= dt * 4 * m.s; col = m.s > .6 ? '#e2c4ff' : '#9a5bff'; a = .3 + .3 * Math.sin(now * 3 + m.p); }
    else if (z.mote === 'gold') { m.y += dt * 4 * m.s; m.x += Math.sin(now + m.p) * dt * 3; col = '#ffe08a'; a = .25 + .25 * Math.sin(now * 4 + m.p); }
    else if (z.mote === 'drip') { m.y += dt * (30 + 40 * m.s); col = '#8fb8d8'; a = .22; }
    else { m.y += Math.sin(now * .7 + m.p) * dt * 2; m.x += dt * 2.5 * m.s; col = '#b8a88a'; a = .12 + .1 * m.s; }
    if (m.y < -4 || m.y > GROUND + 24 || m.x < -4 || m.x > W + 4) { m.x = z.mote === 'ember' || z.mote === 'wisp' ? rnd(0, W) : m.x < -4 ? W + 2 : m.x > W + 4 ? -2 : rnd(0, W); m.y = z.mote === 'ember' || z.mote === 'wisp' ? GROUND + rnd(0, 18) : z.mote === 'drip' ? rnd(-10, 0) : rnd(0, GROUND); }
    cx.globalAlpha = Math.max(0, Math.min(1, a)); cx.fillStyle = col;
    cx.fillRect(Math.round(m.x), Math.round(m.y), 1, z.mote === 'drip' ? 2 : 1);
  }
  cx.restore(); cx.globalAlpha = 1;
  // 바닥 안개
  cx.save(); cx.globalAlpha = boss ? .1 : .07; cx.fillStyle = boss ? '#ff4d6a' : '#b9b3d9';
  for (let i = 0; i < 3; i++) { const fx2 = ((now * (6 + i * 3) + i * 70) % (W + 80)) - 40; cx.beginPath(); cx.ellipse(fx2, GROUND + 4 + i * 3, 38, 3, 0, 0, 7); cx.fill(); }
  cx.restore();
}
const inTower = () => !!(S && S.boss && S.boss.tower);
const inRift = () => !!(S && S.boss && S.boss.tower === 'rift');
const towerId = () => (S.boss && TOWERS.some(x => x.id === S.boss.tower)) ? S.boss.tower : 'inf';
const sceneZone = () => inRift() ? monsterIndex(riftFloor(S.boss.L)) : inTower() ? towerMon(S.boss.tf) : monsterIndex(S.floor);
// 캐릭터를 그린 뒤: 용사 주변 빛 · 보스 기운 · 가장자리 어둠
function drawLighting(now) {
  const hc = heroC();
  cx.save(); cx.globalCompositeOperation = 'lighter';
  let g = cx.createRadialGradient(hc.x, hc.y, 2, hc.x, hc.y, 30);
  g.addColorStop(0, 'rgba(255,230,190,.10)'); g.addColorStop(1, 'rgba(255,230,190,0)');
  cx.fillStyle = g; cx.fillRect(hc.x - 32, hc.y - 32, 64, 64);
  if (S.boss) {
    const b = monBox(), p = lowFx() ? .3 : .5 + .5 * Math.sin(now * 3);
    g = cx.createRadialGradient(b.cx, b.cy, 2, b.cx, b.cy, 34 + p * 6);
    g.addColorStop(0, `rgba(255,40,70,${.16 + p * .08})`); g.addColorStop(1, 'rgba(255,40,70,0)');
    cx.fillStyle = g; cx.fillRect(b.cx - 44, b.cy - 44, 88, 88);
  }
  cx.restore();
  const v = cx.createRadialGradient(W / 2, H * .55, H * .35, W / 2, H * .55, W * .62);
  v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, S.boss ? 'rgba(30,0,8,.62)' : 'rgba(0,0,0,.55)');
  cx.fillStyle = v; cx.fillRect(-6, -6, W + 12, H + 12);
}
function whiteFlash(ctx, im, x, y, w, h, a, flip) {
  // 스프라이트 실루엣을 흰색으로 덧칠
  const off = whiteFlash.c || (whiteFlash.c = document.createElement('canvas'));
  off.width = im.width; off.height = im.height;
  const o = off.getContext('2d');
  o.clearRect(0, 0, off.width, off.height);
  o.drawImage(im, 0, 0);
  o.globalCompositeOperation = 'source-atop';
  o.fillStyle = '#fff'; o.fillRect(0, 0, off.width, off.height);
  o.globalCompositeOperation = 'source-over';
  ctx.save(); ctx.globalAlpha = a;
  if (flip) { ctx.translate(x + w, y); ctx.scale(-1, 1); ctx.drawImage(off, 0, 0, w, h); }
  else ctx.drawImage(off, x, y, w, h);
  ctx.restore();
}

function drawScene(dt) {
  const now = performance.now() / 1000;
  cx.imageSmoothingEnabled = false;
  cx.save();
  if (shake.t > 0) { const m = shake.m * (shake.t / shake.d); cx.translate(Math.round(rnd(-m, m)), Math.round(rnd(-m, m))); shake.t -= dt; }

  // 배경
  drawBackdrop(dt, now, sceneZone());

  // 버프 오라
  for (const b of S.buffs || []) {
    const sd = SKILL_BY_ID[b.id];
    if (!sd || !sd.color) continue;
    const hc = heroC();
    const p = lowFx() ? .2 : .5 + .5 * Math.sin(now * 8);
    cx.save(); cx.globalCompositeOperation = 'lighter';
    cx.fillStyle = sd.color; cx.globalAlpha = .18 + p * .14;
    cx.beginPath(); cx.ellipse(hc.x, GROUND - 1, 15 + p * 2, 4.5, 0, 0, 7); cx.fill();
    cx.globalAlpha = .07 + p * .05;
    cx.fillRect(hc.x - 12, GROUND - 34, 24, 34);
    cx.restore();
    if (Math.random() < dt * 14) rise(hc.x, GROUND - 4, 1, [sd.color, '#ffffff'], 11);
    if (sd.fx === 'shield') {
      cx.save(); cx.strokeStyle = sd.color; cx.globalAlpha = .45 + p * .25; cx.lineWidth = 1;
      cx.beginPath(); cx.ellipse(hc.x, GROUND - 16, 17, 20, 0, 0, 7); cx.stroke(); cx.restore();
    }
  }

  // 동료
  // 동료 대형: 뒷줄(가운데)은 조금 높고 작고 어둡게 → 원근감
  const FORM = COMP_FORM;
  const order = (S.team || []).map((id, k) => [id, k]).sort((a, b) => (FORM[b[1]] || FORM[0]).y - (FORM[a[1]] || FORM[0]).y);
  order.forEach(([id, k]) => {
    const im = A['comp/' + id]; if (!im) return;
    const cs = compState[id] || (compState[id] = { t: rnd(.4, 1.4), lunge: 0 });
    const fm = FORM[k] || FORM[0];
    const sc = fm.s;
    const bx = fm.x + cs.lunge, by = GROUND - 32 * sc + fm.y + Math.sin(now * 3 + k) * .8;
    cx.fillStyle = 'rgba(0,0,0,.35)';
    cx.beginPath(); cx.ellipse(bx + 16 * sc, GROUND - 1 + fm.y, 9 * sc, 2.5, 0, 0, 7); cx.fill();
    cx.drawImage(silhouette(im), 0, 0, im.width + 2, im.height + 2, bx - sc, by - (im.height - 32) * sc - sc, (im.width + 2) * sc, (im.height + 2) * sc);
    cx.drawImage(im, 0, 0, im.width, im.height, bx, by - (im.height - 32) * sc, im.width * sc, im.height * sc);
    if (fm.back) { cx.globalAlpha = .28; cx.drawImage(silhouette(im, '#0a0814'), 1, 1, im.width, im.height, bx, by - (im.height - 32) * sc, im.width * sc, im.height * sc); cx.globalAlpha = 1; }
  });

  // 잔상 (그림자 질주)
  for (const gh of hero.ghosts) { drawHero(cx, gh.x, GROUND - 32, S.cls, gh.a * .35); gh.a -= dt * 2.5; }
  hero.ghosts = hero.ghosts.filter(g2 => g2.a > 0);

  // 용사
  const bob = Math.sin(now * (trans ? 16 : 4)) * (trans ? 1.5 : 1);
  const hx = HERO_X + hero.lunge + hero.dash, hy = GROUND - 32 + bob;
  cx.fillStyle = 'rgba(0,0,0,.45)';
  cx.beginPath(); cx.ellipse(hx + 16, GROUND - 1, 10, 3, 0, 0, 7); cx.fill();
  drawHero(cx, hx, hy, S.cls, 1, true);
  { const pid = S.pets && S.pets.act, pim = pid && A['pet/' + pid]; if (pim) { const sc = .6, hop = Math.abs(Math.sin(now * (trans ? 12 : 3.2))) * (trans ? 3 : 1.6), px = hx - 13, py = GROUND - 32 * sc - hop;
    cx.fillStyle = 'rgba(0,0,0,.35)'; cx.beginPath(); cx.ellipse(px + 16 * sc, GROUND - 1, 6, 2, 0, 0, 7); cx.fill();
    cx.drawImage(silhouette(pim), 0, 0, pim.width + 2, pim.height + 2, px - sc, py - sc, (pim.width + 2) * sc, (pim.height + 2) * sc); cx.drawImage(pim, px, py, 32 * sc, 32 * sc); } }

  // 몬스터
  const mi = sceneZone(), mim = A['mon/m' + mi];
  if (mim && !(trans && trans.t < trans.d * .55)) {
    const b = monBox();
    let mx = b.x, my = b.y, a = 1, rot = 0;
    if (mon.spawn > 0) { mx += mon.spawn * 60; mon.spawn = Math.max(0, mon.spawn - dt * 8); }
    if (mon.drop > 0) { my -= mon.drop * 70; mon.drop = Math.max(0, mon.drop - dt * 2.2); if (mon.drop === 0) { doShake(4, .3); burst(b.cx, GROUND, 14, ['#6b5f9c', '#9a93b8', '#3a3358'], 50, 120, 2); } }
    if (mon.die > 0) { a = mon.die / .18; rot = (1 - a) * .9; }
    cx.fillStyle = 'rgba(0,0,0,.45)';
    cx.beginPath(); cx.ellipse(b.cx, GROUND - 1, 10 * b.sc, 3 * b.sc, 0, 0, 7); cx.fill();
    cx.save();
    cx.globalAlpha = a;
    cx.translate(mx + b.w / 2, my + b.w);
    cx.rotate(rot);
    cx.scale(-1, 1);
    const os = b.w / 32;
    cx.drawImage(silhouette(mim), -b.w / 2 - os, -b.w - os, b.w + 2 * os, b.w + 2 * os);
    cx.drawImage(mim, -b.w / 2, -b.w, b.w, b.w);
    cx.restore();
    if (mon.flash > 0 && mon.spawn < .3 && mon.die <= 0) whiteFlash(cx, mim, mx, my, b.w, b.w, Math.min(.5, mon.flash * 5), true);
    if (S.boss) {
      cx.fillStyle = '#ff5a5a'; cx.font = 'bold 7px monospace'; cx.textAlign = 'center';
      cx.fillText(inRift() ? S.boss.tf + '/' + RIFT_WAVES : inTower() ? S.boss.tf + 'F' : 'BOSS', b.cx, my - 2);
    }
  }
  drawLighting(now);
  mon.flash = Math.max(0, mon.flash - dt);
  mon.knock *= Math.pow(.001, dt);
  if (mon.die > 0) { mon.die -= dt; if (mon.die <= 0) mon.spawn = 1; }

  // 레벨업 / 빛 기둥
  if (pillar) {
    pillar.t += dt;
    const k = 1 - pillar.t / pillar.d;
    if (k <= 0 || lowFx()) pillar = null;
    else {
      cx.save(); cx.globalCompositeOperation = 'lighter';
      const pg = cx.createLinearGradient(0, 0, 0, GROUND);
      pg.addColorStop(0, 'rgba(0,0,0,0)'); pg.addColorStop(1, pillar.color);
      cx.globalAlpha = k * .8; cx.fillStyle = pg;
      const w = pillar.w * (1 + (1 - k) * .4);
      cx.fillRect(pillar.x - w / 2, 0, w, GROUND);
      cx.restore();
    }
  }

  // 베기 궤적
  for (const s of slashes) {
    s.t += dt;
    const k = s.t / s.dur;
    const a1 = s.a0 + (s.a1 - s.a0) * Math.min(1, k * 1.6);
    cx.save(); cx.globalCompositeOperation = 'lighter';
    cx.strokeStyle = s.color; cx.globalAlpha = Math.max(0, 1 - k); cx.lineWidth = s.w * (1.2 - k * .6);
    cx.beginPath(); cx.arc(s.x, s.y, s.r, s.a0, a1); cx.stroke();
    cx.lineWidth = 1; cx.strokeStyle = '#fff';
    cx.beginPath(); cx.arc(s.x, s.y, s.r - 1.5, s.a0 + .2, a1); cx.stroke();
    cx.restore();
  }
  for (let i = slashes.length - 1; i >= 0; i--) if (slashes[i].t >= slashes[i].dur) slashes.splice(i, 1);

  // 번개
  for (const b of bolts) {
    b.t += dt;
    const k = 1 - b.t / b.dur;
    cx.save(); cx.globalCompositeOperation = 'lighter';
    for (const [lw, col, al] of [[3, b.color, .45], [1, '#ffffff', 1]]) {
      cx.strokeStyle = col; cx.lineWidth = lw; cx.globalAlpha = k * al;
      cx.beginPath(); cx.moveTo(b.x0, b.y0);
      const n = 7;
      for (let i = 1; i < n; i++) { const f = i / n; cx.lineTo(b.x0 + (b.x1 - b.x0) * f + rnd(-4, 4), b.y0 + (b.y1 - b.y0) * f + rnd(-4, 4)); }
      cx.lineTo(b.x1, b.y1); cx.stroke();
    }
    cx.restore();
  }
  for (let i = bolts.length - 1; i >= 0; i--) if (bolts[i].t >= bolts[i].dur) bolts.splice(i, 1);

  // 투사체
  for (const p of projs) {
    p.t += dt;
    const k = Math.min(1, p.t / p.dur);
    const x = p.x0 + (p.x1 - p.x0) * k, y = p.y0 + (p.y1 - p.y0) * k - Math.sin(k * Math.PI) * p.arc;
    if (p.trail && Math.random() < .9) part({ x, y, vx: rnd(-8, 8), vy: rnd(-8, 8), size: rnd(1, 2.4), color: pick(p.trail), life: .3 });
    if (p.im) {
      cx.save(); cx.translate(x, y); cx.rotate(p.rot); cx.scale(p.scale, p.scale);
      if (p.add) cx.globalCompositeOperation = 'lighter';
      cx.drawImage(p.im, -16, -16); cx.restore();
    } else { cx.fillStyle = p.color || '#fff'; cx.fillRect(x - 1.5, y - 1.5, 3, 3); }
    if (k >= 1 && !p.done) { p.done = true; p.onHit && p.onHit(); }
  }
  for (let i = projs.length - 1; i >= 0; i--) if (projs[i].done) projs.splice(i, 1);

  // 이펙트 스프라이트
  for (const s of sprites) {
    s.t += dt;
    const k = s.t / s.dur;
    const sc = s.s0 + (s.s1 - s.s0) * k;
    cx.save(); if (s.add) cx.globalCompositeOperation = 'lighter';
    cx.globalAlpha = Math.max(0, s.a0 * (1 - k * k));
    cx.translate(s.x, s.y); cx.rotate(s.rot + (s.spin || 0) * s.t); cx.scale(sc, sc);
    cx.drawImage(s.im, -16, -16); cx.restore();
  }
  for (let i = sprites.length - 1; i >= 0; i--) if (sprites[i].t >= sprites[i].dur) sprites.splice(i, 1);

  // 파티클
  for (const p of parts) {
    p.t += dt;
    p.vx *= Math.max(0, 1 - p.drag * dt); p.vy = p.vy * Math.max(0, 1 - p.drag * dt) + p.g * dt;
    p.x += p.vx * dt; p.y += p.vy * dt;
    cx.globalAlpha = Math.max(0, 1 - p.t / p.life);
    cx.fillStyle = p.color;
    cx.fillRect(Math.round(p.x), Math.round(p.y), Math.max(1, Math.round(p.size)), Math.max(1, Math.round(p.size)));
  }
  cx.globalAlpha = 1;
  for (let i = parts.length - 1; i >= 0; i--) if (parts[i].t >= parts[i].life) parts.splice(i, 1);
  if (parts.length > 400) parts.splice(0, parts.length - 400);

  // 층 돌파 전환 (검은 막이 지나감)
  if (trans) {
    trans.t += dt;
    const k = trans.t / trans.d;
    const dsc = dt * 140 * (1 - Math.abs(k - .5) * 2);
    trans.scroll += dsc; bgX += dsc;
    const cover = k < .5 ? k * 2 : (1 - k) * 2;
    cx.fillStyle = 'rgba(8,6,16,' + (cover * .85) + ')';
    cx.fillRect(-6, -6, W + 12, H + 12);
    for (let i = 0; i < 3; i++) { const y = rnd(4, GROUND); cx.fillStyle = 'rgba(255,255,255,.25)'; cx.fillRect(rnd(0, W), y, rnd(8, 22), 1); }
    if (k >= 1) trans = null;
  }
  cx.restore();

  // 용사 모션 복귀
  hero.lunge += (0 - hero.lunge) * Math.min(1, dt * 16);
  hero.dash += (0 - hero.dash) * Math.min(1, dt * 6);
}

// ================= 전투 연출 =================
const CLS_HIT = {
  war: { col: '#ffb070', sp: ['#ffffff', '#ffcf8a', '#ff8a5c'] },
  rog: { col: '#9dffb0', sp: ['#ffffff', '#b8ffcf', '#7ee08a'] },
  mag: { col: '#c9a8ff', sp: ['#ffffff', '#e2c9ff', '#b58cff'] },
  clr: { col: '#ffe38a', sp: ['#ffffff', '#fff2b8', '#ffd98a'] },
};
function hitMon(dmgTxt, cls, big) {
  const b = monBox();
  mon.flash = big ? .14 : .08;
  mon.knock = big ? 6 : 3;
  const c = CLS_HIT[S.cls || 'war'];
  burst(b.cx - 4, b.cy, big ? 14 : 6, c.sp, big ? 80 : 55, 160, big ? 2.2 : 1.6, .45);
  if (dmgTxt) popText(dmgTxt, b.cx + rnd(-8, 10), b.cy - rnd(8, 18), cls);
}

let swingT = .5;
function heroSwing() {
  const cls = S.cls || 'war';
  // 치명타 단계: 100%마다 1단계 확정 + 나머지 확률로 한 단계 더 (1 노랑 · 2 주황 · 3+ 빨강)
  const cc = st.crit / 100, tier = Math.floor(cc) + (Math.random() < cc % 1 ? 1 : 0), crit = tier > 0;
  const dmg = st.atk * (1 + tier * (st.critMult - 1)) * rnd(.9, 1.1);
  const b = monBox();
  hero.lunge = cls === 'mag' ? 3 : 9;
  const impact = () => {
    const c = CLS_HIT[cls];
    if (cls === 'war') slash(b.cx - 2, b.cy, { r: crit ? 16 : 12, color: c.col, w: crit ? 3.5 : 2.5, a0: -2.4, a1: .9 });
    else if (cls === 'rog') { slash(b.cx - 3, b.cy - 3, { r: 10, color: c.col, w: 1.6, a0: -2.8, a1: -.2, dur: .12 }); later(.06, () => slash(b.cx + 1, b.cy + 3, { r: 10, color: c.col, w: 1.6, a0: .4, a1: 2.9, dur: .12 })); }
    else if (cls === 'clr') { fxs('b_yellow', b.cx - 2, b.cy, { s0: .3, s1: crit ? 1 : .7, dur: .22 }); slash(b.cx, b.cy, { r: 9, color: c.col, w: 2 }); }
    hitMon(fmt(dmg), tier >= 3 ? 'crit crit3' : tier === 2 ? 'crit crit2' : crit ? 'crit' : '', crit);
    if (crit) { doShake(2.5, .18); fxs('b_smoke', b.cx, b.cy, { s0: .4, s1: 1.1, dur: .25 }); }
    if (crit && st.mech.thunder && Math.random() < .2) {
      for (let i = 0; i < 3; i++) later(i * .05, () => bolt(b.cx + rnd(-6, 6), -4, b.cx + rnd(-2, 2), b.cy, { dur: .3, color: '#ffe38a' }));
      later(.1, () => { flash('#fff6c0', .35, .2); doShake(4, .25); popText(t('ui.l.thunder'), b.cx, b.cy - 26, 'proc'); hitMon(fmt(st.atk * 4), 'skill', true); });
    }
    if (st.mech.double && Math.random() < .15) { hero.ghosts.push({ x: HERO_X + 12, a: 1 }); later(.12, () => { slash(b.cx, b.cy, { r: 13, color: '#ffffff', w: 2.5, a0: .8, a1: -2.3 }); hitMon(fmt(dmg), '', false); }); }
    rollPassives(dmg);
  };
  if (cls === 'mag') {
    const hc = heroC();
    proj('dart', hc.x + 10, hc.y - 6, b.cx - 4, b.cy, .18, { add: true, scale: crit ? 1.2 : .8, trail: ['#e2c9ff', '#b58cff'], onHit: impact });
  } else later(.07, impact);
}

function rollPassives(baseDmg) {
  const cls = S.cls || 'war';
  const b = monBox(), hc = heroC();
  for (const sd of classSkills(cls, 'passive')) {
    const lv = S.skills[sd.id] || 0;
    if (!lv) continue;
    if (Math.random() * 100 >= passiveChance(sd, lv)) continue;
    const m = passiveMult(sd, lv);
    const el = document.querySelector(`.pas[data-id="${sd.id}"]`);
    if (el) { el.classList.remove('on'); void el.offsetWidth; el.classList.add('on'); }
    const col = CLASSES[cls].color;
    popText(sd.name, hc.x, hc.y - 20, 'proc');
    const extra = () => hitMon(fmt(baseDmg * m), 'crit', true);
    switch (sd.fx) {
      case 'slash2': later(.1, () => { slash(b.cx, b.cy, { r: 14, color: '#ff8a5c', w: 3, a0: .6, a1: -2.6 }); extra(); }); break;
      case 'crush': later(.12, () => { fxs('b_smoke', b.cx, GROUND - 6, { s0: .6, s1: 2, dur: .35 }); doShake(4, .3); burst(b.cx, GROUND - 2, 16, ['#9a8466', '#5c4d3a', '#cfc0a0'], 70, 220, 2.4); extra(); }); break;
      case 'blood': fxs('blood', b.cx, b.cy, { s0: .4, s1: 1, dur: .35 }); proj(null, b.cx, b.cy, hc.x, hc.y, .35, { color: '#ff4a5a', trail: ['#ff4a5a', '#a01020'], onHit: () => { rise(hc.x, hc.y + 8, 8, ['#ff6a7a', '#ffb0b8']); if (S.boss) popText('+' + fmt(st.hp * m / 100), hc.x, hc.y - 10, 'heal'); } }); break;
      case 'dagger2': proj('dagger', hc.x + 6, hc.y - 2, b.cx, b.cy, .12, { onHit: extra }); break;
      case 'poison': proj('poison', hc.x + 6, hc.y - 2, b.cx, b.cy, .16, { onHit: () => { fxs('pcloud', b.cx, b.cy, { s0: .5, s1: 1.4, dur: .6, add: false, a0: .8 }); extra(); } }); break;
      case 'double': hero.ghosts.push({ x: HERO_X + 14, a: 1 }); later(.1, () => { slash(b.cx, b.cy, { r: 12, color: '#9dffb0', w: 2.5 }); extra(); }); break;
      case 'dart': proj('dart', hc.x + 10, hc.y - 10, b.cx, b.cy - 4, .2, { add: true, trail: ['#ff9dff', '#b58cff'], arc: 10, onHit: extra }); break;
      case 'surge': rise(hc.x, hc.y + 8, 14, ['#8fb8ff', '#ffffff', '#6f7cff']); fxs('b_blue', hc.x, hc.y, { s0: .4, s1: 1.3, dur: .4 }); popText(t('ui.l.cdr', { m: m.toFixed(1) }), hc.x, hc.y - 8, 'proc'); break;
      case 'mystic': later(.08, () => { fxs('mystic', b.cx, b.cy, { s0: .3, s1: 2.2, dur: .45, spin: 6 }); flash('#b58cff', .35, .25); doShake(3, .25); extra(); }); break;
      case 'light': proj('beam', hc.x + 8, hc.y - 4, b.cx, b.cy, .16, { add: true, onHit: () => { fxs('holy', b.cx, b.cy, { s0: .3, s1: 1, dur: .3 }); extra(); rise(hc.x, hc.y + 8, 5, ['#fff2b8', '#7ee08a']); } }); break;
      case 'shield': fxs('holy', hc.x, hc.y, { s0: .6, s1: 1.4, dur: .5 }); rise(hc.x, hc.y + 8, 8, ['#ffe38a', '#ffffff']); break;
      case 'gold': burst(b.cx, b.cy, 10, ['#ffcc57', '#fff2b8', '#c8962a'], 70, 200, 2); flyTo('assets/ui/gold.png', b.cx, b.cy, $('#goldBox'), 3); break;
      case 'counter': fxs('b_smoke', hc.x + 8, hc.y, { s0: .3, s1: 1.2, dur: .25 }); later(.08, () => { slash(b.cx, b.cy, { r: 15, color: '#ffffff', w: 3, a0: 1.2, a1: -2.2 }); extra(); }); break;
      case 'xp': rise(hc.x, hc.y + 8, 12, ['#8ee6ff', '#ffffff']); popText('EXP ×' + m.toFixed(1), hc.x, hc.y - 8, 'proc'); break;
      case 'exploit': later(.06, () => { fxs('shadow', b.cx, b.cy, { s0: .3, s1: 1.4, dur: .35, add: false, a0: .9 }); slash(b.cx, b.cy, { r: 8, color: '#ff5a7a', w: 2, a0: -1, a1: 2.2 }); flash('#ff2a4a', .25, .2); doShake(4, .25); extra(); }); break;
      case 'reson': fxs(pick(['b_fire', 'b_blue', 'b_yellow']), b.cx, b.cy, { s0: .4, s1: 1.6, dur: .35 }); burst(b.cx, b.cy, 10, ['#ff8a3c', '#8fb8ff', '#ffe38a'], 80, 60, 1.8); extra(); break;
      case 'prayer': rise(hc.x, hc.y + 8, 14, ['#7ee08a', '#fff2b8']); fxs('holy', hc.x, hc.y, { s0: .4, s1: 1, dur: .35 }); if (S.boss) popText('+' + fmt(st.hp * m / 100), hc.x, hc.y - 10, 'heal'); break;
      case 'grace': for (const cid of S.team) { const cs = compState[cid]; if (cs) cs.t = 0; } rise(20, GROUND - 14, 12, ['#ffd98a', '#ffffff'], 20); popText(t('ui.l.compx', { m: m.toFixed(1) }), 22, GROUND - 30, 'proc'); break;
    }
    return;   // 한 번 공격에 하나만 표시
  }
}

function compAttack(id, dps) {
  const c = COMP_BY_ID[id]; if (!c) return;
  const k = S.team.indexOf(id);
  const cs = compState[id];
  const b = monBox();
  const fm = COMP_FORM[k] || COMP_FORM[0], x0 = fm.x + 16 * fm.s + 6, y0 = GROUND - 14 * fm.s + fm.y;
  const dmg = dps * 1.6 * rnd(.85, 1.15);
  const col = C_RARITY[c.r].color;
  const done = () => { mon.flash = .06; mon.knock = 2; burst(b.cx, b.cy, 4, [col, '#ffffff'], 40, 120, 1.4, .35); popText(fmt(dmg), b.cx + rnd(-12, 12), b.cy + rnd(-4, 10), 'comp'); };
  cs.lunge = 5;
  if (c.cls === 'war') { later(.1, () => { slash(b.cx - 6, b.cy + 4, { r: 9, color: col, w: 1.6 }); done(); }); }
  else if (c.cls === 'rog') proj('arrow', x0, y0, b.cx - 4, b.cy, .22, { arc: 10, onHit: done });
  else if (c.cls === 'mag') proj(pick(['dart', 'flame', 'frost']), x0, y0 - 6, b.cx - 4, b.cy, .26, { add: true, scale: .7, trail: ['#e2c9ff', '#8fb8ff'], onHit: done });
  else proj('beam', x0, y0 - 4, b.cx - 4, b.cy, .2, { add: true, scale: .6, onHit: done });
}

// 액티브 스킬 시전 연출 (엔진에서 실제 시전된 것만)
function castFx(c) {
  const sd = SKILL_BY_ID[c.id]; if (!sd) return;
  cutin(sd);
  const el = document.querySelector(`.cdi[data-id="${sd.id}"]`);
  if (el) { el.classList.remove('cast'); void el.offsetWidth; el.classList.add('cast'); }
  const b = monBox(), hc = heroC();
  const num = c.dmg ? fmt(c.dmg * (S.boss ? st.bossMult : 1)) : null;
  switch (sd.fx) {
    case 'slash':
      hero.dash = 22; hero.lunge = 10;
      later(.12, () => {
        slash(b.cx, b.cy, { r: 22, color: '#ffb070', w: 5, a0: -2.8, a1: 1.2, dur: .25 });
        slash(b.cx, b.cy, { r: 16, color: '#ffffff', w: 2, a0: -2.6, a1: 1, dur: .2 });
        fxs('b_fire', b.cx, b.cy, { s0: .5, s1: 2, dur: .35 });
        burst(b.cx, b.cy, 26, ['#fff', '#ffcf8a', '#ff8a5c'], 110, 200, 2.4);
        doShake(6, .35); flash('#ffffff', .45, .2);
        hitMon(num, 'skill', true);
      });
      break;
    case 'aura':
      pillar = { x: hc.x, w: 26, t: 0, d: .7, color: sd.color };
      rise(hc.x, hc.y + 10, 24, [sd.color, '#ffffff']);
      fxs('b_smoke', hc.x, GROUND - 4, { s0: .5, s1: 2.4, dur: .5 });
      flash(sd.color, .25, .35);
      break;
    case 'shield':
      fxs('holy', hc.x, hc.y, { s0: .4, s1: 2, dur: .55 });
      rise(hc.x, hc.y + 10, 18, ['#c9d6ff', '#ffffff']);
      doShake(2, .2);
      if (S.boss) popText('+' + fmt(st.hp * .15), hc.x, hc.y - 14, 'heal');
      break;
    case 'dagger':
      for (let i = 0; i < 3; i++) later(i * .07, () => proj('dagger', hc.x + 6, hc.y - 6 + i * 5, b.cx, b.cy - 2 + i * 3, .14));
      hero.ghosts.push({ x: HERO_X + 30, a: 1 }, { x: HERO_X + 60, a: .8 });
      later(.3, () => {
        fxs('shadow', b.cx, b.cy, { s0: .4, s1: 1.8, dur: .4, add: false, a0: .9 });
        slash(b.cx, b.cy, { r: 16, color: '#9dffb0', w: 3, a0: -2.6, a1: .4 });
        slash(b.cx, b.cy, { r: 16, color: '#9dffb0', w: 3, a0: .6, a1: 3.4 });
        doShake(5, .3); hitMon(num, 'skill', true);
      });
      break;
    case 'gold':
      fxs('b_yellow', b.cx, b.cy, { s0: .5, s1: 1.6, dur: .4 });
      burst(b.cx, b.cy, 20, ['#ffcc57', '#fff2b8', '#c8962a'], 90, 220, 2.2);
      flyTo('assets/ui/gold.png', b.cx, b.cy, $('#goldBox'), 6);
      if (c.gold) popText('+' + fmt(c.gold) + 'G', b.cx, b.cy - 16, 'gold');
      break;
    case 'fireball':
      proj('flame', hc.x + 10, hc.y - 8, b.cx, b.cy, .32, {
        scale: 1.8, add: true, arc: 8, trail: ['#ffcf8a', '#ff8a3c', '#ff4a2a'], onHit: () => {
          fxs('b_fire', b.cx, b.cy, { s0: .6, s1: 2.6, dur: .45 });
          fxs('firestorm', b.cx, b.cy, { s0: .4, s1: 1.8, dur: .6, add: true, a0: .8 });
          burst(b.cx, b.cy, 30, ['#fff', '#ffcf8a', '#ff8a3c', '#ff4a2a'], 110, 120, 2.4);
          doShake(6, .35); flash('#ff8a3c', .35, .3);
          hitMon(num, 'skill', true);
        },
      });
      break;
    case 'lightning':
      flash('#bfe4ff', .5, .25);
      for (let i = 0; i < 4; i++) later(i * .06, () => bolt(b.cx + rnd(-8, 8), -4, b.cx + rnd(-3, 3), b.cy, { dur: .3 }));
      later(.02, () => bolt(hc.x + 8, hc.y - 6, b.cx, b.cy, { dur: .35 }));
      later(.12, () => {
        fxs('eblast', b.cx, b.cy, { s0: .6, s1: 2, dur: .4 });
        fxs('arc', b.cx, b.cy, { s0: .8, s1: 1.6, dur: .5, spin: 3 });
        burst(b.cx, b.cy, 22, ['#fff', '#bfe4ff', '#6fb7ff'], 100, 60, 1.8);
        doShake(5, .3); hitMon(num, 'skill', true);
      });
      break;
    case 'ice':
      for (let i = 0; i < 6; i++) later(i * .05, () => proj('icicle', b.cx + rnd(-18, 18), -10, b.cx + rnd(-6, 6), b.cy + rnd(-4, 6), .22, { rot: Math.PI / 2, onHit: () => burst(b.cx, b.cy, 4, ['#fff', '#bfe4ff'], 50, 100, 1.5) }));
      later(.34, () => {
        fxs('iceblast', b.cx, b.cy, { s0: .6, s1: 2.2, dur: .5 });
        flash('#bfe4ff', .35, .35); doShake(5, .3); hitMon(num, 'skill', true);
      });
      break;
    case 'holy':
      pillar = { x: b.cx, w: 20, t: 0, d: .6, color: 'rgba(255,240,170,1)' };
      flash('#fff6d0', .55, .3);
      later(.1, () => {
        fxs('holy', b.cx, b.cy, { s0: .5, s1: 2.4, dur: .5 });
        burst(b.cx, b.cy, 24, ['#fff', '#fff2b8', '#ffd98a'], 90, -40, 2);
        doShake(5, .3); hitMon(num, 'skill', true);
      });
      break;
    case 'whirl':
      hero.dash = 30;
      for (let i = 0; i < 5; i++) later(.08 + i * .09, () => {
        const a0 = rnd(-3.1, 3.1);
        slash(b.cx, b.cy, { r: rnd(12, 20), color: pick(['#ffb070', '#ffffff', '#ff8a5c']), w: 3.5, a0, a1: a0 + 3.4, dur: .18 });
        burst(b.cx, b.cy, 8, ['#fff', '#ffcf8a'], 90, 160, 1.8);
        hitMon(i === 4 ? num : null, 'skill', true); doShake(3, .12);
      });
      break;
    case 'unbreak':
      pillar = { x: hc.x, w: 30, t: 0, d: 1, color: 'rgba(255,170,90,1)' };
      fxs('holy', hc.x, hc.y, { s0: .5, s1: 2.4, dur: .6 });
      rise(hc.x, hc.y + 10, 26, ['#ffb070', '#ffe38a', '#ffffff']);
      flash('#ff9a4a', .35, .4); doShake(3, .3);
      if (c.time) popText('+' + c.time.toFixed(1) + 's', 90, 20, 'skill');
      break;
    case 'smoke':
      for (let i = 0; i < 6; i++) fxs('smoke', hc.x + rnd(-18, 18), GROUND - rnd(4, 22), { s0: .6, s1: 1.8, dur: .9, add: false, a0: .75 });
      hero.ghosts.push({ x: HERO_X - 6, a: 1 }, { x: HERO_X + 6, a: .8 });
      break;
    case 'flurry':
      for (let i = 0; i < 10; i++) later(i * .04, () => proj('dagger', hc.x + 6, hc.y - 10 + rnd(-8, 8), b.cx + rnd(-6, 6), b.cy + rnd(-8, 8), .12, { onHit: () => { burst(b.cx, b.cy, 3, ['#fff', '#9dffb0'], 60, 100, 1.4); mon.flash = .05; mon.knock = 3; } }));
      later(.5, () => { slash(b.cx, b.cy, { r: 18, color: '#9dffb0', w: 3, a0: -2.8, a1: 1 }); doShake(5, .3); hitMon(num, 'skill', true); });
      break;
    case 'meteor':
      flash('#ff5a2a', .25, .5);
      proj('flame', b.cx + 40, -30, b.cx, b.cy, .5, {
        scale: 3, add: true, trail: ['#ffcf8a', '#ff8a3c', '#ff4a2a', '#ffffff'], onHit: () => {
          fxs('meteor', b.cx, b.cy, { s0: 1, s1: 3.5, dur: .7 });
          fxs('b_fire', b.cx, GROUND - 6, { s0: 1, s1: 3.5, dur: .5 });
          burst(b.cx, GROUND - 4, 60, ['#fff', '#ffcf8a', '#ff8a3c', '#ff4a2a', '#6b3a2a'], 160, 240, 2.8, .9);
          doShake(9, .6); flash('#ffffff', .7, .35);
          hitMon(num, 'skill', true);
        },
      });
      break;
    case 'warp':
      fxs('warp', 90, 40, { s0: .5, s1: 5, dur: .8, spin: 4 });
      fxs('b_pink', hc.x, hc.y, { s0: .5, s1: 2, dur: .6 });
      flash('#c78dff', .45, .6);
      for (let i = 0; i < 20; i++) part({ x: rnd(0, W), y: rnd(0, GROUND), vx: 0, vy: 0, size: 1.5, color: pick(['#c78dff', '#ffffff']), life: rnd(.4, .9), drag: 0 });
      if (c.time) popText('+' + c.time.toFixed(1) + 's', 90, 20, 'skill');
      break;
    case 'sanct':
      fxs('sanct', hc.x, hc.y, { s0: .8, s1: 2.2, dur: .8 });
      pillar = { x: hc.x, w: 34, t: 0, d: 1, color: 'rgba(255,242,184,1)' };
      rise(hc.x, hc.y + 10, 24, ['#fff2b8', '#ffffff']);
      break;
    case 'judge':
      flash('#fff6d0', .6, .4);
      pillar = { x: b.cx, w: 30, t: 0, d: .9, color: 'rgba(255,245,200,1)' };
      for (let i = 0; i < 3; i++) later(i * .08, () => fxs('holy', b.cx, b.cy - i * 10, { s0: .5, s1: 2.8, dur: .5 }));
      later(.2, () => { burst(b.cx, b.cy, 40, ['#fff', '#fff2b8', '#ffd98a'], 130, -60, 2.2); doShake(7, .45); hitMon(num, 'skill', true); });
      break;
    case 'heal':
      pillar = { x: hc.x, w: 24, t: 0, d: .8, color: 'rgba(126,224,138,1)' };
      rise(hc.x, hc.y + 10, 26, ['#7ee08a', '#b8ffcf', '#ffffff']);
      if (c.heal) popText('+' + fmt(c.heal), hc.x, hc.y - 14, 'heal');
      break;
  }
}

// ================= 메인 루프 =================
let last = performance.now(), lastFrame = 0;
function frame(now) {
  let real = Math.max(0, (now - last) / 1000);
  if (real > 5) { const t0 = performance.now(); advance(S); S.pending = null; real = 0; (window.__dmLog || (() => {}))('catch-up ' + Math.round(performance.now() - t0) + 'ms'); }
  const dt = Math.min(.25, real);
  last = now; lastFrame = now;
  for (let i = timers.length - 1; i >= 0; i--) { timers[i].t -= dt; if (timers[i].t <= 0) { const f = timers[i].fn; timers.splice(i, 1); f(); } }

  const prevBoss = !!S.boss;
  const ev = {};
  // 게임 시간은 실제 경과 시간 그대로 (프레임이 느려도 손실 없음)
  let rem = Math.min(real, 2) * boostMult(S);
  while (rem > 0) { step(S, Math.min(.25, rem), ev); rem -= .25; }
  S.lastTick = Date.now();          // 팝업에서 진행한 시간이 오프라인에 중복 적립되지 않도록
  st = stats(S);

  if (S.cls && !(trans && trans.t < .35)) {
    swingT -= dt;
    if (swingT <= 0) { swingT = Math.max(.14, 1 / st.aps); if (mon.drop <= .3) heroSwing(); }
    for (const h of st.compHits) {
      const cs = compState[h.id] || (compState[h.id] = { t: rnd(.4, 1.4), lunge: 0 });
      cs.t -= dt; cs.lunge += (0 - cs.lunge) * Math.min(1, dt * 10);
      if (cs.t <= 0) { cs.t = 1.6 * rnd(.9, 1.1); compAttack(h.id, h.dps); }
    }
  }

  handleEvents(ev, prevBoss);
  drawScene(dt);
  render();
}
function rafLoop(t) { frame(performance.now()); requestAnimationFrame(rafLoop); }
// rAF가 멈추는 환경(창이 가려짐 등)에서도 계속 돌도록 보조 루프
setInterval(() => { if (S && performance.now() - lastFrame > 60) frame(performance.now()); }, 33);

function compSkillFx(e) {
  const c = COMP_BY_ID[e.id]; if (!c) return;
  const k = S.team.indexOf(e.id); if (k < 0) return;
  const fm = COMP_FORM[k] || COMP_FORM[0], x = fm.x + 16 * fm.s, y = GROUND - 32 * fm.s - 4 + fm.y;
  const col = C_RARITY[c.r].color, cs = compState[e.id];
  if (cs) cs.lunge = 9;
  popText(compSkillName(compActive(c)), x + 6, y - 6, 'proc');
  rise(x, GROUND - 6, 10, [col, '#ffffff'], 16);
  const b = monBox(), hc = heroC();
  if (e.eff === 'burst') {
    later(.18, () => { flash(col, .3, .2); doShake(3, .2); mon.flash = .1; mon.knock = 4; burst(b.cx, b.cy, 16, [col, '#ffffff', '#ffe38a'], 70, 120, 2, .5); popText(fmt(e.dmg), b.cx, b.cy - 14, 'skill'); });
  } else if (e.eff === 'heal') {
    rise(hc.x, hc.y + 10, 16, ['#7ee08a', '#ffffff'], 18); popText('+' + fmt(e.heal), hc.x, hc.y - 20, 'heal');
  } else {
    rise(hc.x, hc.y + 10, 14, [col, '#ffffff'], 18);
  }
}
function handleEvents(ev, prevBoss) {
  if (ev.newEvent) addLog('<b>' + t('ev.newLog', { e: t('ev.' + ev.newEvent) }) + '</b>');
  if (ev.evAuto) for (const r of ev.evAuto.slice(-3)) addLog(t('ev.autoLog', { e: t('ev.' + r.id), o: t('ev.' + r.id + '.o' + r.c) }));
  if (ev.sig) { banner(t('sig.drop', { u: UNIQUES[ev.sig.u].name }), 'floor', 1800); addLog('<b>' + t('sig.dropLog', { m: MONSTERS[ev.sig.z], u: UNIQUES[ev.sig.u].name }) + '</b>'); }
  if (ev.autoMut) refreshSkills();
  if (ev.soulEnpass) popText(t('sfx.n.enpass'), 140, 34, 'proc');
  if (ev.soulUp && ev.soulUp % 10 === 0) addLog('<b style="color:#9fe3ff">' + t('soul.up', { w: soulName(), n: ev.soulUp }) + '</b>');
  if (ev.mrUp) { const last = ev.mrUp[ev.mrUp.length - 1]; const nm = COMP_BY_ID[last.id].name; addLog('<b style="color:' + C_RARITY[5].color + '">' + t('mrp.up', { c: nm, n: t('mrp.n.' + last.id), l: last.lv }) + '</b> · ' + mrpText(last.id, last.lv)); if (last.lv % 10 === 0) banner(t('mrp.up', { c: nm, n: t('mrp.n.' + last.id), l: last.lv }), 'floor', 1800); }
  if (ev.casts) for (const c of ev.casts.slice(-3)) castFx(c);
  if (ev.compCasts) for (const e of ev.compCasts.slice(-3)) compSkillFx(e);
  if (ev.echo) { for (const id of S.team || []) { const cs = compState[id]; if (cs) cs.t = Math.min(cs.t, .05); } popText(t('ui.l.echo'), 24, GROUND - 32, 'proc'); }
  if (ev.revive) { const hc = heroC(); banner(t('ui.l.revive'), 'clear', 1400); pillar = { x: hc.x, w: 28, t: 0, d: 1, color: 'rgba(255,150,80,1)' }; rise(hc.x, hc.y + 10, 30, ['#ff8a3c', '#ffe38a', '#ffffff']); addLog(t('ui.l.reviveLog')); }
  if (ev.towerClear && !ev.riftEnd && performance.now() - (handleEvents._tc || 0) > 450) { handleEvents._tc = performance.now(); banner(inRift() ? t('rift.waveClear', { n: ev.towerClear }) : t('ui.towerClear', { n: ev.towerClear }), 'floor', 650); mon.die = 0; mon.drop = 1; }
  if (ev.riftEnd) {
    const e = ev.riftEnd;
    banner(e.win ? t('rift.win', { n: e.L }) : t('rift.lose', { n: e.waves, m: RIFT_WAVES }), e.win ? 'floor' : 'lose', 1800);
    addLog('<b>' + (e.win ? t('rift.winLog', { n: e.L }) : t('rift.loseLog', { n: e.L, w: e.waves })) + '</b> ' + [t('rune.dustN', { n: e.dust }), ...e.runes.map(runeName)].join(' · '));
    if (e.win && e.runes.length) showReward(t('rift.win', { n: e.L }), e.runes.map(ru => [runeName(ru), null]).concat([[t('rune.dustN', { n: e.dust }), null]]));
    if (S.floor) st = stats(S);
  }
  if (ev.towerEnd) {
    const e = ev.towerEnd;
    banner(t('ui.towerEnd', { n: e.floor }), 'lose', 1600);
    addLog('<b>' + t('tw.' + (e.id || 'inf')) + ' · ' + t('ui.towerEndLog', { n: e.floor, b: e.best }) + '</b> ' + rewardText({ ess: e.ess, stones: e.stones, shards: e.shards, keys: e.keys }));
    save(S);
  }
  if (ev.autoRebirth) {
    logLines = []; hudSig = '';
    addLog('<b>' + t('ui.autoRebirthLog', { n: ev.autoRebirth }) + '</b>' + (ev.convStones ? ' · ' + t('conv.auto', { n: fmtN(ev.convStones) }) : ''));
    flash('#c78dff', .5, .6);
    buildSlots(); buildBag(); buildSkills(); buildComps(); buildRelics();
  }
  if (ev.autoBoss) addLog(t('ui.autoBossLog'));
  if (ev.autoSkill && !$('[data-tab="skill"]').classList.contains('hidden')) refreshSkills();
  if (ev.bonusSp) addLog(`<span class="hi">${t('ui.l.bonusSp', { n: ev.bonusSp })}</span>`);
  if (ev.bossWait && !handleEvents._waitLogged) { handleEvents._waitLogged = true; addLog(t('ui.l.bossWait')); }
  if (ev.kills && !ev.bossWin && !trans) {
    const b = monBox();
    if (mon.die <= 0 && mon.spawn <= 0) {
      mon.die = .18;
      burst(b.cx, b.cy, 12, ['#b33a4a', '#6b1f2a', '#9a93b8'], 60, 200, 2);
      if (Math.random() < .5) burst(b.cx, b.cy, 4, ['#ffcc57', '#fff2b8'], 50, 200, 1.6);
    }
  }
  if (ev.bossStart) {
    later(performance.now() - lastFloorBanner < 1200 ? .9 : 0, () => banner('BOSS', 'boss'));
    flash('#ff2a3a', .45, .6);
    doShake(4, .6);
    mon.drop = 1; mon.spawn = 0; mon.die = 0;
    handleEvents._waitLogged = false;
    addLog(t('ui.l.bossStart', { t: (S.boss && S.boss.tmax) || BOSS_TIME }));
    if (st.mech.invuln) { const hc = heroC(); later(.6, () => popText(t('ui.l.invuln'), hc.x, hc.y - 22, 'heal')); fxs('holy', hc.x, hc.y, { s0: .5, s1: 1.8, dur: .6 }); }
  }
  if (ev.bossWin) {
    const b = monBox();
    banner('BOSS CLEAR<small>' + t('ui.l.stones', { n: ev.stones || 0 }) + '</small>', 'clear', 1800);
    for (let i = 0; i < 4; i++) later(i * .1, () => fxs(pick(['b_fire', 'b_yellow', 'eblast']), b.cx + rnd(-14, 14), b.cy + rnd(-14, 10), { s0: .5, s1: 2.2, dur: .45 }));
    burst(b.cx, b.cy, 50, ['#fff', '#ffe27a', '#ffcc57', '#ff8a5c'], 140, 160, 2.6, .9);
    flash('#fff6d0', .7, .5); doShake(7, .5);
    flyTo('assets/ui/gold.png', b.cx, b.cy, $('#goldBox'), 6);
    flyTo('assets/ui/stone.png', b.cx, b.cy, $('#stoneBox'), 3);
    addLog('<b>' + t('ui.l.bossWin', { n: ev.stones || 0 }) + '</b>');
  }
  if (ev.bossLose) {
    banner(t('ui.l.retreat'), 'lose', 1400);
    flash('#000000', .6, .6);
    hero.dash = -18;
    addLog(t('ui.l.bossLose'));
  }
  if (ev.floorUp && !ev.bossLose) {
    trans = { t: 0, d: .8, scroll: 0 };
    hero.dash = 10;
    mon.die = 0; mon.spawn = 1;
    const sub = ev.newDepth ? `<small>${t('ui.l.first')}</small>` : '';
    lastFloorBanner = performance.now();
    later(ev.bossWin ? .9 : 0, () => banner(t('ui.l.floorBanner', { n: ev.floorUp }) + sub, 'floor', 1100));
    for (let i = 0; i < 16; i++) part({ x: rnd(0, W), y: rnd(0, GROUND), vx: -rnd(120, 200), vy: 0, size: 1, color: '#ffffff', life: .5, drag: 0 });
    if (ev.newDepth) { addLog(t('ui.l.firstLog', { n: ev.newDepth })); flyTo('assets/ui/stone.png', HERO_X + 16, 30, $('#stoneBox'), 2); }
    else addLog(t('ui.l.floorLog', { n: ev.floorUp }));
  }
  if (ev.levelUp) {
    const hc = heroC();
    pillar = { x: hc.x, w: 22, t: 0, d: 1, color: 'rgba(143,230,255,1)' };
    rise(hc.x, hc.y + 10, 30, ['#8ee6ff', '#ffffff', '#ffd98a']);
    banner('LEVEL UP!', 'lvl', 1400);
    addLog(`<span class="hi">${t('ui.l.levelUp', { n: ev.levelUp })}</span>`);
  }
  if (ev.drops) {
    const b = monBox();
    for (const it of ev.drops.slice(0, 3)) {
      addLog(t('ui.l.got', { i: `<span style="color:${RARITIES[it.r].color}">[${RARITIES[it.r].name}] ${itemName(it, S.cls)}</span>` }));
      flyTo(itemIcon(it, S.cls), b.cx, b.cy, $('#tabGear'), 1);
      if (it.r >= 3) { pillar = { x: b.cx, w: 14, t: 0, d: .9, color: RARITIES[it.r].color }; }
    }
    if (ev.bagKeys) for (const k of ev.bagKeys) recentKeys.add(k);
    if (!$('[data-tab="gear"]').classList.contains('hidden')) { buildSlots(); buildBag(); }
  }
}

let logLines = [], lastFloorBanner = 0;
function addLog(html) {
  logLines.push(html);
  if (logLines.length > 30) logLines.shift();
  $('#log').innerHTML = logLines.slice().reverse().map(l => `<div>${l}</div>`).join('');
}

// ================= 전투 HUD (쿨타임 / 버프 / 패시브) =================
let hudSig = '';
function buildBattleHud() {
  const cls = S.cls || 'war';
  const acts = classSkills(cls, 'active').filter(sd => (S.skills[sd.id] || 0) > 0);
  const pas = classSkills(cls, 'passive').filter(sd => (S.skills[sd.id] || 0) > 0);
  const sig = cls + acts.map(s => s.id).join() + '|' + pas.map(s => s.id).join();
  if (sig === hudSig) return;
  hudSig = sig;
  $('#cdrow').innerHTML = acts.map(sd => `<div class="cdi" data-id="${sd.id}" title="${sd.name}"><img class="px" src="${skillSrc(sd.id)}"><div class="mask"></div><div class="n"></div></div>`).join('');
  $('#pasrow').innerHTML = pas.map(sd => `<img class="pas px" data-id="${sd.id}" src="${skillSrc(sd.id)}" title="${sd.name}">`).join('');
}
function updateBattleHud() {
  buildBattleHud();
  for (const el of document.querySelectorAll('.cdi')) {
    const sd = SKILL_BY_ID[el.dataset.id];
    const lv = S.skills[sd.id] || 0;
    const rem = Math.max(0, S.cd[sd.id] ?? 0) / st.cdRate;           // 실제 남은 시간(초)
    const tot = sd.cd / st.cdRate;
    const waiting = rem <= 0 && sd.eff === 'heal';
    el.style.setProperty('--p', Math.min(1, rem / tot).toFixed(3));
    el.classList.toggle('ready', rem <= 0 && !waiting);
    el.classList.toggle('wait', waiting);
    el.querySelector('.n').textContent = waiting ? t('ui.wait') : rem > 0 ? (rem >= 10 ? Math.ceil(rem) : rem.toFixed(1)) : '';
    el.title = `${sd.name} Lv.${lv} · ${skillDesc(sd, lv)}`;
  }
  const bsig = (S.buffs || []).map(b => b.id).join();
  const row = $('#buffrow');
  if (row.dataset.sig !== bsig) {
    row.dataset.sig = bsig;
    row.innerHTML = (S.buffs || []).map(b => `<div class="bf" data-id="${b.id}"><img class="px" src="${b.id.startsWith('c:') ? compSrc(b.id.slice(2)) : skillSrc(b.id)}"><div class="b"></div><div class="t"></div></div>`).join('');
  }
  for (const el of row.children) {
    const b = S.buffs.find(x => x.id === el.dataset.id); if (!b) continue;
    el.querySelector('.t').textContent = b.t.toFixed(1);
    el.querySelector('.b').style.width = (20 * b.t / b.max) + 'px';
  }
}

// ================= 렌더 =================
// 자동 장착이 다른 행동(상자·원정·소환·파티 변경) 중에 장비를 옮겼으면 기록에 한 줄
// (상자를 10개 열면 매번 다시 배분되므로, 마지막으로 기록한 상태와 비교해 실제로 바뀐 칸만 센다)
let cgSnap = null;
const cgSnapNow = () => { const m = {}; const eq = (S.cg || {}).eq || {}; for (const id in eq) for (const k in eq[id]) m[id + '|' + k] = cgScore(eq[id][k]); return m; };
function noteCgMoved() { if (!cgTakeMoved()) return; const now = cgSnapNow(), old = cgSnap || {}; let n = 0; for (const key of new Set([...Object.keys(now), ...Object.keys(old)])) if (now[key] !== old[key]) n++; cgSnap = now; if (n) { addLog(t('cg.autoMoved', { e: Object.keys(now).length, b: cgBag(S).length })); const eb = $('#expBox'); if (eb) eb.dataset.sig = ''; } }
function render() {
  noteCgMoved();
  const cl = CLASSES[S.cls || 'war'];
  const tag = $('#clsTag');
  tag.textContent = S.cls ? cl.name : '-'; tag.style.background = S.cls ? cl.color : '#666';
  $('#lv').textContent = S.level;
  $('#spTag').textContent = 'SP ' + S.sp;
  $('#spTag').classList.toggle('hidden', S.sp <= 0);
  $('#xpbar').style.width = Math.min(100, (S.xp / xpNeed(S.level)) * 100) + '%';
  $('#gold').textContent = fmt(S.gold);
  $('#stones').textContent = fmtN(S.stones);
  $('#dps').textContent = fmt(st.dps);
  $('#floor').textContent = S.floor;
  $('#maxfloor').textContent = S.maxFloor;
  { const lp = loopOf(S.floor); $('#fname').textContent = (FLOOR_NAMES[monsterIndex(S.floor)] || t('ui.abyss')) + (lp ? ' · ' + t('ui.loop', { n: lp + 1 }) : ''); }
  const mi = sceneZone();
  if (inRift()) {
    $('#fname').textContent = t('rift.title') + ' · ' + t('rift.lv', { n: S.boss.L });
    $('#mname').textContent = t('rift.wave', { n: S.boss.tf, m: RIFT_WAVES }) + ' · ' + MONSTERS[mi];
    $('#mcount').textContent = t('rift.keysN', { n: riftState(S).keys });
  } else if (inTower()) {
    $('#fname').textContent = t('tw.' + towerId());
    $('#mname').textContent = t('ui.towerFloor', { n: S.boss.tf }) + ' · ' + MONSTERS[mi];
    $('#mcount').textContent = t('ui.towerBest', { n: towerState(S, towerId()).best || 0 });
  }
  if (S.boss) {
    if (!inTower()) { $('#mname').textContent = t('ui.lord', { m: MONSTERS[mi] }); $('#mcount').textContent = t('ui.boss'); }
    $('#mbar').style.width = Math.max(0, (S.boss.hp / S.boss.max) * 100) + '%';
    $('#heroWrap').classList.remove('hidden');
    $('#hbar').style.width = Math.max(0, (S.hp / st.hp) * 100) + '%';
    $('#hlabel').textContent = `${fmt(Math.max(0, S.hp))} / ${fmt(st.hp)}`;
    $('#bossTimer').classList.remove('hidden');
    $('#btime').textContent = Math.max(0, S.boss.timer).toFixed(1);
  } else {
    $('#mname').textContent = MONSTERS[mi];
    $('#mcount').textContent = canChallenge(S) ? t('ui.bossWaitShort') : `${S.kills} / ${killsNeeded(S.floor)}`;
    $('#mbar').style.width = Math.max(0, 100 - S.prog * 100) + '%';
    $('#heroWrap').classList.add('hidden');
    $('#bossTimer').classList.add('hidden');
  }
  const cb = $('#bossBtn');
  if (canChallenge(S)) { cb.classList.remove('hidden'); cb.querySelector('b').textContent = 'B' + (S.floor + 1) + 'F'; }
  else cb.classList.add('hidden');
  $('#s_atk').textContent = fmt(st.atk);
  $('#s_hp').textContent = fmt(st.hp);
  $('#s_crit').textContent = st.crit.toFixed(1) + '%';
  $('#s_comp').textContent = fmt(st.compDps);
  updateBattleHud();

  for (const u of UPGRADES) {
    const row = document.querySelector(`.up[data-id="${u.id}"]`); if (!row) continue;
    const n = S.up[u.id] || 0, c = upgradeCostN(u, n, buyMul);
    row.classList.toggle('no', S.gold < c);
    row.querySelector('.cost b').textContent = fmt(c);
    row.querySelector('.lvl').textContent = buyMul > 1 ? `Lv.${n} → ${n + buyMul}` : 'Lv.' + n;
    const bk = row.querySelector('.brk');
    if (bk) bk.textContent = t('ui.breakNext', { m: fmtX(breakMult(u.id, n)), x: BREAK_X, n: (Math.floor(n / BREAK_EVERY) + 1) * BREAK_EVERY });
  }
  $('#shopDot').classList.toggle('hidden', autoOn(S, 'upgrade') || !UPGRADES.some(u => S.gold >= upgradeCost(u, S.up[u.id] || 0)));
  $('#skillDot').classList.toggle('hidden', autoOn(S, 'skill') || (S.sp <= 0 && !mutPending(S)));
  renderGuide(); renderEvents(); autoNotice();
  if (!document.querySelector('[data-tab="comp"]').classList.contains('hidden')) { renderExped(); renderPetBox(); }
  $('#compDot').classList.toggle('hidden', !expSlots(S).some(x => x && Date.now() >= x.end) && S.stones < PULL_COST && !(S.team || []).some(id => { const c = COMP_BY_ID[id], o = S.comp[id]; return c && o && (o.lv || 0) < CLV_MAX && (S.shards || 0) >= compLvCost(c, o.lv || 0); }));
  if (!render._gd || performance.now() - render._gd > 1000) {
    render._gd = performance.now();
    $('#gearDot').classList.toggle('hidden', !S.bag.some(it => !S.equip[it.s] || itemScore(it) > itemScore(S.equip[it.s])));
  }
  $('#spLeft').textContent = S.sp;
  $('#stoneCost').textContent = fmt(stonePrice(S));
  { const n = stoneMaxCount(S); $('#buyAllN').textContent = n ? t('ui.buyAllN', { n: fmtN(n * 10) }) : ''; $('#buyStoneAll').disabled = !n; }
  $('#pull1').disabled = S.stones < PULL_COST;
  { const mb = $('#mileBtn'); if (mb) { mb.textContent = t('mile.btn', { n: fmtN(S.mile || 0) }); mb.classList.toggle('hot', (S.mile || 0) >= MILE_LR); } }
  if (!document.querySelector('[data-tab="shop"]').classList.contains('hidden')) buildStoneShop();
  $('#pull10').disabled = S.stones < PULL10_COST;
  $('#pull100').disabled = S.stones < PULL10_COST * 10;

  $('#pity').textContent = t('ui.pity', { a: S.pity || 0, b: PITY });
  const dsc = Math.round(stoneDiscount(S) * 100);
  $('#stoneDisc').textContent = dsc ? ' ' + t('ui.stoneDisc', { p: dsc }) : '';
  $('#respecBtn').disabled = !Object.keys(S.skills || {}).length;

  const hg = honorGain(S);
  $('#rbGain').textContent = fmtN(hg);
  $('#honor').textContent = fmtN(S.honor);
  $('#rebirths').textContent = S.rebirths;
  $('#kills').textContent = fmt(S.totalKills);
  $('#rbBtn').disabled = hg <= 0;
  $('#rbBar').style.width = Math.min(100, (S.maxFloor / REBIRTH_FLOOR) * 100) + '%';
  $('#rbHint').textContent = hg > 0 ? t('ui.rbGain', { h: fmtN(hg), p: fmtP(hg * 5) }) : t('ui.rbNeed', { n: REBIRTH_FLOOR, m: S.maxFloor });
  { const cv = hg > 0 ? convPreview(S) : 0; $('#rbConv').textContent = S.goldConv === false ? t('conv.off') : cv ? t('conv.pre', { n: fmtN(cv) }) : ''; }
  $('#rbDot').classList.toggle('hidden', hg <= 0 && !relicAffordable() && !canReinc(S));
  refreshRelics();
  refreshReinc();
  const bl = boostLeft(S);
  $('#boostTag').classList.toggle('hidden', bl <= 0);
  if (bl > 0) $('#boostTag').textContent = '×' + BOOST_X + ' ' + fmtClock(bl);
  if (!render._q || performance.now() - render._q > 1000) {
    render._q = performance.now();
    questRoll(S);
    $('#questDot').classList.toggle('hidden', !questHasClaim());
    if (!$('[data-tab="quest"]').classList.contains('hidden')) buildQuest();
    if (!$('[data-tab="gear"]').classList.contains('hidden')) refreshEnch();
  }
  $('#bagInfo').textContent = t('ui.bag', { n: fmt(bagCount(S)), k: S.bag.length });
}

// ================= 장비 탭 =================
const dcv = $('#dollcv'), dcx = dcv.getContext('2d');
function drawDoll() {
  dcx.imageSmoothingEnabled = false;
  dcx.clearRect(0, 0, 48, 48);
  const tile = A['floor/f' + (FLOOR_TILES[monsterIndex(S.floor)] ?? 0)];
  if (tile) { dcx.globalAlpha = .45; dcx.drawImage(tile, 8, 24); dcx.globalAlpha = 1; }
  drawHero(dcx, 8, 6, S.cls);
}
function slotStat(sl, v) {
  const [n, u] = SLOT_STAT_NAME[sl.stat];
  return `${n} +${fmt(v)}${u}`;
}
function buildSlots() {
  const box = $('#slots');
  box.innerHTML = '';
  for (const sl of SLOTS) {
    const it = S.equip[sl.id];
    const d = document.createElement('div');
    d.className = 'slot' + (it ? '' : ' empty');
    if (it) {
      d.style.borderColor = RARITIES[it.r].color;
      d.innerHTML = `<div class="ic"><img class="px" src="${itemIcon(it, S.cls)}"></div><div class="tx"><div class="nm" style="color:${RARITIES[it.r].color}">${itemName(it, S.cls)}</div><div class="vl">${slotStat(sl, itemValue(it))}</div></div>`;
      d.onmouseenter = e => showTip(e, it); d.onmouseleave = hideTip;
    } else d.innerHTML = `<div class="ic"></div><div class="tx"><div class="nm">${sl.name}</div><div class="vl">${SLOT_STAT_NAME[sl.stat][0]}</div></div>`;
    box.appendChild(d);
  }
  drawDoll();
  const r = st.raw;
  const rows = [
    [t('stat.atk'), fmt(st.atk)], [t('stat.hp'), fmt(st.hp)], [t('stat.crit'), st.crit.toFixed(1) + '%'],
    [t('stat.critDmg'), '×' + fmtM(st.critMult)], [t('stat.spd'), fmtP(st.spd)], [t('stat.def'), fmtP(st.armor || 0) + ' (' + t('ui.cdEff', { n: Math.round(st.def) }) + ')'],
    [t('stat.cdr'), fmtP(st.cdr) + ' (' + t('ui.cdEff', { n: Math.round(100 - 100 / (1 + st.cdr / 100)) }) + ')'], [t('stat.skillP'), '+' + fmtP(r.skillP) + '%'], [t('stat.compP'), '+' + fmtP(r.compP) + '%'],
    [t('stat.bossP'), '+' + fmtP(r.bossP) + '%'], [t('stat.goldP'), '×' + fmtM(st.goldMult)], [t('stat.regen'), (st.regen < 1000 ? st.regen.toFixed(1) : fmt(st.regen)) + '%/s'], [t('stat.xpP'), '×' + fmtM(st.xpMult)],
  ];
  // v5.8 새 스탯 (가진 사람만 표시)
  const fp1 = v => v < 10 ? v.toFixed(v < 1 ? 2 : 1) : fmtP(v);
  if (st.basicP > 0) rows.push([t('stat.basicP'), '+' + fp1(st.basicP) + '%', t('stat.tip.basicP')]);
  if (st.xdmgP > 0) rows.push([t('stat.xdmgP'), '+' + fp1(st.xdmgP) + '%', t('stat.tip.xdmgP')]);
  if (st.mcritP > 0) rows.push([t('stat.mcritP'), '+' + fp1(st.mcritP) + '% (×' + st.mcritX.toFixed(2) + ')', t('stat.tip.mcritP')]);
  $('#statsum').innerHTML = rows.map(([a, b, tip]) => `<div${tip ? ` title="${tip}"` : ''}>${a}<b>${b}</b></div>`).join('');
  refreshEnch();
}
const recentKeys = new Set();
let bagFilter = 'all', bagSort = 'value';
function buildBag() {
  // 부위 필터 칩
  const bf = $('#bagFilt');
  if (!bf.childElementCount || bf.dataset.lang !== getLang()) {
    bf.dataset.lang = getLang();
    bf.innerHTML = [['all', t('ui.all')], ...SLOTS.map(s => [s.id, t('slot.' + s.id)]), ['up', t('ui.better')]].map(([k, n]) => `<button class="mini" data-k="${k}">${n}</button>`).join('');
    for (const b of bf.children) b.onclick = () => { bagFilter = b.dataset.k; buildBag(); };
    $('#bagSort').onchange = e => { bagSort = e.target.value; buildBag(); };
  }
  for (const b of bf.children) b.classList.toggle('on', b.dataset.k === bagFilter);
  const box = $('#bag');
  box.innerHTML = '';
  const better = it => { const cur = S.equip[it.s]; return !cur || itemScore(it) > itemScore(cur); };
  let list = S.bag.map((it, i) => ({ it, i })).filter(({ it }) => bagFilter === 'all' || (bagFilter === 'up' ? better(it) : it.s === bagFilter));
  const sorters = {
    value: (a, b) => itemScore(b.it) - itemScore(a.it),
    rarity: (a, b) => (b.it.r - a.it.r) || (b.it.t - a.it.t),
    slot: (a, b) => SLOTS.findIndex(s => s.id === a.it.s) - SLOTS.findIndex(s => s.id === b.it.s) || (b.it.t - a.it.t) || (b.it.r - a.it.r),
    count: (a, b) => (b.it.n || 1) - (a.it.n || 1),
  };
  list.sort(sorters[bagSort] || sorters.value);
  const LIMIT = 240;
  for (const { it, i } of list.slice(0, LIMIT)) {
    const c = document.createElement('div');
    const k = itemKey(it);
    c.className = 'cell has' + (recentKeys.has(k) ? ' new' : '');
    c.innerHTML = `<img class="px" src="${itemIcon(it, S.cls)}"><span class="r" style="border-color:${RARITIES[it.r].color}"></span>${better(it) ? '<span class="up">▲</span>' : ''}${(it.n || 1) > 1 ? `<span class="cnt">${it.n}</span>` : ''}`;
    c.onclick = () => { equipFromBag(S, i); save(S); buildSlots(); buildBag(); hideTip(); };
    c.oncontextmenu = e => { e.preventDefault(); const p = sellFromBag(S, i, !e.shiftKey); addLog(t('ui.sold', { g: `<b>${fmt(p)}</b>` })); save(S); buildBag(); hideTip(); };
    c.onmouseenter = e => showTip(e, it); c.onmouseleave = hideTip;
    box.appendChild(c);
  }
  if (!list.length) box.innerHTML = `<div class="bagempty">${t('ui.empty')}</div>`;
  if (list.length > LIMIT) box.insertAdjacentHTML('beforeend', `<div class="bagempty">${t('ui.more', { n: list.length - LIMIT })}</div>`);
  recentKeys.clear();
  $('#bagInfo').textContent = t('ui.bag', { n: fmt(bagCount(S)), k: S.bag.length });
  $('#bagInfo').textContent = t('ui.bag', { n: fmt(bagCount(S)), k: S.bag.length });
}
function showTip(e, it) {
  const sl = SLOT_BY_ID[it.s], cur = S.equip[it.s], v = itemValue(it);
  let diff = '';
  if (cur && cur !== it) { const d = itemScore(it) / itemScore(cur) - 1; diff = `<div class="td ${d < 0 ? 'dn' : ''}">${t('ui.vsEquipped', { d: (d >= 0 ? '+' : '') + Math.round(d * 100) })}</div>`; }
  const tip = $('#tip');
  const affHtml = (it.a || []).map(([k, v]) => `<div class="ta">+ ${statText(k, v)}</div>`).join('');
  const uq = it.u && UNIQUES[it.u];
  const uqHtml = uq ? `<div class="tu">【${uq.name}】 ${uq.desc}</div>` : '';
  tip.innerHTML = `<div class="tn" style="color:${RARITIES[it.r].color}">${itemName(it, S.cls)}</div><div class="ts">${RARITIES[it.r].name} · ${sl.name}</div><div class="tv">${slotStat(sl, v)}</div>${affHtml}${uqHtml}${diff}<div class="ts">${t('ui.sellPrice', { p: fmt(sellPrice(it)) })}${(it.n || 1) > 1 ? ` × ${it.n}` : ''} · ${t('ui.rclick')}</div>`;
  tip.classList.remove('hidden');
  const r = e.currentTarget.getBoundingClientRect();
  tip.style.left = Math.min(384 - 220, Math.max(4, r.left - 60)) + 'px';
  tip.style.top = Math.max(4, r.top - tip.offsetHeight - 6) + 'px';
}
function hideTip() { $('#tip').classList.add('hidden'); }

// ================= 스킬 탭 =================
function miniHero(canvas, cls, scale = 1) {
  const c = canvas.getContext('2d');
  c.imageSmoothingEnabled = false;
  c.clearRect(0, 0, canvas.width, canvas.height);
  const L = ['cls/' + cls, `gear/body_${cls}1_d`, `gear/head_${cls}0_d`, `wpn/${cls}1_d`];
  for (const k of L) if (A[k]) c.drawImage(A[k], 0, 0, 32 * scale, 32 * scale);
}
function buildSkills() {
  const cls = S.cls || 'war';
  const cl = CLASSES[cls];
  $('#clsbox').innerHTML = `<canvas width="32" height="32"></canvas><div class="t"><b style="color:${cl.color}">${cl.name}</b><div>${cl.desc}</div></div><button class="mini" id="chgCls">${t('ui.changeClass')}</button>`;
  miniHero($('#clsbox canvas'), cls);
  $('#chgCls').onclick = () => openClassModal(true);
  for (const [box, type] of [['#skA', 'active'], ['#skP', 'passive']]) {
    const el = $(box);
    el.innerHTML = '';
    for (const sd of classSkills(cls, type)) {
      const d = document.createElement('div');
      d.className = 'sk'; d.dataset.id = sd.id;
      d.innerHTML = `<img class="px" src="${skillSrc(sd.id)}"><div class="t"><b>${sd.name}</b><i></i><div class="ds"></div><div class="nx"></div><div class="mut hidden"></div></div><div class="lvl"></div>`;
      { const mb = d.querySelector('.mut'); for (const evn of ['pointerdown', 'mousedown', 'touchstart']) mb.addEventListener(evn, e => e.stopPropagation()); mb.addEventListener('click', e => { e.stopPropagation(); const b = e.target.closest('button[data-m]'); if (!b) return; if (mutOf(S, sd) === b.dataset.m) return; setMut(S, sd.id, b.dataset.m); st = stats(S); save(S); refreshSkills(); render(); addLog(t('mut.log', { s: sd.name, m: t('mut.' + mutKind(sd) + '.' + b.dataset.m) })); }); }
      holdRepeat(d, () => {
        if (!learnSkill(S, sd.id)) return false;
        d.classList.remove('lvup'); void d.offsetWidth; d.classList.add('lvup');
        refreshSkills(); render();
        return true;
      }, n => { if (n) addLog(`<span class="hi">${sd.name}</span> Lv.${S.skills[sd.id]}`); });
      el.appendChild(d);
    }
  }
  buildMastery();
  refreshSkills();
}
function buildMastery() {
  const box = $('#msList'); if (!box) return;
  box.innerHTML = '';
  for (const m of MASTERY) {
    const d = document.createElement('div');
    d.className = 'up ms'; d.dataset.ms = m.id;
    d.innerHTML = `<div class="n"><b>${t('ms.' + m.id)}</b><span class="md"></span></div><div class="lvl"></div><div class="cost"><b>1 SP</b></div>`;
    holdRepeat(d, () => {
      if (!buyMastery(S, m.id)) return false;
      d.classList.remove('bought'); void d.offsetWidth; d.classList.add('bought');
      st = stats(S); refreshSkills(); render();
      return true;
    }, n => { if (n) addLog(t('ui.msLog', { m: `<b>${t('ms.' + m.id)}</b>`, l: masteryLv(S, m.id) })); });
    box.appendChild(d);
  }
}
function refreshMastery() {
  const head = $('#msHead'); if (!head) return;
  const un = masteryUnlocked(S), total = classSkills(S.cls || 'war').length;
  head.textContent = un ? t('ui.msLeft', { n: S.sp }) : t('ui.msLock', { a: skillsMaxed(S), b: total });
  $('#msBox').classList.toggle('lock', !un);
  for (const d of document.querySelectorAll('.ms')) {
    const m = MASTERY.find(x => x.id === d.dataset.ms), lv = masteryLv(S, m.id);
    d.classList.toggle('no', !un || S.sp < 1);
    d.querySelector('.md').textContent = t('ms.' + m.id + '.d', { v: m.v * lv }) + ' → +' + (m.v * (lv + 1)) + '%';
    d.querySelector('.lvl').textContent = 'Lv.' + lv;
  }
}
function refreshSkills() {
  for (const d of document.querySelectorAll('.sk')) {
    const sd = SKILL_BY_ID[d.dataset.id];
    const lv = S.skills[sd.id] || 0;
    const un = skillUnlocked(S, sd);
    d.classList.toggle('lock', !un);
    d.classList.toggle('nosp', un && (S.sp < 1 || lv >= SKILL_MAX));
    d.querySelector('i').textContent = sd.type === 'active' ? t('ui.cd', { n: sd.cd }) : t('ui.passive');
    d.querySelector('.ds').textContent = lv ? skillDesc(sd, lv) : (un ? t('ui.notLearned') : t('ui.unlockAt', { n: sd.unlock })) + ' · ' + skillDesc(sd, 1);
    d.querySelector('.nx').textContent = un && lv > 0 && lv < SKILL_MAX ? t('ui.next') + ': ' + skillDesc(sd, lv + 1) : '';
    { const mb = d.querySelector('.mut'), k = mutKind(sd), cur = mutOf(S, sd);
      mb.classList.toggle('hidden', lv < SKILL_MAX);
      const sig = lv >= SKILL_MAX ? k + (cur || '-') + getLang() : '';
      if (mb.dataset.sig !== sig) { mb.dataset.sig = sig; mb.innerHTML = lv >= SKILL_MAX ? `<div class="muth">${t(cur ? 'mut.head' : 'mut.pick')}</div>` + ['a', 'b'].map(m => `<button class="mini ${cur === m ? 'on' : ''}" data-m="${m}"><b>${t('mut.' + k + '.' + m)}</b><span>${t('mut.' + k + '.' + m + '.d')}</span></button>`).join('') : ''; }
      d.classList.toggle('mutwait', lv >= SKILL_MAX && !cur); }
    const l = d.querySelector('.lvl');
    l.textContent = lv + '/' + SKILL_MAX; l.classList.toggle('max', lv >= SKILL_MAX);
  }
  $('#spLeft').textContent = S.sp;
  refreshMastery();
}

// ================= 직업 선택 =================
function openClassModal(isChange) {
  $('#clsTitle').textContent = isChange ? t('ui.changeClass') : t('ui.chooseClass');
  $('#clsSub').innerHTML = isChange
    ? t('ui.classChangeNote')
    : '';
  const g = $('#clsGrid');
  g.innerHTML = '';
  for (const c of CLASS_IDS) {
    const cl = CLASSES[c];
    const d = document.createElement('div');
    d.className = 'clsc' + (S.cls === c ? ' now' : '');
    if (S.cls === c) d.dataset.now = t('ui.nowCls');
    d.innerHTML = `<canvas width="64" height="64"></canvas><b style="color:${cl.color}">${cl.name}</b><div class="d">${cl.desc}</div>`;
    d.onclick = () => {
      if (S.cls === c) { $('#clsModal').classList.add('hidden'); return; }
      if (S.cls) backup(S, 'class');
      changeClass(S, c); save(S, 'force');
      hudSig = '';
      $('#clsModal').classList.add('hidden');
      addLog(t('ui.classSet', { c: `<b>${cl.name}</b>` }));
      buildSkills(); buildSlots(); buildComps();
      const hc = heroC();
      pillar = { x: hc.x, w: 26, t: 0, d: 1, color: cl.color };
      rise(hc.x, hc.y + 10, 30, [cl.color, '#ffffff']);
      flash(cl.color, .4, .5);
    };
    g.appendChild(d);
    miniHero(d.querySelector('canvas'), c, 2);
  }
  $('#clsCancel').classList.toggle('hidden', !isChange);
  $('#clsModal').classList.remove('hidden');
}

// ================= 동료 탭 =================
const CF = { cls: 'all', r: 'all', eff: 'all', own: 'all', sort: 'rarity' };
function effTxt(k, v) { return statText(k, v); }
// ================= 원정대 · 동료 장비 · 코스튬 =================
const CG_COL = ['#b8b8c8', '#6bd66b', '#5aa9ff', '#c77dff', '#ffb347'];
// 커서를 올리면 무엇이 올라가는지 보여 준다 (id가 있으면 그 동료 기준의 실제 수치까지)
function basicXText() { const st = stats(S); return t('cg.basicX', { x: fmtN(Math.round(st.basicX * 10) / 10), b: fmtP(cgBladeSum(S)), s: fmtP((st.skillMult - 1) * 100), k: Math.round(BASIC_SKILL_K * 100) }); }
function cgTip(it, id) { const v = cgVal(it); let s = t('cg.tip.' + it.k, { v, e: Math.round(cgExpVal(it) * 10) / 10 }); const c = id && COMP_BY_ID[id], o = id && S.comp[id];
  if (c && o && it.k !== 'blade') { const k = it.k === 'charm' ? c.team.k : c.own.k, base = it.k === 'charm' ? teamValue(S, c, o.aw, o.lv) : ownValue(c, o.aw, o.lv); s += '\n' + t('cg.tip.now', { a: statText(k, base), b: statText(k, base * (1 + v / 100)) }); }
  if (it.k === 'blade') s += '\n' + basicXText();
  return s.replace(/"/g, '&quot;'); }
const cgName = (it, id) => `<span style="color:${CG_COL[it.r]}" title="${cgTip(it, id)}">${t('cg.k.' + it.k)} +${cgVal(it)}%</span>`;
function mrpText(id, lv) { const mp = MR_POW[id]; return t('mrp.e.' + id, { a: Math.round(mp.v * lv * 10) / 10, b: Math.round((mp.v2 || 0) * lv * 10) / 10 }); }
function mrpHtml(id) {
  const lv = mrpLv(S, id), xp = mrpXp(S, id), need = mrpNeed(lv), max = lv >= MRP_MAX, inTeam = (S.team || []).includes(id) && !onExped(S, id);
  return `<div class="h">${t('mrp.head', { n: t('mrp.n.' + id) })} <b class="mrlv">Lv.${lv}/${MRP_MAX}</b></div>
    <div class="clvbar mrbar"><i style="width:${max ? 100 : xp / need * 100}%"></i></div>
    <div class="x"><b>${lv ? mrpText(id, lv) : t('mrp.none')}</b>${max ? '' : ' → ' + t('mrp.next') + ' ' + mrpText(id, lv + 1)}</div>
    <div class="x">${max ? t('mrp.max') : t('mrp.how', { x: Math.floor(xp), n: need })}${inTeam ? '' : ' · <span class="warn">' + t('mrp.notTeam') + '</span>'}</div>`;
}
function cgSlotsHtml(id) {
  const e = cgEq(S, id), bag = cgBag(S);
  return `<div class="h">${t('cg.head')}</div><div class="cgslots">${CG_KINDS.map(k => { const it = e[k]; const best = bag.map((x, i) => [x, i]).filter(([x]) => x.k === k).sort((a, b) => cgScore(b[0]) - cgScore(a[0]))[0];
    const better = best && (!it || cgScore(best[0]) > cgScore(it));
    return `<div class="cgs" title="${t('cg.g.' + k)}"><i>${t('cg.k.' + k)}</i>${it ? cgName(it, id) : `<span class="mut2">${t('cg.empty')}</span>`}<div class="cgb">${better ? `<button class="mini hot" data-cg="${k}" data-bi="${best[1]}" title="${cgTip(best[0], id)}">${t('cg.equipBest', { v: cgVal(best[0]) })}</button>` : ''}${it ? `<button class="mini" data-cg="${k}" data-off="1">${t('cg.off')}</button>` : ''}</div></div>`; }).join('')}</div><div class="x">${t('cg.desc')}</div>${S.cgAuto !== false ? `<div class="x mut2">${t('cg.autoHint')}</div>` : ''}`;
}
const fmtLeft = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); return h ? t('exp.hm', { h, m }) : m ? t('exp.m', { m }) : t('exp.s', { s }); };
function renderExped() {
  const box = $('#expBox'); if (!box) return;
  const now = Date.now(), sl = expSlots(S);
  const sig = sl.map(x => x ? x.ids.join(',') + (now >= x.end ? 'D' : Math.floor((x.end - now) / 30000)) : '-').join('|') + cgBag(S).length + getLang() + (S.stones >= rushAllCost(S, now)) + expSel.di + expFree(S).length;
  if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  const nEmpty = sl.filter(x => !x).length, nRun = sl.filter(x => x && now < x.end).length, nDone = sl.filter(x => x && now >= x.end).length, rAll = rushAllCost(S, now), canSend = nEmpty && expFree(S).length;
  box.innerHTML = `<div class="exph"><b>${t('exp.title')}</b><button class="mini" data-x="bag">${t('cg.bagBtn', { n: cgBag(S).length, m: CG_BAG })}</button></div>` +
    `<div class="expall">${canSend ? `<select data-x="alldi">${EXP_DUR.map((h, i) => `<option value="${i}" ${expSel.di === i ? 'selected' : ''}>${t('exp.dur', { h })}</option>`).join('')}</select><button class="mini hot" data-x="sendAll">${t('exp.sendAll', { n: nEmpty })}</button>` : ''}${nRun ? `<button class="mini ${S.stones >= rAll ? 'hot' : ''}" data-x="rushAll" ${S.stones >= rAll ? '' : 'disabled'} title="${t('exp.rushAllT')}">${t('exp.rushAll', { n: nRun })} <img src="assets/ui/stone.png" class="px i14" alt=""> ${fmtN(rAll)}</button>` : ''}${nDone > 1 ? `<button class="mini hot" data-x="claimAll">${t('exp.claimAll', { n: nDone })}</button>` : ''}</div>` + sl.map((x, i) => {
    if (!x) return `<div class="exps"><span class="mut2">${t('exp.idle')}</span><button class="mini hot" data-x="send" data-i="${i}">${t('exp.send')}</button></div>`;
    const done = now >= x.end, pics = x.ids.map(id => `<img class="px" src="${compSrc(id)}" style="border-color:${C_RARITY[COMP_BY_ID[id].r].color}">`).join('');
    const rc = done ? 0 : rushCost(S, i);
    return `<div class="exps ${done ? 'done' : ''}"><div class="pics">${pics}</div><div class="info"><b>${t('exp.dur', { h: EXP_DUR[x.di] })}</b><span>${done ? t('exp.back') : t('exp.left', { t: fmtLeft(x.end - now) })}</span></div>${done ? `<button class="mini hot" data-x="claim" data-i="${i}">${t('exp.claim')}</button>` : `<button class="mini" data-x="rush" data-i="${i}" ${S.stones >= rc ? '' : 'disabled'} title="${t('exp.rushT')}"><img src="assets/ui/stone.png" class="px i14" alt=""> ${fmtN(rc)}</button><button class="mini" data-x="recall" data-i="${i}">${t('exp.recall')}</button>`}</div>`;
  }).join('');
}
let expSel = { slot: 0, di: 1, ids: [] }, expArm = -1;
function openExpModal(slot) {
  expSel = { slot, di: expSel.di ?? 1, ids: expAutoPick(S) };
  renderExpModal(); $('#expModal').classList.remove('hidden');
}
function renderExpModal() {
  const free = expFree(S).sort((a, b) => expPower(S, [b]) - expPower(S, [a])), pv = expPreview(S, expSel.ids, expSel.di);
  $('#expWin').innerHTML = `<div class="evh"><b>${t('exp.title')}</b><span>${t('exp.sub', { n: EXP_SIZE })}</span></div>
    <div class="dsel">${EXP_DUR.map((h, i) => `<button class="mini ${expSel.di === i ? 'on' : ''}" data-xd="${i}">${t('exp.dur', { h })}</button>`).join('')}</div>
    <div class="exppv"><div><span>${t('exp.power')}</span><b>${Math.round(pv.mult * 100)}%</b></div><div class="rw">${[t('rw.shards', { n: pv.shards }), t('rw.ess', { n: pv.ess }), pv.dust ? t('rune.dustN', { n: pv.dust }) : '', t('cg.n', { n: pv.gear }), t('exp.cosChance', { p: (pv.cos * 100).toFixed(1) })].filter(Boolean).join(' · ')}</div></div>
    <div class="expgrid">${free.length ? free.map(id => { const c = COMP_BY_ID[id], on = expSel.ids.includes(id); return `<div class="eg ${on ? 'on' : ''}" data-xc="${id}" style="border-color:${C_RARITY[c.r].color}"><img class="px" src="${compSrc(id)}"><i>${C_RARITY[c.r].name}</i></div>`; }).join('') : `<div class="qx">${t('exp.noFree')}</div>`}</div>
    <div class="grow"><button class="mini" data-xa="auto">${t('exp.auto')}</button><button class="big sm" data-xa="go" ${expSel.ids.length ? '' : 'disabled'}>${t('exp.go', { n: expSel.ids.length, m: EXP_SIZE })}</button></div>
    <button class="mini wide" data-xa="close">${t('ui.close')}</button>`;
}
function openCgModal() { renderCgModal(); $('#cgModal').classList.remove('hidden'); }
function renderCgModal() {
  const bag = cgBag(S).map((it, i) => [it, i]).sort((a, b) => cgScore(b[0]) - cgScore(a[0]));
  const low = cgBag(S).filter(x => x.r <= 1).length;
  const on = S.cgAuto !== false;
  $('#cgWin').innerHTML = `<div class="evh"><b>${t('cg.title')}</b><span>${t('cg.bag', { n: cgBag(S).length, m: CG_BAG })}</span></div>
    <div class="cgsum">${basicXText()}</div>
    <details class="cghelp"><summary>${t('cg.helpT')}</summary><div>${t('cg.desc2')}</div><div>${t('cg.desc')}</div></details>
    <label class="chk cgauto"><input type="checkbox" data-cga="toggle" ${on ? 'checked' : ''}><span>${t('cg.autoOn')}</span></label>
    <div class="cgbtns"><button class="mini" data-cga="auto">${t('cg.autoNow')}</button><button class="mini" data-cga="merge">${t('cg.merge')}</button><button class="mini" data-cga="dis" ${low ? '' : 'disabled'}>${t('cg.disLow', { n: low })}</button></div>
    ${on && bag.length ? `<div class="cgleft">${t('cg.bagLeft')}</div>` : ''}
    <div class="cglist">${bag.length ? bag.map(([it]) => `<div class="cgi">${cgName(it)}<i>${t('rar.' + it.r)} · ${it.q}%</i></div>`).join('') : `<div class="qx c">${t('cg.none')}</div>`}</div>
    <button class="mini wide" data-cga="close">${t('ui.close')}</button>`;
}
// ================= 영혼무기 =================
let soulDraft = null;   // 만들기 화면: { look, name, k }
const soulName = () => (S.soul && S.soul.name) || t('soul.title');
const soulFxText = (k, v) => { const r1 = x => Math.round(x * 10) / 10; return t('sfx.d.' + k, { v: k === 'cut' ? Math.round(v * 1000) / 1000 : r1(v), h: r1(v * 3), m: r1(v * 200), c: r1(Math.min(v * 200, v * (S.soulKills || 0))), s: (() => { const sd = S && soulAwakenSkill(S); return sd ? t('sk.' + sd.id) : '-'; })() }); };
function drawSoulPv(look) { const cv = $('#soulPv'); if (!cv) return; const x = cv.getContext('2d'); x.imageSmoothingEnabled = false; x.clearRect(0, 0, 96, 96); for (const k of heroLayers(S.cls, { soul: look, slot: 'weapon', v: 'auto' })) { const im = A[k]; if (im) x.drawImage(im, 0, 0, 32, 32, 0, 0, 96, 96); } }
function openSoulModal() { if (soulUnlocked(S) && !soulMade(S)) soulDraft = soulDraft || { look: SOUL_LOOKS[0], name: '', k: 'atk' }; renderSoulModal(); $('#soulModal').classList.remove('hidden'); }
function renderSoulModal() {
  const box = $('#soulWin'); const fxOpts = sel => SOUL_FX_KEYS.map(k => `<option value="${k}" ${k === sel ? 'selected' : ''}>${t('sfx.n.' + k)}</option>`).join('');
  const looks = cur => `<div class="soullooks">${SOUL_LOOKS.map(w => `<button class="cosopt ${w === cur ? 'on' : ''}" data-sl="${w}"><img class="px" src="assets/soul/${w}.png"></button>`).join('')}</div>`;
  if (!soulUnlocked(S)) { box.innerHTML = `<div class="evh"><b>${t('soul.title')}</b></div><div class="qx">${t('soul.locked', { n: SOUL_REINC })}</div><button class="mini wide" data-sw="close">${t('ui.close')}</button>`; return; }
  if (!soulMade(S)) { const d = soulDraft;
    box.innerHTML = `<div class="evh"><b>${t('soul.make')}</b></div><div class="qx">${t('soul.desc')}</div>
      <div class="soulhead"><canvas id="soulPv" width="96" height="96"></canvas><div class="sh">
        <label>${t('soul.name')}<input class="pinp" id="soulNm" maxlength="16" placeholder="${t('soul.title')}" value="${(d.name || '').replace(/"/g, '')}"></label>
        <label>${t('soul.opt1')}<select id="soulK">${fxOpts(d.k)}</select></label><span class="sod">${soulFxText(d.k, soulVal(d.k, soulCap(S)))} <i class="mut2">(Lv.${soulCap(S)})</i></span>
        <span class="mut2">${t('soul.slotsNote', { a: SOUL_SLOT_AT[1], b: SOUL_SLOT_AT[2] })}</span></div></div>
      <div class="sech">${t('soul.look')}</div>${looks(d.look)}
      <div class="grow"><button class="big sm" data-sw="craft">${t('soul.craft')}</button><button class="mini" data-sw="close">${t('ui.close')}</button></div>`;
    drawSoulPv(d.look); return; }
  const w = S.soul, cap = soulCap(S), nS = soulSlots(S), fc = soulFeedCost(S);
  box.innerHTML = `<div class="evh"><b>${soulName()} <button class="pren" data-sw="ren" title="${t('ui.presetRen')}"><svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5l2 2L6 12l-3 1 1-3z"/><path d="M10 4l2 2"/></svg></button></b><span>Lv.${w.lv}/${cap}</span></div>
    <div class="soulhead"><canvas id="soulPv" width="96" height="96"></canvas><div class="sh">
      <div class="clvbar soulbar"><i style="width:${w.lv >= cap ? 100 : w.xp / soulNeed(w.lv) * 100}%"></i></div>
      <span class="mut2">${w.lv >= cap ? (w.lv >= SOUL_MAXLV ? 'MAX' : t('soul.capped', { f: w.lv + 1 })) : t('soul.how', { x: Math.floor(w.xp), n: soulNeed(w.lv) })}</span>
      ${fc ? `<button class="mini ${(S.ess || 0) >= fc ? 'hot' : ''}" data-sw="feed" ${(S.ess || 0) >= fc ? '' : 'disabled'} title="${t('pet.lvT')}">${t('soul.feed')} <img src="assets/ui/rune.png" class="px i14" alt=""> ${fmt(fc)}</button>` : ''}
      <label class="chk"><input type="checkbox" data-sw="show" ${w.show ? 'checked' : ''}><span>${t('soul.show')}</span></label></div></div>
    <div class="soulopts">${SOUL_SLOT_AT.map((at, i) => i < nS ? `<div class="sorow"><b>${i + 1}</b><select data-so="${i}">${fxOpts(w.opt[i] || '')}${w.opt[i] ? '' : `<option value="" selected>${t('soul.pick')}</option>`}</select><span>${w.opt[i] ? soulFxText(w.opt[i], soulVal(w.opt[i], w.lv)) : ''}</span></div>` : `<div class="sorow off"><b>${i + 1}</b><span class="mut2">${t('soul.slotAt', { n: at })}</span></div>`).join('')}</div>
    <div class="qx">${t('soul.optNote')}</div>
    <details class="sofx"><summary>${t('soul.allFx')}</summary>${SOUL_FX_KEYS.map(k => `<div><b>${t('sfx.n.' + k)}</b> ${soulFxText(k, soulVal(k, w.lv))}</div>`).join('')}</details>
    <div class="sech">${t('soul.look')}</div>${looks(w.look)}
    <button class="mini wide" data-sw="close">${t('ui.close')}</button>`;
  drawSoulPv(w.look);
  const fb = box.querySelector('[data-sw="feed"]'); if (fb && !fb.disabled) holdRepeat(fb, () => soulFeed(S), n => { if (n) { st = stats(S); save(S); renderSoulModal(); drawDoll(); } });
}
function bindSoul() {
  $('#soulModal').onclick = e => { if (e.target.id === 'soulModal') $('#soulModal').classList.add('hidden'); };
  const box = $('#soulWin');
  box.addEventListener('mouseover', e => { const b = e.target.closest('[data-sl]'); if (b) drawSoulPv(b.dataset.sl); });
  box.addEventListener('mouseleave', () => drawSoulPv(soulMade(S) ? S.soul.look : soulDraft && soulDraft.look));
  box.addEventListener('input', e => { if (e.target.id === 'soulNm' && soulDraft) soulDraft.name = e.target.value; });
  box.addEventListener('change', e => { const el = e.target;
    if (el.id === 'soulK' && soulDraft) { soulDraft.k = el.value; renderSoulModal(); return; }
    if (el.dataset.so != null && el.value) { if (soulSetOpt(S, +el.dataset.so, el.value)) { st = stats(S); save(S); } renderSoulModal(); return; }
    if (el.dataset.sw === 'show') { soulShow(S, el.checked); save(S); drawDoll(); } });
  box.addEventListener('click', e => { const l = e.target.closest('[data-sl]'); if (l) { if (soulMade(S)) { soulSetLook(S, l.dataset.sl); save(S); drawDoll(); } else soulDraft.look = l.dataset.sl; renderSoulModal(); return; }
    const b = e.target.closest('[data-sw]'); if (!b || b.disabled || b.tagName === 'INPUT') return; const a = b.dataset.sw;
    if (a === 'close') $('#soulModal').classList.add('hidden');
    else if (a === 'craft') { const d = soulDraft; if (soulCraft(S, d.look, d.name, d.k)) { soulDraft = null; st = stats(S); save(S); addLog('<b style="color:#9fe3ff">' + t('soul.made', { w: soulName() }) + '</b>'); toast(t('soul.made', { w: soulName() })); renderSoulModal(); drawDoll(); } }
    else if (a === 'ren') { const h = box.querySelector('.evh b'); h.innerHTML = `<input class="pinp" maxlength="16" placeholder="${t('soul.title')}">`; const inp = h.querySelector('input'); inp.value = S.soul.name || ''; inp.focus(); inp.select(); let done = false;
      const fin = ok => { if (done) return; done = true; if (ok && soulRename(S, inp.value)) save(S); renderSoulModal(); }; inp.onkeydown = ev => { if (ev.key === 'Enter') fin(true); else if (ev.key === 'Escape') fin(false); }; inp.onblur = () => fin(true); } });
}
// ================= 펫 =================
const PET_COL = ['#b8b8c8', '#6bd66b', '#5aa9ff', '#c77dff', '#ffb347'];
const petFxText = (k, v) => t('pet.fx.' + k, { v: Math.round(v * 10) / 10 });
const goldIc = '<img src="assets/ui/gold.png" class="px i14" alt="">';
let petSel = null;
// 자동 다시 뽑기 (원하는 효과·등급이 나올 때까지)
let petAuto = null; const petAutoPref = {};
function petAutoStop(msg) { if (!petAuto) return; clearTimeout(petAuto.timer); const a = petAuto; petAuto = null; if (a.rolls) { save(S); addLog(msg || t('pet.autoStop', { n: fmtN(a.rolls) })); } st = stats(S); if (!$('#petModal').classList.contains('hidden')) renderPetModal(); $('#petBox').dataset.sig = ''; renderPetBox(); }
function petAutoTick() {
  const a = petAuto; if (!a) return;
  if ($('#petModal').classList.contains('hidden') || !S.pets.own[a.id]) { petAutoStop(); return; }
  const r = petAutoRoll(S, a.id, a.k, a.r, 25); if (!r) { petAutoStop(); return; }
  a.rolls += r.rolls; a.spent += r.spent;
  if (r.hit) { const nm = t('pet.n.' + a.id), fx = `${t('rar.' + r.r)} · ${petFxText(r.k, petVal(S.pets.own[a.id]))}`; toast(t('pet.autoHit', { p: nm, f: fx })); petAutoStop('<b>' + t('pet.autoHitLog', { p: nm, f: fx, n: fmtN(a.rolls) }) + '</b>'); return; }
  if (r.out) { petAutoStop(t('pet.autoOut', { n: fmtN(a.rolls) })); return; }
  const ln = $('#petAutoLine'); if (ln) ln.textContent = t('pet.autoRun', { n: fmtN(a.rolls), g: fmt(a.spent) });
  a.timer = setTimeout(petAutoTick, 40);
}
function renderPetBox() {
  const box = $('#petBox'); if (!box) return;
  const on = petUnlocked(S), own = on ? petOwned(S) : [], act = S.pets && S.pets.act, ag = petAgg(S);
  const top = PET_FX_KEYS.filter(k => ag[k] > 0).sort((a, b) => ag[b] / PET_FX[b].v - ag[a] / PET_FX[a].v).slice(0, 3);
  const sig = [on, own.length, act, top.map(k => k + Math.round(ag[k])).join(','), getLang(), petPot(S) >= (on && petLeft(S).length ? petDrawCost(S) : Infinity)].join('|');
  if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  box.innerHTML = !on ? `<div class="peth"><b>${t('pet.title')}</b><span class="mut2">${t('pet.locked', { n: PET_UNLOCK })}</span></div>`
    : `<div class="peth">${act ? `<img class="px" src="assets/pet/${act}.png">` : ''}<div class="pt"><b>${t('pet.title')} ${own.length}/${PETS.length}</b><span>${top.length ? top.map(k => petFxText(k, ag[k])).join(' · ') : t('pet.none')}</span></div><button class="mini ${petLeft(S).length && petPot(S) >= petDrawCost(S) ? 'hot' : ''}" data-p="open">${t('pet.manage')}</button></div>`;
}
function petAutoHtml(id, p) {
  const pr = petAutoPref[id] || (petAutoPref[id] = { k: p.k, r: Math.min(4, p.r + 1) });
  const run = petAuto && petAuto.id === id, done = petWant(p, pr.k, pr.r), odds = petAutoOdds(pr.k, pr.r);
  return `<div class="pauto"><b>${t('pet.auto')}</b><select data-pa="k" ${run ? 'disabled' : ''}><option value="any" ${pr.k === 'any' ? 'selected' : ''}>${t('pet.anyFx')}</option>${PET_FX_KEYS.map(k => `<option value="${k}" ${pr.k === k ? 'selected' : ''}>${t('fx.n.' + k)}</option>`).join('')}</select>
    <select data-pa="r" ${run ? 'disabled' : ''}>${[0, 1, 2, 3, 4].map(r => `<option value="${r}" ${pr.r === r ? 'selected' : ''}>${t('pet.rUp', { r: t('rar.' + r) })}</option>`).join('')}</select>
    ${run ? `<button class="mini hot" data-p="astop">${t('ui.aStop')}</button>` : `<button class="mini" data-p="astart" ${done || petPot(S) < petRollCost(S) ? 'disabled' : ''}>${t('pet.autoGo')}</button>`}
    <span id="petAutoLine" class="mut2">${run ? t('pet.autoRun', { n: fmtN(petAuto.rolls), g: fmt(petAuto.spent) }) : done ? t('pet.autoDone') : t('pet.autoOdds', { n: fmtN(Math.round(1 / odds)), g: fmt(petRollCost(S) / odds) })}</span></div>`;
}
function openPetModal() { if (!petUnlocked(S)) return; if (!petSel || !S.pets.own[petSel]) petSel = S.pets.act || petOwned(S)[0] || null; renderPetModal(); $('#petModal').classList.remove('hidden'); }
function renderPetModal() {
  const own = S.pets.own, cap = petCap(S), left = petLeft(S), ag = petAgg(S), dc = left.length ? petDrawCost(S) : 0;
  const sel = petSel && own[petSel] ? petSel : null, p = sel && own[sel], cand = S.pets.cand && S.pets.cand.id === sel ? S.pets.cand : null;
  const fxLine = q => `<span style="color:${PET_COL[q.r]}">${t('rar.' + q.r)} · ${petFxText(q.k, petVal(q))}</span>`;
  const pot = petPot(S);
  $('#petWin').innerHTML = `<div class="evh"><b>${t('pet.title')} ${Object.keys(own).length}/${PETS.length}</b><span>${t('pet.pot')} ${goldIc} <b>${fmt(pot)}</b></span></div>
    <div class="petpot"><span>${t('pet.potRate', { n: fmt(S.pets.ppm || 0) })}</span><button class="mini" data-p="dep" ${S.gold > 0 ? '' : 'disabled'} title="${t('pet.depT')}">${t('pet.dep', { n: fmt(S.gold) })}</button></div>
    <div class="qx">${t('pet.desc', { c: cap, f: cap * 2 })}</div>
    <div class="petdraw">${left.length ? `<button class="big sm ${pot >= dc ? '' : 'off'}" data-p="draw" ${pot >= dc ? '' : 'disabled'}>${t('pet.draw')} ${goldIc} ${fmt(dc)}</button><span>${t('pet.drawNote', { n: left.length })}</span>` : `<span>${t('pet.all')}</span>`}</div>
    ${Object.keys(own).length ? (() => { const canAll = Object.values(own).some(q => q.lv < cap && pot >= petLvCost(S, q.lv)); return `<div class="petall"><button class="mini ${canAll ? 'hot' : ''}" data-p="lvAll" ${canAll ? '' : 'disabled'}>${t('pet.lvAll')}</button><span>${t('pet.lvAllD')}</span></div>`; })() : ''}
    <div class="petsum">${PET_FX_KEYS.filter(k => ag[k] > 0).map(k => `<em>${petFxText(k, ag[k])}</em>`).join('') || `<span class="mut2">${t('pet.none')}</span>`}</div>
    <div class="petgrid">${PETS.map(id => { const q = own[id]; return q ? `<div class="pcell ${id === sel ? 'on' : ''} ${S.pets.act === id ? 'act' : ''}" data-ps="${id}" style="border-color:${PET_COL[q.r]}" title="${t('pet.n.' + id)}"><img class="px" src="assets/pet/${id}.png"><i>Lv.${q.lv}</i></div>` : `<div class="pcell none" title="?"><img class="px" src="assets/pet/${id}.png"><i>?</i></div>`; }).join('')}</div>
    ${p ? `<div class="petdet"><img class="px" src="assets/pet/${sel}.png"><div class="pd">
      <b>${t('pet.n.' + sel)} <span class="mut2">Lv.${p.lv}/${cap}</span></b>
      <div>${fxLine(p)}${p.lv < PET_MAX ? ` <span class="mut2">→ Lv.${PET_MAX} ${petFxText(p.k, petVal({ ...p, lv: PET_MAX }))}</span>` : ''}</div>
      <div class="pbtn"><button class="mini ${p.lv < cap && pot >= petLvCost(S, p.lv) ? 'hot' : ''}" data-p="lv" ${p.lv < cap ? '' : 'disabled'} title="${t('pet.lvT')}">${p.lv >= cap ? (p.lv >= PET_MAX ? 'MAX' : t('pet.capped', { f: (p.lv + 1) * 2 })) : t('pet.lvUp') + ' ' + goldIc + ' ' + fmt(petLvCost(S, p.lv))}</button>
        <button class="mini" data-p="roll" ${pot >= petRollCost(S) ? '' : 'disabled'}>${t('pet.roll')} ${goldIc} ${fmt(petRollCost(S))}</button>
        ${S.pets.act === sel ? `<span class="pact">${t('pet.acting')}</span>` : `<button class="mini" data-p="act">${t('pet.act')}</button>`}</div>
      ${petAutoHtml(sel, p)}
      ${cand ? `<div class="pcand">${t('pet.cand')} ${fxLine({ ...cand, lv: p.lv })}<button class="mini hot" data-p="take">${t('pet.take')}</button><button class="mini" data-p="keep">${t('pet.keep')}</button></div>` : ''}
    </div></div>` : ''}
    <button class="mini wide" data-p="close">${t('ui.close')}</button>`;
  const lb = $('#petWin [data-p="lv"]');
  if (lb && p && p.lv < cap) holdRepeat(lb, () => { if (!petLevelUp(S, sel)) return false; st = stats(S); const q = S.pets.own[sel]; lb.innerHTML = q.lv >= petCap(S) ? 'MAX' : t('pet.lvUp') + ' ' + goldIc + ' ' + fmt(petLvCost(S, q.lv)); return true; }, n => { if (n) { save(S); renderPetModal(); $('#petBox').dataset.sig = ''; renderPetBox(); } });
}
function bindPets() {
  $('#petBox').addEventListener('click', e => { if (e.target.closest('[data-p="open"]')) openPetModal(); });
  $('#petModal').onclick = e => { if (e.target.id === 'petModal') { $('#petModal').classList.add('hidden'); petAutoStop(); } };
  holdDelegate($('#petWin'), '[data-p="draw"]', () => { const r = petDraw(S); if (!r) return false; petSel = r.id; addLog('<b>' + t('pet.got', { p: t('pet.n.' + r.id) }) + '</b> ' + t('rar.' + r.r) + ' · ' + petFxText(r.k, petVal(r))); st = stats(S); renderPetModal(); return true; }, n => { if (n) { toast(t('pet.drawN', { n })); $('#petBox').dataset.sig = ''; renderPetBox(); } });
  $('#petWin').addEventListener('change', e => { const el = e.target.closest('[data-pa]'); if (!el || !petSel) return; const pr = petAutoPref[petSel] || (petAutoPref[petSel] = { k: 'any', r: 0 }); if (el.dataset.pa === 'k') pr.k = el.value; else pr.r = +el.value; renderPetModal(); });
  $('#petWin').addEventListener('click', e => { const c = e.target.closest('[data-ps]'); if (c) { if (petAuto && petAuto.id !== c.dataset.ps) petAutoStop(); petSel = c.dataset.ps; renderPetModal(); return; }
    const b = e.target.closest('[data-p]'); if (!b || b.disabled) return; const a = b.dataset.p;
    if (a === 'close') { $('#petModal').classList.add('hidden'); petAutoStop(); return; }
    if (a === 'draw') { const r = petDraw(S); if (r) { petSel = r.id; addLog('<b>' + t('pet.got', { p: t('pet.n.' + r.id) }) + '</b> ' + t('rar.' + r.r) + ' · ' + petFxText(r.k, petVal(r))); toast(t('pet.got', { p: t('pet.n.' + r.id) })); } }
    else if (a === 'astart') { if (!petAuto) { const pr = petAutoPref[petSel]; petAuto = { id: petSel, k: pr.k, r: pr.r, rolls: 0, spent: 0, timer: null }; renderPetModal(); petAutoTick(); } return; }
    else if (a === 'astop') { petAutoStop(); return; }
    else if (a === 'lvAll') { const n = petLevelUpAll(S); if (n) { addLog(t('pet.lvAllLog', { n })); toast(t('pet.lvAllLog', { n })); } }
    else if (a === 'roll') petRoll(S, petSel);
    else if (a === 'dep') { const g = petDeposit(S); if (g) addLog(t('pet.depLog', { n: fmt(g) })); }
    else if (a === 'take') petKeep(S, true);
    else if (a === 'keep') petKeep(S, false);
    else if (a === 'act') petSetAct(S, petSel);
    else return;
    st = stats(S); save(S); renderPetModal(); $('#petBox').dataset.sig = ''; renderPetBox(); });
}
const cosFxTxt = id => { const f = cosFxOf(id); return f ? t('cos.fx.' + f.k, { v: f.v }) : ''; };
function openCosModal() { renderCosModal(); $('#cosModal').classList.remove('hidden'); drawCosPv(); }
// 옷장 미리보기: 커서를 올린 코스튬을 입혀서 보여 주고, 벗어나면 지금 모습으로 돌아온다
function drawCosPv(ov) { const cv = $('#cosPv'); if (!cv) return; const x = cv.getContext('2d'); x.imageSmoothingEnabled = false; x.clearRect(0, 0, 96, 96); for (const k of heroLayers(S.cls, ov)) { const im = A[k]; if (im) x.drawImage(im, 0, 0, 32, 32, 0, 0, 96, 96); }
  const n = $('#cosPvN'); if (n) n.textContent = ov ? (COS_BY_ID[ov.v] ? t('cos.n.' + ov.v) : ov.v === 'auto' ? t('slot.' + ov.slot) + ' · ' + t(ov.slot === 'hair' || ov.slot === 'offhand' ? 'cos.none' : 'cos.auto') : ov.v === 'hide' ? t('slot.' + ov.slot) + ' · ' + t('cos.hide') : t('slot.' + ov.slot) + ' · ' + t('cos.tier', { n: +ov.v.slice(1) + 1 })) : t('cos.pvNow'); }
function renderCosModal() {
  const c = S.cls || 'war';
  const baseSrc = (() => { const b = lookOf(S, 'base'); return b && b !== 'auto' ? 'cos/' + b : 'cls/' + c; })();
  const thumb = (slot, v) => slot === 'hair' && v !== 'auto' ? `<span class="cstk"><img class="px" src="assets/${baseSrc}.png"><img class="px" src="assets/cos/${v}.png"></span>` : v === 'auto' ? (slot === 'base' ? `<img class="px" src="assets/cls/${c}.png">` : `<span class="ctxt">${t(slot === 'hair' || slot === 'offhand' ? 'cos.none' : 'cos.auto')}</span>`) : v === 'hide' ? `<span class="ctxt">${t('cos.hide')}</span>` : `<img class="px" src="assets/${v[0] === 't' && /^t\d$/.test(v) ? itemDoll(slot, +v.slice(1), c) : 'cos/' + v}.png">`;
  $('#cosWin').innerHTML = `<div class="evh"><b>${t('cos.title')}</b><span>${t('cos.count', { n: cosCount(S), m: COSTUMES.length })}</span></div><div class="cosfx">${(() => { const b = cosBonus(S), tot = COSTUMES.filter(z => !z.free).length; return `<b>${t('cos.fxHead', { n: b.n, m: tot })}</b> ${t('cos.fx.atk', { v: b.atk })} · ${t('cos.fx.hp', { v: b.hp })} · ${t('cos.fx.def', { v: b.def })}<span>${t('cos.fxRule')}</span>`; })()}</div><div class="cospv"><canvas id="cosPv" width="96" height="96"></canvas><div class="cospvt"><b id="cosPvN">${t('cos.pvNow')}</b><span>${t('cos.pvHint')}</span></div></div><div class="qx">${t('cos.desc')}</div>
    ${COS_SLOTS.map(slot => `<div class="cosrow"><b>${t('slot.' + slot)}</b><div class="coslist">${lookOptions(S, slot).map(v => `<button class="cosopt ${lookOf(S, slot) === v ? 'on' : ''} ${COS_BY_ID[v] ? 'sp' : ''}" data-cs="${slot}" data-cv="${v}" title="${COS_BY_ID[v] ? t('cos.n.' + v) + (cosFxTxt(v) ? ' · ' + cosFxTxt(v) : '') : ''}">${thumb(slot, v)}</button>`).join('')}</div></div>`).join('')}
    <button class="mini wide" data-csa="close">${t('ui.close')}</button>`;
}
// 여러 원정·상자를 한 번에 받았을 때 보상을 합쳐서 보여 준다
function showBulkReward(title, tot) {
  const rows = []; if (tot.shards) rows.push([t('rw.shards', { n: fmtN(tot.shards) }), null]); if (tot.ess) rows.push([t('rw.ess', { n: fmtN(tot.ess) }), null]); if (tot.dust) rows.push([t('rune.dustN', { n: fmtN(tot.dust) }), null]);
  const g = (tot.gear || []).slice().sort((a, b) => b.r - a.r || cgScore(b) - cgScore(a)); if (g.length) { const by = {}; for (const it of g) by[it.r] = (by[it.r] || 0) + 1; rows.push(['<b>' + t('cg.n', { n: g.length }) + '</b> · ' + Object.keys(by).sort((a, b) => b - a).map(r => `<span style="color:${CG_COL[r]}">${t('rar.' + r)} ${by[r]}</span>`).join(' · '), null]); for (const it of g.slice(0, 12)) rows.push([cgName(it) + ' <i>' + t('rar.' + it.r) + '</i>', null]); if (g.length > 12) rows.push([t('ss.more', { n: g.length - 12 }), null]); }
  for (const c of tot.cos || []) rows.push(['<b class="hi">' + t('cos.got', { c: t('cos.n.' + c) }) + '</b>', null]);
  showReward(title, rows);
}
function bindCompExtras() {
  $('#expBox').addEventListener('click', e => { const b = e.target.closest('[data-x]'); if (!b) return; const i = +b.dataset.i, a = b.dataset.x;
    if (a === 'alldi') return;
    if (a === 'bag') openCgModal();
    else if (a === 'send') openExpModal(i);
    else if (a === 'sendAll') { const n = expSendAll(S, expSel.di); if (n) { addLog('<b>' + t('exp.sentAll', { n, h: EXP_DUR[expSel.di] }) + '</b>'); save(S); } }
    else if (a === 'rushAll' || a === 'claimAll') { if (a === 'rushAll') { const r = shopBuy(S, 'rushAll'); if (!r) return; addLog(t('exp.rushAllLog', { n: fmtN(r.cost) })); } const tot = expClaimAll(S); if (tot.n) { showBulkReward(t('exp.resultN', { n: tot.n }), tot); addLog('<b>' + t('exp.log') + ' ×' + tot.n + '</b> · ' + t('rw.shards', { n: fmtN(tot.shards) }) + ' · ' + t('cg.n', { n: tot.gear.length }) + (tot.cos.length ? ' · ' + tot.cos.map(c => t('cos.got', { c: t('cos.n.' + c) })).join(', ') : '')); } st = stats(S); save(S); }
    else if (a === 'rush') { if (shopBuy(S, 'rush', i)) { addLog(t('exp.rushLog')); save(S); } }
    else if (a === 'recall') { if (expArm !== i) { expArm = i; b.textContent = t('exp.recallAgain'); setTimeout(() => { expArm = -1; $('#expBox').dataset.sig = ''; renderExped(); }, 3000); return; } expArm = -1; expRecall(S, i); save(S); }
    else if (a === 'claim') { const r = expClaim(S, i); if (r) { const rows = [[t('rw.shards', { n: r.shards }), null], [t('rw.ess', { n: r.ess }), null]]; if (r.dust) rows.push([t('rune.dustN', { n: r.dust }), null]); for (const it of r.gear) rows.push([cgName(it) + ' <i>' + t('rar.' + it.r) + '</i>', null]); if (r.cos && r.cos !== 'dup') rows.push(['<b class="hi">' + t('cos.got', { c: t('cos.n.' + r.cos) }) + '</b>', null]); showReward(t('exp.result'), rows); addLog('<b>' + t('exp.log') + '</b> · ' + t('rw.shards', { n: r.shards }) + ' · ' + t('cg.n', { n: r.gear.length }) + (r.cos && r.cos !== 'dup' ? ' · ' + t('cos.got', { c: t('cos.n.' + r.cos) }) : '')); st = stats(S); save(S); } }
    $('#expBox').dataset.sig = ''; renderExped(); buildComps(); });
  $('#expBox').addEventListener('change', e => { if (e.target.dataset.x === 'alldi') { expSel.di = +e.target.value; $('#expBox').dataset.sig = ''; renderExped(); } });
  $('#expWin').addEventListener('click', e => { const d = e.target.closest('[data-xd],[data-xc],[data-xa]'); if (!d) return;
    if (d.dataset.xd != null) expSel.di = +d.dataset.xd;
    else if (d.dataset.xc) { const id = d.dataset.xc, k = expSel.ids.indexOf(id); if (k >= 0) expSel.ids.splice(k, 1); else if (expSel.ids.length < EXP_SIZE) expSel.ids.push(id); }
    else if (d.dataset.xa === 'auto') expSel.ids = expAutoPick(S);
    else if (d.dataset.xa === 'close') { $('#expModal').classList.add('hidden'); return; }
    else if (d.dataset.xa === 'go') { if (expStart(S, expSel.slot, expSel.ids, expSel.di)) { addLog('<b>' + t('exp.sent', { h: EXP_DUR[expSel.di] }) + '</b>'); save(S); $('#expModal').classList.add('hidden'); $('#expBox').dataset.sig = ''; renderExped(); buildComps(); } return; }
    renderExpModal(); });
  $('#cgWin').addEventListener('click', e => { const b = e.target.closest('[data-cga]'); if (!b || b.disabled) return; const a = b.dataset.cga;
    if (a === 'close') { $('#cgModal').classList.add('hidden'); return; }
    if (a === 'toggle') { S.cgAuto = b.checked; if (S.cgAuto) { const n = cgAutoEquip(S); cgTakeMoved(); if (n) toast(t('cg.autoLog', { n })); } }
    if (a === 'auto') { const n = cgAutoEquip(S); cgTakeMoved(); toast(t('cg.autoLog', { n })); }
    else if (a === 'merge') { const n = cgMerge(S); toast(t('cg.mergeLog', { n })); }
    else if (a === 'dis') { const r = cgDismantle(S, x => x.r <= 1); toast(t('cg.disLog', { n: r.n, s: r.shards })); }
    st = stats(S); save(S); renderCgModal(); $('#expBox').dataset.sig = ''; renderExped(); buildComps(); });
  $('#cosBtn').onclick = openCosModal;
  $('#soulBtn').onclick = openSoulModal;
  $('#cosWin').addEventListener('click', e => { const b = e.target.closest('[data-cs],[data-csa]'); if (!b) return; if (b.dataset.csa) { $('#cosModal').classList.add('hidden'); return; } if (setLook(S, b.dataset.cs, b.dataset.cv)) { save(S); renderCosModal(); drawCosPv(); drawDoll(); } });
  $('#cosWin').addEventListener('mouseover', e => { const b = e.target.closest('[data-cs]'); if (b) drawCosPv({ slot: b.dataset.cs, v: b.dataset.cv }); });
  $('#cosWin').addEventListener('mouseleave', () => drawCosPv());
  $('#cosWin').addEventListener('mouseout', e => { const b = e.target.closest('[data-cs]'); if (b && !b.contains(e.relatedTarget)) drawCosPv(); });
  for (const m of ['expModal', 'cgModal', 'cosModal']) $('#' + m).onclick = e => { if (e.target.id === m) $('#' + m).classList.add('hidden'); };
}
function buildComps() {
  renderExped();
  // 픽업 배너
  const bs = $('#bannerSel');
  bs.innerHTML = [['all', t('ui.all')], ...CLASS_IDS.map(c => [c, t('ui.pickup', { c: CLASSES[c].name })])].map(([k, n]) => `<button class="mini ${S.banner === k ? 'on' : ''}" data-b="${k}">${n}</button>`).join('');
  for (const b of bs.children) b.onclick = () => { S.banner = b.dataset.b; save(S); buildComps(); };
  // 동료 조각
  $('#shardLine').innerHTML = t('ui.shardLine', { n: `<b>${fmt(S.shards || 0)}</b>` }); $('#shardLine').title = t('ui.shardTip', { g: SHARD_GAIN.map((v, i) => C_RARITY[i].name + ' ' + v).join(' · ') });
  { const canUp = Object.entries(S.comp || {}).some(([id, o]) => COMP_BY_ID[id] && (o.lv || 0) < CLV_MAX && (S.shards || 0) >= compLvCost(COMP_BY_ID[id], o.lv || 0)); $('#lvAll').disabled = !canUp; }
  // 보유 효과 합계
  const os = ownSummary(S);
  const owned = Object.keys(S.comp).length;
  $('#ownsum').innerHTML = `<div>${t('ui.ownEffects', { a: owned, b: COMPANIONS.length })}</div>` +
    (owned ? Object.entries(os).map(([k, v]) => `<b>${effTxt(k, v)}</b>`).join(' · ') : `<span>${t('ui.none')}</span>`);
  // 파티
  const tm = $('#team');
  tm.innerHTML = '';
  const tmx = teamMax(S);
  for (let i = 0; i < TEAM_MAX; i++) {
    const id = S.team[i];
    const d = document.createElement('div');
    if (i >= tmx) { d.className = 'tslot lock'; d.title = t('ui.team5Lock', { f: TEAM5_FLOOR }); d.innerHTML = `<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/></svg><div class="n">${t('ui.team5Short', { f: TEAM5_FLOOR })}</div>`; tm.appendChild(d); continue; }
    if (id && COMP_BY_ID[id]) {
      const c = COMP_BY_ID[id], cs = S.comp[id];
      d.className = 'tslot on';
      d.style.borderColor = C_RARITY[c.r].color;
      d.innerHTML = `<img class="px" src="${compSrc(id)}"><div class="n">${c.name}</div><div class="e">${effTxt(c.team.k, teamValue(S, c, cs.aw))}</div>${compSyn(S, c) ? `<div class="syn">${t(c.r === 5 ? 'ui.synAll' : 'ui.synOn')}</div>` : ''}${onExped(S, id) ? `<div class="syn" style="background:#3a8f6a">${t('exp.away')}</div>` : ''}${MR_POW[id] ? `<div class="syn mrsyn">${t('mrp.short', { l: mrpLv(S, id) })}</div>` : ''}`;
      d.onclick = () => openComp(id);
    } else { d.className = 'tslot'; d.textContent = t('ui.emptySlot'); }
    tm.appendChild(d);
  }
  // 프리셋
  const pr = $('#presets');
  pr.innerHTML = '';
  for (let i = 0; i < PRESET_MAX; i++) {
    const p = (S.presets || [])[i];
    const d = document.createElement('div');
    d.className = 'preset' + (p && JSON.stringify(p.team) === JSON.stringify(S.team) ? ' on' : '');
    d.innerHTML = `<div class="pn"><span class="pnt">${p && p.name ? p.name : t('ui.preset', { n: i + 1 })}</span>${p ? `<button class="pren" data-a="ren" title="${t('ui.presetRen')}"><svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5l2 2L6 12l-3 1 1-3z"/><path d="M10 4l2 2"/></svg></button>` : ''}</div>
      <div class="pm">${p && p.team.length ? p.team.map(id => `<img class="px" src="${compSrc(id)}" title="${COMP_BY_ID[id]?.name || ''}">`).join('') : `<span>${t('ui.empty')}</span>`}</div>
      <div class="pb"><button class="mini" data-a="load" ${p ? '' : 'disabled'}>${t('ui.load')}</button><button class="mini" data-a="save">${t('ui.saveParty')}</button></div>`;
    const rb = d.querySelector('[data-a="ren"]'); if (rb) rb.onclick = e => { e.stopPropagation(); const pn = d.querySelector('.pn'); const cur = S.presets[i].name || '';
      pn.innerHTML = `<input class="pinp" maxlength="24" placeholder="${t('ui.preset', { n: i + 1 })}">`; const inp = pn.querySelector('input'); inp.value = cur; inp.focus(); inp.select(); let done = false;
      const fin = ok => { if (done) return; done = true; if (ok && renamePreset(S, i, inp.value)) save(S); buildComps(); };
      inp.onkeydown = ev => { if (ev.key === 'Enter') fin(true); else if (ev.key === 'Escape') fin(false); }; inp.onblur = () => fin(true); };
    d.querySelector('[data-a="load"]').onclick = () => { if (applyPreset(S, i)) { save(S); addLog(t('ui.presetLoaded', { p: `<b>${S.presets[i].name || t('ui.preset', { n: i + 1 })}</b>` })); buildComps(); } };
    d.querySelector('[data-a="save"]').onclick = () => { savePreset(S, i); save(S); addLog(t('ui.presetSaved', { p: `<b>${S.presets[i].name || t('ui.preset', { n: i + 1 })}</b>` })); buildComps(); };
    pr.appendChild(d);
  }
  // 필터: 직업 / 등급 / 효과(특성) / 보유 / 정렬
  const chip = (group, k, n, extra = '') => `<button class="mini ${CF[group] === k ? 'on' : ''}" data-g="${group}" data-k="${k}" ${extra}>${n}</button>`;
  const effKeys = [...new Set(COMPANIONS.flatMap(c => [c.team.k, c.own.k]))];
  $('#filt').innerHTML =
    `<div class="frow"><span>${t('ui.f.class')}</span>${chip('cls', 'all', t('ui.all'))}${CLASS_IDS.map(c => chip('cls', c, CLASSES[c].name, `style="--cc:${CLASSES[c].color}"`)).join('')}</div>` +
    `<div class="frow"><span>${t('ui.f.rarity')}</span>${chip('r', 'all', t('ui.all'))}${C_RARITY.map((r, i) => chip('r', String(i), r.name, `style="--cc:${r.color}"`)).join('')}</div>` +
    `<div class="frow"><span>${t('ui.f.own')}</span>${chip('own', 'all', t('ui.all'))}${chip('own', 'yes', t('ui.f.yes'))}${chip('own', 'no', t('ui.f.no'))}${chip('own', 'team', t('ui.f.team'))}</div>` +
    `<div class="frow"><span>${t('ui.f.trait')}</span><select id="cfEff"><option value="all">${t('ui.f.allTraits')}</option>${effKeys.map(k => `<option value="${k}" ${CF.eff === k ? 'selected' : ''}>${STAT_LABEL[k][0]}</option>`).join('')}</select>
      <select id="cfSort"><option value="rarity">${t('ui.s.rarity')}</option><option value="aw">${t('ui.s.aw')}</option><option value="power">${t('ui.s.power')}</option><option value="name">${t('ui.s.name')}</option></select></div>`;
  $('#cfSort').value = CF.sort;
  for (const b of $('#filt').querySelectorAll('button')) b.onclick = () => { CF[b.dataset.g] = b.dataset.k; buildComps(); };
  $('#cfEff').onchange = e => { CF.eff = e.target.value; buildComps(); };
  $('#cfSort').onchange = e => { CF.sort = e.target.value; buildComps(); };
  // 카드
  const box = $('#comps');
  box.innerHTML = '';
  const sorters = {
    rarity: (a, b) => (!!S.comp[b.id] - !!S.comp[a.id]) || b.r - a.r,
    aw: (a, b) => ((S.comp[b.id]?.aw ?? -1) - (S.comp[a.id]?.aw ?? -1)) || b.r - a.r,
    power: (a, b) => teamValue(S, b, S.comp[b.id]?.aw || 0) / b.team.v * b.r - teamValue(S, a, S.comp[a.id]?.aw || 0) / a.team.v * a.r || b.r - a.r,
    name: (a, b) => a.name.localeCompare(b.name, 'ko'),
  };
  const list = COMPANIONS.filter(c =>
    (CF.cls === 'all' || c.cls === CF.cls) &&
    (CF.r === 'all' || c.r === +CF.r) &&
    (CF.eff === 'all' || c.team.k === CF.eff || c.own.k === CF.eff) &&
    (CF.own === 'all' || (CF.own === 'yes' ? !!S.comp[c.id] : CF.own === 'no' ? !S.comp[c.id] : S.team.includes(c.id)))
  ).sort(sorters[CF.sort] || sorters.rarity);
  $('#compCount').textContent = t('ui.shown', { n: list.length, o: list.filter(c => S.comp[c.id]).length });
  if (!list.length) box.innerHTML = `<div class="bagempty" style="grid-column:1/-1">${t('ui.noMatch')}</div>`;
  for (const c of list) {
    const own = S.comp[c.id];
    const rr = C_RARITY[c.r], cl = CLASSES[c.cls];
    const d = document.createElement('div');
    d.className = 'cc' + (own ? '' : ' none') + (S.team.includes(c.id) ? ' inteam' : ''); if (own) d.title = c.name;
    d.style.borderColor = own ? rr.color + '88' : '';
    d.innerHTML = `<span class="cr" style="background:${rr.color}">${rr.name}</span>${own && own.aw ? `<span class="aw">+${own.aw}</span>` : ''}${own && own.lv ? `<span class="clv">Lv.${own.lv}</span>` : ''}
      <img class="px" src="${compSrc(c.id)}"><span class="cl" style="background:${cl.color}">${cl.name}</span><div class="cn">${own ? c.name : '???'}</div><div class="ce">${STAT_LABEL[c.team.k][0]}</div>`;
    d.onclick = () => openComp(c.id);
    box.appendChild(d);
  }
}
function openComp(id) {
  const c = COMP_BY_ID[id], own = S.comp[id], rr = C_RARITY[c.r], cl = CLASSES[c.cls];
  const aw = own ? own.aw : 0, lv = own ? own.lv || 0 : 0;
  const inTeam = S.team.includes(id);
  const known = !!own;
  const el = $('#compDetail');
  el.innerHTML = `
    <div class="cd-top"><div class="pic" style="border-color:${rr.color}"><img class="px" src="${compSrc(id)}" style="${known ? '' : 'filter:brightness(0) opacity(.5)'}"></div>
      <div><div class="nm" style="color:${rr.color}">${known ? c.name : t('ui.unknown')}</div>
        <div class="cd-tags"><span style="background:${rr.color}">${rr.name}</span><span style="background:${cl.color}">${cl.name}</span></div>
        <div style="font-size:10px;color:var(--muted)">${t('ui.awaken', { a: aw, b: AWAKEN_MAX, n: own ? own.n : 0 })}</div>
        <div class="awbar">${Array.from({ length: AWAKEN_MAX }, (_, i) => `<i class="${i < aw ? 'on' : ''}"></i>`).join('')}</div></div></div>
    <div class="cd-row ${inTeam ? 'act' : ''}"><div class="h">${t('ui.teamEff')}</div><b>${effTxt(c.team.k, teamValue(S, c, aw))}</b>
      <div class="x">${c.r === 5 ? t('ui.synAll') : c.cls === S.cls ? t('ui.synOn') : t('ui.synOff', { c: cl.name })}</div>
      <div class="h" style="margin-top:3px">${t('ui.attack', { p: Math.round(compCoef(c, aw, lv) * 100), d: fmt(compCoef(c, aw, lv) * st.atk * (1 + st.raw.compP / 100)) })}</div></div>
    <div class="cd-row ${known ? 'act' : ''}"><div class="h">${t('ui.ownEff')}</div><b>${effTxt(c.own.k, ownValue(c, aw, lv))}</b></div>
    ${known ? `<div class="cd-row clvrow"><div class="h">${t('ui.clvHead', { l: lv, m: CLV_MAX })}</div>
      <div class="clvbar"><i style="width:${lv / CLV_MAX * 100}%"></i></div>
      <div class="x">${t('ui.clvDesc', { p: Math.round(CLV_STEP * 100), t: Math.round(CLV_STEP * lv * 100) })}</div>
      <button class="mini wide" id="cdLv"></button></div>` : ''}
    ${[[compPassive(c), CSK_AW_P, 'ui.cPassive'], [compActive(c), CSK_AW_A, 'ui.cActive']].map(([sk, need, lab]) => { const open = known && aw >= need; return `<div class="cd-row csk ${open && inTeam ? 'act' : ''} ${open ? '' : 'lock'}"><div class="h">${t(lab, { n: need })}</div><b>${compSkillName(sk)}</b><div class="x">${compSkillDesc(sk)}</div><div class="x">${open ? (inTeam ? t('ui.cOn') : t('ui.cOff')) : t('ui.cLocked', { n: need })}</div></div>`; }).join('')}
        <div class="grow" style="width:100%">
      ${known ? `<button class="big sm" id="cdTeam">${inTeam ? t('ui.teamOut') : (S.team.length >= teamMax(S) ? t('ui.teamFull') : t('ui.teamAdd'))}</button>` : ''}
      <button class="mini wide" id="cdClose">${t('ui.close')}</button></div>`;
  if (known && MR_POW[id]) { const mr = document.createElement('div'); mr.className = 'cd-row mrprow' + ((S.team || []).includes(id) && !onExped(S, id) ? ' act' : ''); mr.innerHTML = mrpHtml(id); el.querySelector('.cd-row').after(mr); }
  if (known) { const gr = document.createElement('div'); gr.className = 'cd-row cgrow'; gr.innerHTML = cgSlotsHtml(id); el.querySelector('.grow').before(gr); gr.onclick = e => { const b = e.target.closest('[data-cg]'); if (!b) return; const k = b.dataset.cg; if (b.dataset.off) { if (!cgUnequip(S, id, k)) toast(t('cg.bagFull')); } else { const i = +b.dataset.bi; if (i >= 0) cgEquip(S, id, i); } st = stats(S); save(S); openComp(id); }; }
  if (known && onExped(S, id)) { const x = el.querySelector('.cd-tags'); if (x) x.insertAdjacentHTML('beforeend', `<span style="background:#3a8f6a">${t('exp.away')}</span>`); }
  $('#compModal').classList.remove('hidden');
  $('#cdClose').onclick = () => $('#compModal').classList.add('hidden');
  const tb = $('#cdTeam');
  if (tb) {
    if (!inTeam && (S.team.length >= teamMax(S) || onExped(S, id))) tb.disabled = true;
    if (!inTeam && onExped(S, id)) tb.textContent = t('exp.away');
    tb.onclick = () => { toggleTeam(S, id); save(S); buildComps(); openComp(id); };
  }
  const lb = $('#cdLv');
  if (lb) {
    const paint = () => {
      const l2 = S.comp[id].lv || 0, max = l2 >= CLV_MAX, cost = max ? 0 : compLvCost(c, l2);
      lb.innerHTML = max ? t('ui.clvMax') : t('ui.clvBtn', { c: `<b>${fmt(cost)}</b>`, n: fmt(S.shards || 0) });
      lb.classList.toggle('no', max || (S.shards || 0) < cost);
    };
    paint();
    holdRepeat(lb, () => { if (!compLevelUp(S, id)) return false; st = stats(S); paint(); return true; },
      n => { if (n) { addLog(t('ui.clvUp', { c: `<b style="color:${rr.color}">${c.name}</b>`, l: S.comp[id].lv })); buildComps(); openComp(id); } });
  }
}
function showGacha(results) {
  $('#gTitle').textContent = results.length > 1 ? t('ui.summon10Result') : t('ui.summonResult');
  const best = Math.max(...results.map(r => r.c.r));
  $('#gResult').innerHTML = results.map((r, k) => {
    const rr = C_RARITY[r.c.r];
    const tag = r.isNew ? '<span class="gnew">NEW</span>' : r.shards ? `<span class="gnew" style="background:#8fe6ff">${t('ui.shardGain', { n: r.shards })}</span>` : `<span class="gnew" style="background:#ffc35c">${t('ui.awk', { n: r.aw })}</span>`;
    return `<div class="g ${r.c.r >= 2 ? 'hi' : ''}" style="border-color:${rr.color};--gc:${rr.color};animation-delay:${k * 90}ms"><span class="gr" style="background:${rr.color}">${rr.name}</span>${tag}<img class="px" src="${compSrc(r.c.id)}"><div class="gn">${r.c.name}</div></div>`;
  }).join('');
  $('#gAuto').classList.toggle('hidden', results.length < 10);
  $('#gachaModal').classList.remove('hidden');
  if (best >= 2) setTimeout(() => flash(C_RARITY[best].color, .5, .6), results.length * 90);
}
function doPull(ten) {
  const res = pull(S, ten);
  if (!res) { addLog(t('ui.noStones')); return; }
  save(S); buildComps(); showGacha(res);
  for (const r of res) if (r.c.r >= 2) addLog(t('ui.joined', { n: `<span style="color:${C_RARITY[r.c.r].color}">[${C_RARITY[r.c.r].name}] ${r.c.name}</span>` }));
}

// ================= 100회 · 연속 소환 =================
let auto = null;               // 진행 중인 연속 소환 상태
const AUTO_GAP = 500;
function autoReset(mode) {
  auto = { mode, n: 0, spent: 0, rar: C_RARITY.map(() => 0), newc: 0, awk: 0, shards: 0, hi: [], running: false, reason: '', timer: null, bought: 0 };
}
// 정지 등급: 예전 설정(UR 이상에서 정지 켜기/끄기)도 그대로 읽는다
function autoStopR(opt) { if (opt.stopR != null) return opt.stopR; return opt.stopUR ? 3 : -1; }
function autoBatch() {
  // 소환석이 모자라면 (옵션) 골드로 구매
  const opt = S.gachaOpt || {};
  if (S.stones < PULL10_COST && opt.autoBuy) {
    for (let g = 0; g < 20 && S.stones < PULL10_COST; g++) { if (!buyStone(S)) break; auto.bought += 10; }
  }
  const stopR = autoStopR(opt), reps = auto.mode === 'auto' && opt.batch === 100 ? 10 : 1;
  let stop = '';
  for (let k = 0; k < reps && !stop; k++) {
    if (S.stones < PULL10_COST && opt.autoBuy) for (let g = 0; g < 20 && S.stones < PULL10_COST; g++) { if (!buyStone(S)) break; auto.bought += 10; }
    if (S.stones < PULL10_COST) { if (k === 0) { auto.reason = 'stones'; return false; } stop = 'stones'; break; }
    const res = pull(S, true);
    if (!res) { stop = 'stones'; break; }
    auto.n += res.length; auto.spent += PULL10_COST;
    for (const r of res) {
      auto.rar[r.c.r]++;
      if (r.isNew) auto.newc++; else if (r.shards) auto.shards += r.shards; else auto.awk++;
      if (r.isNew || r.c.r >= 2) auto.hi.push(r);
      if (stopR >= 0 && r.c.r >= stopR) stop = r.c.r >= 5 ? 'mr' : r.c.r >= 4 ? 'lr' : 'ur';
      else if (opt.stopNew && r.isNew && !stop) stop = 'new';
    }
  }
  if (auto.hi.length > 60) auto.hi.splice(0, auto.hi.length - 60);
  if (stop) { auto.reason = stop; return false; }
  return true;
}
function autoRender() {
  if (!auto) return;
  $('#aTitle').textContent = auto.running ? t('ui.autoTitle') : t('ui.autoDone');
  $('#aCount').innerHTML = t('ui.aCount', { n: `<b>${fmtN(auto.n)}</b>`, c: fmtN(auto.spent), s: `<b>${fmtN(S.stones)}</b>` }) + (auto.bought ? ' · ' + t('ui.aBought', { n: fmtN(auto.bought) }) : '');
  $('#aRar').innerHTML = C_RARITY.map((r, i) => `<span style="border-color:${r.color};color:${r.color}">${r.name} <b>${auto.rar[i]}</b></span>`).join('');
  $('#aSum').textContent = [t('ui.aNew', { n: auto.newc }), t('ui.aAwk', { n: auto.awk }), t('ui.aShard', { n: auto.shards })].join(' · ');
  $('#aHi').innerHTML = auto.hi.slice().reverse().map(r => { const rr = C_RARITY[r.c.r]; return `<div class="g ${r.c.r >= 3 ? 'hi' : ''}" style="border-color:${rr.color};--gc:${rr.color}"><span class="gr" style="background:${rr.color}">${rr.name}</span>${r.isNew ? '<span class="gnew">NEW</span>' : ''}<img class="px" src="${compSrc(r.c.id)}" alt=""><div class="gn">${r.c.name}</div></div>`; }).join('') || `<div class="aempty">${t('ui.aNone')}</div>`;
  $('#aReason').textContent = auto.running ? '' : t('ui.aReason.' + (auto.reason || 'stop'));
  $('#aReason').classList.toggle('hi', ['ur', 'lr', 'mr', 'new'].includes(auto.reason));
  const b = $('#aStop'); b.textContent = auto.running ? t('ui.aStop') : t('ui.ok'); b.classList.toggle('armed', auto.running);
  $('#aRestart').classList.toggle('hidden', auto.running); $('#aMiniNow').classList.toggle('hidden', !auto.running);
  $('#aRestart').textContent = auto.mode === 'auto' ? t('ui.aRestart') : t('ui.pullAuto');
  $('#aOpt').classList.toggle('hidden', auto.mode !== 'auto');
}
// ---------- 가챠 모드: 연속 소환 중 팝업을 주소창 높이의 막대로 줄인다 (번쩍임·큰 연출 없음) ----------
const isMini = () => document.documentElement.classList.contains('gmini-on');
function enterMini() { document.documentElement.classList.add('gmini-on'); $('#autoModal').classList.add('hidden'); miniRender(); }
function exitMini() { document.documentElement.classList.remove('gmini-on'); if (auto) { autoRender(); $('#autoModal').classList.remove('hidden'); } }
function miniRender() {
  if (!auto) return; const run = auto.running, r = auto.rar;
  const hi = [3, 4, 5].map(i => r[i] ? `<b style="color:${C_RARITY[i].color}">${C_RARITY[i].name} ${r[i]}</b>` : '').filter(Boolean).join(' ');
  $('#gMiniTxt').innerHTML = (run ? t('gm.run') : t('ui.aReason.' + (auto.reason || 'stop'))) + ' · ' + t('gm.stones', { n: fmtN(S.stones) }) + ' · ' + t('gm.n', { n: fmtN(auto.n) }) + (hi ? ' · ' + hi : '');
  $('#gMiniDot').classList.toggle('on', run);
  $('#gMiniStop').textContent = run ? t('ui.aStop') : t('ui.aRestart'); $('#gMiniOpen').textContent = t('gm.open');
}
function autoFinish() {
  if (!auto) return;
  clearTimeout(auto.timer); auto.running = false;
  save(S); buildComps(); autoRender();
  if (isMini()) { miniRender(); if (auto.n) addLog('<b>' + t('ui.autoLog', { n: fmtN(auto.n) }) + '</b> ' + C_RARITY.map((r, i) => auto.rar[i] ? `<span style="color:${r.color}">${r.name}×${auto.rar[i]}</span>` : '').filter(Boolean).join(' ')); return; }
  if (auto.n) addLog('<b>' + t('ui.autoLog', { n: fmtN(auto.n) }) + '</b> ' + C_RARITY.map((r, i) => auto.rar[i] ? `<span style="color:${r.color}">${r.name}×${auto.rar[i]}</span>` : '').filter(Boolean).join(' '));
  const best = auto.hi.reduce((m, r) => Math.max(m, r.c.r), -1);
  if (best >= 5) banner(t('mr.got'), 'floor', 2200);
  if (best >= 3) flash(C_RARITY[best].color, .5, .6);
}
function autoTickPull() {
  if (!auto || !auto.running) return;
  const go = autoBatch();
  if (isMini()) miniRender(); else { autoRender(); render(); }
  if (auto.n % 50 === 0) save(S);
  if (!go) { autoFinish(); return; }
  auto.timer = setTimeout(autoTickPull, AUTO_GAP);
}
function startAuto() {
  autoReset('auto'); auto.running = true;
  $('#aMini').checked = !!S.gachaOpt.mini; $('#aBuy').checked = !!S.gachaOpt.autoBuy; $('#aStopR').value = String(autoStopR(S.gachaOpt)); $('#aBatch').value = String(S.gachaOpt.batch === 100 ? 100 : 10); $('#aNewc').checked = !!S.gachaOpt.stopNew;
  $('#autoModal').classList.remove('hidden');
  autoRender(); if (S.gachaOpt.mini) enterMini(); autoTickPull();
}
// ---------- 마일리지 교환 (원하는 LR·MR) ----------
function openMile() { renderMile(); $('#mileModal').classList.remove('hidden'); }
function renderMile() {
  const L = COMPANIONS.filter(c => c.r >= 4).sort((a, b) => b.r - a.r);
  $('#mileWin').innerHTML = `<div class="evh"><b>${t('mile.title')}</b><span>${t('mile.have', { n: fmtN(S.mile || 0) })}</span></div><div class="qx">${t('mile.desc', { a: fmtN(MILE_LR), b: fmtN(MILE_MR) })}</div>
    <div class="milelist">${L.map(c => { const cost = c.r >= 5 ? MILE_MR : MILE_LR, o = S.comp[c.id]; const rr = C_RARITY[c.r]; return `<div class="mrow" style="border-color:${rr.color}"><img class="px" src="${compSrc(c.id)}"><div class="t"><b style="color:${rr.color}">${rr.name} ${c.name}</b><span>${o ? t('ui.awaken', { a: o.aw, b: AWAKEN_MAX, n: o.n }) : t('mile.notOwned')}</span></div><button class="mini ${(S.mile || 0) >= cost ? 'hot' : ''}" data-mi="${c.id}" ${(S.mile || 0) >= cost ? '' : 'disabled'}>${fmtN(cost)}</button></div>`; }).join('')}</div>
    <button class="mini wide" data-ma="close">${t('ui.close')}</button>`;
}
// ---------- 소환석 상점 ----------
function buildStoneShop() {
  const box = $('#stoneShop'); if (!box) return;
  const sb = S.shopBuy || {}, nSlot = sb.expSlot || 0, keyLeft = shopKeyLeft(S), cosLeft = COSTUMES.filter(z => !z.free && !((S.cos || {}).own || []).includes(z.id));
  const nBtn = (id, n) => { const k = Math.min(n, Math.floor(S.stones / STONE_SHOP[id])); return k > 1 ? `<button class="mini" data-ssn="${id}" data-n="${k}" title="${t('ss.nT')}">×${k} <img src="assets/ui/stone.png" class="px i14" alt=""> ${fmtN(k * STONE_SHOP[id])}</button>` : ''; };
  const row = (id, title, desc, cost, ok, extra = '') => `<div class="ssrow"><div class="t"><b>${title}</b><span>${desc}</span></div>${extra}<button class="mini ${ok ? 'hot' : ''}" data-ss="${id}" ${ok ? '' : 'disabled'}><img src="assets/ui/stone.png" class="px i14" alt=""> ${cost}</button></div>`;
  const sig = [Math.floor(S.stones / 2000), keyLeft, nSlot, cosLeft.length, S.stones >= STONE_SHOP.costume, S.stones >= STONE_SHOP.key, nSlot < 2 && S.stones >= STONE_SHOP.expSlot[nSlot], getLang(), shopCos].join('|');
  if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  box.innerHTML = `<div class="ssh"><b>${t('ss.title')}</b><span>${t('ss.sub')}</span></div>` +
    row('gearBox', t('ss.gearBox'), t('ss.gearBox.d'), fmtN(STONE_SHOP.gearBox), S.stones >= STONE_SHOP.gearBox, nBtn('gearBox', 10)) +
    row('gearBoxHi', t('ss.gearBoxHi'), t('ss.gearBoxHi.d'), fmtN(STONE_SHOP.gearBoxHi), S.stones >= STONE_SHOP.gearBoxHi, nBtn('gearBoxHi', 10)) +
    row('key', t('ss.key'), t('ss.key.d', { n: keyLeft, m: STONE_SHOP.keyDaily }), fmtN(STONE_SHOP.key), keyLeft > 0 && S.stones >= STONE_SHOP.key) +
    (nSlot < EXP_MAX - 2 ? row('expSlot', t('ss.expSlot', { n: expCap(S) + 1 }), t('ss.expSlot.d'), fmtN(STONE_SHOP.expSlot[nSlot]), S.stones >= STONE_SHOP.expSlot[nSlot]) : '') +
    (cosLeft.length ? row('costume', t('ss.cos'), t('ss.cos.d', { n: cosLeft.length }), fmtN(STONE_SHOP.costume), S.stones >= STONE_SHOP.costume && !!shopCos && cosLeft.some(z => z.id === shopCos),
      (S.stones >= STONE_SHOP.costume ? `<button class="mini" data-ss="cosAll" title="${t('ss.cosAllT')}">${t('ss.cosAll', { n: Math.min(cosLeft.length, Math.floor(S.stones / STONE_SHOP.costume)) })} <img src="assets/ui/stone.png" class="px i14" alt=""> ${fmtN(Math.min(cosLeft.length, Math.floor(S.stones / STONE_SHOP.costume)) * STONE_SHOP.costume)}</button>` : '') + `<select data-sc="1"><option value="">${t('ss.cosPick')}</option>${cosLeft.map(z => `<option value="${z.id}" ${shopCos === z.id ? 'selected' : ''}>${t('slot.' + z.slot)} · ${t('cos.n.' + z.id)} (${cosFxTxt(z.id)})</option>`).join('')}</select>`) : '') +
    `<div class="qx">${t('ss.note')}</div>`;
}
let shopCos = '';
function bindStoneShop() {
  const box = $('#stoneShop'); if (!box) return;
  box.addEventListener('change', e => { if (e.target.dataset.sc) { shopCos = e.target.value; box.dataset.sig = ''; buildStoneShop(); } });
  holdDelegate(box, '[data-ss="gearBox"], [data-ss="gearBoxHi"], [data-ss="key"]', b => { const w = b.dataset.ss, r = shopBuy(S, w); if (!r) return false;
    if (r.gear) addLog('<b>' + t('ss.gearLog') + '</b> ' + cgName(r.gear) + ' <i>' + t('rar.' + r.gear.r) + '</i>'); else if (r.keys) addLog(t('ss.keyLog'));
    box.dataset.sig = ''; buildStoneShop(); render(); return true; }, n => { if (n) { save(S); $('#expBox') && ($('#expBox').dataset.sig = ''); } });
  box.addEventListener('click', e => { const bn = e.target.closest('[data-ssn]'); if (bn && !bn.disabled) { const res = shopBuyN(S, bn.dataset.ssn, +bn.dataset.n); if (res.length) { const gear = res.map(r => r.gear).filter(Boolean); showBulkReward(t('ss.boxN', { n: res.length }), { gear }); addLog('<b>' + t('ss.gearLog') + ' ×' + res.length + '</b> ' + gear.filter(g => g.r >= 4).map(g => cgName(g)).join(' ')); save(S); box.dataset.sig = ''; buildStoneShop(); render(); } return; }
    const b0 = e.target.closest('[data-ss="cosAll"]'); if (b0) { const r = shopBuy(S, 'cosAll'); if (r) { showBulkReward(t('ss.cosAllDone', { n: r.cosAll.length }), { cos: r.cosAll }); addLog('<b>' + t('ss.cosAllDone', { n: r.cosAll.length }) + '</b>'); shopCos = ''; save(S); box.dataset.sig = ''; buildStoneShop(); render(); } return; }
    const b = e.target.closest('[data-ss]'); if (!b || b.disabled) return; const w = b.dataset.ss;
    const r = shopBuy(S, w, w === 'costume' ? shopCos : undefined); if (!r) return;
    if (r.gear) addLog('<b>' + t('ss.gearLog') + '</b> ' + cgName(r.gear) + ' <i>' + t('rar.' + r.gear.r) + '</i>');
    else if (r.keys) addLog(t('ss.keyLog'));
    else if (r.expSlot) { addLog('<b>' + t('ss.slotLog', { n: r.expSlot }) + '</b>'); toast(t('ss.slotLog', { n: r.expSlot })); }
    else if (r.cos) { addLog('<b>' + t('cos.got', { c: t('cos.n.' + r.cos) }) + '</b>'); toast(t('cos.got', { c: t('cos.n.' + r.cos) })); shopCos = ''; }
    save(S); box.dataset.sig = ''; buildStoneShop(); render(); $('#expBox') && ($('#expBox').dataset.sig = ''); });
}
function pull100() {
  if (S.stones < PULL10_COST * 10) { addLog(t('ui.noStones')); return; }
  autoReset('100');
  const keep = S.gachaOpt; S.gachaOpt = { ...keep, stopUR: false, stopNew: false, autoBuy: false };   // 100회는 끝까지
  for (let k = 0; k < 10; k++) if (!autoBatch()) break;
  S.gachaOpt = keep;
  if (!auto.reason) auto.reason = 'done100';
  $('#aBatch').value = '100'; S.gachaOpt = { ...(S.gachaOpt || {}), batch: 100 };
  $('#autoModal').classList.remove('hidden');
  autoFinish();
}
function bindAutoPull() {
  $('#pull100').onclick = pull100;
  $('#gAuto').onclick = () => { $('#gachaModal').classList.add('hidden'); startAuto(); };
  $('#aRestart').onclick = startAuto;
  $('#aStop').onclick = () => { if (auto && auto.running) { auto.reason = 'stop'; autoFinish(); } else $('#autoModal').classList.add('hidden'); };
  const setOpt = (k, el) => { S.gachaOpt = { ...(S.gachaOpt || {}), [k]: el.checked }; save(S); };
  $('#aBuy').onchange = e => setOpt('autoBuy', e.target);
  $('#aMini').onchange = e => setOpt('mini', e.target);
  $('#aMiniNow').onclick = () => { if (auto) enterMini(); };
  $('#gMiniOpen').onclick = exitMini;
  $('#gMiniStop').onclick = () => { if (auto && auto.running) { auto.reason = 'stop'; autoFinish(); } else if (auto && auto.mode === 'auto') { startAuto(); } else exitMini(); };
  $('#aStopR').onchange = e => { S.gachaOpt = { ...(S.gachaOpt || {}), stopR: +e.target.value }; save(S); };
  $('#aBatch').onchange = e => { S.gachaOpt = { ...(S.gachaOpt || {}), batch: +e.target.value }; save(S); };
  $('#mileBtn').onclick = openMile;
  $('#mileWin').addEventListener('click', e => { const b = e.target.closest('[data-mi],[data-ma]'); if (!b || b.disabled) return; if (b.dataset.ma) { $('#mileModal').classList.add('hidden'); return; }
    const r = mileBuy(S, b.dataset.mi); if (r) { const c = r.c; addLog('<b>' + t('mile.log', { c: `<span style="color:${C_RARITY[c.r].color}">${c.name}</span>` }) + '</b>'); toast(t('mile.log', { c: c.name })); st = stats(S); save(S); buildComps(); render(); } renderMile(); });
  $('#mileModal').onclick = e => { if (e.target.id === 'mileModal') $('#mileModal').classList.add('hidden'); };
  $('#aNewc').onchange = e => setOpt('stopNew', e.target);
  window.addEventListener('pagehide', () => { if (auto && auto.running) { auto.running = false; save(S); } });
}

// ================= 꾹 누르기 연속 실행 (모바일식) =================
// 누르는 즉시 1회 → 0.38초 뒤부터 반복, 점점 빨라짐(최소 0.04초 간격).
// act() 가 false(골드/SP 부족, 만렙 등)를 돌려주면 즉시 멈춤.
// 손을 떼면 done(성공 횟수) 한 번만 호출 → 로그는 한 줄로 합치고, 저장도 떼는 순간 한 번 (누르는 동안엔 1초마다 중간 저장).
const HOLD_DELAY = 380, HOLD_START = 140, HOLD_MIN = 40, HOLD_ACCEL = 0.86;
let holdStopAll = null;
function holdRepeat(el, act, done) {
  let timer = null, n = 0, on = false, fromPointer = false, lastSave = 0;
  const finish = () => {
    if (!on) return;
    on = false; clearTimeout(timer); timer = null;
    el.classList.remove('holding');
    if (holdStopAll === finish) holdStopAll = null;
    if (n) save(S);
    if (done) done(n);
  };
  const once = () => {
    if (!act()) return false;
    n++;
    if (performance.now() - lastSave > 1000) { lastSave = performance.now(); save(S); }
    return true;
  };
  const loop = gap => {
    timer = setTimeout(() => {
      if (!on) return;
      if (!el.isConnected || !once()) { finish(); return; }
      loop(gap === HOLD_DELAY ? HOLD_START : Math.max(HOLD_MIN, gap * HOLD_ACCEL));
    }, gap);
  };
  const start = () => {
    if (holdStopAll) holdStopAll();
    on = true; n = 0; lastSave = performance.now();
    holdStopAll = finish;
    el.classList.add('holding');
    if (!once()) { finish(); return false; }
    return true;
  };
  el.addEventListener('pointerdown', e => {
    if (e.button !== 0 || el.disabled) return;
    fromPointer = true;
    if (start()) loop(HOLD_DELAY);
  });
  for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) el.addEventListener(ev, finish);
  // 포인터로 이미 처리했으면 뒤따르는 click 은 무시, 키보드(Enter/Space)로 누른 경우만 1회 실행
  el.addEventListener('click', () => {
    if (fromPointer) { fromPointer = false; return; }
    if (start()) finish();
  });
  el.addEventListener('contextmenu', e => e.preventDefault());
}
// 다시 그려지는 목록용 꾹 누르기: 버튼이 새로 그려져도 같은 data-* 로 다시 찾아 계속 실행
function holdDelegate(box, sel, run, done) {
  let key = null, timer = null, n = 0, until = 0;
  const keyOf = b => b.tagName + Object.entries(b.dataset).map(([k, v]) => `[data-${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}="${CSS.escape(v)}"]`).join('');
  const fire = () => { const b = box.querySelector(key); return !!(b && !b.disabled && run(b)); };
  const stop = () => { if (!key) return; clearTimeout(timer); timer = null; key = null; until = performance.now() + 500; if (holdStopAll === stop) holdStopAll = null; const k = n; n = 0; if (k) save(S); if (done) done(k); };
  const loop = gap => { timer = setTimeout(() => { if (!key) return; if (!fire()) { stop(); return; } n++; loop(gap === HOLD_DELAY ? HOLD_START : Math.max(HOLD_MIN, gap * HOLD_ACCEL)); }, gap); };
  box.addEventListener('pointerdown', e => { if (e.button !== 0) return; const b = e.target.closest(sel); if (!b || b.disabled || !box.contains(b)) return; if (holdStopAll) holdStopAll(); key = keyOf(b); n = 0; holdStopAll = stop; if (fire()) { n++; loop(HOLD_DELAY); } else stop(); });
  for (const ev of ['pointerup', 'pointercancel']) window.addEventListener(ev, stop);
  box.addEventListener('pointerleave', stop);
  box.addEventListener('contextmenu', e => { if (e.target.closest(sel)) e.preventDefault(); });
  // 포인터로 처리한 뒤 따라오는 click 은 원래 클릭 처리기로 넘기지 않는다 (키보드 Enter/Space 는 그대로 1회)
  box.addEventListener('click', e => { if (performance.now() < until && e.target.closest(sel)) { e.stopImmediatePropagation(); e.preventDefault(); } }, true);
}
window.addEventListener('blur', () => { if (holdStopAll) holdStopAll(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && holdStopAll) holdStopAll(); });

// ================= 공용 표시 =================
const fmtClock = ms => { const s = Math.ceil(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0'); };
function rewardText(r) {
  const p = [];
  if (r.stones) p.push(t('rw.stones', { n: r.stones }));
  if (r.shards) p.push(t('rw.shards', { n: r.shards }));
  if (r.ess) p.push(t('rw.ess', { n: r.ess }));
  if (r.boost) p.push(t('rw.boost', { n: r.boost }));
  if (r.keys) p.push(t('rw.keys', { n: r.keys }));
  return p.join(' · ');
}
const fmtN = n => n < 100000 ? Math.floor(n).toLocaleString('en-US') : fmt(n);
// 배율(×)·퍼센트(%)도 커지면 K·M·B… 단위로 줄여 보여 준다
const fmtM = v => !isFinite(v) ? '∞' : v < 1000 ? v.toFixed(2) : fmt(v);
const fmtP = v => !isFinite(v) ? '∞' : Math.abs(v) < 100000 ? Math.round(v).toLocaleString('en-US') : fmt(v);
const untilMidnight = () => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1).getTime() - d.getTime(); };
const essTxt = e0 => { const d = (S.ess || 0) - e0; return d > 0 ? ' · ' + t('rw.ess', { n: fmt(d) }) : ''; };
const pips = (n, on) => '<span class="pips">' + Array.from({ length: n }, (_, i) => `<i class="${i < on ? 'on' : ''}"></i>`).join('') + '</span>';

// ================= 모험 탭 (미션 · 탑 · 업적 · 도감 · 자동) =================
let qTab = 'mission';
const QTABS = ['mission', 'tower', 'rift', 'daily', 'ach', 'book'];
function missionClaimable(kind) {
  const L = kind === 'd' ? DAILY : WEEKLY;
  if (L.some(m => { const ms = missionState(S, kind, m); return !ms.claimed && ms.v >= ms.need; })) return true;
  const a = missionState(S, kind, 'all'); return !a.claimed && a.v >= a.need;
}
function qDot(k) {
  if (k === 'mission') return canAttend(S) || missionClaimable('d') || missionClaimable('w');
  if (k === 'tower') return TOWERS.some(x => canTower(S, x.id));
  if (k === 'rift') return canRift(S);
  if (k === 'daily') return !!S.cls && dailyState(S).tries === DAILY_TRIES;
  if (k === 'ach') return ACH.some(a => achClaimed(S, a.id) < achMet(S, a));
  return false;
}
function questHasClaim() { return qDot('mission') || qDot('ach') || qDot('tower'); }
// 지금 받을 수 있는 보상 개수 (출석 + 미션 + 올클 보너스 + 업적 단계)
function claimCount() {
  let n = canAttend(S) ? 1 : 0;
  for (const kind of ['d', 'w']) {
    const L = kind === 'd' ? DAILY : WEEKLY;
    const done = L.filter(m => { const ms = missionState(S, kind, m); return !ms.claimed && ms.v >= ms.need; }).length;
    n += done;
    const a = missionState(S, kind, 'all'); if (!a.claimed && a.v + done >= a.need) n++;
  }
  for (const a of ACH) n += Math.max(0, achMet(S, a) - achClaimed(S, a.id));
  return n;
}
// 한 번에 전부 받고, 받은 목록을 창으로 보여준다
// 균열 보상 등 간단한 목록 창 (보상 창 재사용)
function showReward(title, rows) {
  $('#rwList').innerHTML = rows.map(([l], i) => `<div class="rwrow" style="--i:${i}"><span>${l}</span></div>`).join('');
  $('#rwTotal').innerHTML = '';
  $('#rwCount').textContent = title;
  $('#rewardModal').classList.remove('hidden');
}
function claimAllQuest() {
  const got = [];
  const r0 = attend(S); if (r0) got.push([t('q.attendLog', { n: r0.day }), r0.r]);
  for (const kind of ['d', 'w']) {
    const tag = t(kind === 'd' ? 'q.dailyTag' : 'q.weeklyTag');
    for (const m of kind === 'd' ? DAILY : WEEKLY) { const r = claimMission(S, kind, m.id); if (r) got.push([tag + ' · ' + t('q.m.' + m.id, { n: fmtN(m.need) }), r]); }
    const ra = claimMission(S, kind, 'all'); if (ra) got.push([tag + ' · ' + t('q.all'), ra]);
  }
  for (const a of ACH) { for (let g = 0; g < 10; g++) { const tier = achClaimed(S, a.id) + 1; const r = claimAch(S, a.id); if (!r) break; got.push([t('ach.' + a.id) + ' · ' + t('q.achTier', { n: tier }), { stones: r }]); } }
  if (!got.length) return;
  const sum = {};
  for (const [, r] of got) for (const [k, v] of Object.entries(r)) sum[k] = (sum[k] || 0) + v;
  $('#rwList').innerHTML = got.map(([l, r], i) => `<div class="rwrow" style="--i:${i}"><span>${l}</span><b>${rewardText(r)}</b></div>`).join('');
  $('#rwTotal').innerHTML = [['stones', 'assets/ui/stone.png'], ['shards', null], ['ess', 'assets/ui/rune.png'], ['boost', null], ['keys', 'assets/ui/orb.png']].filter(([k]) => sum[k]).map(([k, ic]) => `<div class="rwtot">${ic ? `<img src="${ic}" class="px i14" alt="">` : ''}<span>${t('rw.' + k, { n: fmt(sum[k]) })}</span></div>`).join('');
  $('#rwCount').textContent = t('q.rwCount', { n: got.length });
  $('#rewardModal').classList.remove('hidden');
  addLog('<b>' + t('q.rwLog', { n: got.length }) + '</b> ' + rewardText(sum));
  save(S); st = stats(S); buildQuest(); render();
}
function missionRows(kind) {
  const L = kind === 'd' ? DAILY : WEEKLY;
  const row = (id, title, ms, r) => { const done = ms.v >= ms.need; return `<div class="qrow ${ms.claimed ? 'claimed' : ''}"><div class="qt"><b>${title}</b><div class="qbar"><i style="width:${Math.min(100, ms.v / ms.need * 100)}%"></i></div><span>${fmtN(Math.min(ms.v, ms.need))} / ${fmtN(ms.need)} · ${rewardText(r)}</span></div><button class="mini" data-act="claim" data-k="${kind}" data-id="${id}" ${done && !ms.claimed ? '' : 'disabled'}>${ms.claimed ? t('q.claimed') : t('q.claim')}</button></div>`; };
  return L.map(m => row(m.id, t('q.m.' + m.id, { n: fmtN(m.need) }), missionState(S, kind, m), m.r)).join('') +
    row('all', t('q.all'), missionState(S, kind, 'all'), kind === 'd' ? DAILY_ALL : WEEKLY_ALL);
}
function qMission() {
  const a = S.quest.att || { n: 0 }, can = canAttend(S), nx = a.n % 7;
  const bl = boostLeft(S), ch = (S.boost && S.boost.charges) || 0;
  return `<div class="qcard"><div class="qh"><b>${t('q.attend')}</b><span>${t('q.attendDays', { n: a.n })}</span></div>
      <div class="attrow">${ATTEND.map((r, i) => `<div class="att ${i < nx ? 'got' : ''} ${i === nx && can ? 'next' : ''}"><b>${t('q.day', { n: i + 1 })}</b><span>${rewardText(r)}</span></div>`).join('')}</div>
      <button class="big sm" data-act="attend" ${can ? '' : 'disabled'}>${can ? t('q.attendBtn') : t('q.attendDone')}</button></div>
    <div class="qcard"><div class="qh"><b>${t('q.boost')}</b><span>${t('q.boostCharges', { n: ch })}</span></div>
      <div class="qx">${bl > 0 ? t('q.boostOn', { x: BOOST_X, t: fmtClock(bl) }) : t('q.boostDesc', { m: BOOST_MIN, x: BOOST_X })}</div>
      <button class="big sm" data-act="boost" ${ch ? '' : 'disabled'}>${t('q.boostBtn', { m: BOOST_MIN, x: BOOST_X })}</button></div>
    <div class="sech">${t('q.daily')}<span>${t('q.dailyReset')}</span></div>${missionRows('d')}
    <div class="sech">${t('q.weekly')}<span>${t('q.weeklyReset')}</span></div>${missionRows('w')}`;
}
function qTower() {
  const busy = S.boss && !inTower();
  const now = inTower() && !inRift() ? `<div class="qcard ctr"><div class="qx hi">${t('tw.' + towerId())} · ${t('q.towerNow', { n: S.boss.tf, s: Math.max(0, S.boss.timer).toFixed(1) })}</div></div>` : '';
  const cards = TOWERS.map(T => {
    const ts = towerState(S, T.id), tries = ts.tries ?? TOWER_TRIES;
    return `<div class="qcard twc tw-${T.id}"><div class="qh"><b>${t('tw.' + T.id)}</b><span>${t('q.towerBest')} <b>${ts.best || 0}F</b> · ${t('q.towerTries')} <b>${tries}/${TOWER_TRIES}</b></span></div>
      <div class="qx">${t('tw.d.' + T.id, { t: T.time })}</div>
      <div class="qx rw">${t('tw.r.' + T.id)}</div>
      <button class="big sm" data-act="tower" data-id="${T.id}" ${canTower(S, T.id) ? '' : 'disabled'}>${t('q.towerBtn')}</button></div>`;
  }).join('');
  return now + (busy ? `<div class="qx c">${t('q.towerBusy')}</div>` : '') + cards + `<div class="qx c">${t('tw.note', { c: fmtClock(untilMidnight()) })}</div>`;
}
// ---------- 차원 균열 · 룬 ----------
const RUNE_COL = ['#b8b8c8', '#6bd66b', '#5aa9ff', '#c77dff', '#ffb347'];
function runeStatTxt(ru) { return t('rune.k.' + ru.k) + ' +' + runeVal(ru) + '%' + (ru.k2 ? ' · ' + t('rune.k.' + ru.k2) + ' +' + runeVal(ru, ru.k2) + '%' : ''); }
function runeName(ru) { return `<span style="color:${RUNE_COL[ru.r]}">[${t('rune.r' + ru.r)}] ${runeStatTxt(ru)}${ru.u ? ' (+' + ru.u + ')' : ''}</span>`; }
function qRift() {
  const r = riftState(S), R = runeState(S);
  if (!riftUnlocked(S)) return `<div class="qcard ctr"><img src="assets/ui/orb.png" class="px i48" alt=""><div class="qh c"><b>${t('rift.title')}</b></div><div class="qx">${t('rift.desc', { w: RIFT_WAVES, t: RIFT_TIME })}</div><div class="qx hi">${t('rift.lock', { n: RIFT_UNLOCK })}</div></div>`;
  const L = Math.max(1, Math.min(r.lvl || 1, (r.best || 0) + 1));
  const busy = S.boss && !inRift();
  const head = `<div class="qcard ctr"><img src="assets/ui/orb.png" class="px i48" alt=""><div class="qh c"><b>${t('rift.title')}</b></div>
    <div class="qx">${t('rift.desc', { w: RIFT_WAVES, t: RIFT_TIME })}</div>
    <div class="rbstats"><div><span>${t('rift.best')}</span><b>${t('rift.lv', { n: r.best || 0 })}</b></div><div><span>${t('rift.keys')}</span><b>${r.keys}</b></div><div><span>${t('rift.daily', { n: KEY_DAILY })}</span><b>${fmtClock(untilMidnight())}</b></div></div>
    <div class="rlv"><button class="mini" data-act="rlv" data-d="-1" ${L <= 1 ? 'disabled' : ''}>-</button><div><b>${t('rift.lv', { n: L })}</b><span>${t('rift.lvSub', { f: riftFloor(L) })}</span></div><button class="mini" data-act="rlv" data-d="1" ${L > (r.best || 0) ? 'disabled' : ''}>+</button></div>
    ${inRift() ? `<div class="qx hi">${t('rift.now', { n: S.boss.tf, m: RIFT_WAVES, s: Math.max(0, S.boss.timer).toFixed(1) })}</div>` : ''}
    ${busy ? `<div class="qx">${t('q.towerBusy')}</div>` : ''}
    <button class="big" data-act="rift" ${canRift(S) ? '' : 'disabled'}>${t('rift.btn')}</button>
    <div class="qx">${t('rift.rule')}</div></div>`;
  const sum = runeSum(S), sumTxt = Object.keys(sum).map(k => t('rune.k.' + k) + ' +' + Math.round(sum[k] * 10) / 10 + '%').join(' · ') || t('rune.none');
  const slots = R.eq.map((ru, i) => ru
    ? `<div class="rslot"><div class="rn">${runeName(ru)}<i>${t('rift.lv', { n: ru.t })}</i></div><div class="rb"><button class="mini" data-act="rup" data-i="${i}" ${(ru.u || 0) >= RUNE_UP_MAX || R.dust < runeUpCost(ru) ? 'disabled' : ''}>${(ru.u || 0) >= RUNE_UP_MAX ? 'MAX' : t('rune.up', { n: fmtN(runeUpCost(ru)) })}</button><button class="mini" data-act="roff" data-i="${i}">${t('rune.off')}</button></div></div>`
    : `<div class="rslot empty">${t('rune.empty')}</div>`).join('');
  const bag = R.bag.map((ru, i) => [ru, i]).sort((a, b) => runeScore(b[0]) - runeScore(a[0]));
  const bagHtml = bag.length ? bag.map(([ru, i]) => `<div class="rslot"><div class="rn">${runeName(ru)}<i>${t('rift.lv', { n: ru.t })}</i></div><div class="rb"><button class="mini" data-act="ron" data-i="${i}">${t('rune.on')}</button><button class="mini" data-act="rdis" data-i="${i}">${t('rune.dis', { n: runeDustOf(ru) })}</button></div></div>`).join('') : `<div class="qx c">${t('rune.bagEmpty')}</div>`;
  const lowN = R.bag.filter(ru => ru.r <= 1).length;
  return head + `<div class="qcard"><div class="qh"><b>${t('rune.eqTitle')}</b><span>${t('rune.dustN', { n: fmtN(R.dust) })}</span></div><div class="qx">${t('rune.keep')}</div><div class="qx hi">${sumTxt}</div>${slots}</div>
    <div class="qcard"><div class="qh"><b>${t('rune.bag', { n: R.bag.length, m: RUNE_BAG })}</b><button class="mini" data-act="rdisLow" ${lowN ? '' : 'disabled'}>${t('rune.disLow', { n: lowN })}</button></div>${bagHtml}</div>`;
}
function qAch() {
  const P = achPoints(S);
  return `<div class="qcard"><div class="qh"><b>${t('q.achTitle')}</b><span>${t('q.achHead', { p: P, v: P * ACH_PCT })}</span></div><div class="qx">${t('q.achNote', { v: ACH_PCT })}</div></div>` +
    ACH.map(a => {
      const met = achMet(S, a), cl = achClaimed(S, a.id), v = a.m(S), done = cl >= a.t.length, next = a.t[Math.min(cl, a.t.length - 1)];
      return `<div class="qrow"><div class="qt"><b>${t('ach.' + a.id)} ${pips(a.t.length, cl)}</b><div class="qbar"><i style="width:${done ? 100 : Math.min(100, v / next * 100)}%"></i></div><span>${done ? t('q.achDone') : fmtN(Math.min(v, next)) + ' / ' + fmtN(next)} · ${t('ach.d.' + a.id)}</span></div><button class="mini" data-act="ach" data-id="${a.id}" ${cl < met ? '' : 'disabled'}>${done ? t('q.claimed') : t('q.achBtn', { n: ACH_REWARD[cl] })}</button></div>`;
    }).join('');
}
function qBook() {
  const n = bestStars(S), owned = Object.keys(S.comp || {}).length;
  const cells = Array.from({ length: ZONES }, (_, z) => {
    const k = (S.bestiary || [])[z] || 0, seen = k > 0 || Math.max(S.bestFloor || 0, S.maxFloor) >= zoneStart(z);
    const on = BEST_STARS.filter(x => k >= x).length;
    const su = UNIQUES[sigOf(z)], sg = (S.sigGot || {})[z] || 0, sp = (S.bossPity || {})[z] || 0;
    return `<div class="bk ${seen ? '' : 'unk'}" title="B${zoneStart(z)}F~ · ${t('sig.tip', { u: su.name, d: su.desc })}"><img class="px" src="assets/mon/m${z}.png" alt=""><div class="bn">${seen ? MONSTERS[z] : '???'}</div>${pips(3, on)}<div class="bc">${fmt(k)}</div><div class="bsig ${sg ? 'got' : ''}">${seen ? su.name : '???'}<i>${sg ? t('sig.got', { n: sg }) : sp + '/' + SIG_PITY}</i></div></div>`;
  }).join('');
  return `<div class="qcard"><div class="qh"><b>${t('q.bookTitle')}</b><span>${t('q.bookHead', { n, m: ZONES * 3, v: n * BEST_PCT })}</span></div><div class="qx">${t('q.bookNote', { a: fmt(BEST_STARS[0]), b: fmt(BEST_STARS[1]), c: fmt(BEST_STARS[2]), v: BEST_PCT })}</div></div>
    <div class="qx">${t('sig.note', { p: SIG_PITY })}</div>
    <div class="book">${cells}</div>
    <div class="qx c">${t('q.bookComp', { n: owned, m: COMPANIONS.length })}</div>`;
}
function qAuto() {
  const au = S.auto || {};
  return `<div class="qx">${t('q.autoNote')}</div>` + AUTO.map(a => {
    const un = a.need(S), on = !!au[a.id];
    const opt = a.id === 'rebirth' && un ? `<div class="rbopt"><select data-act="rbmode"><option value="stuck" ${au.rbMode !== 'floor' ? 'selected' : ''}>${t('auto.rb.stuck')}</option><option value="floor" ${au.rbMode === 'floor' ? 'selected' : ''}>${t('auto.rb.floor')}</option></select><input type="number" data-act="rbval" min="${au.rbMode === 'floor' ? 30 : 5}" max="999" value="${au.rbMode === 'floor' ? (au.rbFloor || Math.max(30, (S.bestFloor || 30) - 5)) : (au.rbStuck || 30)}"><span>${au.rbMode === 'floor' ? t('auto.rb.floorU') : t('auto.rb.min')}</span></div>` : '';
    return `<div class="qrow ${un ? '' : 'lock'}"><div class="qt"><b>${t('auto.' + a.id)}</b><span>${un ? t('auto.d.' + a.id, { w: Math.round(bossRetryWait(S) / 60) }) : t('auto.lock.' + a.cond.k, { n: a.cond.n })}</span>${opt}</div><label class="tgl"><input type="checkbox" data-act="auto" data-id="${a.id}" ${on ? 'checked' : ''} ${un ? '' : 'disabled'}><i></i></label></div>`;
  }).join('');
}
// ---------- 오늘의 던전 ----------
const dSel = { cls: null, bless: 'power' };
const STORE_URL = 'https://chromewebstore.google.com/detail/deskgeon-idle-dungeon-rpg/adaoggopidkbankjinlalfnjlgncanpk';
const mmss = s => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
function dailyShareText() {
  const ds = dailyState(S), b = ds.best; if (!b) return '';
  return `Deskgeon Daily #${ds.day.replace(/-/g, '')} | ${CLASSES[b.cls].name} | B${b.floor}F (Lv.${b.lv}, ${mmss(b.at)}) | ${t('dl.m.' + b.mod)} | ${t('dl.b.' + b.bless)}\n${t('dl.cta')} ${STORE_URL}`;
}
function qDaily() {
  const ds = dailyState(S), mod = dailyMod(ds.day); dSel.cls ||= S.cls || 'war';
  const res = r => r ? `<div class="rbstats"><div><span>${t('dl.floor')}</span><b>B${r.floor}F</b></div><div><span>${t('dl.time')}</span><b>${mmss(r.at)}</b></div><div><span>${t('dl.cls')}</span><b>${CLASSES[r.cls].name}</b></div></div><div class="qx">${t('dl.b.' + r.bless)} · Lv.${r.lv}</div>` : `<div class="qx">${t('dl.none')}</div>`;
  return `<div class="qcard ctr"><div class="qh c"><b>${t('dl.title')}</b><span>#${ds.day.replace(/-/g, '')}</span></div>
    <div class="qx">${t('dl.desc')}</div>
    <div class="dmod"><b>${t('dl.m.' + mod.id)}</b><span>${t('dl.m.' + mod.id + '.d')}</span></div>
    <div class="dsel"><span>${t('dl.pickCls')}</span>${CLASS_IDS.map(c => `<button class="mini ${dSel.cls === c ? 'on' : ''}" data-act="dcls" data-v="${c}">${CLASSES[c].name}</button>`).join('')}</div>
    <div class="dsel"><span>${t('dl.pickBless')}</span>${DAILY_BLESS.map(x => `<button class="mini ${dSel.bless === x.id ? 'on' : ''}" data-act="dbless" data-v="${x.id}" title="${t('dl.b.' + x.id + '.d')}">${t('dl.b.' + x.id)}</button>`).join('')}</div>
    <button class="big" data-act="drun" ${ds.tries > 0 && S.cls ? '' : 'disabled'}>${t('dl.run', { n: ds.tries, m: DAILY_TRIES })}</button>
    <div class="qx">${t('dl.rule')}</div></div>
    <div class="qcard"><div class="qh"><b>${t('dl.best')}</b>${ds.best ? `<button class="mini" data-act="dshare">${t('dl.share')}</button>` : ''}</div>${res(ds.best)}</div>
    ${ds.last && ds.last !== ds.best ? `<div class="qcard"><div class="qh"><b>${t('dl.last')}</b></div>${res(ds.last)}</div>` : ''}`;
}
// ---------- 초보자 가이드 ----------
function goTo(where) { if (where === 'settings') { $('#setBtn').click(); return; } const b = document.querySelector(`.tabs button[data-go="${where}"]`); if (b) b.click(); }
function renderGuide() {
  const box = $('#guideBox'); if (!box) return;
  const g = guideStep(S), hide = !S.cls || !g || (S.guide && S.guide.hide);
  box.classList.toggle('hidden', !!hide); if (hide) { box.dataset.sig = ''; return; }
  const i = (S.guide && S.guide.n) || 0, ok = g.ok(S), sig = g.id + ok + getLang();
  if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  box.innerHTML = `<div class="gdt" title="${t('gd.' + g.id + '.d')}"><i>${t('gd.head', { i: i + 1, n: GUIDE.length })}</i><b>${t('gd.' + g.id)}</b><span>${t('gd.' + g.id + '.d')}</span></div><div class="gdb">${ok ? `<button class="mini hot" data-g="claim">${t('gd.claim', { n: g.r })}</button>` : `<button class="mini" data-g="go">${t('gd.go')}</button>`}<button class="x" data-g="hide" title="${t('gd.hide')}">×</button></div>`;
}
function bindGuide() {
  $('#guideBox').addEventListener('click', e => { const b = e.target.closest('button[data-g]'); if (!b) return; const g = guideStep(S); if (!g) return;
    if (b.dataset.g === 'go') goTo(g.go);
    else if (b.dataset.g === 'claim') { const r = guideClaim(S); if (r) { addLog('<b>' + t('gd.done', { s: t('gd.' + g.id) }) + '</b> · ' + rewardText({ stones: r })); flyTo('assets/ui/stone.png', 90, 40, $('#stoneBox'), 3); if (!guideStep(S)) toast(t('gd.all')); save(S); } }
    else if (b.dataset.g === 'hide') { (S.guide ||= {}).hide = true; save(S); toast(t('gd.hidden')); }
    $('#guideBox').dataset.sig = ''; renderGuide(); render(); });
  $('#helpBtn').onclick = () => openHelp(0);
  $('#guideShow').onclick = () => { (S.guide ||= {}).hide = false; save(S); $('#setModal').classList.add('hidden'); goTo('dungeon'); $('#guideBox').dataset.sig = ''; renderGuide(); };
  $('#helpClose').onclick = () => $('#helpModal').classList.add('hidden');
  $('#helpModal').onclick = e => { if (e.target.id === 'helpModal') $('#helpModal').classList.add('hidden'); };
  $('#helpNav').onclick = e => { const b = e.target.closest('[data-h]'); if (b) openHelp(+b.dataset.h); };
}
const HELP = ['start', 'fight', 'gear', 'skill', 'comp', 'rebirth', 'adv', 'auto'];
function openHelp(i) {
  $('#helpNav').innerHTML = HELP.map((h, j) => `<button class="mini ${i === j ? 'on' : ''}" data-h="${j}">${t('help.' + h)}</button>`).join('');
  $('#helpBody').innerHTML = t('help.' + HELP[i] + '.b').split('\n').map(l => `<p>${l}</p>`).join('');
  $('#helpModal').classList.remove('hidden');
}
// ---------- 던전 이벤트 ----------
const EB_NAME = k => t('eb.' + k);
function ebText(k, v) { return k === 'armor' ? EB_NAME(k) + ' +' + v : EB_NAME(k) + ' ×' + v; }
function renderEvents() {
  const bar = $('#evBox'), row = $('#ebRow'); if (!bar) return;
  const evs = S.events || [], e = evs[0];
  bar.classList.toggle('hidden', !e || !!(S.boss && S.boss.tower));
  if (e) { const sig = e.id + evs.length + getLang(); if (bar.dataset.sig !== sig) { bar.dataset.sig = sig; bar.innerHTML = `<i class="evdot"></i><b>${t('ev.' + e.id)}</b>${evs.length > 1 ? `<span class="evn">+${evs.length - 1}</span>` : ''}<span class="evgo">${t('ev.open')}</span>`; } }
  else { bar.dataset.sig = ''; if (!$('#evModal').classList.contains('hidden')) $('#evModal').classList.add('hidden'); }
  if (!$('#evModal').classList.contains('hidden')) renderEvModal();
  const eb = S.ebuffs || [];
  row.classList.toggle('hidden', !eb.length);
  if (eb.length) { const bad = b => (b.k === 'monX' ? b.v > 1 : b.k === 'armor' || b.k === 'critD' || b.k === 'spdA' ? b.v < 0 : b.v < 1);
    const sig2 = eb.map(b => b.k + b.v + Math.ceil(b.t / 60)).join() + getLang();
    if (row.dataset.sig !== sig2) { row.dataset.sig = sig2; row.innerHTML = `<span class="ebl">${t('eb.label')}</span>` + eb.map(b => `<span class="${bad(b) ? 'ebad' : 'egood'}">${ebText(b.k, b.v)} ${Math.ceil(b.t / 60)}${t('ui.minS')}</span>`).join(' · '); } }
}
function renderEvModal() {
  const w = $('#evWin'), evs = S.events || [], e = evs[0]; if (!e) return;
  const E = EVENT_BY_ID[e.id], left = Math.max(1, Math.ceil((EVENT_TTL - (e.age || 0)) / 60));
  const sig = e.id + evs.length + getLang() + E.o.map((o, i) => eventOptOk(S, e, i)).join('') + left;
  if (w.dataset.sig === sig) return; w.dataset.sig = sig;
  w.innerHTML = `<div class="evh"><b>${t('ev.' + e.id)}</b><span>B${e.f}F${evs.length > 1 ? ' · ' + t('ev.more', { n: evs.length - 1 }) : ''}</span></div><div class="evd">${t('ev.' + e.id + '.d')}</div><div class="evo">${E.o.map((o, i) => `<button class="mini ${i === E.o.length - 1 ? 'def' : ''}" data-ei="${i}" ${eventOptOk(S, e, i) ? '' : 'disabled'}><b>${t('ev.' + e.id + '.o' + i)}</b><span>${evOptText(E, o)}</span></button>`).join('')}</div><div class="evf">${t('ev.auto', { m: left })}</div><button class="mini wide" data-ei="close">${t('ev.later')}</button>`;
}
function evOptText(E, o) {
  const p2 = [];
  if (o.cost) p2.push(t('ev.cost', { m: o.cost }));
  const rr = eventReward(S, o, st); if (rr.gold) p2.push(t('ev.gold', { g: fmt(rr.gold) }));
  const r2 = { ...rr }; delete r2.gold; const rt = rewardText(r2); if (rt) p2.push(rt); if (rr.dust) p2.push(t('rune.dustN', { n: rr.dust }));
  if (o.b) p2.push(o.b.map(([k, v]) => ebText(k, v)).join(', ') + ' ' + Math.round((o.t || 1800) / 60) + t('ui.minS'));
  if (o.gamble != null) p2.push(t('ev.gamble', { p: Math.round(o.gamble * 100) }));
  if (o.rand) p2.push(t('ev.rand'));
  return p2.join(' · ');
}
function bindEvents() {
  $('#evBox').onclick = () => { $('#evWin').dataset.sig = ''; renderEvModal(); $('#evModal').classList.remove('hidden'); };
  $('#evModal').onclick = e => { if (e.target.id === 'evModal') $('#evModal').classList.add('hidden'); };
  $('#evWin').addEventListener('click', e => { const b = e.target.closest('button[data-ei]'); if (!b || b.disabled) return;
    if (b.dataset.ei === 'close') { $('#evModal').classList.add('hidden'); return; }
    const r = resolveEvent(S, 0, +b.dataset.ei); if (!r) return;
    if (!(S.events || []).length) $('#evModal').classList.add('hidden');
    $('#evWin').dataset.sig = '';
    addLog('<b>' + t('ev.' + r.id) + '</b> · ' + t('ev.' + r.id + '.o' + r.c) + (r.fail ? ' · ' + t('ev.fail') : '') + (Object.keys(r.r).length ? ' · ' + evResText(r.r) : ''));
    if (r.fail) banner(t('ev.fail'), 'lose', 1200);
    st = stats(S); save(S); $('#evBox').dataset.sig = ''; renderEvents(); render(); });
}
function evResText(r) { const x = { ...r }; const parts = []; if (x.gold) parts.push(t('ev.gold', { g: fmt(x.gold) })); delete x.gold; if (x.dust) parts.push(t('rune.dustN', { n: x.dust })); delete x.dust; const rt = rewardText(x); if (rt) parts.push(rt); return parts.join(' · '); }
// ---------- 자동 진행 (환경설정) ----------
function refreshAutoBox() { const b = $('#autoBox'); if (b) morph(b, qAuto() + `<div class="qrow"><div class="qt"><b>${t('conv.title')}</b><span>${t('conv.desc')}</span></div><label class="tgl"><input type="checkbox" data-act="conv" ${S.goldConv !== false ? 'checked' : ''}><i></i></label></div>`); }
function bindAutoBox() {
  $('#autoBox').addEventListener('change', e => {
    const el = e.target, act = el.dataset.act; S.auto ||= {};
    if (act === 'auto') S.auto[el.dataset.id] = el.checked;
    else if (act === 'conv') S.goldConv = el.checked;
    else if (act === 'rbmode') S.auto.rbMode = el.value;
    else if (act === 'rbval') { const v = Math.max(1, Math.round(+el.value || 0)); if (S.auto.rbMode === 'floor') S.auto.rbFloor = Math.max(30, v); else S.auto.rbStuck = Math.max(5, v); }
    save(S); el.blur(); refreshAutoBox();
  });
}
function autoNotice() {
  if (!S.cls) return;
  S.autoSeen ||= [];
  const fresh = AUTO.filter(a => a.need(S) && !S.autoSeen.includes(a.id));
  if (fresh.length) {
    S.autoNew ||= [];
    for (const a of fresh) { S.autoSeen.push(a.id); if (!(S.auto || {})[a.id]) S.autoNew.push(a.id); } autoNotice.dot = true;
    const msg = t('set.autoNew', { a: fresh.map(a => t('auto.' + a.id)).join(', ') });
    addLog('<b>' + msg + '</b>'); toast(msg); save(S);
  }
  $('#setDot').classList.toggle('hidden', !autoNotice.dot && !(S.autoNew || []).length);
  renderAutoCard();
}
// 새로 열린 자동화를 던전 화면에서 바로 켤 수 있는 카드
function renderAutoCard() {
  const box = $('#autoCard'); if (!box) return;
  const list = (S.autoNew || []).filter(id => AUTO.some(a => a.id === id) && !(S.auto || {})[id]);
  if (list.length !== (S.autoNew || []).length) S.autoNew = list;
  const id = list[0]; box.classList.toggle('hidden', !id);
  if (!id) { box.dataset.sig = ''; return; }
  const sig = id + list.length + getLang(); if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  box.innerHTML = `<div class="gdt"><i>${t('auto.newHead')}${list.length > 1 ? ' · +' + (list.length - 1) : ''}</i><b>${t('auto.' + id)}</b><span>${t('auto.d.' + id, { w: Math.round(bossRetryWait(S) / 60) })}</span></div><div class="gdb"><button class="mini hot" data-a="on">${t('auto.turnOn')}</button><button class="x" data-a="later" title="${t('auto.later')}">×</button></div>`;
}
function bindAutoCard() {
  $('#autoCard').addEventListener('click', e => { const b = e.target.closest('button[data-a]'); if (!b) return; const id = (S.autoNew || [])[0]; if (!id) return;
    S.autoNew.shift();
    if (b.dataset.a === 'on') { (S.auto ||= {})[id] = true; addLog('<b>' + t('auto.onLog', { a: t('auto.' + id) }) + '</b>'); toast(t('auto.onLog', { a: t('auto.' + id) })); }
    else toast(t('auto.laterToast'));
    save(S); $('#autoCard').dataset.sig = ''; renderAutoCard(); render(); });
}
function buildQuest() {
  const body = $('#qBody'); if (!body) return;
  const ae = document.activeElement;
  if (ae && body.contains(ae) && (ae.tagName === 'INPUT' || ae.tagName === 'SELECT')) return;   // 입력 중에는 다시 그리지 않음
  if (buildQuest.press) return;                                                                 // 누르고 있는 동안 교체 금지
  const cc = claimCount(), qa = $('#qAll');
  qa.disabled = !cc; qa.textContent = cc ? t('q.claimAll', { n: cc }) : t('q.claimNone');
  morph($('#qNav'), QTABS.map(k => `<button class="mini ${qTab === k ? 'on' : ''}" data-q="${k}">${t('q.tab.' + k)}${qDot(k) ? '<i class="dot"></i>' : ''}</button>`).join(''));
  morph(body, qTab === 'mission' ? qMission() : qTab === 'tower' ? qTower() : qTab === 'rift' ? qRift() : qTab === 'daily' ? qDaily() : qTab === 'ach' ? qAch() : qTab === 'book' ? qBook() : qAuto());
}
// 바뀐 줄만 교체 (버튼이 매초 새로 만들어져 클릭이 씹히는 것 방지)
function morph(el, html) {
  const tp = document.createElement('template'); tp.innerHTML = html;
  const next = [...tp.content.children], cur = [...el.children];
  if (next.length !== cur.length) { el.replaceChildren(...next); return; }
  next.forEach((n, i) => { if (cur[i].outerHTML !== n.outerHTML) cur[i].replaceWith(n); });
}
function bindQuest() {
  $('#qAll').onclick = claimAllQuest;
  $('#rwOk').onclick = () => $('#rewardModal').classList.add('hidden');
  $('#qNav').onclick = e => { const b = e.target.closest('[data-q]'); if (!b) return; qTab = b.dataset.q; buildQuest(); };
  const qb = $('#qBody');
  qb.addEventListener('pointerdown', () => { buildQuest.press = true; });
  for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) qb.addEventListener(ev, () => { buildQuest.press = false; });
  const qRedraw = () => { st = stats(S); const p = buildQuest.press; buildQuest.press = false; buildQuest(); buildQuest.press = p; };
  holdDelegate(qb, 'button[data-act="rup"], button[data-act="rlv"]', b => {
    if (b.dataset.act === 'rup') { if (!runeUpgrade(S, +b.dataset.i)) return false; }
    else { const r = riftState(S), v0 = r.lvl || 1; r.lvl = Math.max(1, Math.min((r.best || 0) + 1, v0 + (+b.dataset.d))); if (r.lvl === v0) return false; }
    qRedraw(); return true;
  }, n => { buildQuest.press = false; if (n) { buildQuest(); render(); } });
  $('#qBody').addEventListener('click', e => {
    const b = e.target.closest('button[data-act]'); if (!b || b.disabled) return;
    const act = b.dataset.act;
    if (act === 'attend') { const r = attend(S); if (r) { addLog(t('q.attendLog', { n: r.day }) + ' · ' + rewardText(r.r)); flyTo('assets/ui/stone.png', 90, 40, $('#stoneBox'), 3); } }
    else if (act === 'boost') { if (useBoost(S)) addLog('<b>' + t('q.boostLog', { m: BOOST_MIN, x: BOOST_X }) + '</b>'); }
    else if (act === 'claim') { const r = claimMission(S, b.dataset.k, b.dataset.id); if (r) addLog(t('q.claimLog') + ' · ' + rewardText(r)); }
    else if (act === 'ach') { const r = claimAch(S, b.dataset.id); if (r) addLog(t('q.achLog', { a: t('ach.' + b.dataset.id) }) + ' · ' + rewardText({ stones: r })); }
    else if (act === 'tower') { const id = b.dataset.id || 'inf'; if (towerStart(S, id)) { addLog('<b>' + t('tw.start', { t: t('tw.' + id) }) + '</b>'); document.querySelector('.tabs button[data-go="dungeon"]').click(); } }
    else if (act === 'rift') { const L = riftState(S).lvl; if (riftStart(S, L)) { addLog('<b>' + t('rift.startLog', { n: S.boss.L }) + '</b>'); document.querySelector('.tabs button[data-go="dungeon"]').click(); } }
    else if (act === 'dcls') dSel.cls = b.dataset.v;
    else if (act === 'dbless') dSel.bless = b.dataset.v;
    else if (act === 'drun') { const r = dailyRun(S, dSel.cls, dSel.bless); if (r) { addLog('<b>' + t('dl.log', { f: r.floor, c: CLASSES[r.cls].name }) + '</b>' + (r.reward ? ' · ' + rewardText({ stones: r.reward }) : '')); banner(t('dl.result', { f: r.floor }), 'floor', 1500); } }
    else if (act === 'dshare') { const txt = dailyShareText(); (async () => { try { await navigator.clipboard.writeText(txt); toast(t('dl.copied')); } catch (e) { toast(t('dl.copyFail'), '#ffc35c'); } })(); }
    else if (act === 'rlv') { const r = riftState(S); r.lvl = Math.max(1, Math.min((r.best || 0) + 1, (r.lvl || 1) + (+b.dataset.d))); }
    else if (act === 'ron') runeEquip(S, +b.dataset.i);
    else if (act === 'roff') { if (!runeUnequip(S, +b.dataset.i)) toast(t('rune.bagFull')); }
    else if (act === 'rup') runeUpgrade(S, +b.dataset.i);
    else if (act === 'rdis') { const R = runeState(S), ru = R.bag[+b.dataset.i]; if (ru) runeDismantle(S, x => x === ru); }
    else if (act === 'rdisLow') { const r = runeDismantle(S, x => x.r <= 1); if (r.n) addLog(t('rune.disLog', { n: r.n, d: r.dust })); }
    save(S); st = stats(S); buildQuest(); render();
  });
  $('#qBody').addEventListener('change', e => {
    const el = e.target, act = el.dataset.act; S.auto ||= {};
    if (act === 'auto') S.auto[el.dataset.id] = el.checked;
    else if (act === 'rbmode') S.auto.rbMode = el.value;
    else if (act === 'rbval') { const v = Math.max(1, Math.round(+el.value || 0)); if (S.auto.rbMode === 'floor') S.auto.rbFloor = Math.max(30, v); else S.auto.rbStuck = Math.max(5, v); }
    save(S); el.blur(); buildQuest();
  });
}

// ================= 장비 부위 강화 · 세트 =================
function buildEnch() {
  const box = $('#enchList'); if (!box) return;
  box.innerHTML = '';
  for (const sl of SLOTS) {
    const d = document.createElement('div');
    d.className = 'up ench'; d.dataset.slot = sl.id;
    d.innerHTML = `<div class="n"><b>${sl.name}</b><span class="ed"></span></div><div class="lvl"></div><div class="cost"><img src="assets/ui/rune.png" class="px i14" alt=""><b>0</b></div>`;
    holdRepeat(d, () => {
      if (!enchant(S, sl.id)) return false;
      st = stats(S); refreshEnch();
      d.classList.remove('bought'); void d.offsetWidth; d.classList.add('bought');
      return true;
    }, n => { if (n) { const x = enchX(S, sl.id); addLog(x ? t('ui.enchXLog', { s: `<b>${sl.name}</b>`, n: x }) : t('ui.enchLog', { s: `<b>${sl.name}</b>`, n: enchLv(S, sl.id) })); buildSlots(); } });
    box.appendChild(d);
  }
  refreshEnch();
}
function refreshEnch() {
  const line = $('#essLine'); if (!line) return;
  const totalEnch = SLOTS.reduce((a, sl) => a + enchLv(S, sl.id), 0), sbv = setInfo(S).best.v;
  const totalX = SLOTS.reduce((a, sl) => a + enchX(S, sl.id), 0);
  line.textContent = t('ui.essLine', { n: fmt(S.ess || 0) }) + ' · ' + t('ui.enchSum', { n: totalEnch }) + (totalX ? ' · ' + t('ui.enchXSum', { n: totalX, p: Math.round(ENCHX_POW * totalX * 100) }) : '') + (sbv ? ' · ' + t('ui.setShort', { v: sbv }) : '');
  for (const d of document.querySelectorAll('.ench')) {
    const id = d.dataset.slot, lv = enchLv(S, id), max = lv >= ENCH_MAX, x = enchX(S, id), c = enchNextCost(S, id), tot = lv + x;
    d.classList.toggle('no', (S.ess || 0) < c); d.classList.toggle('xcend', max);
    d.querySelector('.ed').textContent = max ? t('ui.enchXEff', { n: x }) : t('ui.enchEff', { p: Math.round(ENCH_STEP * lv * 100) }) + ' → +' + Math.round(ENCH_STEP * (lv + 1) * 100) + '%';
    d.querySelector('.lvl').textContent = max ? t('ui.enchX', { n: x }) : '+' + lv + '/' + ENCH_MAX;
    d.querySelector('.cost b').textContent = fmt(c);
  }
  const si = setInfo(S);
  $('#setInfo').innerHTML = `<div class="sech">${t('ui.setHead')}<span>${si.best.v ? t('ui.setOn', { v: si.best.v }) : t('ui.setOff')}</span></div>` +
    si.rows.map(r => `<div class="setrow ${r.v && r.r === si.best.r ? 'on' : ''}"><b style="color:${RARITIES[r.r].color}">${t('ui.setTier', { r: RARITIES[r.r].name })}</b><span>${r.n}/8</span>${r.t.map(([k, v]) => `<em class="${r.n >= k ? 'on' : ''}">${t('ui.setStep', { k, v })}</em>`).join('')}</div>`).join('') +
    `<div class="relnote">${t('ui.setNote')}</div>`;
}

// ================= 윤회 (환생 탭) =================
function refreshReinc() {
  const box = $('#reincBox'); if (!box || box.closest('.page').classList.contains('hidden')) return;
  const k = karmaGain(S), K = S.karma || 0;
  $('#reincGain').textContent = fmtN(k);
  $('#karma').textContent = fmtN(K); $('#reincN').textContent = S.reinc || 0; $('#cycleBest').textContent = 'B' + (S.cycleBest || 0);
  $('#karmaEff').textContent = t('ui.karmaEff', { h: fmtP(KARMA_HONOR * K * 100), p: fmtP(KARMA_POW * K * 100) });
  $('#reincHint').textContent = k > 0 ? t('ui.reincGain', { k: fmtN(k), h: fmtP(KARMA_HONOR * k * 100), p: fmtP(KARMA_POW * k * 100) }) : t('ui.reincNeed', { n: REINC_FLOOR, m: S.cycleBest || 0 });
  { const cv = k > 0 ? convPreview(S) : 0; $('#reincConv').textContent = S.goldConv === false ? t('conv.off') : cv ? t('conv.pre', { n: fmtN(cv) }) : ''; }
  if (!bindReinc._armed) $('#reincBtn').disabled = k <= 0;
}
function bindReinc() {
  let tm = null;
  const reset = () => { bindReinc._armed = false; $('#reincBtn').textContent = t('ui.doReinc'); $('#reincBtn').classList.remove('armed'); };
  $('#reincBtn').onclick = async () => {
    if (!canReinc(S)) return;
    if (!bindReinc._armed) { bindReinc._armed = true; $('#reincBtn').textContent = t('ui.reincAgain'); $('#reincBtn').classList.add('armed'); clearTimeout(tm); tm = setTimeout(reset, 4000); return; }
    clearTimeout(tm); reset();
    await backup(S, 'reinc');
    const had5 = !!S.team5; const k = reincarnate(S);
    save(S, 'force'); logLines = []; hudSig = '';
    addLog('<b>' + t('ui.reincLog', { n: k }) + '</b>');
    if (!had5 && S.team5) { addLog('<b class="hi">' + t('ui.team5Log') + '</b>'); toast(t('ui.team5Log')); }
    if (LAST_CONV.stones) addLog(t('conv.log', { n: fmtN(LAST_CONV.stones), g: fmt(LAST_CONV.gold) }));
    flash('#ffd98a', .8, 1);
    buildSlots(); buildBag(); buildSkills(); buildComps(); buildRelics();
  };
}

// ================= 유물 (환생 탭) =================
const fmtX = m => m >= 1000 ? fmt(m) : (Math.round(m * 100) / 100).toString();
function relicText(r, lv) {
  if (r.k === 'offline') return t('relic.' + r.id + '.d', { v: Math.round(Math.min(1, OFFLINE_RATE + r.v * lv / 100) * 100) });
  return t('relic.' + r.id + '.d', { v: fmt(r.v * lv) });
}
function relicAffordable() { return RELICS.some(r => !(r.max && relicLv(S, r.id) >= r.max) && (S.honorPts || 0) >= relicCost(r, relicLv(S, r.id))); }
function buildRelics() {
  const box = $('#relicList'); if (!box) return;
  box.innerHTML = '';
  for (const r of RELICS) {
    const d = document.createElement('div');
    d.className = 'up rel'; d.dataset.rid = r.id;
    d.innerHTML = `<div class="n"><b>${t('relic.' + r.id)}</b><span class="rd"></span></div><div class="lvl"></div><div class="cost"><img src="assets/ui/orb.png" class="px i14"><b>0</b></div>`;
    holdRepeat(d, () => {
      if (!buyRelic(S, r.id)) return false;
      d.classList.remove('bought'); void d.offsetWidth; d.classList.add('bought');
      st = stats(S); render();
      return true;
    }, n => { if (n) addLog(t('ui.relicBought', { r: `<b>${t('relic.' + r.id)}</b>`, l: relicLv(S, r.id) })); });
    box.appendChild(d);
  }
  refreshRelics();
}
function refreshRelics() {
  const pts = $('#relicPts'); if (!pts || pts.closest('.page').classList.contains('hidden')) return;
  pts.textContent = t('ui.relicPts', { n: fmt(S.honorPts || 0) });
  for (const d of document.querySelectorAll('.rel')) {
    const r = RELICS.find(x => x.id === d.dataset.rid); if (!r) continue;
    const lv = relicLv(S, r.id), max = r.max && lv >= r.max, c = relicCost(r, lv);
    d.classList.toggle('no', max || (S.honorPts || 0) < c);
    d.querySelector('.rd').textContent = max ? relicText(r, lv) : relicText(r, lv) + ' → ' + relicText(r, lv + 1).replace(/^[^+\d]*/, '');
    d.querySelector('.lvl').textContent = 'Lv.' + lv + (r.max ? '/' + r.max : '');
    d.querySelector('.cost b').textContent = max ? 'MAX' : fmt(c);
  }
}

// ================= 강화 탭 =================
let buyMul = 1;
function buildShop() {
  const box = $('#shop');
  box.innerHTML = `<div class="mulbar"><span>${t('ui.atOnce')}</span>${[1, 10, 50, 100].map(m => `<button class="mini ${m === buyMul ? 'on' : ''}" data-m="${m}">×${m}</button>`).join('')}</div>`;
  for (const b of box.querySelectorAll('.mulbar button')) b.onclick = () => { buyMul = +b.dataset.m; buildShop(); render(); };
  for (const u of UPGRADES) {
    const d = document.createElement('div');
    d.className = 'up'; d.dataset.id = u.id;
    d.innerHTML = `<div class="n"><b>${u.name}</b><span>${u.desc}</span>${BREAK_IDS.includes(u.id) ? '<em class="brk"></em>' : ''}</div><div class="lvl">Lv.0</div><div class="cost"><img src="assets/ui/gold.png" class="px i14"><b>0</b></div>`;
    holdRepeat(d, () => {
      if (!buyUpgrade(S, u.id, buyMul)) return false;
      d.classList.remove('bought'); void d.offsetWidth; d.classList.add('bought');
      render();
      return true;
    }, n => { if (n) addLog(t('ui.upgraded', { u: `<b>${u.name}</b>`, n: buyMul * n, l: S.up[u.id] })); });
    box.appendChild(d);
  }
}

// ================= 바인딩 =================
function bindUI() {
  document.querySelectorAll('.tabs button').forEach(b => {
    b.onclick = () => {
      document.querySelectorAll('.tabs button').forEach(x => x.classList.toggle('on', x === b));
      document.querySelectorAll('.page').forEach(p => p.classList.toggle('hidden', p.dataset.tab !== b.dataset.go));
      if (b.dataset.go === 'gear') { buildSlots(); buildBag(); }
      if (b.dataset.go === 'skill') buildSkills();
      if (b.dataset.go === 'comp') buildComps();
      if (b.dataset.go === 'rebirth') refreshSave();
      if (b.dataset.go === 'quest') buildQuest();
      hideTip();
    };
  });
  const chk = $('#autoEq');
  chk.checked = S.autoEquip;
  chk.onchange = () => { S.autoEquip = chk.checked; save(S); };
  $('#sellWorse').onclick = () => { const e0 = S.ess || 0; const g = sellAllWorse(S); addLog(g ? t('ui.soldWorse', { g: `<b>${fmt(g)}</b>` }) + essTxt(e0) : t('ui.nothing')); save(S); buildBag(); refreshEnch(); };
  $('#sellLow').onclick = () => { const e0 = S.ess || 0; const r = +$('#sellR').value; const g = sellByRarity(S, r); addLog(g ? t('ui.soldBelow', { r: RARITIES[r].name, g: `<b>${fmt(g)}</b>` }) + essTxt(e0) : t('ui.nothing')); save(S); buildBag(); refreshEnch(); };
  bindQuest(); bindReinc();
  const eb = $('.enchbox'), setFold = open => { eb.classList.toggle('open', open); $('#enchToggle').setAttribute('aria-expanded', open); };
  let foldOpen = false; try { foldOpen = localStorage.getItem('dm.enchOpen') === '1'; } catch (e) {}
  setFold(foldOpen);
  $('#enchToggle').onclick = () => { const o = !eb.classList.contains('open'); setFold(o); try { localStorage.setItem('dm.enchOpen', o ? '1' : '0'); } catch (e) {} };
  $('#wOk').onclick = () => $('#welcome').classList.add('hidden');
  $('#langSel').onchange = e => changeLang(e.target.value);
  $('#lowFx').checked = !!(S && S.lowFx); $('#lowFx').onchange = e => { S.lowFx = e.target.checked; applyLowFx(); save(S); };
  $('#setBtn').onclick = () => { hideTip(); refreshSave(); refreshSyncLine(); refreshAutoBox(); autoNotice.dot = false; $('#setDot').classList.add('hidden'); $('#lowFx').checked = !!S.lowFx; $('#setModal').classList.remove('hidden'); };
  $('#setClose').onclick = () => $('#setModal').classList.add('hidden');
  const diagText = async () => {
    const o = await chrome.storage.local.get(['dm.diag.sw']);
    let pop = []; try { pop = JSON.parse(localStorage.getItem('dm.diag') || '[]'); } catch (e) {}
    const all = [...pop, ...(o['dm.diag.sw'] || [])].sort((a, b) => a.at - b.at);
    const pad = n => String(n).padStart(2, '0');
    return all.slice(-120).map(e => { const d = new Date(e.at); return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} [${e.ctx} +${e.ms}ms] ${e.m}`; }).join('\n') || '(empty)';
  };
  $('#diagShow').onclick = async () => { const ta = $('#diagTxt'); ta.classList.remove('hidden'); ta.value = await diagText(); ta.scrollTop = ta.scrollHeight; };
  $('#diagCopy').onclick = async () => { const txt = 'Deskgeon ' + chrome.runtime.getManifest().version + '\n' + await diagText(); try { await navigator.clipboard.writeText(txt); toast(t('ui.copiedDiag')); } catch (e) { const ta = $('#diagTxt'); ta.classList.remove('hidden'); ta.value = txt; ta.select(); } };
  $('#diagClear').onclick = async () => { await chrome.storage.local.remove(['dm.diag', 'dm.diag.sw']); try { localStorage.removeItem('dm.diag'); } catch (e) {} $('#diagTxt').value = ''; toast(t('ui.cleared')); };
  $('#setModal').onclick = e => { if (e.target.id === 'setModal') $('#setModal').classList.add('hidden'); };
  {
    let armedR = false, tmR;
    $('#respecBtn').onclick = async () => {
      const b = $('#respecBtn');
      if (!armedR) { armedR = true; b.textContent = t('ui.respecAgain'); b.classList.add('armed'); clearTimeout(tmR); tmR = setTimeout(() => { armedR = false; b.textContent = t('ui.respec'); b.classList.remove('armed'); }, 3000); return; }
      clearTimeout(tmR); armedR = false; b.textContent = t('ui.respec'); b.classList.remove('armed');
      await backup(S, 'respec');
      const n = resetSkills(S); save(S, 'force'); st = stats(S);
      addLog(`<span class="hi">${t('ui.respecDone', { n })}</span>`);
      buildSkills(); render();
    };
  }
  $('#bossBtn').onclick = () => { if (challengeBoss(S)) { save(S); handleEvents._waitLogged = false; addLog(`<b>${t('ui.bossGo')}</b>`); } };
  const as = $('#autoSell');
  as.value = String(S.autoSell ?? -1);
  as.onchange = () => { S.autoSell = +as.value; save(S); addLog(S.autoSell < 0 ? t('ui.autoSellOff') : t('ui.autoSellOn', { r: RARITIES[S.autoSell].name })); };
  $('#oddsBtn').onclick = () => {
    const o = rarityOdds(S.maxFloor), ob = rarityOdds(S.maxFloor, true);
    $('#tip').innerHTML = `<div class="tn">${t('ui.oddsTitle', { n: S.maxFloor })}</div>` + RARITIES.map((r, i) => `<div>${t('ui.oddsRow', { r: `<span style="color:${r.color}">${r.name}</span>`, p: (o[i] * 100).toFixed(1), b: (ob[i] * 100).toFixed(1), n: [0, 1, 2, 3, 3][i] })}${i === 4 ? t('ui.plusUnique') : ''}</div>`).join('');
    const tip = $('#tip'); tip.classList.remove('hidden'); tip.style.left = '12px'; tip.style.top = '120px';
    setTimeout(hideTip, 5000);
  };
  $('#gOk').onclick = () => $('#gachaModal').classList.add('hidden');
  $('#clsCancel').onclick = () => $('#clsModal').classList.add('hidden');
  $('#compModal').onclick = e => { if (e.target.id === 'compModal') $('#compModal').classList.add('hidden'); };
  $('#pull1').onclick = () => doPull(false);
  $('#pull10').onclick = () => doPull(true);
  bindAutoPull();
  $('#lvAll').onclick = () => {
    const r = compLevelUpAll(S);
    if (!r.n) return;
    save(S); st = stats(S); buildComps(); render();
    const names = Object.entries(r.ups).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([id, k]) => `${COMP_BY_ID[id].name} +${k}`).join(', ');
    addLog('<b>' + t('ui.lvAllLog', { n: r.n, s: fmtN(r.spent) }) + '</b> ' + names + (Object.keys(r.ups).length > 3 ? ' …' : ''));
    toast(t('ui.lvAllLog', { n: r.n, s: fmtN(r.spent) }));
  };
  holdRepeat($('#buyStone'), () => { if (!buyStone(S)) return false; render(); return true; },
    n => addLog(n ? t('ui.stonesPlus', { n: n * 10 }) : t('ui.noGold')));
  $('#buyStoneAll').onclick = () => { const r = buyStoneMax(S); if (!r.stones) { toast(t('ui.noGold')); return; } save(S); render(); addLog('<b>' + t('ui.stonesPlus', { n: fmtN(r.stones) }) + '</b> · ' + t('ui.goldSpent', { g: fmt(r.spent) })); toast(t('ui.stonesPlus', { n: fmtN(r.stones) })); };

  let armed = false, tm = null;
  $('#rbBtn').onclick = async () => {
    if (!honorGain(S)) return;
    if (!armed) {
      armed = true; $('#rbBtn').textContent = t('ui.rbAgain'); $('#rbBtn').classList.add('armed');
      clearTimeout(tm); tm = setTimeout(() => { armed = false; $('#rbBtn').textContent = t('ui.doRebirth'); $('#rbBtn').classList.remove('armed'); }, 4000);
      return;
    }
    clearTimeout(tm); armed = false; $('#rbBtn').textContent = t('ui.doRebirth'); $('#rbBtn').classList.remove('armed');
    await backup(S, 'rebirth');
    const g = rebirth(S);
    save(S, 'force'); logLines = []; hudSig = '';
    addLog(`<b>${t('ui.rebirthLog', { n: g })}</b>`);
    if (LAST_CONV.stones) addLog(t('conv.log', { n: fmtN(LAST_CONV.stones), g: fmt(LAST_CONV.gold) }));
    flash('#c78dff', .7, .8);
    buildSlots(); buildBag(); buildSkills(); buildComps(); buildRelics();
  };
}

// ================= 세이브 관리 =================
function toast(msg, color) {
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = msg;
  if (color) el.style.borderColor = color;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2300);
}
const ago = ms => { const s = Math.floor((Date.now() - ms) / 1000); return s < 60 ? t('ui.agoS', { n: s }) : s < 3600 ? t('ui.agoM', { n: Math.floor(s / 60) }) : t('ui.agoH', { n: Math.floor(s / 3600) }); };
let drvBusy = false;
// 자주 나오는 로그인 오류를 알아듣기 쉬운 말로
function drvErrText(e) {
  e = String(e || '');
  if (/only one web auth flow/i.test(e)) return t('ui.drvBusyErr');
  if (/did not approve|user cancel|closed|access_denied/i.test(e)) return t('ui.drvCancel');
  if (/login-needed|interaction_required|consent_required|login_required/.test(e)) return t('ui.drvRelogin');
  if (/Failed to fetch|NetworkError|network/i.test(e)) return t('ui.drvNet');
  return e;
}
function refreshSyncLine() {
  const dd = $('#drvDot'), dt = $('#drvTxt'), db = $('#drvBtn');
  if (dd) {
    dd.className = 'sdot';
    if (!driveState.supported) { dd.classList.add('off'); dt.textContent = t('ui.drvUnsupported'); db.disabled = true; }
    else if (!driveState.linked) { dt.textContent = t('ui.drvOff'); db.textContent = t('ui.driveLink'); db.disabled = false; }
    else if (drvBusy) { dt.textContent = t('ui.drvWait'); db.textContent = t('ui.drvWaitBtn'); db.disabled = true; }
    else if (driveState.ok === false && /login-needed|interaction_required|consent_required|login_required/.test(driveState.err)) { dd.classList.add('bad'); dt.textContent = t('ui.drvRelogin'); db.textContent = t('ui.drvReloginBtn'); db.disabled = false; }
    else if (driveState.ok === false) { dd.classList.add('bad'); dt.textContent = t('ui.drvErr', { e: drvErrText(driveState.err) }); db.textContent = t('ui.driveUnlink'); db.disabled = false; }
    else { dd.classList.add('ok'); dt.textContent = driveState.at ? t('ui.drvOk', { ago: ago(driveState.at) }) : t('ui.drvLinked'); db.textContent = t('ui.driveUnlink'); db.disabled = false; }
  }
  const dot = $('#syncDot'), txt = $('#syncTxt');
  if (!dot) return;
  dot.className = 'sdot';
  if (syncState.ok === false) { dot.classList.add('bad'); txt.textContent = t('ui.syncFail', { e: syncState.err }); }
  else if (syncState.ok) { dot.classList.add('ok'); txt.textContent = t('ui.syncOk', { ago: ago(syncState.at) }); }
  else { dot.classList.add('off'); txt.textContent = t('ui.syncWait'); }
}
async function refreshSave() {
  refreshSyncLine();
  const list = await listBackups();
  const box = $('#baks');
  box.innerHTML = list.length ? '' : `<div class="sbhint">${t('ui.noBackup')}</div>`;
  list.forEach((b, i) => {
    const s = b.s || {};
    const d = document.createElement('div');
    d.className = 'bak';
    d.innerHTML = `<span>${ago(b.at)} · ${reasonText(b.reason)}</span><b>${s.cls ? CLASSES[s.cls].name : '-'} Lv.${s.level} B${s.maxFloor}F</b><button class="mini">${t('ui.restore')}</button>`;
    let armed = false;
    d.querySelector('button').onclick = async e => {
      const btn = e.currentTarget;
      if (!armed) { armed = true; btn.textContent = t('ui.again'); setTimeout(() => { armed = false; btn.textContent = t('ui.restore'); }, 3000); return; }
      await applySave(b.s, 'restore');
    };
    box.appendChild(d);
  });
}
async function applySave(raw, why) {
  await backup(S, 'before:' + why);
  const n = importCode(exportCode(raw));    // normalize + lastTick 갱신
  Object.keys(S).forEach(k => delete S[k]);
  Object.assign(S, n);
  await save(S, 'force');
  hudSig = ''; logLines = [];
  st = stats(S);
  buildSlots(); buildBag(); buildSkills(); buildComps();
  if (!S.cls) openClassModal(false);
  addLog(`<b>${t('ui.done', { w: reasonText(why) })}</b> · Lv.${S.level} B${S.floor}F`);
  toast(t('ui.done', { w: reasonText(why) }));
  refreshSave();
}
function bindSave() {
  driveStatus().then(refreshSyncLine);
  let drvArmed = false;
  // 로그인은 서비스 워커에서 진행되므로, 팝업을 다시 열었을 때나 다른 창에서 끝났을 때도 상태를 바로 반영
  chrome.storage.onChanged.addListener((ch, area) => { if (area === 'local' && ch['dm.drive']) driveStatus().then(refreshSyncLine); });
  $('#drvBtn').onclick = async () => {
    if (drvBusy) return;
    const relogin = driveState.linked && driveState.ok === false && /login-needed|interaction_required|consent_required|login_required/.test(driveState.err);
    if (driveState.linked && !relogin) {
      if (!drvArmed) { drvArmed = true; $('#drvBtn').textContent = t('ui.unlinkAgain'); setTimeout(() => { drvArmed = false; refreshSyncLine(); }, 3000); return; }
      await driveUnlink(); toast(t('ui.unlinked')); refreshSyncLine(); return;
    }
    drvBusy = true; refreshSyncLine();
    try {
      await driveLink();
      const r = await driveSync(S, { interactive: true, push: false });
      if (r.action === 'pull') await applySave(r.save, 'drive');
      else if (r.action === 'error') throw new Error(r.err);
      else { await driveSync(S, { push: true }); toast(t('ui.driveDone')); }
    } catch (e) { toast(t('ui.linkFail', { e: drvErrText(e.message || e) }), '#ff6b7a'); }
    drvBusy = false; refreshSyncLine();
  };
  $('#syncNow').onclick = async () => { await save(S, 'force'); refreshSyncLine(); toast(syncState.ok ? t('ui.savedAcc') : t('ui.syncFail', { e: syncState.err || '' }), syncState.ok ? null : '#ff6b7a'); };
  $('#expBtn').onclick = async () => {
    const code = exportCode(S);
    try { await navigator.clipboard.writeText(code); toast(t('ui.copied', { n: code.length })); }
    catch (e) { $('#impTxt').value = code; $('#impTxt').select(); toast(t('ui.copyManual'), '#ffc35c'); }
  };
  let armed = false;
  $('#impBtn').onclick = async () => {
    const code = $('#impTxt').value.trim();
    let n;
    try { n = importCode(code); } catch (e) { toast(e.message, '#ff6b7a'); return; }
    if (!armed) {
      armed = true;
      $('#impBtn').textContent = t('ui.overwrite', { l: n.level, f: n.maxFloor });
      setTimeout(() => { armed = false; $('#impBtn').textContent = t('ui.loadCode'); }, 4000);
      return;
    }
    armed = false; $('#impBtn').textContent = t('ui.loadCode'); $('#impTxt').value = '';
    await applySave(n, 'import');
  };
}

function showReport(res) {
  $('#wBody').innerHTML =
    t('ui.rep.time', { t: fmtDur(res.seconds) }) + '<br>' +
    t('ui.rep.kills', { k: `<b>${fmt(res.kills)}</b>`, g: `<b>${fmt(res.gold)}</b>` }) + (res.stones > 0 ? t('ui.rep.stones', { s: `<b>${res.stones}</b>` }) : '') + '<br>' +
    (res.floors > 0 ? t('ui.rep.floors', { f: `<b>${res.floors}</b>`, n: S.floor }) + '<br>' : '') +
    (res.levels > 0 ? t('ui.rep.lv', { l: `<b>${res.levels}</b>` }) + '<br>' : '') +
    (res.rebirths > 0 ? t('ui.rep.rebirths', { n: `<b>${res.rebirths}</b>` }) + '<br>' : '') +
    ((S.events || []).length ? '<b class="hi">' + t('ev.waiting', { n: S.events.length }) + '</b><br>' : '') +
    (AUTO.some(a => a.need(S) && !(S.autoSeen || []).includes(a.id)) ? '<b class="hi">' + t('auto.repNew') + '</b><br>' : '') +
    (expSlots(S).some(x => x && Date.now() >= x.end) ? '<b class="hi">' + t('exp.repDone') + '</b><br>' : '');
  const best = res.drops.slice().sort((a, b) => (b.r * 10 + b.t) - (a.r * 10 + a.t)).slice(0, 8);
  $('#wDrops').innerHTML = best.map(it => `<div style="border-color:${RARITIES[it.r].color}"><img class="px" src="${itemIcon(it, S.cls)}"></div>`).join('');
  $('#welcome').classList.remove('hidden');
}

// ================= 시작 =================
async function init() {
  window.__dmStep = 'preload';
  await preload();
  window.__dmStep = 'load';
  S = await load();
  window.__dmStep = 'advance';
  { const off = Math.round((Date.now() - (S.lastTick || Date.now())) / 1000); (window.__dmLog || (() => {}))('save lv' + S.level + ' B' + S.floor + ' bag' + S.bag.length + ' comp' + Object.keys(S.comp || {}).length + ' from=' + S._from + ' offline=' + off + 's'); }
  const _adv0 = performance.now();
  setLang(S.lang || 'en');
  applyI18n(); applyLowFx();
  advance(S);
  cgSnap = cgSnapNow(); if (S.cgAuto !== false) cgAutoEquip(S);   // 예전 세이브: 가방에 남은 장비를 한 번 정리
  if (S.pending && S.pending.seconds > 60 && (S.pending.kills > 0 || S.pending.gold > 0)) { showReport(S.pending); S.pending = null; }
  await save(S);
  st = stats(S);
  (window.__dmLog || (() => {}))('advance done ' + Math.round(performance.now() - _adv0) + 'ms');
  window.__dmStep = 'build';
  buildSlots(); buildBag(); buildShop(); buildSkills(); buildComps(); buildRelics(); buildEnch(); bindUI();
  window.__dmStep = 'render';
  render();
  if (!S.cls) openClassModal(false);
  else addLog(`<b>${t('ui.resume', { n: S.floor })}</b>` + (S._from === 'sync' ? ` · <span class="hi">${t('ui.fromSync')}</span>` : ''));
  requestAnimationFrame(rafLoop);
  setInterval(() => save(S), 4000);
  // 창이 닫힐 때: visibilitychange 와 pagehide 가 연달아 오므로 한 번만 처리.
  // 팝업은 로컬에만 저장하고, 계정 동기화·드라이브는 서비스 워커가 맡는다 (닫히는 페이지에서 무거운 작업 X)
  let flushedAt = 0;
  const flush = () => {
    if (Date.now() - flushedAt < 1500) return;
    flushedAt = Date.now();
    (window.__dmLog || (() => {}))('flush');
    try { const c = serialize(S); chrome.runtime.sendMessage({ type: 'flush', save: c }).catch(() => {}); } catch (e) {}
    save(S, 'local').catch(() => {});
  };
  window.addEventListener('pagehide', flush);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  bindSave(); refreshSave(); bindGuide(); bindEvents(); bindAutoBox(); bindAutoCard(); bindCompExtras(); bindStoneShop(); bindPets(); bindSoul();
  window.__dmReady = true; window.__dmStep = 'ready';
  setInterval(refreshSyncLine, 1000);
  // 드라이브에 다른 기기의 더 최신 세이브가 있으면 켜자마자 가져온다
  const openedAt = Date.now();
  driveSync(S, { push: false }).then(r => {
    refreshSyncLine();
    if (r.action === 'pull' && Date.now() - openedAt < 15000) applySave(r.save, 'drive');
  });
  setInterval(() => { driveSync(S, { push: true }).then(refreshSyncLine); }, 120000);
}
init().catch(e => { console.error(e); if (window.__dmFail) window.__dmFail(e); });

// ================= 기록 카드 (1200×630 공유 이미지) =================
const CARD_URL = 'an-yoo.github.io/Deskgeon';
const cardImgs = {};
const cardImg = src => cardImgs[src] ||= new Promise(r => { const im = new Image(); im.onload = () => r(im); im.onerror = () => r(null); im.src = src; });
function cardData() {
  const own = Object.keys(S.comp || {}).filter(id => COMP_BY_ID[id]);
  const days = S.createdAt ? Math.max(1, Math.ceil((Date.now() - S.createdAt) / 864e5)) : 1;
  const soul = S.soul && S.soul.made ? S.soul : null;
  return { cls: S.cls, clsName: t('cls.' + S.cls), best: S.bestFloor || S.maxFloor || 1, reinc: S.reinc || 0, rebirths: S.rebirths || 0, pulls: S.pulls || 0, days,
    comp: own.length, compMax: COMPANIONS.length, mr: own.filter(id => COMP_BY_ID[id].r === 5).length,
    cos: cosCount(S), cosMax: COSTUMES.length, pet: Object.keys((S.pets && S.pets.own) || {}).length, petMax: PETS.length,
    soul, team: (S.team || []).filter(id => COMP_BY_ID[id]).slice(0, TEAM_MAX), pet1: S.pets && S.pets.act };
}
function cardRound(x, c, y, w, h, r) { x.beginPath(); x.moveTo(c + r, y); x.arcTo(c + w, y, c + w, y + h, r); x.arcTo(c + w, y + h, c, y + h, r); x.arcTo(c, y + h, c, y, r); x.arcTo(c, y, c + w, y, r); x.closePath(); }
async function drawCard(cv) {
  const D = cardData(), x = cv.getContext('2d'), W = 1200, H = 630, F = '"Pretendard","Segoe UI",system-ui,sans-serif';
  x.clearRect(0, 0, W, H); x.imageSmoothingEnabled = false;
  let g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#221a3f'); g.addColorStop(1, '#0c0a18'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  const tile = await cardImg('assets/floor/f' + (FLOOR_TILES[monsterIndex(Math.max(1, S.floor || 1))] ?? 0) + '.png') || await cardImg('assets/floor/f0.png');
  if (tile) { x.globalAlpha = .22; for (let ty = 410; ty < H; ty += 64) for (let tx = 0; tx < W; tx += 64) x.drawImage(tile, tx, ty, 64, 64); x.globalAlpha = 1; }
  const glow = (cx, cy, r, col) => { const rg = x.createRadialGradient(cx, cy, 0, cx, cy, r); rg.addColorStop(0, col); rg.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = rg; x.fillRect(cx - r, cy - r, r * 2, r * 2); };
  glow(290, 290, 300, 'rgba(150,110,255,.45)'); glow(980, 120, 260, 'rgba(255,190,90,.16)'); glow(820, 560, 280, 'rgba(90,200,255,.12)');
  const hero = heroSprite(S.cls); x.fillStyle = 'rgba(0,0,0,.35)'; x.beginPath(); x.ellipse(290, 418, 120, 20, 0, 0, 7); x.fill();
  x.drawImage(hero, 146, 130, 288, 288);
  if (D.pet1) { const pi = await cardImg('assets/pet/' + D.pet1 + '.png'); if (pi) x.drawImage(pi, 40, 300, 128, 128); }
  x.textAlign = 'center'; x.fillStyle = '#fff'; x.font = '800 34px ' + F; x.fillText(D.clsName, 290, 470);
  const tw = D.team.length > 3 ? 64 : 76, tg = D.team.length > 3 ? 10 : 14, tx0 = 290 - (D.team.length * tw + (D.team.length - 1) * tg) / 2;
  for (let i = 0; i < D.team.length; i++) { const c = COMP_BY_ID[D.team[i]], im = await cardImg(compSrc(c.id)), px = tx0 + i * (tw + tg), py = 500;
    cardRound(x, px, py, tw, tw, 12); x.fillStyle = 'rgba(255,255,255,.07)'; x.fill(); x.lineWidth = 3; x.strokeStyle = C_RARITY[c.r].color; x.stroke(); if (im) x.drawImage(im, px + 6, py + 6, tw - 12, tw - 12); }
  const PX = 560, PY = 48, PW = 600, PH = 534;
  cardRound(x, PX, PY, PW, PH, 28); x.fillStyle = 'rgba(255,255,255,.07)'; x.fill(); x.lineWidth = 2; x.strokeStyle = 'rgba(255,255,255,.16)'; x.stroke();
  x.textAlign = 'left'; x.fillStyle = 'rgba(214,204,255,.75)'; x.font = '700 22px ' + F; x.fillText('DESKGEON', PX + 40, PY + 52);
  x.textAlign = 'right'; x.fillStyle = 'rgba(214,204,255,.55)'; x.font = '500 20px ' + F; x.fillText(new Date().toLocaleDateString(getLang()) + '  ·  ' + t('card.daysH', { n: fmtN(D.days) }), PX + PW - 40, PY + 52);
  x.textAlign = 'left'; x.fillStyle = 'rgba(255,255,255,.7)'; x.font = '600 24px ' + F; x.fillText(t('card.best'), PX + 40, PY + 112);
  g = x.createLinearGradient(0, PY + 120, 0, PY + 230); g.addColorStop(0, '#fff2c4'); g.addColorStop(1, '#ffb94a'); x.fillStyle = g; x.font = '900 112px ' + F; x.fillText('B' + fmtN(D.best), PX + 34, PY + 222);
  const cells = [[t('card.reinc'), fmtN(D.reinc)], [t('card.rebirth'), fmtN(D.rebirths)], [t('card.comp'), D.comp + '/' + D.compMax + (D.mr ? '  MR ' + D.mr : '')], [t('card.pulls'), fmtN(D.pulls)],
    [t('card.cos'), D.cos + '/' + D.cosMax], [t('card.pet'), D.pet + '/' + D.petMax], [t('card.soul'), D.soul ? 'Lv.' + D.soul.lv : '-', D.soul && (D.soul.name || ''), 1]];
  // 칸: [이름, 값, 보조(영혼무기 이름), 한 줄 전체]
  const half = (PW - 80 - 16) / 2, ch = 56, soulIm = D.soul ? await cardImg('assets/soul/' + D.soul.look + '.png') : null;
  cells.forEach(([k, v, sub, full], i) => {
    const cx = PX + 40 + (i % 2) * (half + 16), cy = PY + 250 + Math.floor(i / 2) * (ch + 10), cw = full ? half * 2 + 16 : half, right = cx + cw - 16;
    cardRound(x, cx, cy, cw, ch, 12); x.fillStyle = 'rgba(255,255,255,.06)'; x.fill();
    x.textAlign = 'left'; x.fillStyle = 'rgba(255,255,255,.62)'; x.font = '600 19px ' + F; x.fillText(k, cx + 16, cy + 36); const kw = x.measureText(k).width;
    x.textAlign = 'right'; x.fillStyle = '#fff'; x.font = '800 23px ' + F; x.fillText(v, right, cy + 36); const vw = x.measureText(v).width;
    if (sub) { x.fillStyle = '#d9c8ff'; x.font = '600 19px ' + F; let s2 = sub; const room = cw - 32 - kw - vw - 10 - (soulIm ? 50 : 0) - 16; while (s2.length > 1 && x.measureText(s2).width > room) s2 = s2.slice(0, -2) + '…';
      x.fillText(s2, right - vw - 10, cy + 36); if (soulIm) x.drawImage(soulIm, right - vw - 10 - x.measureText(s2).width - 46, cy + 8, 40, 40); }
  });
  x.textAlign = 'right'; x.fillStyle = 'rgba(214,204,255,.55)'; x.font = '500 18px ' + F; x.fillText(CARD_URL, PX + PW - 8, H - 18);
  x.textAlign = 'left';
}
function cardText() { const D = cardData(); return t('card.share', { c: D.clsName, f: fmtN(D.best), r: fmtN(D.reinc), b: fmtN(D.rebirths), n: D.comp, m: D.compMax, p: D.pet, q: D.petMax, o: D.cos, w: D.cosMax }) + '\n' + 'https://' + CARD_URL + '/'; }
const cardBlob = () => new Promise(r => $('#cardCv').toBlob(r, 'image/png'));
async function openCard() { $('#cardModal').classList.remove('hidden'); await drawCard($('#cardCv')); }
document.addEventListener('click', async e => {
  const id = e.target.closest('button')?.id; if (!id || !/^card(Btn|Save|Copy|Text|Close)$/.test(id)) return;
  if (id === 'cardBtn') return openCard();
  if (id === 'cardClose') return $('#cardModal').classList.add('hidden');
  try {
    if (id === 'cardText') { await navigator.clipboard.writeText(cardText()); toast(t('card.copiedT')); }
    else if (id === 'cardCopy') { const b = await cardBlob(); await navigator.clipboard.write([new ClipboardItem({ 'image/png': b })]); toast(t('card.copied')); }
    else if (id === 'cardSave') { const b = await cardBlob(), u = URL.createObjectURL(b), a = document.createElement('a'); a.href = u; a.download = 'deskgeon-B' + (S.bestFloor || 0) + '.png'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 4000); toast(t('card.saved')); }
  } catch (err) { toast(t('card.fail'), '#ffc35c'); }
});
