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
            displayAllProphets(data.prophets);
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

        if (choice === 'all') {

            getProphetData();

        }
        else {
            const filteredProphet = filterProphets(prophets, filter)


            stats.innerHTML = details;
        }

    });

    prophets.forEach((prophet) => {
        // populate the dropdown with the prophet's names
        const completeName = `${prophet.order} ${prophet.name} ${prophet.lastname}`;

        const option = document.createElement('option');

        option.value = completeName;
        option.textContent = completeName;
        selector.append(option);

    });

}

// ============== FILTER ====================

const filterProphets = (prophets, filter) => {

    cards.innerHTML = '';

    // target card-wrapper class or element
    const cardWrapper = document.querySelector('.card-wrapper');
    // cardWrapper.className = 'grid';
    cardWrapper.style.width = '1400px';
    // create a section element and define its class name
    const card = document.createElement('section');
    // card.className = 'grid';
    card.style.maxWidth = '600px';

    // target span tag with a class of stats
    // const stats = document.querySelector('.stats');

    const order = document.createElement('p');
    const birthdate = document.createElement('p');
    const birthplace = document.createElement('p');
    const death = document.createElement('p');
    const length = document.createElement('p');
    const numofchildren = document.createElement('p');
    const imageurl = document.createElement('a');

    order.innerHTML = `<span class="label">Order:</span> ${prophets[filter - 1].order}`;
    birthdate.innerHTML = `<span class="label">Birth:</span> ${prophets[filter - 1].birthdate}`;
    birthplace.innerHTML = `<span class="label">Place:</span> ${prophets[filter - 1].birthplace}`;
    death.innerHTML = `<span class="label">Death:</span> ${prophets[filter - 1].death}`;
    length.innerHTML = `<span class="label">Length:</span> ${prophets[filter - 1].length} years`;
    numofchildren.innerHTML = `<span class="label">Children:</span> ${prophets[filter - 1].numofchildren}`;
    imageurl.innerHTML = `<span class="label">Picture:</span> <a href=${prophets[filter - 1].imageurl}>link</a>`;

    // create a h2 element and define its class name
    const fullName = document.createElement('h2');
    fullName.className = 'fullName';
    fullName.style.fontSize = 'medium';
    // fullName.style.margin = '0 auto';
    fullName.style.maxWidth = '300px';
    fullName.style.textAlign = 'left';

    // create a span element
    const stats = document.createElement('div');
    stats.className = 'label';
    stats.style.fontSize = '0.8rem';
    stats.style.margin = '0 auto';
    stats.style.maxWidth = '100%';

    // fullName is your h2 here...
    fullName.textContent = `${prophets[filter - 1].name} ${prophets[filter - 1].lastname}`;

    // create an img element and define its class name
    const portrait = document.createElement('img');
    // portrait.className = 'grid';



    // set properties for your image element here...
    portrait.setAttribute('src', `${prophets[filter - 1].imageurl}`);
    portrait.setAttribute('alt', `Portrait of ${prophets[filter - 1].name} ${prophets[filter - 1].lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '200');
    portrait.style.border = '1px solid #ccc';
    portrait.style.backgroundColor = '#000';
    portrait.style.boxShadow = '0px 0px 4px #888';

    // append all p tags to stats; then append stats and image to card
    // append card to cards; finally append cards to cardWrapper

    stats.append(fullName);
    stats.append(order);
    stats.append(birthplace);
    stats.append(birthdate);
    stats.append(death);
    stats.append(length);
    stats.append(numofchildren);
    stats.append(imageurl);

    card.append(stats);
    card.append(portrait);

    cards.append(card);

    cardWrapper.append(cards);



}

// ============== DISPLAY ALL ====================

const displayAllProphets = (prophets) => {

    cards.innerHTML = '';

    //card build code goes here
    prophets.forEach((prophet) => {
        // target card-wrapper class or element
        const cardWrapper = document.querySelector('.card-wrapper');
        cardWrapper.classList.add('grid');
        cardWrapper.style.width = '1400px';
        // create a section element and define its class name
        const card = document.createElement('section');
        card.classList.add('grid');
        card.style.maxWidth = '600px';

        // target span tag with a class of stats
        // const stats = document.querySelector('.stats');

        const order = document.createElement('p');
        const birthdate = document.createElement('p');
        const birthplace = document.createElement('p');
        const death = document.createElement('p');
        const length = document.createElement('p');
        const numofchildren = document.createElement('p');
        const imageurl = document.createElement('a');

        order.innerHTML = `<span class="label">Order:</span> ${prophet.order}`;
        birthdate.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
        birthplace.innerHTML = `<span class="label">Place:</span> ${prophet.birthplace}`;
        death.innerHTML = `<span class="label">Death:</span> ${prophet.death}`;
        length.innerHTML = `<span class="label">Length:</span> ${prophet.length} years`;
        numofchildren.innerHTML = `<span class="label">Children:</span> ${prophet.numofchildren}`;
        imageurl.innerHTML = `<span class="label">Picture:</span> <a href=${prophet.imageurl}>link</a>`;

        // create a h2 element and define its class name
        const fullName = document.createElement('h2');
        fullName.className = 'fullName';
        fullName.style.fontSize = 'medium';
        // fullName.style.margin = '0 auto';
        fullName.style.maxWidth = '300px';
        fullName.style.textAlign = 'left';

        // create a span element
        const stats = document.createElement('div');
        stats.className = 'label';
        stats.style.fontSize = '0.8rem';
        stats.style.margin = '0 auto';
        stats.style.maxWidth = '100%';

        // fullName is your h2 here...
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // create an img element and define its class name
        const portrait = document.createElement('img');
        portrait.className = 'grid';


        // set properties for your image element here...
        portrait.setAttribute('src', `${prophet.imageurl}`);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '200');
        portrait.style.border = '1px solid #ccc';
        portrait.style.backgroundColor = '#000';
        portrait.style.boxShadow = '0px 0px 4px #888';

        // append all p tags to stats; then append stats and image to card
        // append card to cards; finally append cards to cardWrapper

        stats.append(fullName);
        stats.append(order);
        stats.append(birthplace);
        stats.append(birthdate);
        stats.append(death);
        stats.append(length);
        stats.append(numofchildren);
        stats.append(imageurl);

        card.append(stats);
        card.append(portrait);

        cards.append(card);

        cardWrapper.append(cards);


    });
}


// call getProphetData function above
getProphetData();

