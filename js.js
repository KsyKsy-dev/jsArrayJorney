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

//#1 camelize(str)

function camelize(str) {
  let strToArray = str.split("");
  let arrToStr = [];
  for (let i = 0; i < str.length; i++)
    if (strToArray[i] === "-") {
      strToArray.splice(i, 1);
      strToArray[i] = strToArray[i].toUpperCase();
    }
  arrToStr = strToArray.join(" ");
  return arrToStr;
}
console.log(camelize("my-string-to"));
