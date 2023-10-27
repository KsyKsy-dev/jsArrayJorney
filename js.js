"use strict";
/// create new array
// constractor
//let arr = new Array();

// array literal
// let arr = [];

// create arr from string

// let str = "I'm str";
// let strArr = str.split(" ");
// console.log(strArr);

//#1 camelize(str) First solution
// function camelize(str) {
//   let strToArray = str.split("");
//   let arrToStr = [];
//   for (let i = 0; i < str.length; i++)
//     if (strToArray[i] === "-") {
//       strToArray.splice(i, 1);
//       strToArray[i] = strToArray[i].toUpperCase();
//     }
//   arrToStr = strToArray.join(" ");
//   return arrToStr;
// }
// console.log(camelize("my-string-to"));
// #1 camelize(str) Second solution

function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}
console.log(camelize("my-str-is-here"));
