import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";
// import { updateText } from "./windowsize.js";

document.addEventListener('DOMContentLoaded', () => {

    // showHideHamburger();
    getDateTimeInfo();
    windowScroll();
    // updateText();
    // hideModal();
    // hideBackDrop();

    // Select all the modal and backdrop elements

    const close2 = document.querySelector('.close2');
    const mobileImgLayout = document.querySelector('#mobile-img-layout');

    // Ensure the modal starts hidden
    hideModal();

    // Event listener to open modal when clicking on the image
    mobileImgLayout.addEventListener('click', () => {

        showModal(); // Show the modal
    });

    // Event listener to close modal when clicking on close button
    close2.addEventListener('click', () => {
        hideModal(); // Hide the modal
    });

    // Event listener to close modal when clicking the backdrop
    modalBackdrop2.addEventListener('click', () => {
        hideModal(); // Hide the modal when backdrop is clicked
    });
});

// Function to show modal and backdrop
function showModal() {
    const myModalMobile = document.querySelector('.modal-mobile');
    const modalBackdrop2 = document.querySelector('.backdrop');
    const myModalContent2 = document.querySelector('.modal-content2');

    // Add the 'show' class to display modal
    myModalMobile.classList.add('show');
    modalBackdrop2.classList.add('showJoinBackdrop');
    myModalContent2.classList.remove('hideModalContent'); // Ensure content is visible
}

// Function to hide modal and backdrop
function hideModal() {
    const myModalMobile = document.querySelector('.modal-mobile');
    const modalBackdrop2 = document.querySelector('.backdrop');
    const myModalContent2 = document.querySelector('.modal-content2');

    // Remove the 'show' class to hide modal
    myModalMobile.classList.remove('show');
    modalBackdrop2.classList.remove('showJoinBackdrop');
    myModalContent2.classList.add('hideModalContent'); // Hide content when modal is hidden
}

// Get date and time format for timestamp
const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.querySelector('#timestamp').value = now.toISOString().slice(0, 26);

window.addEventListener('click', (e) => {
    if (e.target == myModalMobile) {
        hideModal(); // Close modal if clicking outside the modal content
    }
});

// Steps in Updating Modals and Backdrops:

// 2) Name Your Modals and Backdrops: Use IDs for your modals and backdrops so you can easily target them later in your JavaScript file.

// 2) Create Constants and Add Event Listeners: Set up constant variables for your modal and backdrop, and add event listeners to handle opening and closing.

// 3) Ensure Styling for Show/Hide Classes: Make sure your CSS has classes for showing and hiding modals. For example, the class for showing the modal should set visibility: visible and opacity: 2, while the class for hiding should set visibility: hidden and opacity: 0.

// 4) Class Manipulation: After targeting the elements, use classList.add() and classList.remove() to toggle between your defined classes in CSS (like your show or hide classes).
