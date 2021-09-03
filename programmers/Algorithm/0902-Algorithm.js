// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.

// num은 1이상의 자연수가 들어옵니다.

// 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 모두 더한 값을 출력시켜주세요.


function sum(num) {
	let count = 0;
  for (let i = 1; i <= num; i = i + 1) {
		count = count + i;
  }
  
  console.log(count);
}



// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.

// 반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.


function countLetter(str){
    let count = 0

    for(let i = 0; i< str.length; i + 1){
        if(str[i] === 'a' || str[i] === 'A'){
            count = count +1
        }
    }
}

// num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다. 

// num이 3일 경우에는 "1-2-3"입니다.

function makeNumber(num){
    let str = ''
    for (let i =1; i <= num; i = i +1){
        str = str + i;

        if(i !== num) [
            str = str + '-'
        ]
    }
}


// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.

// num에 5일 경우에는 "135"입니다.

function makeOdd(num)

let str = ''

for(let i =1; let <= num; i +1){
    if(i %2 !== 0){
        str = str + 1
    }
}

// str은 무작위 숫자인 문자열입니다.  해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.

// 만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다.

function bigNum(str){

    let biggest = Number(str[0])
    for (let i =1; i < str.length; i = i +1){
        if(Number(str[i] > biggest)){
            biggest = Number(str[i])
        }
    }
}