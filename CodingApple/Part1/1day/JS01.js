// this 키워드

//this는 부모객체를 가르킴

//부모객체
console.log(this)

// 일반함수 내에서는 window
function Func() {
    console.log(this)
}

Func()

//this 다른 뜻
function Ms() {
    // 여기서 this는 instance로 받는 데이터
    this.name = 'kim'
}

let obj = new Ms()

console.log(obj)


// 이벤트리스너 내에서는 e.currentTarget
document.getElementById('btn').addEventListener('click', function() {
    console.log(this)

    // 여기서 this는 window인데 Arrow function사용하면 부모객체인 btn으로 바뀜
    let arr = [1,2,3]
    arr.forEach((item)=>{
        console.log(this)
    })
})

// 오브젝트 내에서 콜백함수 사용시 window
let obj2 = {
    names : ['kim', 'lee', 'park'],
    Func2 : function() {
        //forEach문 내에 콜백함수가 일반함수로 적용되어 window 출력
        obj2.names.forEach(function(){
            console.log(this)
        })
    }
}

obj2.Func2()

