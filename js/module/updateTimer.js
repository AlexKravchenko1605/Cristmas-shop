const days = document.querySelector(".day");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const newYearDate = new Date("2025-12-31T00:00:00");

export function updateTimer() {
  const now = new Date();
  const remainingTime = newYearDate - now;

  const days_left = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours_left = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes_left = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds_left = Math.floor((remainingTime % (1000 * 60)) / 1000);

  days.innerText = days_left.toString();
  hours.innerText = hours_left.toString();
  minutes.innerText = minutes_left.toString();
  seconds.innerText = seconds_left.toString();
}
