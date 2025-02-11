const btnToggle = document.querySelector("button[id=toggle]");
const body = document.querySelector("body");

btnToggle.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});