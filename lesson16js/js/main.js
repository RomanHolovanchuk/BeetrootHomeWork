let a = 0.1;
let b = 0.2;
let sum = a + b;
console.log(sum.toFixed(1));

let c = "1";
let d = 2;
let resultat = Number(c) + d;
console.log(resultat);

let v = prompt("Вкажіть обсяг флешки, ГБ: ");
const file = 820;
const gb = 1024;
let number = (v * gb) / file;
console.log(
  `На дану флешку поміститься ${Math.floor(number)} файла розміром 820 mb`
);

let moneyWallet = prompt("Введіть суму грошей в гаманці:");
let priceOneChocolate = prompt("Введіть ціну однієї шоколадки:");
let amountChocolate = moneyWallet / priceOneChocolate;
let remainder = moneyWallet % priceOneChocolate;
console.log(
  `Ви зможете придбати - ${Math.floor(
    amountChocolate
  )} шоколадок, та у вас залишиться ${remainder}, гривень`
);

let chislo = prompt("Введіть трьохзначне число");
let result = chislo % 10;
let first = result;
chislo = chislo / 10;
let chisloTwo = Math.floor(chislo) % 10;
let chisloThree = chislo / 10;
let three = Math.floor(chisloThree);
console.log(
  "Оберенене число до вашого буде:",
  first + "" + chisloTwo + "" + three
);

let cash = prompt("Введіть суму, яку плануєте покласти на депозит:");
const percent = 5;
let yearDepozit = (cash * percent) / 100;
let mountDepozit = yearDepozit / 12;

let depozit = mountDepozit * 2;
console.log(
  `При вкладанні, ${cash}, грн, за два місяці депозиту під 5% річних, ви отримаєете:, ${depozit.toFixed(
    2
  )}, грн`
);

// // console.log(2 && 0 && 3);

// // console.log(2 || 0 || 3);

// // console.log( 2 && 0 || 3);
