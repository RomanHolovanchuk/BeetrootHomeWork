// // 1/ Створи об'єкт, що описує автомобіль
// const auto = {
//   marka: "Renault",
//   model: "Sandero Stepway",
//   year: 2019,
//   mediumSpeed: 100,
//   fuelTank: 55,
//   currentFuel: 20,
//   averageFuelConsumption: 5,
//   drivers: [
//     {
//       firstName: "Roman",
//       canDrive: true,
//     },
//     {
//       firstName: "Misha",
//       canDrive: false,
//     },
//     {
//       firstName: "Stepan",
//       canDrive: true,
//     },
//   ],
//   getInfo() {
//     console.log(
//       `marka: ${this.marka}\n`,
//       `Model: ${this.model}\n`,
//       `Year: ${this.year}\n`,
//       `medium speed: ${this.mediumSpeed}\n`,
//       `Fuel tank: ${this.fuelTank}\n`,
//       `Current fuel: ${this.currentFuel}\n`,
//       `average fuel consumption: ${this.averageFuelConsumption}\n`,
//       `Drivers: ${this.drivers.map((driver) => driver.firstName)}`
//     );
//   },
//   addDriver(driver) {
//     this.drivers.push(driver);
//   },
//   tank(amount) {
//     if (amount > 0) {
//       if (this.fuelTank - this.currentFuel >= amount) {
//         this.currentFuel += amount;
//       } else console.log("Your fuel tank is full");
//     }
//   },

//   timesss(distance, driverName) {
//     let time = distance / this.mediumSpeed;

//     for (let i = 1; i <= Math.floor(time); i++) {
//       if (i % 4 === 0) time++;
//     }

//     const drunkDriver = this.drivers.find(
//       (driver) => driver.canDrive === false
//     );
//     if (drunkDriver.firstName === driverName) {
//       console.log("You cannot drive, you are drunk");
//     } else console.log(`Welcome to the car ${driverName}`);

//     const isEnoughFuel = (this.currentFuel / this.averageFuelConsumption) * 100;
//     if (isEnoughFuel > distance) {
//       console.log("You have enough fuel");
//     } else console.log("You need to add fuel");

//     console.log(`Your trip will be ${time} hours`);
//   },

//   // time: function (distanse) {
//   //     let time = +(distanse / this.mediumSpeed);
//   //     let y=0;
//   //     if (time % 4 === 0) y = time / 4 - 1;
//   //     else y = Math.floor (time / 4);
//   //     let x = +(time + y);
//   //     return x;
//   //   },
// };

// auto.addDriver({ firstName: "ilona", canDrive: true });
// auto.tank(25);
// auto.getInfo();
// auto.timesss(500, "Roman");

// // 2.Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// const currentDate = new Date();

// const dateObj = {
//   hours: currentDate.getHours(),
//   minutes: currentDate.getMinutes(),
//   seconds: currentDate.getSeconds(),
//   getTime() {
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//   },
//   plushours(hour) {
//     let rem = hour % 24;
//     if (this.hours + hour <= 23) {
//       this.hours = this.hours + hour;
//     } else if (rem === 0) this.hours = this.hours;
//     else if (this.hours + rem - 24 < 0) {
//       this.hours = this.hours + rem;
//     } else this.hours = this.hours + rem - 24;
//   },
//   plusminutes(min) {
//     let rem = min % 60;
//     let fullm = Math.floor(min / 60);
//     let fullmb = Math.ceil(min / 60);
//     if (this.minutes + min <= 59) {
//       this.minutes = this.minutes + min;
//     } else if (rem === 0)
//       (this.minutes = this.minutes) && (this.hours = this.hours + fullm);
//     else if (this.minutes + rem - 60 < 0) {
//       (this.hours = this.hours + fullm) && (this.minutes = this.minutes + rem);
//     } else
//       (this.hours = this.hours + fullmb) &&
//         (this.minutes = this.minutes + rem - 60);
//   },
//   plusseconds(sec) {
//     let rem = sec % 60;
//     let fulls = Math.floor(sec / 60);
//     let fullmb = Math.ceil(sec / 60);
//     if (this.seconds + sec <= 59) {
//       this.seconds = this.seconds + sec;
//     } else if (rem === 0)
//       (this.seconds = this.seconds) && (this.minutes = this.minutes + fulls);
//     else if (this.seconds + rem - 60 < 0) {
//       (this.minutes = this.minutes + fulls) &&
//         (this.seconds = this.seconds + rem);
//     } else
//       (this.minutes = this.minutes + fullmb) &&
//         (this.seconds = this.seconds + rem - 60);
//   },
// };

// dateObj.plushours(3);
// dateObj.plusminutes(15);
// dateObj.plusseconds(120);
// dateObj.getTime();

// let date = new Date();
// let myDate = {
//   hours: function (hourse) {
//     date.setHours(date.getHours() + hourse);
//   },
//   minute: function (minut) {
//     date.setMinutes(date.getMinutes() + minut);
//   },
//   second: function (second) {
//     date.setSeconds(date.getSeconds() + second);
//   },
//   show() {
//     console.log(date);
//   },
// };
// myDate.hours(50);
// myDate.minute(100);
// myDate.second(100);
// myDate.show();
