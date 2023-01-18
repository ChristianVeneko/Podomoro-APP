let timerDisplay = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let alarm = document.querySelector("#alarm");
let timerDurationInput = document.querySelector("#timer-duration");
let breakDurationInput = document.querySelector("#break-duration");
let settingsForm = document.querySelector("#settings-form");

settingsForm.addEventListener("submit", updateSettings);

let timer = null;
let timerDuration = 25
let seconds = 25 * 60; // 25 minutes
let breakDuration = 5
let isBreak  = false
let breakTimer 

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    startBtn.disabled = true;
    timer = setInterval(() => {
      seconds--;
      updateTimerDisplay();
  
      if (seconds === 0) {
        stopTimer();
        alarm.play();
        isBreak = true
        startBreak(); 
      }
    }, 1000);
  }

function stopTimer() {
  clearInterval(timer);
  clearInterval(breakTimer);
  clearInterval(timerDuration);
  startBtn.disabled = false;
}

function resetTimer() {
  stopTimer();
  if(isBreak){
    seconds = breakDuration * 60
  }else{
    seconds = timerDuration * 60
  }
  startBtn.disabled = false;
  updateTimerDisplay();
}

function updateSettings(event) {
    event.preventDefault();
    timerDuration = timerDurationInput.value;
    breakDuration = breakDurationInput.value;
    seconds = timerDuration * 60;
    updateTimerDisplay();
}

function startBreak() {
  startBtn.disabled = true;
  seconds = breakDuration * 60;
  breakTimer = setInterval(() => {
    seconds--;
    updateTimerDisplay();

    if (seconds === 0 && isBreak) {
      stopTimer();
      alarm.play();
      isBreak = false
      resetTimer();
    }
  }, 1000);
}


function updateTimerDisplay() {
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    document.title = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds} - Pomodoro APP`;
}


