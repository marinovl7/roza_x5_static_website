"use strict";

const linkLearnMore = document.querySelector(".link-learn-more");
const sectionDograma = document.getElementById("sec-dog");

const buttonProducts = document.querySelector(".produkti");
const buttonBeginning = document.querySelector(".nachalo");
const sectionHeroS = document.getElementById("sec-hero");
const sectionShtori = document.getElementById("sec-shtori");
const sectionProdukti = document.getElementById("profili");
const sectionESOR = document.getElementById(
  "etalbond-ohranitelni-roletki-sennici"
);
const sectionVZ = document.getElementById("vetrozashtitni-zavesi");
const sectionStukleniVitrini = document.getElementById("stukleni-vitrini");
const sectionGallery = document.getElementById("galeria");

const buttonShtori = document.querySelector(".shtori");
const linkShtoriFooter = document.querySelector(".link-shtori-footer");
const linkDogramaFooter = document.querySelector(".link-dograma-footer");
const linkNachaloFooter = document.querySelector(".link-nachalo-footer");
const linkVZFooter = document.querySelector(".vz");
const linkESORFooter = document.querySelector(".esor");
const linkStukleniVitrini = document.querySelector(
  ".main-nav-link-stukleni-vitrini"
);

const linkStukleniVitriniFooter = document.querySelector(".sv");
const linkGaleriaFooter = document.querySelector(".gallery-footer");

linkLearnMore.addEventListener("click", function (e) {
  sectionDograma.scrollIntoView({ behavior: "smooth" });
});

buttonProducts.addEventListener("click", (e) => {
  e.preventDefault();
  sectionDograma.scrollIntoView({ behavior: "smooth" });
});

buttonBeginning.addEventListener("click", (e) => {
  e.preventDefault();
  sectionHeroS.scrollIntoView({ behavior: "smooth" });
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
  sectionHeroS.scrollIntoView({ behavior: "smooth" });
});
linkESORFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionESOR.scrollIntoView({ behavior: "smooth" });
});
linkVZFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionVZ.scrollIntoView({ behavior: "smooth" });
});
linkStukleniVitrini.addEventListener("click", (e) => {
  e.preventDefault();
  sectionStukleniVitrini.scrollIntoView({ behavior: "smooth" });
});
linkStukleniVitriniFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionStukleniVitrini.scrollIntoView({ behavior: "smooth" });
});
linkGaleriaFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionGallery.scrollIntoView({ behavior: "smooth" });
});
