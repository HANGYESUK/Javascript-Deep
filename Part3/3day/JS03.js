//Promise - 디자인패턴
//콜백함수와 다르게 성공과 실패했을때로 나누어 실행시킬수 있음
//상태 - 성공(resolve), 대기중(pending), 실패(rejected)
//###동기를 비동기 처리로 바꾸는 함수가 아님####
let setPormise = new Promise(function (resolve, reject) {
    let num = 1 + 1

    //파라미터 보내기 가능
    resolve(num);
    reject();
});

setPormise.then(function(num){
    console.log(`결과 : ${num}`) //결과 : 2
}).catch(()=>{
    console.log("성공")
})

//문제 1
let imgLoad = new Promise(function(resolve, reject){
    let img = document.querySelector('#btn');
    img.addEventListener('load', function(){
        resolve();
    });
    img.addEventListener('error', function(){
        reject();
    });
    
});
  
  
imgLoad.then(function(){
console.log('성공했어요')
}).catch(function(){
console.log('실패했어요')
})