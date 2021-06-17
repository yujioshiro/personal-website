// window.addEventListener("wheel", (event) => {
//     console.log(WheelEvent.wheelDeltaY)
// });

let scrollBox = document.getElementById("pseudo-scroll");
let nameTitle = document.getElementById("name-title");
let aboutTitle = document.getElementById("about-title");
let projectsTitle = document.getElementById("projects-title");
let historyTitle = document.getElementById("history-title");
let skillsTitle = document.getElementById("skills-title");


scrollBox.addEventListener("scroll", (event => {
  checkYPosition();
}))

checkYPosition = () => {
  if (scrollBox.scrollTop >= 1 && scrollBox.scrollTop < 5000) {
    nameTitle.style.visibility = "visible";
    nameTitle.style.zoom = `${scrollBox.scrollTop / 5000}`;
    aboutTitle.style.visibility = "hidden";
    projectsTitle.style.visibility = "hidden";
    historyTitle.style.visibility = "hidden";
    skillsTitle.style.visibility = "hidden";
  } else if (scrollBox.scrollTop >= 5000 && scrollBox.scrollTop < 10000) {
    nameTitle.style.visibility = "hidden";
    aboutTitle.style.visibility = "visible";
    aboutTitle.style.zoom = `${(scrollBox.scrollTop - 5000) / 5000}`;
    projectsTitle.style.visibility = "hidden";
    historyTitle.style.visibility = "hidden";
    skillsTitle.style.visibility = "hidden";
  } else if (scrollBox.scrollTop >= 10000 && scrollBox.scrollTop < 15000) {
    nameTitle.style.visibility = "hidden";
    aboutTitle.style.visibility = "hidden";
    projectsTitle.style.visibility = "visible";
    projectsTitle.style.zoom = `${(scrollBox.scrollTop - 10000) / 5000}`;
    historyTitle.style.visibility = "hidden";
    skillsTitle.style.visibility = "hidden";
  } else if (scrollBox.scrollTop >= 15000 && scrollBox.scrollTop < 20000) {
    nameTitle.style.visibility = "hidden";
    aboutTitle.style.visibility = "hidden";
    projectsTitle.style.visibility = "hidden";
    historyTitle.style.visibility = "visible";
    historyTitle.style.zoom = `${(scrollBox.scrollTop - 15000) / 5000}`;
    skillsTitle.style.visibility = "hidden";
  } else if (scrollBox.scrollTop >= 20000 && scrollBox.scrollTop < 25000) {
    nameTitle.style.visibility = "hidden";
    aboutTitle.style.visibility = "hidden";
    projectsTitle.style.visibility = "hidden";
    historyTitle.style.visibility = "hidden";
    skillsTitle.style.visibility = "visible";
    skillsTitle.style.zoom = `${(scrollBox.scrollTop - 20000) / 5000}`;
  }
}
