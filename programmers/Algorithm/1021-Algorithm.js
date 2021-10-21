// 카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
// 다음은 카카오 아이디의 규칙입니다.

// 아이디의 길이는 3자 이상 15자 이하여야 합니다.
// 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
// 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
// "네오"는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.
// 신규 유저가 입력한 아이디가 new_id 라고 한다면,

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
// 예를 들어, new_id 값이 "...!@BaT#*..y.abcdefghijklm" 라면, 위 7단계를 거치고 나면 new_id는 아래와 같이 변경됩니다.

// 1단계 대문자 'B'와 'T'가 소문자 'b'와 't'로 바뀌었습니다.
// "...!@BaT#*..y.abcdefghijklm" → "...!@bat#*..y.abcdefghijklm"

// 2단계 '!', '@', '#', '*' 문자가 제거되었습니다.
// "...!@bat#*..y.abcdefghijklm" → "...bat..y.abcdefghijklm"

// 3단계 '...'와 '..' 가 '.'로 바뀌었습니다.
// "...bat..y.abcdefghijklm" → ".bat.y.abcdefghijklm"

// 4단계 아이디의 처음에 위치한 '.'가 제거되었습니다.
// ".bat.y.abcdefghijklm" → "bat.y.abcdefghijklm"

// 5단계 아이디가 빈 문자열이 아니므로 변화가 없습니다.
// "bat.y.abcdefghijklm" → "bat.y.abcdefghijklm"

// 6단계 아이디의 길이가 16자 이상이므로, 처음 15자를 제외한 나머지 문자들이 제거되었습니다.
// "bat.y.abcdefghijklm" → "bat.y.abcdefghi"

// 7단계 아이디의 길이가 2자 이하가 아니므로 변화가 없습니다.
// "bat.y.abcdefghi" → "bat.y.abcdefghi"

// 따라서 신규 유저가 입력한 new_id가 "...!@BaT#*..y.abcdefghijklm"일 때, 네오의 프로그램이 추천하는 새로운 아이디는 "bat.y.abcdefghi" 입니다.

// [문제]
// 신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.

// [제한사항]
// new_id는 길이 1 이상 1,000 이하인 문자열입니다.
// new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
// new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.

const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  // 1단계 : 대문자를 -> 소문자로 치환
  new_id = new_id.toLowerCase();

  let result = "";
  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      result += new_id[i];
    }
  }

  // 3단계 : .가 연속으로 들어오면 .으로 치환 (.. => .)
  while (result.includes("..")) {
    result = result.replace("..", ".");
  }

  // 4단계 : .가 처음이나 끝에 위치한다면 제거
  if (result[0] === ".") {
    result = result.substr(1);
  }

  function removeLastDot() {
    if (result[result.length - 1] === ".") {
      result = result.slice(0, result.length - 1);
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열이라면 "a" 대입
  if (result === "") {
    result = "a";
  }

  // 6단계 : 문자열 길이가 16 이상이면 15의 길이값을 가지는 문자열로 치환 (= 15 길이까지 자른다)
  //        제거 후에, 마침표가 끝에 위치하면 제거
  if (result.length >= 16) {
    result = result.slice(0, 15);
    removeLastDot();
  }

  // 7단계 : 문자열 길이가 2자 이하라면, 마지막 글자를 3이 될때까지 반복해서 추가
  if (result.length <= 2) {
    result = result.padEnd(3, result[result.length - 1]);
  }

  return result;
}

///

const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  // 1단계 : 대문자를 -> 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
  let result = new_id.split("").filter((str) => filter.includes(str));

  // 3단계 : .가 연속으로 들어오면 .으로 치환 (.. => .)
  result = result.filter(
    (str, i) => (str === "." && result[i + 1] !== ".") || str !== "."
  );

  // 4단계 : .가 처음이나 끝에 위치한다면 제거
  if (result[0] === ".") {
    result.splice(0, 1);
  }

  function removeLastDot() {
    if (result[result.length - 1] === ".") {
      result.splice(result.length - 1, 1);
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열이라면 "a" 대입
  if (result.length === 0) {
    result = ["a"];
  }

  // 6단계 : 문자열 길이가 16 이상이면 15의 길이값을 가지는 문자열로 치환 (= 15 길이까지 자른다)
  //        제거 후에, 마침표가 끝에 위치하면 제거
  if (result.length >= 16) {
    result = result.slice(0, 15);
    removeLastDot();
  }

  // 7단계 : 문자열 길이가 2자 이하라면, 마지막 글자를 3이 될때까지 반복해서 추가
  if (result.length <= 2) {
    const add = new Array(3 - result.length).fill(result[result.length - 1]);
    result = result.concat(add);
  }

  return result.join("");
}
