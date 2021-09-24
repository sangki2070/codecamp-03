// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// for문 풀ㅣ
function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

//map 풀이
function solution(a, b) {
  const answer = a
    .map((num) => {
      return num * b[i];
    })
    .reduce((el, cu) => {
      return el + cu;
    }, 0);
  return answer;
}

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// for 풀이
function solution(arr) {
  let answer = [];

  // 제일 작은수를 저장해주는 변수
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  arr.splice(arr.indexOf * min, 1);
  if (arr.length === 0) {
    return [-1];
  }

  return arr;
}

// Math min 풀이

function solution(arr) {
  const min = Math.min(...arr);

  //const min = Math.min.apply(null, arr)

  const result = arr.filter((num) => {
    return num > min;
  });

  return result.length === 0 ? [-1] : result;
}
