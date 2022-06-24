let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
const createList = document.querySelector(".listItem");
for (let i = 0; i < playList.length; i++) {
  const list = document.createElement("li");
  createList.appendChild(list);
  list.innerHTML = `Група - <b>${playList[i].author}</b> пісня - <i>${playList[i].song}</i>`;
}

const btn = document.getElementById("btn");
const svitlofor = document.getElementById("svitlofor");
const modal = document.querySelector(".modal");
btn.addEventListener("click", () => {
  modal.style.display = "block";
  btn.style.display = "none";
  svitlofor.style.marginTop = "50px";
});
const closeButton = document.querySelector(".closeBtn");
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  btn.style.display = "block";
});

// Світлофор
const red = document.createElement("div");
const yellow = document.createElement("div");
const green = document.createElement("div");
const btnSvitlofor = document.createElement("button");
btnSvitlofor.innerText = "Міняємо колір";
btnSvitlofor.classList.toggle("svitlofor");
modal.after(btnSvitlofor);
btnSvitlofor.after(red);
red.after(yellow);
yellow.after(green);
red.style.backgroundColor = "red";
let color = 1;
btnSvitlofor.addEventListener("click", () => {
  if (color === 1) {
    yellow.style.backgroundColor = "yellow";
    red.style.backgroundColor = "rgb(202, 202, 202)";
    green.style.backgroundColor = "rgb(202, 202, 202)";
  } else if (color === 2) {
    yellow.style.backgroundColor = "rgb(202, 202, 202)";
    red.style.backgroundColor = "rgb(202, 202, 202)";
    green.style.backgroundColor = "green";
  } else if (color === 3) {
    red.style.backgroundColor = "red";
    green.style.backgroundColor = "rgb(202, 202, 202)";
    color = 0;
  }
  color++;
});
