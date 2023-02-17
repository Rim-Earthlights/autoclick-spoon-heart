// ==UserScript==
// @name         autoclick-spoon-heart
// @namespace    http://rim-linq.net
// @version      0.1
// @description  automate click for spoon heart.
// @author       Rim Earthlights
// @match        https://www.spooncast.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spooncast.net
// @grant        none
// ==/UserScript==
(function () {
  "use strict";
  setInterval(function () {
    let modal = document.querySelector(".btn-close");
    let heart = document.querySelector(".btn-wrap .btn-live-wrap > button");
    let progress = document.querySelector("div .circle_progress");

    if (modal != null) {
      // console.info("modal window is active.");
    }

    if (progress != null) {
      // console.info("still in progress");
      return;
    }

    if (heart != null) {
      console.info("click heart!");
      heart.click();
    }
  }, 1000);
})();
