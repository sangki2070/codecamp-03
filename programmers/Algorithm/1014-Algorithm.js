// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

function solution(d, budget) {
  const team = [];

  console.log(d);
  //신청한 예산들을 오름차순으로 정렬
  d.sort((a, b) => a - b);
  console.log(d);

  //부서들이 신청한 금액의 총 합
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    console.log(d[i], sum);
    if (sum <= budget) {
      team.push(d[i]);
    }
  }
  console.log(team);
  return team.length;
}

function solution(d, budget) {
  const result = d
    .sort((a, b) => a - b)
    .filter((price) => {
      // 총 예산에서 해당 지원금을 삭감
      budget -= price;
      console.log(budget, price);
      // 예산이 0 이상일 경우에만 return
      if (budget >= 0) {
        return price;
      }
    });
  return result.length;
}

//크레인문제

//반복문으로 풀기
function solution(board, moves) {
  let answer = 0;
  const bucket = [];
  //1. 크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    // console.log(moves[i])
    //2.크레인이 이동해서 뽑아 올 수 잇는 인형의 위치값을 구하는 반복문
    for (let l = 0; l < board.length; i++) {
      // console.log(moves[i],board[l],board[l][moves[i]-1])
      const doll = board[l][moves[i] - 1];
      //인형이 있는 칸이 빈칸이 아니라면
      if (doll !== 0) {
        //방금 뽑은 인형의 위치를 빈칸으로 만들어준다.
        board[l][moves[i] - 1] = 0;
        console.log(bucket, doll);
        //버켓에 넣으려고 하는 인형과 버켓의 맨 위의 인형이 동일한지 비교
        if (bucket[bucket.length - 1] === doll) {
          answer += 2;
          // bucket.pop();//배열의 맨 뒤에 있는 데이터 삭제
          bucket.splice(bucket.length - 1, 1);
          break;
        }
        //뽑은 인형 넣기
        bucket.push(doll);
        break;
      }
    }
  }
  // console.log(bucket)
  return answer;
}
//메서드로 풀기
function solution(board, moves) {
  let answer = 0;
  const bucket = [];
  //forEach와 for문은 다름.
  moves.forEach((move) => {
    // console.log(move)
    //반복문을 실행하지 않게 하는 변수 (=false일때만 forEach가 작동)
    let check = false;
    board.forEach((location) => {
      // console.log(location)
      // console.log(location[move-1])
      const doll = location[move - 1];
      if (check === false) {
        if (doll !== 0) {
          location[move - 1] = 0;
          if (bucket[bucket.length - 1] === doll) {
            bucket.splice(bucket.length - 1, 1);
            answer += 2;
          } else {
            bucket.push(doll);
          }
          check = true;
        }
      }
    });
  });
  // console.log(bucket)
  return answer;
}
