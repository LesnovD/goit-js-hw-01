"use strict";
const credits = 23580;
const pricePerDroid = 3000;
let quantityDroid = prompt("введите количество дроидов ");
let totalPrice;
let lostCredits;

if (quantityDroid === null) {
  console.log("Отменено пользователем!");
} else {
  quantityDroid = Number(quantityDroid);
  totalPrice = quantityDroid * pricePerDroid;
}

if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  lostCredits = credits - totalPrice;
  console.log(
    `Вы купили ${quantityDroid} дроидов, на счету осталось ${lostCredits} кредитов.`
  );
}
