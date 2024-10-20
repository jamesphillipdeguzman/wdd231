// Hamburger menu click event

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


function showHideToggle() {
    const sidebarContents = document.querySelectorAll('.sidebar-content');

    sidebarContents.forEach(sidebarContent => {
        sidebarContent.classList.toggle('collapsed');

    });

}

function toggleSidebar(index) {


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



}


function smallScreenDetected(e) {

    if (e.matches) {
        // if specified screen size detected, collapse all the toggle sidebars...
        collapseAll();

    }

}


const mediaQueryList = window.matchMedia('(max-width:900px)');

smallScreenDetected(mediaQueryList);

mediaQueryList.addEventListener('change', smallScreenDetected);


