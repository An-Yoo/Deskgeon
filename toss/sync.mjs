// DeskmateExt(크롬 확장 원본) → DeskgeonToss/app (앱인토스 프로젝트) 동기화
// 사용: node sync.mjs   (원본을 고친 뒤 실행하면 앱인토스 버전에 반영됨)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
// 게임 원본 위치: 환경변수 DESKGEON_SRC > 옆 폴더 ../DeskmateExt (이 PC) > 상위 폴더 .. (GitHub 저장소의 toss/ 안에서 실행할 때)
const SRC = process.env.DESKGEON_SRC
  || [path.join(ROOT, '..', 'DeskmateExt'), path.join(ROOT, '..')].find(d => fs.existsSync(path.join(d, 'manifest.json')) && fs.existsSync(path.join(d, 'game.js')));
if (!SRC) throw new Error('게임 원본(manifest.json, game.js)을 찾지 못했어요. DESKGEON_SRC 환경변수로 경로를 지정해 주세요.');
const APP = path.join(ROOT, 'app');
const OVL = path.join(ROOT, 'overlay');
const rd = p => fs.readFileSync(p, 'utf8');
const wr = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };
const rm = p => fs.rmSync(p, { recursive: true, force: true });

const ver = JSON.parse(rd(path.join(SRC, 'manifest.json'))).version;

// 패치: 찾을 문자열이 정확히 한 번 있어야 함 (원본이 바뀌어 패치가 어긋나면 바로 알 수 있게)
function patch(src, find, repl, name) {
  const n = src.split(find).length - 1;
  if (n !== 1) throw new Error(`patch "${name}": expected 1 match, got ${n}`);
  return src.replace(find, repl);
}

// 1) 게임 코드 → app/game
rm(path.join(APP, 'game'));
for (const f of ['i18n.js', 'popup.css']) fs.cpSync(path.join(SRC, f), path.join(APP, 'game', f));
let gj = rd(path.join(SRC, 'game.js'));
// 앱인토스는 국내 서비스: 새 세이브의 기본 언어를 한국어로
gj = patch(gj, "autoSell: -1, lang: 'en',", "autoSell: -1, lang: 'ko',", 'new-save-ko');
gj = patch(gj, "/^[a-z]{2}$/.test(o.lang) ? o.lang : 'en';", "/^[a-z]{2}$/.test(o.lang) ? o.lang : 'ko';", 'fallback-ko');
wr(path.join(APP, 'game', 'game.js'), gj);
let pj = rd(path.join(SRC, 'popup.js'));
// 외부 링크 제거: 오늘의 던전 공유 문구에서 크롬 웹스토어 주소 빼기
pj = patch(pj, "\\n${t('dl.cta')} ${STORE_URL}`", '`', 'share-no-store-link');
// 오프라인 보고서를 광고 보상(2배)에서 쓸 수 있게
pj = patch(pj, 'function showReport(res) {', 'function showReport(res) {\n  window.__dgLastReport = res;', 'expose-report');
// 앱인토스 연동 코드에서 게임 상태에 접근할 수 있게
pj = patch(pj, 'window.__dmReady = true;', "window.__dmReady = true; window.__dgGame = { get S() { return S; }, save: () => save(S), render: () => { st = stats(S); render(); }, addLog, showReport, lang: () => getLang() };", 'expose-game');
// 앱인토스는 국내 서비스: 새 세이브의 기본 언어를 한국어로
pj = patch(pj, "setLang(S.lang || 'en');", "setLang(S.lang || 'ko');", 'default-lang-ko');
wr(path.join(APP, 'game', 'popup.js'), pj);

// 2) 정적 파일 → app/public
rm(path.join(APP, 'public'));
fs.cpSync(path.join(SRC, 'assets'), path.join(APP, 'public', 'assets'), { recursive: true });
fs.cpSync(path.join(SRC, 'boot.js'), path.join(APP, 'public', 'boot.js'));
for (const f of ['web-fit.js', 'web.css']) fs.cpSync(path.join(OVL, f), path.join(APP, 'public', f));
wr(path.join(APP, 'public', 'web-shim.js'), rd(path.join(OVL, 'web-shim.js')).replace('__VERSION__', ver));

// 3) index.html = popup.html + 앱인토스용 head
let h = rd(path.join(SRC, 'popup.html'));
h = patch(h, '<html lang="en">', '<html lang="ko">', 'lang');
h = patch(h, '<title>Deskgeon</title>', '<title>데스크던전</title>', 'title');
h = patch(h, '<meta charset="utf-8">', '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">', 'viewport');
h = patch(h, '<link rel="stylesheet" href="popup.css">', '<link rel="stylesheet" href="./game/popup.css">\n<link rel="stylesheet" href="./web.css">', 'css');
h = patch(h, '<script src="boot.js"></script>', '<script src="./web-shim.js"></script>\n<script src="./web-fit.js"></script>\n<script src="./boot.js"></script>', 'boot');
h = patch(h, '<script type="module" src="popup.js"></script>', '<script type="module" src="./src/toss.js"></script>', 'entry');
wr(path.join(APP, 'index.html'), h);

const count = d => fs.readdirSync(d, { recursive: true }).length;
console.log(`synced Deskgeon v${ver} -> app (game ${count(path.join(APP, 'game'))} files, public ${count(path.join(APP, 'public'))} entries)`);
