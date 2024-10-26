import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";
import { updateText } from "./windowsize.js";

document.addEventListener('DOMContentLoaded', () => {


    showHideHamburger();
    getDateTimeInfo();
    windowScroll();
    updateText();
    hideModal();
    hideBackDrop();


});


    // Get date and time format for timestamp

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.querySelector('#timestamp').value = now.toISOString().slice(0, 16);


    

    window.addEventListener('click', (e) => {
        if(e.target == myModal) {
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

        myModal.classList.add('hide');



    }

    function hideBackDrop() {
        myBackdrop.classList.remove('show');

    }

    

    const submit = document.getElementById('submit');

    // Thank you

    // Open modal
    submit.addEventListener('click', () => {

        
        const subscriberBox = document.querySelector('.subscriber-box');

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
        const emailAdd= document.querySelector('#email-add');
        const queries =  document.querySelector('#queries');
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

    // // Close modal
    // closeModalBtns.addEventListener('click', () => {

    //     modal.style.display = 'none';
    //     modalBackdrop.style.display = 'none';
    



    // });

    // // Close modal when clicking on backdrop
    // modalBackdrop.addEventListener('click', () => {
    //     modal.style.display = 'none';
    //     modalBackdrop.style.display = 'none';
    // });


    // // Non-Profit

    // // Open modal
    // openModalBtnsNonProfit.addEventListener('click', () => {
    //     modal1.style.display = 'block';
    //     modalBackdrop1.style.display = 'block';
    //     modal1.style.visibility = 'visible';
    //     modal1.style.opacity = '1';
    // });

    // // Close modal
    // closeModalBtnsNonProfit.addEventListener('click', () => {
    //     modal1.style.display = 'none';
    //     modalBackdrop1.style.display = 'none';
    //     modal1.style.visibility = 'hidden';
    //     modal1.style.opacity = '0';
    // });

    // // Close modal when clicking on backdrop
    // modalBackdrop1.addEventListener('click', () => {
    //     modal1.style.display = 'none';
    //     modalBackdrop1.style.display = 'none';
    // });


    // // Bronze

    // // Open modal
    // openModalBtnsBronze.addEventListener('click', () => {
    //     modal2.style.display = 'block';
    //     modalBackdrop2.style.display = 'block';
    //     modal2.style.visibility = 'visible';
    //     modal2.style.opacity = '1';
    // });

    // // Close modal
    // closeModalBtnsBronze.addEventListener('click', () => {
    //     modal2.style.display = 'none';
    //     modalBackdrop2.style.display = 'none';
    //     modal2.style.visibility = 'hidden';
    //     modal2.style.opacity = '0';
    // });

    // // Close modal when clicking on backdrop
    // modalBackdrop2.addEventListener('click', () => {
    //     modal2.style.display = 'none';
    //     modalBackdrop2.style.display = 'none';

    // });

    // // Silver

    // // Open modal
    // openModalBtnsSilver.addEventListener('click', () => {
    //     modal3.style.display = 'block';
    //     modalBackdrop3.style.display = 'block';
    //     modal3.style.visibility = 'visible';
    //     modal3.style.opacity = '1';
    // });

    // // Close modal
    // closeModalBtnsSilver.addEventListener('click', () => {
    //     modal3.style.display = 'none';
    //     modalBackdrop3.style.display = 'none';
    //     modal3.style.visibility = 'hidden';
    //     modal3.style.opacity = '0';
    // });

    // // Close modal when clicking on backdrop
    // modalBackdrop3.addEventListener('click', () => {
    //     modal3.style.display = 'none';
    //     modalBackdrop3.style.display = 'none';
    // });

    // // Gold

    // // Open modal
    // openModalBtnsGold.addEventListener('click', () => {
    //     modal4.style.display = 'block';
    //     modalBackdrop4.style.display = 'block';
    //     modal4.style.visibility = 'visible';
    //     modal4.style.opacity = '1';
    // });

    // // Close modal
    // closeModalBtnsGold.addEventListener('click', () => {
    //     modal4.style.display = 'none';
    //     modalBackdrop4.style.display = 'none';
    //     modal4.style.visibility = 'hidden';
    //     modal4.style.opacity = '0';

    // });

    // // Close modal when clicking on backdrop
    // modalBackdrop4.addEventListener('click', () => {
    //     modal4.style.display = 'none';
    //     modalBackdrop4.style.display = 'none';
    // });









    // async function fetchMembers() {
    //     try {
    //         const response = await fetch('data/members.json'); // fetch the json file from a relative path


    //         if (!response.ok) { // Check if no response 
    //             throw new Error('Could not fetch resource');
    //         }

    //         const members = await response.json();  // await for Promise to resolve or be rejected and parse the result as json object
    //         dropdownMembers(members);
    //         return members;


    //     } catch (error) {
    //         console.error(error);
    //     }
    // }