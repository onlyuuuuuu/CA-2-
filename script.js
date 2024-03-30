const keyboard = document.querySelector(".keyboard");
const hint = document.querySelector("h4");
const wordDisplay = document.querySelector(".word-display");
const chance = document.querySelector(".chance");
const img = document.querySelector(".img");
const gameOver = document.querySelector(".GameOver");
const gameOverImg = document.querySelector(".gameoverImg");
const answer = document.querySelector(".answer");
const score = document.querySelector("h3");
const successMessage = document.querySelector("h6");
let wrongGuesses = 0;
let timeLeft = 120; 
const storedUsername = localStorage.getItem("username");

const timerDisplay = document.getElementById("timer");

const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `Hey ${storedUsername} you are left with ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const countdown = () => {
  const timer = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft === 0) 
    {
      clearInterval(timer);
      handleGameOver(true); 
    }
  }, 1000);
};

window.onload = countdown;

const randomIndex = Math.floor(Math.random() * wordList.length);
const { word, hint: wordHint } = wordList[randomIndex];

for (let i = 97; i <= 122; i++) 
{
  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerHTML = String.fromCharCode(i);
  keyboard.appendChild(button);
}

const handleGameOver = (isLoss) => {
  let playerScore = 0;
  playerScore = calculateScore(wrongGuesses);
  if (isLoss) 
  {
    gameOver.classList.add("show");
    document.querySelector(".game").style.opacity = 0.8;
    answer.innerText = word;
  } 
  else 
  {
    gameOver.classList.add("show");
    document.querySelector(".game").style.opacity = 0.8;
    gameOverImg.src = "images/victory.gif";
    score.innerText = `Congrats! ${storedUsername} Your Score is: ${playerScore}`;
    answer.innerText = word;
    successMessage.innerText = "You Guessed The Correct Answer!";
  }
};

const calculateScore = () => {
  if (wrongGuesses === 6) return 0;
  if (wrongGuesses === 5) return 10;
  if (wrongGuesses === 4) return 20;
  if (wrongGuesses === 3) return 40;
  if (wrongGuesses === 2) return 60;
  if (wrongGuesses === 1) return 80;
  if (wrongGuesses === 0) return 100;
};

const handleGameWin = () => {
  const guessedLetters = [...document.querySelectorAll(".letter")].map((element) => element.innerText.toLowerCase()).join("");
  if (guessedLetters === word) {
    handleGameOver(false);
  }
};

const handleMatchWord = (letter) => {
  const matches = [];
  word.split("").forEach((char, index) => {
    if (char === letter.toLowerCase()) 
    {
      matches.push(index);
    }
  });

  if (matches.length === 0)
   {
    wrongGuesses++;
    chance.innerText = `${wrongGuesses}/6`;
  }
   else 
   {
    matches.forEach((index) => {
      const letterElements = document.querySelectorAll(".letter");
      letterElements[index].innerText = letter;
      letterElements[index].classList.add("guess");
    });
  }
};

const loadQuestion = () => {
  hint.innerText = `Hint: ${wordHint}`;

  for (let i = 0; i < word.length; i++) 
  {
    let liTag = document.createElement("li");
    liTag.classList.add("letter");
    wordDisplay.appendChild(liTag);
  }

  const buttonTags = document.querySelectorAll(".btn");

  buttonTags.forEach((button) => {
    button.addEventListener("click", (event) => {
      handleMatchWord(event.target.innerText);

      if (wrongGuesses >= 1 && wrongGuesses < 2) 
      {
        img.src = "images/hangman-1.svg";
      } 
      else if (wrongGuesses >= 2 && wrongGuesses < 3) 
      {
        img.src = "images/hangman-2.svg";
      } 
      else if (wrongGuesses >= 3 && wrongGuesses < 4) 
      {
        img.src = "images/hangman-4.svg";
      } 
      else if (wrongGuesses >= 4 && wrongGuesses < 5) 
      {
        img.src = "images/hangman-5.svg";
      } 
      else if (wrongGuesses >= 6 && wrongGuesses < 7) 
      {
        img.src = "images/hangman-6.svg";
        setTimeout(() => {
          handleGameOver(true);
        }, 200);
      }
      handleGameWin();
    });
  });
};

loadQuestion();
