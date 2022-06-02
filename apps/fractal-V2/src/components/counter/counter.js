console.log("start");
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const endDateTime = document.querySelector('[data-time]');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds;

  console.log("noww:", now);
  console.log("then:", then);
  console.log(now - then);

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);

  }, 1000);
}

function displayTimeLeft(seconds) {
  console.log(seconds);
  const remainderSeconds = seconds % 60;
  const minutes = Math.floor(seconds / 60);
  const remainderMinutes = minutes % 60;
  const hours = Math.floor(minutes / 60);
  const remainderHours = hours % 60;
  const days = Math.floor(hours / 24);
  const display = `${days}days ${remainderHours < 10 ? '0' : ''}${remainderHours}:${remainderMinutes < 10 ? '0' : ''}${remainderMinutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const year = end.getFullYear();
  const month = end.getMonth();
  const day = end.getDate();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${day}-${month}-${year} ${hour}:${minutes}`;
}

function startTimer() {
  const endDate = new Date(endDateTime.dataset.time);
  const seconds = Date.parse(endDate);

  console.log("endDate, seconds", endDate, seconds);

  timer(seconds);
}

// startTimer();