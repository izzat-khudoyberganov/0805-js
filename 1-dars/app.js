// Foydalanuvchidan ma'lumot olish

// prompt('Ismingizni kiriting: ') // string
// confirm("Ro`yxatdan o`tishni xohlaysizmi?") // boolean

// Foydalanuvchiga ma'lumot berish

// alert("Done!") // foydalanuvchi uchun
// console.log("This is console message") // developerlar uchun

// console.error("This is error message")
// console.warn("This is warning message")
// console.table({user: "User name", age: 20})

// // O'zgaruvchilar
// let userAge = 15 // Qiymatini o'zgartirsa bo'ladigan o'zgaruchilar uchun
// console.log(userAge);
// userAge=16
// console.log(userAge)

// const userBirthYear = 2011 // O'zgarmas qiymatlarni saqlash uchun
// // userBirthYear=2012
// console.log(userBirthYear); 

const userName = prompt("Ismingizni kiriting: ")
const userAge2 = prompt("Yoshingizni kiriting: ")
alert(userName + ", siz " + (2026 - userAge2)   + "-yilda tug`ilgansiz" )


