// Arrow function

//Arrow function - 화살표 함수
let Fucn = ()=>{}

let arr = [1,2,3,4]

//forEach는 콜백함수 사용 - Arrow function 사용하면 코드 줄일수 있음
arr.forEach((a)=>console.log(a))

//이벤트 리스너 - Arrow function의 this는 부모의 this를 물려받아 사용
document.getElementById('btn').addEventListener("click", (e)=>{
    console.log(this)
})

//오브젝트 내 함수
let obj = {
    Fucn : ()=>{
        //obj의 this는 window
        console.log(this)
    }
}

obj.Fucn()


//연습문제

//1번
let Human = {
    name : '손흥민',
    sayHi: function(){
        console.log("안녕 나는 " + this.name)
    }
}

Human.sayHi()

//2번
let Data = {
    data : [1,2,3,4,5],
}

Data.plus = function() {
    let result = 0;
    this.data.forEach((item)=>{
        result += item;
    })
    console.log(result);
}

Data.plus()

//3번
document.getElementById('btn2').addEventListener('click', function() {
    setTimeout(()=>{
        console.log(this.innerHTML)
    }, 1000)
})