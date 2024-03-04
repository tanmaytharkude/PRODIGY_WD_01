let timer;
let time = 0;
let isRunning = false;
let lapCount = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").innerText = "Start";
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStop").innerText = "Stop";
  }
  isRunning = !isRunning;
}

function updateDisplay() {
  time++;
  let minutes = Math.floor(time / 6000);
  let seconds = Math.floor((time % 6000) / 100);
  let milliseconds = (time % 6000) % 100;

  document.querySelector(".display").innerText = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(value) {
  return value.toString().padStart(2, "0");
}

function lap() {
  let lapTime = document.querySelector(".display").innerText;
  let lapItem = document.createElement("li");
  lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
  document.querySelector(".laps").appendChild(lapItem);
  lapCount++;
}

function reset() {
  clearInterval(timer);
  time = 0;
  isRunning = false;
  document.getElementById("startStop").innerText = "Start";
  document.querySelector(".display").innerText = "00:00:00";
  document.querySelector(".laps").innerHTML = "";
  lapCount = 1;
}
