
// MOBILE
// Mobile navbar move logo up and down when toggled open
const toggleButton = document.getElementById("toggleButton");
const navLogo = document.getElementById("navLogo");

// transform transition to move logo up and down in sync
toggleButton.addEventListener("touchstart", function() 
{
  // if navbar not toggled don't move logo 
  if (toggleButton.getAttribute("aria-expanded") === "true") 
  {
    navLogo.style.transform = "translate(0px, 0px)";
    navLogo.style.transition = 'transform .5s ease-in-out';
    navLogo.style.zIndex = "9999"; // reset z-index
  } 
  // else move navbar logo down 450px
  else 
  {
    navLogo.style.transform = "translate(0px, 450px)";
    navLogo.style.transition = 'transform .5s ease-in-out';
    navLogo.style.zIndex = "9999"; // bring navLogo to front
  }
});


//MOBILE
// Bring mobile navbar logo to front when toggled so as not to be hidden behind
function onNavbarToggle() 
{
  // get navbar height
  let navbarHeight = document.querySelector('.navbar').offsetHeight;
  // first occurrence of either .container, .row, or .jumbotron 
  let content = document.querySelector('body > .container, body > .row, body > .jumbotron');
  // if content exisits move content down the height of navbar
  if (content) 
  {
    content.style.marginTop = navbarHeight + 'px';
  }
}


