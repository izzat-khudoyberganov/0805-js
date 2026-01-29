// Data types in JavaScript

// Primitive Data Types  - Sodda, oddiy ma'lumot turlari
// Primitive - Bir o'zgaruvchi, bir qiymat

// 1. String - yozuv

let userName = 'Jamshid';
let userAge = 15;

// console.log("O'quvchilardan " + userName + " darsga kelmadi. U " + userAge + " yoshda.");
// console.log(`O'quvchilardan ${userName} darsga kelmadi. U ${userAge} yoshda.`); // Template literals


// 2. Number - sonlar
let num = 1_000_000
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// 3. Boolean - ha, yo'q || true, false
let isGraduaded = false
let num2 = "" // 0, 1, -1, 'test', ''
console.log(Boolean(num2));

// 4. Null - bo'sh
let abs = null;

// 5. Undefind - qiymat berilmagan o'zgaruvchi
let fname;
console.log(fname);

// 6. BigInt - katta sonlar
let first_example = 9007199254740991 + 1
let second_example = 9007199254740991 + 2
console.log(first_example == second_example);

// 7. Symbol - shifrlash

// NonPrimitive Data Types - Murakkab ma'lumot turlari
// NonPrimitive - bir o'zgaruvchi, bir nechta qiymatlar

// 1. Object -> Array, function

