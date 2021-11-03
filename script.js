"use strict";

// calculate random number between 1 - 20
const min = 1;
const max = 20;
const randomNum = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

let secretNum = randomNum(min, max);

let score = Number(document.querySelector(".score").textContent);

let highscore = Number(document.querySelector(".highscore").textContent);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ Not a Number!");
  } else {
    if (guess === secretNum) {
      document.querySelector(".number").textContent = secretNum;
      displayMessage("🎉 You got it!");
      document.querySelector(".number").style.width = "30rem";
      document.body.style.background = "#60b347";

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }

    if (score > 0) {
      if (guess > secretNum) {
        displayMessage("📈 Too High!");
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess < secretNum) {
        displayMessage("📉 Too Low!");
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      displayMessage("👊 You lost the game!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = randomNum(min, max);
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.body.style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
});
