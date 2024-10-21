// Hamburger menu click event
document.addEventListener('DOMContentLoaded', () => {

    const hamburgerBtn = document.querySelector('#menu');
    const navigationBtn = document.querySelector('.menuLinks');


    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('open');
        navigationBtn.classList.toggle('open');
    });
    // Get the year
    const todaysDate = new Date();
    const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    const timeFormat = todaysDate.toLocaleTimeString();
    const formattedDate = todaysDate.toLocaleDateString('en-US', dateFormat);
    const formattedDateTime = formattedDate + " " + timeFormat;
    const timestamp = document.querySelector('#timestamp');
    const year = document.querySelector('#currentyear');
    year.innerHTML = `<span class="highlight">${todaysDate.getFullYear()}</span>`;
    const lastModified = document.querySelector('#lastModified');
    lastModified.innerHTML = `<span class="highlight">${formattedDateTime}</span>`;
    // blurry.js: JS code for lazy loading
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
    }
    const blurDivs = document.querySelectorAll('.blurry');
    blurDivs.forEach(div => {
        // YOu may access customer attribute name (e.g., data-image-name); syntax must use prefix data-*; where * means whatever name you choose
        const imageName = div.getAttribute('data-image-name');
        if (imageMapping[imageName]) {
            div.style.backgroundImage = imageMapping[imageName];
        };
        const img = div.querySelector(".img-discover");
        // Check if image actually exists
        if (img) {
            function loaded() {
                // if the img is completely loaded, add class loaded (i.e, show the image with opacity 1)
                // if you comment this out, you will see a pulsating white effect on top of the image...
                div.classList.add('loaded');
            }
            if (img.complete) {
                loaded();
            }
            else {
                // listen for when the image is loaded
                img.addEventListener("load", loaded);
            }
        } else {
            console.warn(`No image found in div with data-image-name: $(imageName)`);
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
            // alert(sidebarContents[index]);
            // alert(index);
            sidebarContent.classList.toggle('collapsed');
            const isCollapsed = sidebarContent.classList.contains('collapsed');
            const downPicker = sidebarContent.previousElementSibling.querySelector('.downpicker');
            downPicker.innerHTML = isCollapsed ? ' ▷' : ' ▽';
        });

    });





    function smallScreenDetected(e) {
        if (e.matches) {
            // if specified screen size detected, collapse all the toggle sidebars...
            collapseAll();
        }
    }
    const mediaQueryList = window.matchMedia('(max-width:900px)');
    smallScreenDetected(mediaQueryList);
    mediaQueryList.addEventListener('change', smallScreenDetected);

    // Local Storage for visitor interaction
    function localStorageLastVisit() {
        // Date manipulation
        // milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
        const msToDays = 86400000;
        // today's date
        const theDateToday = new Date();
        // initialize display elements
        const todayElement = document.querySelector("#today");
        // const nextDateElement = document.querySelector("#nextDate");
        // const daysElement = document.querySelector("#daysleft");
        // processing
        const today = new Date();
        // const tomorrow = new Date(today);
        // tomorrow.setDate(today.getDate() + 1);
        // const tomorrowMS = tomorrow.getTime();
        todayElement.textContent = today.toLocaleDateString();
        // nextDateElement.textContent = `${tomorrow.toLocaleDateString()}`;
        // set current date
        const currentDate = Date.now();
        // localStorage.removeItem('lastVisit');
        // localStorage.removeItem('lastVisitDate');
        const lastVisitValue = localStorage.getItem('lastVisit');
        const nextVisitValue = localStorage.getItem('nextVisit');
        const millesecondsDifference = (nextVisitValue - lastVisitValue);
        const daysDifference = millesecondsDifference / msToDays;
        // alert(daysDifference);
        if (lastVisitValue !== null && lastVisitValue !== '') {
            // Convert lastVisitValue into date
            const lastVisitDate = new Date(lastVisitValue);
            localStorage.setItem('lastVisitDate', lastVisitDate.toLocaleDateString());
            // Tell user about his last visit
            document.getElementById('lastVisit').textContent = `Your last visit was on ${lastVisitDate.toLocaleString()}`;
            // set the next visit date 
            localStorage.setItem('nextVisit', currentDate);
            // find difference between epoch times in ms and convert to days
            const daysleft = (lastVisitDate.getTime() - Date.now()) / msToDays;
            // daysElement.textContent = `${daysleft.toFixed(0)} days`;
            // alert(daysleft);
            // Check if the date is already 1 whole day
            const numOfDays = lastVisitDate.getDay();
            const numDays = document.querySelector('#numDays');
            // alert(daysleft);
            if (daysleft == 0 || daysleft == 1) {
                // alert("A whole day has elapsed");
                numDays.textContent = `You last visited ${numOfDays} day ago`;
            } else if (daysleft > 1) {
                numDays.textContent = `You last visited ${numOfDays} days ago.`;
            } else {
                numDays.textContent = `You last visited just today.`;
                document.getElementById('lastVisit').textContent = `Back so soon? Awesome!`;
            }
        }
        // If there's no last visit,  tell user it's his first time.
        // else if (lastVisitValue == null || lastVisitValue == '') {
        else if (lastVisitValue == null || lastVisitValue == '') {
            document.getElementById('lastVisit').textContent = `This is your first visit!`;
            numDays.textContent = `You last visited 0 day ago.`;
            // Set the last visit date as the current date
            localStorage.setItem('lastVisit', currentDate);
        }
        else {
            // alert(Number(millesecondsDifference));
            if (millesecondsDifference.toFixed(0) >= 0 || millesecondsDifference.toFixed(0) < daysleft) {
                document.getElementById('lastVisit').textContent = `Back so soon?`;
            }


        }

    }


    localStorageLastVisit();
});