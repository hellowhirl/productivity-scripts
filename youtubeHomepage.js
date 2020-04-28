//////
// Remove recommended videos and top ad on YT homepage
//

const mainVideos = document.getElementById("primary");
const adContainer = document.getElementById("top-container");

function hideElements(...elements) {
  elements.forEach((element) => (element.style.display = "none"));
}

hideElements(mainVideos, adContainer);
