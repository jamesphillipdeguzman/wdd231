// ----------------------------INITIALIZE DOM HERE ------------------------------- //
// Make sure everything is loaded/initialized first
document.addEventListener('DOMContentLoaded', () => {


    // Get the year
    const todaysDate = new Date();
    const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    const timeFormat = todaysDate.toLocaleTimeString();
    const formattedDate = todaysDate.toLocaleDateString('en-US', dateFormat);
    const formattedDateTime = formattedDate + " " + timeFormat;

    const year = document.querySelector('#currentyear');
    year.innerHTML = `<span class="highlight">${todaysDate.getFullYear()}</span>`;

    const lastModified = document.querySelector('#lastModified');
    lastModified.innerHTML = `<span class="highlight">${formattedDateTime}</span>`;

    const hamburgerBtn = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation ul");

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('open');
        navigation.classList.toggle('open');

    });


    // Define local storage here
    function lsStorage() {
        // initialize display elements
        const todayDisplay = document.querySelector('#today');
        const searchDisplay = document.querySelector('#search');

        // get the stored value in localStorage
        let numSearch = Number(window.localStorage.getItem('search-ls'));

        //determine if this is the first search
        if (numSearch !== 0) {
            searchDisplay.textContent = numSearch;
        } else {
            searchDisplay.textContent = `Welcome to our site!`;
        }

        numSearch++;

        // store new number of visits
        localStorage.setItem('search-ls', numSearch);

        //show today's date
        todayDisplay.textContent = Date.now();
    }


    const signupBtn = document.querySelector('.join-btn');


    if (signupBtn) {

        signupBtn.addEventListener('click', () => {
            // open the contacts page when user clicks on signup button
            window.location.href = 'join.html';

        });

    }

});
