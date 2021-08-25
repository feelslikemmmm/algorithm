/*
  문제) 배열과 수를 입력받아 수가 인덱스로 가리키는 배열의 요소를 리턴해야 합니다.
  입력) 인자1 : arr 임의의 요소를 갖는 배열 (arr.length >= 0) 인자2: index(number 타입의 index(0이상의 정수))
  출력) 배열의 요소를 리턴해야 합니다.
  주의 사항) 빈 배열을 입력받은 경우, undefined를 리턴해야 합니다.
  배열의 길이를 벗어나는 수를 입력받은 경우, 'out of index range'를 리턴해야 합니다.
*/
function getNthElement(arr, index) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length - 1 < index) {
    return 'out of index range';
  } else {
    return arr[index];
  }
}
