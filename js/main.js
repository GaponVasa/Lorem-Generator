"use strict";

let buttonGenerate = document.getElementById('btn-generate');
let buttonReset = document.getElementById('btn-reset');
let field = document.querySelector('.field');
let numberWords  = document.querySelector('.numberWords');

buttonGenerate.addEventListener('click',function(){
	// field.innerHTML = ' ';
	field.innerHTML = loremGenerator.start(loremTable, parseInt(numberWords.value));
});

buttonReset.addEventListener('click',function(){
	// field.innerHTML = ' ';
	numberWords.value = '';
	field.innerHTML = 'Lorem text.';
})

