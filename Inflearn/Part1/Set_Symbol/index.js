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


// Set자료구조 - 반복
let arpa = ['a','b','c','d','e']

for(let i=0; i<arpa.length; i++) {
    console.log(arpa[i])
}

//forEach문
arpa.forEach((item)=>{
    console.log(item)
})

// Set의 메서드 - keys(), values()
let testSet = new Set(["tiger", "lion", "dog", "cat"]);
// keys메서드 - Iterator(반복자) 객체 반환 -> next()메서드
const key_itr = testSet.keys(); 
// values메서드 - Iterator(반복자) 객체 반환 -> next()메서드
const val_itr = testSet.values(); 


//set을 배열로 바꿈
let arr3 = [...testSet]


// entries() 메서드 - 쌍으로 만듬
let testSet5 = new Set();

testSet5.add("홍길동");
testSet5.add("이순신");
testSet5.add("강감찬");

const entries = testSet5.entries();

for(let i of entries) {
    console.log(i); // ["홍길동", "홍길동"], ["이순신", "이순신"], ["강감찬", "강감찬"]
}



