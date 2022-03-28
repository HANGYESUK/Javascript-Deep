//inport export를 이용한 모듈식 개발
// html 스크립트 태그에 type="module" 쓰면 사용가능
<script type="module"></script>

import a from './library.js';


//브라우저 동작원리
//힙 스택 큐
//싱글스레드 언어 - 스택에서 코드 하나씩 실행
//오래걸리는 함수나 코드를 대기실로 넘김
//대기실 => 큐 => 스택(비었을때) - 대표적으로 setTime, 이벤트리스너
console.log(1) //1빠
setTimeout(()=>{console.log(2)}, 1000) //3빠(바로 실행안되니까)
console.log(3) //2빠


//콜백함수 - 코드가 복잡해짐
// Promise패턴으로 해결 
function Func1(prameter) {
    console.log(1)
    prameter()
}

function Func2() {
    console.log(2)
}

Func1(Func2);


//Promise 패턴 - .then().catch()
Func1().then(function() {

}).then(function () {

}).catch()