let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hours < 10) {
        hours = `0` + hours;
    }
    if (minutes < 10) {
        minutes = `0` + minutes;
    }
    if (seconds < 10) {
        seconds = `0` + seconds;
    }
    hrs.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;
},1000)
