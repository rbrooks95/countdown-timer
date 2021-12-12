const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pausebutton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimiter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimiter);
let duration;
const timer = new Timer(durationInput, startButton, pausebutton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimiter * timeRemaining) / duration - perimiter
    );
  },
  onComplete() {
    console.log("the timer finished");
  },
});
