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