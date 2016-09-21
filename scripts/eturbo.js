'use strict';
var defaultPage = document.querySelector('[data-default=true]');

function hashController(event) {
  // Don't reload the page or do any weird scrolling
  event.preventDefault();

  showOrHide(defaultPage);

  // Scroll to the top
  window.scrollTo(0, 0);
}

function loadController() {
  showOrHide(defaultPage);
}

function showOrHide(page) {
  page.dataset.default = !(window.location.hash && page.dataset.default === 'true').toString();
}

window.addEventListener('hashchange', hashController);
window.addEventListener('load', loadController);
