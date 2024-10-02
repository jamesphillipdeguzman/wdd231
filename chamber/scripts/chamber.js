const hamburgerBtn = document.querySelector('#menu');
const navigationBtn = document.querySelector('.navlinks2');

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

const year = document.querySelector('#currentyear');
year.innerHTML = `<span class="highlight">${todaysDate.getFullYear()}</span>`;
// year.innerHTML = `${todaysDate.getFullYear()}`

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `<span class="highlight">${formattedDateTime}</span>`;

const grid = document.querySelector('#grid');
grid.addEventListener('click', () => {
    if (grid) {
        fetchMembersGrid();
    }


});

const list = document.querySelector('#list');
list.addEventListener('click', () => {
    if (list) {
        fetchMembersList();
    }


});


async function fetchMembersGrid() {

    try {

        // const businessName = document.querySelector('#business-name').value.toLowerCase();

        // const response = await fetch(`data/members.json/${businessName}`);
        // console.log(businessName);

        const response = await fetch('data/members.json'); // fetch the json file from a relative path
        // const response = await fetch(`data/members.json/${businessName}`);

        if (!response.ok) { // Check if no response 
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();  // await for Promise to resolve or be rejected and parse the result as json object
        // console.log(JSON.stringify(data));
        console.log(data); // log result to console

        const businesses = document.getElementById('businesses'); // target the businesses div by id

        console.log(data.length); // get the length of the data

        businesses.innerHTML = ''; // reset display; avoid duplicating the card display.

        // iterate through each business item from your parsed json data...
        data.forEach(business => {

            businesses.style.display = 'grid';
            businesses.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 2fr))';
            businesses.style.gap = '5px';
            businesses.style.alignItems = 'center';
            businesses.style.alignContent = 'center';
            businesses.style.justifyContent = 'center';
            businesses.style.fontFamily = 'Gowun Batang';
            businesses.style.width = '80vw';
            businesses.style.padding = '5px 5px';


            const container = document.createElement('div'); // create a div 
            container.className = 'container';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.alignContent = 'center';
            container.style.alignItems = 'left';
            container.style.maxWidth = '100vw';
            container.style.listStyleType = 'none';
            container.style.backgroundColor = '#fff';
            container.style.border = '1px solid #ccc';
            // container.style.paddingRight = '0';
            // container.style.margin = '0 10px';
            container.style.color = '#000';
            container.style.borderRadius = '5px';
            container.style.boxShadow = '0px 0px 3px #888';
            container.style.height = '400px';



            const subcontainer = document.createElement('div');
            // subcontainer.style.display = 'flex';
            subcontainer.className = 'subcontainer';
            // subcontainer.style.flexDirection = 'column';


            const p = document.createElement('p');
            p.className = 'business-labels';

            const img = document.createElement('img');
            img.id = 'business-img';

            const ul = document.createElement('ul');
            ul.id = 'business-ul';

            const li = document.createElement('li');
            li.id = 'business-li';

            const a = document.createElement('a');
            a.id = 'business-links';



            container.innerHTML = ` <a href='${business.url}'><img id='business-img' src=${business.image} width='150px' height='auto'></a>
                                    <span class='business-labels'> Name: </span> <p>${business.name}</p>  
                                    <span class='business-labels'> Address: </span> <p> ${business.address}</p>
                                    <span class='business-labels'> Phone: </span> <p>${business.contact}</p>`;
            subcontainer.appendChild(a);
            subcontainer.appendChild(li);
            subcontainer.appendChild(ul);
            subcontainer.appendChild(p);
            subcontainer.appendChild(img);
            subcontainer.appendChild(container);
            businesses.appendChild(container);




        });


    }

    catch (error) {
        console.error(error);
    }



};


async function fetchMembersList() {

    try {

        // const businessName = document.querySelector('#business-name').value.toLowerCase();

        // const response = await fetch(`data/members.json/${businessName}`);
        // console.log(businessName);

        const response = await fetch('data/members.json'); // fetch the json file from a relative path
        // const response = await fetch(`data/members.json/${businessName}`);

        if (!response.ok) { // Check if no response 
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();  // await for Promise to resolve or be rejected and parse the result as json object
        // console.log(JSON.stringify(data));
        console.log(data); // log result to console

        const businesses = document.getElementById('businesses'); // target the businesses div by id

        console.log(data.length); // get the length of the data

        businesses.innerHTML = ''; // reset display; avoid duplicating the card display.

        // iterate through each business item from your parsed json data...
        data.forEach(business => {

            businesses.style.display = 'flex';
            businesses.style.flexDirection = 'column';
            businesses.style.gap = '5px';
            businesses.style.alignItems = 'flex-start';
            businesses.style.alignContent = 'flex-start';
            businesses.style.justifyContent = 'center';
            businesses.style.fontFamily = 'Gowun Batang';

            const container = document.createElement('div'); // create a div 
            container.className = 'container';
            container.style.display = 'flex';
            // container.style.flexDirection = 'row';
            container.style.alignContent = 'left';
            container.style.alignItems = 'left';

            container.style.listStyleType = 'none';
            container.style.backgroundColor = '#fff';
            container.style.border = '1px solid #ccc';
            // container.style.padding = '0';
            // container.style.marginLeft = '5px';
            container.style.color = '#000';
            // container.style.borderRadius = '5px';
            container.style.boxShadow = '0px 0px 3px #888';
            container.style.height = '400px';
            container.style.maxWidth = '100vw';
            container.style.fontSize = 'small';


            // const subcontainer = document.createElement('div');

            // subcontainer.className = 'subcontainer';
            // subcontainer.style.display = 'flex';
            // subcontainer.style.flexDirection = 'column';
            // subcontainer.style.height = 'auto';


            const p = document.createElement('p');
            p.className = 'business-labels';

            const img = document.createElement('img');
            img.id = 'business-img';
            img.loading = 'lazy';

            const ul = document.createElement('ul');
            ul.id = 'business-ul';

            const li = document.createElement('li');
            li.id = 'business-li';

            const a = document.createElement('a');
            a.id = 'business-links';



            container.innerHTML = ` <span class='business-labels'> Name: </span> <p>${business.name}</p>  
                                    <span class='business-labels'> Address: </span> <p> ${business.address}</p>
                                    <span class='business-labels'> Phone: </span> <p>${business.contact}</p> 
                                    <a href='${business.url}'><img id='business-img' src=${business.image} width='50px' height='auto'></a>`;
            container.appendChild(a);
            container.appendChild(li);
            container.appendChild(ul);
            container.appendChild(p);

            businesses.appendChild(container);



        });


    }

    catch (error) {
        console.error(error);
    }



}




