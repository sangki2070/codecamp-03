// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아
// 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // 서로다른 인덱스 값을 더해서 저장하는 상수
      const sum = numbers[i] + numbers[j];
      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

numbers.forEach((num1, i) => {
  numbers.slice(i + 1, numbers.length).forEach((num2) => {
    const sum = num1 + num2;

    if (answer.includes(sum) === false) {
      answer.push(sum);
    }
  });
});
return answer.sort((a, b) => a - b);
