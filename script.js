const love = document.getElementById("love");
const nolove = document.getElementById("no-love");

love.addEventListener("click", () => {
  alert("Mình biết mà ahihi 💖");
});

nolove.addEventListener("mouseover", () => {
  nolove.classList.toggle("move");
});
