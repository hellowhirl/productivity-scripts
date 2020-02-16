// run this code in console on any YouTube video
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

// Select the node that will be observed for mutations
const targetNode = document.getElementsByTagName("h1")[0];

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function() {
  setTimeout(function() {
    document.getElementById("buttons").appendChild(containerBox);
  }, 500);
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

//
// hide recommend videos section and comments

(function() {
  setTimeout(function() {
    const sidebar = document.getElementById("related");
    sidebar.style.display = "none";

    const comments = document.getElementById("comments");
    comments.style.display = "none";
  }, 500);
})();
