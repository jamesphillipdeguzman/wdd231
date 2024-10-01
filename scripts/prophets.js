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

// Target DOM elements here...

const cards = document.querySelector("#cards");


// This is the url where the json file is located
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

// Create async/await function call here for getProphetData
async function getProphetData() {
    try {

        const response = await fetch(url);
        // check if there was a response from the remote server...
        if (response.ok) {
            // convert the response object into a json parsed data and assign it to the data variable.
            const data = await response.json();

            // output the result into a table in your dev console...
            console.table(data.prophets);
            // pass in the parsed json object to displayAllProphets function...
            // displayAllProphets(data.prophets);
            dropdownProphets(data.prophets);


        } else {
            console.log("The resource cannot be found.");
        }
        // catch error here on the catch block...
    } catch (error) {
        console.error("The error was: ", error);
    }

}

// Populate your dropdown with the prophet's complete names.
const dropdownProphets = (prophets) => {
    // target the select element
    const selector = document.querySelector('#dynamic-prophets');
    selector.addEventListener('change', () => {
        // Check user selection

        const choice = document.querySelector('#dynamic-prophets').value;
        const order = choice.split(' ');
        // get the id or order of prophet
        const filter = parseInt(order[0]);


        console.log(filter);


        const stats = document.querySelector('#stats');
        const p = document.createElement('p');
        const prophetsStr = JSON.stringify(prophets[filter - 1], null, 2).replace(/\"/g, '').slice(1, -1).trim();
        if (choice == 'all') {
            // displayAllProphets(data.prophets);
            // show in a nice format

            console.log(prophetsStr);
            const details = prophetsStr.split(',').map(item => item.trim()).join('\n');
            stats.innerHTML = details;
            getProphetData();

        }
        else {
            const filteredProphet = filterProphets(prophets, filter)

            const details = prophetsStr.split(',').map(item => item.trim()).join('\n');
            stats.innerHTML = details;
        }

        // p.setAttribute()

        // const nameStr = `${prophetsStr[]}`;
        // console.log(nameStr);

    });

    prophets.forEach((prophet) => {
        // populate the dropdown with the prophet's names
        const completeName = `${prophet.order} ${prophet.name} ${prophet.lastname}`;

        const option = document.createElement('option');

        option.value = completeName;
        option.textContent = completeName;
        selector.appendChild(option);

    });

}

const filterProphets = (prophets, filter) => {
    // console.log(prophets[filter - 1].lastname);

    // console.log(JSON.stringify(prophet[filter - 1]));
    cards.innerHTML = '';
    stats.innerHTML = '';


    // create a section element and define its class name
    const card = document.createElement('section');
    card.className = 'card';
    // create a h2 element and define its class name
    const fullName = document.createElement('h2');
    fullName.className = 'fullName';

    // create an img element and define its class name
    const portrait = document.createElement('img');
    portrait.className = 'portrait';

    // fullName is your h2 here...
    fullName.textContent = `${prophets[filter - 1].name} ${prophets[filter - 1].lastname}`;

    // set properties for your image element here...
    portrait.setAttribute('src', `${prophets[filter - 1].imageurl}`);
    portrait.setAttribute('alt', `Portrait of ${prophets[filter - 1].name} ${prophets[filter - 1].lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '200');



    // append fullName to card, portrait to card, and finally, your card to cards div
    card.appendChild(fullName);
    card.appendChild(portrait);
    cards.appendChild(card);


}



const displayAllProphets = (prophets, filter) => {

    //card build code goes here
    prophets.forEach((prophet) => {
        // create a section element and define its class name
        const card = document.createElement('section');
        card.className = 'card';
        card.style.maxWidth = '100%';

        // create a h2 element and define its class name
        const fullName = document.createElement('h2');
        fullName.className = 'fullName';
        fullName.style.fontSize = 'large';
        fullName.style.margin = '0 auto';
        fullName.style.width = '100%';

        // create an img element and define its class name
        const portrait = document.createElement('img');
        portrait.className = 'portrait';

        // fullName is your h2 here...
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // set properties for your image element here...
        portrait.setAttribute('src', `${prophet.imageurl}`);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '300');




        // append fullName to card, portrait to card, and finally, your card to cards div
        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);


    });
}


// call getProphetData function above
getProphetData();

