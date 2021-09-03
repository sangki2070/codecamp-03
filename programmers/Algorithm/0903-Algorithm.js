// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.

// 100~90 → "A"

// 89~80 → "B"

// 79~70 → "C"

// 69~60 → "D"

// 59점 이하는 "F"

// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

function grade(scroe){

    let result = ""
    
    if(score < 0 || score > 100){
        result = "잘못된 점수 입니다."
    }
    
    if(score <= 100 && score >= 90){
        result = "A"
    } else if (score < 90 && score >= 80){

        result = "B"
    } else if (score < 80 && score <= 70){

        result = "C"
    } else if (score < 70 && score <= 60){

        result = "D"
    } else {
        result = "F"
    }
    console.log(result)
}



// 오른쪽 fruits 과일의 인기 순위를 나타내고 있습니다.

// 현재 10위까지 정보를 담고 있지만,

// 3위까지 나타내어 "현재 인기 "0" 위 과일은 "000" 입니다. 라는 문구를 나타내고 싶습니다.

function search(num){

    let count = 0

    for( i =0; i <= num; i = i +1){

    count = count + i
    console.log("현재" + fruits[i].number + "위 과일은" + fruits[i].title + "입니다.")
    
    }
}

// 오른쪽 myShooping은 내가 구매한 목록을 보여주고 있습니다.

// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 

// "의류"를 구매한 횟수에 따라 등급을 나타내세요.

for( let i = 0; i < myShopping.length; i = i + 1 ) {
    if(myShopping[i].category === '의류') {
        count = count + 1;
        price = price + myShopping[i].price;

        if( count >= 0 && count <= 2 ) {
            // bronze
            grade = 'bronze';

        } else if( count >= 3 && count <= 4 ) {
            // sliver;
            grade = 'sliver';

        } else if( count >= 5 ) {
            grade = 'gold';
        }
    }

    console.log('의류를 구매한 횟수는 총' + count '회 금액은' + price + '원이며 등급은' + grade + '입니다.')
}