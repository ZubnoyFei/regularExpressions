'use strict'

// new RegExp('pattern', 'flags');
//
// /pattern/flags

// const ans = prompt('Enter your number');
//
// const reg = /\d/g;
// console.log(ans.match(reg));


const str = "My name is R2D2";
console.log(str.match(/\w\d\w\d/i));

// \d Looking for digits
// \w Looking for words\syllables
// \s Looking for spaces
// If we want to find NOT digits, NOT syllables, NOT symbols

// \D Not digits
// \W not syllables

/*Flags
*
* i(Если мы хотим найти что-либо вне зависимости от регистра)
* g(global, коли ми намагаємось знайти одразу декілька входжень)
* m(вмикає багатостроковий режим)
* */

//console.log(ans.search(reg));
// console.log(ans.match(reg))
//
// const pass = prompt('Password');
//
// console.log(pass.replace(/\./g, "*"));

// console.log("12-34-56".replace(/-/g, ":"))