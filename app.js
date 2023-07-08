const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearActive();
    slide.classList.add("active");
  });
});

function clearActive() {
  slides.forEach((item) => {
    item.classList.remove("active");
  });
}
