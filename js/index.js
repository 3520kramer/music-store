import { ROOT_URL } from "./common.js";

// For PROD:
// By default, $.getScript() sets the cache setting to false. This appends a timestamped query parameter
// to the request URL to ensure that the browser downloads the script each time it is requested.
$.ajaxSetup({
  cache: true,
});

$(document).ready(function () {
  // if non-prod
  loadScript("header");
  loadScript("tracks");
  loadScript("viewTrack");

  // if prod, concat the files above and load that script from the HTML
});

// Alternative to jQuery $.getScript - as it's not possible to declare the script 
// as a module. This makes it impossible to use import in scripts
const loadScript = (filename) =>
  $(
    `<script src="${ROOT_URL}/js/${filename}.js" type="module" defer></script>`
  ).appendTo(document.head);
