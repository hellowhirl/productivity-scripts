//////
// Block YouTube on browser - including on sites with embedded video
//

const page = document.getElementsByTagName("body")[0];
page.style.display = "none";
window.location = "about:blank";
