// run this cdoe in console on a YouTube video
// press 'enter' on keybaord wheneever "Skip Ads" appears to immediately skip ad

const containerBox = document.createElement("input");
const textNode = document.createTextNode("Skip Ads");
containerBox.setAttribute("id", "easyToFind");
containerBox.setAttribute("value", "PRESS ENTER HERE");
document.getElementById("buttons").appendChild(containerBox);

const input = document.getElementById("easyToFind");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0].click();
  }
});
