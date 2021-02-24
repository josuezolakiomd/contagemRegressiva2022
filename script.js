const headerNewYear = document.querySelector('.header');
const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

headerNewYear.textContent = `Contagem Regressiva até ${nextYear}`;

const updateCountdown = () => {
  const currentTime = new Date();
  const differece = newYearTime - currentTime;

  const days = Math.floor(differece / 1000 / 60 / 60 / 24);
  const hours = Math.floor(differece / 1000 / 60/ 60) % 24;
  const minutes = Math.floor(differece / 1000 / 60) % 60;
  const seconds = Math.floor(differece / 1000) % 60;

  secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds;
  minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes;
  hoursContainer.textContent = hours < 10 ? '0' + hours : hours;
  daysContainer.textContent = days < 10 ? '0' + days : days;
}


setInterval(updateCountdown, 1000);