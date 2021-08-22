/*
  문제) 입의의 값을 입력받아 타입을 리턴해야 합니다.
  입력) 인자1 : anything (임의의 값)
  출력) string 타입를 리턴해야 합니다.
  주의 사항) 자바스크립트에서 array, null 타입은 존재하지 않지만, 이 둘을 구분하여 출력합니다.
*/
function getType(anything) {
  // TODO: 여기에 코드를 작성합니다.
  if (Array.isArray(anything)) {
    return 'array';
  } else if (anything === null) {
    return 'null';
  } else {
    return typeof anything;
  }
}
