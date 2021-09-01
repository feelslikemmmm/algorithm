/*
  문제 : 배열과 요소를 입력받아 주어진 요소를 배열의 맨 앞에 추가하고 해당 배열을 리턴해야 합니다.
  입력 : 인자 1 : arr 임의의 요소를 갖는 배열 인자 2 : el 임의의 타입
  출력 : 기존 배열에 주어진 요소가 추가된 형태의 배열을 리턴해야 합니다.
  [el, arr[0], arr[1], ..., arr[n-1]] (n === arr.length)
  주의사항 : 반복문 사용은 금지됩니다
  새로운 배열을 선언 / 할당해서 리턴하지 않습니다.
  기존 배열에 주어진 요소가 추가된 상태(주소값 동일)로 리턴해야 합니다.
*/
function addToFront(arr, el) {
  // TODO: 여기에 코드를 작성합니다.
  arr.unshift(el);
  return arr;
}
