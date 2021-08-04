/**
 *  문제) 두 개의 객체와 키를 입력받아 첫번째 객체의 키에 두번째 객체를 할당해야 합니다.
 *  입력) 인자1: obj (임의의 속성을 갖는 객체)
 * 인자2: property (string 타입의 키)
 * 인자3: obj2 (임의의 속성을 갖는 객체)
 * 출력) 별도의 리턴문(return statement)을 작성하지 않습니다.
 * 주의 사항) 이미 정의된 속성에 해당하는 키 값을 입력받은 경우, 입력받은 값을 덮어씁니다.
 **/

function addObjectProperty(obj1, property, obj2) {
  // 여기에 코드를 작성합니다
  obj1[property] = obj2;
}
