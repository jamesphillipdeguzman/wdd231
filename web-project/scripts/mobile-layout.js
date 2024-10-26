import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";
// import { updateText } from "./windowsize.js";

document.addEventListener('DOMContentLoaded', () => {


    // showHideHamburger();
    getDateTimeInfo();
    windowScroll();
    // updateText();
    hideModal();
    hideBackDrop();


});


// Get date and time format for timestamp

const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.querySelector('#timestamp').value = now.toISOString().slice(0, 16);




window.addEventListener('click', (e) => {
    if (e.target == myModalDesktop) {
        hideModal();
    }

});
// Steps in Updating Modals and Backdrops:

// 1) Name Your Modals and Backdrops: Use IDs for your modals and backdrops so you can easily target them later in your JavaScript file.

// 2) Create Constants and Add Event Listeners: Set up constant variables for your modal and backdrop, and add event listeners to handle opening and closing.

// 3) Ensure Styling for Show/Hide Classes: Make sure your CSS has classes for showing and hiding modals. For example, the class for showing the modal should set visibility: visible and opacity: 1, while the class for hiding should set visibility: hidden and opacity: 0.

// 4) Class Manipulation: After targeting the elements, use classList.add() and classList.remove() to toggle between your defined classes in CSS (like your show or hide classes).




const myModalDesktop = document.querySelector('.modal-desktop');
const modalBackdrop1 = document.querySelector('.backdrop');
const myModalContent1 = document.querySelector('.modal-content2');
const close1 = document.querySelector('.close2');

close1.addEventListener('click', () => {

    myModalDesktop.classList.remove('show');

});

function showModal() {


    myModalDesktop.classList.add('show');
    modalBackdrop1.classList.remove('hideJoinBackdrop');
    modalBackdrop1.classList.add('showJoinBackdrop');
    myModalContent1.classList.remove('hideModalContent');

}

function hideModal() {


    myModalDesktop.classList.remove('hide');
    modalBackdrop1.classList.remove('showJoinBackdrop');
    modalBackdrop1.classList.add('hideJoinBackdrop');
    myModalContent1.classList.add('hideModalContent');


}

function hideBackDrop() {
    modalBackdrop1.classList.remove('showJoinBackdrop');

}



const desktopImgLayout = document.querySelector('.img-layout');

// Open Thank you modal after clicking submit

desktopImgLayout.addEventListener('click', () => {


    desktopImgLayout.classList.add('hideModalDesktop');

    // Target the form elements to display on Thank You modal

    if (desktopImgLayout) {


        showModal();

    }

    else {
        hideModal();


    }

});

