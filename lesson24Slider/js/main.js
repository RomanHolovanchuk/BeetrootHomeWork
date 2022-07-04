$("#slick-container-fon").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
});
$("#product").slick({
  centerMode: true,
  infinite: true,
  centerPadding: "1px",
  slidesToShow: 5,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 3,
      },
    },
  ],
});

$("#three-slick").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768, /// не спрацьовує
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480, /// не спрацьовує
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

/*---підключення по ID спрацьовує, але не знаю як вірно прописати щоб не писати кучу коду для кожного окремого елемента------*/

const sold = document.getElementById("sold");
const stock = document.getElementById("stock");
function buy() {
  sold.style.display = "flex";
  stock.style.display = "none";
}
function noBuy() {
  sold.style.display = "none";
  stock.style.display = "flex";
}
stock.addEventListener("click", buy);
sold.addEventListener("click", noBuy);

const sold2 = document.getElementById("sold2");
const stock2 = document.getElementById("stock2");
function buy2() {
  sold2.style.display = "flex";
  stock2.style.display = "none";
}
function noBuy2() {
  sold2.style.display = "none";
  stock2.style.display = "flex";
}
stock2.addEventListener("click", buy2);
sold2.addEventListener("click", noBuy2);

/*---підключення по класу не спрацьовує тест(для тесту добавив кнопку)------*/
// const stocking = document.querySelector(".stocking")
// const solding = document.querySelector(".solding")

// function testBuy3() {
//   stocking.style.display = "flex";
//   solding.style.display = "none";
// }
// function testNoBuy3() {
//   stocking.style.display = "none";
//   solding.style.display = "flex";
// }
// stocking.addEventListener("click", testBuy3);
// solding.addEventListener("click", testNoBuy3);
