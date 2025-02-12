const btnToggle = document.querySelector("button[id=toggle]");
const body = document.querySelector("body");
const localStorage = window.localStorage;

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
  } else {
    body.classList.add("dark");
  }
});

btnToggle.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});
