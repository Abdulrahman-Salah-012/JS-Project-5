// choose random word then Delete it from array
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

//setting levels
let lvls = {
  Easy: 8,
  Normal: 5,
  Hard: 2,
};
// Default level
let defaultLevelName = "Normal";
let defaultLevelSeconds = lvls[defaultLevelName];

//Catch selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting Level Name + Seconds + total
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable Paste Event
input.onpaste = function (e) {
  e.preventDefault();
};

// Start Game

startButton.onclick = function (e) {
  this.remove();
  input.focus();
  // Generate FUN
  genWords();
};

function genWords() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let wordIndex = words.indexOf(randomWord);
  words.splice(wordIndex, 1);

  upcomingWords.innerHTML = "";
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = words[i];
    upcomingWords.appendChild(div);
  }
  theWord.innerHTML = randomWord;

  // Time FUN
  startPlay();
}

function startPlay() {
  // Reset time
  timeLeftSpan.innerHTML = defaultLevelSeconds;

  let start = setInterval(() => {
    timeLeftSpan.innerHTML -= 1;
    if (timeLeftSpan.innerHTML == 0) {
      clearInterval(start);
      // Compare input value random word
      if (input.value.toLowerCase() === theWord.innerHTML.toLowerCase()) {
        input.value = "";
        scoreGot.innerHTML++;

        // Generate Another Word
        if (words.length > 0) {
          genWords();
        } else {
          let span = document.createElement("span");
          span.className = "good";
          span.innerHTML = "Winner";
          finishMessage.appendChild(span);
          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        span.innerHTML = "Game Over!";
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}
