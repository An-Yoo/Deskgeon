// 광고 그룹 ID (앱인토스 콘솔 > 수익화 > 인앱 광고 > 광고 그룹 상세의 '광고 그룹 ID')
// 비워 두면 해당 광고 버튼이 나타나지 않는다. 개발 중에는 테스트 ID 'ait-ad-test-rewarded-id' 를 쓸 수 있다.
export const AD_GROUPS = {
  double: 'ait.v2.live.d2de236b08c047d6',   // 오프라인보상_골드2배_리워드
  boost: 'ait.v2.live.3632e7d4bcb04d58',    // 설정_부스트충전_리워드
  warp: 'ait.v2.live.480231ec192c400b',     // 시간가속_6시간_리워드
  supply: 'ait.v2.live.07a32eab59414e30',   // 도전보급_탑3종_균열열쇠_리워드
};
// 하루 최대 횟수 (반복 시청으로 광고 단가가 떨어지는 것 방지). 광고 제거권 구매자도 동일하게 적용
export const DAILY_CAP = { double: 99, boost: 3, warp: 2, supply: 2 };
// 시간 가속 1회당 진행 시간 (오프라인 효율 적용)
export const WARP_HOURS = 6;
// 광고 제거권 (비소모품) — 콘솔 > 수익화 > 인앱 결제에서 상품 등록 후 sku 입력. 비워 두면 구매 버튼이 숨겨진다.
export const IAP_SKU_ADFREE = '';
export const ADFREE_PRICE_LABEL = '1,100원';