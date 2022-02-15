function currentTime() {
  let curTime = new Date();
  let hours = curTime.getHours();
  let minutes = curTime.getMinutes();
  let seconds = curTime.getSeconds();
  let timeString = hours + ":";
  if (minutes < 10) {
    timeString = timeString + "0";
  }
  timeString = timeString + minutes + ":";
  if (seconds < 10) {
    timeString = timeString + "0";
  }
  timeString = timeString + seconds;
  console.log(timeString);
}

setInterval(currentTime, 1000);
