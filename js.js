"use strict";
/*
TASK:
Create an alphabet game

TIPS:

1-Don't think about shortening the code. If there are a lot of repetitions of the same type of code, this is normal. The first task is to understand the logic of the language, and only then optimize it.
2-Remember about the methods for moving an element from one place to another (before, after, etc.)
3-Remember about properties, getting neighboring elements (previousElementSibling, previousElementSibling, etc.)

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
