/*
문제 : 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.
입력 : 인자 1 : num number 타입의 정수 (num >= 0) 인자 2 : arr 임의의 요소를 갖는 배열
출력 : 순차적으로 num 개의 요소로 구성된 배열을 리턴해야 합니다.
주의사항 : 함수는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
num과 arr.length 중 최대값만큼 저장합니다.
*/
function take(num, arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (num === 0 || arr.length === 0) {
    return [];
  }

  let head = arr[0];
  let arrTo = arr.slice(1);

  return [head].concat(take(num - 1, arrTo));
}
