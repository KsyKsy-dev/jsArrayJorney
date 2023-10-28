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

// function camelize(str) {
//   return str
//     .split("-")
//     .map((item, index) =>
//       item == 0 ? item : item[0].toUpperCase() + item.slice(1)
//     )
//     .join("");
// }
// console.log(camelize("my-str-is-here"));

// # filterRange function

// let arr = [2, 4, 5, 7, 1];
// let filtered = filteredRange(arr, 2, 4);
// function filteredRange(arr, a, b) {
//   let newArr = arr.slice();

//   console.log(newArr);
//   return newArr.filter((item) => item > a && item < b);
// }
// console.log(filtered);
// console.log(arr);

let arr = [2, 4, 5, 7, 1];
let filtered = filteredRange(arr, 2, 4);

function filteredRange(arr, a, b) {
  let newArr = arr.slice();

  console.log(newArr);
  return newArr.filter((item) => item > a && item < b);
}

console.log(filtered); // Output: [4]
console.log(arr); // Output: [2, 4, 5, 7, 1]
