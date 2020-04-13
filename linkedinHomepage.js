//////
// Remove newsfeed from LinkedIn homepage
//

const leftColumn = document.getElementsByClassName("left-rail")[0];
const newsfeed = document.getElementsByClassName("core-rail")[0];
const rightColumn = document.getElementsByClassName("right-rail")[0];

function hideColumns(...elements) {
  elements.forEach(element => (element.style.display = "none"));
}

hideColumns(leftColumn, newsfeed, rightColumn);
