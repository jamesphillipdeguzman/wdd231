import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";
// import { updateText } from "./windowsize.js";

document.addEventListener('DOMContentLoaded', () => {

    showHideHamburger();
    getDateTimeInfo();
    windowScroll();
    // updateText();

    // JS code for lazy loading
    // Create your image mapping here...
    const imageMapping = {
        image1: "url('images/discover-iloilo/images-smaller-resized/santa-barbara-church-small.webp')",
        image2: "url('images/discover-iloilo/images-smaller-resized/guimaras-small.webp')",
        image3: "url('images/discover-iloilo/images-smaller-resized/festive-walk-iloilo-small.webp')",
        image4: "url('images/discover-iloilo/images-smaller-resized/iloilo-museum-small.webp')",
        image5: "url('images/discover-iloilo/images-smaller-resized/iloilo-river-esplanade-small.webp')",
        image6: "url('images/discover-iloilo/images-smaller-resized/molo-plaza-small.webp')",
        image7: "url('images/discover-iloilo/images-smaller-resized/molo-mansion-small.webp')",
        image8: "url('images/discover-iloilo/images-smaller-resized/iloilo-provincial-capitol-casa-real-small.webp')",
        image9: "url('images/discover-iloilo/images-smaller-resized/iloilo-convention-center-small.webp')",
        image10: "url('images/discover-iloilo/images-smaller-resized/iloilo-international-airport-small.webp')",
        image11: "url('images/discover-iloilo/images-smaller-resized/museo-iloilo-small.webp')",
        image12: "url('images/discover-iloilo/images-smaller-resized/prison-of-iloilo-small.webp')"
    };

    const blurDivs = document.querySelectorAll('.blurry');
    blurDivs.forEach(div => {
        const imageName = div.getAttribute('data-image-name');
        if (imageMapping[imageName]) {
            div.style.backgroundImage = imageMapping[imageName];
        }
        const img = div.querySelector(".img-discover");
        if (img) {
            function loaded() {
                div.classList.add('loaded');
            }
            if (img.complete) {
                loaded();
            } else {
                img.addEventListener("load", loaded);
            }
        } else {
            console.warn(`No image found in div with data-image-name: ${imageName}`);
        }
    });

    function collapseAll() {
        const sidebarContents = document.querySelectorAll('.sidebar-content');
        sidebarContents.forEach(sidebarContent => {
            sidebarContent.classList.add('collapsed');
        });
    }
    // collapseAll();

    const showHideBtn = document.querySelector('#showHideBtn');
    showHideBtn.addEventListener('click', () => {
        const sidebarContents = document.querySelectorAll('.sidebar-content');
        sidebarContents.forEach(sidebarContent => {
            sidebarContent.classList.toggle('collapsed');
        });
    });

    const downPickers = document.querySelectorAll('.downpicker');
    downPickers.forEach((downPicker, index) => {
        downPicker.addEventListener('click', () => {
            const sidebarContents = document.querySelectorAll('.sidebar-content');
            if (index < 0 || index >= sidebarContents.length) {
                console.error('Invalid index');
                return;
            }
            const sidebarContent = sidebarContents[index];
            sidebarContent.classList.toggle('collapsed');
            const isCollapsed = sidebarContent.classList.contains('collapsed');
            downPicker.innerHTML = isCollapsed ? ' ▷' : ' ▽';
        });
    });

    function smallScreenDetected(e) {
        if (e.matches) {
            collapseAll();
        }
    }
    const mediaQueryList = window.matchMedia('(max-width:900px)');
    smallScreenDetected(mediaQueryList);
    mediaQueryList.addEventListener('change', smallScreenDetected);

    function localStorageLastVisit() {
        const msToDays = 86400000; // milliseconds to days constant
        const today = new Date();
        const todayElement = document.querySelector("#today");
        todayElement.textContent = today.toLocaleDateString();

        const currentDate = Date.now();
        const lastVisitValue = localStorage.getItem('lastVisit');

        if (lastVisitValue) {
            const lastVisitDate = new Date(parseInt(lastVisitValue, 10)); // Ensure it's a number
            if (!isNaN(lastVisitDate)) { // Check if it's a valid date
                document.getElementById('lastVisit').textContent = `Your last visit was on ${lastVisitDate.toLocaleString()}`;
                localStorage.setItem('lastVisit', currentDate); // Update last visit

                const daysDifference = Math.floor((currentDate - lastVisitDate.getTime()) / msToDays);
                const numDays = document.querySelector('#numDays');

                if (daysDifference === 0) {
                    numDays.textContent = `You last visited today.`;
                    document.getElementById('lastVisit').textContent = `Back so soon? Awesome!`;
                } else if (daysDifference === 1) {
                    numDays.textContent = `You last visited 1 day ago.`;
                } else {
                    numDays.textContent = `You last visited ${daysDifference} days ago.`;
                }
            } else {
                // Handle the case where lastVisitDate is invalid
                console.warn('Invalid last visit date. Resetting last visit.');
                localStorage.removeItem('lastVisit');
                localStorage.setItem('lastVisit', currentDate);
                document.getElementById('lastVisit').textContent = `This is your first visit!`;
                document.querySelector('#numDays').textContent = `You last visited 0 days ago.`;
            }
        } else {
            // If no last visit, treat as first visit
            document.getElementById('lastVisit').textContent = `This is your first visit!`;
            document.querySelector('#numDays').textContent = `You last visited 0 days ago.`;
            localStorage.setItem('lastVisit', currentDate); // Set the last visit to now
        }
    }


    localStorageLastVisit();
});
