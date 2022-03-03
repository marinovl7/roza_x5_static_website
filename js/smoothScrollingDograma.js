"use strict";

const sectionProdukti = document.getElementById("profili");
const linkDogramaFooter = document.querySelector(".link-dograma-footer");

linkDogramaFooter.addEventListener("click", (e) => {
  e.preventDefault();
  sectionProdukti.scrollIntoView({ behavior: "smooth" });
});
