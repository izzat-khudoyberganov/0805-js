// Data types in JavaScript

// Primitive Data Types  - Sodda, oddiy ma'lumot turlari
// Primitive - Bir o'zgaruvchi, bir qiymat

// 1. String - yozuv

let userName = "Jamshid";
let userAge = 15;

// console.log("O'quvchilardan " + userName + " darsga kelmadi. U " + userAge + " yoshda.");
// console.log(`O'quvchilardan ${userName} darsga kelmadi. U ${userAge} yoshda.`); // Template literals

// // 2. Number - sonlar
// let num = 1_000_000
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// 3. Boolean - ha, yo'q || true, false
let isGraduaded = false;
let num2 = "false"; // 0, 1, -1, 'test', ''
console.log(Boolean(num2));

// 4. Null - bo'sh
let abs = null;

// 5. Undefind - qiymat berilmagan o'zgaruvchi
let fname;
console.log(fname);

// 6. BigInt - katta sonlar
let first_example = 9007199254740991n + 1n;
let second_example = 9007199254740991n + 2n;
console.log(first_example == second_example);

// 7. Symbol - shifrlash, unique value larni saqlash uchun

let id = Symbol("my_id");

let person = {
  name: "Ism",
  [id]: 123,
};

// NonPrimitive Data Types - Murakkab ma'lumot turlari
// NonPrimitive - bir o'zgaruvchi, bir nechta qiymatlar

// 1. Object -> Array, function

// key-value pairs
let userInfo = {
  fname: "Ism",
  lname: "Familiya",
  birthDate: "2011-01-01",
  age: 15,
  birthPlace: "Urgench",
  nationality: "uz",
  state: "Urgench",
  middleName: "Middle Name",
  id: 123,
  phone: "+123 456 789",
  isStudent: true,
  cardNumber: null,
  email: undefined,
  bigIntExample: 1n,
  language: ["uzbek", "arab", "english", "russian", "dutch"],
};
console.table(userInfo);

// Array

let language = ["uzbek", "arab", "english"];

// Function

function sayHello(userName) {
  console.log(`Hello, ${userName}!`);
}
sayHello('Jamshid')

