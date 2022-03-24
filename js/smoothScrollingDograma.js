"use strict";

const sectionProdukti = document.getElementById("profili");
const linkDogramaFooter = document.querySelector(".link-dograma-footer");
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

linkDogramaFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionProdukti.scrollIntoView({ behavior: "smooth" });
});

btnMobileNav.addEventListener("click", function (e) {
  header.classList.toggle("nav-open");
});
