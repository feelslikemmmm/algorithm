/*
  문제) 수와 객체를 입력받아 입력받은 수보다 큰 수를 갖는 속성을 모두 제거해야 합니다.
  입력) 인자1: num(number 타입의 수), 인자2: obj(임의의 속성을 갖는 객체)
  출력) 별도의 리턴문(return statement)을 작성하지 않습니다.
  주의 사항) 대소 비교는 number 타입에만 적용합니다.
*/
function removeNumbersLargerThan(num, obj) {
  // TODO: 여기에 코드를 작성합니다.
  for (let property in obj) {
    if (typeof obj[property] == 'number' && obj[property] > num) {
      delete obj[property];
    }
  }
}
