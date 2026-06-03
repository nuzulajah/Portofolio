const clockTime = document.querySelector('.clock-time');
const clockDate = document.querySelector('.clock-date');

const monthNames = [
  "Januari", "Februari", "Maret", "April",
  "Mei", "Juni", "Juli", "Agustus",
  "September", "Oktober", "November", "Desember"
];

function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const day = now.getDate();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  clockTime.textContent = `${hours}:${minutes}:${seconds}`;
  clockDate.textContent = `${day} ${month} ${year}`;
}

updateClock();
setInterval(updateClock, 1000);