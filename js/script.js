"use strict";

const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotContainer = document.querySelector(".dots");
let currSlide = 0;
const maxSlide = slides.length;
const year = document.querySelector(".year");

const slider = document.querySelector(".slider");

//Getting the current year for the footer and the copywrite
year.textContent = new Date().getFullYear();

function createDots() {
  slides.forEach((s, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
}

createDots();
function activateDot(slide) {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  });
}
activateDot(0);

function goToSlide(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
}
goToSlide(0);

function nextSlide() {
  if (currSlide === maxSlide - 1) currSlide = 0;
  else currSlide++;

  goToSlide(currSlide);
  activateDot(currSlide);
}

function prevSlide() {
  if (currSlide === 0) currSlide = maxSlide - 1;
  else currSlide--;

  goToSlide(currSlide);
  activateDot(currSlide);
}
//Next slide
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    console.log(slide);
    currSlide = +slide;
    goToSlide(slide);
    activateDot(slide);
  }
});
setInterval(function () {
  nextSlide();
}, 12000);

const allSlides = Array.from(document.querySelectorAll(".features-content"));
const allButons = Array.from(document.querySelectorAll(".btn-change"));
allButons.forEach((btnChange) => {
  btnChange.addEventListener("click", function (e) {
    allButons.forEach((btn) => {
      if (btn === e.target) btn.classList.add("btn-active");
      else btn.classList.remove("btn-active");
    });
    setSlideVisibility(e.target.dataset.slide);
  });
});

function setSlideVisibility(slideNum) {
  allSlides.forEach((slide, i) => {
    if (i == slideNum) slide.classList.add("feature-active");
    else slide.classList.remove("feature-active");
  });
}
