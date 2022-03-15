// var, let, const

// 재선언, 재할당, 범위:function
var name = 'Kim';
var name = 'Han';

// 재할당, 범위:{}
let name = 'Han';
//재선언 안됨
let name = 'Kim';

// 범위:{}
const age = 23;
//재선언 안됨
const age = 24;
//할당도 안됨
age = 25;



// Hoisting - 변수나 함수를 만나면 선언부분을 강제로 맨위로 끌어올림

//컴퓨터가 JS 읽는법 - 선언, 할당 분리해서 읽음
var number;
number = 1; 

function Func() {

}

//문제 1 - "문제1 : Hello" 출력
Func1();
function Func1() {
    console.log("문제1 : ", Hi1);
    let Hi1 = "Hello";
}

//문제 2 - "Func2는 함수가 아니디" 출력오류
Func2();
var Func2 = function() {
    console.log("문제2 : ",Hi2);
    var Hi2 = "Hello";
}

//문제 3
let a3 = 1;
var Func3 = function() {
    a3 = 2;
}
console.log("문제3 : ", a)

//문제4
let a4 = 1;
var b4 = 2;
window.a4 = 3;
window.b4 = 4;

console.log(a4 + b4)


// Template literals

//backtick - 엔터키 가능, 중간중간 변수넣기 쉬움
let title = "손흥민"
console.log(`안녕하세요 ${title} 입니다.`)

let tamplate = `<div>
                    <p>Hello World</P>
                <div>`



