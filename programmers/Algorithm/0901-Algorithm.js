// input1, input2에는 boolean 타입인 true, false가 입력됩니다.

// 둘 중에 하나라도 true라면 "true"

// 두 개 모두 false면 "false"라는 문구를 띄워주세요.

function boolean(input1, input2) {

	if(input1 || input2 === true) {
		console.log("true")
	} else
		console.log("false")
}

// 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다. 

// 입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요.

function evenOdd(num){
	if (num === 0) {
		console.log("Zero");
	} else if (num%2 == 0) {
		console.log("Even");
	} else if (num%2 == 1) {
		console.log("odd");
	}
}


// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.

// 입력된 값에 따라 알맞은 문구를 띄워주세요

// 18이하면 "조금 춥네요"

// 19~23이면 "날씨가 좋네요"

// 24이상이면 "조금 덥습니다"

function temperature(num){
	if (num <= 18) {
		console.log("조금 춥네요");
	} else if (num <= 23) {
		console.log("날씨가 좋네요");
	} else {
		console.log("조금 덥습니다.");
	}
}

// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.

// 각 조건에 해당하는 알맞은 값을 입력해주세요.


function days(month){
	if (month === 2) {
		console.log(month + "월 : 28일");
	} else if (month <= 7 && month%2 == 1){
		console.log(month + "월 : 31일");
	} else if (month <= 7 && month%2 == 0){
		console.log(month + "월 : 30일");
    } else if (month === 8){
		console.log(month + "월 :31일");
	} else if (month <= 12 && month%2 ==1){
		console.log(month + "월 : 31일");
	} else if (month <=12 && month%2 ==0){
		console.log(month + "월 : 30일");
    }
}





