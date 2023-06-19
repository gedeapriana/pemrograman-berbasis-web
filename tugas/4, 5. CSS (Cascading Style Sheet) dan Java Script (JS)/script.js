const input = document.querySelector(".input-nama");
const button = document.querySelector(".input-nama-btn");

button.addEventListener("click", () => {
  alert(`Halo ${input.value}`);
});
