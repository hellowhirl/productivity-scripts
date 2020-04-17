//////
// remove Google ad boxes
//

setTimeout(() => {
  const iframes = document.getElementsByTagName("iframe");

  for (let element of iframes) {
    const id = element.id;
    if (id.includes("google_ads")) element.style.display = "none";
  }
}, 2000);
