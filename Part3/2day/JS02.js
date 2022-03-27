// Reference data type - Array, Object는 변수에 값을 저장 안하고 reference를 저장함
// 그냥 문자와 숫자는 Primitive data type - 변수에 값이 그대로 저장
let num = 1234;
let string = '1234';

// Array, Object는 reference를 저장 - 값이 저장된 메로리 주소 저장
let arr = [1,2,3,4] 
let obj = { name : 'kim' }



// 파라미터와 레퍼런스데이터
let name1 = { name: 'park' };

function change(obj) {
    obj = { name: 'kim' }
}

// 파라미터는 change(var obj = name1)이랑 같음
change(name1)




//constructor - 생성자
// 오브젝트 형태가 리턴됨
function Func1() {
    this.name = 'kim',
    this.age = 26
}

let std1 = new Func1()



let std2 = new Func1();

std2.sayHi = ()=>{
    console.log("안녕하세요" + this.name)
}

std2.sayHi()



