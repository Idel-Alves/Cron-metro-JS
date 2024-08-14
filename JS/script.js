const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
const millisecondsElement = document.querySelector('#milliseconds');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const continueBtn = document.querySelector('#continueBtn');
const resetBtn = document.querySelector('#resetBtn');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let paused = false;

const startTime = () => {

    interval = setInterval(() => {

        if (!paused) {

            milliseconds += 10

            if (milliseconds === 1000) {
                seconds ++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes ++;
                seconds = 0;
            }

            minutesElement.textContent = formatTime(minutes);
            secondsElement.textContent = formatTime(seconds);
            millisecondsElement.textContent = formatMilliseconds(milliseconds);
        }

    }, 10)
    
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

const pauseTime = () => {
    paused = true;
    pauseBtn.style.display = 'none';
    continueBtn.style.display = 'block';
}

const continueTime = () => {
    paused = false;
    continueBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

const resetTime = () => {
    clearInterval(interval);
    paused = false;

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    millisecondsElement.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";
}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

const formatMilliseconds = (time) => {
    return time < 100 ? `0${time}` : time;
}