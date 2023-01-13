let timerDisplay = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let alarm = document.querySelector("#alarm");


let timer = null;
let defaultSeconds= 25
let seconds = 25; // 25 minutes

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    timer = setInterval(() => {
      seconds--;
      updateTimerDisplay();
  
      if (seconds === 0) {
        stopTimer();
        alarm.play();
        resetTimer(); 
      }
    }, 1000);
  }

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  seconds = defaultSeconds
  updateTimerDisplay();
}


function updateTimerDisplay() {
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    document.title = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds} - Pomodoro APP`;
}


