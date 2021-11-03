// ES6
// 많은 framework에서 채택했음.

// Template Literal
// 일반적으로 string 자료형을 조합할 때 + 연산자를 사용하는데,
// 그 과정이 많아지면 + 연산자가 많아지고, 띄어쓰기 같은 작업을 하기거 번거롭습니다.
// 이때 템플릿 리터럴을 이용하면 더 쉽게 만들 수 있고 가독성이 높아집니다.
//  `` 안에 변수를 넣을 때 ${} 를 사용합니다.    `은 백틱이라고 부릅니다.

const hello = "안녕";
const introduce = "나는 그랩이야";
const age = 5;

console.log(hello + "! " + introduce + " 그리고 " + age + "살이야");
// '안녕! 나는 그랩이야 그리고 5살이야'
console.log(`${hello}! ${introduce} 그리고 ${age}살이야`);
// '안녕! 나는 그랩이야 그리고 5살이야'

// Destructuring( 구조 분해 할당 )
// 객체와 배열에 들어 있는 값을 가져올 때 손쉽게 뽑아 낼 수 있습니다.

const grab = {
  name: "그랩",
  age: 27,
};
const people = ["민수", "철수"];

// 기존
var name = grab.name;
var age = grab.age;
var minsoo = people[0];
var chulsoo = people[1];

// Destructuring 방식
var { name, age } = grab;
console.log(name); //그랩이 출력됩니다.
const [minsoo, chulsoo] = people;

// map, foreach
// ES5 에서 나온 문법
// 배열을 가공할 때 많이 사용됨
// for 사용 -> map, foreach 사용
var products = [
  {
    name: "농구공",
    price: "50000",
  },
  {
    name: "축구공",
    price: "30000",
  },
];

for (var i = 0; i < products.length; i++) {
  var name = products[i].name;
  console.log("제품 이름 : " + name);
}

// Array Method 방식
// 이들의 콜백 함수에는 첫번째 인자에는 배열에서 조회하는 값,
// 두번째 인자에는 순서(index)가 들어갑니다.
// map, forEach 메소드는 모두 배열을 조회한다는 기능은 동일합니다.
// 다만 forEach는 별다른 return 이 없는 반면, map은 새로운 배열을 반환 합니다.

// 첫번째 파라미터에는 값, 두번째 파라미터에는 순서(index)가 들어간다.
products.forEach(function (product, index) {
  console.log(index + 1 + "번째 호출");
  console.log(product);
});
products.forEach(function (product, index) {
  console.log(product.name);
});

//동일하게 조회합니다.
products.map(function (product, index) {
  console.log(index + 1 + "번째 호출");
  console.log(product);
});

// Productnames는 각 Product 의 name이 들어간 배열이다.
var productNames = products.map(function (product, index) {
  return product.name;
});

var productElements = products.map(function (product, index) {
  return (
    <div>
      <span>{product.name}</span>
    </div>
  );
});

// Lambda Funcion(람다함수)
// function을 표현하는 새로운 방식인 Lambda 식은 () - > {}
// 형식을 사용합니다. 최근에 javascript에서 사용되고 있음.

// 함수 선언식
function getName(name) {
  return `${name} 입니다.`;
}

const getName = function () {};

// 람다 함수 방식
const getName2 = (name) => {
  return `${name}입니다`;
};

const getName3 = (name) => `${name}입니다`;

// this 의 의미
//  context 에서....
//  웹브라우저에서 this는 전역변수인 window와 동일하다
//  객체의 소속인 method의 this는 그 객체를 나타낸다.

var o = {
  func: function () {
    if (o === this) {
      document.write("o===this");
    }
  },
};

// 생성자에서 this
// 이해가 잘 안됨.
var funcThis = null;

function Func() {
  funcThis = this;
}

var o1 = new Func();
if (funcThis === window) {
  document.write("window </br>");
}

var o2 = new Func();
if (funcThis === o2) {
  document.write("o2 </br>");
}

// 객체로서의 함수
// 함수는 apply 와 call 이라는 method를 가지고 있음.
// 위 두 method 를 이용하면 this 값을 제어 할 수 있다.
function sum(x, y) {
  return x + y;
}
// 함수 리터럴
// 객체 리터럴

var o = {};
var p = {};
function func() {
  switch (this) {
    case o:
      console.log("o");
      break;
    case p:
      console.log("p");
      break;
    case window:
      console.log("window");
      break;
  }
}

func();
func.apply(o);
func.apply(p);

// javascript 는 유연하다.
func.call(o);

// conditional ternary operator(3항 연산자)
const language = "javascript";
language === "javascript" ? console.log("재밌다") : console.log("재미없다");

const isJavascript = language === "javascript" ? true : false;
