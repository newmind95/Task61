import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  
  // There must be a fire emoji next to the price when it has the .hot class
  var elements = document.querySelectorAll('.price')
  elements.forEach((element) => {
    if (element.classList.contains('price')) {
      element.innerHTML += "&#128293"
    }
  })
});
