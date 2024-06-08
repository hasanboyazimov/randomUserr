const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");


// toggle mode
const localMode = localStorage.getItem("mode");

const toggleFunc = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};

if (localMode) {
  toggleFunc();
}

const toggleModeBtn = () => {
  toggleFunc();
};

darkBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "dark-mode");
});

lightBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "");
});
