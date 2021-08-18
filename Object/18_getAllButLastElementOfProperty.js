/*    
  문제) 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소가 제거된 새로운 배열을 리턴해야 합니다.
  입력) 인자1: obj (임의의 객체), 인자2: key (string 타입의 키)
  출력) 배열을 리턴해야 합니다.
  주의 사항) 주어진 키에 해당하는 값이 배열이고, 빈 배열이 아닌 경우에만 마지막 요소가 제거된 배열을 리턴해야 합니다.
  그 외의 경우, 빈 배열을 리턴해야 합니다.
  입력받은 객체를 수정하지 않아야 합니다.
*/
function getAllButLastElementOfProperty(obj, key) {
  // TODO: 여기에 코드를 작성합니다.
  let prop = obj[key];
  if (!Array.isArray(prop) || prop.length === 0) {
    return [];
  }
  return prop.slice(0, -1);
}
