// Navigation
function showApp(id) {
  document.querySelectorAll(".app").forEach(app => app.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* To-Do */
function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value) return;
  const li = document.createElement("li");
  li.innerHTML = `${input.value} <span onclick="this.parentElement.remove()">❌</span>`;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

/* Calculator */
let exp = "";
function press(val) {
  exp += val;
  document.getElementById("calcInput").value = exp;
}
function calculate() {
  exp = eval(exp).toString();
  document.getElementById("calcInput").value = exp;
}
function clearCalc() {
  exp = "";
  document.getElementById("calcInput").value = "";
}

/* BMI */
function calcBMI() {
  const h = document.getElementById("height").value / 100;
  const w = document.getElementById("weight").value;
  const bmi = (w / (h * h)).toFixed(2);
  document.getElementById("bmiResult").innerText = `Your BMI: ${bmi}`;
}

/* Timer */
function startTimer() {
  let time = document.getElementById("seconds").value;
  const display = document.getElementById("timeDisplay");
  const interval = setInterval(() => {
    display.innerText = time;
    time--;
    if (time < 0) clearInterval(interval);
  }, 1000);
}
