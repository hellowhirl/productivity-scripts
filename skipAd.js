// run this code in console on a YouTube video
// select input field and press 'enter' on keybaord when "Skip Ads" appears

const containerBox = document.createElement("input");
containerBox.setAttribute("id", "skipAdBox");
containerBox.setAttribute("value", "PRESS ENTER HERE");
document.getElementById("buttons").appendChild(containerBox);

const input = document.getElementById("skipAdBox");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0].click();
  }
});
