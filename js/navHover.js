"use strict";
const navEl = document.querySelector(".main-nav");

const handleHover = function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".main-nav")
      .querySelectorAll(".main-nav-link");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
  }
};

navEl.addEventListener("mouseover", handleHover.bind(0.3));

navEl.addEventListener("mouseout", handleHover.bind(1));
