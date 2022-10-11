// кнопка и поле ввода

let button = document.querySelector(".btn");
const container = document.querySelector(".container");
let clr = [
  "red",
  "skyblur",
  "teal",
  "green",
  "yellow",
  "white",
  "black",
  "orange",
  "fuchsia",
  "salmon",
  "olive",
  "rebeccapurple",
];
let arr = [];

button.addEventListener("click", function create() {
  const input = document.createElement("input");
  input.className = "inp";
  input.placeholder = "диаметр круга";
  container.append(input);
  button.textContent = "Нарисовать";

  // шарики
  const wrap = document.createElement("div");
  wrap.style.lineHeight = "0px";
  wrap.className = "wrap";
  container.after(wrap);

  button.addEventListener("click", function () {
    container.remove();

    for (let i = 0; i < 10; i++) {
      for (let k = 0; k < 10; k++) {
        let div = document.createElement("div");
        div.className = "ball";
        div.style.border = "1px solid gray";
        div.style.width = "70px";
        div.style.height = "70px";
        div.style.display = "table-cell";
        div.style.borderRadius = "30px";
        div.style.backgroundColor = clr[Math.floor(Math.random() * 12)];

        arr.push(div);
        wrap.appendChild(div);

        div.addEventListener("click", function () {
          div.remove();
        });
      }

      wrap.appendChild(document.createElement("br"));
    }
  });
});
