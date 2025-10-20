const components = {
    clock: document.querySelector('.clock'),
    pauseBttn: document.querySelector('.pause'),
    startBttn: document.querySelector('.start'),
    resetBttn: document.querySelector('.reset'),
};


//newDate
function getTimeFromSeconds(seconds) {
     const data = new Date(seconds * 1000);
     return data.toLocaleTimeString('pt-br', {hour12: false, timeZone: 'UTC'
     });
}



let seconds = 0;
let timer;

function startClock() {
     timer = setInterval(function() {seconds++; components.clock.innerHTML = getTimeFromSeconds(seconds);}, 1000)
}



//Button Actions
components.startBttn.addEventListener('click', function(e){
    clearInterval(timer);
    startClock();
});

components.pauseBttn.addEventListener('click', function(e){
    clearInterval(timer);
});

components.resetBttn.addEventListener('click', function(e){
    clearInterval(timer);
    components.clock.innerHTML = '00:00:00';
    seconds = 0;
});