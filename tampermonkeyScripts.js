// ==UserScript==
// @name         YouTube Home Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

//////
// Remove recommended videos and top ad on YT homepage
//

setTimeout(() => {
    const mainVideos = document.getElementById("primary");
    const adContainer = document.getElementById("top-container");

    function hideElements(...elements) {
        elements.forEach((element) => (element.style.display = "none"));
    }

    hideElements(mainVideos, adContainer);

}, 500);



///////////////////////////////////////////////////



// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://classic.jisho.org/words*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jisho.org
// @grant        none
// ==/UserScript==

setTimeout(() => {
    const jField = document.getElementById("jap_field");
    const eField = document.getElementById("eng_field");
    const searchArea = document.getElementsByClassName("search")[0];

    jField.style.fontSize = "18px";
    eField.style.fontSize = "16px";
    searchArea.style.backgroundColor = "ghostwhite";
}, 500)
