"use strict";
/*
 * Цей модуль генерує текст "рибу" Lorem ipsum.
 *
 *  Функція generate має такі аргументи:
 * - arr - масив слів з яких відбувається генерація;
 * - number - кількість слів в тексті;
 *
 * Контстанти:
 * - PUNCTUATION - масив в якому задається ймовірність закінчення речення на вибрані знаки пунктуації
 *	в даному випадку: крапка . - 0,6 знак оклику ! - 0,2 знак питання ? - 0,2;
 * - COMA - масив в якому задається ймовірність коми, аналогічний поданому вище;
 * - LOREM_NUMBER - довжина першого речення;
 * - MIN_SENTENCE - мінімальна довжина речення;
 * - MAX_SENTENCE - максимальна довжина речення;
 *
 *Окремий файл loremTable.js з масивом:
 * - loremTable - масив слів взятий при генерації в Sublime Text3;
 */

const loremGenerator = (function () {
  let _ARR;
  let lengthArr;
  const PUNCTUATION = [".", ".", ".", ".", ".", ".", "!", "!", "?", "?"];
  const COMA = [" ", " ", " ", " ", " ", " ", " ", " ", ", ", ", "];
  const LOREM_NUMBER = 7;
  const MIN_SENTENCE = 3;
  const MAX_SENTENCE = 40;

  const generate = (arr, number) => {
    let flag = true;
    let targetString = "";
    if (arr) {
      _ARR = arr;
      lengthArr = _ARR.length;
    } else {
      console.error("Відсутній массив.");
    }
    let numberGanerated = LOREM_NUMBER;
    let allNumberWords = 0;
    while (number > allNumberWords) {
      if (LOREM_NUMBER >= number) {
        //перший раз коли кількість слів становить менше або дорівнює LOREM_NUMBER
        targetString += generateSentence(number, flag);
        allNumberWords = number;
      } else if (LOREM_NUMBER < number && flag) {
        //перший раз коли кількість слів становить більше LOREM_NUMBER
        targetString += generateSentence(numberGanerated, flag);
        allNumberWords += numberGanerated;
      } else if (LOREM_NUMBER < number && !flag) {
        //наступні рази при кількості слів більше LOREM_NUMBER
        numberGanerated = randomDigit(MIN_SENTENCE, MAX_SENTENCE);
        if (MIN_SENTENCE >= number - allNumberWords) {
          //
          targetString += generateSentence(number - allNumberWords, flag);
          allNumberWords += number - allNumberWords;
        } else if (numberGanerated <= number - allNumberWords) {
          //
          targetString += generateSentence(numberGanerated, flag);
          allNumberWords += numberGanerated;
        }
      }
      flag = false;
    }
    return targetString;
  };

  const getArrayWords = (numberWord) => {
    const arr = [];
    for (let i = 0; i < numberWord; i++) {
      arr.push(_ARR[randomDigit(0, lengthArr - 1)]);
    }
    return arr;
  };

  const generateSentence = (numberWordsInSentence, first = false) => {
    let arrWords;
    let sentence = "";
    //перший елемент масиву, з якого обовязково розпочинається новий текст
    const FIRST = _ARR[0];
    //генерація необхідної кількості слів в речені згідно numberWordsInSentence
    if (first) {
      //перший раз коли треба почати з lorem
      arrWords = getArrayWords(numberWordsInSentence - 1);
      if (arrWords[0] !== FIRST) {
        //якщо lorem вже на першому місці масиву
        arrWords.unshift(FIRST);
      } else {
        arrWords.push(_ARR[randomDigit(0, lengthArr - 1)]);
      }
    } else {
      arrWords = getArrayWords(numberWordsInSentence);
    }
    //генерація речення
    arrWords.forEach((el, ind, arr) => {
      const LENGTH = arr.length;
      const signPunctuation =
        PUNCTUATION[randomDigit(0, PUNCTUATION.length - 1)];
      const signComa = COMA[randomDigit(0, COMA.length - 1)];
      if (ind === 0) {
        if (LENGTH === 1) {
          sentence +=
            " " + el[0].toUpperCase() + el.substr(1) + signPunctuation;
        } else {
          sentence += " " + el[0].toUpperCase() + el.substr(1) + signComa;
        }
      } else if (ind === LENGTH - 1) {
        sentence += el + signPunctuation;
      } else {
        sentence += el + signComa;
      }
    });
    return sentence;
  };

  const randomDigit = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  };

  return {
    start: generate,
  };
})();
