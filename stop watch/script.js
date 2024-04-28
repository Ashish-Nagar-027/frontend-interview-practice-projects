const btnContainer = document.querySelector('.btn_container')
const timer = document.querySelector('.timer')


let milliseconds = 0
let secs = 0
let mins = 0
let pauseTimer = false
let interValId = null


function updateTime() {
    if (!pauseTimer) {
        milliseconds = milliseconds + 10
        if (milliseconds === 1000) {
            milliseconds = 0
            secs++
            if (secs === 60) {
                secs = 0
                mins++
            }
        }

        millisecondsFormated = milliseconds === 0 ? `00` : milliseconds < 100 ? `${milliseconds}` : milliseconds < 10 ? `0${milliseconds}` : milliseconds / 10;
        secondsFormated = secs < 10 ? `0${secs}` : secs
        minsFormated = mins < 10 ? `0${mins}` : mins

        timer.innerHTML = `${minsFormated} : ${secondsFormated} : ${millisecondsFormated}`
    }
}


function startTimer() {
    pauseTimer = false
    interValId = setInterval(updateTime, 10)

}


btnContainer.addEventListener('click', (e) => {

    if (e.target.innerText === 'start') {
        startTimer()
    }

    if (e.target.innerText === 'pause') {
        pauseTimer = true
        interValId = null
    }

    if (e.target.innerText === 'reset') {
        pause = true
        interValId = null
        milliseconds = 0
        secs = 0
        mins = 0
        timer.innerHTML = timer.innerHTML = `00 : 00 : 00`
    }

})










function pause() {
    console.log('pause')
}

function resetTimer() {
    console.log('reset')
}