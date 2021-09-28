// 2016년 1월 1일은 금요일입니다.
// 2016년 a월 b일은 무슨 요일일까요?
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.
// 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 내가푼풀이

function solution(a, b) {
  let answer = 0;
  // let day = [SUN, MON, TUE, WED, THU, FRI, SAT]
  let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  if (a === 1 || a === 3 || a === 5 || a === 8 || a === 10 || a === 12) {
    answer = (a * 31 + b) % 7;
  } else if (a === 4 || a === 6 || a === 7 || a === 9 || a === 11) {
    answer = (a * 30 + b) % 7;
  } else if (a === 2) {
    answer = (29 + b) % 7;
  }

  return day[answer];
}

// for 문 풀이

function solution(a, b) {
  let answer = "";
  //총 일수를 저장하는 변수
  let days = 0;

  const month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  for (let i = 1; i < a; i++) {
    days += month[i];
  }
  days += b - 1;

  answer = week[days % 7];

  return answer;
}

// recuce

const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  const days = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return (
      acc +
      (mn !== a
        ? // 이전 월수일 경우
          month[mn]
        : // 해당 월수일 경우 (=a 와 동일한 월수)
          b - 1)
    );
  }, 0);
  return week[days % 7];
}

// new date 풀이

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const days = new Date(2016, a - 1, b).getDay();
  return week[days];
}
