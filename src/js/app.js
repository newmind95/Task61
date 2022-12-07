import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var elements = document.querySelectorAll('.price')
  elements.forEach((element) => {
    if (element.classList.contains('hot')) {
      element.innerHTML += "&#128293"
    }
  })
});
