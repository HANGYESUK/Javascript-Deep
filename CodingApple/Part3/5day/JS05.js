// Map, Set 자료형
// 자료의 연관성을 표현하기 위해 사용
let map = new Map();
map.set('name', 'Kim');
console.log(map);

// 이상한 자료형도 오브젝트형태로 저장 가능
let map2 = new Map([
    ['name', 'Kim'],
    ['age', 26]
])


//for of 반복문
for (let key of map.keys()) {
    console.log(key);
}

// Set 자료형
// 중복데이터 제거 해줌
let chulsuk = ['jhon', 'tom', 'andy', 'tom'];

let chulsuk2 = new Set(chulsuk);

//데이터 추가 - 중복데이터면 추가 안함
chulsuk2.add('peter')
//데이터 제거
chulsuk2.delete('peter')
//데이터 확인 - boolean 형태로 출력
chulsuk2.has('peter')
//데이터 사이즈 
chulsuk2.size

//Set은 Array형태가 아님 - 변환 필요함
let result = [...chulsuk2];

