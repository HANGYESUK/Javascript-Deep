// Destructuring - Array나 Object 자료형에 있는 자료들을 변수에 할당하고 싶을때 사용
let arr = [1,2,3]


//Array - a = 1, b = 2 으로 할당
//default 설정 가능
let [a,b,c=3] = [1,2]



//Object - 변수명을 key명과 똑같이 써야함
//default 설정 가능
let obj = { name: 'Kim' };
let { name, age=24 } = {...obj}



//함수 파라미터에도 사용가능
let obj2 = { name: 'Kim', age: 26 }
let arr2 = [24, 26]

//props 처럼 받으면 파라미터로 오브젝트, 어레이 넣기 가능
function Func1({ name, age }) {
    console.log(name)
    console.log(age)
}

function Func2([age, age2]) {
    console.log(age)
    console.log(age2)
}

Func1(obj2)
Func2(arr2)


//문제 1
let [num, address] = [30, 'seoul'];
let { address: undefind, number=20 } = {address, number};

// undefind : seoul, address : seoul, number : 30, 

//문제 2
