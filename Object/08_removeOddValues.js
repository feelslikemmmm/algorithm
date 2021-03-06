/**
 * 문제) 객체를 입력받아 홀수를 값으로 갖는 속성을 모두 제거해야 합니다.
 * 입력) 인자1: obj (임의의 속성을 갖는 객체)
 * 출력) 별도의 리턴문(return statement)을 작성하지 않습니다.
 * 주의 사항)  홀수 판단은 number 타입에만 적용합니다.
 **/

function removeOddValues(obj) {
  // TODO: 여기에 코드를 작성합니다.
  for (let property in obj) {
    if (typeof obj[property] == 'number' && obj[property] % 2 !== 0) {
      delete obj[property];
    }
  }
}
