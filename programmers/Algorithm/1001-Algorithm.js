// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

//for

const answerTable = [
  //1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  //2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  //3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        score[l]++;
      }
    }
  }
  const biggest = Math.max(...score);
  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (biggest === score[i]) result.push(i + 1);
  }
  return result;
}

// map

const answerTable = [
  //1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  //2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  //3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const scoreList = [
    { student: 1, score: 0 },
    { student: 2, score: 0 },
    { student: 3, score: 0 },
  ];

  answers.forEach((el, i) => {
    answerTable.forEach((cu, l) => {
      if (cu[i % cu.length] === el) {
        scoreList[l].score += 1;
      }
    });
  });
  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score;
    })
  );
  const result = scoreList.filter((num) => {
    return biggest === num.score;
  });

  return result.map((el) => el.student);
}
