const timerDisplay = document.querySelector(".timer");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const timeLeft = parseInt(prompt("Enter set Time: "));
let timerInterval;
let isRunning = false;

const startTimer = (duration) => {
  let timer = duration;
  timerInterval = setInterval(() => {
    const minutes = parseInt(timer / 60, 10);
    const seconds = parseInt(timer % 60, 10);

    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    const displaySecond = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.innerHTML = displayMinutes + ":" + displaySecond;

    if (--timer < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Breath Out";

      setTimeout(() => {
        timerDisplay.textContent = "Breath In";
        startTimer(timeLeft);
      }, 3000);
    }
  }, 1000);
};

const stopTimer = () => {
    clearInterval(timerInterval);
    timerDisplay.textContent = "Breath In";
    isRunning = false
}

startBtn.addEventListener("click", () => {
  if(!isRunning){
    startTimer(timeLeft);
    isRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  stopTimer();
  isRunning = false;
});
