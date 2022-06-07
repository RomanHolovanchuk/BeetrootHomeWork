// 1. Запитай у користувача його вік і визначи, ким він є:

// let age = prompt("введіть ваш вік");
// if (age >= 0 && age < 11) {
//   console.log("Ти дитина ;)");
// } else if (age >= 11 && age < 17) {
//   console.log("Ти підліток ;)");
// } else if (age >= 18 && age < 59) {
//   console.log("Ти Дорослий ;)");
// } else if (age > 59) {
//   console.log("Ти пенсіонер ;)");
// } else {
//   console.log("значення не валідне");
// }

// 2. Запитай у користувача число від 0 до 9

// let numbers = +prompt("Введіть число від 1 до 9");
// switch (numbers) {
//   case 1:
//     console.log("!");
//     break;
//   case 2:
//     console.log("@");
//     break;
//   case 3:
//     console.log("#");
//     break;
//   case 4:
//     console.log("$");
//     break;
//   case 5:
//     console.log("%");
//     break;
//   case 6:
//     console.log("^");
//     break;
//   case 7:
//     console.log("&");
//     break;
//   case 8:
//     console.log("*");
//     break;
//   case 9:
//     console.log("(");
//     break;
//   default:
//     console.log("це не буде виконано");
// }

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

// let a = +prompt("Початок діапазону");
// let b = +prompt("Кінець діапазону");
// let sum = 0;
// while (a < b) {
//   sum += a;
//   a++;
// }
// console.log(sum);

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

// let a = +prompt("Пeрше число");
// let b = +prompt("Друге число");
// let division;
// if (a > b) {
//   division = b;
// } else {
//   division = a;
// }
// while (division != 0) {
//   if (a % division == 0 && b % division == 0) {
//     break;
//   } else {
//     division--;
//   }
// }
// console.log(division);

// 5. Запитай у користувача число і виведи всі дільники цього числа.

// let n = +prompt('Введіть число');
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         console.log(`Дільники цього числа: ${i}`);
//     }
// }

// Норма
// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом

// let poly = +prompt("Введіть число");
// let ylop = 0;
// let a = poly;
// while (a >= 1) {
//   ylop += a % 10;
//   ylop *= 10;
//   a = (a - (a % 10)) / 10;
// }
// ylop /= 10;
// if (ylop === poly) {
//   console.log("число полиндром");
// } else console.log("не поліндром");

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:

// let price = +prompt("Введіть ціну товару");
// let saleA = price - price * 0.03;
// let saleB = price - price * 0.05;
// let saleC = price - price * 0.07;

// if (price >= 200 && price <= 300) {
//   console.log(`Ваша ціна зі знижкою складатиме: ${saleA} грн`);
// } else if (price > 300 && price <= 500) {
//   console.log(`Ваша ціна зі знижкою складатиме: ${saleB} грн`);
// } else if (price > 500) {
//   console.log(`Ваша ціна зі знижкою складатиме: ${saleC} грн`);
// } else console.log(`Ваша ціна буде без знижки: ${price} грн`);

// 3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.

// let N;
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let evenNumbers = 0;
// let notEvenNumbers = 0;
// for (i = 0; i < 10; i++) {
//   N = +prompt("Введіть 10 чисел: ");
//   if (N > 0) {
//     positive++;
//   } else if (N < 0) {
//     negative++;
//   } else if (N === 0) {
//     zero++;
//   }
//   if (N % 2 == 0) {
//     evenNumbers++;
//   } else if (N % 2 !== 0) {
//     notEvenNumbers++;
//   }
// }
// console.log("Кількість додатніх чисел: " + positive);
// console.log("Кількість відємних чисел: " + negative);
// console.log("Кількість нулів: " + zero);
// console.log("Кількість парних чисел: " + evenNumbers);
// console.log("Кількість не парних чисел: " + notEvenNumbers);

// 4. Зацикли відображення днів тижня таким чином:

// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;
// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//   currDay = (currDay + 1) % days.length;
// }

// Максимум
// 2.Виведи таблицю множення для всіх чисел від 2 до 9.

// for ( let a =2; a<=10; a++){
//   for (let j = 1; j<=10; j++){
//   console.log (`${a} x ${j} = `, a * j)
// }
// console.log('-----')
// }
