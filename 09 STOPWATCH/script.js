let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
const time = document.querySelector(".timer-display");
let interval = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(interval !== null) {
        clearInterval(interval);
    }
    interval = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(interval);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(interval);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    time.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds 
                : milliseconds < 100 ? "0" + milliseconds
                : milliseconds;
    
    time.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}