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
fs.cpSync(path.join(SRC, 'popup.css'), path.join(APP, 'game', 'popup.css'));
// 도움말의 '크롬 동기화·구글 드라이브' 안내를 뺀다 (앱인토스는 토스 로그인 외 로그인 수단 금지)
let ij = rd(path.join(SRC, 'i18n.js'));
ij = patch(ij, 'Saves sync through Chrome Sync, or connect Google Drive in Settings. Save codes and automatic backups are there too.', 'Your progress is saved automatically on this device. Save codes and automatic backups are in Settings.', 'help-save-en');
ij = patch(ij, '세이브는 크롬 동기화로 저장되고, 환경설정에서 구글 드라이브를 연결할 수도 있어요. 세이브 코드와 자동 백업도 거기 있어요.', '진행 상황은 이 기기에 자동으로 저장돼요. 세이브 코드와 자동 백업은 환경설정에 있어요.', 'help-save-ko');
ij = patch(ij, 'セーブはChrome同期、設定でGoogleドライブ連携も可能。セーブコードと自動バックアップもそこに。', '進行はこの端末に自動保存。セーブコードと自動バックアップは設定に。', 'help-save-ja');
ij = patch(ij, '存档通过Chrome同步保存，也可在设置中连接Google云端硬盘，存档码和自动备份也在那里。', '进度会自动保存在本设备上，存档码和自动备份在设置中。', 'help-save-zh');
// 구글 드라이브·구글 로그인·브라우저 동기화 문구를 번들에서 완전히 비운다 (토스 로그인 외 로그인 수단 금지 → 문구 자체가 남지 않게)
for (const k of ['ui.drive', 'ui.driveLink', 'ui.drvUnsupported', 'ui.drvErr', 'ui.drvOk', 'ui.unlinked', 'ui.driveDone', 'ui.r.drive', 'ui.driveNewer', 'ui.r.drivePre', 'ui.drvWait', 'ui.browserSync']) {
  const re = new RegExp('("' + k.replace(/\./g, '\\.') + '":")((?:[^"\\\\]|\\\\.)*)(")', 'g');
  if (!re.test(ij)) throw new Error('i18n key not found: ' + k);
  ij = ij.replace(re, '$1$3');
}
// 게임이 뜨기 전(로딩·오류 화면) 문구도 한국어로
ij = patch(ij, "let cur = 'en';", "let cur = 'ko';", 'i18n-default-ko');
wr(path.join(APP, 'game', 'i18n.js'), ij);
let gj = rd(path.join(SRC, 'game.js'));
// 앱인토스는 국내 서비스: 새 세이브의 기본 언어를 한국어로
gj = patch(gj, "autoSell: -1, lang: 'en',", "autoSell: -1, lang: 'ko',", 'new-save-ko');
gj = patch(gj, "/^[a-z]{2}$/.test(o.lang) ? o.lang : 'en';", "/^[a-z]{2}$/.test(o.lang) ? o.lang : 'ko';", 'fallback-ko');
// 구글 OAuth 클라이언트 ID·로그인/드라이브 주소를 번들에서 완전히 없앤다 (앱인토스는 토스 로그인 외 로그인 수단 금지)
// 앱인토스 웹뷰에는 chrome.identity 가 없어서 이 코드는 어차피 실행되지 않지만, 번들에 문자열이 남지 않게 비운다.
gj = gj.replace(/Google sign-in not supported/g, 'Sign-in not supported');
gj = gj.replace(/browser sync \(Drive\/local OK\)/g, 'local OK').replace(/Drive error /g, 'Sync error ').replace(/Unexpected Drive response/g, 'Unexpected response');
gj = gj.replace(/(['"`])[\w-]+\.apps\.googleusercontent\.com\1/g, "''");
gj = gj.replace(/(['"`])https:\/\/(?:www\.|oauth2\.|accounts\.)?google(?:apis)?\.com[^'"`]*\1/g, "''");
if (/google/i.test(gj.replace(/\/\/.*$/gm, ''))) { const m = gj.match(/.{0,50}google.{0,50}/i); console.warn('game.js: google 문자열이 남아 있어요 →', m && m[0]); }
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
// 기존 세이브도 한국어로: 앱인토스 안에서 직접 언어를 바꾼 적이 없으면 항상 한국어로 시작 (크롬 확장 세이브 코드를 가져와도)
pj = patch(pj, "setLang(S.lang || 'ko');", "if (!localStorage.getItem('dg.t.langPicked')) S.lang = 'ko'; setLang(S.lang || 'ko');", 'force-ko-unless-picked');
pj = patch(pj, "S.lang = setLang(l); save(S, 'force');", "S.lang = setLang(l); try { localStorage.setItem('dg.t.langPicked', '1'); } catch (e) {} save(S, 'force');", 'remember-lang-pick');
pj = pj.replace(/(['"`])https:\/\/chromewebstore\.google\.com[^'"`]*\1/g, "''");
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
h = patch(h, '>Google Drive</div>', '></div>', 'html-drive');
h = patch(h, '>Connect Google</button>', '></button>', 'html-drive-btn');
h = patch(h, '>Browser sync</div>', '></div>', 'html-browsersync');
wr(path.join(APP, 'index.html'), h);

const count = d => fs.readdirSync(d, { recursive: true }).length;
console.log(`synced Deskgeon v${ver} -> app (game ${count(path.join(APP, 'game'))} files, public ${count(path.join(APP, 'public'))} entries)`);




