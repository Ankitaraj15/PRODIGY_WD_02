let timer;
let startTime;
let running = false;

function startStopwatch() {
    if (!running) {
        running = true;
        startTime = Date.now() - (timer || 0);
        timer = setInterval(updateDisplay, 10);
        document.querySelector('.start-btn').textContent = 'Pause';
    } else {
        running = false;
        clearInterval(timer);
        document.querySelector('.start-btn').textContent = 'Resume';
    }
}

function stopStopwatch() {
    running = false;
    clearInterval(timer);
    document.querySelector('.start-btn').textContent = 'Start';
}

function resetStopwatch() {
    running = false;
    clearInterval(timer);
    document.querySelector('.start-btn').textContent = 'Start';
    document.querySelector('.display').textContent = '00:00:00:000';
}

function updateDisplay() {
    let elapsed = Date.now() - startTime;
    let hours = Math.floor(elapsed / 3600000);
    let minutes = Math.floor((elapsed % 3600000) / 60000);
    let seconds = Math.floor((elapsed % 60000) / 1000);
    let milliseconds = Math.floor(elapsed % 1000);

    document.querySelector('.display').textContent = formatTime(hours, minutes, seconds, milliseconds);
}

function formatTime(hours, minutes, seconds, milliseconds) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${padMilliseconds(milliseconds)}`;
}

function pad(number) {
    return ('0' + number).slice(-2);
}

function padMilliseconds(milliseconds) {
    if (milliseconds < 10) {
        return '00' + milliseconds;
    } else if (milliseconds < 100) {
        return '0' + milliseconds;
    } else {
        return milliseconds;
    }
}
