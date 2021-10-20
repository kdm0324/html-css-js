// javascript에서는 코드 한 줄을 작성할 때, 맨 마지막에 ;을 붙여 줍니다.
// 안 붙여도 문제 없으나 코드를 마무리 한다는 암시를 가지고 있습니다.

// 변수는 데이터를 담는 공간입니다.
// 우리가 웹에서 보는 상품 정보, 이미지, ID 입력창 등은
// 전부 데이터를 바탕으로 보여지는 결과물입니다.
// 이때 데이터를 담는 변수는 기본 중의 기본입니다.

var name; // name 이라는 변수를 선언한다.
name = "그랩"; // name 이라고 선언된 변수에 그랩이라는 값을 저장한다.

var name = "그랩"; //합쳐서 이렇게 사용 할 수 있음

//var, let, const 차이
//1. var는 같은이름의 변수를 다시 사용할 수 있어요. 요새는 var를 사용하지 않고 let, const 만 사용하는 추세입니다.
var num1 = 20;
var num1 = "Bob";

//2. let은 한번 선언된 변수에 다시 새롭게 선언 할 수 없어요.
let num2 = 20;
num2 = "hello";
let num2 = "Bob"; // error!

//3. const는 선언된 변수에 새로운 값을 정의할 수 없어요. 변수 값이 더이상 변경되지 않도록 할 때 사용해요.
const num3 = 30;
num3 = "Bob"; // error!

//변수명은 영문 + 숫자로 지어야 하며 띄어쓰기와 특수문자가 불가능합니다.
//변수명을 지을 때는 camelCase 혹은 snake_case 형태로 지으세요.

//자료형
// 기본 자료형
// javascript 뿐만 아니라 거의 모든 프로그래밍 언어에서 사용하고 있는 자료형
//  string number boolean

var name = "그랩"; //""  ''  둘다 문자열로 취급을 함.
//typeof 키워드로 자료형을 알 수 있음.
// 값이 들어가지 않은 상태에서는 undefined.
//
let title = null; // typeof 결과는 object

// 배열 array 혹은 list
// 배열을 사용할 때는 [] bracket을 사용
// 배열의 길이를 알고 싶으면 배열.length 를 이용 length 는 number형 변수로 쓰입니다.
// 배열 안에 값을 조회하려면 배열 [index No]로 접근 한다. 0부터 시작합니다.
// 배열 안에 새로운 값을 추가 하고 싶다면? 배열.push(value) 를 이용한다.
// return 하는 value는 push 된 array의 length 값입니다.
var productNames = ["농구공", "단백질 보충제"]; // array 자료형 []
var productIds = [10, 20]; //배열 안에는 모든 자료형을 넣을 수 있음.
var productNestArray = [
  [0, 1, 2],
  [3, 4, 5],
]; //array 안에 array 도 담을 수 있음.

// 일반적으로 javascript 에서 변수안의 무엇을 사용하려고 할 때,
// . 이나 []를 주로 활용합니다.
// 객체
// 객체는 자료들을 key value 형태로 저장하는 자료형입니다.
// 중괄호 {} 안에 key, value를 순차적으로 넣습니다.
// 객체 형태
{
  key1: value1;
  key2: value2;
}
// 실제 객체 사용
var product = {
  name: "농구공",
  price: 50000,
  description: "그랩이 사용하는 농구공",
};
// 객체 접근할 때는 객체.해당키값, 또는 객체[해당키값]을 입력하면 value를 반환합니다.
// 값을 추가할 때도 쓸 수 있고, 값을 변경할때도 가능 (Insert, update)

// 변수 Question
var student1 = {
  name: "곽동민",
  score: 100,
  grade: "S",
};
var student2 = {
  name: "그랩",
  score: 50,
  grade: "C",
};
var student3 = {
  name: "고은해",
  score: 10000,
  grade: "SS",
};

var classA = [student1, student2, student3];

typeof student1;
typeof classA;

console.log(classA[1]);
console.log(classA[1].score);

// 연산자
// 기본연산자
//  + - * /
var num1 = 5;
var num2 = 3;
var char1 = "가짜";
var char2 = "사나이";

console.log(num1 + num2);
console.log(char1 + char2);
console.log(char2 + num2);

// 비교 연산자
var name = "그랩";
var isFool = true;
var age = 100;
console.log(age < 5);
console.log(age <= 5);
console.log(age >= 5);
console.log(name === "민수");
console.log(name !== "민수");
console.log(name === "그랩");

var nope = false;
console.log(nope);
console.log(!nope);
console.log(!!nope);

// 논리연산자
// &&통산적으로 AND 조건이라고 불러, 앞의 결과가 true일 때 뒤의 연산 값을 반환
// ||통상적으로 OR 조건이라고 불러, 앞의 결고가 true 일 때 앞의 연산 값 반환 뒤를 실행 안함.
console.log(name === "그랩" && age > 25);
console.log(name !== "그랩" && age > 25);
console.log(name !== "그랩" || age > 25);
console.log(name !== "그랩" || age < 25);

console.log(classA.length >= 1 && classA[0].name === "그랩");

// 조건문
//조건에 따라서 logic을 다르게 수행하도록 돕습니다.
// 로그인한 사람에게는 프로필 이미지를 보여준다. 아니면 로그인 버튼을 보여준다.
// 상품 정보들이 1개 이상이면 상품화면들을 보여준다. 아니라면 상품 준비중이라는 화면을 보여준다.
// if(조건){
//     //로직
// }
// true 일때 로직을 실행함, false null, 0, "", undefined 일 때 로직을 수행하지 않음.

var name = "은해";
var age = 27;

if (name === "그랩") {
  console.log("그랩짱");
} else if (name === "은해") {
  console.log("예쁜 은해");
} else {
  console.log("넌누구냐");
}
if (age > 25) {
  console.log("25세 보다 많습니다");
}

var empty = "";
if (!empty) {
  console.log("비어있어요");
}

// 조건문 마스터 question

if (classA.length >= 1) {
  console.log(classA[1].name);
} else {
  console.log(classA[0].name);
}

if (classA.length >= 5) {
  console.log(classA[1].name);
} else if (classA.length >= 1) {
  console.log(classA[0].name);
} else {
  console.log("아무것도 없음");
}
