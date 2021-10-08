// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다.
// 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
// 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
// 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
// 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
// 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

//for문 풀이

function solution(n, lost, reserve) {
  // 체육복을 잃어버린 학생 수를 뺀 값을 초기값으로 저장

  const losted = [...lost];
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);

  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    const student = lost[i];

    if (reserve.includes(student - 1)) {
      // 잃어버린 학생의 앞 번호를 reserve 배열에서 찾는다.
      reserve.splice(reserve.indexOf(student - 1), 1);
      answer++;
    } else if (reserve.includes(student + 1)) {
      // 잃어버린 학생의 뒷 번호를 reserve 배열에서 찾는다.
      reserve.splice(reserve.indexOf(student + 1), 1);
      answer++;
    }
  }

  return answer;
}

//map 풀이

function solution(n, lost, reserve) {
  // 체육복을 잃어버린 학생 수를 뺀 값을 초기값으로 저장

  const losted = [...lost];
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);

  let answer = n - lost.length;

  lost.forEach((student) => {
    //바로 앞에 있는 학생의 인덱스 값을 가져온다.
    //없다면 -1, 있다면 해당 학생의 인덱스 값 저장
    const prev = reserve.indexOf(student - 1);

    //바로 뒤에 있는 학생의 인덱스 값을 가져온다.
    const next = reserve.indexOf(student + 1);

    if (prev !== -1) {
      reserve.splice(prev, 1);
      answer++;
    } else if (next !== -1) {
      reserve.splice(next, 1);
      answer++;
    }
  });

  return answer;
}
