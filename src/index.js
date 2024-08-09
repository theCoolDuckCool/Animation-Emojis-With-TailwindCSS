let box1 = document.getElementById("box1");

box1.addEventListener("click", (event) => {
  box1.textContent = "😱";
});

box1.addEventListener("mouseover", (event) => {
  box1.textContent = "😬";
});

box1.addEventListener("mouseout", (event) => {
  box1.textContent = "😀";
});
