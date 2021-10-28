// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
    let result = -1
    
    for(let i = 1; i*i <=n  ;i ++){
        if( i* i === n){
            //제ㅂ근을 찾은경우
            result = i + 1
            return result * result
        }
    }
    //제곱근을 찾지 못한경우
    return result
}

let num =1;
// 제곱된 값이 n 보다 작은 경우에만 반복문 실행
while(num * num<n){
    num++;
}
return num * num === n
    ? ( num + 1) * (num + 1)
    : -1




    let sqrt = Math.sqrt(n);
    if(number.isInteger(sqrt)){
        //제곱근일경우 true 반환
        sqrt += 1;
        return sqrt * sqrt
    } else {
        //제곱근이 아닐경우 false 반환
        return = -1
    }
}