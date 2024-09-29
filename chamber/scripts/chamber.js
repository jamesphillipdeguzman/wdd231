// const hamburgerBtn = document.querySelector('#menu');
// const navigationBtn = document.querySelector('.top-navlinks');

// hamburgerBtn.addEventListener('click', () => {
//     hamburgerBtn.classList.toggle('open');
//     navigationBtn.classList.toggle('open');
// });

// Get the year
const todaysDate = new Date();
const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
const timeFormat = todaysDate.toLocaleTimeString();
const formattedDate = todaysDate.toLocaleDateString('en-US', dateFormat);
const formattedDateTime = formattedDate + " " + timeFormat;

const year = document.querySelector('#currentyear');
year.innerHTML = `<span class="highlight">${todaysDate.getFullYear()}</span>`;
// year.innerHTML = `${todaysDate.getFullYear()}`

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `<span class="highlight">${formattedDateTime}</span>`;



async function fetchMembers() {

    try {

        // const businessName = document.querySelector('#business-name').value.toLowerCase();

        // const response = await fetch(`data/members.json/${businessName}`);
        // console.log(businessName);

        const response = await fetch('data/members.json');
        // const response = await fetch(`data/members.json/${businessName}`);

        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        // console.log(JSON.stringify(data));
        console.log(data);

        const businesses = document.getElementById('businesses');

        console.log(data.length);



        data.forEach(business => {

            const container = document.createElement('div');
            container.style.display = 'grid';
            container.style.gridTemplateColumns = 'repeat(3, 2fr)';
            container.style.listStyleType = 'none';
            container.style.backgroundColor = '#fff';
            container.style.border = '1px solid #ccc';
            container.style.padding = '10px';
            container.style.margin = '10px';
            container.style.color = '#000';
            container.style.borderRadius = '5px';
            container.style.boxShadow = '0px 0px 3px #888';

            const img = document.createElement('img');
            img.className = 'business-img';
            // businessImg.style.display = ''



            container.innerHTML = `Name: ${business.name}  
                                    Address: ${business.address} 
                                    Phone: ${business.contact}
                                    <img src=${business.image}>`;

            businesses.appendChild(container);
            businesses.appendChild(img);


        });



        // for (i = 1; i <= data.length - 1; i++) {

        //     const businessItem = document.createElement('li');
        //     businesses.style.listStyleType = 'none';
        //     businesses.style.backgroundColor = '#fff';
        //     businesses.style.border = '1px solid #ccc';
        //     businesses.style.padding = '10px';
        //     businesses.style.margin = '10px';
        //     businesses.style.color = '#000';
        //     businesses.style.borderRadius = '5px';
        //     businesses.style.boxShadow = '0px 0px 3px #888';


        //     businesses.innerHTML = JSON.stringify(data[i].name);

        //     businesses.appendChild(businessItem);
        // }
        // return data;


    }

    catch (error) {
        console.error(error);
    }






}

fetchMembers();

