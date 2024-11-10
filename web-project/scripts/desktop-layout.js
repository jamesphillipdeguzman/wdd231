import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";
// import { updateText } from "./windowsize.js";

document.addEventListener('DOMContentLoaded', () => {

    // showHideHamburger();
    getDateTimeInfo();
    windowScroll();
    // updateText();
    // hideModal();
    // hideBackDrop();
    hideDesktopImg();

    // Select modal elements for desktop layout

    const close1 = document.querySelector('.close1');
    const desktopImgLayout = document.querySelector('#desktop-img-layout');

    // Ensure the modal starts hidden
    hideModal();

    // Open modal when clicking the image layout
    desktopImgLayout.addEventListener('click', () => {
        showModal(); // Show the modal when clicking the image layout
    });

    // Close modal when the close button is clicked
    close1.addEventListener('click', () => {
        hideModal(); // Hide the modal when the close button is clicked
    });


    // Close modal when clicking the backdrop
    modalBackdrop1.addEventListener('click', () => {
        hideModal(); // Hide the modal when the backdrop is clicked
    });

});



// Steps in Updating Modals and Backdrops:

// 1) Name Your Modals and Backdrops: Use IDs for your modals and backdrops so you can easily target them later in your JavaScript file.

// 2) Create Constants and Add Event Listeners: Set up constant variables for your modal and backdrop, and add event listeners to handle opening and closing.

// 3) Ensure Styling for Show/Hide Classes: Make sure your CSS has classes for showing and hiding modals. For example, the class for showing the modal should set visibility: visible and opacity: 1, while the class for hiding should set visibility: hidden and opacity: 0.

// 4) Class Manipulation: After targeting the elements, use classList.add() and classList.remove() to toggle between your defined classes in CSS (like your show or hide classes).

// Show modal and backdrop
function showModal() {

    const myModalDesktop = document.querySelector('.modal-desktop');
    const modalBackdrop1 = document.querySelector('.backdrop');
    const myModalContent1 = document.querySelector('.modal-content1');

    myModalDesktop.classList.add('show'); // Show the modal
    modalBackdrop1.classList.add('showJoinBackdrop'); // Ensure backdrop is visible
    myModalContent1.classList.remove('hideModalContent'); // Make sure modal content is visible
    myModalContent1.style.display = 'block';
}

// Hide modal and backdrop
function hideModal() {

    const myModalDesktop = document.querySelector('.modal-desktop');
    const modalBackdrop1 = document.querySelector('.backdrop');
    const myModalContent1 = document.querySelector('.modal-content1');

    myModalDesktop.classList.remove('show'); // Hide the modal
    modalBackdrop1.classList.remove('showJoinBackdrop'); // Hide the backdrop
    myModalContent1.classList.add('hideModalContent'); // Hide modal content
    myModalContent1.style.display = 'none';
}

// Hide backdrop when modal is hidden
function hideDesktopImg() {
    const myModalContent1 = document.querySelector('.modal-content1');
    myModalContent1.style.display = 'none';
}

// Close modal when clicking outside (on the backdrop area)
window.addEventListener('click', (e) => {
    if (e.target == modalBackdrop1) {
        hideModal();
    }
});

// Get date and time format for timestamp
const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.querySelector('#timestamp').value = now.toISOString().slice(0, 16);

// Handle click outside modal to close it
window.addEventListener('click', (e) => {
    if (e.target == myModalDesktop) {
        hideModal();


    }
});