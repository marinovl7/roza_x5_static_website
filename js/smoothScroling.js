"use strict";

const linkLearnMore = document.querySelector(".link-learn-more");
const sectionDograma = document.getElementById("sec-dog");

const buttonProducts = document.querySelector(".produkti");
const buttonBeginning = document.querySelector(".nachalo");
const sectionHero = document.getElementById("sec-hero");
const sectionShtori = document.getElementById("sec-shtori");
const sectionProdukti = document.getElementById("profili");
const sectionESOR = document.getElementById(
  "etalbond-ohranitelni-roletki-sennici"
);
const sectionVZ = document.getElementById("vetrozashtitni-zavesi");

const buttonShtori = document.querySelector(".shtori");
const linkShtoriFooter = document.querySelector(".link-shtori-footer");
const linkDogramaFooter = document.querySelector(".link-dograma-footer");
const linkNachaloFooter = document.querySelector(".link-nachalo-footer");
const linkVZFooter = document.querySelector(".vz");
const linkESORFooter = document.querySelector(".esor");

linkLearnMore.addEventListener("click", function (e) {
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
  sectionShtori.scrollIntoView({ behavior: "smooth" });
});

linkShtoriFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionShtori.scrollIntoView({ behavior: "smooth" });
});

linkDogramaFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionDograma.scrollIntoView({ behavior: "smooth" });
});

linkNachaloFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionHero.scrollIntoView({ behavior: "smooth" });
});
linkESORFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionESOR.scrollIntoView({ behavior: "smooth" });
});
linkVZFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionVZ.scrollIntoView({ behavior: "smooth" });
});
