/**
 * 문제) 객체와 키를 입력받아 키에 해당하는 값을 true로 설정해야 합니다.
 * 입력) 인자1: obj (임의의 속성을 갖는 객체)
 * 출력) 별도의 리턴문(return statement)을 작성하지 않습니다.
 * 주의 사항) 함수에 명시적인 리턴문이 없을 경우, 함수의 리턴값은 어떻게 되는지 확인해 봅니다.
 **/

function addProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  return (obj[property] = true);
}
