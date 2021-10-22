// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

const [leftNumbers, rightNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
];
function solution(numbers, hand) {
  let answer = "";

  // 현재 손가락의 위치를 저장
  const current = {
    left: 10,
    right: 12,
  };

  for (let i = 0; i < numbers.length; i++) {
    if (leftNumbers.includes(numbers[i])) {
      // 누를 번호가 왼쪽 키패드에 해당되는 경우 ( = 왼쪽 손가락으로 누를 경우 )
      answer += "L";
      current["left"] = numbers[i]; // 왼쪽 손가락 위치 변환
    } else if (rightNumbers.includes(numbers[i])) {
      // 누를 번호가 오른쪽 키패드에 해당되는 경우 ( = 오른쪽 손가락으로 누를 경우 )
      answer += "R";
      current["right"] = numbers[i]; // 오른쪽 손가락 위치 변환
    } else {
      // 가운데 번호를 누를 때
      const tempObj = { ...current };

      for (let hand in tempObj) {
        // 0번을 누를 때는 예외 처리 : 11 거리값으로 변환
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        let location = Math.abs(numbers[i] - tempObj[hand]);

        if (location >= 3) {
          location = Math.trunc(location / 3) + (location % 3);
        }
        tempObj[hand] = location;
      }

      if (tempObj["left"] === tempObj["right"]) {
        // 왼손가락과 오른손가락의 위치가 서로 동일할 경우
        // 주로 사용하는 손가락으로 키패트를 누른다.

        answer += hand === "left" ? "L" : "R";
        current[hand] = numbers[i];
      } else {
        if (tempObj["left"] > tempObj["right"]) {
          // 오른쪽 손가락 위치가 더 가까운 경우
          answer += "R";
          current["right"] = numbers[i];
        } else {
          // 왼쪽 손가락 위치가 더 가까운 경우
          answer += "L";
          current["left"] = numbers[i];
        }
      }
    }
  }

  return answer;
}
