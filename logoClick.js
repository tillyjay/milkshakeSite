const toggleButton = document.getElementById("toggleButton");
const navLogo = document.getElementById("navLogo");

toggleButton.addEventListener("touchstart", function() {
  if (toggleButton.getAttribute("aria-expanded") === "true") {
    navLogo.style.transform = "translate(0px, 0px)";
    navLogo.style.transition = 'transform .5s ease-in-out';
    navLogo.style.zIndex = "9999"; // reset z-index
  } else {
    navLogo.style.transform = "translate(0px, 450px)";
    navLogo.style.transition = 'transform .5s ease-in-out';
    navLogo.style.zIndex = "9999"; // bring navLogo to front
  }
});

function onNavbarToggle() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var content = document.querySelector('body > .container, body > .row, body > .jumbotron');
    if (content) {
      content.style.marginTop = navbarHeight + 'px';
    }
  }