"use strict";

const buttonGenerate = document.getElementById("btn-generate");
const buttonReset = document.getElementById("btn-reset");
const field = document.querySelector(".field");
const numberWords = document.querySelector(".numberWords");
const inputPlaceholder = numberWords.placeholder;
const regular = /^\d+$/gm; //тільки цифри

buttonGenerate.addEventListener("click", inputValidation);

buttonReset.addEventListener("click", function () {
  numberWords.value = "";
  field.innerHTML = "Lorem text.";
});

//2. додати кнопку скопіювати у буфер

function inputValidation() {
  const valueInput = numberWords.value;
  if (valueInput !== "" && regular.test(valueInput)) {
    numberWords.classList.remove("placeholder_red");
    field.innerHTML = loremGenerator.start(loremTable, parseInt(valueInput));
  } else {
    numberWords.classList.add("placeholder_red");
  }
  numberWords.value = "";
}

numberWords.addEventListener("focus", () => {
  numberWords.placeholder = "";
});

numberWords.addEventListener("blur", () => {
  numberWords.placeholder = inputPlaceholder;
});
