// ES6-style-function - default parameter/arguments

// 파라미터 b에 default 값 할당
function plus(a, b = 10) {
    console.log(a + b)
}

plus(1)

// 함수의 arguments - 모든 파라미터를 배열로 반환
function Arguments(a,b,c) {
    for(let i=0; i<arguments.length; i++) {
        console.log("Arguments : ", arguments[i])
    }
}

Arguments(1,2,3)

// rest 파라미터(ES6) - 파라미터 가장 뒤에 사용해야됨, 2번이상 금지
// arguments랑 차이점 - Spread operaitor를 쓴 파라미터만 배열로 반환
// 함수의 파라미터 자리에서만 rest 이고 나머지는 Spread operaitor
function Restparameter(a, ...rest) {
    for(let i=0; i<rest.length; i++) {
        console.log("Restparameter : ", rest[i])
    }
}

Restparameter(0,1,2,3,4,5,6,7,8,9)


//Q1 spread 문제 - 위 코드의 출력 결과는?
var a = [1,2,3];
var b = '김밥';
var c = [...b, ...a];
console.log("Q1 : ", c);//김,밥,1,2,3


//Q2 spread 문제 - 대괄호가 가득한 위 코드의 출력 결과는?
var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a,b){
  console.log("Q2 : ", [[...a], ...[...b]][1] )
}
c(a,b); //you


//Q3 default 파라미터 문제 - 위 코드의 출력 결과는?
function Q3(a = 5, b = a * 2 ){
    console.log("Q3 : ", a + b);
    return 10
}
Q3(3); //9


//Q4 default 파라미터 문제 - 위 코드의 출력 결과는?
function Default(a = 5, b = a * 2 ){
    console.log("Q4 : ", a + b);
}
Default(undefined, undefined); //15


//Q5  array를 만들어주는 함수를 제작하고 싶습니다 
//이렇게 작성하면 [1,2,3,4,5]가 출력되어야합니다.
//함수에 숫자를 100개 집어넣으면 Array안에 숫자100개가 들어가야하고요.
//어레이라는 함수를 어떻게 만들면 될까요? (new 키워드 사용금지)
function Arr(...rest){
    return rest
}
  
var newArray = Arr(1,2,3,4,5);
console.log("Q5 : ", newArray); //[1,2,3,4,5]


//Q6 최댓값 구하기 - 자바스크립트에서 최댓값을 구하고 싶으면.. Math.max()라는 기본 내장함수를 쓸 수 있습니다. 
//이렇게 쓰시면 6이라고 최댓값을 출력해줍니다. 
//그냥 소괄호 안에 있는 모든 숫자 중에 가장 큰 숫자를 퉤 뱉는다는 소리입니다. 
//근데 최댓값을 검사하고 싶은 숫자들이 좀 많습니다. 
var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
let result = Math.max(...numbers)
console.log("Q5 : ", result); //7


//Q7  글자를 알파벳순으로 정렬해주는 함수
//정렬('bear')라고 사용하면
//콘솔창에 a b e r 이렇게 입력한 문자를 알파벳 순으로 출력되게 만들고 싶으면 어떻게 해야할까요? 
//(sort() 함수 사용가능)
function 정렬(){
    //(여기 어떤 코드가 들어가야할까요?)
}
  
정렬('bear'); 


//Q7 데이터마이닝 기능 만들기 
//글자세기('aacbbb') 라고 입력하면 콘솔창에
//{ a : 2, b : 3, c : 1 }
//▲ 이렇게 출력해주는 글자세기() 라는 함수를 만들고 싶습니다.
//쉽게말하자면 입력한단어에 들어있는 알파벳의 갯수를 세어서 오브젝트에 기록해주고 출력까지 해주는 함수입니다. 
//글자세기라는 함수를 어떻게 만들면 될까요? 