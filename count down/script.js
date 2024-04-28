let inputs = document.querySelectorAll("input[type='number']")
let startBtn = document.querySelector(".startCountdown")
let pauseBtn = document.querySelector(".pauseCountdown")
let resetBtn = document.querySelector(".resetCountdown")
let hours = document.querySelector("#hours")
let mins = document.querySelector("#mins")
let secs = document.querySelector("#secs")


let timer = null



startBtn.addEventListener('click', () => {
    if (hours.value != 0 || secs.value != 0 || mins.value != 0) {
        startBtn.disabled = true
        pauseBtn.disabled = false
        resetBtn.disabled = false

        timer = setInterval(updateTime, 1000)

    } else {
        alert('please put some values in inputs')
    }
})

resetBtn.addEventListener('click', resetTimer)
pauseBtn.addEventListener('click', () => {
    startBtn.disabled = false
    pauseBtn.disabled = true
    clearInterval(timer)
})



function updateTime() {
    if (hours.value == 0 && secs.value == 0 && mins.value == 0) {
        resetTimer()
    }
    else if (mins.value == 0 && hours.value != 0) {
        mins.value = 59
        secs.value = 59
        hours.value = `${hours.value <= 10 ? "0" : ""}${hours.value - 1}`;
    }
    else if (secs.value == 0 && mins.value != 0) {
        secs.value = 59
        mins.value = `${mins.value <= 10 ? "0" : ""}${mins.value - 1}`;
    }
    else if (secs.value != 0) {
        secs.value = `${secs.value <= 10 ? "0" : ""}${secs.value - 1}`;
    }
}


function resetTimer() {
    clearInterval(timer)
    secs.value = ''
    mins.value = ''
    hours.value = ''
    pauseBtn.disabled = true
    startBtn.disabled = false
    resetBtn.disabled = true
}