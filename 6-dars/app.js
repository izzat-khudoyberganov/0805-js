// 1. length - uzunlik
let text = 'Lorem ipsum dolor sit dolor'
console.log(text.length);

// 2. toUpperCase() / toLowerCase() - katta | kichik harf
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 3. trim(), trimStart(), trimEnd() - stringdan bo'sh joylarni o'chiradi
console.log(text.trimStart());
console.log(text.trimEnd());
console.log(text.trim());

// 4. includes() - boolean - string tarkibida ma'lum so'zning bor-yo'qligini tekshiradi
console.log(text.includes('dolor'));

// 5. startsWith() / endsWith() -boolean - stringning ma'lum so'z bilan boshlangan yoki  ma'lum so'z bilan tugaganini tekshiradi
console.log(text.startsWith('Lorem'));
console.log(text.endsWith('dolor'));


// 6. indexOf() / lastIndexOf() - 
console.log(text.indexOf('dolor'));
console.log(text.lastIndexOf('dolor'));

// 7. slice() / substring() - stringdan ma'lum qismini qirqib olish
console.log(text.slice(-5));
console.log(text.substring(-5));

// 8. replace() / replaceAll() - string tarkibidan ma'lum so'zni boshqa bir so'z bilan almashtirish
console.log(text.replace('dolor', 'lorem'));
console.log(text.replaceAll('dolor', 'lorem'));


// 9. split() - srtingni bo'laklarga ajratish
console.log(text.split(''));


// 10. charAt() / at() - index bo'yicha harflarga ulanish
console.log(text.at(-1));
console.log(text.charAt(-1));


// 11. repeat() - stringni takrorlash
console.log('hi'.repeat(3));


// 12. concat() - stringlarni bir-biriga qo'shish uchun
let text1 = 'Hello, '
let text2 = 'World!'
console.log(text1 + text2);
console.log(text1.concat(text2));