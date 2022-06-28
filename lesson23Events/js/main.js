const review = document.querySelector(".textReview");
const edit = document.getElementById("textEdit");

let keys = {
  ctrl: false,
  e: false,
  NumpadAdd: false,
};
document.addEventListener("keydown", (event) => {
  if (event.key === "Control") {
    keys.ctrl = true;
  }
  if (event.key === "e") {
    keys.e = true;
  }
  if (event.code === "NumpadAdd") {
    keys.NumpadAdd = true;
  }
  if (keys.ctrl && keys.e) {
    event.preventDefault();
    edit.style.display = "block";
    review.style.display = 'none';
    edit.value = review.textContent;
  }
  if (keys.ctrl && keys.NumpadAdd) {
    event.preventDefault();
    edit.style.display = "none";
    review.style.display = 'block';

    review.textContent = edit.value;
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key === "Control") {
    keys.ctrl = false;
  }
  if (event.key === "e") {
    keys.e = false;
  }
  if (event.code === "NumpadAdd") {
    keys.NumpadAdd = false;
  }
});

// 2.Створити HTML-сторінку з великою таблицею.
const tabl = [
  {
    num: 1,
    first: "Roman",
    last: "Holovanchuk",
    profesion: "frontEnd",
    salary: 500,
  },
  {
    num: 2,
    first: "Ilona",
    last: "Holovanchuk",
    profesion: "qa",
    salary: 1000,
  },
  {
    num: 3,
    first: "Oleksandr",
    last: "Belov",
    profesion: "docktor",
    salary: 800,
  },
  {
    num: 4,
    first: "Olga",
    last: "Beloded",
    profesion: "pm",
    salary: 1200,
  },
  {
    num: 5,
    first: "Max",
    last: "Danilov",
    profesion: "fullstack",
    salary: 1500,
  },
];
console.log(tabl);

function tablView() {
  let newTabl = "";
  tabl.map((item) => {
    newTabl = newTabl + `
      <tr>
              <th scope="row">${item.num}</th>
              <td>${item.first}</td>
              <td>${item.last}</td>
              <td>${item.profesion}</td>
              <td>${item.salary}</td>
              </tr>
      `;
  });
  document.getElementById("tabl_body").innerHTML = newTabl;
}

tablView();
const th1 = document.querySelector(".th1");
const th2 = document.querySelector(".th2");
const th3 = document.querySelector(".th3");
const th4 = document.querySelector(".th4");
const th5 = document.querySelector(".th5");

th1.addEventListener("click", () => {
  if (th1.textContent == "#") {
    tabl.sort((a, b) => a.num - b.num);
  }
  tablView();
});
th2.addEventListener("click", () => {
  tabl.sort((a, b) => a.first.localeCompare(b.first));
  tablView();
});
th3.addEventListener("click", () => {
  tabl.sort((a, b) => a.last.localeCompare(b.last));
  tablView();
});
th4.addEventListener("click", () => {
  tabl.sort((a, b) => a.profesion.localeCompare(b.profesion));
  tablView();
});
th5.addEventListener("click", () => {
  tabl.sort((a, b) => a.salary - b.salary);
  tablView();
});

// document.addEventListener("keydown", function (event) {
// 	console.log(`Нажата клавиша ${event.code} (${event.key})`);
// });


