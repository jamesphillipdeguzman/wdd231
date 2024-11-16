import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";
// import { updateText } from "./windowsize.js";

document.addEventListener('DOMContentLoaded', () => {
    showHideHamburger();
    getDateTimeInfo();
    windowScroll();

    // updateText();

    // Get date and time format for timestamp
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.querySelector('#timestamp').value = now.toISOString().slice(0, 16);

    // Target all modal elements
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const modal3 = document.getElementById('modal3');
    const modal4 = document.getElementById('modal4');
    const modalBackdrop1 = document.getElementById('modalBackdrop1');
    const modalBackdrop2 = document.getElementById('modalBackdrop2');
    const modalBackdrop3 = document.getElementById('modalBackdrop3');
    const modalBackdrop4 = document.getElementById('modalBackdrop4');

    const openModalBtnsNonProfit = document.getElementById('openModal1');
    const openModalBtnsBronze = document.getElementById('openModal2');
    const openModalBtnsSilver = document.getElementById('openModal3');
    const openModalBtnsGold = document.getElementById('openModal4');
    const closeModalBtns = document.getElementById('closeModal');
    const closeModalBtnsNonProfit = document.getElementById('closeModal1');
    const closeModalBtnsBronze = document.getElementById('closeModal2');
    const closeModalBtnsSilver = document.getElementById('closeModal3');
    const closeModalBtnsGold = document.getElementById('closeModal4');
    const submit = document.getElementById('submit');

    // Have all modals display as none
    const hideModal = (modal) => {

        modal.classList.remove('show');
        modal.classList.add('hide');

    };

    const hideBackDrop = (backdrop) => {

        backdrop.classList.add('hide');
        backdrop.classList.remove('show');
    };

    // Hide modals and backdrops on load
    [modal1, modal2, modal3, modal4].forEach(modal => hideModal(modal));
    [modalBackdrop1, modalBackdrop2, modalBackdrop3, modalBackdrop4].forEach(backdrop => hideBackDrop(backdrop));



    // Open modal function
    const openModal = (modal, backdrop) => {
        modal.classList.remove('hide');
        modal.classList.add('show');
        backdrop.classList.add('show');
    };

    // Close modal function
    const closeModal = (modal, backdrop) => {
        hideModal(modal);
        hideBackDrop(backdrop);

    };

    // Thank you
    // Open modal
    submit.addEventListener('click', () => {
        const firstname = document.querySelector('#firstname');
        const lastname = document.querySelector('#lastname');
        const email = document.querySelector('#email');
        const mobile = document.querySelector('#mobile');
        const organizationName = document.querySelector('#business');
        const timeStamp = document.querySelector('#timestamp');

        // Target the li elements 
        const fname = document.querySelector('#fname');
        const lname = document.querySelector('#lname');
        const emailAdd = document.querySelector('#email-add');
        const phone = document.querySelector('#phone');
        const orgName = document.querySelector('#organization-name');
        const dateTimeStamp = document.querySelector('#date-timestamp');

        fname.textContent = `First Name: ${firstname.value}`;
        lname.textContent = `Last Name: ${lastname.value}`;
        emailAdd.textContent = `Email Address: ${email.value}`;
        phone.textContent = `Contact Number: ${mobile.value}`;
        orgName.textContent = `Organization: ${organizationName.value}`;
        dateTimeStamp.textContent = `Submitted: ${timeStamp.value}`;
        if (email.value !== '' && mobile.value !== '') {
            openModal(modal, modalBackdrop);
        }
    });

    // Close modal
    closeModalBtns.addEventListener('click', () => {
        closeModal(modal, modalBackdrop);
        if (email.value !== '' && mobile.value !== '') {
            window.location = 'https://jamesphillipdeguzman.github.io/wdd231/chamber/thanks.html';
        }
    });

    // Close modal when clicking on backdrop
    // modalBackdrop.addEventListener('click', () => closeModal(modal, modalBackdrop));

    // Non-Profit
    openModalBtnsNonProfit.addEventListener('click', () => openModal(modal1, modalBackdrop1));
    closeModalBtnsNonProfit.addEventListener('click', () => closeModal(modal1, modalBackdrop1));
    modalBackdrop1.addEventListener('click', () => closeModal(modal1, modalBackdrop1));

    // Bronze
    openModalBtnsBronze.addEventListener('click', () => openModal(modal2, modalBackdrop2));
    closeModalBtnsBronze.addEventListener('click', () => closeModal(modal2, modalBackdrop2));
    modalBackdrop2.addEventListener('click', () => closeModal(modal2, modalBackdrop2));

    // Silver
    openModalBtnsSilver.addEventListener('click', () => openModal(modal3, modalBackdrop3));
    closeModalBtnsSilver.addEventListener('click', () => closeModal(modal3, modalBackdrop3));
    modalBackdrop3.addEventListener('click', () => closeModal(modal3, modalBackdrop3));

    // Gold
    openModalBtnsGold.addEventListener('click', () => openModal(modal4, modalBackdrop4));
    closeModalBtnsGold.addEventListener('click', () => closeModal(modal4, modalBackdrop4));
    modalBackdrop4.addEventListener('click', () => closeModal(modal4, modalBackdrop4));

    // Async function for fetching members (if needed)
    // async function fetchMembers() {
    //     try {
    //         const response = await fetch('data/members.json');
    //         if (!response.ok) {
    //             throw new Error('Could not fetch resource');
    //         }
    //         const members = await response.json();
    //         dropdownMembers(members);
    //         return members;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
});
