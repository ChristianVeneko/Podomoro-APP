let timerDisplay = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let alarm = document.querySelector("#alarm");
let timerDurationInput = document.querySelector("#timer-duration");
let settingsForm = document.querySelector("#settings-form");

settingsForm.addEventListener("submit", updateSettings);

let timer = null;
let timerDuration = 25
let defaultSeconds= 25
let seconds = 25 * 60; // 25 minutes

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
  clearInterval(timerDuration);
}

function resetTimer() {
  stopTimer();
  seconds = timerDuration * 60
  updateTimerDisplay();
}

function updateSettings(event) {
    event.preventDefault();
    timerDuration = timerDurationInput.value;

    seconds = timerDuration * 60;
    updateTimerDisplay();
  }

function updateTimerDisplay() {
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    document.title = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds} - Pomodoro APP`;
}


