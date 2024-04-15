let hoursDisplay = document.getElementById("hrs");
let minutesDisplay = document.getElementById("min");
let secondsDisplay = document.getElementById("sec");

// Update time every second
setInterval(() => {
  // Get current time
  let currentTime = new Date();

  // Extract hours, minutes, and seconds
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // Pad single-digit values with leading zeros
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  // Update the display
  hoursDisplay.innerHTML = hours;
  minutesDisplay.innerHTML = minutes;
  secondsDisplay.innerHTML = seconds;
}, 1000);
