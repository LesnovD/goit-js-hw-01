"use strict";
let total = 0;
do {
  let input = prompt("введите число");
  if (input === null) {
    break;
  }
  input = Number(input);
  total += input;
} while (true);

console.log(total);
