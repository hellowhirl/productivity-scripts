const videoBox = document.getElementById("connatix");
videoBox.style.display = "none";

const sideColumn = document.getElementsByClassName("page-column-2")[0];
sideColumn.style.display = "none";

// Temperatures
const hourlyTemperatures = Array.from(
  document.querySelectorAll(".hourly-card-nfl-header .temp")
);
const dailyTemperatures = Array.from(
  document.querySelectorAll(".daily-forecast-card .temp .high")
);
function shrinkTemperatures(elements) {
  elements.forEach((element) => (element.style.fontSize = "26px"));
}
shrinkTemperatures(hourlyTemperatures);
shrinkTemperatures(dailyTemperatures);

// Weather Icons
const hourlyIcons = Array.from(
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
shrinkIcons(hourlyIcons);
shrinkIcons(weekliyIcons);

// Phrases
const hourlyPhrases = Array.from(
  document.querySelectorAll(".hourly-card-nfl-header .phrase")
);
const dailyPhrases = Array.from(
  document.querySelectorAll(".daily-forecast-card .phrase")
);
function shrinPhrases(elements) {
  elements.forEach((element) => (element.style.fontSize = "16px"));
}
shrinPhrases(hourlyPhrases);
shrinPhrases(dailyPhrases);

// Precipitations
const hourlyPrecipitations = Array.from(
  document.querySelectorAll(".hourly-card-nfl-header .precip")
);
const dailyPrecipitations = Array.from(
  document.querySelectorAll(".daily-forecast-card .precip")
);
function enlargePrecipitations(elements) {
  elements.forEach((element) => (element.style.fontSize = "17px"));
}
enlargePrecipitations(hourlyPrecipitations);
enlargePrecipitations(dailyPrecipitations);

// Row Height (daily)
const dailyRows = Array.from(document.querySelectorAll(".daily-forecast-card"));
function shringRows(elements) {
  elements.forEach((element) => (element.style.height = "72px"));
}
shringRows(dailyRows);
