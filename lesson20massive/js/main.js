const shoppingList = [
  {
    name: "bread",
    amount: 10,
    status: "Buy",
    price: 20,
    sum() {
      return this.amount * this.price;
    },
    // sum: 200,
  },
  (produkt2 = {
    name: "milk",
    amount: 20,
    status: "notBuy",
    price: 25,
    sum() {
      return this.amount * this.price;
    },
    // sum: 450
  }),
  {
    name: "chocolate",
    amount: 5,
    status: "Buy",
    price: 15,
    sum() {
      return this.amount * this.price;
    },
    // sum: 75,
  },
  {
    name: "oil",
    amount: 3,
    status: "notBuy",
    price: 50,
    sum() {
      return this.amount * this.price;
    },
    // sum: 150,
  },
];
// const filterNotBuyProdukt = shoppingList.filter(
//   (item) => item.status === "notBuy"
// );
// const filterBuyProdukt = shoppingList.filter((item) => item.status === "Buy");
// const newArr = [...filterNotBuyProdukt, ...filterBuyProdukt];


//2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний./

// function newProd(product) {
//   shoppingList.map((item) => {
//     if (item.name === product) 
//       return (item.status = "Buy");
//     });
// }
// newProd("oil");
// console.log(shoppingList);


// Норма
//1. Видалення продукту зі списку 
// const deleteProduct = shoppingList.filter(function (item, index) {
//   if (item.name !== 'milk')
//   return item;})

// 2.Додавання покупки в список

// let newProductList;
// const addProduct = (name) => {
//   newProductList = shoppingList.map((item) => {
//     if (item.name === name) {
//       item.amount++;
//       item.sum = item.amount * item.price;
//     }
//     return item;
//   });

//   const newProduct = shoppingList.find((item) => item.name === name);

//   if (!newProduct) {
//     newProductList.push({
//       name: name,
//       amount: 1,
//       status: "notBuy",
//       price: 10,
//       sum() {
//         return this.amount * this.price;
//       },
//     });
//   }
//   return newProductList;
// };

// console.log(addProduct('egg'));

// let newArrNewProduct;

// const buyProduct = (product) => {
//   shoppingList.forEach((item) => {
//     if (item.name === product) {
//       item.amount++;
//     } else shoppingList.push({
//       name: product,
//       amount: 3,
//       status: "notBuy",
//       price: 50,
//       sum() {
//         return this.amount * this.price;
//       },
//     });
//   });
// };

// buyProduct("oil");
// console.log(shoppingList);




// Максимум

// const sumProdukt = shoppingList.reduce((accumulator, item) => {
//  return accumulator + item.sum();
//  }, 0);
//  console.log(sumProdukt);

// const sumNotBuyProdukt = filterNotBuyProdukt.reduce((accumulator, item) => {
//    return accumulator + item.sum();
//    }, 0);
//    console.log(sumNotBuyProdukt);


// 3. Показання продуктів в залежності від суми

// const sortBySum = (sort) => {
//   return shoppingList.sort((a, b) => {
//     const aSum = a.sum();
//     const bSum = b.sum();
//     if (sort === "minToMax") return aSum - bSum;
//     else if (sort === "maxToMin") return bSum - aSum;
//     });
// };

console.log(shoppingList);
// console.log (filterNotBuyProdukt);
// console.log (filterBuyProdukt);
// // shoppingList.newProd()
// // console.log (buynewProd)
// console.log (deleteProduct)
// console.log(newArr)
// console.log(sortBySum("minToMax"));
