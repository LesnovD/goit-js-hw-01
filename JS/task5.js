"use strict";
const country = prompt("введите название страны");
const normalizeCountry = country.toLowerCase();
let prise;

switch (normalizeCountry) {
  case "китай":
    prise = 100;
    break;

  case "чили":
    prise = 250;
    break;

  case "австралия":
    prise = 170;
    break;

  case "индия":
    prise = 80;
    break;

  case "ямайка":
    prise = 120;
    break;

  default:
    prise = "В вашей стране доставка не доступна";
    alert(prise);
}

console.log(`Доставка в ${normalizeCountry} будет стоить ${prise} кредитов`);
