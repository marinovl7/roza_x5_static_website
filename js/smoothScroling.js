"use strict";

const linkLearnMore = document.querySelector(".link-learn-more");
const sectionDograma = document.getElementById("sec-dog");

const buttonProducts = document.querySelector(".produkti");
const buttonBeginning = document.querySelector(".nachalo");
const sectionHero = document.getElementById("sec-hero");
const sectionShtori = document.getElementById("sec-shtori");
const buttonShtori = document.querySelector(".shtori");

linkLearnMore.addEventListener("click", function (e) {
  console.log("clicked");
  sectionDograma.scrollIntoView({ behavior: "smooth" });
});

buttonProducts.addEventListener("click", (e) => {
  e.preventDefault();
  sectionDograma.scrollIntoView({ behavior: "smooth" });
});

buttonBeginning.addEventListener("click", (e) => {
  e.preventDefault();
  sectionHero.scrollIntoView({ behavior: "smooth" });
});

buttonShtori.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(sectionShtori);
  sectionShtori.scrollIntoView({ behavior: "smooth" });
});
