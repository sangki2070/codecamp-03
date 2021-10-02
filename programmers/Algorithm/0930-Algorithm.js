// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

function solution(participant, completion) {
  let answer = "";
  //문자열을 오름차순으로 정렬
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

//forEach

function solution(participant, completion) {
  let answer = "";
  //문자열을 오름차순으로 정렬
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  // 최초로 false 값을 할당하고,
  // 합격자가 아닌 참가자를 찾았을 때에 true 값으로 변환
  let stop = false;
  participant.forEach((name, i) => {
    // stop이 false 일 때만 아래의 조건을 실행
    if (name !== completion[i] && stop === false) {
      answer = name;
      stop = true;
    }
  });
  return answer;
}

// filter 풀이

function solution(participant, completion) {
  //문자열을 오름차순으로 정렬
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}