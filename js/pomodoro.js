let studyTime = document.getElementById("study-time");


function timeUp() {
  studyTime.innerText = parseInt(studyTime.innerText) + 1;
}

function timeDown() {
  studyTime.innerText = parseInt(studyTime.innerText) - 1;
}
