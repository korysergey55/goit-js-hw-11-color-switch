const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const min = 0;
const max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startRef = document.querySelector("[data-action='start']");
const stoptRef = document.querySelector("[data-action='stop']");
const bodyRef = document.querySelector("body");

startRef.addEventListener("click", changeColor);
stoptRef.addEventListener("click", stopChangeColor);

let setTimer = null;

function changeColor(event) {
  if (setTimer) return;
  startRef.disabled = true;
  setTimer = setInterval(() => {
    const randomIndex = randomIntegerFromInterval(min, max);
    bodyRef.style.backgroundColor = colors[randomIndex];
  }, 1000);
}

function stopChangeColor(event) {
  startRef.disabled = false;
  clearInterval(setTimer);
  setTimer = null;
}
