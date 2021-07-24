"use strict";

const buttonGenerate = document.getElementById("btn-generate");
const buttonReset = document.getElementById("btn-reset");
const field = document.querySelector(".field");
const numberWords = document.querySelector(".numberWords");
const inputPlaceholder = numberWords.placeholder;
const regular = /^\d+$/gm; //тільки цифри
const buttonCopy = document.getElementById("btn-copy");

buttonCopy.addEventListener("click", function () {
  const valueField = field.innerHTML;
  window.prompt("Copy to clipboard: Ctrl+C, Enter", valueField);
});

buttonGenerate.addEventListener("click", function () {
  const valueInput = numberWords.value;
  if (valueInput !== "" && regular.test(valueInput)) {
    numberWords.classList.remove("placeholder_red");
    field.innerHTML = loremGenerator.start(loremTable, parseInt(valueInput));
  } else {
    numberWords.classList.add("placeholder_red");
  }
  numberWords.value = "";
});

buttonReset.addEventListener("click", function () {
  numberWords.value = "";
  field.innerHTML = "Lorem text.";
});

numberWords.addEventListener("focus", function () {
  numberWords.placeholder = "";
});

numberWords.addEventListener("blur", function () {
  numberWords.placeholder = inputPlaceholder;
});
