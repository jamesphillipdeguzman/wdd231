// ----------------------------INITIALIZE DOM HERE ------------------------------- //
// Make sure everything is loaded/initialized first
document.addEventListener('DOMContentLoaded', () => {


    // Get the year
    const todaysDate = new Date();
    const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    const timeFormat = todaysDate.toLocaleTimeString();
    const formattedDate = todaysDate.toLocaleDateString('en-US', dateFormat);
    const formattedDateTime = formattedDate + " " + timeFormat;

    const year = document.querySelector('#currentyear');
    year.innerHTML = `<span class="highlight">${todaysDate.getFullYear()}</span>`;

    const lastModified = document.querySelector('#lastModified');
    lastModified.innerHTML = `<span class="highlight">${formattedDateTime}</span>`;

    const hamburgerBtn = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation ul");

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('open');
        navigation.classList.toggle('open');

    });


    // Define local storage here
    function lsStorage() {
        // initialize display elements
        const todayDisplay = document.querySelector('#today');
        const searchDisplay = document.querySelector('#search');

        // get the stored value in localStorage
        let numSearch = Number(window.localStorage.getItem('search-ls'));

        //determine if this is the first search
        if (numSearch !== 0) {
            searchDisplay.textContent = numSearch;
        } else {
            searchDisplay.textContent = `Welcome to our site!`;
        }

        numSearch++;

        // store new number of visits
        localStorage.setItem('search-ls', numSearch);

        //show today's date
        todayDisplay.textContent = Date.now();
    }


    const signupBtn = document.querySelector('.join-btn');


    if (signupBtn) {

        signupBtn.addEventListener('click', () => {
            // open the contacts page when user clicks on signup button
            window.location.href = 'join.html';

        });

    }



    // Get date and time format for timestamp

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.querySelector('#timestamp').value = now.toISOString().slice(0, 16);

    // Target all modal elements
    const modal = document.getElementById('modal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModalBtns = document.getElementById('closeModal');
    const submit = document.getElementById('submit');

    // Have all modals display as none

    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';



    // Open modal
    submit.addEventListener('click', () => {

        // Target the form elements to display on Thank You modal

        const firstname = document.querySelector('#firstname');
        const lastname = document.querySelector('#lastname');

        const email = document.querySelector('#email');
        const mobile = document.querySelector('#mobile');


        const timeStamp = document.querySelector('#timestamp');

        // Target the li elements 
        const fname = document.querySelector('#fname');
        const lname = document.querySelector('#lname');
        const emailAdd = document.querySelector('#email-add');
        const phone = document.querySelector('#phone');

        const dateTimeStamp = document.querySelector('#date-timestamp');


        if (email.value != '' && mobile.value != '') {
            modal.style.display = 'block';
            modalBackdrop.style.display = 'block';

            fname.textContent = `First Name: ${firstname.value}`;
            lname.textContent = `Last Name: ${lastname.value}`;
            emailAdd.textContent = `Email Address: ${email.value}`;
            phone.textContent = `Contact Number: ${mobile.value}`;
            dateTimeStamp.textContent = `Submitted: ${timeStamp.value}`;

        }

    });

    // Close modal
    closeModalBtns.addEventListener('click', () => {
        modal.style.display = 'none';
        modalBackdrop.style.display = 'none';
    });

    // Close modal when clicking on backdrop
    modalBackdrop.addEventListener('click', () => {
        modal.style.display = 'none';
        modalBackdrop.style.display = 'none';
    });






});


document.addEventListener('DOMContentLoaded', () => {


    // Target image layouts e.g. desktop

    const modal1 = document.getElementById('modal1');
    const modalBackdrop1 = document.getElementById('modalBackdrop1');
    const closeModalBtns1 = document.getElementById('closeModal1');
    const imgDesktopLayout = document.getElementById('img-desktop-layout');

    modal1.style.display = 'none';
    modalBackdrop1.style.display = 'none';

    imgDesktopLayout.addEventListener('click', () => {
        modal1.style.display = 'block';
        modalBackdrop1.style.display = 'block';

    });


    // Close modal
    closeModalBtns1.addEventListener('click', () => {
        modal1.style.display = 'none';
        modalBackdrop1.style.display = 'none';
    });

    // Close modal when clicking on backdrop
    modalBackdrop1.addEventListener('click', () => {
        modal1.style.display = 'none';
        modalBackdrop1.style.display = 'none';
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // Target image layouts e.g. mobile

    const modal2 = document.getElementById('modal2');
    const modalBackdrop2 = document.getElementById('modalBackdrop2');
    const closeModalBtns2 = document.getElementById('closeModal2');
    const imgMobileLayout = document.getElementById('img-mobile-layout');

    modal2.style.display = 'none';
    modalBackdrop2.style.display = 'none';

    imgMobileLayout.addEventListener('click', () => {
        modal2.style.display = 'block';
        modalBackdrop2.style.display = 'block';

    });


    // Close modal
    closeModalBtns2.addEventListener('click', () => {
        modal2.style.display = 'none';
        modalBackdrop2.style.display = 'none';
    });

    // Close modal when clicking on backdrop
    modalBackdrop2.addEventListener('click', () => {
        modal2.style.display = 'none';
        modalBackdrop2.style.display = 'none';
    });

});