"use strict";

const buttonGenerate = document.getElementById("btn-generate");
const buttonReset = document.getElementById("btn-reset");
const field = document.querySelector(".field");
const numberWords = document.querySelector(".numberWords");

buttonGenerate.addEventListener("click", function () {
  field.innerHTML = loremGenerator.start(
    loremTable,
    parseInt(numberWords.value)
  );
});

buttonReset.addEventListener("click", function () {
  numberWords.value = "";
  field.innerHTML = "Lorem text.";
});
