function timer() {
const components = {
  clock: document.querySelector(".clock"),
/*  pauseBttn: document.querySelector(".pause"),
  startBttn: document.querySelector(".start"),
  resetBttn: document.querySelector(".reset"),*/
};

//newDate
function getTimeFromSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-br", { hour12: false, timeZone: "UTC" });
}

let seconds = 0;
let timer;

function startClock() {
  timer = setInterval(function () {
    seconds++;
    components.clock.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
}

/*
//Button Actions
components.startBttn.addEventListener("click", function (e) {
  components.clock.classList.remove("paused");
  clearInterval(timer); //Before restart
  startClock();
});

components.pauseBttn.addEventListener("click", function (e) {
  components.clock.classList.add("paused");
  clearInterval(timer);
});

components.resetBttn.addEventListener("click", function (e) {
  clearInterval(timer);
  components.clock.classList.remove("paused");
  components.clock.innerHTML = "00:00:00";
  seconds = 0; //Sets seconds to 0;
});*/



//To optimize the addEventListener
document.addEventListener("click", function (e) {
  const el = e.target; //coloco o elemento clicado (e.target) em uma variável
  if (el.classList.contains("reset")) {
    clearInterval(timer);
    components.clock.classList.remove("paused");
    components.clock.innerHTML = "00:00:00";
    seconds = 0; //Sets seconds to 0;
  }
    if (el.classList.contains("start")) {
  components.clock.classList.remove("paused");
  clearInterval(timer); //Before restart
  startClock();
  }
    if (el.classList.contains("pause")) {
  components.clock.classList.add("paused");
  clearInterval(timer);
  }
});
}

timer();