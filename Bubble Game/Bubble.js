var timer = 60;
var score = 0;
var hitNo;

function makeBubble() {
  let clutter = "";
  for (var i = 0; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function setTimer() {
  let timerStop = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(timerStop);
      document.querySelector("#pbtm").innerHTML = `<h2>Game Over</h2>`;
    }
  }, 1000);
}

function myHit() {
  hitNo = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hitNo;
}

function myScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", (details) => {
  var clickedNo = Number(details.target.textContent);
  if (hitNo === clickedNo) {
    myScore();
    makeBubble();
    myHit();
  }
});

setTimer();
makeBubble();
myHit();
myScore();
