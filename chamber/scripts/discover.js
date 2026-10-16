import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";

document.addEventListener('DOMContentLoaded', () => {
    showHideHamburger();
    getDateTimeInfo();
    windowScroll();

    // Functional Toggle for "Iloilo Overview" Card
    const showHideBtn = document.querySelector('#showHideBtn');
    const overviewExtended = document.querySelector('#overviewExtended');

    if (showHideBtn && overviewExtended) {
        showHideBtn.addEventListener('click', () => {
            const isCurrentlyHidden = overviewExtended.style.display === 'none' || overviewExtended.style.display === '';
            if (isCurrentlyHidden) {
                overviewExtended.style.display = 'block';
                showHideBtn.textContent = 'See less';
                showHideBtn.setAttribute('aria-expanded', 'true');
            } else {
                overviewExtended.style.display = 'none';
                showHideBtn.textContent = 'See more';
                showHideBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Downpicker support if present
    const downPickers = document.querySelectorAll('.downpicker');
    downPickers.forEach((downPicker, index) => {
        downPicker.addEventListener('click', () => {
            const sidebarContents = document.querySelectorAll('.sidebar-content');
            if (index >= 0 && index < sidebarContents.length) {
                const sidebarContent = sidebarContents[index];
                sidebarContent.classList.toggle('collapsed');
                const isCollapsed = sidebarContent.classList.contains('collapsed');
                downPicker.innerHTML = isCollapsed ? ' ▷' : ' ▽';
            }
        });
    });

    // Last visit tracker
    function localStorageLastVisit() {
        const msToDays = 86400000;
        const today = new Date();
        const todayElement = document.querySelector("#today");
        if (todayElement) todayElement.textContent = today.toLocaleDateString();

        const currentDate = Date.now();
        const lastVisitValue = localStorage.getItem('lastVisit');
        const lastVisitElem = document.getElementById('lastVisit');
        const numDaysElem = document.querySelector('#numDays');

        if (lastVisitValue) {
            const lastVisitDate = new Date(parseInt(lastVisitValue, 10));
            if (!isNaN(lastVisitDate)) {
                if (lastVisitElem) lastVisitElem.textContent = `Your last visit was on ${lastVisitDate.toLocaleDateString()}`;
                localStorage.setItem('lastVisit', currentDate);

                const daysDifference = Math.floor((currentDate - lastVisitDate.getTime()) / msToDays);
                if (numDaysElem) {
                    if (daysDifference === 0) {
                        numDaysElem.textContent = `You last visited today.`;
                        if (lastVisitElem) lastVisitElem.textContent = `Back so soon? Awesome!`;
                    } else if (daysDifference === 1) {
                        numDaysElem.textContent = `You last visited 1 day ago.`;
                    } else {
                        numDaysElem.textContent = `You last visited ${daysDifference} days ago.`;
                    }
                }
            } else {
                localStorage.setItem('lastVisit', currentDate);
                if (lastVisitElem) lastVisitElem.textContent = `This is your first visit! Welcome to Iloilo.`;
                if (numDaysElem) numDaysElem.textContent = `You last visited 0 days ago.`;
            }
        } else {
            localStorage.setItem('lastVisit', currentDate);
            if (lastVisitElem) lastVisitElem.textContent = `This is your first visit! Welcome to Iloilo.`;
            if (numDaysElem) numDaysElem.textContent = `You last visited 0 days ago.`;
        }
    }

    localStorageLastVisit();
});
