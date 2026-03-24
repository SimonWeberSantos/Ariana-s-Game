"use strict";

// ----------- HEADER -----------
let counter = 0;
const secondHeader = document.querySelector(".title-ariana");
const images = Array.from(document.querySelectorAll('[class="image"]'));
const total = images.length;

images.forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.add("hidden");
    if (++counter === total) secondHeader.classList.remove("hidden");
  });
});

// --------------- CALCULATION -----------------
let number1 = 1;
let number2 = 1;
const correctAnswerImg = document.querySelector(".math-img.correct");
const wrongAnswerImg = document.querySelector(".math-img.wrong");
const firstNumber = document.querySelector(".number1");
const secondNumber = document.querySelector(".number2");
const userInput = document.querySelector(".calcResult");

const calcResult = function () {
  return Number(document.querySelector(".calcResult").value);
};

function randomNumber() {
  return Math.trunc(Math.random() * 5) + 1;
}

function gameSet() {
  number1 = randomNumber();
  number2 = randomNumber();
  firstNumber.textContent = number1;
  secondNumber.textContent = number2;
  userInput.value = "";
}

document.querySelector(".checkCalc").addEventListener("click", () => {
  const result = number1 + number2;
  const userInput = calcResult();

  if (result === userInput) {
    correctAnswerImg.classList.remove("hidden");
  } else {
    wrongAnswerImg.classList.remove("hidden");
  }
});
correctAnswerImg.addEventListener("click", () => {
  gameSet();
  correctAnswerImg.classList.add("hidden");
});

wrongAnswerImg.addEventListener("click", () => {
  gameSet();
  wrongAnswerImg.classList.add("hidden");
});

// ------------------ WORD -----------------------

/*
      <div class="words">
        <p><span class="random-word">TEST</span></p>
        <input type="text" class="textInput" />
        <button class="checkWord">Check</button>
        <img
          class="word-img correct hidden"
          src="unicorn_dancing.gif"
          alt="right answer"
        />
        <img
          class="word-img wrong hidden"
          src="unicorn_crying.gif"
          alt="wrong answer"
        />
      </div>
*/

let randomWord = document.querySelector(".random-word");
let indexRandomWord = 0;
const textUserInput = document.querySelector(".textInput");
const checkWord = document.querySelector(".checkWord");
const wordImgCorrect = document.querySelector(".word-img.correct");
const wordImgWrong = document.querySelector(".word-img.wrong");

const wordList = [
  "ARIANA",
  "SIMON",
  "ESTER",
  "SABRINA",
  "LARISSA",
  "YASMIN",
  "GROSSPAPI",
  "PASCAL",
  "JELENA",
  "LEIS",
  "JOSY",
  "EINHORN",
  "IRIS",
  "JAIRO",
  "DAVE",
  "GERTRUD",
  "TIGER",
  "ELEFANT",
  "PUMA",
  "LIA",
  "HELENA",
  "JOSE",
  "ZILDA",
  "CAMILA",
];

setWordGame();

function setWordGame() {
  indexRandomWord = Math.trunc(Math.random() * wordList.length);
  randomWord.textContent = wordList[indexRandomWord];
  textUserInput.value = "";
}

checkWord.addEventListener("click", () => {
  textUserInput.value = textUserInput.value.toUpperCase();
  if (wordList[indexRandomWord] === textUserInput.value) {
    wordImgCorrect.classList.remove("hidden");
  } else {
    wordImgWrong.classList.remove("hidden");
  }

  wordImgCorrect.addEventListener("click", () => {
    setWordGame();
    wordImgCorrect.classList.add("hidden");
  });

  wordImgWrong.addEventListener("click", () => {
    setWordGame();
    wordImgWrong.classList.add("hidden");
  });
});
