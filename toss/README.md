# Deskgeon 앱인토스 버전 (데스크던전, intoss://deskgeon)

게임 원본은 크롬 확장 코드(이 저장소의 루트, 로컬 PC에서는 `..\DeskmateExt`)이고, 이 폴더는 그걸 복사·패치해서 앱인토스 미니앱으로 만드는 프로젝트예요.

## 구조
- `sync.mjs` : 원본 → `app/` 복사 + 앱인토스용 패치 (원본 파일은 건드리지 않음)
  - 원본 위치: 환경변수 `DESKGEON_SRC` > `../DeskmateExt` > `..`(저장소 루트) 순서로 찾음
  - 공유 문구의 크롬 웹스토어 링크 제거 (외부 링크 금지 정책)
  - 새 세이브 기본 언어 한국어
  - `window.__dgGame`, `window.__dgLastReport` 노출 (광고 보상용)
- `overlay/` : 앱인토스 전용 web-shim(사용자별 세이브 분리), web-fit(Safe Area 맞춤), web.css
- `app/src/toss.js` : SDK 연동 (getUserKeyForGame, Storage 백업, 뒤로가기, Safe Area)
- `app/src/rewards.js` : 보상형 광고 4종 + 광고 제거권(인앱결제)
- `app/src/ads.config.js` : 광고 그룹 ID, 일일 횟수, 광고 제거권 SKU(`IAP_SKU_ADFREE`, 비우면 구매 버튼 숨김)
- `app/src/promo.js`, `promo.config.js` : 미션 프로모션(첫 직업 선택 시 토스 포인트 10원, `code` 비우면 꺼짐)
- 자동 생성(저장소에 안 올림): `app/game/`, `app/public/`, `app/index.html`, `app/dist/`, `app/deskgeon.ait`, `node_modules/`

## 다른 PC에서 빌드하기
필요: Node.js 20 이상, git
```
git clone https://github.com/An-Yoo/Deskgeon.git
cd Deskgeon/toss
node sync.mjs            # 저장소 루트의 게임 코드 → app/
cd app
npm ci                   # 처음 한 번
npm run build            # vite build + ait build → app/deskgeon.ait
```
만들어진 `app/deskgeon.ait`를 앱인토스 콘솔(앱 출시 → 버전 등록하기)에 올리면 돼요.

## 출시 전 남은 것
1. 토스앱 QR 테스트 (콘솔 → 앱 출시 → 테스트)
2. 게임 등급분류 탭: 원스토어 스토어 링크만 남음 (GRAC ONIA-SG-261006-0006, 전체이용가, 폭력성·공포 입력 완료)
3. 광고 제거권 상품 등록 → `IAP_SKU_ADFREE`에 SKU 넣고 재빌드
4. 미션 프로모션 등록(비즈월렛 충전 필요) → `promo.config.js`의 `code` 입력, 검수 후 `test: false`