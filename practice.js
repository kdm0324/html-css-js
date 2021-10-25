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

// 함수
// 함수는 작업을 수행하는 코드들을 정의하는 코드 블록입니다.
// sayHello라는 함수 선언하기
// 첫번째 방식 - 함수 선언식이라고 함
function sayHello() {
  console.log("sayHello!");
}

// 두번째 방식 - 함수 표현식이라고 함
const sayHello = function () {
  console.log("say Hello!");
};

// 함수를 사용한다는 것은 실행한다는 것을 뜻합니다. 실행할 때 소괄호 ()를 붙입니다.
// 실행되면 함수의 {} 안에 있는 코드들이 실행됩니다.

// 함수를 한번 만들어 두면 재사용이 가능하기에 코드를 깔끔하게 관리할 수도 있습니다.

// 함수 인자 (매개변수 parameter)
// 함수의 인자명은 문자+숫자 형태로 자유롭게 작성하면 됩니다.

function calculation(x) {
  var result = 3 * x + 5;
  console.log("결과 값은 " + result + "입니다.");
}

var age = function (name, age) {
  console.log(name + "는" + age + "살입니다");
};

// 함수 값 반환(return)
//  return 아래는 실행되지 않아
function calculation(x) {
  var result = 3 * x + 5;
  return result;
}

function getProfile(name, age) {
  return {
    name: name,
    age: age,
  };
}

// 함수 밖에서 선언된 변수는 함수 안에서 사용이 가능합니다.
// 하지만 함수 안에서 선언된 변수는 함수 밖에서 사용이 불가능합니다.

var products = [
  {
    name: "농구공",
    decription: "농구 황제 마이클 조던이 사용하던 공",
    price: 100000,
    seller: "민수",
  },
  {
    name: "축구공",
    decription: "축구 황제 메시가 사용하던 공",
    price: 50000,
    seller: "철수",
  },
];

function arrayLength(inputArray) {
  return inputArray.length;
}

console.log(arrayLength(products));

function getProductSeller(inputProduct) {
  return inputProduct.seller;
}

console.log(getProductSeller(products[0]));

// 반복문
// 상품 정보들을 100개 보여줄때 상품 정보 보여주는 코드를 100번 짜야되는 건 아니니까
// list 에 넣어두고 index 활용하여 짜는 것이 좋겠네

for (var i = 0; i < 10; i++) {
  console.log("나는 그랩이다" + i);
}

var names = ["철수", "민수", "그랩"];

names[0];

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

var products = [
  {
    name: "농구공",
    decription: "농구 황제 마이클 조던이 사용하던 공",
    price: 100000,
    seller: "민수",
  },
  {
    name: "축구공",
    decription: "축구 황제 메시가 사용하던 공",
    price: 50000,
    seller: "철수",
  },
  {
    name: "야구공",
    decription: "박찬호가 던진 공",
    price: 75000,
    seller: "그랩",
  },
];

function getProductsPrice(products) {
  for (var i = 0; i < products.length; i++) {
    console.log(products[i].name + "의 가격은 " + products[i].price + "입니다");
  }
}

// javascript 최종 문제
// products배열을 넣었을 때 가격이 60000원 이상인 product 객체를 담은 배열을 반환하는 함수를 만들어라
var products = [
  {
    name: "농구공",
    decription: "농구 황제 마이클 조던이 사용하던 공",
    price: 100000,
    seller: "민수",
  },
  {
    name: "축구공",
    decription: "축구 황제 메시가 사용하던 공",
    price: 50000,
    seller: "철수",
  },
  {
    name: "야구공",
    decription: "박찬호가 던진 공",
    price: 75000,
    seller: "그랩",
  },
];

function getProduct(products) {
  var resultArray = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].price >= 60000) {
      resultArray.push(products[i]);
    }
  }
  return resultArray;
}

var result = getProduct(products);

console.log(result);

// 콜백함수, 익명 함수
// 1. 함수는 매개변수를 넣을 수 있다.
// 2. 함수는 값을 반환할 수 있다.
// 콜백함수 개념만 알면 함수의 대부분을 알고 있다는 것임.
// 콜백함수 : 함수가 나중에 불린다고 해서 callback 임.

function sayHello() {
  console.log("수강생 여러분 안녕하세요");
}

function getHuman(callbackFunc) {
  callbackFunc();
}

function getHuman(callbackFunc) {
  console.log("콜백함수로 실행한거임");
  callbackFunc();
}

function callbackFunc(name) {
  console.log(name);
}

function sayHello(callback) {
  var text = "hello";
  callback(text);
}

sayHello(callbackFunc);

// 비동기 처리
// javascript code interpreter 는 대표적으로 브라우저 내부에 탑재 되어있음.
// 프론트엔드 개발자가 짠 javascript 코드가 브라우저에서 실행시키기 위해서.
// 윗 줄의 코드가 오랜 시간을 걸리면, 아랫 코드는 계속 대기중일 것임.
// 그래서 비동기 방식을 이용하는 것임.

// setTimeout 함수도 비동기 처리를 지원합니다.
setTimeout(function () {
  console.log("3초 뒤에 실행됩니다.");
}, 3000);
console.log("바로 실행됩니다.");

// 비동기 처리를 해주는 Promise 객체를 이용한 방식이 있음.
// 실행이 되는지 or 에러가 나는지 두개의 분기가 나누어짐.
// then or catch

var result = fetch("https://jsonplaceholder.typicode.com/todos/1");

result
  .then(function (response) {
    console.log("이 코드는 네트워크 통신이 끝나고 나서 실행되요.");
  })
  .catch(function (error) {
    console.log("이 코드 에러가 났을 때 실행되요");
  });
console.log("네트워크 통신이 끝날 때 까지 기다리지 않고 바로 실행되요 2");

// Promise 객체 만들 수 있어야함.

// 서버와 HTTP 개념 이해하기
// 클라이언트 - 서버
// 통신프로토콜 SMTP, FTP, HTTP 는 브라우저가 웹서버오 ㅏ통신하기 위해 생긴 프로토콜

// HTTP 요청
// 1. 어떤서버에게 요청할 것인지 URL 이 있어야함.
// 2. 어떤 방식으로 요청할 것인지 method 가 있어야함.( GET POST, PUT, DELETE 등..)
//  GET -> 정보를 받아 올때 ex웹서버에서 웹을 다운 받을 때, 내 상품 정보들을 받아올때
//  POST -> 새로운 자원을 생성할때 쓰이는 것 ex로그인을 할때 아이디, 패스워드를 담아야함, 아티클을 만들때 입력하 아티클 정보를 담아야함.

// HTTP응답
// 응답이어떤 상태인지 나타내느 status code가 담겨 있어야함.

// 외부 라이브러리 axios이용하여 서버와 통시하기
