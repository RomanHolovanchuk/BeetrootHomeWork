// 2/ Створи функцію, яка буде виводити кількість переданих їй аргументів.

// function numbers(...args) {
//   console.log(args.length);
// }
// numbers (2, 10, 50, 'Roma');

// 3/ Напиши функц5ію, яка приймає 2 числа і повертає :
// let a = +prompt("введіть число 1");
// let b = +prompt("введіть число 2");
// let test = function (a, b) {
//   if (a > b) return -1;
//   else if (a < b) return 1;
//   else a === b;
//   return 0;
// };
// console.log(test(a, b));

// 4Напиши функцію, яка обчислює факторіал переданого їй числа.
// let n = +prompt('числа')
// function factorial(n) {
//     // return (n != 1) ? n * factorial(n - 1) : 1;
//      if (n !=1)
//          return n = n * factorial(n-1);
//      else
//       return n = 1;
//     }
//   console.log( factorial(n) );

// 5/ Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.

// let a = +prompt("числo 1");
// let b = +prompt("числo 2");
// let c = +prompt("числo 3");
// function str(a, b, c) {
//     return String(a) + String(b) + String(c);
// }
// console.log(str(a, b, c));

// 6/ Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.

// let a = +prompt("довжина");
// let b = +prompt("ширина");

// function square(a, b) {
//   if (b === 0) return a * a;
//   else if (a === 0) return b * b;
//   else return a * b;
// }
// console.log(square(a, b));

// 1/Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”

// let number = +prompt("Введіть число");
// function perfect(number) {
//   let temp = 0;
//   for (i = 1; i < number; i++) {
//     if (number % i === 0) {
//       temp += i;
//     }
//   }

//   if (temp === number) {
//     console.log(`${number} - досконале число`);
//   } else {
//     console.log(`${number} - не досконале число`);
//   }
// }
// perfect(number);

// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону

// let start = +prompt("початок діапазону");
// let finish = +prompt("кінець діапазону");

// for (start; start <= finish; start++) {
//   if (perfect(start) === true) console.log(`дане число є досконалим ${start}`);
// }
// function perfect(number) {
//   let temp = 0;
//   for (i = 1; i < number; i++) {
//     if (number % i === 0) {
//       temp += i;
//     }
//   }

//   if (temp === number) {
//     return true;
//   } else {
//     return false;
//   }
// }
