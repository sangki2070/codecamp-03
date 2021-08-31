//주어진 변수 fruits에 "사과", "바나나", "파인애플"을 담아주세요.

const fruits2 = []

fruits2.push("사과")
fruits2.push("바나나")
fruits2.push("파인애플")


// 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.

let newFruits = []

let fruits = ["사과","바나나","파인애플"]

console.log(fruits)
let newFruits = fruits.pop()
console.log(newFruits)


// ==============================
let fruits = ["사과", "바나나", "파인애플"]

let newFruits = []

const lastData = fruits[ fruits.length -1 ]

newFruits.push(lastData)



// 학생들의 이름이 담긴 students 배열이 있습니다.
// 배열에서 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.

let newArr = students.splice(0,3)
console.log(newArr)

// 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.

fruits[0] = "맛있는 사과"

fruits[1] = "맛있는 바나나"

console.log(fruits)


// 상수 number는 핸드폰 번호가 담긴 문자열입니다. 

// 해당 문자열을 "010", "1234", "5678"로 나눈 배열을 만드세요.

const number = "01012345678"
