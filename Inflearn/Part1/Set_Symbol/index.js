// ES6문법

// 새롭게 도입한 데이터 자료구조 - map, set
// map은 object와 비슷함(key, value)
// set은 중복을 허용하지 않음(array와 비슷함)
// lengh가 아니라 size

// set사용법
// 생성 - new, 추가 - add, 삭제 - delete
let arr = new Set();
arr.add(1,2,3);
arr.add(3,4,5);
console.log(arr);

// Spread 연산자 출력
// 생성 - ...객체, 이터러블 객체(요소를 하나씩 분리해서 전개)
// Deap copy - 주소만 참조하는게 아니라 새로운 객체 생성
let testArr = ['K', 'o','r','e','a']
let testArr2 = [...testArr]