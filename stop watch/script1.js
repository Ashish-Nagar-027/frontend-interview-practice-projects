const btnContainer = document.querySelector('.btn_container');
const timer = document.querySelector('.timer');

let startTime = 0;
let elapsedTime = 0;

let milliseconds = 0;
let secs = 0;
let mins = 0;
let isPaused = true;
let intervalId = null;

function updateTime() {
    if (!isPaused) {
        const currentTime = Date.now() - startTime;

        milliseconds = Math.floor((currentTime % 1000) / 10);
        secs = Math.floor((currentTime / 1000) % 60);
        mins = Math.floor((currentTime / (1000 * 60)) % 60);

        const millisecondsFormated = milliseconds === 0 ? `00` : milliseconds < 100 ? `${milliseconds}` : milliseconds < 10 ? `0${milliseconds}` : milliseconds;
        const secondsFormated = secs < 10 ? `0${secs}` : secs;
        const minsFormated = mins < 10 ? `0${mins}` : mins;

        timer.innerHTML = `${minsFormated} : ${secondsFormated} : ${millisecondsFormated}`;
    }
}

function startTimer() {
    if (isPaused) {
        isPaused = false
        startTime = Date.now() - elapsedTime
        intervalId = setInterval(updateTime, 10);
    }
}

function pauseTimer() {
    isPaused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
}

function resetTimer() {
    isPaused = true;
    clearInterval(intervalId);
    milliseconds = 0;
    secs = 0;
    mins = 0;

    startTime = 0;
    elapsedTime = 0;

    timer.innerHTML = `00 : 00 : 00`;
}

btnContainer.addEventListener('click', (e) => {
    if (e.target.innerText === 'start') {
        startTimer();
    } else if (e.target.innerText === 'pause') {
        pauseTimer();
    } else if (e.target.innerText === 'reset') {
        resetTimer();
    }
});
