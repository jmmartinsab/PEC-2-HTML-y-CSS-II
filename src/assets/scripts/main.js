/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as bootstrap from "bootstrap";

/**
 * Write any other JavaScript below
 */
const hamburger = document.getElementById("hamburger");
const headerMenu = document.querySelector(".js-header__menu-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  headerMenu.classList.toggle("js-header__menu-container--show");
});
