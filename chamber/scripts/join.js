
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


    // Get date and time format for timestamp

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.querySelector('#timestamp').value = now.toISOString().slice(0, 16);

    // Target all modal elements


    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const modal3 = document.getElementById('modal3');
    const modal4 = document.getElementById('modal4');
    const modalBackdrop = document.getElementById('modalBackdrop');
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

    // modal.style.display = 'none';
    // modalBackdrop.style.display = 'none';
    // modal1.style.display = 'none';
    // modalBackdrop1.style.display = 'none';
    // modal2.style.display = 'none';
    // modalBackdrop2.style.display = 'none';
    // modal3.style.display = 'none';
    // modalBackdrop3.style.display = 'none';
    // modal4.style.display = 'none';
    // modalBackdrop4.style.display = 'none';



    // submit.style.visibility = 'hidden';
    // submit.style.opacity = '0';

    const modal = document.querySelector('.modal');
    const backdrop = document.querySelector('.backdrop');

    function showModal() {

        // modal.style.display = 'block';
        // modalBackdrop.style.display = 'block';
        // visibility: visible;
        // opacity: 1;

        modal.classList.add('show');

    }

    function hideModal() {
        modal.classList.add('hide');
        modal1.style.visibility = 'hidden';
        modal2.style.opacity = '0';
        modal2.style.visibility = 'hidden';
        modal2.style.opacity = '0';
        modal3.style.visibility = 'hidden';
        modal3.style.opacity = '0';
        modal4.style.visibility = 'hidden';
        modal4.style.opacity = '0';

    }

    function hideBackDrop() {
        backdrop.classList.remove('show');

    }

    hideModal();
    hideBackDrop();


    // document.querySelector('a').forEach(link => {
    //     link.addEventListener('click', (event) => {
    //         if (link.href.includes('join.html')) {
    //             hideModal();
    //             hideBackDrop();
    //         } else {
    //             hideModal();
    //             hideBackDrop();

    //         }
    //     })
    // });

    // let isReloaded = false;

    // // Set flag on beforeunload
    // window.addEventListener('beforeunload', () => {
    //     isReloaded = true;
    // });

    // // Check the flag on load
    // window.addEventListener('load', () => {
    //     if (isReloaded) {
    //         console.log('The window was refreshed or closed and reopened.');
    //         hideModal();
    //         hideBackDrop();
    //         // Your custom code here
    //     } else {
    //         console.log('The window was loaded for the first time.');
    //         hideModal();
    //         hideBackDrop();
    //     }
    // });

    // Thank you

    // Open modal
    submit.addEventListener('click', () => {

        // Target the form elements to display on Thank You modal

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

            showModal();


        }

    });

    // Close modal
    closeModalBtns.addEventListener('click', () => {

        modal.style.display = 'none';
        modalBackdrop.style.display = 'none';
        if (email.value !== '' && mobile.value !== '') {


            window.location = 'https://jamesphillipdeguzman.github.io/wdd231/chamber/thanks.html';

        }



    });

    // Close modal when clicking on backdrop
    modalBackdrop.addEventListener('click', () => {
        modal.style.display = 'none';
        modalBackdrop.style.display = 'none';
    });


    // Non-Profit

    // Open modal
    openModalBtnsNonProfit.addEventListener('click', () => {
        modal1.style.display = 'block';
        modalBackdrop1.style.display = 'block';
        modal1.style.visibility = 'visible';
        modal1.style.opacity = '1';
    });

    // Close modal
    closeModalBtnsNonProfit.addEventListener('click', () => {
        modal1.style.display = 'none';
        modalBackdrop1.style.display = 'none';
        modal1.style.visibility = 'hidden';
        modal1.style.opacity = '0';
    });

    // Close modal when clicking on backdrop
    modalBackdrop1.addEventListener('click', () => {
        modal1.style.display = 'none';
        modalBackdrop1.style.display = 'none';
    });


    // Bronze

    // Open modal
    openModalBtnsBronze.addEventListener('click', () => {
        modal2.style.display = 'block';
        modalBackdrop2.style.display = 'block';
        modal2.style.visibility = 'visible';
        modal2.style.opacity = '1';
    });

    // Close modal
    closeModalBtnsBronze.addEventListener('click', () => {
        modal2.style.display = 'none';
        modalBackdrop2.style.display = 'none';
        modal2.style.visibility = 'hidden';
        modal2.style.opacity = '0';
    });

    // Close modal when clicking on backdrop
    modalBackdrop2.addEventListener('click', () => {
        modal2.style.display = 'none';
        modalBackdrop2.style.display = 'none';

    });

    // Silver

    // Open modal
    openModalBtnsSilver.addEventListener('click', () => {
        modal3.style.display = 'block';
        modalBackdrop3.style.display = 'block';
        modal3.style.visibility = 'visible';
        modal3.style.opacity = '1';
    });

    // Close modal
    closeModalBtnsSilver.addEventListener('click', () => {
        modal3.style.display = 'none';
        modalBackdrop3.style.display = 'none';
        modal3.style.visibility = 'hidden';
        modal3.style.opacity = '0';
    });

    // Close modal when clicking on backdrop
    modalBackdrop3.addEventListener('click', () => {
        modal3.style.display = 'none';
        modalBackdrop3.style.display = 'none';
    });

    // Gold

    // Open modal
    openModalBtnsGold.addEventListener('click', () => {
        modal4.style.display = 'block';
        modalBackdrop4.style.display = 'block';
        modal4.style.visibility = 'visible';
        modal4.style.opacity = '1';
    });

    // Close modal
    closeModalBtnsGold.addEventListener('click', () => {
        modal4.style.display = 'none';
        modalBackdrop4.style.display = 'none';
        modal4.style.visibility = 'hidden';
        modal4.style.opacity = '0';

    });

    // Close modal when clicking on backdrop
    modalBackdrop4.addEventListener('click', () => {
        modal4.style.display = 'none';
        modalBackdrop4.style.display = 'none';
    });









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












});