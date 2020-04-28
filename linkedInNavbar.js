//////
// Remove home and notifications icons from nav bar on LinkedIn
//

const feedIcon = document.getElementById("feed-nav-item");
const notifyIcon = document.getElementById("notifications-nav-item");

function hideElements(...elements) {
  elements.forEach((element) => (element.style.display = "none"));
}

hideElements(feedIcon, notifyIcon);
