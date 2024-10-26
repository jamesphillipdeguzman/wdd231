import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";
// import { updateText } from "./windowsize.js";

document.addEventListener('DOMContentLoaded', () => {


    showHideHamburger();
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
    if (e.target == myModal) {
        hideModal();
    }

});

const myModal = document.querySelector('.myModal');
const myBackdrop = document.querySelector('.myBackdrop');
const close = document.querySelector('.close');

close.addEventListener('click', () => {
    myModal.classList.remove('show');
    if (fname && lname && email) {
        // Navigate to the thanks.html page
        window.location = 'thanks.html';

    }
    else {
        window.location = 'join.html';
    }
});

function showModal() {


    myModal.classList.add('show');


}

function hideModal() {

    // It's better to add hide class here rather than remove show class.
    // Doing so, will show the thank you for subsribing at the bottom of the form. That's a mess!
    myModal.classList.add('hide');



}

function hideBackDrop() {
    myBackdrop.classList.remove('show');

}



const submit = document.getElementById('submit');

// Open Thank you modal after clicking submit

submit.addEventListener('click', () => {

    // Target the form elements to display on Thank You modal

    const firstname = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#email').value;
    const questions = document.querySelector('#questions').value;
    const dateTimeStamp = document.querySelector('#timestamp').value;

    // Target the span and li elements in join.html
    const message = document.querySelector('#message');

    const fname = document.querySelector('#fname');
    const lname = document.querySelector('#lname');
    const emailAdd = document.querySelector('#email-add');
    const queries = document.querySelector('#queries');
    const timeStamp = document.querySelector('#date-timestamp');

    // Output to the modal
    message.textContent = `Thanks for subscribing!`;
    fname.textContent = `First Name: ${firstname}`;
    lname.textContent = `Last Name: ${lastname}`;
    emailAdd.textContent = `Email Address: ${email}`;
    queries.textContent = `Questions: ${questions}`;
    timeStamp.textContent = `Date/Time: ${dateTimeStamp}`;


    if (fname && lname && email) {

        showModal();

    }

    else {
        hideModal();

    }

});

