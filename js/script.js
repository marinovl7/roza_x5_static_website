"use strict";

const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotContainer = document.querySelector(".dots");
let currSlide = 0;
const maxSlide = slides.length;
const year = document.querySelector(".year");
const sectionHero = document.querySelector(".section-hero");
const mainNav = document.querySelector(".main-nav");
const slider = document.querySelector(".slider");
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const btnMobileNavTab = document.querySelector(".btn-mobile-nav__tab");
const header = document.querySelector(".header");
const featuresContainer = document.querySelector(".features-container");
const galleryContainer = document.querySelector(".container-gallery");
const btnMobileNavGallery = document.querySelector(".btn-mobile-nav__gallery");
const filtrButtons = document.querySelectorAll(".filtr-item");
console.log(filtrButtons);

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
      if (btn === e.target) {
        featuresContainer.classList.toggle("nav-open__tab");
        btn.classList.add("btn-active");
      } else btn.classList.remove("btn-active");
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

lightGallery(document.querySelector(".gallery"), {
  licenseKey: "B51095C9-5BD54D57-8BD5CF47-070929C6",
  mobileSettings: { showCloseIcon: true },
});

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) {
//     mainNav.classList.add("sticky");
//   } else {
//     mainNav.classList.remove("sticky");
//   }
// };

// const navHeight = mainNav.getBoundingClientRect().height;
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(sectionHero);

//Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  else entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

const sectionGallery = document.getElementById("galeria");
allSections.forEach(function (section) {
  if (section !== sectionGallery) {
    section.classList.add("section-hidden");
    sectionObserver.observe(section);
  }
});

const gallery = document.querySelector(".section-gallery");

$(document).ready(function () {
  $(".gallery-search-button").click(function () {
    $(".container-gallery").toggleClass("nav-open__gallery");
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".filtr-item").show("500");
    } else {
      $(".filtr-item").not(`.${value}`).hide("500");
      console.log($(".filtr-item").not(`.${value}`)[0].parentElement);
      $(".filtr-item").filter(`.${value}`).show("500");
    }
  });
});

//sidebar

$(".feat-btn").click(function () {
  $("nav ul .feat-show").toggleClass("show");
  $("nav ul .first").toggleClass("rotate");
});
$(".serv-btn").click(function () {
  $("nav ul .serv-show").toggleClass("show1");
  $("nav ul .second").toggleClass("rotate");
});
$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

btnMobileNav.addEventListener("click", function (e) {
  header.classList.toggle("nav-open");
});
btnMobileNavTab.addEventListener("click", (e) => {
  featuresContainer.classList.toggle("nav-open__tab");
});
btnMobileNavGallery.addEventListener("click", (e) => {
  galleryContainer.classList.toggle("nav-open__gallery");
});
filtrButtons.forEach((item) =>
  item.addEventListener("click", function (e) {
    if (galleryContainer.classList.contains("nav-open__gallery")) {
      galleryContainer.classList.remove("nav-open__gallery");
    }
  })
);
