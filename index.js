function openDestination(evt, planetName) {
  var i, tabcontent, tablinks, imgSrc;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(planetName).style.display = "block";
  evt.currentTarget.className += " active";

  switch (planetName) {
    case "Moon":
      imgSrc = "/images/moon.png";
      break;
    case "Mars":
      imgSrc = "/images/mars.png";
      break;
    case "Europa":
      imgSrc = "/images/europa.png";
      break;
    case "Titan":
      imgSrc = "/images/titan.png";
      break;
    default:
  }
  document.getElementById("tab-img").src = imgSrc;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// ----------------------------------------------------------------------------------

function chooseMenu(evt, menuItem) {
  var i, pagecontent, menulinks, imgSrc;
  pagecontent = document.getElementsByClassName("pagecontent");
  for (i = 0; i < pagecontent.length; i++) {
    pagecontent[i].style.display = "none";
  }
  menulinks = document.getElementsByClassName("menulinks");
  for (i = 0; i < menulinks.length; i++) {
    menulinks[i].className = menulinks[i].className.replace(" active", "");
  }
  document.getElementById(menuItem).style.display = "block";
  evt.currentTarget.className += " active";

  
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultActive").click();

// -----------------------------------------------------------

function openCrew(evt, crewItem) {
  var i, crewcontent, crewlinks, crewImgSrc;
  crewcontent = document.getElementsByClassName("crewcontent");
  for (i = 0; i < crewcontent.length; i++) {
    crewcontent[i].style.display = "none";
  }
  crewlinks = document.getElementsByClassName("crewlinks");
  for (i = 0; i < crewlinks.length; i++) {
    crewlinks[i].className = crewlinks[i].className.replace(" crew-active", "");
  }
  document.getElementById(crewItem).style.display = "block";
  evt.currentTarget.className += " crew-active";

switch (crewItem) {
    case "Commander":
      crewImgSrc = "url('/images/douglas.png')";
      break;
    case "Specialist":
      crewImgSrc = "url('/images/mark.png')";
      break;
    case "Pilot":
      crewImgSrc = "url('/images/victor.png')";
      break;
    case "Engineer":
      crewImgSrc = "url('/images/anoushen.png')";
      break;
    default:
  }
  document.getElementById("crew-bg-image").style.backgroundImage = crewImgSrc;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("crewActive").click();