// async/await - ES8문법
// 단점 - 성공이든 실패든 결과만 출력
// promise의 then 대신 await 사용
// function Func1() {
//     1 + 1
// }

// Func1.then(function () {
//     console.log('성공');
// })

// 사용법
async function Func2() {
    let promise = new Promise(function (resolve, reject) {
        let plus = 1 + 1
        resolve(100)
    });

    // await - 결과가 나올때까지 기다림, 실패시 에러나고 멈춤
    // 방지법 - try{}, catch{} 사용
    try {
        let result = await promise;
        console.log(result);
    }
    catch {
        console.log('프로미스 연산 실패')
    }
}

Func2()

// promise 연습
async function Catch() {
    let promise2 = new Promise(function (resolve, reject) {
        document.getElementById('btn').addEventListener('click', ()=>{
            console.log(this)
            resolve("성공했습니다");
        })
    });

    let result2 = await promise2;
    console.log(result2)

}

Catch();