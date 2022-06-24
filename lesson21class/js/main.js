// const pi = 3.14;
// class Circle {
//   constructor (radius) {
//     this.radius = radius;
//     // this.diam = radius * 2;
//   }
//   get radi () {
//     return `${this.radius}`;
//   }
//   set radi (value){
//     this.radius = value;
//   }
//   get diam () {
//     return this.radius * 2;
//   }
   
//   sCircle () {
//     console.log( this.radius * this.radius * pi)
//   }
//   cCircle (){
//     this.cCircle = (this.radius * pi * 2);
//     console.log (this.cCircle.toFixed(2));
//   }
// }

// const circle = new Circle (10);
// console.log (circle.diam);
// circle.sCircle();
// circle.cCircle();
// circle.radi = 25;
// console.log(circle)





// Скачано в Міши для розбору

// class Marker {
//   constructor(color, inkAmount) {
//     this.color = color;
//     this.inkAmount = inkAmount;
//   }

//   write(string) {
//     let str = string;
//     let arr = str.split("");
//     let arr2 = arr.filter(function (item) {
//       return item !== " ";
//     });
//     for (let i = 0; i <= arr2.length; i++) {
//       if ((i = i++)) this.inkAmount -= 5;
//     }
//     if (this.inkAmount <= 0)
//       return (this.inkAmount = 0), "заправьте маркер,йопта";
//     return `Вы написали:${string}. Осталось ${this.inkAmount}% чернила`;
//   }
// }

// class FullMarker extends Marker {
//   constructor(color, inkAmount, secondColor) {
//     super(color, inkAmount);
//     this.secondColor = secondColor;
//   }

//   fullYourMarker() {
//     this.inkAmount = 100;
//     return `Ваш маркер еще огого.${this.inkAmount}% чернила`;
//   }
// }

// const redMarker = new Marker("red", 100);
// console.log(redMarker);
// console.log(redMarker.write("gggddgdgdgdgdgdgdgdgdgsgds"));
// const greenYellowMarker = new FullMarker("green", 100, "yellow");
// console.log(greenYellowMarker);
// console.log(greenYellowMarker.write("greпоплв"));
// console.log(greenYellowMarker);
// console.log(greenYellowMarker.fullYourMarker());