// prototype - 유전자라고 생각하면 편함
function Func1(name) {
    this.name = name;
    this.age = 25;
    this.sayhi = function() {
        console.log(`안녕하세요 ${this.name}님`)
    }
}

//prototype으로 추가하면 상속받은 변수에서도 사용가능
Func1.prototype.gender = '남자'

// std1에서도 gender 사용가능
// JS에서 오브젝트 자료형 읽을때 순서 - 변수(없으면 다음단계) => 부모.prototype(없으면 다음부모) => 출력
let std1 = new Func1('park')
console.log(std1.gender)



// .__proto__ - 유전자 검사(바로 위 부모의 프로토타입 출력)
// prototype만 상속받기 - 변수.__proto__ 
let parent = { name: 'Kim' };
let childe = {};

childe.__propto__ = parent;




//문제 1
function Con1(name, age) {
    this.name = name;
    this.age = age;
    let sayHi = ()=>{
        console.log(`안녕 나는 ${this.name} 이야`)
    }
}

var 학생1 = new Con1('kim', 20) 
var 학생2 = new Con1('Park', 21) 
var 학생3 = new Con1('Lee', 22)


//문제2
function Parent(){
    this.name = 'Kim';
}
var a = new Parent();

a.__proto__.name = 'Park';
console.log(a.name)
// 정답 - Kim (a는 이미 name이라는 데이터를 가지고 있어 'Kim'이 출력되고 Parent의 데이터는 'Park'으로 바뀐것)

//문제3
function Student(이름, 나이){
    this.name = 이름;
    this.age = 나이;
}

Student.prototype.sayHi = () => {
    console.log('안녕 나는 ' + this.name + '이야');
}

var 학생1 = new Student('Kim', 20);

학생1.sayHi(); //왜 이 코드가 제대로 안나오죠?

//정답 - Arrow function사용해서 this값이 window로 출력 되어서



//문제3

var arr = [1,2,3];
arr.remove3();

console.log(arr); //[1,2]

//정답  Array.prototype.remove3 = function (){} 
//어레이나 오브젝트를 생성할때는 new Array(데이터)같은 형식으로 출력됨 - 함수에 파라미터로 데이터를 넣어 생성
//생성 함수 프로토타입으로 추가하면 바로 사용가능