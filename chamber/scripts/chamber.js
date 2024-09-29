// const hamburgerBtn = document.querySelector('#menu');
// const navigationBtn = document.querySelector('.top-navlinks');

// hamburgerBtn.addEventListener('click', () => {
//     hamburgerBtn.classList.toggle('open');
//     navigationBtn.classList.toggle('open');
// });

// Get the year
const todaysDate = new Date();
const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
const timeFormat = todaysDate.toLocaleTimeString();
const formattedDate = todaysDate.toLocaleDateString('en-US', dateFormat);
const formattedDateTime = formattedDate + " " + timeFormat;

const year = document.querySelector('#currentyear');
year.innerHTML = `<span class="highlight">${todaysDate.getFullYear()}</span>`;
// year.innerHTML = `${todaysDate.getFullYear()}`

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `<span class="highlight">${formattedDateTime}</span>`;