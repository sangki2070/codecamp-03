// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 나의풀이
function solution(x) {
  let answer = true;

  let number = String(x).split("");

  for (let i = 0; i < x.length; i++) {
    if (x % (number[i] + number[i + 1]) === 0) {
      answer = true;
    } else if (x % (number[i] + number[i + 1] !== 0)) {
      answer = false;
    }
  }
  return answer;
}

// for 문 풀이

function solution(x) {
  let answer = true;
  // 숫자를 문자열 형태로 변환
  x = x.toString();

  // 총 합을 담아주는 변수
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    // 다시 숫자타입으로 변환
    sum += Number(x[i]);
  }

  return x % sum === 0 ? true : false;
}

//forEach 풀이

function solution(x) {
  let sum = 0;
  x.toString()
    .split("")
    .forEach((num) => {
      sum += Number(num);
    });

  return x % sum === 0 ? true : false;
}

// reduce 사용

function solution(x) {
  let sum = x
    .toString()
    .split("")
    .reduce((el, cu) => {
      return Number(el) + Number(cu);
    });
  return x % sum === 0 ? true : false;
}
