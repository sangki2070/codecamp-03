// 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
// 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

//내풀이

function solution(dartResult) {
    let answer = 0;
    
    let result1 = dartResult.split("")
    for(let i = 0; i < result1.length; i ++){
        if(result1[i] === "s"){
            answer = answer + result1[i-1]
        }
        if(result1[i] === "D"){
            
        }
        if(result1[i] === "T"){
            
        }
    }


//for
const bonus = [ "S" , "D" , "T" ]; // 보너스를 판단하기 위해서 배열에 저장
const option = [ "*" , "#" ] // 옵션을 판단하기 위해서 배열에 저장

function solution(dartResult) {
    const answer = [  ]
    let score = '' // 점수를 뽑아서 저장
    for(let i=0; i<dartResult.length; i++) {
        // console.log(isNaN(Number(dartResult[i])) , dartResult[i])
        if(!isNaN(Number(dartResult[i]))) { 
            // element가 숫자일때
            // console.log(dartResult[i])
            score += dartResult[i]
        } 
        
        else { 
            // element가 문자일때
            if(bonus.includes(dartResult[i])) {
                // dart의 보너스에 의해서 점수가 바뀜
                score = Number(score)
                if( dartResult[i] === "D" ) {
                    score = Math.pow(score,2)
                }
                else if( dartResult[i] === "T" ) {
                    score = Math.pow(score,3)
                }
                
                // element중에서 bonus중의 하나라도 값이 있으면 true(보너스인 경우)
                answer.push(score)
                score = ""
            } else if(option.includes(dartResult[i])) {
                // option 배열중에 하나라도 나왔을때
                // console.log(dartResult[i])
                if(dartResult[i] === "#") {
                    // 아차상인 경우 해당 점수 * -1
                    answer[answer.length-1] *= -1
                } else if (dartResult[i] === "*") {
                    // 스타상인 경우 해당 점수 * 2
                    answer[answer.length-1] *= 2
                    
                    if(answer.length > 1) {
                        // 앞에 데이터가 있으므로 앞에 데이터까지 곱하기 2
                        answer[answer.length-2] *= 2
                    }
                }
            }
        }
    }
    return answer.reduce((acc,cur)=>acc+cur)    
}