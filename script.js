"use strict";

// calculate random number between 1 - 20
const min = 1;
const max = 20;
const randomNum = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

let secretNum = randomNum(min, max);

let score = Number(document.querySelector(".score").textContent);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Not a Number!";
  } else {
    if (guess === secretNum) {
      document.querySelector(".number").textContent = secretNum;
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".message").textContent = "🎉 You got it!";
      document.body.style.background = "#60b347";
    }

    if (score > 0) {
      if (guess > secretNum) {
        document.querySelector(".message").textContent = "📈 Too High!";
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess < secretNum) {
        document.querySelector(".message").textContent = "📉 Too Low!";
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      document.querySelector(".message").textContent = "👊 You lost the game!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNum = randomNum(min, max);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.body.style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
});
