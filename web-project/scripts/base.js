export { getDateTimeInfo, showHideHamburger, windowScroll };

function getDateTimeInfo() {
    // Get the year
    const todaysDate = new Date();
    const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    const timeFormat = todaysDate.toLocaleTimeString();
    const formattedDate = todaysDate.toLocaleDateString('en-US', dateFormat);
    const formattedDateTime = formattedDate + " " + timeFormat;

    const year = document.querySelector('#currentyear');
    year.innerHTML = `<span class="highlight">${todaysDate.getFullYear()}</span>`;


    const lastModified = document.querySelector('#lastModified');
    lastModified.innerHTML = document.lastModified;

}

let scrollTimeout;

function windowScroll() {

    const menuLinks = document.querySelector('.menuLinks');

    window.addEventListener('scroll', () => {

        if (menuLinks) {
            console.log('activated scrolling');
            menuLinks.classList.add('scroll');
        }

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {

            console.log('User stopped scrolling');

            if (menuLinks) {
                menuLinks.classList.remove('scroll');
            }

        }, 500); // Adjust time as needed


    });
}


function showHideHamburger() {
    // Hamburger menu click event

    const hamburgerBtn = document.querySelector('#menu');
    const navigationBtn = document.querySelector('.navigation ul');


    hamburgerBtn.addEventListener('click', () => {

        hamburgerBtn.classList.toggle('open');
        navigationBtn.classList.toggle('open');

    });

    if (!hamburgerBtn) {
        console.error('Hamburger button not found!');
        return;
    }

    if (!navigationBtn) {
        console.error('Navigation button not found!');
        return;
    }

    console.log('Hamburger button classes: ', hamburgerBtn.classList);
    console.log('Navigation button classes: ', navigationBtn.classList);

}


function joinUs() {
    const joinBtn = document.querySelector('.join-btn');
    joinBtn.addEventListener('click', () => {
        window.location = 'join.html';
    });
}



document.addEventListener('DOMContentLoaded', () => {

    showHideHamburger();  //Uncommented this showHideHamburger here so it can be used by all pages, but it needs to be commented out if imported by the js file...
    windowScroll();
    getDateTimeInfo();
    joinUs();


});

