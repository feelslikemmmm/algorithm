/*  문제) 객체를 입력받아 키, 값 쌍을 표현하는 문자열을 리턴해야 합니다. 각 문자열은 한 줄에 키: 값 형태로 구성되며, 각 문자열 끝에는 줄바꿈 문자가 포함되어야 합니다.
  입력) 인자1: obj(임의의 속성을 갖는 객체)
  출력) string 타입을 리턴해야 합니다.
  주의 사항) 콜론 다음에 공백을 포함해야 합니다. 각 문자열 끝에 줄바꿈 문자를 포함해야 합니다.
*/
function printObject(obj) {
  // TODO: 여기에 코드를 작성합니다.
  let result = '';
  for (let key in obj) {
    result = result + key + ': ' + obj[key] + '\n';
  }
  return result;
}
