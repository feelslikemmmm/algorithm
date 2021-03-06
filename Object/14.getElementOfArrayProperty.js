/* 
  문제) 객체, 키, 수를 입력받아 주어진 키에 해당하는 값이 배열인 경우, 수가 가르키는 인덱스에 해당하는 요소를 리턴해야 합니다.
  입력) 인자1: obj(임의의 속성을 갖는 객체), 인자2: key (string 타입의 키), 인자3: index(number 타입의 인덱스)
  출력) 배열의 요소를 리턴해야 합니다.
  주의 사항) 주어진 키에 해당하는 값이 배열이고, 주어진 수가 배열의 범위를 벗어나지 않는 경우에만 배열의 요소를 리턴해야 합니다.
  그 외의 경우, undefined를 리턴해야 합니다.
*/
function getElementOfArrayProperty(obj, key, index) {
  let maybeArr = obj[key];
  // TODO: 여기에 코드를 작성합니다.
  if (Array.isArray(maybeArr) === false) {
    return undefined;
  }
  return maybeArr[index];
}
