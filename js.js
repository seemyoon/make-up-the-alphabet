"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/
const boxes = document.querySelectorAll(".boxes__box");
const audioClick = new Audio("audio/Mountain Audio - Menu Click.mp3");
const audioCongratulations = new Audio("audio/huge win.wav");

// for (let [index, value] of boxes.entries()) {
//   value.addEventListener("click", () => {
//     value.nextElementSibling.after(value);
//     audioClick.play();
//   });
// console.log(index);
// }
let newValue;
for (let value of boxes) {
  value.addEventListener("click", () => {
    if (value.nextElementSibling != null) {
      value.nextElementSibling.after(value);
      audioClick.play();
      newValue = document.querySelectorAll(".boxes__box");
      console.log(newValue);
    } else if (value.previousElementSibling != null) {
      value.previousElementSibling.before(value);
      audioClick.play();
      newValue = document.querySelectorAll(".boxes__box");
    }
    if (
      newValue[0].classList.contains("box_a") &&
      newValue[1].classList.contains("box_b") &&
      newValue[2].classList.contains("box_c") &&
      newValue[3].classList.contains("box_d") &&
      newValue[4].classList.contains("box_e") &&
      newValue[5].classList.contains("box_f")
    ) {
      audioCongratulations.play();
    }
  });
}
