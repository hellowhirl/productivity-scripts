const videoBox = document.getElementById("connatix");
videoBox.style.display = "none";

const sideColumn = document.getElementsByClassName("page-column-2")[0];
sideColumn.style.display = "none";

//
const temperatures = Array.from(
  document.querySelectorAll(".hourly-card-nfl-header .temp")
);
const weeklyTemperatures = Array.from(
  document.querySelectorAll(".daily-forecast-card .temp .high")
);
function shrinkTemperatures(elements) {
  elements.forEach((element) => (element.style.fontSize = "26px"));
}
shrinkTemperatures(temperatures);
shrinkTemperatures(weeklyTemperatures);

//
const icons = Array.from(
  document.querySelectorAll(".hourly-card-nfl-header .icon")
);
const weekliyIcons = Array.from(
  document.querySelectorAll(".daily-forecast-card .icon")
);
function shrinkIcons(elements) {
  elements.forEach(
    (element) => (
      (element.style.width = "42px"), (element.style.height = "42px")
    )
  );
}
shrinkIcons(icons);
shrinkIcons(weekliyIcons);

//
const phrases = Array.from(
  document.querySelectorAll(".hourly-card-nfl-header .phrase")
);
function shrinPhrases(elements) {
  elements.forEach((element) => (element.style.fontSize = "16px"));
}
shrinPhrases(phrases);

//
const precipitations = Array.from(
  document.querySelectorAll(".hourly-card-nfl-header .precip")
);
function enlargePrecipitations(elements) {
  elements.forEach((element) => (element.style.fontSize = "17px"));
}
enlargePrecipitations(precipitations);
