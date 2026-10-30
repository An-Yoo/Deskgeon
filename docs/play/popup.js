import {
  SLOTS, SLOT_BY_ID, SLOT_STAT_NAME, RARITIES, MONSTERS, FLOOR_NAMES, FLOOR_TILES, UPGRADES, SKILLS, SKILL_BY_ID, SKILL_MAX, CLASSES, CLASS_IDS, COMPANIONS, COMP_BY_ID, C_RARITY, TEAM_MAX, AWAKEN_MAX, PULL_COST, PULL10_COST, PITY, BOSS_TIME, REBIRTH_FLOOR, OFFLINE_RATE, STAT_LABEL, load, save, advance, step, stats, monsterIndex, killsNeeded, xpNeed, itemValue, itemName, itemIcon, itemDoll, sellPrice, equipFromBag, sellFromBag, sellAllWorse, buyUpgrade, upgradeCost, upgradeCostN, buyStone, buyStoneMax, stoneMaxCount, bagCount, sellByRarity, itemKey, stonePrice, learnSkill, skillUnlocked, skillVal, skillDesc, passiveChance, passiveMult, classSkills, changeClass, teamValue, ownValue, compCoef, ownSummary, statText, pull, toggleTeam, honorGain, rebirth, fmt, fmtDur, syncState, backup, listBackups, exportCode, importCode, SYNC_EVERY_MS, driveState, driveStatus, driveLink, driveUnlink, driveSync, itemScore, baseName, AFFIXES, UNIQUES, rarityOdds, canChallenge, challengeBoss, savePreset, applyPreset, PRESET_MAX, t, setLang, getLang, LANGS, resetSkills, stoneDiscount, serialize, compPassive, compActive, compSkillName, compSkillDesc, CSK_AW_P, CSK_AW_A, RELICS, relicLv, relicCost, buyRelic, offlineRate, BREAK_EVERY, BREAK_X, BREAK_IDS, breakMult, SHARD_GAIN, CLV_MAX, CLV_STEP, compLvCost, compLevelUp, MASTERY, masteryLv, masteryUnlocked, buyMastery, skillsMaxed, masterySkills, spTotal, compLevelUpAll, ZONES, zoneStart, loopOf, LOOP_LEN, ESS_BY_R, gearEssence, REINC_FLOOR, KARMA_HONOR, KARMA_POW, karmaGain, canReinc, rbFloorTarget, riTarget, reincarnate, DAILY, WEEKLY, DAILY_ALL, WEEKLY_ALL, ATTEND, BOOST_MIN, BOOST_X, questRoll, missionState, claimMission, canAttend, attend, boostLeft, boostMult, speedMult, useBoost, AUTO, autoOn, bossRetryWait, TOWER_TRIES, TOWER_TIME, towerMon, canTower, towerStart, mutKind, mutOf, setMut, mutPending, EVENTS, EVENT_BY_ID, EVENT_TTL, resolveEvent, eventOptOk, eventReward, GUIDE, guideStep, guideClaim, guideTick, DAILY_TRIES, DAILY_MODS, DAILY_BLESS, dailyState, dailyMod, dailyRun, sigOf, SIG_PITY, TOWERS, towerState, riftState, canRift, riftStart, riftUnlocked, riftFloor, RIFT_UNLOCK, RIFT_WAVES, RIFT_TIME, KEY_DAILY, KEY_MAX, RUNE_SLOTS, RUNE_BAG, RUNE_UP_MAX, runeState, runeVal, runeEquip, runeUnequip, runeUpgrade, runeUpCost, runeDismantle, runeDustOf, runeSum, runeScore, ENCH_MAX, ENCH_STEP, enchLv, enchCost, enchant, SETS, setInfo, ACH, ACH_REWARD, ACH_PCT, BEST_STARS, BEST_PCT, achMet, achClaimed, achPoints, claimAch, bestStars, convPreview, LAST_CONV, COS_SLOTS, COSTUMES, COS_BY_ID, lookOf, lookOptions, setLook, cosCount, EXP_SLOTS, EXP_SIZE, EXP_DUR, expSlots, onExped, expFree, expPower, expMult, expAutoPick, expPreview, expStart, expRecall, expClaim, CG_KINDS, CG_BAG, CG_DUST, cgVal, cgBag, cgEq, cgEquip, cgUnequip, cgDismantle, cgMerge, cgAutoEquip, cgScore, C_MAXR, STONE_SHOP, MILE_LR, MILE_MR, shopKeyLeft, rushCost, shopBuy, mileBuy, expCap, EXP_MAX, MR_POW, MRP_MAX, mrpNeed, mrpLv, mrpXp, cgBladeSum, cgExpVal, BASIC_SKILL_K, renamePreset, enchX, enchNextCost, enchXSum, ENCHX_POW, PETS, PET_MAX, PET_UNLOCK, PET_FX, PET_FX_KEYS, petUnlocked, petCap, petOwned, petLeft, petDrawCost, petRollCost, petLvCost, petVal, petAgg, petDraw, petLevelUp, petRoll, petKeep, petSetAct, petPot, petDeposit, SOUL_REINC, SOUL_MAXLV, SOUL_SLOT_AT, SOUL_FX_KEYS, SOUL_LOOKS, soulUnlocked, soulMade, soulCap, soulNeed, soulSlots, soulCraft, soulSetLook, soulRename, soulSetOpt, soulShow, soulFeedCost, soulFeed, soulVal, petAutoRoll, petAutoOdds, petWant, rushAllCost, cosLeftN, shopBuyN, expSendAll, expClaimAll, cgTakeMoved, soulAwakenSkill, cosBonus, cosFxOf, COS_FX, COS_FX_V, petLevelUpAll, compSyn, teamMax, TEAM5_FLOOR, METER, meterReset, TITLES, TITLE_BY_ID, titleState, titleNeed, titleOwned, titleEquip, titleBonus, TITLE_KEYS, TOWN_N, TOWN_B, TOWN_BY_ID, TOWN_MAXLV, TOWN_PAIR, townState, townCount, townCopies, townCopyMax, townTileCost, townBuildCost, townUpCost, townCanOpen, townOpen, townBuild, townUp, townMove, townSell, townTileMult, townAgg, townVal, dl2State, dl2Cur, dl2Start, dl2Pick, dl2Buy, dlWeekSum, DL_WEEK, DL_SHOP, DL_EVERY, towerBestAll, masterySpent, canTowerSweep, towerSweep, towerSweepAll, canRiftSweep, riftSweep, riftSweepAll, townUsed, townRes, townResMult, townCostOf, TOWN_RES_PCT, TOWN_RES_CAP, townOpenable, townOpenNext, townOpenMany, townOpenAffordable, TOWN_FLOORS, TOWN_FLOOR_BY_ID, TOWN_RESERVES, townFloor, townPaint, townCheapest, townUpCheap, BOSS_EVERY, tpreOn, tpreSave, tpreSet, tpreSameAsNow, setSaveHooks, loadLocal, cosPool, hwOn, HW_END, HW_GIFT, monPick, HW_MOBS, HW_MOB_X, exportCodeShort, importCodeAny, sigTypes, SIG_BOOK, SIG_ORDER, RUNE_RMULT,
  TRACES, traceState, traceLv, traceCost, traceGain, buyTrace, autoTraces, TRACE_HONOR, TRACE_KARMA, TRACE_START, TRACE_DEEP_FLOOR,
  MDEX_KEYS, MDEX_PCT, mdexStars, BLESS, BLESS_BY_ID, BLESS_BOOK, blessState, blessFx, blessSeenN, chooseBless, TRACE_OFFH, TRACE_EXP, TRACE_POW, OFFLINE_CAP_H as OFF_CAP0,
  soulFree, SOUL_FREE_FLOOR,
  RUNE_SLOT_MAX, RUNE_SLOT_PCT, runeSlotPct, runeSlotCost, runeSlotUp, runeAutoSpend,
  AW_TOP, awCost, compAwaken, compNextCost, compAwNextCost, ABY_FLOOR, ABY_H, ABY_SIZE, abyUnlocked, abyState, abyNeed, abyAutoPick, abyPreview, abyReward, abyStart, abyClaim, abyRecall, abyAuto , SIG_TYPES , attendNew, attendReward, ATTEND_NEW_X , abyGift, mailState, mailCount, mailAdd, mailClaim, mailClaimAll , pickCount, pickUse , divTier, divDom, divSetDom, divNew, divSeen, DIV_DOMS, DIV_ALL, DIV_STEP , townN, isCastle, castleReady, castleUp, CASTLE_NEED, CASTLE_COST , divScale , divBand , gboostLeft, D, dn, dmin, dmax, Decimal, STYLES, STYLE_FLOOR, styleOf, styleUnlocked, setStyle, TOWER_MYTH_FLOOR, CG_MYTH, MYTH_BOX_FLOOR, MYTH_BOX_P, ENGR_KEYS, ENGR_V, ENGR_R, ENGR_W, ENGR_COST, engrFx, engrRoll, engrPick, engrRollUntil, simJob, simRun, simSnap, adviceCands, basicModeDue , isBossFloor } from './game.js';
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
  for (let i = 0; i < ZONES; i++) n.push('mon/m' + i, 'mon/m' + i + 'a', 'mon/m' + i + 'b');
  for (let i = 0; i < HW_MOBS; i++) n.push('mon/hw' + i);
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
// 스킬 쿨이 짧아지면 초당 수십 번 시전된다. 이름 띠·아이콘 깜빡임·날아가는 아이콘은 개수를 묶어서 DOM 작업이 탭 입력을 밀지 않게 한다 (5.14.7)
const fxLast = {};
const fxGap = (k, sec) => { const n = performance.now(); if (n - (fxLast[k] || -1e9) < sec * 1000) return false; fxLast[k] = n; return true; };
function cutin(sd) {
  if (lowFx() || !fxGap('cut:' + sd.id, 1.2) || $('#banners').childElementCount >= 3) return;
  const b = document.createElement('div');
  b.className = 'cutin';
  b.style.color = CLASSES[sd.cls].color;
  b.innerHTML = `<img class="px" src="${skillSrc(sd.id)}">${sd.name}`;
  $('#banners').appendChild(b);
  setTimeout(() => b.remove(), 1000);
}
// 획득 연출(금화·소환석·장비가 위쪽 칸으로 날아감)은 던전 탭에서 창이 열려 있지 않을 때만
const flyOk = () => !document.querySelector('.page[data-tab="dungeon"]')?.classList.contains('hidden') && !document.querySelector('.modal:not(.hidden)');
function flyTo(src, cxp, cyp, target, n = 1) {
  if (!target || !fxGap('fly:' + target.id, .2) || !flyOk()) return;
  n = Math.min(n, 16 - $('#flyer').childElementCount); if (n <= 0) return;
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
    setTimeout(() => { im.remove(); if (!fxGap('bump:' + target.id, .25)) return; target.classList.remove('bump'); void target.offsetWidth; target.classList.add('bump'); }, 780 + i * 60);
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
// 5.14.3 위계 오라: 용사 뒤에 그린다 (가벼운 연출 설정이면 빛줄기는 생략)
function drawDivAura(c, x, y, tier, now) {
  if (!(tier >= 1)) return;
  c.save(); c.globalCompositeOperation = 'lighter';
  const ox = x + 16, oy = y + 18, pl = .75 + Math.sin(now * 2.2) * .25, col = tier >= 3 ? '205,160,255' : tier >= 2 ? '255,244,200' : '255,212,110';
  const g = c.createRadialGradient(ox, oy, 2, ox, oy, 16 + Math.min(tier, 5) * 3); g.addColorStop(0, `rgba(${col},${.38 * pl})`); g.addColorStop(1, `rgba(${col},0)`);
  c.fillStyle = g; c.fillRect(ox - 30, oy - 30, 60, 60);
  const n = tier >= 2 ? 7 : 4;
  for (let i = 0; i < n; i++) { const k = (now * .55 + i / n) % 1, sx = ox + Math.sin(i * 2.4 + now * .9) * 10, sy = oy + 12 - k * 32; c.fillStyle = `rgba(${col},${(1 - k) * .95})`; c.fillRect(Math.round(sx), Math.round(sy), 1, 1 + (tier >= 2 && i % 3 === 0 ? 1 : 0)); }
  if (tier >= 2) {
    if (!(S && S.lowFx)) { c.save(); c.globalCompositeOperation = 'lighter'; c.lineWidth = 1; for (let i = 0; i < 6; i++) { const a = now * .35 + i * Math.PI / 3; c.strokeStyle = `rgba(${col},.13)`; c.beginPath(); c.moveTo(ox, oy); c.lineTo(ox + Math.cos(a) * 24, oy + Math.sin(a) * 24); c.stroke(); } c.restore(); }
    c.strokeStyle = `rgba(${col},${.65 + .3 * Math.sin(now * 3)})`; c.lineWidth = 1; c.beginPath(); c.ellipse(ox, y + 2, 6.5, 1.8, 0, 0, Math.PI * 2); c.stroke();
  }
  c.restore();
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
const towerName = (id, f) => t((f || 0) > TOWER_MYTH_FLOOR || (S && (towerState(S, id).best || 0) >= TOWER_MYTH_FLOOR) ? 'tw2.' + id : 'tw.' + id);   // 5.14.11 그 탑 기록 1000층 이상이거나 이번 판이 1001층을 넘으면 상위 탑 이름
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
  drawDivAura(cx, hx, hy, divTier(S), now);
  drawHero(cx, hx, hy, S.cls, 1, true);
  { const pid = S.pets && S.pets.act, pim = pid && A['pet/' + pid]; if (pim) { const sc = .6, hop = Math.abs(Math.sin(now * (trans ? 12 : 3.2))) * (trans ? 3 : 1.6), px = hx - 13, py = GROUND - 32 * sc - hop;
    cx.fillStyle = 'rgba(0,0,0,.35)'; cx.beginPath(); cx.ellipse(px + 16 * sc, GROUND - 1, 6, 2, 0, 0, 7); cx.fill();
    cx.drawImage(silhouette(pim), 0, 0, pim.width + 2, pim.height + 2, px - sc, py - sc, (pim.width + 2) * sc, (pim.height + 2) * sc); cx.drawImage(pim, px, py, 32 * sc, 32 * sc); } }

  // 몬스터
  const mi = sceneZone(), mim = A[monKey(mi)] || A['mon/m' + mi];
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
  const dmg = st.atk.mul((1 + tier * (st.critMult - 1)) * rnd(.9, 1.1));
  const b = monBox();
  hero.lunge = cls === 'mag' ? 3 : 9;
  const impact = () => {
    const c = CLS_HIT[cls];
    if (cls === 'war') slash(b.cx - 2, b.cy, { r: crit ? 16 : 12, color: c.col, w: crit ? 3.5 : 2.5, a0: -2.4, a1: .9 });
    else if (cls === 'rog') { slash(b.cx - 3, b.cy - 3, { r: 10, color: c.col, w: 1.6, a0: -2.8, a1: -.2, dur: .12 }); later(.06, () => slash(b.cx + 1, b.cy + 3, { r: 10, color: c.col, w: 1.6, a0: .4, a1: 2.9, dur: .12 })); }
    else if (cls === 'clr') { fxs('b_yellow', b.cx - 2, b.cy, { s0: .3, s1: crit ? 1 : .7, dur: .22 }); slash(b.cx, b.cy, { r: 9, color: c.col, w: 2 }); }
    hitMon(fmtD(dmg), tier >= 3 ? 'crit crit3' : tier === 2 ? 'crit crit2' : crit ? 'crit' : '', crit);
    if (crit) { doShake(2.5, .18); fxs('b_smoke', b.cx, b.cy, { s0: .4, s1: 1.1, dur: .25 }); }
    if (crit && st.mech.thunder && Math.random() < .2) {
      for (let i = 0; i < 3; i++) later(i * .05, () => bolt(b.cx + rnd(-6, 6), -4, b.cx + rnd(-2, 2), b.cy, { dur: .3, color: '#ffe38a' }));
      later(.1, () => { flash('#fff6c0', .35, .2); doShake(4, .25); popText(t('ui.l.thunder'), b.cx, b.cy - 26, 'proc'); hitMon(fmtD(st.atk.mul(4)), 'skill', true); });
    }
    if (st.mech.double && Math.random() < .15) { hero.ghosts.push({ x: HERO_X + 12, a: 1 }); later(.12, () => { slash(b.cx, b.cy, { r: 13, color: '#ffffff', w: 2.5, a0: .8, a1: -2.3 }); hitMon(fmtD(dmg), '', false); }); }
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
    const extra = () => hitMon(fmtD(D(baseDmg).mul(m)), 'crit', true);
    switch (sd.fx) {
      case 'slash2': later(.1, () => { slash(b.cx, b.cy, { r: 14, color: '#ff8a5c', w: 3, a0: .6, a1: -2.6 }); extra(); }); break;
      case 'crush': later(.12, () => { fxs('b_smoke', b.cx, GROUND - 6, { s0: .6, s1: 2, dur: .35 }); doShake(4, .3); burst(b.cx, GROUND - 2, 16, ['#9a8466', '#5c4d3a', '#cfc0a0'], 70, 220, 2.4); extra(); }); break;
      case 'blood': fxs('blood', b.cx, b.cy, { s0: .4, s1: 1, dur: .35 }); proj(null, b.cx, b.cy, hc.x, hc.y, .35, { color: '#ff4a5a', trail: ['#ff4a5a', '#a01020'], onHit: () => { rise(hc.x, hc.y + 8, 8, ['#ff6a7a', '#ffb0b8']); if (S.boss) popText('+' + fmtH(st.hp.mul(m / 100)), hc.x, hc.y - 10, 'heal'); } }); break;
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
      case 'prayer': rise(hc.x, hc.y + 8, 14, ['#7ee08a', '#fff2b8']); fxs('holy', hc.x, hc.y, { s0: .4, s1: 1, dur: .35 }); if (S.boss) popText('+' + fmtH(st.hp.mul(m / 100)), hc.x, hc.y - 10, 'heal'); break;
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
  const dmg = D(dps).mul(1.6 * rnd(.85, 1.15));
  const col = C_RARITY[c.r].color;
  const done = () => { mon.flash = .06; mon.knock = 2; burst(b.cx, b.cy, 4, [col, '#ffffff'], 40, 120, 1.4, .35); popText(fmtD(dmg), b.cx + rnd(-12, 12), b.cy + rnd(-4, 10), 'comp'); };
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
  if (el && fxGap('cdi:' + sd.id, .4)) { el.classList.remove('cast'); void el.offsetWidth; el.classList.add('cast'); }
  const b = monBox(), hc = heroC();
  const num = c.dmg ? fmt(D(c.dmg).mul(S.boss ? st.bossMult : 1)) : null;
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
      if (S.boss) popText('+' + fmtH(st.hp.mul(.15)), hc.x, hc.y - 14, 'heal');
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
let slp = null, slpUI = 0, slpInput = Date.now(), slpLock = null, slpSig = '', slpShiftAt = 0;   // 5.14.16 절전 모드 상태 (아래 '절전 모드' 절)
function frame(now) {
  let real = Math.max(0, (now - last) / 1000);
  if (real > 5) { const t0 = performance.now(); const cr = advance(S); if (cr && cr.aby) abyLog(cr.aby); S.pending = null; real = 0; (window.__dmLog || (() => {}))('catch-up ' + Math.round(performance.now() - t0) + 'ms'); }
  const dt = Math.min(.25, real);
  last = now; lastFrame = now;
  for (let i = timers.length - 1; i >= 0; i--) { timers[i].t -= dt; if (timers[i].t <= 0) { const f = timers[i].fn; timers.splice(i, 1); f(); } }

  const prevBoss = !!S.boss;
  const ev = {};
  // 게임 시간은 실제 경과 시간 그대로 (프레임이 느려도 손실 없음)
  let rem = Math.min(real, 2) * speedMult(S);
  while (rem > 0) { step(S, Math.min(.25, rem), ev); rem -= .25; }
  if (guideTick(S, Math.min(real, 2))) { const gb = $('#guideBox'); if (gb) gb.dataset.sig = ''; }   // 5.14.15 B20 이후 막히면 환생 가이드를 먼저
  S.lastTick = Date.now();          // 팝업에서 진행한 시간이 오프라인에 중복 적립되지 않도록
  if (S.abyss && S.abyss.run && Date.now() >= S.abyss.run.end) { const ar = abyAuto(S); if (ar) { abyLog(ar); st = stats(S); } }
  st = stats(S);
  if (slp) { handleEvents(ev, prevBoss); slp.peak = Math.max(slp.peak, S.floor); if (now - slpUI >= 1000) { slpUI = now; renderSleep(); } return; }   // 5.14.16 절전 모드: 전투 계산만, 그림·DOM 은 건너뜀

  if (!(trans && trans.t < .35)) {
    const vdt = dt * speedMult(S);   // 부스트·영구 배속 중에는 공격 모션도 진행 속도만큼 빠르게
    swingT -= vdt;
    if (swingT <= 0) { swingT = Math.max(.14, 1 / st.aps); if (mon.drop <= .3) heroSwing(); }
    for (const h of st.compHits) {
      const cs = compState[h.id] || (compState[h.id] = { t: rnd(.4, 1.4), lunge: 0 });
      cs.t -= vdt; cs.lunge += (0 - cs.lunge) * Math.min(1, dt * 10);
      if (cs.t <= 0) { cs.t = 1.6 * rnd(.9, 1.1); compAttack(h.id, h.dps); }
    }
  }

  handleEvents(ev, prevBoss);
  drawScene(dt);
  // 글자·버튼(DOM)은 초당 10번이면 충분하다. 매 프레임 다시 쓰면 폰에서 메인 스레드가 꽉 차 탭 누름이 늦게 먹는다 (5.14.7)
  if (now - lastRender >= 100 || prevBoss !== !!S.boss) { lastRender = now; render(); }
}
let lastRender = 0;
// 같은 글자를 다시 쓰면 DOM 이 바뀐 것으로 처리돼 스타일 계산이 다시 돈다
function setTxt(el, v) { if (el && el.textContent !== v) el.textContent = v; }
function rafLoop(t) { if (!slp || performance.now() - lastFrame >= 500) frame(performance.now()); requestAnimationFrame(rafLoop); }   // 절전 중에는 0.5초마다
// rAF가 멈추는 환경(창이 가려짐 등)에서도 계속 돌도록 보조 루프
setInterval(() => { if (S && performance.now() - lastFrame > (slp ? 600 : 60)) frame(performance.now()); }, 33);

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
    later(.18, () => { flash(col, .3, .2); doShake(3, .2); mon.flash = .1; mon.knock = 4; burst(b.cx, b.cy, 16, [col, '#ffffff', '#ffe38a'], 70, 120, 2, .5); popText(fmtD(e.dmg), b.cx, b.cy - 14, 'skill'); });
  } else if (e.eff === 'heal') {
    rise(hc.x, hc.y + 10, 16, ['#7ee08a', '#ffffff'], 18); popText('+' + fmt(e.heal), hc.x, hc.y - 20, 'heal');
  } else {
    rise(hc.x, hc.y + 10, 14, [col, '#ffffff'], 18);
  }
}
function handleEvents(ev, prevBoss) {
  if (ev.hwMob && performance.now() - (handleEvents._hw || 0) > 700) { handleEvents._hw = performance.now(); const b = monBox(); popText(t('hw.mobX', { x: HW_MOB_X }), b.cx, b.cy - 18, 'proc'); }
  if (ev.hwCos) for (const id of ev.hwCos) { const m = t('hw.got', { c: t('cos.n.' + id) }); addLog('<b style="color:#ffa04d">' + m + '</b>'); toast(m, '#ffa04d'); }
  if (ev.newEvent) addLog('<b>' + t('ev.newLog', { e: t('ev.' + ev.newEvent) }) + '</b>');
  if (ev.evAuto) for (const r of ev.evAuto.slice(-3)) addLog(t('ev.autoLog', { e: t('ev.' + r.id), o: t('ev.' + r.id + '.o' + r.c) }));
  if (ev.sig) { banner(t('sig.drop', { u: UNIQUES[ev.sig.u].name }), 'floor', 1800); addLog('<b>' + t('sig.dropLog', { m: MONSTERS[ev.sig.z % ZONES], u: UNIQUES[ev.sig.u].name }) + '</b>'); }
  if (ev.autoMut) refreshSkills();
  if (ev.autoEnch) { st = stats(S); refreshEnch(); }
  if (ev.soulEnpass) popText(t('sfx.n.enpass'), 140, 34, 'proc');
  if (ev.townAuto) { townAutoN += ev.townAuto; if (performance.now() - townAutoLogT > 30000) { townAutoLogT = performance.now(); addLog(t('town.autoLog', { n: townAutoN })); townAutoN = 0; } if (!$('#townModal').classList.contains('hidden')) renderTown(); }
  if (ev.titles) { for (const id of ev.titles) addLog('<b style="color:#ffd98a">' + t('ttl.got', { n: t('ttl.n.' + id) }) + '</b> · ' + ttlFx(id)); toast(t('ttl.got', { n: t('ttl.n.' + ev.titles[0]) }) + (ev.titles.length > 1 ? ' +' + (ev.titles.length - 1) : '')); }
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
    tpreUi(false);
  }
  if (ev.towerHigh && (towerState(S, ev.towerHigh).best || 0) <= TOWER_MYTH_FLOOR) { banner(t('tw2.enter', { t: t('tw2.' + ev.towerHigh) }), 'floor', 1800); addLog('<b>' + t('tw2.enterLog', { t: t('tw2.' + ev.towerHigh) }) + '</b>'); }
  if (ev.towerEnd) {
    const e = ev.towerEnd;
    banner(t('ui.towerEnd', { n: e.floor }), 'lose', 1600);
    addLog('<b>' + towerName(e.id || 'inf', e.floor) + ' · ' + t('ui.towerEndLog', { n: e.floor, b: e.best }) + '</b> ' + rewardText({ ess: e.ess, stones: e.stones, shards: e.shards, keys: e.keys }) + (e.myth ? ' · <span style="color:' + CG_COL[5] + '">' + t('cg.mythN', { n: e.myth }) + '</span>' : ''));
    tpreUi(false); save(S);
  }
  if (ev.autoReinc) {
    logLines = []; hudSig = '';
    addLog('<b>' + t('ui.autoReincLog', { n: fmtN(ev.autoReinc) }) + '</b>' + (ev.convStones ? ' · ' + t('conv.auto', { n: fmtN(ev.convStones) }) : ''));
    flash('#ffd98a', .8, 1);
    buildSlots(); buildBag(); buildSkills(); buildComps(); buildRelics();
  }
  if (ev.autoRebirth) {
    logLines = []; hudSig = '';
    addLog('<b>' + t('ui.autoRebirthLog', { n: fmtN(ev.autoRebirth) }) + '</b>' + (ev.convStones ? ' · ' + t('conv.auto', { n: fmtN(ev.convStones) }) : ''));
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
  hudFit();
}
// 5.14.10 스킬 줄과 버프 줄이 겹치면 버프 줄을 한 줄 아래로 (스킬·버프가 많은 도적 등)
function hudFit() { const a = $('#cdrow'), b = $('#buffrow'); if (!a || !b) return; b.classList.remove('low'); if (!b.children.length || !a.children.length) return; const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect(); if (ra.width && rb.width && rb.left < ra.right + 4) b.classList.add('low'); }
window.addEventListener('resize', () => hudFit());
function updateBattleHud() {
  buildBattleHud();
  for (const el of document.querySelectorAll('.cdi')) {
    const sd = SKILL_BY_ID[el.dataset.id];
    const lv = S.skills[sd.id] || 0;
    const rem = Math.max(0, S.cd[sd.id] ?? 0) / st.cdRate;           // 실제 남은 시간(초)
    const tot = sd.cd / st.cdRate;
    const waiting = rem <= 0 && sd.eff === 'heal';
    { const pv = Math.min(1, rem / tot).toFixed(3); if (el.__p !== pv) { el.__p = pv; el.style.setProperty('--p', pv); } }
    el.classList.toggle('ready', rem <= 0 && !waiting);
    el.classList.toggle('wait', waiting);
    setTxt(el.querySelector('.n'), String(waiting ? t('ui.wait') : rem > 0 ? (rem >= 10 ? Math.ceil(rem) : rem.toFixed(1)) : ''));
    const ti = `${sd.name} Lv.${lv} · ${skillDesc(sd, lv)}`; if (el.title !== ti) el.title = ti;
  }
  const bsig = (S.buffs || []).map(b => b.id).join();
  const row = $('#buffrow');
  if (row.dataset.sig !== bsig) {
    row.dataset.sig = bsig;
    // 5.14.10: 변이 B 버프(스킬id:b, 예: 소매치기·회복 변이)는 원래 스킬 아이콘 + B 표시 (예전엔 없는 그림이라 깨졌다)
    row.innerHTML = (S.buffs || []).map(b => { const mb = /:b$/.test(b.id), id = mb ? b.id.slice(0, -2) : b.id; return `<div class="bf${mb ? ' mb' : ''}" data-id="${b.id}"><img class="px" src="${id.startsWith('c:') ? compSrc(id.slice(2)) : id.startsWith('soul:') ? 'assets/soul/' + ((S.soul && S.soul.look) || SOUL_LOOKS[0]) + '.png' : skillSrc(id)}"><div class="b"></div><div class="t"></div>${mb ? '<i class="bm">B</i>' : ''}</div>`; }).join('');
    hudFit();
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
  if (S.autoCls) renderClsBanner();
  if (divNew(S)) maybeAscend();
  renderMailDot();
  if (S && S.townRefund) townRefundNotice();
  if (document.querySelector('.page[data-tab="shop"]:not(.hidden)')) renderTownBox();
  noteCgMoved();
  const cl = CLASSES[S.cls || 'war'];
  const tag = $('#clsTag');
  tag.textContent = S.cls ? cl.name : '-'; tag.style.background = S.cls ? cl.color : '#666';
  $('#lv').textContent = S.level;
  $('#spTag').textContent = 'SP ' + S.sp;
  $('#spTag').classList.toggle('hidden', S.sp <= 0);
  $('#xpbar').style.width = Math.min(100, dn(D(S.xp).div(xpNeed(S.level))) * 100) + '%';
  $('#gold').textContent = fmt(S.gold);
  $('#stones').textContent = fmtN(S.stones);
  syncScale(); $('#dps').textContent = fmtD(st.dps);
  $('#floor').textContent = S.floor;
  $('#maxfloor').textContent = S.maxFloor;
  { const lp = loopOf(S.floor); $('#fname').textContent = (FLOOR_NAMES[monsterIndex(S.floor)] || t('ui.abyss')) + (lp ? ' · ' + t('ui.loop', { n: lp + 1 }) : ''); }
  const mi = sceneZone();
  if (inRift()) {
    $('#fname').textContent = t('rift.title') + ' · ' + t('rift.lv', { n: S.boss.L });
    $('#mname').textContent = t('rift.wave', { n: S.boss.tf, m: RIFT_WAVES }) + ' · ' + MONSTERS[mi];
    $('#mcount').textContent = t('rift.keysN', { n: riftState(S).keys });
  } else if (inTower()) {
    $('#fname').textContent = towerName(towerId(), S.boss.tf);
    $('#mname').textContent = t('ui.towerFloor', { n: S.boss.tf }) + ' · ' + MONSTERS[mi];
    $('#mcount').textContent = t('ui.towerBest', { n: towerState(S, towerId()).best || 0 });
  }
  if (S.boss) {
    if (!inTower()) { $('#mname').textContent = t('ui.lord', { m: MONSTERS[mi] }); $('#mcount').textContent = t('ui.boss'); }
    $('#mbar').style.width = Math.max(0, dn(D(S.boss.hp).div(S.boss.max)) * 100) + '%';
    $('#heroWrap').classList.toggle('hidden', false);   // toggle(값)은 바뀔 때만 class 를 고쳐서 매 프레임 MutationObserver 를 깨우지 않는다
    $('#hbar').style.width = Math.max(0, dn(D(S.hp).div(st.hp)) * 100) + '%';
    $('#hlabel').textContent = `${fmtH(dmax(0, S.hp))} / ${fmtH(st.hp)}`;
    $('#bossTimer').classList.toggle('hidden', false);
    $('#btime').textContent = Math.max(0, S.boss.timer).toFixed(1);
  } else {
    { const hw = huntMon().hw != null; $('#mname').textContent = monLabel(mi); $('#mname').classList.toggle('hwname', hw); }
    $('#mcount').textContent = canChallenge(S) ? t('ui.bossWaitShort') : `${S.kills} / ${killsNeeded(S.floor, S)}`;
    $('#mbar').style.width = Math.max(0, 100 - S.prog * 100) + '%';
    $('#heroWrap').classList.toggle('hidden', true);
    $('#bossTimer').classList.toggle('hidden', true);
  }
  const cb = $('#bossBtn'), cc = canChallenge(S);
  cb.classList.toggle('hidden', !cc); if (cc) cb.querySelector('b').textContent = 'B' + (S.floor + 1) + 'F';
  // 높이가 고정된 보스 칸: 보스전 = 체력 줄 + 시간, 도전 가능 = 보스 버튼, 사냥 중 = 다음 보스 안내
  { const nx = $('#bNext'), show = !S.boss && !cc; nx.classList.toggle('hidden', !show);
    if (show) { const nb = Math.ceil((S.floor + 1) / BOSS_EVERY) * BOSS_EVERY, left = nb - S.floor, tx = left <= 1 ? t('ui.nextBoss1', { b: nb }) : t('ui.nextBoss', { b: nb, n: left }); if (nx.textContent !== tx) nx.textContent = tx; } }
  $('#s_atk').textContent = fmtA(st.atk);
  $('#s_hp').textContent = fmtH(st.hp);
  $('#s_crit').textContent = st.crit.toFixed(1) + '%';
  $('#s_comp').textContent = fmtD(st.compDps);
  updateBattleHud();

  for (const u of UPGRADES) {
    const row = document.querySelector(`.up[data-id="${u.id}"]`); if (!row) continue;
    const n = S.up[u.id] || 0, c = upgradeCostN(u, n, buyMul);
    row.classList.toggle('no', D(S.gold).lt(c));
    setTxt(row.querySelector('.cost b'), fmt(c));
    setTxt(row.querySelector('.lvl'), buyMul > 1 ? `Lv.${n} → ${n + buyMul}` : 'Lv.' + n);
    const bk = row.querySelector('.brk');
    if (bk) setTxt(bk, t('ui.breakNext', { m: fmtX(breakMult(u.id, n)), x: BREAK_X, n: (Math.floor(n / BREAK_EVERY) + 1) * BREAK_EVERY }));
  }
  $('#shopDot').classList.toggle('hidden', autoOn(S, 'upgrade') || !UPGRADES.some(u => D(S.gold).gte(upgradeCost(u, S.up[u.id] || 0))));
  $('#skillDot').classList.toggle('hidden', autoOn(S, 'skill') || (S.sp <= 0 && !mutPending(S)));
  renderGuide(); renderGrowBox(); renderEvents(); autoNotice();
  if (!document.querySelector('[data-tab="comp"]').classList.contains('hidden')) { renderExped(); renderPetBox(); }
  $('#compDot').classList.toggle('hidden', !expSlots(S).some(x => x && Date.now() >= x.end) && !(S.abyss && S.abyss.run && Date.now() >= S.abyss.run.end) && S.stones < PULL_COST && !(S.team || []).some(id => { const c = COMP_BY_ID[id], o = S.comp[id]; return c && o && (o.lv || 0) < CLV_MAX && (S.shards || 0) >= compLvCost(c, o.lv || 0); }));
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
  $('#rbBtn').disabled = hg.lte(0);
  $('#rbBar').style.width = Math.min(100, (S.maxFloor / REBIRTH_FLOOR) * 100) + '%';
  $('#rbHint').textContent = hg.gt(0) ? t('ui.rbGain', { h: fmtN(hg), p: fmtP(hg.mul(5)) }) : t('ui.rbNeed', { n: REBIRTH_FLOOR, m: S.maxFloor });
  { let gl = document.getElementById('gbLine'); if (!gl) { gl = document.createElement('div'); gl.id = 'gbLine'; gl.className = 'gbline'; $('#rbHint').after(gl); } const hl = gboostLeft(S, 'h'), kl = gboostLeft(S, 'k'); const tx = [hl ? t('gb.h', { t: fmtClock(hl) }) : '', kl ? t('gb.k', { t: fmtClock(kl) }) : ''].filter(Boolean).join(' · '); if (gl.textContent !== tx) gl.textContent = tx; gl.classList.toggle('hidden', !tx); }
  { const cv = hg.gt(0) ? convPreview(S) : 0; $('#rbConv').textContent = S.goldConv === false ? t('conv.off') : cv ? t('conv.pre', { n: fmtN(cv) }) : ''; }
  $('#rbDot').classList.toggle('hidden', hg.lte(0) && !relicAffordable());
  $('#reincDot').classList.toggle('hidden', !canReinc(S));
  refreshRelics();
  refreshReinc();
  const bl = boostLeft(S), sx = speedMult(S);
  $('#boostTag').classList.toggle('hidden', sx <= 1);
  if (sx > 1) $('#boostTag').textContent = '×' + sx + (bl > 0 ? ' ' + fmtClock(bl) : '');
  if (!render._q || performance.now() - render._q > 1000) {
    render._q = performance.now();
    questRoll(S);
    $('#questDot').classList.toggle('hidden', !questHasClaim());
    if (!$('[data-tab="quest"]').classList.contains('hidden') || dockCur === 'tower' || dockCur === 'rift') buildQuest();
    renderDockBar(); syncTabDots();
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
    { const x = (S.engr || {})[sl.id]; if (x && x.v > 0) (d.querySelector('.ic') || d).insertAdjacentHTML('beforeend', `<i class="egb" title="${t('engr.k.' + x.k)} +${x.v}%" style="color:${CG_COL[x.g + 1]};border-color:${CG_COL[x.g + 1]}">${t('engr.s.' + x.k).slice(0, 1)}${x.v}</i>`); }   // 5.14.10 각인
    box.appendChild(d);
  }
  drawDoll();
  const r = st.raw;
  const rows = [
    [t('stat.atk'), fmtA(st.atk)], [t('stat.hp'), fmtH(st.hp)], [t('stat.crit'), st.crit.toFixed(1) + '%'],
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
  renderDivBox();
  for (const [box, type, dv] of [['#skA', 'active', 0], ['#skP', 'passive', 0], ['#skD', null, 1]]) {
    const el = $(box);
    el.innerHTML = '';
    for (const sd of classSkills(cls, type).filter(x => !!x.div === !!dv)) {
      const d = document.createElement('div');
      d.className = 'sk' + (sd.div ? ' divsk' : ''); d.dataset.id = sd.id;
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
  skTabSync();
  renderStyle();
}
// 5.14.3 전투 스타일 (스킬형 · 평타형 · 동료형): 언제든 바꿀 수 있다
function renderStyle() {
  const box = $('#styBox'); if (!box || !S) return;
  const un = styleUnlocked(S), cur = styleOf(S), gs = (st && st.styleGs) || { basic: 1, comp: 1 };
  const sig = [un, cur, gs.basic.toFixed(2), gs.comp.toFixed(2), getLang(), ADV ? ADV.ver : 0].join('|'); if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  const ds = cur === 'skill' ? t('sty.d.skill') : t('sty.d.' + cur, { x: (cur === 'basic' ? gs.basic : gs.comp).toFixed(2) });
  box.innerHTML = '<div class="styh"><b>' + t('sty.head') + '</b>' + (un ? '' : '<span>' + t('sty.lock', { f: STYLE_FLOOR }) + '</span>') + '</div>'
    + '<div class="stybtns">' + STYLES.map(id => '<button class="mini' + (id === cur ? ' on' : '') + '" data-sty="' + id + '"' + (!un && id !== 'skill' ? ' disabled' : '') + '>' + t('sty.' + id) + '</button>').join('') + '</div>'
    + '<div class="styd">' + ds + '</div>' + advHtml();
}
// 5.14.13 추천 세팅: 지금 세팅을 복제해 후보마다 짧은 사냥 시뮬을 돌리고, 항목별로 가장 좋아지는 변경을 보여 준다
let ADV = null, ADV_VER = 0;
function advLabel(c) {
  if (c.cat === 'style') return t('adv.style') + ' → ' + t('sty.' + c.v);
  if (c.cat === 'dom') return t('adv.dom') + ' → ' + t('div.dom.' + S.cls + '.' + c.v);
  if (c.cat === 'mut') return t('sk.' + c.id) + ' → ' + t('mut.' + mutKind(SKILL_BY_ID[c.id]) + '.' + c.v);
  if (c.cat === 'soul') return t('adv.soul', { n: c.i + 1 }) + ' → ' + t('sfx.n.' + c.v);
  if (c.cat === 'team') return t('adv.team') + ' ' + (c.out ? COMP_BY_ID[c.out].name + ' → ' : '+ ') + COMP_BY_ID[c.in].name;
  if (c.cat === 'pet') return t('adv.pet') + ' → ' + t('fx.n.' + c.v);
  return '';
}
function advHtml() {
  const run = ADV && ADV.run, res = ADV && !ADV.run ? ADV.res : null;
  let h = '<div class="advbox"><button class="mini wide" data-adv="go" ' + (run ? 'disabled' : '') + '>' + (run ? t('adv.run', { p: Math.round(ADV.p * 100) }) : t(res ? 'adv.again' : 'adv.btn')) + '</button>';
  if (res) h += res.length ? res.map((c, i) => '<div class="advrow"><span>' + advLabel(c) + '</span><b>+' + Math.round((c.gain - 1) * 100) + '%</b>' + (c.info ? '<i></i>' : '<button class="mini" data-adv="' + i + '">' + t('adv.apply') + '</button>') + '</div>').join('') : '<div class="advrow none">' + t('adv.none') + '</div>';
  return h + '</div>';
}
function advRender() { ADV.ver = ++ADV_VER; renderStyle(); }
async function runAdvice() {
  if (ADV && ADV.run) return;
  const snap = simSnap(S), cands = adviceCands(snap); ADV = { run: true, p: 0 }; advRender();
  // 12ms씩 나눠 돌리고 화면에 양보한다 (폰에서도 멈춤 없이)
  const OPT = { warm: 60, n: 60 }, tick = () => new Promise(r => setTimeout(r, 0));
  const measure = async mut => { const j = simJob(snap, mut, OPT); while (!simRun(j, 12)) await tick(); await tick(); return j.res; };
  const base = await measure(null);
  for (let i = 0; i < cands.length; i++) {
    try { const v = await measure(cands[i].mut); cands[i].gain = base.gt(0) ? +v.div(base) : 0; } catch (e) { cands[i].gain = 0; }
    ADV.p = (i + 1) / cands.length; if (i % 3 === 2) advRender();
  }
  const best = {}; for (const c of cands) if (c.gain > 1.02 && (!best[c.cat] || c.gain > best[c.cat].gain)) best[c.cat] = c;
  ADV = { run: false, res: Object.values(best).sort((a, b) => b.gain - a.gain) }; advRender();
}
function applyAdvice(c) {
  if (!c || c.info) return;
  c.mut(S); st = stats(S); save(S, 'force'); addLog('<b>' + t('adv.btn') + '</b> · ' + advLabel(c));
  ADV = null; refreshSkills(); render(); buildComps(); renderStyle(); runAdvice();
}
let skTab = 'a';
function skTabSync() {
  const tabs = $('#skTabs'); if (!tabs) return;
  for (const b of tabs.querySelectorAll('[data-st]')) b.classList.toggle('on', b.dataset.st === skTab);
  $('#skA').classList.toggle('hidden', skTab !== 'a'); $('#skP').classList.toggle('hidden', skTab !== 'p'); $('#skD').classList.toggle('hidden', skTab !== 'd'); $('#divbox')?.classList.toggle('hidden', skTab !== 'd'); $('#msBox').classList.toggle('hidden', skTab !== 'm');
  const nd = tabs.querySelector('[data-st=d]'); if (nd) nd.classList.toggle('glow', divTier(S) > 0);
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
  const un = masteryUnlocked(S), total = masterySkills(S.cls || 'war').length;
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
    d.querySelector('.ds').textContent = (lv ? skillDesc(sd, lv) : (un ? t('ui.notLearned') : sd.div ? t('div.skLock', { r: divRank(sd.div) }) : t('ui.unlockAt', { n: sd.unlock })) + ' · ' + skillDesc(sd, 1)) + (sd.div ? ' · ' + t('div.skX', { n: Math.max(1, divTier(S)) }) : '');
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
      changeClass(S, c); if (S.autoCls) { S.autoCls = 0; try { window.__dgTrack?.('dg_class_change', { kind: c }); } catch {} } save(S, 'force'); renderClsBanner();
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
// 첫 화면 (5.12.4): 직업 선택 창으로 막지 않고 전사로 바로 전투를 시작한다. 던전 위쪽 한 줄에서 언제든 바꿀 수 있다 (B30까지 표시)
window.__dgMail = { add: (m) => { if (!S) return false; const ok = mailAdd(S, m); if (ok) { save(S, 'force'); renderMailDot(); } return ok; } };
function autoStartClass() {
  if (S.cls) return;
  changeClass(S, 'war'); S.autoCls = 1; save(S, 'force'); hudSig = '';
  buildSkills(); buildSlots(); buildComps();
  try { window.__dgTrack?.('dg_class_auto', {}); } catch {}
  renderClsBanner();
}
function renderClsBanner() {
  let b = document.getElementById('clsBan');
  const show = S.cls && S.autoCls && (S.maxFloor || 0) < 30;
  if (!show) { if (b) b.remove(); return; }
  if (b) return;
  const pg = document.querySelector('.page[data-tab="dungeon"]'); if (!pg) return;
  b = document.createElement('div'); b.id = 'clsBan'; b.className = 'clsban';
  b.innerHTML = `<span>${t('ui.autoClsBan', { c: `<b style="color:${CLASSES[S.cls].color}">${CLASSES[S.cls].name}</b>` })}</span><button class="mini hot">${t('ui.changeClass')}</button>`;
  b.querySelector('button').onclick = () => openClassModal(true);
  pg.prepend(b);
}

// ================= 동료 탭 =================
const CF = { cls: 'all', r: 'all', eff: 'all', own: 'all', sort: 'rarity' };
function effTxt(k, v) { return statText(k, v); }
// ================= 원정대 · 동료 장비 · 코스튬 =================
const CG_COL = ['#b8b8c8', '#6bd66b', '#5aa9ff', '#c77dff', '#ffb347', '#ff4d6d'];
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
const clockAt = ms => { const d = new Date(ms), tm = d.toLocaleTimeString(({ ko: 'ko-KR', ja: 'ja-JP', zh: 'zh-CN' })[getLang()] || 'en-US', { hour: 'numeric', minute: '2-digit' }); return d.toDateString() === new Date().toDateString() ? tm : t('exp.tmr', { t: tm }); };   // 5.14.15 원정이 돌아오는 시각 (다음 접속 이유)
const fmtLeft = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); return h ? t('exp.hm', { h, m }) : m ? t('exp.m', { m }) : t('exp.s', { s }); };
function renderExped() {
  const box = $('#expBox'); if (!box) return;
  const now = Date.now(), sl = expSlots(S);
  const ab = abyState(S), ax = ab.run, abyOpen = abyUnlocked(S), abyEmpty = abyOpen && !ax ? 1 : 0, abyDone = ax && now >= ax.end ? 1 : 0;
  const sig = sl.map(x => x ? x.ids.join(',') + (now >= x.end ? 'D' : Math.floor((x.end - now) / 30000)) : '-').join('|') + cgBag(S).length + getLang() + (S.stones >= rushAllCost(S, now)) + expSel.di + expFree(S).length
    + '|a' + abyOpen + (ax ? ax.ids.join(',') + (abyDone ? 'D' : Math.floor((ax.end - now) / 30000)) : '-') + ab.best + (abyOpen && !ax ? abyPreview(S, abyAutoPick(S)).d : '') + expArm + abyAdSig();
  if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  const nEmpty = sl.filter(x => !x).length + abyEmpty, nRun = sl.filter(x => x && now < x.end).length, nDone = sl.filter(x => x && now >= x.end).length + abyDone, rAll = rushAllCost(S, now), canSend = nEmpty && expFree(S).length;
  box.innerHTML = `<div class="exph"><b>${t('exp.title')}</b><button class="mini" data-x="bag">${t('cg.bagBtn', { n: cgBag(S).length, m: CG_BAG })}</button></div>` +
    (!abyOpen || sl.some(Boolean) ? `<div class="expall">${!abyOpen && canSend ? `<select data-x="alldi">${EXP_DUR.map((h, i) => `<option value="${i}" ${expSel.di === i ? 'selected' : ''}>${t('exp.dur', { h })}</option>`).join('')}</select><button class="mini hot" data-x="sendAll">${t('exp.sendAll', { n: nEmpty })}</button>` : ''}${nRun && rAll ? `<button class="mini ${S.stones >= rAll ? 'hot' : ''}" data-x="rushAll" ${S.stones >= rAll ? '' : 'disabled'} title="${t('exp.rushAllT')}">${t('exp.rushAll', { n: nRun })} <img src="assets/ui/stone.png" class="px i14" alt=""> ${fmtN(rAll)}</button>` : ''}${nDone > 1 ? `<button class="mini hot" data-x="claimAll">${t('exp.claimAll', { n: nDone })}</button>` : ''}</div>` + sl.map((x, i) => {
    if (!x) return abyOpen ? '' : `<div class="exps"><span class="mut2">${t('exp.idle')}</span><button class="mini hot" data-x="send" data-i="${i}">${t('exp.send')}</button></div>`;   // 5.14.10 심연이 열리면 빈 일반 칸은 숨김
    const done = now >= x.end, pics = x.ids.map(id => `<img class="px" src="${compSrc(id)}" style="border-color:${C_RARITY[COMP_BY_ID[id].r].color}">`).join('');
    const rc = done ? 0 : rushCost(S, i);
    return `<div class="exps ${done ? 'done' : ''}"><div class="pics">${pics}</div><div class="info"><b>${t('exp.dur', { h: EXP_DUR[x.di] })}</b><span>${done ? t('exp.back') : t('exp.left', { t: fmtLeft(x.end - now) }) + ' · ' + clockAt(x.end)}</span></div>${done ? `<button class="mini hot" data-x="claim" data-i="${i}">${t('exp.claim')}</button>` : `<button class="mini" data-x="rush" data-i="${i}" ${S.stones >= rc ? '' : 'disabled'} title="${t('exp.rushT')}"><img src="assets/ui/stone.png" class="px i14" alt=""> ${fmtN(rc)}</button><button class="mini" data-x="recall" data-i="${i}">${expArm === i ? t('exp.recallAgain') : t('exp.recall')}</button>`}</div>`;
  }).join('') : '') + (abyOpen ? abyHtml(now) : '');
}
// 심연 원정: B300부터, 원정대 아래 별도 칸 하나
function abyRewardTxt(r) { return [t('aby.crystalN', { n: fmtN(r.crystal || 0) }), t('trace.pts', { n: fmtN(r.trace || 0) })].join(' · '); }
function abyHtml(now) {
  if (!abyUnlocked(S)) return `<div class="aby lock"><b>${t('aby.title')}</b><span>${t('aby.lock', { f: ABY_FLOOR })}</span></div>`;
  const a = abyState(S), x = a.run, head = d => `<div class="abyh"><b>${t('aby.title')}</b><span>${d ? t('aby.depth', { d }) : ''}${a.best ? ' · ' + t('aby.best', { d: a.best }) : ''}</span></div><div class="abyi">${t('aby.have', { n: fmtN(S.abyc || 0) })}</div>`;
  if (!x) {
    const ids = abyAutoPick(S), pv = abyPreview(S, ids);
    return `<div class="aby">${head(pv.d)}<div class="abyi">${t('aby.sub', { h: ABY_H, n: ABY_SIZE })}</div>` +
      `<div class="abyi">${t('aby.power', { p: pv.power.toFixed(1), q: abyNeed(pv.d + 1).toFixed(1) })}</div>` +
      (pv.d ? `<div class="abyr">${abyRewardTxt(pv)}</div>` : '') +
      `<button class="mini hot wide" data-x="abySend" ${pv.d && ids.length ? '' : 'disabled'}>${t('aby.send', { n: ABY_SIZE })}</button></div>`;
  }
  const done = now >= x.end, pics = x.ids.map(id => `<img class="px" src="${compSrc(id)}" style="border-color:${C_RARITY[COMP_BY_ID[id].r].color}">`).join('');
  return `<div class="aby ${done ? 'done' : ''}">${head(x.d)}<div class="exps ${done ? 'done' : ''}"><div class="pics">${pics}</div><div class="info"><b>${t('exp.dur', { h: ABY_H })}${a.auto ? ' · ' + t('aby.loop') : ''}</b><span>${done ? t('exp.back') : t('exp.left', { t: fmtLeft(x.end - now) }) + ' · ' + clockAt(x.end)}</span></div>` +
    (done ? `<button class="mini hot" data-x="abyClaim">${t('exp.claim')}</button>` : `<button class="mini" data-x="abyRecall">${expArm === -2 ? t('exp.recallAgain') : t('exp.recall')}</button>`) +
    `</div>${done ? '' : abyAdBtn()}<div class="abyr">${abyRewardTxt(abyReward(x.d))}</div></div>`;
}
// 심연 원정 자동 반복 결과를 로그에
function abyLog(r) { addLog('<b>' + t('aby.autoLog', { n: r.n, d: r.d }) + '</b> · ' + abyRewardTxt(r)); const b = $('#expBox'); if (b) b.dataset.sig = ''; }
// 토스: 광고 보고 1시간 단축 (하루 5번). 광고 기능이 없는 곳(확장·안드로이드)에서는 버튼이 없다
function abyAdState() { try { return globalThis.__dgAbyAd ? globalThis.__dgAbyAd.state() : null; } catch { return null; } }
function abyAdSig() { const a = abyAdState(); return a ? [a.left, a.ready, a.owned, a.failed, a.busy].join('.') : ''; }
function abyAdBtn() {
  const a = abyAdState(); if (!a) return '';
  const tail = ` (${a.left}/${a.max})`;
  if (a.left <= 0) return `<button class="mini wide" disabled>${t('aby.adDone', { m: a.max })}</button>`;
  const label = a.owned ? t('aby.adOwned') + tail : a.failed ? t('aby.adRetry') : a.ready ? t('aby.adBtn') + tail : t('aby.adLoading');
  return `<button class="mini wide hot" data-x="abyAd" ${a.busy || (!a.owned && !a.ready && !a.failed) ? 'disabled' : ''}>${label}</button>`;
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
// 5.14.12 동료 장비 일괄 분해: 고른 등급 이하 (일반~전설, 신화는 제외). 영웅 이상은 한 번 더 눌러야 실행
let cgDisR = (() => { try { const raw = localStorage.getItem('dg.cgDisR'), v = raw == null ? 1 : +raw; return v >= 0 && v <= 4 ? v : 1; } catch (e) { return 1; } })(), cgDisArm = 0;
function openCgModal() { renderCgModal(); $('#cgModal').classList.remove('hidden'); }
function renderCgModal() {
  const bag = cgBag(S).map((it, i) => [it, i]).sort((a, b) => cgScore(b[0]) - cgScore(a[0]));
  const low = cgBag(S).filter(x => x.r <= cgDisR).length, armed = cgDisArm > Date.now();
  const disSel = `<select data-cgr="1">${[0, 1, 2, 3, 4].map(r => `<option value="${r}" ${r === cgDisR ? 'selected' : ''}>${t('rar.' + r)}</option>`).join('')}</select>`;
  const on = S.cgAuto !== false;
  $('#cgWin').innerHTML = `<div class="evh"><b>${t('cg.title')}</b><span>${t('cg.bag', { n: cgBag(S).length, m: CG_BAG })}</span></div>
    <div class="cgsum">${basicXText()}</div>
    <details class="cghelp"><summary>${t('cg.helpT')}</summary><div>${t('cg.desc2')}</div><div>${t('cg.desc')}</div></details>
    <label class="chk cgauto"><input type="checkbox" data-cga="toggle" ${on ? 'checked' : ''}><span>${t('cg.autoOn')}</span></label>
    <div class="cgbtns"><button class="mini" data-cga="auto">${t('cg.autoNow')}</button><button class="mini" data-cga="merge">${t('cg.merge')}</button></div>
    <div class="cgbtns cgdis">${disSel}<button class="mini ${armed ? 'hot' : ''}" data-cga="dis" ${low ? '' : 'disabled'}>${armed ? t('cg.disAgain', { n: low }) : t('cg.disUpTo', { n: low })}</button></div>
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
  box.innerHTML = `<div class="evh"><b>${soulName()} <button class="pren" data-sw="ren" title="${t('ui.presetRen')}"><svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5l2 2L6 12l-3 1 1-3z"/><path d="M10 4l2 2"/></svg></button></b><span>Lv.${w.lv}</span></div>
    <div class="soulhead"><canvas id="soulPv" width="96" height="96"></canvas><div class="sh">
      <div class="clvbar soulbar"><i style="width:${Math.min(100, w.xp / soulNeed(w.lv) * 100)}%"></i></div>
      <span class="mut2">${w.lv >= cap ? (soulFree(S) ? t('soul.essOnly') : w.lv >= SOUL_MAXLV ? t('soul.freeAt', { f: SOUL_FREE_FLOOR }) : t('soul.capped', { f: w.lv + 1 })) : t('soul.how', { x: Math.floor(w.xp), n: soulNeed(w.lv) })}</span>
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
const stoneIc = '<img src="assets/ui/stone.png" class="px i14" alt="">';
let petSel = null;
// 자동 다시 뽑기 (원하는 효과·등급이 나올 때까지)
let petAuto = null; const petAutoPref = {};
function petAutoStop(msg) { if (!petAuto) return; clearTimeout(petAuto.timer); const a = petAuto; petAuto = null; if (a.rolls) { save(S); addLog(msg || t('pet.autoStop', { n: fmtN(a.rolls) })); } st = stats(S); if (!$('#petModal').classList.contains('hidden')) renderPetModal(); $('#petBox').dataset.sig = ''; renderPetBox(); }
function petAutoTick() {
  const a = petAuto; if (!a) return;
  if ($('#petModal').classList.contains('hidden') || !S.pets.own[a.id]) { petAutoStop(); return; }
  const r = petAutoRoll(S, a.id, a.k, a.r, 25); if (!r) { petAutoStop(); return; }
  a.rolls += r.rolls; a.spent = D(a.spent).add(r.spent);
  if (r.hit) { const nm = t('pet.n.' + a.id), fx = `${t('rar.' + r.r)} · ${petFxText(r.k, petVal(S.pets.own[a.id]))}`; toast(t('pet.autoHit', { p: nm, f: fx })); petAutoStop('<b>' + t('pet.autoHitLog', { p: nm, f: fx, n: fmtN(a.rolls) }) + '</b>'); return; }
  if (r.out) { petAutoStop(t('pet.autoOut', { n: fmtN(a.rolls) })); return; }
  const ln = $('#petAutoLine'); if (ln) ln.textContent = t('pet.autoRun', { n: fmtN(a.rolls), g: fmt(a.spent) });
  a.timer = setTimeout(petAutoTick, 40);
}
function renderPetBox() {
  const box = $('#petBox'); if (!box) return;
  const on = petUnlocked(S), own = on ? petOwned(S) : [], act = S.pets && S.pets.act, ag = petAgg(S);
  const top = PET_FX_KEYS.filter(k => ag[k] > 0).sort((a, b) => ag[b] / PET_FX[b].v - ag[a] / PET_FX[a].v).slice(0, 3);
  const sig = [on, own.length, act, top.map(k => k + Math.round(ag[k])).join(','), getLang(), (on && petLeft(S).length > 0 && petPot(S).gte(petDrawCost(S)))].join('|');
  if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  box.innerHTML = !on ? `<div class="peth"><b>${t('pet.title')}</b><span class="mut2">${t('pet.locked', { n: PET_UNLOCK })}</span></div>`
    : `<div class="peth">${act ? `<img class="px" src="assets/pet/${act}.png">` : ''}<div class="pt"><b>${t('pet.title')} ${own.length}/${PETS.length}</b><span>${top.length ? top.map(k => petFxText(k, ag[k])).join(' · ') : t('pet.none')}</span></div><button class="mini ${petLeft(S).length && petPot(S).gte(petDrawCost(S)) ? 'hot' : ''}" data-p="open">${t('pet.manage')}</button></div>`;
}
function petAutoHtml(id, p) {
  const pr = petAutoPref[id] || (petAutoPref[id] = { k: p.k, r: Math.min(4, p.r + 1) });
  const run = petAuto && petAuto.id === id, done = petWant(p, pr.k, pr.r), odds = petAutoOdds(pr.k, pr.r);
  return `<div class="pauto"><b>${t('pet.auto')}</b><select data-pa="k" ${run ? 'disabled' : ''}><option value="any" ${pr.k === 'any' ? 'selected' : ''}>${t('pet.anyFx')}</option>${PET_FX_KEYS.map(k => `<option value="${k}" ${pr.k === k ? 'selected' : ''}>${t('fx.n.' + k)}</option>`).join('')}</select>
    <select data-pa="r" ${run ? 'disabled' : ''}>${[0, 1, 2, 3, 4].map(r => `<option value="${r}" ${pr.r === r ? 'selected' : ''}>${t('pet.rUp', { r: t('rar.' + r) })}</option>`).join('')}</select>
    ${run ? `<button class="mini hot" data-p="astop">${t('ui.aStop')}</button>` : `<button class="mini" data-p="astart" ${done || petPot(S).lt(petRollCost(S)) ? 'disabled' : ''}>${t('pet.autoGo')}</button>`}
    <span id="petAutoLine" class="mut2">${run ? t('pet.autoRun', { n: fmtN(petAuto.rolls), g: fmt(petAuto.spent) }) : done ? t('pet.autoDone') : t('pet.autoOdds', { n: fmtN(Math.round(1 / odds)), g: fmt(petRollCost(S).div(odds)) })}</span></div>`;
}
function openPetModal() { if (!petUnlocked(S)) return; if (!petSel || !S.pets.own[petSel]) petSel = S.pets.act || petOwned(S)[0] || null; renderPetModal(); $('#petModal').classList.remove('hidden'); }
function renderPetModal() {
  const own = S.pets.own, cap = petCap(S), left = petLeft(S), ag = petAgg(S), dc = left.length ? petDrawCost(S) : 0;
  const sel = petSel && own[petSel] ? petSel : null, p = sel && own[sel], cand = S.pets.cand && S.pets.cand.id === sel ? S.pets.cand : null;
  const fxLine = q => `<span style="color:${PET_COL[q.r]}">${t('rar.' + q.r)} · ${petFxText(q.k, petVal(q))}</span>`;
  const pot = petPot(S);
  $('#petWin').innerHTML = `<div class="evh"><b>${t('pet.title')} ${Object.keys(own).length}/${PETS.length}</b><span>${t('pet.pot')} ${goldIc} <b>${fmt(pot)}</b></span></div>
    <div class="petpot"><span>${t('pet.potRate', { n: fmt(S.pets.ppm || 0) })}</span><button class="mini" data-p="dep" ${D(S.gold).gt(0) ? '' : 'disabled'} title="${t('pet.depT')}">${t('pet.dep', { n: fmt(S.gold) })}</button></div>
    <div class="qx">${t('pet.desc', { c: cap, f: cap * 2 })}</div>
    <div class="petdraw">${left.length ? `<button class="big sm ${pot >= dc ? '' : 'off'}" data-p="draw" ${pot >= dc ? '' : 'disabled'}>${t('pet.draw')} ${goldIc} ${fmt(dc)}</button><span>${t('pet.drawNote', { n: left.length })}</span>` : `<span>${t('pet.all')}</span>`}</div>
    ${Object.keys(own).length ? (() => { const canAll = Object.values(own).some(q => q.lv < cap && D(pot).gte(petLvCost(S, q.lv))); return `<div class="petall"><button class="mini ${canAll ? 'hot' : ''}" data-p="lvAll" ${canAll ? '' : 'disabled'}>${t('pet.lvAll')}</button><span>${t('pet.lvAllD')}</span></div>`; })() : ''}
    <div class="petsum">${PET_FX_KEYS.filter(k => ag[k] > 0).map(k => `<em>${petFxText(k, ag[k])}</em>`).join('') || `<span class="mut2">${t('pet.none')}</span>`}</div>
    <div class="petgrid">${PETS.map(id => { const q = own[id]; return q ? `<div class="pcell ${id === sel ? 'on' : ''} ${S.pets.act === id ? 'act' : ''}" data-ps="${id}" style="border-color:${PET_COL[q.r]}" title="${t('pet.n.' + id)}"><img class="px" src="assets/pet/${id}.png"><i>Lv.${q.lv}</i></div>` : `<div class="pcell none" title="?"><img class="px" src="assets/pet/${id}.png"><i>?</i></div>`; }).join('')}</div>
    ${p ? `<div class="petdet"><img class="px" src="assets/pet/${sel}.png"><div class="pd">
      <b>${t('pet.n.' + sel)} <span class="mut2">Lv.${p.lv}/${cap}</span></b>
      <div>${fxLine(p)}${p.lv < PET_MAX ? ` <span class="mut2">→ Lv.${PET_MAX} ${petFxText(p.k, petVal({ ...p, lv: PET_MAX }))}</span>` : ''}</div>
      <div class="pbtn"><button class="mini ${p.lv < cap && D(pot).gte(petLvCost(S, p.lv)) ? 'hot' : ''}" data-p="lv" ${p.lv < cap ? '' : 'disabled'} title="${t('pet.lvT')}">${p.lv >= cap ? (p.lv >= PET_MAX ? 'MAX' : t('pet.capped', { f: (p.lv + 1) * 2 })) : t('pet.lvUp') + ' ' + goldIc + ' ' + fmt(petLvCost(S, p.lv))}</button>
        <button class="mini" data-p="roll" ${D(pot).gte(petRollCost(S)) ? '' : 'disabled'}>${t('pet.roll')} ${goldIc} ${fmt(petRollCost(S))}</button>
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
  const c = S.cls || 'war'; const keepY = $('#cosWin').scrollTop;
  const baseSrc = (() => { const b = lookOf(S, 'base'); return b && b !== 'auto' ? 'cos/' + b : 'cls/' + c; })();
  const thumb = (slot, v) => slot === 'hair' && v !== 'auto' ? `<span class="cstk"><img class="px" src="assets/${baseSrc}.png"><img class="px" src="assets/cos/${v}.png"></span>` : v === 'auto' ? (slot === 'base' ? `<img class="px" src="assets/cls/${c}.png">` : `<span class="ctxt">${t(slot === 'hair' || slot === 'offhand' ? 'cos.none' : 'cos.auto')}</span>`) : v === 'hide' ? `<span class="ctxt">${t('cos.hide')}</span>` : `<img class="px" src="assets/${v[0] === 't' && /^t\d$/.test(v) ? itemDoll(slot, +v.slice(1), c) : 'cos/' + v}.png">`;
  $('#cosWin').innerHTML = `<div class="evh"><b>${t('cos.title')}</b><span>${t('cos.count', { n: cosCount(S), m: COSTUMES.length })}</span></div><div class="cosfx">${(() => { const b = cosBonus(S), tot = COSTUMES.filter(z => !z.free).length; return `<b>${t('cos.fxHead', { n: b.n, m: tot })}</b> ${t('cos.fx.atk', { v: b.atk })} · ${t('cos.fx.hp', { v: b.hp })} · ${t('cos.fx.def', { v: b.def })}<span>${t('cos.fxRule')}</span>`; })()}</div><div class="cospv"><canvas id="cosPv" width="96" height="96"></canvas><div class="cospvt"><b id="cosPvN">${t('cos.pvNow')}</b><span>${t('cos.pvHint')}</span></div></div><div class="qx">${t('cos.desc')}</div>
    ${COS_SLOTS.map(slot => `<div class="cosrow"><b>${t('slot.' + slot)}</b><div class="coslist">${lookOptions(S, slot).map(v => `<button class="cosopt ${lookOf(S, slot) === v ? 'on' : ''} ${COS_BY_ID[v] ? 'sp' : ''}" data-cs="${slot}" data-cv="${v}" title="${COS_BY_ID[v] ? t('cos.n.' + v) + (cosFxTxt(v) ? ' · ' + cosFxTxt(v) : '') : ''}">${thumb(slot, v)}</button>`).join('')}</div></div>`).join('')}
    <button class="mini wide" data-csa="close">${t('ui.close')}</button>`;
  $('#cosWin').scrollTop = keepY;
}
// 여러 원정·상자를 한 번에 받았을 때 보상을 합쳐서 보여 준다
function showBulkReward(title, tot) {
  const rows = []; if (tot.shards) rows.push([t('rw.shards', { n: fmtN(tot.shards) }), null]); if (tot.ess) rows.push([t('rw.ess', { n: fmtN(tot.ess) }), null]); if (tot.dust) rows.push([t('rune.dustN', { n: fmtN(tot.dust) }), null]); if (tot.crystal) rows.push([t('aby.crystalN', { n: fmtN(tot.crystal) }), null]); if (tot.trace) rows.push([t('trace.pts', { n: fmtN(tot.trace) }), null]);
  const g = (tot.gear || []).slice().sort((a, b) => b.r - a.r || cgScore(b) - cgScore(a)); if (g.length) { const by = {}; for (const it of g) by[it.r] = (by[it.r] || 0) + 1; rows.push(['<b>' + t('cg.n', { n: g.length }) + '</b> · ' + Object.keys(by).sort((a, b) => b - a).map(r => `<span style="color:${CG_COL[r]}">${t('rar.' + r)} ${by[r]}</span>`).join(' · '), null]); for (const it of g.slice(0, 12)) rows.push([cgName(it) + ' <i>' + t('rar.' + it.r) + '</i>', null]); if (g.length > 12) rows.push([t('ss.more', { n: g.length - 12 }), null]); }
  for (const c of tot.cos || []) rows.push(['<b class="hi">' + t('cos.got', { c: t('cos.n.' + c) }) + '</b>', null]);
  showReward(title, rows);
}
function bindCompExtras() {
  $('#expBox').addEventListener('click', e => { const b = e.target.closest('[data-x]'); if (!b) return; const i = +b.dataset.i, a = b.dataset.x;
    if (a === 'alldi') return;
    if (a === 'bag') openCgModal();
    else if (a === 'abySend') { const ids = abyAutoPick(S); if (abyStart(S, ids)) { addLog('<b>' + t('aby.sent', { d: abyState(S).run.d }) + '</b>'); save(S); } }
    else if (a === 'abyRecall') { if (expArm !== -2) { expArm = -2; $('#expBox').dataset.sig = ''; renderExped(); setTimeout(() => { if (expArm === -2) { expArm = -1; $('#expBox').dataset.sig = ''; renderExped(); } }, 3000); return; } expArm = -1; abyRecall(S); save(S); }
    else if (a === 'abyAd') { try { globalThis.__dgAbyAd && globalThis.__dgAbyAd.run(); } catch {} }
    else if (a === 'abyClaim') { const r = abyAuto(S) || (() => { const c = abyClaim(S); return c && { n: 1, crystal: c.crystal, trace: c.trace, d: c.d }; })(); if (r) { showReward(t('aby.result', { d: r.d }), [[t('aby.crystalN', { n: fmtN(r.crystal) }), null], [t('trace.pts', { n: fmtN(r.trace) }), null]]); abyLog(r); st = stats(S); save(S); } }
    else if (a === 'send') openExpModal(i);
    else if (a === 'sendAll') { const n = expSendAll(S, expSel.di); if (n) { addLog('<b>' + t('exp.sentAll', { n, h: EXP_DUR[expSel.di] }) + '</b> · ' + t('exp.at', { t: clockAt(Date.now() + EXP_DUR[expSel.di] * 3600000) })); save(S); } }
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
    else if (d.dataset.xa === 'go') { if (expStart(S, expSel.slot, expSel.ids, expSel.di)) { addLog('<b>' + t('exp.sent', { h: EXP_DUR[expSel.di] }) + '</b> · ' + t('exp.at', { t: clockAt(Date.now() + EXP_DUR[expSel.di] * 3600000) })); save(S); $('#expModal').classList.add('hidden'); $('#expBox').dataset.sig = ''; renderExped(); buildComps(); } return; }
    renderExpModal(); });
  $('#cgWin').addEventListener('click', e => { const b = e.target.closest('[data-cga]'); if (!b || b.disabled) return; const a = b.dataset.cga;
    if (a === 'close') { $('#cgModal').classList.add('hidden'); return; }
    if (a === 'toggle') { S.cgAuto = b.checked; if (S.cgAuto) { const n = cgAutoEquip(S); cgTakeMoved(); if (n) toast(t('cg.autoLog', { n })); } }
    if (a === 'auto') { const n = cgAutoEquip(S); cgTakeMoved(); toast(t('cg.autoLog', { n })); }
    else if (a === 'merge') { const n = cgMerge(S); toast(t('cg.mergeLog', { n })); }
    else if (a === 'dis') { if (cgDisR >= 3 && Date.now() > cgDisArm) { cgDisArm = Date.now() + 3000; setTimeout(() => { if (Date.now() >= cgDisArm && !$('#cgModal').classList.contains('hidden')) renderCgModal(); }, 3050); renderCgModal(); return; } cgDisArm = 0; const lim = cgDisR; const r = cgDismantle(S, x => x.r <= lim && x.r < CG_MYTH); toast(t('cg.disLog', { n: r.n, s: r.shards })); }
    st = stats(S); save(S); renderCgModal(); $('#expBox').dataset.sig = ''; renderExped(); buildComps(); });
  $('#cgWin').addEventListener('change', e => { const sel = e.target.closest('[data-cgr]'); if (!sel) return; cgDisR = Math.max(0, Math.min(4, +sel.value || 0)); cgDisArm = 0; try { localStorage.setItem('dg.cgDisR', String(cgDisR)); } catch (er) {} renderCgModal(); });
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
  { const canUp = Object.keys(S.comp || {}).some(id => { const c = compNextCost(S, id), a = compAwNextCost(S, id); return (c > 0 && (S.shards || 0) >= c) || (a > 0 && (S.abyc || 0) >= a); }); $('#lvAll').disabled = !canUp; }
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
        <div style="font-size:10px;color:var(--muted)">${aw > AWAKEN_MAX ? t('ui.awakenX', { a: aw, n: own ? own.n : 0 }) : t('ui.awaken', { a: aw, b: AWAKEN_MAX, n: own ? own.n : 0 })}</div>
        <div class="awbar">${Array.from({ length: AWAKEN_MAX }, (_, i) => `<i class="${i < aw ? 'on' : ''}"></i>`).join('')}${aw > AWAKEN_MAX ? `<b class="awx">+${aw - AWAKEN_MAX}</b>` : ''}</div></div></div>
    <div class="cd-row ${inTeam ? 'act' : ''}"><div class="h">${t('ui.teamEff')}</div><b>${effTxt(c.team.k, teamValue(S, c, aw))}</b>
      <div class="x">${c.r === 5 ? t('ui.synAll') : c.cls === S.cls ? t('ui.synOn') : t('ui.synOff', { c: cl.name })}</div>
      <div class="h" style="margin-top:3px">${t('ui.attack', { p: Math.round(compCoef(c, aw, lv) * 100), d: fmt(st.atk.mul(compCoef(c, aw, lv) * (1 + st.raw.compP / 100))) })}</div></div>
    <div class="cd-row ${known ? 'act' : ''}"><div class="h">${t('ui.ownEff')}</div><b>${effTxt(c.own.k, ownValue(c, aw, lv))}</b></div>
    ${known ? `<div class="cd-row clvrow"><div class="h">${t('ui.clvHead', { l: lv, m: CLV_MAX })}</div>
      <div class="clvbar"><i style="width:${lv / CLV_MAX * 100}%"></i></div>
      <div class="x">${t('ui.clvDesc', { p: Math.round(CLV_STEP * 100), t: Math.round(CLV_STEP * lv * 100) })}</div>
      ${lv >= CLV_MAX ? `<div class="x">${t('ui.awDesc')}</div>` : ''}
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
    // Lv.20 전에는 레벨업, 그 뒤로는 조각 각성 (6~10)
    let didAw = false;
    const paint = () => {
      const o = S.comp[id], l2 = o.lv || 0, a2 = o.aw || 0;
      if (l2 < CLV_MAX) { const cost = compLvCost(c, l2); lb.innerHTML = t('ui.clvBtn', { c: `<b>${fmt(cost)}</b>`, n: fmt(S.shards || 0) }); lb.classList.toggle('no', (S.shards || 0) < cost); return; }
      if (a2 < AWAKEN_MAX) { lb.innerHTML = t('ui.awNeed5'); lb.classList.add('no'); return; }
      const cost = awCost(c, a2); lb.innerHTML = t('ui.awBtn', { a: a2 + 1, c: `<b>${fmt(cost)}</b>`, n: fmt(S.abyc || 0) }); lb.classList.toggle('no', (S.abyc || 0) < cost);
    };
    paint();
    holdRepeat(lb, () => { const lvUp = (S.comp[id].lv || 0) < CLV_MAX; if (!(lvUp ? compLevelUp(S, id) : compAwaken(S, id))) return false; if (!lvUp) didAw = true; st = stats(S); paint(); return true; },
      n => { if (n) { const nm = `<b style="color:${rr.color}">${c.name}</b>`; addLog(didAw ? t('ui.awUp', { c: nm, a: S.comp[id].aw }) : t('ui.clvUp', { c: nm, l: S.comp[id].lv })); didAw = false; buildComps(); openComp(id); } });
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
  const sb = S.shopBuy || {}, nSlot = sb.expSlot || 0, keyLeft = shopKeyLeft(S), cosLeft = cosPool(S);
  const nBtn = (id, n) => { const k = Math.min(n, Math.floor(S.stones / STONE_SHOP[id])); return k > 1 ? `<button class="mini" data-ssn="${id}" data-n="${k}" title="${t('ss.nT')}">×${k} <img src="assets/ui/stone.png" class="px i14" alt=""> ${fmtN(k * STONE_SHOP[id])}</button>` : ''; };
  const row = (id, title, desc, cost, ok, extra = '') => `<div class="ssrow ss-${id}"><div class="t"><b>${title}</b><span>${desc}</span></div>${extra}<button class="mini ${ok ? 'hot' : ''}" data-ss="${id}" ${ok ? '' : 'disabled'}><img src="assets/ui/stone.png" class="px i14" alt=""> ${cost}</button></div>`;
  const sig = [Math.floor(S.stones / 2000), keyLeft, towerBestAll(S) >= MYTH_BOX_FLOOR, abyUnlocked(S), nSlot, cosLeft.length, S.stones >= STONE_SHOP.costume, S.stones >= STONE_SHOP.key, nSlot < 2 && S.stones >= STONE_SHOP.expSlot[nSlot], getLang(), shopCos].join('|');
  if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  box.innerHTML = `<div class="ssh"><b>${t('ss.title')}</b><span>${t('ss.sub')}</span></div>` +
    row('gearBox', t('ss.gearBox'), t('ss.gearBox.d'), fmtN(STONE_SHOP.gearBox), S.stones >= STONE_SHOP.gearBox, nBtn('gearBox', 10)) +
    row('gearBoxHi', t('ss.gearBoxHi'), t('ss.gearBoxHi.d'), fmtN(STONE_SHOP.gearBoxHi), S.stones >= STONE_SHOP.gearBoxHi, nBtn('gearBoxHi', 10)) +
    (towerBestAll(S) >= MYTH_BOX_FLOOR ? row('gearBoxMyth', t('ss.gearBoxMyth'), t('ss.gearBoxMyth.d', { p: Math.round(MYTH_BOX_P * 100), f: MYTH_BOX_FLOOR }), fmtN(STONE_SHOP.gearBoxMyth), S.stones >= STONE_SHOP.gearBoxMyth, nBtn('gearBoxMyth', 10)) : '') +
    row('key', t('ss.key'), t('ss.key.d', { n: keyLeft, m: STONE_SHOP.keyDaily }), fmtN(STONE_SHOP.key), keyLeft > 0 && S.stones >= STONE_SHOP.key) +
    (!abyUnlocked(S) && nSlot < EXP_MAX - 2 ? row('expSlot', t('ss.expSlot', { n: expCap(S) + 1 }), t('ss.expSlot.d'), fmtN(STONE_SHOP.expSlot[nSlot]), S.stones >= STONE_SHOP.expSlot[nSlot]) : '') +
    (cosLeft.length ? row('costume', t('ss.cos'), t('ss.cos.d', { n: cosLeft.length }), fmtN(STONE_SHOP.costume), S.stones >= STONE_SHOP.costume && !!shopCos && cosLeft.some(z => z.id === shopCos),
      (S.stones >= STONE_SHOP.costume ? `<button class="mini" data-ss="cosAll" title="${t('ss.cosAllT')}">${t('ss.cosAll', { n: Math.min(cosLeft.length, Math.floor(S.stones / STONE_SHOP.costume)) })} <img src="assets/ui/stone.png" class="px i14" alt=""> ${fmtN(Math.min(cosLeft.length, Math.floor(S.stones / STONE_SHOP.costume)) * STONE_SHOP.costume)}</button>` : '') + `<select data-sc="1"><option value="">${t('ss.cosPick')}</option>${cosLeft.map(z => `<option value="${z.id}" ${shopCos === z.id ? 'selected' : ''}>${t('slot.' + z.slot)} · ${t('cos.n.' + z.id)} (${cosFxTxt(z.id)})</option>`).join('')}</select>`) : '') +
    (abyUnlocked(S) ? '' : `<div class="qx">${t('ss.note')}</div>`);
}
let shopCos = '';
function bindStoneShop() {
  const box = $('#stoneShop'); if (!box) return;
  box.addEventListener('change', e => { if (e.target.dataset.sc) { shopCos = e.target.value; box.dataset.sig = ''; buildStoneShop(); } });
  holdDelegate(box, '[data-ss="gearBox"], [data-ss="gearBoxHi"], [data-ss="gearBoxMyth"], [data-ss="key"]', b => { const w = b.dataset.ss, r = shopBuy(S, w); if (!r) return false;
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
  $('#pickBtn').onclick = openPick;
  $('#pickWin').addEventListener('click', e => { const b = e.target.closest('[data-pk]'); if (!b) return; if (b.dataset.pk === 'close') { $('#pickModal').classList.add('hidden'); return; }
    const r = pickUse(S, b.dataset.pk); if (r) { save(S, 'force'); $('#pickModal').classList.add('hidden'); addLog('<b>' + t('pick.log', { c: `<span style="color:${C_RARITY[r.c.r].color}">${r.c.name}</span>` }) + '</b>'); COMP_VER_BUMP(); showGacha([r]); render(); } renderPickBtn(); });
  $('#pickModal').onclick = e => { if (e.target.id === 'pickModal') $('#pickModal').classList.add('hidden'); };
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
const engrTxt = it => `<span style="color:${CG_COL[it.g + 1]}">[${t('rar.' + (it.g + 1))}] ${t('engr.k.' + it.k)} +${ENGR_V[it.g]}%</span>`;
// ---------- 선 아이콘 (각인 창) ----------
const LI = {
  atk: '<path d="M14.5 4H20v5.5L10 19.5 4.5 14z"/><path d="M4 20l3-3M7.5 13.5l3 3"/>',
  hp: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/>',
  boss: '<path d="M4 18h16l-1.2-10-4.3 4L12 6l-2.5 6-4.3-4z"/><path d="M5 21h14"/>',
  skill: '<path d="M12 3l2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4z"/>',
  basic: '<path d="M5 19L19 5M9.5 19.5l10-10M4.5 14.5l10-10"/>',
  comp: '<circle cx="8" cy="8.5" r="2.8"/><circle cx="16.5" cy="8.5" r="2.8"/><path d="M3 19.5c0-3 2.2-5.2 5-5.2s5 2.2 5 5.2M11.5 19.5c0-3 2.2-5.2 5-5.2s5 2.2 5 5.2"/>',
  tower: '<path d="M8 21V9l4-5 4 5v12z"/><path d="M8 13h8M11 21v-4h2v4"/>',
  gold: '<circle cx="12" cy="12" r="8.5"/><path d="M12 6.8v10.4M14.8 9.3h-3.9a1.6 1.6 0 0 0 0 3.2h2.2a1.6 1.6 0 0 1 0 3.2H9.2"/>',
  honor: '<circle cx="12" cy="9" r="5"/><path d="M9 13.2L7.5 21l4.5-2.6 4.5 2.6-1.5-7.8"/>',
  karma: '<path d="M7.2 9a3 3 0 1 0 0 6c3 0 6.6-6 9.6-6a3 3 0 1 1 0 6c-3 0-6.6-6-9.6-6z"/>',
  core: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>',
};
const lic = (k, sz = 16) => `<svg viewBox="0 0 24 24" width="${sz}" height="${sz}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${LI[k] || LI.core}</svg>`;
const GCOL = g => CG_COL[g + 1];

// ---------- 장비 각인 창: 효과는 고르고, 값만 돌린다 ----------
let engrSel = 'weapon', engrGoal = 3, engrArm = '';
function openEngr() { $('#engrModal').classList.remove('hidden'); renderEngrWin(); }
function renderEngrWin() {
  const w = $('#engrWin'); if (!w || $('#engrModal').classList.contains('hidden')) return;
  const holy = S.holy || 0, E = S.engr || {}, x = E[engrSel], has = x && x.v > 0, fx = engrFx(S);
  const rows = SLOTS.map(sl => { const e = E[sl.id], it = S.equip[sl.id], on = sl.id === engrSel;
    const val = e && e.v > 0 ? `<b class="ev" style="color:${GCOL(e.g)}">+${e.v}%</b>` : '<b class="ev dim">-</b>';
    return `<button class="erow ${on ? 'on' : ''}" data-es="${sl.id}"><span class="eic">${it ? `<img class="px" src="${itemIcon(it, S.cls)}">` : ''}</span><span class="enm">${sl.name}</span><span class="ek">${e ? lic(e.k, 14) + t('engr.s.' + e.k) : '<i>' + t('engr.none') + '</i>'}</span>${val}<span class="ebar"><i style="width:${e && e.v ? Math.round(e.v / 50 * 100) : 0}%;background:${e && e.v ? GCOL(e.g) : 'transparent'}"></i></span></button>`; }).join('');
  const chips = ENGR_KEYS.map(k => `<button class="echip ${x && x.k === k ? 'on' : ''}" data-ek="${k}" title="${t('engr.k.' + k)}">${lic(k, 18)}<span>${t('engr.s.' + k)}</span></button>`).join('');
  const segs = ENGR_R.map((r, g) => `<button class="eseg ${has && x.g === g ? 'cur' : ''} ${engrGoal === g ? 'goal' : ''}" data-eg="${g}" style="--c:${GCOL(g)}"><b>${t('rar.' + (g + 1))}</b><span>${r[0]}~${r[1]}%</span><small>${ENGR_W[g]}%</small></button>`).join('');
  const sum = ENGR_KEYS.filter(k => fx[k] > 1).map(k => `<span>${lic(k, 12)}×${fx[k].toFixed(2)}</span>`).join('');
  w.innerHTML = `<div class="gh"><b>${t('engr.head')}</b><span class="holy">${lic('skill', 13)}${fmtN(holy)}</span><button class="gx" data-ex="close" aria-label="close"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
    <div class="elist">${rows}</div>
    <div class="ecard">
      <div class="echips">${chips}</div>
      <div class="ebig">${x ? `<span class="ekname">${lic(x.k, 18)}${t('engr.k.' + x.k)}</span><b style="color:${has ? GCOL(x.g) : 'var(--muted)'}">${has ? '+' + x.v + '%' : '-'}</b>${has ? `<small style="color:${GCOL(x.g)}">${t('rar.' + (x.g + 1))}</small>` : ''}` : `<span class="ekname">${t('engr.pick')}</span>`}</div>
      <div class="esegs">${segs}</div>
      <div class="ebtns"><button class="gbtn hot" data-er="roll" ${x && holy >= ENGR_COST ? '' : 'disabled'}>${t('engr.rollV')} <small>${lic('skill', 11)}${ENGR_COST}</small></button><button class="gbtn" data-er="until" ${x && holy >= ENGR_COST ? '' : 'disabled'}>${t('engr.until', { g: t('rar.' + (engrGoal + 1)) })}</button></div>
    </div>
    ${sum ? `<div class="esum">${sum}</div>` : ''}`;
}
function engrAfter() { st = stats(S); buildSlots(); renderEngrWin(); }
function bindEngr() {
  $('#engrBtn').onclick = openEngr;
  const m = $('#engrModal'), w = $('#engrWin');
  m.addEventListener('click', e => { if (e.target === m) m.classList.add('hidden'); });
  w.addEventListener('click', e => {
    if (e.target.closest('[data-ex="close"]')) { m.classList.add('hidden'); return; }
    const r = e.target.closest('[data-es]'); if (r) { engrSel = r.dataset.es; engrArm = ''; renderEngrWin(); return; }
    const g = e.target.closest('[data-eg]'); if (g) { engrGoal = +g.dataset.eg; renderEngrWin(); return; }
    const k = e.target.closest('[data-ek]'); if (k) { engrArm = ''; if (engrPick(S, engrSel, k.dataset.ek)) { save(S); engrAfter(); } return; }
    if (e.target.closest('[data-er="until"]')) { const r2 = engrRollUntil(S, engrSel, engrGoal); if (r2.n) { addLog('<b>' + t('engr.log', { s: SLOT_BY_ID[engrSel].name }) + '</b> ' + t('engr.k.' + r2.x.k) + ' +' + r2.x.v + '% (' + t('engr.tries', { n: r2.n }) + ')'); save(S); engrAfter(); render(); } }
  });
  holdDelegate(w, '[data-er="roll"]', b => { const x = engrRoll(S, engrSel); if (!x) return false; engrAfter(); return true; }, n => { if (n) { const x = (S.engr || {})[engrSel]; if (x) addLog('<b>' + t('engr.log', { s: SLOT_BY_ID[engrSel].name }) + '</b> ' + t('engr.k.' + x.k) + ' +' + x.v + '%'); render(); } });
}


// ---------- 5.14.10 패치노트 (업데이트 뒤 처음 한 번 + 설정 버튼) ----------
const PATCH_NOTES = [{"v":"5.14.17","ko":["<b>장비 각인</b>: 각인 효과를 바꿔도 이미 돌린 등급과 수치가 그대로 남아요."],"en":["<b>Engravings</b>: changing an engraving effect keeps the grade and value you already rolled."]},{"v":"5.14.16","ko":["<b>절전 모드</b>: 위쪽 달 버튼을 누르면 검은 화면에 층 진행만 보여 주고, 화면이 꺼지지 않게 해요. 전투는 그대로 진행돼요(화면이 꺼지면 오프라인 60% 속도). 밀어서 돌아가요.","<b>자동 절전</b>: 설정에서 조작이 없을 때 1·3·5·10분 뒤 자동으로 절전 모드에 들어가게 할 수 있어요.","탑 일괄 소탕 결과 알림에 글자 코드가 보이던 문제를 고쳤어요."],"en":["<b>Power save</b>: tap the moon button for a dark screen that shows only floor progress and keeps the screen on. Combat keeps running (with the screen off it would drop to 60% offline speed). Slide to return.","<b>Auto power save</b>: in Settings, enter power save automatically after 1, 3, 5 or 10 minutes without input.","Fixed markup text showing in the tower bulk-sweep notice."]},{"v":"5.14.15","ko":["<b>동료형 각인</b>: 동료 피해 각인도 펫·룬처럼 스킬 피해로 바뀌어 효과가 생겨요(지금까지는 효과가 없었어요). 파티에 동료가 없으면 동료 피해 환산은 하지 않아요.","<b>출석</b>: 출석한 뒤 내일 받을 보상을 보여 줘요.","<b>초보자 가이드</b>: 첫 환생 전에 B20 이후 3분 동안 층이 오르지 않으면 환생 단계를 먼저 알려 줘요.","<b>원정</b>: 원정대가 돌아오는 시각을 함께 보여 줘요.","<b>랭킹</b>: 밸런스 조정을 위해 랭킹 기록을 보낼 때 최신 세이브 1개를 함께 보관해요(개인정보 처리방침 9항)."],"en":["<b>Companion style engravings</b>: companion DMG engravings now count as skill damage like pets and runes (they did nothing before). With no companion in the party, companion DMG is not converted.","<b>Check-in</b>: after checking in, you can see tomorrow's reward.","<b>Starter guide</b>: before your first rebirth, if your floor stops rising for 3 minutes past B20, the guide shows the rebirth step first.","<b>Expeditions</b>: shows the time your expedition comes back.","<b>Ranking</b>: to tune balance, your latest save is kept when you send a ranking record (privacy policy section 9)."]},{"v":"5.14.14","ko":["<b>평타형 펫</b>: 도적·전사 평타형에서 평타 피해 펫 효과가 평타에 더 많이(75%) 들어가요. 평타 펫을 끼면 평타형이 더 약하던 문제를 고쳤어요.","<b>마법사·성직자 평타형</b>: 평타 위주 세팅이면 평타 피해 펫을 평타에 그대로 쓰는 방식을 자동으로 골라, 평타형이 스킬형과 비슷해요."],"en":["<b>Basic-style pets</b>: for rogues and warriors in basic style, basic DMG pets now count much more (75%) on basic attacks, so basic pets no longer make basic style the weakest.","<b>Mage/cleric basic style</b>: basic-heavy builds now keep basic DMG pets on basic attacks, so basic style is about as strong as skill style."]},{"v":"5.14.13","ko":["<b>평타형(도적·전사)</b>: 신격 영역을 스킬 피해로 바꾸는 방식과 평타에 그대로 두는 방식 중 더 센 쪽을 자동으로 골라요. 평타 위주 세팅에서 평타형이 크게 강해져요.","<b>동료형</b>: 동료 피해%가 주는 보너스가 줄었어요. 모든 직업에서 동료형만 앞서던 것을 맞췄어요.","<b>추천 세팅 찾기</b>: 스킬 탭 전투 스타일 칸에서 지금 스타일 기준으로 무엇을 바꾸면 세지는지 계산해 보여 주고, 바로 적용할 수 있어요."],"en":["<b>Basic style (rogue, warrior)</b>: the game now picks the stronger of two ways to use your divine domain (as skill damage, or kept on basic attacks). Basic-heavy builds get much stronger.","<b>Companion style</b>: the bonus from companion DMG% is smaller, so companion style no longer leads for every class.","<b>Find best setup</b>: in the combat style box on the skill tab, see which change (style, domain, mutation, soul weapon, party, pet effect) makes you stronger and apply it."]},{"v":"5.14.12","ko":["<b>동료 장비 일괄 분해</b>: 등급(일반~<b>전설</b>)을 골라 그 등급 이하를 한 번에 분해해요. 영웅·전설은 한 번 더 눌러야 분해되고, 신화와 장착 중인 장비는 분해되지 않아요."],"en":["<b>Ally gear bulk salvage</b>: pick a rarity (Common to <b>Legendary</b>) and salvage everything at or below it. Epic and Legendary need a second tap; Mythic and equipped gear are never salvaged."]},{"v":"5.14.11","ko":["<b>탑 상위 이름·신화 장비 기준 조정</b>: 동료 장비 <b>신화</b> 보상이 탑 1001층부터 나와요(2000층·3000층부터 1개씩 더). 탑 기록이 1000층 이상이면 그 탑은 상위 탑 이름으로 바뀌어요. 신화 동료 장비 상자도 탑 기록 1000층부터 상점에 보여요."],"en":["<b>Upper towers and mythic gear moved to 1000F</b>: <b>mythic</b> companion gear now starts at 1001F (+1 from 2000F and 3000F). A tower with a record of 1000F or more takes its upper name. The mythic ally gear box shows from tower record 1000F."]},
  {"v":"5.14.10","ko":["<b>보스 레이드 참여 확대</b>: 성을 가진 모험가도 위계와 상관없이 레이드에 참여할 수 있어요.","<b>장비 각인</b>: 레이드 보상으로 <b>신성 조각</b>이 새로 생겨요(깬 단계마다 10개). 장비 화면의 <b>각인</b> 버튼에서 장비 칸마다 효과(공격력·체력·보스·스킬·평타·동료·탑·골드)를 직접 고르고, 신성 조각으로 값(고급 3~6% ~ 신화 33~50%)을 돌려요. 장비를 바꾸거나 환생·윤회해도 남아요.","<b>탑 100층 위</b>: 100층부터 이름이 바뀌고 동료 장비 <b>신화</b> 등급이 나와요(500층·1000층부터 더 많이).","<b>신화 동료 장비 상자</b>: 탑 기록 100층부터 소환석 상점에 생겨요(전설 이상 확정, 신화 25%).","<b>마을 땅값 40% 인하</b>: 이미 산 땅은 차액을 우편으로 돌려드려요.","<b>짧은 세이브 코드</b>: 세이브 코드 복사가 DM6-XXXXXXXX 형태의 짧은 코드로 바뀌었어요(30일 보관).","<b>원정 정리</b>: 심연 원정이 열리면(최고 300층) 심연 원정만, 그 전에는 일반 원정만 보여요. 진행 중이던 일반 원정은 끝나면 받을 수 있어요. 동료 탭의 보유 효과 요약은 닫았어요.","전투 화면에서 스킬·버프 아이콘이 겹치거나 깨지던 문제를 고쳤어요."],"en":["<b>Boss Raid</b>: castle owners can now join regardless of divine tier.","<b>Gear engraving</b>: raids now also give <b>holy shards</b> (10 per stage cleared). Tap <b>Engrave</b> in the gear screen, pick an effect (ATK, HP, boss, skill, basic, companion, tower, gold) for each slot and reroll its value with holy shards (common 3~6% up to mythic 33~50%). Stays through gear swaps, rebirth and reincarnation.","<b>Towers above 100F</b>: new names from 100F, and <b>mythic</b> companion gear drops (more from 500F and 1000F).","<b>Mythic ally gear box</b>: appears in the stone shop from tower record 100F (legendary or better, 25% mythic).","<b>Village plots 40% cheaper</b>: the difference for plots you already bought is refunded by mail.","<b>Short save codes</b>: copying a save code now gives a short DM6-XXXXXXXX code (kept for 30 days).","<b>Expeditions</b>: once Abyss expeditions unlock (best 300F) only those are shown; before that only normal expeditions. Running normal expeditions can still be claimed. The owned-effects summary in the Companion tab is closed.","Fixed skill and buff icons overlapping or breaking in the battle HUD."]},
  {"v":"5.14.9","ko":["도적 평타형 조정: 평타에는 그림자 영역·평타 펫 효과의 30%만 남아요(스킬형의 약 1.2~1.3배).","전사 광전 하향: 광전 영역 평타 피해 위계마다 +125 → +80, 평타형 스킬 피해 전환 ×1.1 → ×0.95."],"en":["Rogue basic style: only 30% of Shadow Domain and basic-attack pet effects stay on basic attacks (about 1.2~1.3x skill style).","Warrior Berserk nerf: domain basic damage +125 → +80 per tier, basic-style conversion x1.1 → x0.95."]},
  {"v":"5.14.8","ko":["탑 기록이 60층 단위로 뛰고 기기 프레임에 따라 달라지던 문제를 고쳤어요. 이제 체력과 보스 피해 둘 다로 높이가 정해져요.","도적 평타형 강화."],"en":["Tower records no longer jump in 60-floor steps or depend on frame rate. Height now depends on both HP and boss damage.","Rogue basic style buff."]},
  {"v":"5.14.7","ko":["보스 레이드 건너뛰기, 레이드에서 내 스킬 연출.","탑 전투 프리셋: 탑·균열에 들어가면 저장한 스타일·영혼무기 옵션·스킬 변이로 자동 전환.","하단 탭이 늦게 눌리던 문제 개선."],"en":["Boss Raid skip, your own skills shown in the raid scene.","Tower preset: switches to your saved style, soul options and mutations in towers and rifts.","Bottom tabs respond faster."]}];
const pnCmp = (a, b) => { const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number); for (let i = 0; i < 3; i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d; } return 0; };
const pnVer = () => { try { return chrome.runtime.getManifest().version; } catch (e) { return PATCH_NOTES[0].v; } };
function pnShow(list, title) {
  const ko = getLang() === 'ko';
  $('#pnTitle').textContent = title || t('pn.title');
  $('#pnBody').innerHTML = list.map(n => `<div class="pnv"><h3>v${n.v}</h3><ul>${(ko ? n.ko : n.en).map(x => '<li>' + x + '</li>').join('')}</ul></div>`).join('');
  $('#pnBody').scrollTop = 0; $('#pnModal').classList.remove('hidden');
}
function pnInit() {
  $('#pnClose').onclick = () => $('#pnModal').classList.add('hidden');
  { const pb = $('#privacyBtn'); if (pb) pb.onclick = () => { try { window.open('https://an-yoo.github.io/Deskgeon/privacy.html', '_blank'); } catch (e) {} }; }   // 스토어 정책: 앱 안에서 개인정보처리방침 링크
  $('#pnModal').addEventListener('click', e => { if (e.target.id === 'pnModal') $('#pnModal').classList.add('hidden'); });
  $('#pnBtn').onclick = () => { $('#setModal') && $('#setModal').classList.add('hidden'); pnShow(PATCH_NOTES); };
  const cur = pnVer(); let seen = ''; try { seen = localStorage.getItem('dg.pnSeen') || ''; } catch (e) {}
  const mark = () => { try { localStorage.setItem('dg.pnSeen', cur); } catch (e) {} };
  if (!seen && (S.rebirths || 0) === 0 && (S.bestFloor || 0) < 10) { mark(); return; }   // 처음 시작한 사람에게는 띄우지 않음
  const fresh = PATCH_NOTES.filter(n => pnCmp(n.v, cur) <= 0 && (!seen || pnCmp(n.v, seen) > 0)).slice(0, 3); if (!fresh.length) { mark(); return; }
  let tries = 0; const go = () => { if (document.querySelector('.modal:not(.hidden)') && ++tries < 40) { setTimeout(go, 3000); return; } mark(); pnShow(fresh, t('pn.newTitle', { v: cur })); };
  setTimeout(go, 1500);
}
function rewardText(r) {
  const p = [];
  if (r.holy) p.push(t('rw.holy', { n: r.holy }));
  if (r.stones) p.push(t('rw.stones', { n: r.stones }));
  if (r.shards) p.push(t('rw.shards', { n: r.shards }));
  if (r.ess) p.push(t('rw.ess', { n: r.ess }));
  if (r.boost) p.push(t('rw.boost', { n: r.boost }));
  if (r.keys) p.push(t('rw.keys', { n: r.keys }));
  for (const v of [].concat(r.comp || [])) p.push(t('rw.comp', { r: C_RARITY[v].name }));
  for (const v of [].concat(r.pick || [])) p.push(t('rw.pick', { r: C_RARITY[v].name }));
  for (const v of [].concat(r.title || [])) p.push(t('rw.title', { n: t('ttl.n.' + v) }));
  if (r.arank) p.push(t('rw.arank', { n: r.arank }));
  if (r.hboost) p.push(t('rw.hboost', { n: r.hboost }));
  if (r.kboost) p.push(t('rw.kboost', { n: r.kboost }));
  if (r.abyc) p.push(t('rw.abyc', { n: fmtN(r.abyc) }));
  if (r.trace) p.push(t('rw.trace', { n: fmtN(r.trace) }));
  if (r.aby) { const a = abyGift(S, r.aby); p.push(a.d ? t('rw.aby', { n: r.aby, c: fmtN(a.crystal), tr: fmtN(a.trace) }) : t('rw.abyLock', { n: r.aby })); }
  return p.join(' · ');
}
const fmtN = n => D(n).lt(100000) ? Math.floor(dn(n)).toLocaleString('en-US') : fmt(n);
// 5.13: 위계마다 피해(D)·체력(H) 숫자를 다시 작게 시작한다. 실제 값은 그대로, 보이는 숫자만 나눈다
let DSC = D(1), HSC = D(1), ASC = D(1), dscT = -1;   // 위계 구간 표시 배율 (Decimal)
// 공격력은 DPS보다 훨씬 작은 수라, 구간에 들어설 때의 공격력/DPS 비율로 따로 맞춘다 (들어선 순간 공격력 ≈ DPS 숫자)
function syncScale() { const tr = S ? divBand(S) : 0; if (tr === dscT) return; dscT = tr; const sc = divScale(S); DSC = D(sc.dmg); HSC = D(sc.hp); ASC = tr && st && D(st.dps).gt(0) ? DSC.mul(st.atk).div(st.dps) : D(1); }
const fmtD = v => fmt(D(v).div(DSC)), fmtH = v => fmt(D(v).div(HSC)), fmtA = v => fmt(D(v).div(ASC));
// 배율(×)·퍼센트(%)도 커지면 K·M·B… 단위로 줄여 보여 준다
const fmtM = v => { v = D(v); return !Number.isFinite(v.mantissa) ? '∞' : v.lt(1000) ? v.toNumber().toFixed(2) : fmt(v); };
const fmtP = v => { v = D(v); return !Number.isFinite(v.mantissa) ? '∞' : v.abs().lt(100000) ? Math.round(v.toNumber()).toLocaleString('en-US') : fmt(v); };
const untilMidnight = () => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1).getTime() - d.getTime(); };
const essTxt = e0 => { const d = (S.ess || 0) - e0; return d > 0 ? ' · ' + t('rw.ess', { n: fmt(d) }) : ''; };
const pips = (n, on) => '<span class="pips">' + Array.from({ length: n }, (_, i) => `<i class="${i < on ? 'on' : ''}"></i>`).join('') + '</span>';

// ================= 모험 탭 (미션 · 탑 · 업적 · 도감 · 자동) =================
let qTab = 'mission';
const QTABS = ['mission', 'daily', 'ach', 'title', 'book'];   // 탑·균열은 던전 아래 칸으로 옮김 (5.13.2)
function missionClaimable(kind) {
  const L = kind === 'd' ? DAILY : WEEKLY;
  if (L.some(m => { const ms = missionState(S, kind, m); return !ms.claimed && ms.v >= ms.need; })) return true;
  const a = missionState(S, kind, 'all'); return !a.claimed && a.v >= a.need;
}
function qDot(k) {
  if (k === 'mission') return canAttend(S) || missionClaimable('d') || missionClaimable('w');
  if (k === 'tower') return TOWERS.some(x => canTower(S, x.id));
  if (k === 'rift') return canRift(S);
  if (k === 'daily') { const o = dl2State(S); return !!S.cls && (o.tries === DAILY_TRIES || !!o.cur); }
  if (k === 'title') return false;
  if (k === 'ach') return ACH.some(a => achClaimed(S, a.id) < achMet(S, a));
  return false;
}
function questHasClaim() { return qDot('mission') || qDot('ach'); }
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
function attendNext(nx) { const r = attendReward(S, nx); return (r.comp || r.pick) ? rewardText({ comp: r.comp, pick: r.pick }) : rewardText(r).split(' · ').slice(0, 2).join(' · '); }   // 5.14.15 내일 받을 보상 (동료가 있으면 그것만)
function attendCard(modal) {
  const a = S.quest.att || { n: 0 }, can = canAttend(S), nx = a.n % 7, pl = modal ? (window.__dgPromoLine?.() || '') : '';
  return `<div class="qcard"><div class="qh"><b>${t('q.attend')}</b><span>${t('q.attendDays', { n: a.n })}</span></div>
      ${attendNew(S) ? `<div class="qx hi">${t('q.attendNew', { x: ATTEND_NEW_X })}</div>` : ''}<div class="attrow">${ATTEND.map((r, i) => `<div class="att ${i < nx ? 'got' : ''} ${i === nx && can ? 'next' : ''}"><b>${t('q.day', { n: i + 1 })}</b>${rewardText(attendReward(S, i)).split(' · ').map(x => `<i>${x}</i>`).join('')}</div>`).join('')}</div>
      ${pl ? `<div class="qx hi attPromo">${esc(pl)}</div>` : ''}<button class="big sm" data-act="attend" ${can ? '' : 'disabled'}>${can ? t('q.attendBtn') : t('q.attendNext', { r: attendNext(nx) })}</button></div>`;
}
function qMission() {
  const bl = boostLeft(S), ch = (S.boost && S.boost.charges) || 0;
  return attendCard() + `
    <div class="qcard"><div class="qh"><b>${t('q.boost')}</b><span>${t('q.boostCharges', { n: ch })}</span></div>
      <div class="qx">${bl > 0 ? t('q.boostOn', { x: BOOST_X, t: fmtClock(bl) }) : t('q.boostDesc', { m: BOOST_MIN, x: BOOST_X })}</div>
      <button class="big sm" data-act="boost" ${ch ? '' : 'disabled'}>${t('q.boostBtn', { m: BOOST_MIN, x: BOOST_X })}</button></div>
    <div class="sech">${t('q.daily')}<span>${t('q.dailyReset')}</span></div>${missionRows('d')}
    <div class="sech">${t('q.weekly')}<span>${t('q.weeklyReset')}</span></div>${missionRows('w')}`;
}
// 탑 전투 프리셋 (5.14.7): 탑·균열 입장 때 자동으로 바꾸고 끝나면 사냥 세팅으로 되돌린다
function tpreUi(enter) {
  if (!tpreOn(S)) return;
  st = stats(S); buildSkills();
  addLog('<b>' + t('tp.head') + '</b> · ' + t(enter ? 'tp.in' : 'tp.out'));
}
function tpreCard() {
  const p = S.tpre, sk = classSkills(S.cls).filter(sd => p && p.mut[sd.id]);
  const sum = p ? [t('sty.' + p.style), p.soul.length && S.soul ? p.soul.map(k => t('sfx.n.' + k)).join('·') : '', sk.length ? t('tp.mut', { n: sk.length }) : ''].filter(Boolean).join(' · ') : t('tp.none');
  return `<div class="qcard tpre"><div class="qh"><b>${t('tp.head')}</b><span>${p ? (p.on ? t('tp.on') : t('tp.off')) : ''}</span></div>
    <div class="qx${p && p.on ? ' hi' : ''}">${sum}${p && !inTower() && tpreSameAsNow(S) ? ' <i class="mut2">' + t('tp.same') + '</i>' : ''}</div>
    <div class="twbtns"><button class="big sm" data-act="tpSave" ${inTower() ? 'disabled' : ''}>${t(p ? 'tp.resave' : 'tp.save')}</button>${p ? `<button class="big sm sweep" data-act="tpOn">${t(p.on ? 'tp.turnOff' : 'tp.turnOn')}</button>` : ''}</div>
    <div class="qx">${t('tp.note')}</div></div>`;
}
function qTower() {
  const busy = S.boss && !inTower();
  const now = inTower() && !inRift() ? `<div class="qcard ctr"><div class="qx hi">${towerName(towerId(), S.boss.tf)} · ${t('q.towerNow', { n: S.boss.tf, s: Math.max(0, S.boss.timer).toFixed(1) })}</div></div>` : '';
  const cards = TOWERS.map(T => {
    const ts = towerState(S, T.id), tries = ts.tries ?? TOWER_TRIES;
    return `<div class="qcard twc tw-${T.id}"><div class="qh"><b>${towerName(T.id, ts.best)}</b><span>${t('q.towerBest')} <b>${ts.best || 0}F</b> · ${t('q.towerTries')} <b>${tries}/${TOWER_TRIES}</b></span></div>
      <div class="qx">${t('tw.d.' + T.id, { t: T.time })}</div>
      <div class="qx rw">${t('tw.r.' + T.id)}</div>
      <div class="qx rw myth">${t('tw2.r', { t: t('tw2.' + T.id), f: TOWER_MYTH_FLOOR + 1 })}</div>
      <div class="twbtns"><button class="big sm" data-act="tower" data-id="${T.id}" ${canTower(S, T.id) ? '' : 'disabled'}>${t('q.towerBtn')}</button><button class="big sm sweep" data-act="tsweep" data-id="${T.id}" ${canTowerSweep(S, T.id) ? '' : 'disabled'} title="${t('sw.towerT', { n: ts.best || 0 })}">${t('sw.btn', { n: (ts.best || 0) + 'F' })}</button></div></div>`;
  }).join('');
  const nAll = TOWERS.reduce((a, T) => a + (canTowerSweep(S, T.id) ? (towerState(S, T.id).tries ?? TOWER_TRIES) : 0), 0);
  return now + tpreCard() + (nAll ? `<button class="big sm sweep" data-act="tsweepAll">${t('sw.all', { n: nAll })}</button>` : '') + (busy ? `<div class="qx c">${t('q.towerBusy')}</div>` : '') + cards + `<div class="qx c">${t('tw.note', { c: fmtClock(untilMidnight()) })}</div>`;
}
// ---------- 차원 균열 · 룬 ----------
const RUNE_COL = ['#b8b8c8', '#6bd66b', '#5aa9ff', '#c77dff', '#ffb347'];
function runeStatTxt(ru) { return t('rune.k.' + ru.k) + ' +' + runeVal(ru) + '%' + (ru.k2 ? ' · ' + t('rune.k.' + ru.k2) + ' +' + runeVal(ru, ru.k2) + '%' : ''); }
let runeDisR = 1, runeDisArm = 0;   // 룬 일괄 분해: 이 등급 이하 (기본 고급)
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
    <div class="twbtns"><button class="big" data-act="rift" ${canRift(S) ? '' : 'disabled'}>${t('rift.btn')}</button><button class="big sweep" data-act="rsweep" ${canRiftSweep(S) ? '' : 'disabled'} title="${t('sw.riftT', { n: r.best || 0 })}">${t('sw.btn', { n: t('rift.lv', { n: r.best || 0 }) })}</button></div>
    ${canRiftSweep(S) && r.keys > 1 ? `<button class="big sm sweep" data-act="rsweepAll">${t('sw.allRift', { n: r.keys, l: r.best })}</button>` : ''}
    <div class="qx">${t('rift.rule')}</div></div>` + tpreCard();
  const sum = runeSum(S), sumTxt = Object.keys(sum).map(k => t('rune.k.' + k) + ' +' + Math.round(sum[k] * 10) / 10 + '%').join(' · ') || t('rune.none');
  // 룬이 +10이면 강화 버튼이 슬롯 강화로 바뀐다. 슬롯 레벨은 룬을 바꿔 껴도 남는다
  const slotTag = i => { const lv = (R.slot || [])[i] || 0; return lv ? `<em class="rsl">${t('rune.slotLv', { n: lv, p: runeSlotPct(lv) })}</em>` : ''; };
  const upBtn = (ru, i) => { const sl = (R.slot || [])[i] || 0; if ((ru.u || 0) < RUNE_UP_MAX) return `<button class="mini" data-act="rup" data-i="${i}" ${R.dust < runeUpCost(ru) ? 'disabled' : ''}>${t('rune.up', { n: fmtN(runeUpCost(ru)) })}</button>`; if (sl >= RUNE_SLOT_MAX) return `<button class="mini" disabled>MAX</button>`; const c = runeSlotCost(sl); return `<button class="mini" data-act="rslot" data-i="${i}" ${R.dust < c ? 'disabled' : ''}>${t('rune.slotUp', { n: fmtN(c) })}</button>`; };
  const slots = R.eq.map((ru, i) => ru
    ? `<div class="rslot"><div class="rn">${runeName(ru)}<i>${t('rift.lv', { n: ru.t })}</i>${slotTag(i)}</div><div class="rb">${upBtn(ru, i)}<button class="mini" data-act="roff" data-i="${i}">${t('rune.off')}</button></div></div>`
    : `<div class="rslot empty">${t('rune.empty')}${slotTag(i)}</div>`).join('');
  const autoHtml = `<label class="trauto"><input type="checkbox" data-act="rauto" ${R.auto !== false ? 'checked' : ''}><span>${t('rune.auto')}</span></label>`;
  const bag = R.bag.map((ru, i) => [ru, i]).sort((a, b) => runeScore(b[0]) - runeScore(a[0]));
  const bagHtml = bag.length ? bag.map(([ru, i]) => `<div class="rslot"><div class="rn">${runeName(ru)}<i>${t('rift.lv', { n: ru.t })}</i></div><div class="rb"><button class="mini" data-act="ron" data-i="${i}">${t('rune.on')}</button><button class="mini" data-act="rdis" data-i="${i}">${t('rune.dis', { n: runeDustOf(ru) })}</button></div></div>`).join('') : `<div class="qx c">${t('rune.bagEmpty')}</div>`;
  const lowN = R.bag.filter(ru => ru.r <= runeDisR).length;
  const disSel = `<select data-act="rdisR">${RUNE_RMULT.map((_, r) => `<option value="${r}" ${r === runeDisR ? 'selected' : ''}>${t('rune.r' + r)}</option>`).join('')}</select>`;
  return head + `<div class="qcard"><div class="qh"><b>${t('rune.eqTitle')}</b><span>${t('rune.dustN', { n: fmtN(R.dust) })}</span></div><div class="qx">${t('rune.keep')}</div><div class="qx hi">${sumTxt}</div>${slots}${autoHtml}</div>
    <div class="qcard"><div class="qh"><b>${t('rune.bag', { n: R.bag.length, m: RUNE_BAG })}</b><span class="rdisr">${disSel}<button class="mini" data-act="rdisLow" ${lowN ? '' : 'disabled'}>${runeDisArm > Date.now() ? t('rune.disAgain') : t('rune.disBelow', { n: lowN })}</button></span></div>${bagHtml}</div>`;
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
    const z2 = z + ZONES, su2 = UNIQUES[sigOf(z2)], sg2 = (S.sigGot || {})[z2] || 0, sp2 = (S.bossPity || {})[z2] || 0, seen2 = Math.max(S.bestFloor || 0, S.maxFloor) >= LOOP_LEN + zoneStart(z);
    return `<div class="bk ${seen ? '' : 'unk'}" title="B${zoneStart(z)}F~ · ${t('sig.tip', { u: su.name, d: su.desc })}
${t('sig.deep', { f: LOOP_LEN + zoneStart(z) })} · ${t('sig.tip', { u: su2.name, d: su2.desc })}"><img class="px" src="assets/mon/m${z}.png" alt=""><div class="bn">${seen ? MONSTERS[z] : '???'}</div>${pips(3, on)}<div class="bc">${fmt(k)}</div><div class="bsig ${sg ? 'got' : ''}">${seen ? su.name : '???'}<i>${sg ? t('sig.got', { n: sg }) : sp + '/' + SIG_PITY}</i></div><div class="bsig deep ${sg2 ? 'got' : ''}">${seen2 ? su2.name : '???'}<i>${sg2 ? t('sig.got', { n: sg2 }) : seen2 ? sp2 + '/' + SIG_PITY : 'B' + (LOOP_LEN + zoneStart(z))}</i></div></div>`;
  }).join('');
  return `<div class="qcard"><div class="qh"><b>${t('q.bookTitle')}</b><span>${t('q.bookHead', { n, m: ZONES * 3, v: n * BEST_PCT })}</span></div><div class="qx">${t('q.bookNote', { a: fmt(BEST_STARS[0]), b: fmt(BEST_STARS[1]), c: fmt(BEST_STARS[2]), v: BEST_PCT })}</div></div>
    <div class="qx">${t('sig.note', { p: SIG_PITY })}</div><div class="qx hi">${t('sig.book', { n: sigTypes(S), m: SIG_TYPES, v: SIG_BOOK * sigTypes(S), p: SIG_BOOK })}</div>
    <div class="book">${cells}</div>
    ${qMdex()}
    <div class="qx c">${t('q.bookComp', { n: owned, m: COMPANIONS.length })}</div>`;
}
// 추가 몬스터 도감 (구역별 2종 + 할로윈 8종)
function qMdex() {
  const d = S.mdex || {}, n = mdexStars(S);
  const cells = MDEX_KEYS.map(key => {
    const k = Math.floor(d[key] || 0), on = BEST_STARS.filter(x => k >= x).length, hw = key.startsWith('hw');
    const img = hw ? 'assets/mon/' + key + '.png' : 'assets/mon/m' + key + '.png', name = hw ? t('mon.hw.' + key.slice(2)) : t('mon.' + parseInt(key, 10) + '.' + key.slice(-1));
    return `<div class="bk ${k > 0 ? '' : 'unk'}${hw ? ' hwk' : ''}"><img class="px" src="${img}" alt=""><div class="bn">${k > 0 ? name : '???'}</div>${pips(3, on)}<div class="bc">${fmt(k)}</div></div>`;
  }).join('');
  return `<div class="qcard"><div class="qh"><b>${t('q.mdexTitle')}</b><span>${t('q.bookHead', { n, m: MDEX_KEYS.length * 3, v: fmtP(n * MDEX_PCT) })}</span></div><div class="qx">${t('q.mdexNote', { v: MDEX_PCT })}</div></div><div class="book">${cells}</div>`;
}
// 자동 환생 조건: stuck = 새 층 없이 N분 · time = 지난 환생 후 N분마다(층 무관) · both = 둘 중 먼저 · floor = 목표 층 도달
function rbOptHtml(au) {
  const rm = ['floor', 'time', 'both'].includes(au.rbMode) ? au.rbMode : 'stuck';
  const num = (act, v, min) => `<input type="number" data-act="${act}" min="${min}" max="9999" value="${v}">`;
  const sel = `<select data-act="rbmode">${['stuck', 'time', 'both', 'floor'].map(m => `<option value="${m}" ${rm === m ? 'selected' : ''}>${t('auto.rb.' + m)}</option>`).join('')}</select>`;
  const stuckIn = num('rbstuck', au.rbStuck || 30, 1), everyIn = num('rbevery', au.rbEvery || 10, 1);
  const a = Math.floor((S.stuckT || 0) / 60), b = Math.floor((S.rbT || 0) / 60);
  if (rm === 'floor') return `<div class="rbopt">${sel}${num('rbfloor', rbFloorTarget(S), 30)}<span>${t('auto.rb.floorU')}</span></div>`;
  if (rm === 'time') return `<div class="rbopt">${sel}${everyIn}<span>${t('auto.rb.timeU')}</span></div><div class="rbnow">${t('auto.rb.nowT', { n: b })}</div>`;
  if (rm === 'both') return `<div class="rbopt">${sel}</div><div class="rbopt rbboth"><span>${t('auto.rb.stuck')}</span>${stuckIn}<span>${t('auto.rb.min')}</span><span>${t('auto.rb.or')}</span>${everyIn}<span>${t('auto.rb.timeU')}</span></div><div class="rbnow">${t('auto.rb.nowB', { a, b })}</div>`;
  return `<div class="rbopt">${sel}${stuckIn}<span>${t('auto.rb.min')}</span></div><div class="rbnow">${t('auto.rb.now', { n: a })}</div>`;
}
// 자동 윤회 조건: honor = 명예 기준 이상 · time = 지난 윤회 후 N분마다
function riOptHtml(au) {
  const rim = au.riMode === 'time' ? 'time' : 'honor';
  const sel = `<select data-act="rimode">${['honor', 'time'].map(m => `<option value="${m}" ${rim === m ? 'selected' : ''}>${t('auto.ri.m.' + m)}</option>`).join('')}</select>`;
  const last = S.lastRi ? t('auto.ri.last', { h: fmt(S.lastRi.honor), f: S.lastRi.floor, k: fmtN(S.lastRi.karma) }) : t('auto.ri.none');
  if (rim === 'time') return `<div class="rbopt">${sel}<input type="number" data-act="rievery" min="1" max="99999" value="${au.riEvery || 30}"><span>${t('auto.rb.timeU')}</span></div><div class="rbnow">${t('auto.ri.nowT', { n: Math.floor((S.riT || 0) / 60) })} · ${last}</div>`;
  const sp = splitAmt(riTarget(S));
  return `<div class="rbopt">${sel}</div><div class="rbopt riopt"><span>${t('ui.honor')}</span><input type="number" inputmode="decimal" min="0" step="any" data-act="rinum" placeholder="${t('auto.ri.ph')}" value="${sp.m}"><select data-act="riunit">${SUF.map((u, i) => `<option value="${i}" ${i === sp.u ? 'selected' : ''}>${unitLabel(i)}</option>`).join('')}</select><span>${t('auto.ri.post')}</span></div><div class="rbnow">${t('auto.ri.now', { h: fmt(S.honor || 0) })} · ${last}${!au.riHonor && S.lastRi ? '<br>' + t('auto.ri.def') : ''}</div>`;
}
function qAuto() {
  const au = S.auto || {};
  return `<div class="qx">${t('q.autoNote')}</div>` + AUTO.map(a => {
    const un = a.need(S), on = !!au[a.id];
    const opt = a.id === 'rebirth' && un ? rbOptHtml(au) : a.id === 'reinc' && un ? riOptHtml(au) : '';
    return `<div class="qrow ${un ? '' : 'lock'}"><div class="qt"><b>${t('auto.' + a.id)}</b><span>${un ? t('auto.d.' + a.id, { w: Math.round(bossRetryWait(S) / 60) }) : t('auto.lock.' + a.cond.k, { n: a.cond.n })}</span>${opt}</div><label class="tgl"><input type="checkbox" data-act="auto" data-id="${a.id}" ${on ? 'checked' : ''} ${un ? '' : 'disabled'}><i></i></label></div>`;
  }).join('');
}
// ---------- 오늘의 던전 ----------
const dSel = { cls: null, bless: 'power' };
const STORE_URL = 'https://chromewebstore.google.com/detail/deskgeon-idle-dungeon-rpg/adaoggopidkbankjinlalfnjlgncanpk';
const mmss = s => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
function dailyShareText() {
  const o = dl2State(S), b = o.best; if (!b) return '';
  return `Deskgeon Daily #${o.day.replace(/-/g, '')} | ${CLASSES[b.cls].name} | B${b.floor}F (${mmss(b.at)}) | ${t('dl.m.' + dailyMod(o.day).id)} | ${(b.picks || []).map(id => t('dl2.c.' + id)).join(' > ')}\n${t('dl.cta')} ${STORE_URL}`;
}
let dlCache = { key: '', r: null };
function dlCur() { const o = dl2State(S); if (!o.cur) return null; const key = o.day + '|' + o.cur.cls + '|' + o.cur.picks.join(','); if (dlCache.key !== key) dlCache = { key, r: dl2Cur(S) }; return dlCache.r; }
const dlCardTx = id => `<b>${t('dl2.c.' + id)}</b><span>${t('dl2.c.' + id + '.d')}</span>`;
function qDaily() {
  const o = dl2State(S), mod = dailyMod(o.day); dSel.cls ||= S.cls || 'war'; const cur = dlCur();
  const logHtml = r => r && r.log && r.log.length ? `<div class="dllog">${r.log.filter(x => x.pick).map(x => `<span>B${x.f} · ${mmss(x.T)} · ${t('dl2.c.' + x.pick)}</span>`).join('')}</div>` : '';
  const chain = p => (p || []).map(id => t('dl2.c.' + id)).join(' → ');
  let run;
  if (cur && cur.pause) run = `<div class="qcard"><div class="qh"><b>${t('dl2.running', { c: CLASSES[o.cur.cls].name })}</b><span>${o.cur.picks.length ? 'B' + cur.floor + ' · ' + mmss(cur.T) : t('dl2.startPick')}</span></div>
      <div class="rbstats"><div><span>Lv</span><b>${cur.lv}</b></div><div><span>DPS</span><b>${fmt(cur.dps)}</b></div><div><span>${t('stat.hp')}</span><b>${fmt(cur.hp)}</b></div></div>
      ${o.cur.picks.length ? `<div class="qx">${t('dl2.picked')}: ${chain(o.cur.picks)}</div>` : ''}
      <div class="qx"><b>${t('dl2.pickNow')}</b></div>
      <div class="dlcards">${cur.offer.map(id => `<button class="mini dlcard" data-act="dpick" data-v="${id}">${dlCardTx(id)}</button>`).join('')}</div></div>`;
  else run = `<div class="dsel"><span>${t('dl.pickCls')}</span>${CLASS_IDS.map(c => `<button class="mini ${dSel.cls === c ? 'on' : ''}" data-act="dcls" data-v="${c}">${CLASSES[c].name}</button>`).join('')}</div>
      <button class="big" data-act="dstart" ${o.tries > 0 && S.cls ? '' : 'disabled'}>${t('dl.run', { n: o.tries, m: DAILY_TRIES })}</button>`;
  const last = o.last ? `<div class="qcard"><div class="qh"><b>${t('dl.last')}</b><span>+${fmtN(o.last.tok)} ${t('dl2.tok')}</span></div><div class="rbstats"><div><span>${t('dl.floor')}</span><b>B${o.last.floor}F</b></div><div><span>${t('dl.time')}</span><b>${mmss(o.last.at)}</b></div><div><span>${t('dl.cls')}</span><b>${CLASSES[o.last.cls].name}</b></div></div><div class="qx">${chain(o.last.picks)}</div>${(o.last.wk || []).length ? `<div class="qx">${t('dl2.wkGot')}</div>` : ''}</div>` : '';
  const best = `<div class="qcard"><div class="qh"><b>${t('dl.best')}</b>${o.best ? `<button class="mini" data-act="dshare">${t('dl.share')}</button>` : ''}</div>${o.best ? `<div class="rbstats"><div><span>${t('dl.floor')}</span><b>B${o.best.floor}F</b></div><div><span>${t('dl.time')}</span><b>${mmss(o.best.at)}</b></div><div><span>${t('dl.cls')}</span><b>${CLASSES[o.best.cls].name}</b></div></div><div class="qx">${chain(o.best.picks)}</div>` : `<div class="qx">${t('dl.none')}</div>`}</div>`;
  const sum = dlWeekSum(S), top = DL_WEEK[DL_WEEK.length - 1].f;
  const week = `<div class="qcard"><div class="qh"><b>${t('dl2.week')}</b><span>${t('dl2.weekSum', { n: fmtN(sum) })}</span></div><div class="qbar dlwk"><i style="width:${Math.min(100, sum / top * 100)}%"></i>${DL_WEEK.map(w => `<em style="left:${w.f / top * 100}%"></em>`).join('')}</div>
    <div class="dlwkr">${DL_WEEK.map((w, k) => `<span class="${o.wk.got > k ? 'ok' : ''}">${t('dl2.weekTier', { f: w.f, r: w.r })}</span>`).join('')}</div><div class="qx">${t('dl2.weekNote')}</div></div>`;
  const shop = `<div class="qcard"><div class="qh"><b>${t('dl2.shop')}</b><span>${t('dl2.tok')} <b>${fmtN(o.tok)}</b></span></div>${DL_SHOP.map(it => { const own = it.title && titleOwned(S, it.id); const nm = it.title ? t('dl2.s.title', { n: t('ttl.n.' + it.id), f: ttlFx(it.id) }) : t('dl2.s.' + it.id, { n: fmtN(it.n) });
      return `<div class="qrow ${own ? 'claimed' : ''}"><div class="qt"><b>${nm}</b></div><button class="mini" data-act="dbuy" data-v="${it.id}" ${!own && o.tok >= it.c ? '' : 'disabled'}>${own ? t('q.claimed') : t('dl2.cost', { n: fmtN(it.c) })}</button></div>`; }).join('')}</div>`;
  return `<div class="qcard ctr"><div class="qh c"><b>${t('dl.title')}</b><span>#${o.day.replace(/-/g, '')}</span></div>
    <div class="qx">${t('dl2.desc', { n: DL_EVERY })}</div>
    <div class="dmod"><b>${t('dl.m.' + mod.id)}</b><span>${t('dl.m.' + mod.id + '.d')}</span></div>${cur && cur.pause ? '' : run}</div>${cur && cur.pause ? run : ''}${last}${best}${week}${shop}`;
}
// ---------- 초보자 가이드 ----------
function goTo(where) { if (where === 'settings') { $('#setBtn').click(); return; } const b = document.querySelector(`.tabs button[data-go="${where}"]`); if (b) b.click(); }

// ---------- 던전 아래 칸 (5.13.2): 로그 자리에 마을·탑·균열·아레나를 띄운다. 전투는 위에서 계속 흐른다 ----------
// 창(.modal)이나 모험 탭 본문(#qBody)을 이 칸으로 옮겨 와서 그대로 쓴다 (버튼·갱신 코드가 바뀌지 않게). 닫으면 원래 자리로 돌려 놓는다
const DOCK = [];
let dockCur = 'log', dockBig = false;
const dockHome = new Map(), dockObs = new WeakSet();
function dockAdd(d) { const i = DOCK.findIndex(x => x.id === d.id); if (i >= 0) DOCK[i] = d; else DOCK.push(d); renderDockBar(); }
function dockMount(el) {
  const body = $('#dockBody'); if (!el || !body) return; if (el.parentElement === body) return;
  dockHome.set(el, [el.parentElement, el.nextSibling]); body.appendChild(el); el.classList.add('docked');
  if (!dockObs.has(el) && window.MutationObserver) { dockObs.add(el); new MutationObserver(() => { const d = DOCK.find(x => x.id === dockCur); if (d && d.el && d.el() === el && el.classList.contains('hidden')) dockTo('log'); }).observe(el, { attributes: true, attributeFilter: ['class'] }); }
}
function dockUnmount(el) { const h = el && dockHome.get(el); if (!h) return; el.classList.remove('docked'); h[0].insertBefore(el, h[1] && h[1].parentElement === h[0] ? h[1] : null); dockHome.delete(el); }
function dockTo(id) {
  const d = DOCK.find(x => x.id === id && (!x.show || x.show())) || DOCK[0];
  if (dockCur !== d.id) { const o = DOCK.find(x => x.id === dockCur); dockCur = d.id; try { o && o.close && o.close(); } catch (e) {} }
  $('#log').classList.toggle('hidden', d.id !== 'log');
  if (d.id === 'log') dockBig = false;
  dockFocus();
  try { d.open && d.open(); } catch (e) {}
  renderDockBar(); $('#dockBody').scrollTop = 0;
}
function dockFocus() { const pg = $('.page[data-tab="dungeon"]'); if (pg) pg.classList.toggle('dkfocus', dockCur !== 'log' && !dockBig); }
function openDock(id) { if ($('.page[data-tab="dungeon"]').classList.contains('hidden')) goTo('dungeon'); dockTo(id); }
function renderDockBar() {
  const bar = $('#dockBar'); if (!bar || !S) return; const L = DOCK.filter(x => !x.show || x.show());
  const sig = L.map(x => x.id + (x.id === dockCur ? '*' : '') + x.label()).join('|') + (dockBig ? 'B' : ''); if (bar.dataset.sig === sig) return; bar.dataset.sig = sig;
  bar.innerHTML = L.map(x => `<button class="${x.id === dockCur ? 'on' : ''}" data-dock="${x.id}">${x.label()}<i class="dot hidden" data-dkdot="${x.id}"></i></button>`).join('')
    + (dockCur !== 'log' ? `<button class="dkbig" data-dockbig="1" title="${t(dockBig ? 'dock.small' : 'dock.big')}"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${dockBig ? '<path d="M4 10l4-4 4 4"/>' : '<path d="M4 6l4 4 4-4"/>'}</svg></button>` : '');
  syncTabDots();
}
window.__dgDock = { add: dockAdd, go: id => openDock(id), to: dockTo, mount: dockMount, unmount: dockUnmount, cur: () => dockCur };

function renderGuide() {
  const box = $('#guideBox'); if (!box) return;
  const g = guideStep(S), hide = !S.cls || !g || (S.guide && S.guide.hide);
  box.classList.toggle('hidden', !!hide); if (hide) { box.dataset.sig = ''; return; }
  const i = GUIDE.indexOf(g), ok = g.ok(S), early = !!(S.guide && S.guide.rbNow) && g.id === 'rebirth', sig = g.id + ok + early + getLang();
  if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  box.innerHTML = `<div class="gdt" title="${t('gd.' + g.id + '.d')}"><i>${t('gd.head', { i: i + 1, n: GUIDE.length })}</i><b>${t('gd.' + g.id)}</b><span>${t('gd.' + g.id + (early ? '.stall' : '') + '.d')}</span></div><div class="gdb">${ok ? `<button class="mini hot" data-g="claim">${t('gd.claim', { n: g.r })}${g.gift ? ' · ' + rewardText(g.gift) : ''}</button>` : `<button class="mini" data-g="go">${t('gd.go')}</button>`}<button class="x" data-g="hide" title="${t('gd.hide')}">×</button></div>`;
}
function bindGuide() {
  $('#guideBox').addEventListener('click', e => { const b = e.target.closest('button[data-g]'); if (!b) return; const g = guideStep(S); if (!g) return;
    if (b.dataset.g === 'go') goTo(g.go);
    else if (b.dataset.g === 'claim') { const r = guideClaim(S); if (r) { addLog('<b>' + t('gd.done', { s: t('gd.' + g.id) }) + '</b> · ' + rewardText({ stones: r, ...(g.gift || {}) })); flyTo('assets/ui/stone.png', 90, 40, $('#stoneBox'), 3); if (!guideStep(S)) toast(t('gd.all')); save(S, 'force'); if (g.gift && (g.gift.comp || g.gift.pick)) setTimeout(afterGifts, 300); } }
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
// 자동 환생·윤회 옵션 (환경설정·모험 탭 공통)
// 명예 기준: 숫자 + 단위 선택 (게임 숫자 표기 K·M·B…와 같은 단위)
const SUF = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
function unitLabel(i) { if (!i) return t('auto.ri.u0'); const n = t('auto.ri.units').split(','); return SUF[i] + (n[i - 1] ? ' · ' + n[i - 1] : ''); }
function splitAmt(v) { if (!(v > 0)) return { m: '', u: 0 }; const u = Math.max(0, Math.min(SUF.length - 1, Math.floor(Math.log10(v) / 3))); return { m: Math.round(v / Math.pow(1000, u) * 100) / 100, u }; }
function autoOpt(el, act) {
  if (act === 'rbmode') { S.auto.rbMode = el.value; if (el.value === 'floor' && !S.auto.rbFloor) S.auto.rbFloor = rbFloorTarget(S); }
  else if (act === 'rbstuck' || act === 'rbevery' || act === 'rbfloor' || act === 'rievery') { const v = Math.max(1, Math.round(+el.value || 0)); if (act === 'rbfloor') S.auto.rbFloor = Math.max(30, v); else if (act === 'rbevery') S.auto.rbEvery = v; else if (act === 'rievery') S.auto.riEvery = v; else S.auto.rbStuck = v; }
  else if (act === 'rimode') S.auto.riMode = el.value === 'time' ? 'time' : 'honor';
  else if (act === 'rinum' || act === 'riunit') { const box = el.closest('.riopt'); const m = +box.querySelector('[data-act="rinum"]').value, u = +box.querySelector('[data-act="riunit"]').value || 0; S.auto.riHonor = m > 0 ? m * Math.pow(1000, u) : 0; }
}
// ---------- 자동 진행 (환경설정) ----------
function refreshAutoBox() { const b = $('#autoBox'); if (b) morph(b, qAuto() + `<div class="qrow"><div class="qt"><b>${t('conv.title')}</b><span>${t('conv.desc')}</span></div><label class="tgl"><input type="checkbox" data-act="conv" ${S.goldConv !== false ? 'checked' : ''}><i></i></label></div>`); }
function bindAutoBox() {
  $('#autoBox').addEventListener('change', e => {
    const el = e.target, act = el.dataset.act; S.auto ||= {};
    if (act === 'auto') S.auto[el.dataset.id] = el.checked;
    else if (act === 'conv') S.goldConv = el.checked;
    else autoOpt(el, act);
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
  morph(body, qTab === 'mission' ? qMission() : qTab === 'tower' ? qTower() : qTab === 'rift' ? qRift() : qTab === 'daily' ? qDaily() : qTab === 'ach' ? qAch() : qTab === 'title' ? qTitle() : qTab === 'book' ? qBook() : qAuto());
  attSnap(body);
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
  holdDelegate(qb, 'button[data-act="rup"], button[data-act="rlv"], button[data-act="rslot"]', b => {
    if (b.dataset.act === 'rup') { if (!runeUpgrade(S, +b.dataset.i)) return false; }
    else if (b.dataset.act === 'rslot') { if (!runeSlotUp(S, +b.dataset.i)) return false; }
    else { const r = riftState(S), v0 = r.lvl || 1; r.lvl = Math.max(1, Math.min((r.best || 0) + 1, v0 + (+b.dataset.d))); if (r.lvl === v0) return false; }
    qRedraw(); return true;
  }, n => { buildQuest.press = false; if (n) { buildQuest(); render(); } });
  $('#qBody').addEventListener('change', e => { const el = e.target; if (!el.dataset || el.dataset.act !== 'rauto') return; const R = runeState(S); R.auto = el.checked; if (R.auto) { const r = runeAutoSpend(S); if (r.n) addLog(t('rune.autoLog', { n: r.n, d: fmtN(r.spent) })); } st = stats(S); save(S); buildQuest(); render(); });
  $('#qBody').addEventListener('click', e => {
    const b = e.target.closest('button[data-act]'); if (!b || b.disabled) return;
    const act = b.dataset.act;
    if (act === 'attend') { const r = attend(S); if (r) { addLog(t('q.attendLog', { n: r.day }) + ' · ' + rewardText(r.r)); flyTo('assets/ui/stone.png', 90, 40, $('#stoneBox'), 3); save(S, 'force'); setTimeout(afterGifts, 300); } }
    else if (act === 'boost') { if (useBoost(S)) addLog('<b>' + t('q.boostLog', { m: BOOST_MIN, x: BOOST_X }) + '</b>'); }
    else if (act === 'claim') { const r = claimMission(S, b.dataset.k, b.dataset.id); if (r) addLog(t('q.claimLog') + ' · ' + rewardText(r)); }
    else if (act === 'ach') { const r = claimAch(S, b.dataset.id); if (r) addLog(t('q.achLog', { a: t('ach.' + b.dataset.id) }) + ' · ' + rewardText({ stones: r })); }
    else if (act === 'tpSave') { if (!inTower() && tpreSave(S)) { save(S, 'force'); addLog('<b>' + t('tp.head') + '</b> · ' + t('tp.saved')); } }
    else if (act === 'tpOn') { if (tpreSet(S, !tpreOn(S))) { save(S, 'force'); addLog('<b>' + t('tp.head') + '</b> · ' + t(tpreOn(S) ? 'tp.on' : 'tp.off')); } }
    else if (act === 'tower') { const id = b.dataset.id || 'inf'; if (towerStart(S, id)) { addLog('<b>' + t('tw.start', { t: towerName(id) }) + '</b>'); tpreUi(true); document.querySelector('.tabs button[data-go="dungeon"]').click(); } }
    else if (act === 'tsweep' || act === 'tsweepAll') { const r = act === 'tsweep' ? towerSweep(S, b.dataset.id) : towerSweepAll(S); if (r) { const txt = rewardText(r.gain) + (r.myth ? ' · <span style="color:' + CG_COL[5] + '">' + t('cg.mythN', { n: r.myth }) + '</span>' : ''); addLog('<b>' + (act === 'tsweep' ? t('sw.towerLog', { t: towerName(r.id, r.floor), n: r.floor }) : t('sw.allLog', { n: r.n })) + '</b> · ' + txt); toast(rewardText(r.gain) + (r.myth ? ' · ' + t('cg.mythN', { n: r.myth }) : '') || t('sw.done'));   /* 5.14.16 알림은 글자만 (신화 색 태그가 그대로 보이던 문제) */ save(S); } }
    else if (act === 'rsweep' || act === 'rsweepAll') { const r = act === 'rsweep' ? riftSweep(S) : riftSweepAll(S); if (r) { const n = r.n || 1, cnt = [0, 0, 0, 0, 0]; for (const ru of r.runes) cnt[ru.r]++; const rt = cnt.map((c, i) => c ? '<span style="color:' + RUNE_COL[i] + '">' + t('rune.r' + i) + ' ' + c + '</span>' : '').filter(Boolean).join(' · '); addLog('<b>' + t('sw.riftLog', { l: r.L, n }) + '</b> · ' + t('sw.runes', { n: r.runes.length }) + (rt ? ' (' + rt + ')' : '') + ' · ' + t('sw.dust', { n: fmtN(r.dust) })); toast(t('sw.runes', { n: r.runes.length }) + ' · ' + t('sw.dust', { n: fmtN(r.dust) })); st = stats(S); save(S); } }
    else if (act === 'rift') { const L = riftState(S).lvl; if (riftStart(S, L)) { addLog('<b>' + t('rift.startLog', { n: S.boss.L }) + '</b>'); tpreUi(true); document.querySelector('.tabs button[data-go="dungeon"]').click(); } }
    else if (act === 'ttl') { const id = b.dataset.v; titleEquip(S, titleState(S).eq === id ? null : id); save(S); }
    else if (act === 'dcls') dSel.cls = b.dataset.v;
    else if (act === 'dstart') { const r = dl2Start(S, dSel.cls); if (r) addLog('<b>' + t('dl2.startLog', { c: CLASSES[dSel.cls].name }) + '</b>'); save(S); }
    else if (act === 'dpick') { const r = dl2Pick(S, b.dataset.v); if (r && r.done) { addLog('<b>' + t('dl.log', { f: r.floor, c: CLASSES[r.cls].name }) + '</b> · +' + fmtN(r.tok) + ' ' + t('dl2.tok')); banner(t('dl.result', { f: r.floor }), 'floor', 1500); toast('+' + fmtN(r.tok) + ' ' + t('dl2.tok')); } save(S); }
    else if (act === 'dbuy') { if (dl2Buy(S, b.dataset.v)) { toast(t('dl2.bought')); st = stats(S); save(S); } }
    else if (act === 'dshare') { const txt = dailyShareText(); (async () => { try { await navigator.clipboard.writeText(txt); toast(t('dl.copied')); } catch (e) { toast(t('dl.copyFail'), '#ffc35c'); } })(); }
    else if (act === 'rlv') { const r = riftState(S); r.lvl = Math.max(1, Math.min((r.best || 0) + 1, (r.lvl || 1) + (+b.dataset.d))); }
    else if (act === 'ron') runeEquip(S, +b.dataset.i);
    else if (act === 'roff') { if (!runeUnequip(S, +b.dataset.i)) toast(t('rune.bagFull')); }
    else if (act === 'rup') runeUpgrade(S, +b.dataset.i);
    else if (act === 'rslot') runeSlotUp(S, +b.dataset.i);
    else if (act === 'rdis') { const R = runeState(S), ru = R.bag[+b.dataset.i]; if (ru) runeDismantle(S, x => x === ru); }
    else if (act === 'rdisLow') {
      if (runeDisR >= 3 && Date.now() > runeDisArm) { runeDisArm = Date.now() + 3000; setTimeout(() => { if (Date.now() >= runeDisArm) buildQuest(); }, 3050); buildQuest(); return; }   // 영웅 이상은 한 번 더
      runeDisArm = 0; const r = runeDismantle(S, x => x.r <= runeDisR); if (r.n) addLog(t('rune.disLog', { n: r.n, d: r.dust }));
    }
    save(S); st = stats(S); buildQuest(); render();
  });
  $('#qBody').addEventListener('change', e => {
    const el = e.target, act = el.dataset.act; S.auto ||= {};
    if (act === 'auto') S.auto[el.dataset.id] = el.checked;
    else if (act === 'rdisR') { runeDisR = +el.value || 0; runeDisArm = 0; }
    else autoOpt(el, act);
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
    const ed = max ? t('ui.enchXCard', { p: x }) : '+' + Math.round(ENCH_STEP * lv * 100) + '% → +' + Math.round(ENCH_STEP * (lv + 1) * 100) + '%';
    d.querySelector('.ed').textContent = ed; d.title = max ? '' : t('ui.enchEff', { p: Math.round(ENCH_STEP * lv * 100) }) + ' → +' + Math.round(ENCH_STEP * (lv + 1) * 100) + '%';
    d.querySelector('.lvl').textContent = max ? t('ui.enchXSum', { n: x }) : '+' + lv + '/' + ENCH_MAX;
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
  { const el = $('#reincLast'); if (el) el.textContent = S.lastRi ? t('ui.reincLast', { h: fmt(S.lastRi.honor), f: S.lastRi.floor, k: fmtN(S.lastRi.karma) }) : ''; }
  $('#reincHint').textContent = k > 0 ? t('ui.reincGain', { k: fmtN(k), h: fmtP(KARMA_HONOR * k * 100), p: fmtP(KARMA_POW * k * 100) }) + t('trace.gain', { n: fmtN(traceGain(S)) }) : t('ui.reincNeed', { n: REINC_FLOOR, m: S.cycleBest || 0 });
  refreshTraces(); refreshBless();
  { const cv = k > 0 ? convPreview(S) : 0; $('#reincConv').textContent = S.goldConv === false ? t('conv.off') : cv ? t('conv.pre', { n: fmtN(cv) }) : ''; }
  if (!bindReinc._armed) $('#reincBtn').disabled = k <= 0;
}
// ---------- 윤회의 흔적 ----------
function traceFx(id, lv) {
  if (id === 'honorG') return (1.10 + TRACE_HONOR * lv).toFixed(3);
  if (id === 'karmaX') return Math.round(TRACE_KARMA * lv * 100);
  if (id === 'start') return Math.round(TRACE_START * lv * 100);
  if (id === 'offH') return OFF_CAP0 + TRACE_OFFH * lv;
  if (id === 'expT') return Math.round(TRACE_EXP * lv * 100);
  if (id === 'power') return Math.round(TRACE_POW * lv * 100);
  return 2 * lv;
}
function refreshTraces() {
  const box = $('#traceBox'); if (!box) return;
  const tr = traceState(S);
  const rows = TRACES.map(T => {
    const lv = traceLv(S, T.id), max = lv >= T.max, c = max ? 0 : traceCost(T.id, lv);
    return `<div class="trrow"><div class="trt"><b>${t('trace.n.' + T.id)} <i>Lv.${lv}/${T.max}</i></b><span>${t('trace.d.' + T.id, { a: traceFx(T.id, lv), b: traceFx(T.id, Math.min(T.max, lv + 1)), f: TRACE_DEEP_FLOOR })}</span></div>`
      + `<button class="mini" data-tr="${T.id}" ${max || (tr.pts || 0) < c ? 'disabled' : ''}>${max ? 'MAX' : t('trace.cost', { n: fmtN(c) })}</button></div>`;
  }).join('');
  const html = `<div class="trh"><b>${t('trace.title')}</b><span>${t('trace.pts', { n: fmtN(tr.pts || 0) })}</span></div><div class="relnote">${t('trace.note')}</div>${rows}`
    + `<label class="trauto"><input type="checkbox" data-tra="1" ${tr.auto !== false ? 'checked' : ''}><span>${t('trace.auto')}</span></label>`;
  if (box.dataset.sig !== html) { box.innerHTML = html; box.dataset.sig = html; }
}
// ---------- 윤회 축복 ----------
const BLESS_FX_ORDER = ['honorX', 'karmaX', 'traceX', 'atkX', 'hpX', 'goldX', 'xpX', 'killsX', 'bossX', 'monHpX'];
function blessDesc(id) { const B = BLESS_BY_ID[id]; return B ? BLESS_FX_ORDER.filter(k => B.fx[k] != null).map(k => t('bless.fx.' + k) + ' ×' + B.fx[k]).join(' · ') : ''; }
function refreshBless() {
  const box = $('#blessBox'); if (!box) return;
  const b = blessState(S), n = blessSeenN(S), cur = b.cur && BLESS_BY_ID[b.cur];
  const curHtml = cur ? `<div class="trrow"><div class="trt"><b>${t('bless.cur')} ${t('bless.n.' + cur.id)}${cur.curse ? ' <i class="curse">' + t('bless.curse') + '</i>' : ''}</b><span>${blessDesc(cur.id)}</span></div></div>` : `<div class="relnote">${t('bless.none')}</div>`;
  const offer = (b.offer || []).map(id => `<div class="trrow"><div class="trt"><b>${t('bless.n.' + id)}${BLESS_BY_ID[id].curse ? ' <i class="curse">' + t('bless.curse') + '</i>' : ''}</b><span>${blessDesc(id)}</span></div><button class="mini" data-bl="${id}">${t('bless.pick')}</button></div>`).join('');
  const html = `<div class="trh"><b>${t('bless.title')}</b><span>${t('bless.book', { n, m: BLESS.length, v: n * BLESS_BOOK })}</span></div><div class="relnote">${t('bless.note')}</div>`
    + (offer ? `<div class="relnote hi">${t('bless.choose')}</div>${offer}` : curHtml)
    + `<label class="trauto"><input type="checkbox" data-bla="1" ${b.auto !== false ? 'checked' : ''}><span>${t('bless.auto')}</span></label>`;
  if (box.dataset.sig !== html) { box.innerHTML = html; box.dataset.sig = html; }
}
function bindBless() {
  const box = $('#blessBox'); if (!box) return;
  box.addEventListener('click', e => { const b = e.target.closest('button[data-bl]'); if (!b) return; if (chooseBless(S, b.dataset.bl)) { st = stats(S); save(S, 'force'); refreshBless(); render(); } });
  box.addEventListener('change', e => { if (!e.target.dataset.bla) return; const b = blessState(S); b.auto = e.target.checked; if (b.auto && b.offer.length) { const id = ['honor', 'karma', 'echo', 'might', 'swift', 'slayer', 'vigor', 'gold', 'wisdom'].find(x => b.offer.includes(x)) || b.offer[0]; chooseBless(S, id); st = stats(S); } save(S, 'force'); refreshBless(); });
}
function bindTraces() {
  $('#traceBox').addEventListener('click', e => {
    const b = e.target.closest('button[data-tr]'); if (!b || b.disabled) return;
    if (buyTrace(S, b.dataset.tr)) { st = stats(S); save(S); refreshTraces(); }
  });
  $('#traceBox').addEventListener('change', e => {
    if (!e.target.dataset.tra) return;
    traceState(S).auto = e.target.checked; if (e.target.checked) autoTraces(S);
    st = stats(S); save(S); refreshTraces();
  });
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
function relicAffordable() { return RELICS.some(r => !(r.max && relicLv(S, r.id) >= r.max) && D(S.honorPts).gte(relicCost(r, relicLv(S, r.id)))); }
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
  pts.textContent = t('ui.relicPts', { n: fmt(D(S.honorPts)) });
  for (const d of document.querySelectorAll('.rel')) {
    const r = RELICS.find(x => x.id === d.dataset.rid); if (!r) continue;
    const lv = relicLv(S, r.id), max = r.max && lv >= r.max, c = relicCost(r, lv);
    d.classList.toggle('no', max || D(S.honorPts).lt(c));
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
// ================= 위계·신격화 (5.13) =================
const ROMAN = ['', 'Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ', 'Ⅶ', 'Ⅷ', 'Ⅸ', 'Ⅹ'];
function divRank(tier) { return tier <= 0 ? '' : tier < 5 ? t('div.rank' + tier) : t('div.rank5') + ' ' + (ROMAN[tier - 4] || (tier - 4)); }
function divTitle(cls, tier) { if (!tier) return t('cls.' + cls); return tier < 5 ? t('div.title', { g: t('div.god.' + cls), r: divRank(tier) }) : divRank(tier); }
function domText(cls, d, tier) { const D = DIV_DOMS[cls][d]; return t('div.dom.' + cls + '.' + d) + ' · ' + t('div.fx.' + D.k, { x: Math.round((1 + D.v * Math.max(1, tier)) * 10) / 10 }); }
function renderDivBox() {
  let b = document.getElementById('divbox'); if (!b) { b = document.createElement('div'); b.id = 'divbox'; $('#clsbox').after(b); }
  const tier = divTier(S), best = Math.max(S.bestFloor || 0, S.maxFloor || 0), cls = S.cls || 'war';
  b.classList.toggle('hidden', skTab !== 'd');
  if (!tier) { const nx = DIV_STEP; b.innerHTML = `<div class="dvh"><b>${t('div.head')}</b><span>${fmtN(best)} / ${fmtN(nx)}</span></div><div class="qbar"><i style="width:${Math.min(100, best / nx * 100)}%"></i></div><div class="qx">${t('div.next', { f: fmtN(nx), r: divRank(1) })}</div>`; return; }
  const dm = divDom(S);
  b.innerHTML = `<div class="dvh"><b class="dvt">${divTitle(cls, tier)}</b><span>${t('div.tier', { n: tier })}${DIV_ALL > 1 ? ' · ' + t('div.allX', { x: fmtN(Math.pow(DIV_ALL, tier)) }) : ''}</span></div>
    <div class="qx">${t('div.pick')}</div>
    <div class="dvdom">${['a', 'b'].map(d => `<button class="mini ${dm === d ? 'on' : ''}" data-dom="${d}">${domText(cls, d, tier)}</button>`).join('')}</div>
    <div class="qx">${t('div.next', { f: fmtN((tier + 1) * DIV_STEP), r: divRank(tier + 1) })}</div>`;
  b.querySelectorAll('[data-dom]').forEach(x => x.onclick = () => { if (divSetDom(S, x.dataset.dom)) { divSeen(S); st = stats(S); save(S, 'force'); renderDivBox(); render(); } });
  b.classList.toggle('hidden', skTab !== 'd');
}
function maybeAscend() {
  const n = divNew(S); if (!n || !S.cls || document.querySelector('.modal:not(.hidden)')) return;
  const cls = S.cls, dm = divDom(S);
  $('#divWin').innerHTML = `<div class="dvasc"><i>${t('div.ascTitle')}</i><b>${divTitle(cls, n)}</b><span>${t('div.tier', { n })}${DIV_ALL > 1 ? ' · ' + t('div.allX', { x: fmtN(Math.pow(DIV_ALL, n)) }) : ''}</span></div>
    <div class="qx">${t('div.ascNote')}</div>
    <div class="dvdom col">${['a', 'b'].map(d => `<button class="mini ${dm === d ? 'on' : 'hot'}" data-dom="${d}">${domText(cls, d, n)}</button>`).join('')}</div>`;
  $('#divWin').querySelectorAll('[data-dom]').forEach(x => x.onclick = () => { divSetDom(S, x.dataset.dom); divSeen(S); st = stats(S); save(S, 'force'); $('#divModal').classList.add('hidden'); addLog('<b>' + t('div.log', { title: divTitle(cls, n) }) + '</b>'); flash('#ffd98a', .8, 1); dscT = -1; skTab = 'd'; buildSkills(); render(); });
  $('#divModal').classList.remove('hidden');
}
// ================= 받은 동료·선택권 (5.12.6) =================
function afterGifts() {
  const gl = S._gifts || []; S._gifts = null;
  if (gl.length) { COMP_VER_BUMP(); showGacha(gl); }
  else if (pickCount(S)) openPick();
  renderPickBtn();
}
function COMP_VER_BUMP() { st = stats(S); buildComps(); }
function renderPickBtn() { const b = $('#pickBtn'); if (!b) return; const n = pickCount(S); b.classList.toggle('hidden', !n); if (n) b.textContent = t('pick.btn', { n, r: C_RARITY[Math.max(...S.picks)].name }); }
function openPick() { if (!pickCount(S)) return; renderPick(); $('#pickModal').classList.remove('hidden'); }
function renderPick() {
  const r = Math.max(...S.picks), L = COMPANIONS.filter(c => c.r === r), rr = C_RARITY[r];
  $('#pickWin').innerHTML = `<div class="evh"><b>${t('pick.title', { r: rr.name })}</b><span>${t('pick.have', { n: pickCount(S, r) })}</span></div><div class="qx">${t('pick.desc')}</div>
    <div class="milelist">${L.map(c => { const o = S.comp[c.id]; return `<div class="mrow" style="border-color:${rr.color}"><img class="px" src="${compSrc(c.id)}"><div class="t"><b style="color:${rr.color}">${rr.name} ${c.name}</b><span>${o ? t('ui.awaken', { a: o.aw, b: AWAKEN_MAX, n: o.n }) : t('mile.notOwned')}</span></div><button class="mini hot" data-pk="${c.id}">${t('pick.go')}</button></div>`; }).join('')}</div>
    <button class="mini wide" data-pk="close">${t('pick.later')}</button>`;
}
// ================= 출석 창 (5.12.4): 그날 처음 들어오면 한 번 띄운다 =================
let attShownDay = '';
function attendDayKey() { const d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
function maybeShowAttend(tries = 0) {
  if (!S || !S.cls || !canAttend(S) || attShownDay === attendDayKey()) return;
  // 다른 창(오프라인 보고서·직업 선택 등)이 떠 있으면 닫힐 때까지 조금 기다린다
  if (document.querySelector('.modal:not(.hidden)')) { if (tries < 40) setTimeout(() => maybeShowAttend(tries + 1), 1500); return; }
  attShownDay = attendDayKey();
  renderAttModal(); $('#attModal').classList.remove('hidden');
}
function renderAttModal() { $('#attWin').innerHTML = attendCard(true) + `<button class="mini wide" data-att="close">${t('ui.close')}</button>`; attSnap($('#attWin')); }
// 출석 칸 슬라이드: 새로 그려진 줄만 받을 차례(또는 마지막으로 받은 날) 칸으로 한 번 옮긴다 (live 요소에 속성을 달면 morph 가 매번 교체하므로 WeakSet)
const attInit = new WeakSet();
function attSnap(root) {
  for (const row of root.querySelectorAll('.attrow')) {
    if (attInit.has(row)) continue; attInit.add(row);
    const cards = row.children, nx = ((S.quest.att || {}).n || 0) % 7, i = Math.max(0, Math.min(cards.length - 1, (canAttend(S) ? nx : nx - 1)));
    requestAnimationFrame(() => { const c = cards[Math.max(0, i - 1)]; if (c) row.scrollLeft = c.offsetLeft - row.offsetLeft; });
  }
}
// PC: 마우스 휠·끌기로도 넘긴다 (터치는 기본 가로 스크롤)
document.addEventListener('wheel', e => { const row = e.target.closest && e.target.closest('.attrow'); if (!row || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; row.scrollLeft += e.deltaY; e.preventDefault(); }, { passive: false });
{ let drag = null;
  document.addEventListener('pointerdown', e => { const row = e.target.closest && e.target.closest('.attrow'); if (!row || e.pointerType === 'touch') return; drag = { row, x: e.clientX, l: row.scrollLeft, moved: false }; row.classList.add('drag'); });
  document.addEventListener('pointermove', e => { if (!drag) return; const dx = e.clientX - drag.x; if (Math.abs(dx) > 3) drag.moved = true; drag.row.scrollLeft = drag.l - dx; });
  document.addEventListener('pointerup', () => { if (!drag) return; drag.row.classList.remove('drag'); drag = null; }); }
// ================= 우편함 (5.12.4) =================
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function mailTitle(m) { return m.tk ? t(m.tk) : (m.title || t('mail.title')); }
function renderMailDot() { const n = mailCount(S); $('#mailBtn').classList.toggle('hidden', !n && !((S.mail || {}).got || []).length); $('#mailDot').classList.toggle('hidden', !n); }
function renderMailModal() {
  const box = mailState(S).box.slice().sort((a, b) => b.at - a.at);
  $('#mailWin').innerHTML = `<div class="evh"><b>${t('mail.title')}</b><span>${t('mail.sub', { n: box.length })}</span></div>
    ${box.length ? box.map(m => `<div class="mailrow"><div class="mt"><b>${esc(mailTitle(m))}</b>${m.body || m.tk ? `<span>${esc(m.body || t(m.tk + '.d'))}</span>` : ''}<i>${rewardText(m.r)}</i></div><button class="mini" data-mail="${esc(m.id)}">${t('mail.claim')}</button></div>`).join('') : `<div class="qx c">${t('mail.empty')}</div>`}
    ${box.length > 1 ? `<button class="big sm" data-mail="*">${t('mail.claimAll')}</button>` : ''}
    <button class="mini wide" data-mail="close">${t('ui.close')}</button>`;
}
// 하단 탭 묶음 (5.13.2): 캐릭터 = 장비·스킬, 성장 = 강화·환생. 묶음 안에서는 위쪽 작은 탭으로 바꾼다
const TAB_GRP = { char: ['gear', 'skill'], grow: ['shop', 'rebirth', 'reinc'] }, TAB_DOT = { gear: 'gearDot', skill: 'skillDot', shop: 'shopDot', rebirth: 'rbDot', reinc: 'reincDot' };
const tabLast = { char: 'gear', grow: 'shop' };
function grpOf(go) { return Object.keys(TAB_GRP).find(k => TAB_GRP[k].includes(go)); }
function renderSubTabs(go) {
  const g = grpOf(go), bar = $('#subTabs'); if (!bar) return;
  if (!g) { bar.classList.add('hidden'); return; }
  const pg = document.querySelector('.page[data-tab="' + go + '"]'); if (pg && bar.parentElement !== pg) pg.prepend(bar);
  bar.classList.remove('hidden'); tabLast[g] = go;
  bar.innerHTML = TAB_GRP[g].map(k => `<button class="${k === go ? 'on' : ''}" data-sub="${k}">${t('ui.tab.' + k)}<i class="dot ${$('#' + TAB_DOT[k]).classList.contains('hidden') ? 'hidden' : ''}" data-subdot="${k}"></i></button>`).join('');
}
function syncTabDots() {
  for (const [g, list] of Object.entries(TAB_GRP)) { const on = list.some(k => !$('#' + TAB_DOT[k]).classList.contains('hidden')); $('#' + (g === 'char' ? 'charDot' : 'growDot')).classList.toggle('hidden', !on); }
  document.querySelectorAll('#subTabs [data-subdot]').forEach(d => d.classList.toggle('hidden', $('#' + TAB_DOT[d.dataset.subdot]).classList.contains('hidden')));
  for (const x of DOCK) { const d = document.querySelector('#dockBar [data-dkdot="' + x.id + '"]'); if (d) { let on = false; try { on = !!(x.dot && x.dot()); } catch (e) {} d.classList.toggle('hidden', !on); } }
}
function bindUI() {
  { const bar = document.createElement('div'); bar.className = 'subtabs hidden'; bar.id = 'subTabs'; document.body.appendChild(bar);
    bar.onclick = e => { const b = e.target.closest('[data-sub]'); if (b) goTo(b.dataset.sub); }; }
  document.querySelectorAll('.tabs button[data-grp]').forEach(b => { b.onclick = () => goTo(tabLast[b.dataset.grp]); });
  document.querySelectorAll('.tabs button[data-go]').forEach(b => {
    b.onclick = () => {
      const g = grpOf(b.dataset.go);
      document.querySelectorAll('.tabs button').forEach(x => x.classList.toggle('on', x === b || (!!g && x.dataset.grp === g)));
      document.querySelectorAll('.page').forEach(p => p.classList.toggle('hidden', p.dataset.tab !== b.dataset.go));
      renderSubTabs(b.dataset.go);
      if (b.dataset.go === 'quest' && (dockCur === 'tower' || dockCur === 'rift')) dockTo('log');
      if (b.dataset.go === 'gear') { buildSlots(); buildBag(); }
      if (b.dataset.go === 'skill') buildSkills();
      if (b.dataset.go === 'comp') buildComps();
      if (b.dataset.go === 'rebirth') refreshSave();
      if (b.dataset.go === 'reinc') refreshReinc();
      if (b.dataset.go === 'quest') buildQuest();
      hideTip();
    };
  });
  const chk = $('#autoEq');
  chk.checked = S.autoEquip;
  chk.onchange = () => { S.autoEquip = chk.checked; save(S); };
  $('#sellWorse').onclick = () => { const e0 = S.ess || 0; const g = sellAllWorse(S); addLog(g ? t('ui.soldWorse', { g: `<b>${fmt(g)}</b>` }) + essTxt(e0) : t('ui.nothing')); save(S); buildBag(); refreshEnch(); };
  let sellArmT = 0;
  $('#sellLow').onclick = () => { const r = +$('#sellR').value; if (r >= 3 && Date.now() > sellArmT) { sellArmT = Date.now() + 3000; $('#sellLow').textContent = t('ui.sellAgain'); setTimeout(() => { if (Date.now() >= sellArmT) $('#sellLow').textContent = t('ui.sellBelow'); }, 3050); return; } sellArmT = 0; $('#sellLow').textContent = t('ui.sellBelow'); const e0 = S.ess || 0; const g = sellByRarity(S, r); addLog(g ? t('ui.soldBelow', { r: RARITIES[r].name, g: `<b>${fmt(g)}</b>` }) + essTxt(e0) : t('ui.nothing')); save(S); buildBag(); refreshEnch(); };
  bindQuest(); bindReinc(); bindTraces(); bindBless();
  // 5.14.10 장비 각인 칸 (접기·펼치기, 칸마다 돌리기)
  bindEngr();   // 5.14.10 장비 각인 창
  const eb = $('.enchbox'), setFold = open => { eb.classList.toggle('open', open); $('#enchToggle').setAttribute('aria-expanded', open); };
  let foldOpen = false; try { foldOpen = localStorage.getItem('dm.enchOpen') === '1'; } catch (e) {}
  setFold(foldOpen);
  $('#enchToggle').onclick = () => { const o = !eb.classList.contains('open'); setFold(o); try { localStorage.setItem('dm.enchOpen', o ? '1' : '0'); } catch (e) {} };
  $('#wOk').onclick = () => $('#welcome').classList.add('hidden');
  $('#langSel').onchange = e => changeLang(e.target.value);
  $('#lowFx').checked = !!(S && S.lowFx); $('#lowFx').onchange = e => { S.lowFx = e.target.checked; applyLowFx(); save(S); };
  $('#styBox')?.addEventListener('click', e => { const a = e.target.closest('[data-adv]'); if (a && !a.disabled) { if (a.dataset.adv === 'go') runAdvice(); else applyAdvice(ADV && ADV.res && ADV.res[+a.dataset.adv]); return; } const b = e.target.closest('[data-sty]'); if (!b || b.disabled) return; if (setStyle(S, b.dataset.sty)) { st = stats(S); save(S, 'force'); addLog('<b>' + t('sty.head') + '</b> · ' + t('sty.' + b.dataset.sty)); renderStyle(); render(); } });
  $('#skTabs')?.addEventListener('click', e => { const b = e.target.closest('[data-st]'); if (!b) return; skTab = b.dataset.st; skTabSync(); });
  $('#mailBtn').onclick = () => { hideTip(); renderMailModal(); $('#mailModal').classList.remove('hidden'); };
  $('#mailWin').addEventListener('click', e => {
    const b = e.target.closest('button[data-mail]'); if (!b) return; const id = b.dataset.mail;
    if (id === 'close') { $('#mailModal').classList.add('hidden'); return; }
    const r = id === '*' ? mailClaimAll(S) : mailClaim(S, id);
    if (r && Object.keys(r).length) { addLog('<b>' + t('mail.got') + '</b> · ' + rewardText(r)); flyTo('assets/ui/stone.png', 90, 40, $('#stoneBox'), 3); save(S, 'force'); hudSig = ''; render(); }
    renderMailDot(); if (!mailCount(S)) $('#mailModal').classList.add('hidden'); else renderMailModal();
    if (r && r.title) { st = stats(S); toast(t('ttl.got', { n: t('ttl.n.' + [].concat(r.title)[0]) })); }
    if (r && (r.comp || r.pick)) { $('#mailModal').classList.add('hidden'); setTimeout(afterGifts, 200); }
  });
  $('#attWin').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b || b.disabled) return;
    if (b.dataset.att === 'close') { $('#attModal').classList.add('hidden'); return; }
    if (b.dataset.act === 'attend') { const r = attend(S); if (r) { addLog(t('q.attendLog', { n: r.day }) + ' · ' + rewardText(r.r)); flyTo('assets/ui/stone.png', 90, 40, $('#stoneBox'), 3); save(S, 'force'); hudSig = ''; render(); } renderAttModal(); setTimeout(() => { $('#attModal').classList.add('hidden'); afterGifts(); }, 2200); }
  });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') setTimeout(() => maybeShowAttend(), 800); });
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
    addLog('<b>' + t('ui.lvAllLog', { n: r.n, s: fmtN(r.spent) }) + (r.spentC ? ' · ' + t('aby.crystalUsed', { n: fmtN(r.spentC) }) : '') + '</b> ' + names + (Object.keys(r.ups).length > 3 ? ' …' : ''));
    toast(t('ui.lvAllLog', { n: r.n, s: fmtN(r.spent) }));
  };
  holdRepeat($('#buyStone'), () => { if (!buyStone(S)) return false; render(); return true; },
    n => addLog(n ? t('ui.stonesPlus', { n: n * 10 }) : t('ui.noGold')));
  $('#buyStoneAll').onclick = () => { const r = buyStoneMax(S); if (!r.stones) { toast(t('ui.noGold')); return; } save(S); render(); addLog('<b>' + t('ui.stonesPlus', { n: fmtN(r.stones) }) + '</b> · ' + t('ui.goldSpent', { g: fmt(r.spent) })); toast(t('ui.stonesPlus', { n: fmtN(r.stones) })); };

  let armed = false, tm = null;
  $('#rbBtn').onclick = async () => {
    if (honorGain(S).lte(0)) return;
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
  if (!S.cls) autoStartClass();
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
    let code = await exportCodeShort(S), short = false;
    // 5.14.10 서버에 맡기고 짧은 코드(DM6-XXXXXXXX)만 (토스판. 실패하면 긴 코드 그대로)
    if (window.__dgCloudCode) { try { code = await window.__dgCloudCode.put(code); short = true; } catch (e) {} }
    try { await navigator.clipboard.writeText(code); toast(short ? t('ui.copiedShort', { c: code, d: window.__dgCloudCode.days || 30 }) : t('ui.copied', { n: code.length })); }
    catch (e) { $('#impTxt').value = code; $('#impTxt').select(); toast(t('ui.copyManual'), '#ffc35c'); }
  };
  let armed = false;
  $('#impBtn').onclick = async () => {
    let code = $('#impTxt').value.trim();
    let n;
    if (/^DM6-/i.test(code.replace(/\s+/g, ''))) {   // 5.14.10 짧은 코드는 서버에서 긴 코드를 받아 온다
      if (!window.__dgCloudCode) { toast(t('ui.codeNoServer'), '#ff6b7a'); return; }
      try { code = await window.__dgCloudCode.get(code); } catch (e) { toast(t('ui.codeNotFound'), '#ff6b7a'); return; }
    }
    try { n = await importCodeAny(code); } catch (e) { toast(e.message, '#ff6b7a'); return; }
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
    (res.rebirths > 0 ? t('ui.rep.rebirths', { n: `<b>${res.rebirths}</b>` }) + (D(res.honor).gt(0) ? ' · ' + t('ui.rep.honor', { h: `<b>${fmt(res.honor)}</b>` }) : '') + '<br>' : '') +
    (res.aby && res.aby.n ? t('aby.rep', { n: `<b>${res.aby.n}</b>`, d: res.aby.d, c: `<b>${fmtN(res.aby.crystal || 0)}</b>`, tr: `<b>${fmtN(res.aby.trace)}</b>` }) + '<br>' : '') +
    (res.reincs > 0 ? t('ui.rep.reincs', { n: `<b>${res.reincs}</b>`, k: `<b>${fmt(res.karma || 0)}</b>` }) + '<br>' : '') +
    ((S.events || []).length ? '<b class="hi">' + t('ev.waiting', { n: S.events.length }) + '</b><br>' : '') +
    (AUTO.some(a => a.need(S) && !(S.autoSeen || []).includes(a.id)) ? '<b class="hi">' + t('auto.repNew') + '</b><br>' : '') +
    (expSlots(S).some(x => x && Date.now() >= x.end) || (S.abyss && S.abyss.run && Date.now() >= S.abyss.run.end) ? '<b class="hi">' + t('exp.repDone') + '</b><br>' : '');
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
  initInstances();
  window.__dmStep = 'advance';
  { const off = Math.round((Date.now() - (S.lastTick || Date.now())) / 1000); (window.__dmLog || (() => {}))('save lv' + S.level + ' B' + S.floor + ' bag' + S.bag.length + ' comp' + Object.keys(S.comp || {}).length + ' from=' + S._from + ' offline=' + off + 's'); }
  const _adv0 = performance.now();
  setLang(S.lang || 'en');
  applyI18n(); applyLowFx();
  advance(S);
  cgSnap = cgSnapNow(); if (S.cgAuto !== false) cgAutoEquip(S);   // 예전 세이브: 가방에 남은 장비를 한 번 정리
  if (S.pending && S.pending.seconds > 60 && (S.pending.kills > 0 || D(S.pending.gold).gt(0))) { showReport(S.pending); S.pending = null; }
  await save(S);
  st = stats(S);
  (window.__dmLog || (() => {}))('advance done ' + Math.round(performance.now() - _adv0) + 'ms');
  window.__dmStep = 'build';
  buildSlots(); buildBag(); buildShop(); buildSkills(); buildComps(); buildRelics(); buildEnch(); bindUI();
  window.__dmStep = 'render';
  render();
  if (!S.cls) autoStartClass();
  else addLog(`<b>${t('ui.resume', { n: S.floor })}</b>` + (S._from === 'sync' ? ` · <span class="hi">${t('ui.fromSync')}</span>` : ''));
  applyHalloween();
  renderMailDot(); renderPickBtn();
  setTimeout(() => maybeShowAttend(), 1200);
  requestAnimationFrame(rafLoop);
  setInterval(() => save(S), 4000);
// 5.14.13 도적·전사 평타형 모드를 5분마다 다시 고른다. 8ms씩 나눠 돌려 화면이 멈추지 않게
let bmBusy = false;
setInterval(async () => {
  if (bmBusy || !S || !basicModeDue(S) || (ADV && ADV.run)) return; bmBusy = true;
  try { const snap = simSnap(S), r = {}; for (const m of ['conv', 'keep']) { const j = simJob(snap, x => { x.bMode = m; }, { warm: 40, n: 40 }); while (!simRun(j, 8)) await new Promise(f => setTimeout(f, 0)); r[m] = j.res; }
    if (basicModeDue(S)) { S.bMode = r.keep.gt(r.conv) ? 'keep' : 'conv'; S.bModeAt = Date.now(); st = stats(S); } } finally { bmBusy = false; }
}, 20000);
  // 창이 닫힐 때: visibilitychange 와 pagehide 가 연달아 오므로 한 번만 처리.
  // 팝업은 로컬에만 저장하고, 계정 동기화·드라이브는 서비스 워커가 맡는다 (닫히는 페이지에서 무거운 작업 X)
  let flushedAt = 0;
  const flush = () => {
    if (Date.now() - flushedAt < 1500) return;
    flushedAt = Date.now();
    (window.__dmLog || (() => {}))('flush');
    // 개발용 테스트 화면에서는 백그라운드로 세이브를 넘기지 않는다 (진짜 저장소 오염 방지)
    if (!isLead) { instPost('bye'); return; }   // 따라가기만 하던 창은 저장하지 않는다 (다른 창의 최신 상태를 덮어쓰지 않게)
    if (!/harness/i.test(location.pathname)) { try { const c = serialize(S); chrome.runtime.sendMessage({ type: 'flush', save: c }).catch(() => {}); } catch (e) {} }
    save(S, 'local').catch(() => {});
    instPost('bye');
  };
  window.addEventListener('pagehide', flush);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  bindSave(); refreshSave(); bindGuide(); bindEvents(); bindAutoBox(); bindAutoCard(); bindCompExtras(); bindStoneShop(); bindPets(); bindSoul();
  window.__dmReady = true; window.__dmStep = 'ready';
  pnInit();
  setInterval(refreshSyncLine, 1000);
  // 드라이브에 다른 기기의 더 최신 세이브가 있으면 켜자마자 가져온다
  const openedAt = Date.now();
  driveSync(S, { push: false }).then(r => {
    refreshSyncLine();
    if (r.action === 'pull' && Date.now() - openedAt < 15000) applySave(r.save, 'drive');
  });
  setInterval(() => { if (isLead) driveSync(S, { push: true }).then(refreshSyncLine); }, 120000);
}

// ================= 할로윈 이벤트 (기간 한정) =================
// 사냥 중인 몬스터: 구역 기본 + 추가 2종, 이벤트 중 할로윈 몬스터 (게임 계산과 같은 규칙)
function huntMon() { if (!S || S.boss || inRift() || inTower()) return { v: 0 }; const k = mon.die > 0 ? Math.max(0, (S.kills || 0) - 1) : (S.kills || 0); return monPick(S.floor, k); }
function monKey(mi) { const p = huntMon(); return p.hw != null ? 'mon/hw' + p.hw : p.v ? 'mon/m' + mi + (p.v === 1 ? 'a' : 'b') : 'mon/m' + mi; }
function monLabel(mi) { const p = huntMon(); return p.hw != null ? t('mon.hw.' + p.hw) : p.v ? t('mon.' + mi + (p.v === 1 ? '.a' : '.b')) : MONSTERS[mi]; }

// 기간 중에는 주황·보라 색감과 던전 화면에 박쥐·유령이 떠다니고, 보스를 잡으면 할로윈 코스튬이 나온다
function applyHalloween() {
  const on = hwOn();
  document.documentElement.classList.toggle('hw', on);
  const sc = $('#screen'); let d = $('#hwDeco');
  if (on && sc && !d) {
    d = document.createElement('div'); d.id = 'hwDeco'; d.className = 'hwdeco';
    d.innerHTML = ['bat', 'ghost', 'bat', 'hungryghost', 'flyingskull'].map((n, i) => `<img class="px hw${i}" src="assets/deco/hw_${n}.png" alt="">`).join('');
    sc.appendChild(d);
  }
  if (!on && d) d.remove();
  { let tg = $('#hwTag'); const fl = $('#fname'); if (on && fl && !tg) { tg = document.createElement('span'); tg.id = 'hwTag'; tg.className = 'hwtag'; tg.textContent = t('hw.tag'); fl.after(tg); } if (!on && tg) tg.remove(); }
  if (on && S.cls) { const c = S.cos || (S.cos = { own: [], look: {}, seen: {} }); c.own ||= []; c.look ||= {}; S.hwGift ||= 0;
    if (!S.hwGift) { S.hwGift = 1; if (!c.own.includes(HW_GIFT)) c.own.push(HW_GIFT); if (!c.look.head) c.look.head = HW_GIFT; save(S); try { drawDoll(); } catch (e) {} const m = t('hw.gift', { c: t('cos.n.' + HW_GIFT) }); addLog('<b style="color:#ffa04d">' + m + '</b>'); toast(m, '#ffa04d'); } }
  if (on && !applyHalloween.told) { applyHalloween.told = true; const e = new Date(HW_END - 1); addLog('<b style="color:#ffa04d">' + t('hw.notice', { m: e.getMonth() + 1, d: e.getDate() }) + '</b>'); }
}
setInterval(() => { if (S) applyHalloween(); }, 60000);   // 기간이 시작·끝나는 순간에도 맞춰지게

// ================= 여러 창 동시 실행 =================
// 같은 세이브를 여러 창(팝업·탭·브라우저 창)에서 열면 창마다 자기 상태를 4초마다 저장해서
// 다른 창에서 바꾼 설정이 먼저 열린 창의 상태로 되돌아갔다.
// → 마지막으로 열거나 만지거나 다시 본 창 하나만 저장하고, 나머지 창은 그 창이 저장할 때마다 세이브를 받아 따라간다.
const INST = Math.random().toString(36).slice(2, 10);
let isLead = true, instCh = null, adopting = false, adoptAgain = false, followDirty = false, leadSeenAt = 0;
function instPost(type, extra) { try { instCh && instCh.postMessage({ type, id: INST, ...extra }); } catch (e) {} }
function claimLead() { if (isLead) return; isLead = true; instPost('lead'); (window.__dmLog || (() => {}))('inst lead'); if (followDirty) rebuildFollow(); }
function rebuildFollow() {
  followDirty = false; hudSig = '';
  st = stats(S);
  buildSlots(); buildBag(); buildSkills(); buildComps(); buildRelics(); buildEnch(); refreshSave();
  try { refreshAutoBox(); } catch (e) {}
}
async function adoptLatest() {
  if (isLead) return;
  if (adopting) { adoptAgain = true; return; }
  adopting = true;
  try {
    const n = await loadLocal();
    if (!n || isLead) return;                       // 기다리는 사이 이 창을 만져서 다시 주인이 됐으면 버린다
    Object.keys(S).forEach(k => delete S[k]);
    Object.assign(S, n);
    st = stats(S);
    if (document.visibilityState === 'visible') rebuildFollow(); else followDirty = true;
  } catch (e) { (window.__dmLog || (() => {}))('inst adopt fail ' + (e && e.message)); }
  finally { adopting = false; if (adoptAgain) { adoptAgain = false; adoptLatest(); } }
}
function initInstances() {
  try { instCh = typeof BroadcastChannel === 'function' ? new BroadcastChannel('deskgeon.inst') : null; } catch (e) { instCh = null; }
  setSaveHooks(() => isLead, () => instPost('saved'));
  if (!instCh) return;                              // 지원 안 하는 환경: 예전처럼 혼자 저장
  instCh.onmessage = e => {
    const m = e.data || {}; if (!m.id || m.id === INST) return;
    if (m.type === 'lead') { if (isLead) (window.__dmLog || (() => {}))('inst follow'); isLead = false; leadSeenAt = Date.now(); adoptLatest(); }
    else if (m.type === 'saved') { if (isLead) { instPost('lead'); return; } leadSeenAt = Date.now(); adoptLatest(); }   // 내가 주인인데 다른 창이 저장했으면(간발의 차) 다시 알린다
    else if (m.type === 'bye' && !isLead && document.visibilityState === 'visible') claimLead();
  };
  instPost('lead');                                 // 새로 연 창이 주인
  // 이 창을 만지거나 다시 보면 주인이 된다 (클릭 처리보다 먼저)
  for (const evn of ['pointerdown', 'keydown', 'wheel']) window.addEventListener(evn, claimLead, true);
  window.addEventListener('focus', claimLead);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') { if (isLead) return; if (followDirty) rebuildFollow(); } });
  // 주인 창이 저장을 멈추면(닫힘·멈춤) 보이는 창이 이어받는다
  setInterval(() => { if (!isLead && document.visibilityState === 'visible' && Date.now() - leadSeenAt > 15000) claimLead(); }, 5000);
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
  return { cls: S.cls, clsName: divTitle(S.cls, divTier(S)), dv: divTier(S), arena: S.arenaBest || 0, best: S.bestFloor || S.maxFloor || 1, reinc: S.reinc || 0, karma: S.karma || 0, rift: (S.rift && S.rift.best) || 0, towers: TOWERS.map(T => [T.id, towerState(S, T.id).best || 0]), rebirths: S.rebirths || 0, pulls: S.pulls || 0, days,
    comp: own.length, compMax: COMPANIONS.length, mr: own.filter(id => COMP_BY_ID[id].r === 5).length,
    cos: cosCount(S), cosMax: COSTUMES.length, pet: Object.keys((S.pets && S.pets.own) || {}).length, petMax: PETS.length,
    soul, team: (S.team || []).filter(id => COMP_BY_ID[id]).slice(0, TEAM_MAX), pet1: S.pets && S.pets.act };
}
// 랭킹용: 다른 사람이 볼 수 있게 카드에 필요한 값만 묶는다 (이름은 서버가 붙인다)
function cardSnapshot() {
  const D = cardData();
  return { v: 1, cls: D.cls, layers: heroLayers(S.cls), title: (S.titles && S.titles.eq) || null, tile: FLOOR_TILES[monsterIndex(Math.max(1, S.floor || 1))] ?? 0,
    best: D.best, reinc: D.reinc, karma: D.karma, rift: D.rift, towers: D.towers, rebirths: D.rebirths, days: D.days, comp: D.comp, cos: D.cos, pet: D.pet,
    soul: D.soul ? { lv: D.soul.lv, name: String(D.soul.name || '').slice(0, 24), look: D.soul.look } : null, team: D.team, pet1: D.pet1 || null, dv: D.dv || 0, arena: S.arenaBest || 0 };
}
function cardRound(x, c, y, w, h, r) { x.beginPath(); x.moveTo(c + r, y); x.arcTo(c + w, y, c + w, y + h, r); x.arcTo(c + w, y + h, c, y + h, r); x.arcTo(c, y + h, c, y, r); x.arcTo(c, y, c + w, y, r); x.closePath(); }
async function drawCard(cv, ext) {
  // ext: 랭킹에서 받은 다른 사람의 카드 (cardSnapshot 형식 + name)
  const D = ext ? { ...ext, best: +ext.best || 1, karma: +ext.karma || 0, reinc: +ext.reinc || 0, rift: +ext.rift || 0, days: Math.max(1, +ext.days || 1), clsName: divTitle(ext.cls, Math.max(0, Math.min(1000, +ext.dv || 0))), arena: Math.max(0, Math.floor(+ext.arena || 0)), towers: Array.isArray(ext.towers) ? ext.towers : [], team: (Array.isArray(ext.team) ? ext.team : []).filter(id => COMP_BY_ID[id]).slice(0, TEAM_MAX) } : cardData(), x = cv.getContext('2d'), W = 1200, H = 630, F = '"Pretendard","Segoe UI",system-ui,sans-serif';
  x.clearRect(0, 0, W, H); x.imageSmoothingEnabled = false;
  let g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#221a3f'); g.addColorStop(1, '#0c0a18'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  const tile = await cardImg('assets/floor/f' + (ext ? (+ext.tile || 0) : (FLOOR_TILES[monsterIndex(Math.max(1, S.floor || 1))] ?? 0)) + '.png') || await cardImg('assets/floor/f0.png');
  if (tile) { x.globalAlpha = .22; for (let ty = 410; ty < H; ty += 64) for (let tx = 0; tx < W; tx += 64) x.drawImage(tile, tx, ty, 64, 64); x.globalAlpha = 1; }
  const glow = (cx, cy, r, col) => { const rg = x.createRadialGradient(cx, cy, 0, cx, cy, r); rg.addColorStop(0, col); rg.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = rg; x.fillRect(cx - r, cy - r, r * 2, r * 2); };
  glow(290, 290, 300, 'rgba(150,110,255,.45)'); glow(980, 120, 260, 'rgba(255,190,90,.16)'); glow(820, 560, 280, 'rgba(90,200,255,.12)');
  let hero = null;
  if (ext) { hero = document.createElement('canvas'); hero.width = 32; hero.height = 32; const o = hero.getContext('2d'); for (const k of (Array.isArray(ext.layers) ? ext.layers : ['cls/' + ext.cls]).slice(0, 12)) { if (!/^[a-z]+\/[\w-]+$/.test(String(k))) continue; const im = await cardImg('assets/' + k + '.png'); if (im) o.drawImage(im, 0, 0); } }
  else hero = heroSprite(S.cls);
  x.fillStyle = 'rgba(0,0,0,.35)'; x.beginPath(); x.ellipse(290, 418, 120, 20, 0, 0, 7); x.fill();
  x.drawImage(hero, 146, 130, 288, 288);
  if (D.pet1 && /^[\w-]+$/.test(String(D.pet1))) { const pi = await cardImg('assets/pet/' + D.pet1 + '.png'); if (pi) x.drawImage(pi, 40, 300, 128, 128); }
  const ttlId = ext ? ext.title : S.titles && S.titles.eq, ttl = ttlId ? t('ttl.n.' + ttlId) : '';
  x.textAlign = 'center'; x.fillStyle = '#fff'; x.font = '800 34px ' + F; x.fillText(D.clsName, 290, ttl ? 458 : 470);
  if (ttl) { x.fillStyle = '#ffd98a'; x.font = '700 21px ' + F; x.fillText('「' + ttl + '」', 290, 488); }
  const tw = D.team.length > 3 || ttl ? 64 : 76, tg = D.team.length > 3 ? 10 : 14, tx0 = 290 - (D.team.length * tw + (D.team.length - 1) * tg) / 2;
  for (let i = 0; i < D.team.length; i++) { const c = COMP_BY_ID[D.team[i]], im = await cardImg(compSrc(c.id)), px = tx0 + i * (tw + tg), py = ttl ? 508 : 500;
    cardRound(x, px, py, tw, tw, 12); x.fillStyle = 'rgba(255,255,255,.07)'; x.fill(); x.lineWidth = 3; x.strokeStyle = C_RARITY[c.r].color; x.stroke(); if (im) x.drawImage(im, px + 6, py + 6, tw - 12, tw - 12); }
  const PX = 560, PY = 48, PW = 600, PH = 534;
  cardRound(x, PX, PY, PW, PH, 28); x.fillStyle = 'rgba(255,255,255,.07)'; x.fill(); x.lineWidth = 2; x.strokeStyle = 'rgba(255,255,255,.16)'; x.stroke();
  x.textAlign = 'left'; x.fillStyle = 'rgba(214,204,255,.75)'; x.font = '700 22px ' + F; x.fillText(ext && ext.name ? String(ext.name).slice(0, 20) : 'DESKGEON', PX + 40, PY + 52);
  x.textAlign = 'right'; x.fillStyle = 'rgba(214,204,255,.55)'; x.font = '500 20px ' + F; x.fillText(new Date().toLocaleDateString(getLang()) + '  ·  ' + t('card.daysH', { n: fmtN(D.days) }), PX + PW - 40, PY + 52);
  x.textAlign = 'left'; x.fillStyle = 'rgba(255,255,255,.7)'; x.font = '600 24px ' + F; x.fillText(t('card.best'), PX + 40, PY + 112);
  g = x.createLinearGradient(0, PY + 120, 0, PY + 230); g.addColorStop(0, '#fff2c4'); g.addColorStop(1, '#ffb94a'); x.fillStyle = g; { const dvT = Math.floor((D.best || 0) / DIV_STEP); if (dvT > 0) { x.font = '900 44px ' + F; x.fillText(t('div.tier', { n: dvT }), PX + 38, PY + 168); x.font = '900 92px ' + F; x.fillText('B' + fmtN(D.best - dvT * DIV_STEP + 1), PX + 34, PY + 248); } else { x.font = '900 112px ' + F; x.fillText('B' + fmtN(D.best), PX + 34, PY + 222); } }
  // 줄마다 칸을 같은 너비로 나눔: [이름, 값, 보조(영혼무기 이름)]
  const rowsC = [
    [[t('card.karma'), fmtN(D.karma)], [t('card.rift'), D.rift ? t('card.riftV', { n: fmtN(D.rift) }) : '-']],
    D.towers.map(([id, b]) => [t(b >= TOWER_MYTH_FLOOR ? 'tw2.' + id : 'tw.' + id), b ? t('card.twV', { n: fmtN(b) }) : '-']),
    [[t('card.soul'), D.soul ? 'Lv.' + D.soul.lv : '-', D.soul && (D.soul.name || '')], [t('card.arena'), D.arena ? t('card.arenaV', { n: fmtN(D.arena) }) : '-']],
  ];
  const ch = 64, gap = 12, soulIm = D.soul && /^[\w-]+$/.test(String(D.soul.look)) ? await cardImg('assets/soul/' + D.soul.look + '.png') : null, inner = PW - 80;
  rowsC.forEach((row, ri) => { const cw = (inner - gap * (row.length - 1)) / row.length, cy = PY + 252 + ri * (ch + gap), three = row.length > 2;
    row.forEach(([k, v, sub], ci) => { const cx = PX + 40 + ci * (cw + gap), right = cx + cw - 16;
      cardRound(x, cx, cy, cw, ch, 12); x.fillStyle = 'rgba(255,255,255,.06)'; x.fill();
      if (three) { x.textAlign = 'left'; x.fillStyle = 'rgba(255,255,255,.62)'; x.font = '600 16px ' + F; x.fillText(k, cx + 14, cy + 25); x.fillStyle = '#fff'; x.font = '800 22px ' + F; x.fillText(v, cx + 14, cy + 52); return; }
      x.textAlign = 'left'; x.fillStyle = 'rgba(255,255,255,.62)'; x.font = '600 19px ' + F; x.fillText(k, cx + 16, cy + 40); const kw = x.measureText(k).width;
      x.textAlign = 'right'; x.fillStyle = '#fff'; x.font = '800 24px ' + F; x.fillText(v, right, cy + 41); const vw = x.measureText(v).width;
      if (sub) { x.fillStyle = '#d9c8ff'; x.font = '600 19px ' + F; let s2 = sub; const room = cw - 32 - kw - vw - 10 - (soulIm ? 50 : 0) - 16; while (s2.length > 1 && x.measureText(s2).width > room) s2 = s2.slice(0, -2) + '…';
        x.fillText(s2, right - vw - 12, cy + 41); if (soulIm) x.drawImage(soulIm, right - vw - 12 - x.measureText(s2).width - 46, cy + 12, 40, 40); }
    }); });
  x.textAlign = 'right'; x.fillStyle = 'rgba(214,204,255,.55)'; x.font = '500 18px ' + F; x.fillText(CARD_URL, PX + PW - 8, H - 18);
  x.textAlign = 'left';
}
function cardText() { const D = cardData(); const dvT = Math.floor((D.best || 0) / DIV_STEP); return t('card.share', { c: D.clsName, f: dvT > 0 ? t('div.tier', { n: dvT }) + ' · B' + fmtN(D.best - dvT * DIV_STEP + 1) : fmtN(D.best), k: fmtN(D.karma), rf: D.rift, tw: D.towers.map(([id, b]) => t('tw.' + id) + ' ' + b).join(' / '), b: fmtN(D.rebirths), n: D.comp, m: D.compMax, p: D.pet, q: D.petMax, o: D.cos, w: D.cosMax }) + '\n' + 'https://' + CARD_URL + '/'; }
const cardBlob = () => new Promise(r => $('#cardCv').toBlob(r, 'image/png'));
async function openCard(ext) {
  const h = $('#cardModal h2'); if (h) h.textContent = ext && ext.name ? t('card.titleOf', { n: String(ext.name).slice(0, 20) }) : t('card.title');
  $('#cardModal').classList.remove('hidden'); await drawCard($('#cardCv'), ext);
}
// 플랫폼 코드(랭킹)에서 쓰는 카드 기능
window.__dgCard = { snapshot: () => cardSnapshot(), open: ext => openCard(ext) };
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

// ================= DPS 분석기 =================
let dpsMode = 'boss', dpsIv = 0;
const DPS_CATS = ['basic', 'pas', 'skill', 'comp', 'soul', 'item'];
const DPS_COL = { basic: '#ffd98a', pas: '#7ee08a', skill: '#b9a6ff', comp: '#6fb7ff', soul: '#ff7ab0', item: '#c8c8d8' };
const dpsPct = p => p >= 10 ? p.toFixed(0) : p >= 0.1 ? p.toFixed(1) : '<0.1';
function dpsRows(M) {
  // 피해 합계는 Decimal (game.js 의 METER). 비율·막대 길이만 숫자로
  const R = {}, put = (key, cat, name, icon, v, part) => { const r = R[key] ||= { cat, name, icon, v: D(0), parts: {} }; r.v = r.v.add(v); if (part) r.parts[part] = D(r.parts[part]).add(v); };
  for (const [k, v] of Object.entries(M.src)) {
    const i = k.indexOf(':'), p = i < 0 ? k : k.slice(0, i), id = i < 0 ? '' : k.slice(i + 1);
    if (p === 'basic') { let ic = 'assets/cls/' + S.cls + '.png'; try { ic = heroSprite(S.cls).toDataURL(); } catch (e) {} put('basic', 'basic', t('dps.heroBasic'), ic, v); }
    else if (p === 'ps' || p === 'sk') { const sd = SKILL_BY_ID[id]; put(k, p === 'ps' ? 'pas' : 'skill', sd ? sd.name : id, sd ? skillSrc(id) : null, v); }
    else if (p === 'cp' || p === 'cs') { const c = COMP_BY_ID[id]; if (c) put('c:' + id, 'comp', c.name, compSrc(id), v, p); }
    else if (p === 'sw') put(k, 'soul', t('sfx.n.' + id), S.soul && S.soul.look ? 'assets/soul/' + S.soul.look + '.png' : null, v);
    else if (p === 'u') put(k, 'item', t('uq.' + (id === 'double' ? 'fury' : id)), null, v);
  }
  return Object.entries(R).map(([key, r]) => ({ key, ...r })).sort((a, b) => b.v.cmp(a.v));
}
function renderDps() {
  const M = METER[dpsMode], rows = dpsRows(M), tot = rows.reduce((a, r) => a.add(r.v), D(0)), T = Math.max(M.t, 0.01), pc = v => 100 * dn(D(v).div(tot));
  document.querySelectorAll('#dpsModal [data-dm]').forEach(b => b.classList.toggle('on', b.dataset.dm === dpsMode));
  $('#dpsWin').textContent = M.t > 0 ? t('dps.win', { n: M.t < 10 ? M.t.toFixed(1) : Math.round(M.t) }) : '';
  if (!(M.t > 0) || !tot.gt(0)) { $('#dpsBody').innerHTML = `<div class="dpsempty">${t('dps.empty.' + dpsMode)}</div>`; return; }
  const cat = {}; for (const r of rows) cat[r.cat] = D(cat[r.cat]).add(r.v);
  const cats = DPS_CATS.filter(c => cat[c] && cat[c].gt(0)), top = rows[0].v;
  $('#dpsBody').innerHTML = `<div class="dpstot"><span>${t('dps.total')}</span><b>${fmtD(tot.div(T))}</b></div>
    <div class="dpsstack">${cats.map(c => `<i style="width:${pc(cat[c])}%;background:${DPS_COL[c]}"></i>`).join('')}</div>
    <div class="dpsleg">${cats.map(c => `<span><i style="background:${DPS_COL[c]}"></i>${t('dps.c.' + c)} ${dpsPct(pc(cat[c]))}%</span>`).join('')}</div>
    <div class="dpslist">${rows.map(r => {
      let sub = '';
      if (r.cat === 'comp') { const c = COMP_BY_ID[r.key.slice(2)], a = D(r.parts.cp), k = D(r.parts.cs); if (k.gt(0)) sub = `<div class="dsub">${t('dps.compHit')} ${fmtD(a.div(T))} · ${compSkillName(compActive(c))} ${fmtD(k.div(T))}</div>`; }
      return `<div class="dpsrow">${r.icon ? `<img class="px" src="${r.icon}">` : '<span class="noic"></span>'}<div class="dn"><b>${r.name}<em style="color:${DPS_COL[r.cat]}">${t('dps.c.' + r.cat)}</em></b><div class="dbar"><i style="width:${100 * dn(r.v.div(top))}%;background:${DPS_COL[r.cat]}"></i></div>${sub}</div><div class="dv"><b>${fmt(r.v.div(T))}</b><span>${dpsPct(pc(r.v))}%</span></div></div>`; }).join('')}</div>
    <div class="dpsnote">${t('dps.note')}</div>`;
}
function openDps() { if (!METER.boss.t && METER.hunt.t) dpsMode = 'hunt'; $('#dpsModal').classList.remove('hidden'); renderDps(); clearInterval(dpsIv); dpsIv = setInterval(() => { if ($('#dpsModal').classList.contains('hidden')) { clearInterval(dpsIv); return; } renderDps(); }, 1000); }
document.addEventListener('click', e => {
  const b = e.target.closest('#dpsBtn, #dpsClose, #dpsReset, #dpsModal [data-dm]'); if (!b) return;
  if (b.id === 'dpsBtn') return openDps();
  if (b.id === 'dpsClose') { $('#dpsModal').classList.add('hidden'); clearInterval(dpsIv); return; }
  if (b.id === 'dpsReset') { meterReset(dpsMode); renderDps(); return; }
  if (b.dataset.dm) { dpsMode = b.dataset.dm; renderDps(); }
});

// ================= 칭호 =================
const TTL_COND = id => /^arena\d$/.test(id) ? 'arena' : /^hw\d$/.test(id) ? 'hw' : /^deep/.test(id) ? 'floor' : /^reinc/.test(id) ? 'reinc' : /^karma/.test(id) ? 'karma' : /^tw(Inf|Storm|Iron)$/.test(id) ? 'tw' : id === 'twAll' ? 'twAll' : /^rift/.test(id) ? 'rift' : /^pull/.test(id) ? 'pull' : /^boss/.test(id) ? 'boss' : /^dlShop/.test(id) ? 'shop' : id;
const TTL_TW = { twInf: 'inf', twStorm: 'storm', twIron: 'iron' };
function ttlFx(id) { const x = TITLE_BY_ID[id]; return [x.fx, ...(x.more || [])].map(([k, v]) => t('ttl.k.' + k, { v })).join(' · '); }
function ttlCond(x) { const k = TTL_COND(x.id); return k === 'shop' ? t('ttl.c.shop', { n: fmtN(x.shop) }) : t('ttl.c.' + k, { n: fmtN(titleNeed(x)), t: TTL_TW[x.id] ? t('tw.' + TTL_TW[x.id]) : '' }); }
function qTitle() {
  const ts = titleState(S), tb = titleBonus(S), cats = ['event', 'arena', 'floor', 'reinc', 'tower', 'col', 'battle', 'town', 'daily'];
  const fx = TITLE_KEYS.filter(k => tb[k] > 0).map(k => `<em>${t('ttl.k.' + k, { v: tb[k] })}</em>`).join('');
  return `<div class="qcard"><div class="qh"><b>${t('ttl.title')}</b><span>${ts.own.length} / ${TITLES.length}</span></div>
    <div class="qx">${t('ttl.desc')}</div><div class="townfx">${fx || `<span class="qx">${t('ui.none')}</span>`}</div>
    <div class="qx">${t('ttl.eq')}: <b style="color:#ffd98a">${ts.eq ? t('ttl.n.' + ts.eq) : t('ttl.none')}</b></div></div>` +
    cats.map(c => `<div class="ttlcat">${t('ttl.cat.' + c)}</div>` + TITLES.filter(x => x.c === c).map(x => {
      const own = ts.own.includes(x.id), need = titleNeed(x), v = x.shop ? 0 : Math.min(x.m(S), need);
      return `<div class="qrow ttlrow ${own ? '' : 'lock'}"><div class="qt"><b class="${own ? 'own' : ''}">${t('ttl.n.' + x.id)} <span class="ttlfx">${ttlFx(x.id)}</span></b>${own || x.shop ? '' : `<div class="qbar"><i style="width:${Math.min(100, v / need * 100)}%"></i></div>`}<span>${ttlCond(x)}${own || x.shop ? '' : ' · ' + fmtN(Math.floor(v)) + ' / ' + fmtN(need)}</span></div>${own ? `<button class="mini ${ts.eq === x.id ? 'on' : ''}" data-act="ttl" data-v="${x.id}">${ts.eq === x.id ? t('ttl.unequip') : t('ttl.equip')}</button>` : ''}</div>`; }).join('')).join('');
}

// ================= 마을 =================
let townSel = null, townMv = null, townSellArm = 0, townBTab = 'fn', townPaintId = null, townPal = false, townAutoN = 0, townAutoLogT = 0;
const TOWN_IC = id => 'assets/town/' + id + '.png';
const tHash = (x, y) => ((x * 73856093) ^ (y * 19349663)) >>> 0;
const townSkin = (id, k) => { if (id !== 'house') return id; const [x, y] = k.split(',').map(Number); return tHash(x, y) % 2 ? 'house2' : 'house'; };
function townFxText(k, v) { return t('town.k.' + k, { v: Math.round(v * 100) / 100 }); }
function townBasicText(B, k) { if (B.k === 'res') return t('town.res', { n: B.v }); if (B.k === 'well') { if (!k) return t('town.wellD'); const [x, y] = k.split(',').map(Number), g = townState(S).g; let n = 0; for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const q = g[(x + dx) + ',' + (y + dy)]; if ((dx || dy) && q && q.b === 'house') n++; } return t('town.wellNow', { n }); } return t('town.deco'); }
function townRefundNotice() { if (!S || !S.townRefund) return; const n = S.townRefund; delete S.townRefund; addLog('<b>' + t('town.refund', { n: fmtN(n) }) + '</b>'); toast(t('town.refund', { n: fmtN(n) })); save(S); }
function renderTownBox() {
  townRefundNotice();
  const box = $('#townBox'); if (!box) return; const ag = townAgg(S), n = townCount(S), res = townRes(S);
  const fx = TOWN_B.filter(B => !B.basic && B.k !== 'plaza' && ag[B.k] > 0).map(B => townFxText(B.k, ag[B.k])).join(' · ');
  const sig = n + '|' + res + '|' + fx + '|' + getLang(); if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  box.innerHTML = `<img class="px" src="${TOWN_IC('plaza')}"><div class="tb"><b>${isCastle(S) ? t('town.castle') : t('town.title')} · ${t('town.count', { n: townUsed(S), m: townN(S) * townN(S) })}${res ? ' · ' + t('town.resN', { n: res }) : ''}</b><span>${fx || t('town.empty')}</span></div><button class="mini hot" id="townOpenBtn">${t('town.enter')}</button>`;
}
function townCellHtml(k, x, y) {
  const ts = townState(S), open = ts.open.includes(k), b = ts.g[k], B = b && TOWN_BY_ID[b.b];
  const grass = TOWN_IC('grass' + ((x * 7 + y * 3) % 3)), tree = TOWN_IC('tree' + (1 + (x + y * 2) % 3));
  let cls = 'tcell', inner = '';
  if (!open) { cls += townCanOpen(S, k) ? ' can' : ' lock'; inner = `<img src="${grass}"><img src="${tree}">`; }
  else { const fl = townFloor(S, k); inner = B && B.ground ? '' : `<img src="${fl ? TOWN_IC('fl_' + fl) : grass}">`; if (b) { inner += `<img src="${TOWN_IC(townSkin(b.b, k))}">${B.basic ? '' : `<span class="lv">${b.lv}</span>`}`; if (!B.basic && b.b !== 'plaza' && townTileMult(S, k) > 1) cls += ' boost'; } }
  if (townSel === k) cls += ' sel'; if (townMv === k) cls += ' mv';
  return `<div class="${cls}" data-tk="${k}" title="${b ? t('town.b.' + b.b) + (B.basic ? '' : ' Lv.' + b.lv) : ''}">${inner}</div>`;
}
function townClearBar() {
  const left = townOpenable(S).length; if (!left) return ''; const c = townTileCost(S), n = townOpenAffordable(S);
  return `<div class="tclear"><span>${t('town.clearBar', { c: fmtN(c) })}</span><div class="tbtns"><button class="mini hot" data-tw="open1" ${n ? '' : 'disabled'}>${t('town.clear1')}</button><button class="mini" data-tw="open5" ${n >= 2 ? '' : 'disabled'}>${t('town.clearN', { n: 5 })}</button><button class="mini" data-tw="openAll" ${n >= 2 ? '' : 'disabled'}>${n >= 2 ? t('town.clearAll', { n }) : t('town.clearMax')}</button></div></div>`;
}
function townTopHtml(res, fx) {
  const ts = townState(S), ch = townCheapest(S), cas = isCastle(S), ready = !cas && castleReady(S);
  const row = `<div class="ttop"><button class="mini ${townFxOpen ? 'on' : ''}" data-tw="fx">${t('town.fxBtn')} ${townFxOpen ? '▴' : '▾'}</button>`
    + (ready ? `<button class="mini hot" data-tw="castle" ${S.stones >= CASTLE_COST ? '' : 'disabled'}>${t('town.castleUpS', { c: fmtN(CASTLE_COST) })}</button>` : '')
    + `<button class="mini ${townPal || townPaintId ? 'on' : ''}" data-tw="pal">${t('town.floorBtn')}</button><button class="mini hot" data-tw="upc" ${ch && S.stones >= ch.c ? '' : 'disabled'} title="${ch ? t('town.b.' + ts.g[ch.k].b) + ' Lv.' + ts.g[ch.k].lv : ''}">${t('town.upCheap')}${ch ? ' ' + fmtN(ch.c) : ''}</button><button class="mini" data-tw="upcAll" ${ch && S.stones >= ch.c ? '' : 'disabled'}>${t('town.upAll')}</button></div>`;
  if (!townFxOpen) return row;
  return row + `<div class="tfxpanel"><div class="townfx">${res ? `<em class="res">${t('town.resBadge', { n: res, p: Math.min(TOWN_RES_CAP, res * TOWN_RES_PCT) })}</em>` : ''}${fx || (res ? '' : `<span class="qx">${t('town.empty')}</span>`)}</div>`
    + (cas ? '' : castleBarHtml())
    + `<div class="tauto"><label><input type="checkbox" data-tw="auto" ${ts.auto ? 'checked' : ''}> ${t('town.auto')}</label><span>${t('town.keep')}</span><select data-tw="res">${TOWN_RESERVES.map((v, i) => `<option value="${i}" ${(ts.res || 0) === i ? 'selected' : ''}>${v ? fmtN(v) : '0'}</option>`).join('')}</select></div></div>`;
}
function castleBarHtml() {
  if (isCastle(S)) return '';
  const o = townState(S).open.length;
  if (!castleReady(S)) return `<div class="cbar"><span>${t('town.castleNeed', { n: CASTLE_NEED, o })}</span></div>`;
  return `<div class="cbar ready"><span>${t('town.castleD')}</span><button class="mini hot" data-tw="castle" ${S.stones >= CASTLE_COST ? '' : 'disabled'}>${t('town.castleUp', { c: fmtN(CASTLE_COST) })}</button></div>`;
}
function townToolsHtml() {
  const ts = townState(S), ch = townCheapest(S);
  return `<div class="ttools"><button class="mini ${townPal || townPaintId ? 'on' : ''}" data-tw="pal">${t('town.floorBtn')}</button><button class="mini hot" data-tw="upc" ${ch && S.stones >= ch.c ? '' : 'disabled'} title="${ch ? t('town.b.' + ts.g[ch.k].b) + ' Lv.' + ts.g[ch.k].lv : ''}">${t('town.upCheap')}${ch ? ' ' + fmtN(ch.c) : ''}</button><button class="mini" data-tw="upcAll" ${ch && S.stones >= ch.c ? '' : 'disabled'}>${t('town.upAll')}</button></div>
    <div class="tauto"><label><input type="checkbox" data-tw="auto" ${ts.auto ? 'checked' : ''}> ${t('town.auto')}</label><span>${t('town.keep')}</span><select data-tw="res">${TOWN_RESERVES.map((v, i) => `<option value="${i}" ${(ts.res || 0) === i ? 'selected' : ''}>${v ? fmtN(v) : '0'}</option>`).join('')}</select></div>`;
}
function townPalHtml() {
  const opts = [{ id: 'grass', c: 0 }, ...TOWN_FLOORS];
  return `<div class="tx">${townPaintId ? t('town.paintOn', { f: t('town.fl.' + townPaintId), c: fmtN(townPaintId === 'grass' ? 0 : TOWN_FLOOR_BY_ID[townPaintId].c) }) : t('town.paintPick')}</div>
    <div class="tfloors">${opts.map(f => `<button class="mini tfl ${townPaintId === f.id ? 'on' : ''}" data-tw="paint" data-v="${f.id}"><img src="${TOWN_IC(f.id === 'grass' ? 'grass0' : 'fl_' + f.id)}"><span>${t('town.fl.' + f.id)}</span><i>${f.c ? fmtN(f.c) : t('town.free')}</i></button>`).join('')}</div>
    <div class="tbtns"><button class="mini" data-tw="palClose">${t('town.paintEnd')}</button></div>`;
}
function townBubbleHtml() {
  const ts = townState(S), k = townSel; if (!k || townPal || townPaintId || townMv) return '';
  const x = '<button class="tbx" data-tw="desel" aria-label="close">×</button>';
  if (!ts.open.includes(k)) { if (!townCanOpen(S, k)) return `<div class="tbub2">${x}<span>${t('town.far')}</span></div>`; const c = townTileCost(S); return `<div class="tbub2">${x}<b>${t('town.clear')}</b><div class="tbb"><button class="mini hot" data-tw="open" ${S.stones >= c ? '' : 'disabled'}>${stoneIc} ${fmtN(c)}</button></div></div>`; }
  const b = ts.g[k]; if (!b) return '';
  const B = TOWN_BY_ID[b.b], sell = `<button class="mini" data-tw="sell">${townSellArm === k ? t('town.sellSure', { n: fmtN(Math.floor(b.sp / 2)) }) : t('town.sell')}</button>`, mv = `<button class="mini" data-tw="move">${t('town.move')}</button>`;
  if (B.basic) return `<div class="tbub2">${x}<b>${t('town.b.' + b.b)}</b><span>${townBasicText(B, k)}</span><div class="tbb">${mv}${sell}</div></div>`;
  const m = townTileMult(S, k), rm = townResMult(S), max = b.lv >= TOWN_MAXLV, uc = max ? 0 : townUpCost(b.lv), now = townVal(S, k), nxt = B.k === 'plaza' ? B.v * (b.lv + 1) : B.v * (b.lv + 1) * m * rm;
  return `<div class="tbub2">${x}<b>${t('town.b.' + b.b)} Lv.${b.lv}</b><span>${townFxText(B.k, now)}${max ? '' : ' → ' + townFxText(B.k, nxt)}</span><div class="tbb"><button class="mini hot" data-tw="up" ${!max && S.stones >= uc ? '' : 'disabled'}>${max ? t('town.max') : t('town.up') + ' ' + fmtN(uc)}</button>${mv}${sell}</div></div>`;
}
function townBubblePlace() {
  const bub = document.querySelector('#townWin .tbub2'), cell = townSel && document.querySelector('#townWin .tcell[data-tk="' + townSel + '"]'), wrap = document.querySelector('#townWin .tgwrap'), v = $('#tView'); if (!bub || !cell || !wrap || !v) return;
  const cx = cell.offsetLeft + cell.offsetWidth / 2, bw = bub.offsetWidth, bh = bub.offsetHeight;
  let left = Math.max(v.scrollLeft + 2, Math.min(v.scrollLeft + v.clientWidth - bw - 2, cx - bw / 2)), top = cell.offsetTop - bh - 6;
  if (top < v.scrollTop) top = cell.offsetTop + cell.offsetHeight + 6;
  bub.style.left = left + 'px'; bub.style.top = top + 'px';
}
function townInfoHtml() {
  const ts = townState(S), k = townSel;
  if (townPal || townPaintId) return townPalHtml();
  if (townMv) return `<div class="tx">${t('town.moveHint', { b: t('town.b.' + ts.g[townMv].b) })}</div><div class="tbtns"><button class="mini" data-tw="mvCancel">${t('town.cancel')}</button></div>`;
  if (!k) return townClearBar();
  if (!ts.open.includes(k) || ts.g[k]) return townClearBar();
  if (!ts.open.includes(k)) { if (!townCanOpen(S, k)) return `<div class="tx">${t('town.far')}</div>` + townClearBar(); const c = townTileCost(S); return `<div class="th"><img src="${TOWN_IC('tree1')}"><div><b>${t('town.clear')}</b><span>${t('town.clearD')}</span></div></div><div class="tbtns"><button class="mini hot" data-tw="open" ${S.stones >= c ? '' : 'disabled'}>${stoneIc} ${fmtN(c)}</button></div>` + townClearBar(); }
  const b = ts.g[k];
  if (!b) { const c = townBuildCost(S), list = TOWN_B.filter(B => (townBTab === 'basic' ? B.basic : !B.basic) && (!B.castle || isCastle(S)));
    const tabs = `<div class="ttabs"><button class="mini ${townBTab === 'fn' ? 'on' : ''}" data-tw="btab" data-v="fn">${t('town.tabFn')}</button><button class="mini ${townBTab === 'basic' ? 'on' : ''}" data-tw="btab" data-v="basic">${t('town.tabBasic')}</button></div>`;
    return tabs + `<div class="tx">${townBTab === 'basic' ? t('town.basicHead') : t('town.buildHead', { c: fmtN(c) })}</div><div class="tblist">${list.map(B => { const n = townCopies(S, B.id), mx = townCopyMax(B.id), cc = townCostOf(S, B.id), ok = n < mx && S.stones >= cc;
      const sub = B.basic ? townBasicText(B) + ' · ' + fmtN(cc) : (n >= mx ? t('town.built') : townFxText(B.k, B.v) + ' / Lv'); const cnt = !B.basic || mx >= 49 ? '' : ' ' + n + '/' + mx;
      return `<button class="mini tbopt" data-tw="build" data-b="${B.id}" ${ok ? '' : 'disabled'}><img src="${TOWN_IC(B.id)}"><div><b>${t('town.b.' + B.id)}${cnt}</b><span>${sub}</span></div></button>`; }).join('')}</div>`; }
  const B = TOWN_BY_ID[b.b];
  if (B.basic) return `<div class="th"><img src="${TOWN_IC(townSkin(b.b, k))}"><div><b>${t('town.b.' + b.b)}</b><span>${townBasicText(B, k)}</span></div></div>
    <div class="tx">${t('town.resTotal', { n: townRes(S), p: Math.min(TOWN_RES_CAP, townRes(S) * TOWN_RES_PCT) })}</div>
    <div class="tbtns"><button class="mini" data-tw="move">${t('town.move')}</button><button class="mini" data-tw="sell">${townSellArm === k ? t('town.sellSure', { n: fmtN(Math.floor(b.sp / 2)) }) : t('town.sell')}</button></div>`;
  const m = townTileMult(S, k), rm = townResMult(S), max = b.lv >= TOWN_MAXLV, uc = max ? 0 : townUpCost(b.lv), now = townVal(S, k), nxt = B.k === 'plaza' ? B.v * (b.lv + 1) : B.v * (b.lv + 1) * m * rm;
  const extra = B.k === 'plaza' ? t('town.plazaD') : [rm > 1 ? t('town.resMult', { m: Math.round((rm - 1) * 100) }) : ''].filter(Boolean).join(' · ');
  return `<div class="th"><img src="${TOWN_IC(b.b)}"><div><b>${t('town.b.' + b.b)} Lv.${b.lv}/${TOWN_MAXLV}</b><span>${townFxText(B.k, now)}${max ? '' : ' → ' + townFxText(B.k, nxt)}</span></div></div>
    <div class="tx">${extra}</div>
    <div class="tbtns"><button class="mini hot" data-tw="up" ${!max && S.stones >= uc ? '' : 'disabled'}>${max ? t('town.max') : t('town.up') + ' ' + stoneIc + ' ' + fmtN(uc)}</button><button class="mini" data-tw="move">${t('town.move')}</button><button class="mini" data-tw="sell">${townSellArm === k ? t('town.sellSure', { n: fmtN(Math.floor(b.sp / 2)) }) : t('town.sell')}</button></div>`;
}
let townCenter = false, townFxOpen = false;
function renderTown() {
  const ag = townAgg(S), w = $('#townWin'), res = townRes(S), v0 = $('#tView'), sl = v0 ? v0.scrollLeft : 0, stp = v0 ? v0.scrollTop : 0, wt = w.scrollTop;
  const fx = TOWN_B.filter(B => !B.basic && B.k !== 'plaza' && ag[B.k] > 0).map(B => `<em>${townFxText(B.k, ag[B.k])}</em>`).join('');
  const TNN = townN(S), cas = isCastle(S); let cells = ''; for (let y = 0; y < TNN; y++) for (let x = 0; x < TNN; x++) cells += townCellHtml(x + ',' + y, x, y);
  w.innerHTML = `<div class="evh"><b>${cas ? t('town.castle') : t('town.title')} ${t('town.count', { n: townUsed(S), m: TNN * TNN })}</b><span>${stoneIc} <b>${fmtN(S.stones)}</b></span></div>
    ${townTopHtml(res, fx)}
    <div class="tview ${cas ? 'castle' : ''} ${townPaintId ? 'painting' : ''}" id="tView"><div class="tgwrap ${cas ? 'castle' : ''}"${cas ? ' style="background-image:url(' + TOWN_IC('cwall0') + ')"' : ''}>${cas ? '<i class="cflag l"></i><i class="cflag r"></i><img class="cgate" src="' + TOWN_IC('cgate') + '">' : ''}<div class="tgrid" style="grid-template-columns:repeat(${TNN},40px)">${cells}</div><div class="tnpcs" id="tNpcs"></div>${townBubbleHtml()}</div></div>${(() => { const ih = townInfoHtml(); return ih ? `<div class="tinfo">${ih}</div>` : ''; })()}
    <button class="mini" data-tw="close">${t('ui.close')}</button>`;
  { const v = $('#tView'); if (townCenter) { townCenter = false; v.scrollLeft = (v.scrollWidth - v.clientWidth) / 2; v.scrollTop = (v.scrollHeight - v.clientHeight) / 2; } else { v.scrollLeft = sl; v.scrollTop = stp; } w.scrollTop = wt; }
  npcSync(); npcPlace(true); townBubblePlace();
  { const v = $('#tView'); if (v && !v._bub) { v._bub = 1; v.addEventListener('scroll', townBubblePlace, { passive: true }); } }
  const tl = w.querySelector('.tblist'); if (tl && renderTown._lastSel !== townSel && !w.closest('.dockbody')) w.scrollTo({ top: w.scrollHeight, behavior: 'smooth' }); renderTown._lastSel = tl ? townSel : null;
}
function townAct(a, b) {
  const k = townSel;
  if (a === 'open') { if (townOpen(S, k)) { addLog(t('town.openLog')); return true; } return false; }
  if (a === 'build') { const id = b.dataset.b; if (townBuild(S, k, id)) { addLog('<b>' + t('town.buildLog', { b: t('town.b.' + id) }) + '</b>'); return true; } return false; }
  return false;
}
// ---- 마을 NPC: 지은 기능 건물마다 그 일을 하는 사람이 한 명, 주민 2명당 마을 사람 1명(최대 6명)이 돌아다닌다
const NPC_ROLE = { forge: 'smith', wall: 'guard', drill: 'coach', arcane: 'mage', barracks: 'soldier', chapel: 'priest', arena: 'veteran', market: 'merchant', library: 'scholar', alchemy: 'alchemist', circle: 'summoner', kennel: 'keeper', foundry: 'soulsmith' };
const NPC_VIL = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8'], NPC_LINES = 3, NPC_VLINES = 5;
let townNpc = [], npcIv = 0, npcTalkT = 0;
function npcSync() {
  const g = townState(S).g, want = [];
  for (const [k, b] of Object.entries(g)) { const r = NPC_ROLE[b.b]; if (r && !want.some(w => w.role === r)) want.push({ id: 'r:' + r, role: r, home: k }); }
  const houses = Object.entries(g).filter(([, b]) => b.b === 'house').map(([k]) => k); const nv = Math.min(6, Math.ceil(townRes(S) / 2));
  for (let i = 0; i < nv; i++) want.push({ id: 'v:' + i, role: NPC_VIL[i % NPC_VIL.length], vil: true, home: houses[i % Math.max(1, houses.length)] || townState(S).open[0] });
  townNpc = want.map(w => townNpc.find(n => n.id === w.id && n.role === w.role) || { ...w, x: +w.home.split(',')[0], y: +w.home.split(',')[1], jx: Math.random() * .3 - .15, jy: Math.random() * .3 - .15, next: performance.now() + 500 + Math.random() * 2000, flip: false });
}
function npcPlace(instant) {
  const L = $('#tNpcs'), grid = document.querySelector('#townWin .tgrid'); if (!L || !grid) return; const c0 = grid.querySelector('.tcell'); if (!c0) return;
  const cw = c0.offsetWidth + 2, off = c0.offsetLeft, sz = Math.round(c0.offsetWidth * .72);
  for (const n of townNpc) { let el = L.querySelector('[data-npc="' + n.id + '"]'); if (!el) { el = document.createElement('img'); el.className = 'tnpc px'; el.dataset.npc = n.id; el.src = 'assets/npc/' + n.role + '.png'; el.title = t('npc.n.' + n.role); L.appendChild(el); if (instant) el.style.transition = 'none'; }
    el.style.width = el.style.height = sz + 'px'; el.style.left = Math.round(off + (n.x + .5 + n.jx) * cw - sz / 2) + 'px'; el.style.top = Math.round(off + (n.y + .42 + n.jy) * cw - sz / 2) + 'px'; el.style.transform = n.flip ? 'scaleX(-1)' : '';
    if (instant) { void el.offsetWidth; el.style.transition = ''; } }
  for (const el of [...L.querySelectorAll('.tnpc')]) if (!townNpc.some(n => n.id === el.dataset.npc)) el.remove();
}
function npcLine(n) {
  const g = townState(S).g, bk = n.vil ? null : Object.keys(g).find(k => NPC_ROLE[g[k].b] === n.role), lv = bk ? g[bk].lv : 0;
  const i = Math.floor(Math.random() * (n.vil ? NPC_VLINES : NPC_LINES)), key = n.vil ? 'npc.v.' + i : 'npc.' + n.role + '.' + i;
  return t(key, { lv, f: fmtN(S.bestFloor || 0), c: CLASSES[S.cls] ? CLASSES[S.cls].name : '', r: townRes(S), w: S.soul && S.soul.name ? S.soul.name : t('card.soul'), n: townUsed(S) });
}
function npcSay(n) {
  const L = $('#tNpcs'), el = L && L.querySelector('[data-npc="' + n.id + '"]'); if (!el) return; L.querySelectorAll('.tbub').forEach(x => x.remove());
  const bub = document.createElement('div'); bub.className = 'tbub'; bub.innerHTML = `<b>${t('npc.n.' + n.role)}</b>${npcLine(n)}`; L.appendChild(bub);
  const lx = parseFloat(el.style.left) + el.offsetWidth / 2, ty = parseFloat(el.style.top); bub.style.left = Math.max(4, Math.min(L.offsetWidth - bub.offsetWidth - 4, lx - bub.offsetWidth / 2)) + 'px'; bub.style.top = Math.max(0, ty - bub.offsetHeight - 2) + 'px';
  setTimeout(() => bub.remove(), 3200);
}
function npcTick() {
  if ($('#townModal').classList.contains('hidden')) { clearInterval(npcIv); npcIv = 0; return; }
  const ts = townState(S), now = performance.now(); let moved = false;
  for (const n of townNpc) { if (now < n.next) continue; n.next = now + 1400 + Math.random() * 2200; if (Math.random() < .3) continue;
    const opts = []; for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { if (!dx && !dy) continue; const x = n.x + dx, y = n.y + dy, k = x + ',' + y; if (!ts.open.includes(k)) continue; const b = ts.g[k], B = b && TOWN_BY_ID[b.b]; const w = townFloor(S, k) ? 6 : !b ? 3 : B && B.ground ? 3 : 1; for (let i = 0; i < w; i++) opts.push([x, y]); }
    if (!opts.length) continue; const [x, y] = opts[Math.floor(Math.random() * opts.length)]; n.flip = x < n.x ? true : x > n.x ? false : n.flip; n.x = x; n.y = y; n.jx = Math.random() * .3 - .15; n.jy = Math.random() * .3 - .15; moved = true; }
  if (moved) npcPlace(false);
  if (townNpc.length && now > npcTalkT) { npcTalkT = now + 6000 + Math.random() * 5000; npcSay(townNpc[Math.floor(Math.random() * townNpc.length)]); }
}
dockAdd({ id: 'log', label: () => t('dock.log') });
dockAdd({ id: 'town', label: () => isCastle(S) ? t('town.castle') : t('town.title'), el: () => $('#townModal'),
  open: () => { dockMount($('#townModal')); openTownRaw(); },
  close: () => { const m = $('#townModal'); if (!m.classList.contains('hidden')) { m.classList.add('hidden'); clearInterval(npcIv); npcIv = 0; $('#townBox').dataset.sig = ''; renderTownBox(); } dockUnmount(m); } });
for (const id of ['tower', 'rift']) dockAdd({ id, label: () => t('q.tab.' + id), show: id === 'rift' ? () => riftUnlocked(S) : null, dot: () => qDot(id),
  open: () => { qTab = id; dockMount($('#qBody')); buildQuest(); },
  close: () => { dockUnmount($('#qBody')); qTab = 'mission'; } });
function openTown() { openDock('town'); }
function openTownRaw() { townSel = null; townMv = null; townCenter = true; $('#townModal').classList.remove('hidden'); renderTown(); clearInterval(npcIv); npcTalkT = performance.now() + 2500; npcIv = setInterval(npcTick, 300); }
document.addEventListener('click', e => {
  { const db = e.target.closest('#dockBar [data-dock]'); if (db) { dockTo(db.dataset.dock); return; } }
  if (e.target.closest('#dockBar [data-dockbig]')) { dockBig = !dockBig; dockFocus(); renderDockBar(); return; }
  if (dockCur !== 'log' && !dockBig && e.target.closest('.page[data-tab="dungeon"].dkfocus .battle .mline')) { dockBig = true; dockFocus(); renderDockBar(); return; }
  if (e.target.closest('#growBadge')) { openGrow(); return; }
  if (e.target.closest('#townOpenBtn')) { openTown(); return; }
  const w = e.target.closest('#townWin'); if (!w) return;
  // 주민이 칸 위에 서 있어도 그 칸을 누른 것으로 처리한다 (주민 대사는 그대로 띄움). 예전에는 주민이 클릭을 가로채 건물 칸이 선택되지 않았다
  const np = e.target.closest('.tnpc'), npc = np ? townNpc.find(z => z.id === np.dataset.npc) : null;
  const cell = np ? (document.elementsFromPoint ? document.elementsFromPoint(e.clientX, e.clientY) : []).find(el => el.classList && el.classList.contains('tcell') && el.dataset.tk) : e.target.closest('[data-tk]');
  if (np && !cell) { if (npc) npcSay(npc); return; }
  if (cell && townPaintId) { const k = cell.dataset.tk; if (townState(S).open.includes(k)) { if (townPaint(S, k, townPaintId)) save(S); } else toast(t('town.paintOpen')); renderTown(); if (npc) npcSay(npc); return; }
  if (cell) { const k = cell.dataset.tk; if (townMv) { if (townMove(S, townMv, k)) { save(S); st = stats(S); } townMv = null; townSel = k; } else townSel = townSel === k ? null : k; townSellArm = 0; renderTown(); if (npc) npcSay(npc); return; }
  const b = e.target.closest('[data-tw]'); if (!b || b.disabled) return; const a = b.dataset.tw;
  if (a === 'close') { $('#townModal').classList.add('hidden'); clearInterval(npcIv); npcIv = 0; $('#townBox').dataset.sig = ''; renderTownBox(); return; }
  if (a === 'btab') { townBTab = b.dataset.v; renderTown(); return; }
  if (a === 'fx') { townFxOpen = !townFxOpen; renderTown(); return; }
  if (a === 'desel') { townSel = null; townSellArm = 0; renderTown(); return; }
  if (a === 'castle') { if (castleUp(S)) { addLog('<b>' + t('town.castleLog') + '</b>'); toast(t('town.castleLog')); flash('#ffd98a', .8, 1); townCenter = true; st = stats(S); save(S, 'force'); } renderTown(); return; }
  if (a === 'pal') { townPal = !(townPal || townPaintId); townPaintId = null; townSel = null; renderTown(); return; }
  if (a === 'paint') { townPaintId = b.dataset.v; townPal = true; townSel = null; renderTown(); return; }
  if (a === 'palClose') { townPal = false; townPaintId = null; renderTown(); return; }
  if (a === 'upc') return;   // 길게 누르기 처리기에서 실행
  if (a === 'upcAll') { const r = townUpCheap(S, 9999, TOWN_RESERVES[townState(S).res || 0] || 0); if (r.n) { addLog(t('town.upLog', { n: r.n, c: fmtN(r.spent) })); toast(t('town.upLog', { n: r.n, c: fmtN(r.spent) })); st = stats(S); save(S); } else toast(t('town.upNone')); renderTown(); return; }
  if (a === 'auto' || a === 'res') return;
  if (a === 'open5' || a === 'openAll') { const r = townOpenMany(S, a === 'open5' ? 5 : 999); if (r.n) { addLog(t('town.clearLog', { n: r.n, c: fmtN(r.spent) })); toast(t('town.clearLog', { n: r.n, c: fmtN(r.spent) })); save(S); } renderTown(); return; }
  if (a === 'open1') return;   // 길게 누르기 처리기에서 실행
  if (a === 'mvCancel') { townMv = null; renderTown(); return; }
  if (a === 'move') { townMv = townSel; renderTown(); return; }
  if (a === 'sell') { if (townSellArm !== townSel) { townSellArm = townSel; renderTown(); return; } const r = townSell(S, townSel); townSellArm = 0; if (r) { addLog(t('town.sellLog', { n: fmtN(r) })); save(S); st = stats(S); } renderTown(); return; }
  if (a === 'up') return;
  if (townAct(a, b)) { save(S); st = stats(S); } renderTown();
});
$('#townWin').addEventListener('change', e => { const el = e.target.closest('[data-tw]'); if (!el) return; const ts = townState(S); if (el.dataset.tw === 'auto') { ts.auto = el.checked; toast(t(el.checked ? 'town.autoOn' : 'town.autoOff')); } else if (el.dataset.tw === 'res') ts.res = +el.value; save(S); renderTown(); });
holdDelegate($('#townWin'), '[data-tw="upc"]', () => { const r = townUpCheap(S, 1, 0); if (r.n) { st = stats(S); renderTown(); } return !!r.n; }, n => { if (n) { addLog(t('town.upLog1', { n })); save(S); renderTown(); } });
holdDelegate($('#townWin'), '[data-tw="open1"]', () => { const k = townOpenNext(S); if (k) renderTown(); return !!k; }, n => { if (n) { addLog(t('town.clearLog1', { n })); save(S); renderTown(); } });
holdDelegate($('#townWin'), '[data-tw="up"]', () => { const ok = townUp(S, townSel); if (ok) { st = stats(S); renderTown(); } return ok; }, n => { if (n) { save(S); renderTown(); } });

// ================= 성장 점검: 열렸는데 아직 안 쓰는 기능을 찾아서 알려 준다 =================
const _gsum = o => Object.values(o || {}).reduce((a, b) => a + (+b || 0), 0);
const _best = () => S.bestFloor || S.maxFloor || 0;
const GROW = [
  { id: 'team',     go: 'comp', open: () => '#team', need: () => Object.keys(S.comp || {}).length > 0, todo: () => (S.team || []).length < Math.min(teamMax(S), Object.keys(S.comp || {}).length), lock: ['pull'] },
  { id: 'mut',      go: 'skill',   need: () => Object.values(S.skills || {}).some(v => v >= 10), todo: () => mutPending(S) > 0, lock: ['skill10'] },
  { id: 'enchant',  go: 'gear',    open: () => { const b = $('#enchToggle'); if (b && b.getAttribute('aria-expanded') !== 'true') b.click(); return '.enchbox'; }, need: () => (S.ess || 0) > 0 || _gsum(S.ench) > 0, todo: () => _gsum(S.ench) === 0 && (S.ess || 0) >= enchCost(0), lock: ['ess'] },
  { id: 'rebirth',  go: 'rebirth', need: () => _best() >= REBIRTH_FLOOR || (S.rebirths || 0) > 0, todo: () => !(S.rebirths || 0) && (S.maxFloor || 0) >= REBIRTH_FLOOR, lock: ['floor', REBIRTH_FLOOR] },
  { id: 'relic',    go: 'rebirth', need: () => (S.rebirths || 0) > 0, todo: () => _gsum(S.relic) === 0 && RELICS.some(r => D(S.honorPts ?? S.honor).gte(relicCost(r, 0))), lock: ['rebirth', 1] },
  { id: 'tower',    go: 'quest', q: 'tower', need: () => !!S.cls, todo: () => towerBestAll(S) === 0 },
  { id: 'mastery',  go: 'skill',   open: () => '#msBox', need: () => masteryUnlocked(S), todo: () => masterySpent(S) === 0 && S.sp > 0, lock: ['skillAll'] },
  { id: 'rift',     go: 'quest', q: 'rift', need: () => riftUnlocked(S), todo: () => !(riftState(S).best > 0) && riftState(S).keys > 0, lock: ['floor', RIFT_UNLOCK] },
  { id: 'rune',     go: 'quest', q: 'rift', need: () => riftUnlocked(S) && (runeState(S).bag.length > 0 || runeState(S).eq.some(Boolean)), todo: () => runeState(S).bag.length > 0 && runeState(S).eq.some(x => !x), lock: ['floor', RIFT_UNLOCK] },
  { id: 'pet',      go: 'comp', open: () => { openPetModal(); return null; }, need: () => petUnlocked(S), todo: () => petLeft(S).length > 0 && petPot(S).gte(petDrawCost(S)), lock: ['best', PET_UNLOCK] },
  { id: 'petLv',    go: 'comp', open: () => { openPetModal(); return '.petall'; }, need: () => petUnlocked(S) && Object.keys((S.pets && S.pets.own) || {}).length > 0, todo: () => { const own = Object.values(S.pets.own), cap = petCap(S), low = own.filter(p => p.lv < cap); return low.length > 0 && petPot(S).gte(petLvCost(S, Math.min(...low.map(p => p.lv))).mul(5)); }, lock: ['best', PET_UNLOCK] },
  { id: 'exped',    go: 'comp', open: () => '#expBox', need: () => !abyUnlocked(S) && Object.keys(S.comp || {}).length > (S.team || []).length, todo: () => expSlots(S).some(x => !x) && expFree(S).length > 0, lock: ['pull'] },
  { id: 'cg',       go: 'comp', open: () => { openCgModal(); return null; }, need: () => ((S.cg && S.cg.bag) || []).length > 0 || Object.keys((S.cg && S.cg.eq) || {}).length > 0, todo: () => !S.cgAuto && ((S.cg && S.cg.bag) || []).length > 0, lock: ['exped'] },
  { id: 'reinc',    go: 'reinc', open: () => '#reincBtn', need: () => _best() >= REINC_FLOOR || (S.reinc || 0) > 0, todo: () => !(S.reinc || 0) && canReinc(S), lock: ['best', REINC_FLOOR] },
  { id: 'soul',     go: 'gear', open: () => { openSoulModal(); return null; }, need: () => soulUnlocked(S), todo: () => !soulMade(S), lock: ['reinc', 1] },
  { id: 'soulOpt',  go: 'gear', open: () => { openSoulModal(); return null; }, need: () => soulMade(S), todo: () => (S.soul.opt || []).filter(Boolean).length < soulSlots(S), lock: ['reinc', 1] },
  { id: 'town',     go: 'shop', open: () => { openTown(); return null; }, need: () => !!S.cls, todo: () => townCount(S) === 0 && (S.stones || 0) >= townBuildCost(S) },
  { id: 'title',    go: 'quest', q: 'title', need: () => titleState(S).own.length > 0, todo: () => !titleState(S).eq, lock: ['title'] },
  { id: 'daily',    go: 'quest', q: 'daily', need: () => !!S.cls, todo: () => { const o = dl2State(S); return o.tries === DAILY_TRIES && !o.cur; } },
];
const GROW_SNOOZE = 12 * 3600e3;
function growState() { return S.grow && typeof S.grow === 'object' ? S.grow : (S.grow = { snz: {}, seen: [] }); }
function growList() { const g = growState(), now = Date.now(); return GROW.map(x => { let un = false, td = false; try { un = !!x.need(); td = un && !!x.todo(); } catch (e) {} return { x, un, td, snz: (g.snz[x.id] || 0) > now }; }); }
function growLockText(x) { const [k, n] = x.lock || []; return k ? t('gr.lock.' + k, { n: fmtN(n || 0) }) : ''; }
function growGo(id) {
  const x = GROW.find(z => z.id === id); if (!x) return;
  document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
  if (x.q === 'tower' || x.q === 'rift') openDock(x.q); else { goTo(x.go); if (x.q) { qTab = x.q; buildQuest(); } }
  setTimeout(() => { let sel = null; try { sel = x.open ? x.open() : null; } catch (e) {} const el = sel && document.querySelector(sel); if (el) { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); el.classList.remove('gpulse'); void el.offsetWidth; el.classList.add('gpulse'); setTimeout(() => el.classList.remove('gpulse'), 3200); } }, 80);
}
let growLast = 0;
function renderGrowBox(force) {
  const box = $('#growBox'); if (!box || !S || !S.cls) return; const now = Date.now(); if (!force && now - growLast < 3000) return; growLast = now;
  const L = growList(), todo = L.filter(r => r.td), show = todo.filter(r => !r.snz), g = growState();
  // 처음 보는 할 일은 한 번 알려 준다
  const fresh = todo.filter(r => !g.seen.includes(r.x.id)); if (fresh.length) { g.seen.push(...fresh.map(r => r.x.id)); if (g.seen.length > 1) toast(t('gr.new', { n: t('gr.' + fresh[0].x.id) })); save(S); }
  const guideOn = !$('#guideBox').classList.contains('hidden');
  { const bd = $('#growBadge'); if (bd) { bd.classList.toggle('hidden', !show.length); const tx = t('gr.badge', { n: show.length }); if (bd.textContent !== tx) bd.textContent = tx; } }
  box.classList.add('hidden'); return;
  const hide = guideOn || !show.length; box.classList.toggle('hidden', hide); if (hide) { box.dataset.sig = ''; return; }
  const top = show[0].x, sig = top.id + '|' + show.length + '|' + getLang(); if (box.dataset.sig === sig) return; box.dataset.sig = sig;
  box.innerHTML = `<div class="gdt" title="${t('gr.' + top.id + '.d')}"><i>${t('gr.head', { n: show.length })}</i><b>${t('gr.' + top.id)}</b><span>${t('gr.' + top.id + '.d')}</span></div><div class="gdb"><button class="mini hot" data-gr="go">${t('gd.go')}</button><button class="mini" data-gr="all">${t('gr.all')}</button><button class="x" data-gr="later" title="${t('gr.later')}">×</button></div>`;
  box.dataset.top = top.id;
}
function renderGrowModal() {
  const L = growList(), todo = L.filter(r => r.td), ok = L.filter(r => r.un && !r.td), lock = L.filter(r => !r.un);
  const row = (r, kind) => `<div class="grrow ${kind}"><i class="gdot"></i><div><b>${kind === 'todo' ? t('gr.' + r.x.id) : t('gr.n.' + r.x.id)}</b><span>${kind === 'lock' ? growLockText(r.x) : kind === 'ok' ? t('gr.okTx') : t('gr.' + r.x.id + '.d')}</span></div>${kind === 'todo' ? `<button class="mini hot" data-gr="go" data-id="${r.x.id}">${t('gd.go')}</button>` : ''}</div>`;
  $('#growWin').innerHTML = `<div class="evh"><b>${t('gr.modal')}</b><span>${t('gr.count', { a: ok.length, b: L.filter(r => r.un).length })}</span></div><div class="qx">${t('gr.desc')}</div>
    ${todo.length ? `<div class="grsec">${t('gr.secTodo', { n: todo.length })}</div>` + todo.map(r => row(r, 'todo')).join('') : `<div class="qx">${t('gr.none')}</div>`}
    ${ok.length ? `<div class="grsec">${t('gr.secOk')}</div>` + ok.map(r => row(r, 'ok')).join('') : ''}
    ${lock.length ? `<div class="grsec">${t('gr.secLock')}</div>` + lock.map(r => row(r, 'lock')).join('') : ''}
    <button class="mini" data-gr="close">${t('ui.close')}</button>`;
}
function openGrow() { renderGrowModal(); $('#growModal').classList.remove('hidden'); }
document.addEventListener('click', e => {
  if (e.target.closest('#growShow')) { $('#setModal').classList.add('hidden'); openGrow(); return; }
  const b = e.target.closest('[data-gr]'); if (!b) return; const a = b.dataset.gr;
  if (a === 'all') return openGrow();
  if (a === 'close') { $('#growModal').classList.add('hidden'); return; }
  if (a === 'go') { const id = b.dataset.id || $('#growBox').dataset.top; growGo(id); return; }
  if (a === 'later') { const id = $('#growBox').dataset.top; if (id) { growState().snz[id] = Date.now() + GROW_SNOOZE; save(S); toast(t('gr.snoozed')); } renderGrowBox(true); }
});

// 탭을 바꾸거나 창을 열면 날아가던 연출을 바로 지운다
document.addEventListener('click', () => setTimeout(() => { if (!flyOk()) { const fl = $('#flyer'); if (fl && fl.childElementCount) fl.replaceChildren(); } }, 0), true);

// ================= 절전 모드 (5.14.16) =================
// 검은 화면 + 수직 갱도(아래 = 절전 시작, 위 = 최고층). 전투 계산은 그대로 하고 그림·글자는 1초에 한 번만. 화면 켜짐 유지(토스 SDK, 없으면 Wake Lock)
// 크롬 확장은 창을 닫으면 멈추는 구조라 쓰지 않는다
const SLEEP_EXT = location.protocol === 'chrome-extension:';
const SLP_AUTO = [0, 1, 3, 5, 10];
const slpKey = () => (window.__dgPrefix || '') + 'dg.sleepAuto';
function sleepAutoMin() { try { const v = +(localStorage.getItem(slpKey()) || 0); return SLP_AUTO.includes(v) ? v : 0; } catch (e) { return 0; } }
const slpF = f => 'B' + Number(f).toLocaleString('en-US');
const slpDur = ms => { const s = Math.floor(ms / 1000); return Math.floor(s / 3600) + ':' + String(Math.floor(s % 3600 / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
async function sleepAwake(on) {
  try { if (window.__dgAwake) { await window.__dgAwake(on); return; } } catch (e) {}
  try {
    if (on) { if (!slpLock && navigator.wakeLock) { slpLock = await navigator.wakeLock.request('screen'); slpLock.addEventListener('release', () => { slpLock = null; }); } }
    else if (slpLock) { const l = slpLock; slpLock = null; await l.release(); }
  } catch (e) { slpLock = null; }
}
function buildSleepOv() {
  const ov = document.createElement('div'); ov.id = 'sleepOv'; ov.className = 'sleepov hidden';
  const up = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7ee08a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
  const rb = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffb45c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5"/></svg>';
  ov.innerHTML = `<div class="slp-in"><div class="slp-wrap">
    <div class="slp-bar"><span class="slp-live slp-n"></span><span class="slp-clock slp-n"></span></div>
    <div class="slp-top"><div class="slp-fl slp-n"><b>B</b><span class="slp-num"></span></div><div class="slp-chips slp-n"><span class="slp-chip ok">${up}<i class="slp-up"></i></span><span class="slp-chip gd slp-bossc"></span></div></div>
    <div class="slp-gz"><div class="slp-marks"></div><div class="slp-rope"></div><div class="slp-cone"></div><img class="slp-hero" alt=""></div>
    <div class="slp-rb slp-n"><b>${rb}<i class="slp-rbn"></i></b><span class="slp-rbl"></span></div>
  </div><div class="slp-slide"><div class="slp-knob"><img src="assets/ui/stone.png" alt=""></div><p class="slp-ul"></p></div></div>`;
  document.body.appendChild(ov);
  // 밀어서 돌아가기 (75% 이상 밀면 해제)
  const knob = ov.querySelector('.slp-knob'), bar = ov.querySelector('.slp-slide'); let d = null;
  knob.addEventListener('pointerdown', e => { d = { x: e.clientX, max: bar.clientWidth - knob.offsetWidth - 12, v: 0 }; knob.classList.remove('back'); try { knob.setPointerCapture(e.pointerId); } catch (er) {} e.preventDefault(); });
  knob.addEventListener('pointermove', e => { if (!d) return; const x = Math.max(0, Math.min(d.max, e.clientX - d.x)); knob.style.transform = 'translateX(' + x + 'px)'; d.v = x; });
  const end = () => { if (!d) return; const ok = d.v >= d.max * 0.75; d = null; knob.classList.add('back'); knob.style.transform = ''; if (ok) exitSleep(); };
  knob.addEventListener('pointerup', end); knob.addEventListener('pointercancel', end);
  return ov;
}
function enterSleep() {
  if (slp || SLEEP_EXT || !S || !S.cls) return;
  slp = { at: Date.now(), f0: S.floor, peak: S.floor, rb0: S.rebirths || 0 };
  const ov = $('#sleepOv') || buildSleepOv();
  try { ov.querySelector('.slp-hero').src = heroSprite(S.cls).toDataURL(); } catch (e) {}
  ov.querySelector('.slp-ul').textContent = t('sleep.unlock'); ov.querySelector('.slp-rbl').textContent = t('sleep.rb');
  ov.classList.remove('hidden'); document.documentElement.classList.add('sleeping');
  slpSig = ''; slpUI = 0; slpShiftAt = Date.now(); ov.querySelector('.slp-wrap').style.transform = '';
  renderSleep(); sleepAwake(true);
}
function exitSleep() {
  if (!slp) return; const s0 = slp; slp = null;
  const ov = $('#sleepOv'); if (ov) ov.classList.add('hidden');
  document.documentElement.classList.remove('sleeping'); sleepAwake(false);
  slpInput = Date.now(); hudSig = '';
  const ms = Date.now() - s0.at;
  if (ms >= 60000) { const msg = t('sleep.sum', { t: fmtLeft(ms), a: slpF(s0.f0), b: slpF(S.floor), n: (S.rebirths || 0) - s0.rb0 }); addLog('<b>' + msg + '</b>'); toast(msg); }
  render();
}
function renderSleep() {
  const ov = $('#sleepOv'); if (!ov || !slp) return;
  const ins = window.__dgInsets || {}, H = ov.clientHeight || window.innerHeight, top = ins.top || 0, bot = ins.bottom || 0;
  const q = s => ov.querySelector(s), setT = (el, v) => { if (el.textContent !== v) el.textContent = v; };
  setT(q('.slp-live'), t('sleep.on', { t: slpDur(Date.now() - slp.at) }));
  setT(q('.slp-clock'), new Date().toLocaleTimeString(({ ko: 'ko-KR', ja: 'ja-JP', zh: 'zh-CN' })[getLang()] || 'en-US', { hour: 'numeric', minute: '2-digit' }));
  const cur = S.floor || 1, best = Math.max(S.bestFloor || 0, S.maxFloor || 0, cur);
  setT(q('.slp-num'), Number(cur).toLocaleString('en-US'));
  setT(q('.slp-up'), t('sleep.up', { n: Math.max(0, slp.peak - slp.f0) }));
  const fight = !!(S.boss && !S.boss.tower); let nb = fight && isBossFloor(cur) ? cur : cur + 1; while (!isBossFloor(nb)) nb++;   // 보스와 싸우는 중이면 지금 층 보스가 '다음 보스'
  setT(q('.slp-bossc'), fight ? t('sleep.bossNow') : t('sleep.bossIn', { n: nb - cur }));
  setT(q('.slp-rbn'), t('sleep.rbN', { n: (S.rebirths || 0) - slp.rb0 }));
  // 배치: 위 숫자 → 갱도 → 환생 → 밀어서 해제
  q('.slp-bar').style.top = top + 18 + 'px'; q('.slp-top').style.top = top + 58 + 'px';
  q('.slp-slide').style.bottom = bot + 28 + 'px'; q('.slp-rb').style.bottom = bot + 104 + 'px';
  const gz = q('.slp-gz'), gTop = top + 186, gH = Math.max(160, H - gTop - bot - 186); gz.style.top = gTop + 'px'; gz.style.height = gH + 'px';
  // 번인 방지: 1분마다 조금씩 옮긴다
  if (Date.now() - slpShiftAt >= 60000) { slpShiftAt = Date.now(); q('.slp-wrap').style.transform = 'translate(' + Math.round(Math.random() * 12 - 6) + 'px,' + Math.round(Math.random() * 12 - 6) + 'px)'; }
  // 갱도: 10층 단위로 화면을 넘긴다 (그 안에서는 캐릭터가 위로 올라감)
  const lo = Math.floor(cur / 10) * 10 - 8; let hi = lo + 30; if (best > hi && best <= lo + 40) hi = best + 3;
  const step = gH / (hi - lo + 1), Y = f => (hi - f + 0.5) * step, X = gz.clientWidth / 2;
  const sig = [lo, hi, cur, best, Math.max(lo, slp.f0), nb, fight, gH, X, getLang()].join('|');
  if (sig === slpSig) return;
  slpSig = sig;
  let h = `<div class="slp-rail" style="left:${X - 1}px;top:${Y(hi) - 6}px;height:${Y(lo) - Y(hi) + 12}px"></div>`;
  const goal = best > cur && best <= hi;
  if (goal) h += `<div class="slp-goal" style="left:${X - 100}px;width:200px;top:${Y(best) - 50}px;height:100px"></div>`;
  let lastDone = 0; for (let f = lo; f <= cur; f++) if (isBossFloor(f) && f !== nb) lastDone = f;
  for (let f = lo; f <= hi; f++) {
    const y = Y(f), dim = f > best ? ';opacity:.45' : '';
    if (isBossFloor(f)) {
      const c = f === nb ? 'next' : f <= cur ? 'done' : '';
      h += `<div class="slp-boss ${c}" style="left:${X}px;top:${y}px${dim}"></div>`;
      if (Math.abs(f - best) > 1) h += `<div class="slp-lab slp-n ${c}" style="right:${X + 42}px;top:${y}px${dim}">${slpF(f)}</div>`;
      if (f === lastDone || f === nb) h += `<div class="slp-lab ${c}" style="left:${X + 42}px;top:${y}px">${t(f === nb ? (fight && f === cur ? 'sleep.bossNow' : 'sleep.next') : 'sleep.killed')}</div>`;
    } else h += `<div class="slp-tick" style="left:${X - 13}px;width:26px;top:${y}px${dim}"></div>`;
  }
  const f0 = Math.max(lo, slp.f0); if (cur > f0) h += `<div class="slp-done" style="left:${X - 1}px;top:${Y(cur)}px;height:${Y(f0) - Y(cur)}px"></div>`;
  if (goal) h += `<div class="slp-best" style="left:${X - 70}px;width:140px;top:${Y(best)}px"><span class="slp-n" style="left:-44px">${t('sleep.goal', { f: slpF(best) })}</span></div>`;
  q('.slp-marks').innerHTML = h;
  const rope = q('.slp-rope'); rope.style.display = goal ? '' : 'none';
  if (goal) { rope.style.left = X - 1 + 'px'; rope.style.top = Y(best) + 'px'; rope.style.height = Math.max(0, Y(cur) - 30 - Y(best)) + 'px'; }
  const hero = q('.slp-hero'), cone = q('.slp-cone'); hero.style.left = X + 'px'; hero.style.top = Y(cur) + 'px'; cone.style.left = X + 'px'; cone.style.top = Y(cur) + 'px';
}
if (!SLEEP_EXT) {
  $('#sleepBtn').classList.remove('hidden'); $('#sleepSet').classList.remove('hidden');
  $('#sleepBtn').onclick = () => enterSleep();
  const fillSleepSet = () => { const sel = $('#sleepAuto'), v = sleepAutoMin(); sel.innerHTML = SLP_AUTO.map(n => `<option value="${n}" ${n === v ? 'selected' : ''}>${n ? t('sleep.after', { n }) : t('sleep.off')}</option>`).join(''); };
  $('#setBtn').addEventListener('click', fillSleepSet); fillSleepSet();
  $('#sleepAuto').onchange = e => { try { localStorage.setItem(slpKey(), String(+e.target.value || 0)); } catch (er) {} slpInput = Date.now(); };
  for (const ev of ['pointerdown', 'keydown', 'wheel', 'touchstart']) document.addEventListener(ev, () => { slpInput = Date.now(); }, { passive: true, capture: true });
  document.addEventListener('keydown', e => { if (slp && e.key === 'Escape') exitSleep(); });
  document.addEventListener('visibilitychange', () => { if (slp && document.visibilityState === 'visible') { sleepAwake(true); slpSig = ''; renderSleep(); } else if (!slp) slpInput = Date.now(); });
  setInterval(() => {
    const m = sleepAutoMin(); if (!m || slp || !S || !S.cls || document.visibilityState !== 'visible') return;
    try { if (window.__dgMonetizationBusy && window.__dgMonetizationBusy()) return; } catch (e) {}
    if (Date.now() - slpInput >= m * 60000) enterSleep();
  }, 5000);
  window.addEventListener('resize', () => { if (slp) { slpSig = ''; renderSleep(); } });
}
window.__dgSleep = { on: () => !!slp, enter: () => enterSleep(), exit: () => exitSleep() };
