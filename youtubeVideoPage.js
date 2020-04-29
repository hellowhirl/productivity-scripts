//////
// hide reccommended videos section and comments
//

setTimeout(function () {
  const sidebar = document.getElementById("related");
  sidebar.style.display = "none";

  const comments = document.getElementById("comments");
  comments.style.display = "none";
}, 1000);

//////
// select input field and press '0' on keybaord when "Skip Ads" appears
//

const containerBox = document.createElement("input");

containerBox.setAttribute("id", "skipAdBox");
containerBox.setAttribute("value", "PRESS 0 HERE");
document.getElementById("search-form").appendChild(containerBox);

const input = document.getElementById("skipAdBox");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 48) {
    event.preventDefault();
    document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0].click();
  }
});

//////
// hide author recommended videos at end of a video
//

const extraVideos = document.getElementsByClassName("ytp-ce-video");
const otherExtraVideos = document.getElementsByClassName("ytp-ce-element");

for (let element of extraVideos) element.style.display = "none";
for (let element of otherExtraVideos) element.style.display = "none";

//////
// hide video count
//

// const videoCount = document.getElementById("count");
const videoCount = document.querySelectorAll(
  "#count .ytd-video-primary-info-renderer"
)[0];

videoCount.style.display = "none";

//////
// hide related videos at end of video
//

setTimeout(() => {
  const endScreen = document.getElementsByClassName("ytp-endscreen-content")[0];

  endScreen.style.display = "none";
}, 2000);
