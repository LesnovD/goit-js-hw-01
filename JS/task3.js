"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const userType = prompt("введите верный пароль");

if (userType === null) {
  message = "Отменено пользователем!";
} else if (userType === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
