// Spread Operator - Deep copy 해줌
// 중괄호, 대괄호, 소괄호 안에서만 사용가능
// 그외 밖에서 사용하면 오류

let arr = ['hello', 'world']
let hi = 'hello'
let obj = { a: 1, b: 2, c:3 }

let objCopy = { ...obj }

// 괄호 제거
console.log("arr : ", ...arr)
console.log("hi : ", ...hi)
console.log("objCopy : ", objCopy)

// 배열 합치기 - 대괄호 제거하고 합치기
let a = [1,2,3]
let b = [4, 5]

let c = [...a, ...b]
console.log("c : ", c)

// 기존걸 대입하면 값을 공유함 
let arr2 = [1,2,3]
let copy = arr2
// Deep copy는 값을 공유하지 않음
let deepCopy = [...arr2]

arr2[3] = 4

console.log(arr2)
console.log(copy)
console.log(deepCopy)

// Object 에서 활용 - 오브젝트에서는 값이 중복되면 마지막에 할당된 값으로 저장 
let o1 = {a: 1, b: 2, c: 3};
let o2 = {...o1, a: 2}

console.log(o2)


// 함수 파라미터에 넣을때
function plus(a, b, c) {
    console.log(a + b + c)
}

let arr3 = [10, 20, 30]

plus(...arr3)

// apply, call 함수 - Spread Operator 나오기 전에 사용
// 차이점 - apply는 파라미터를 array형태로 집어넣을수 있음
let person = {
    hi : function() {
        console.log("안녕")
    }
}

let person2 = {
    name : "손흥민"
}

person.hi.apply(person2);
person.hi.call(person2);