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

const cards = document.querySelector("#cards");

// const showCards = document.querySelector("#showCards")

// showCards.addEventListener('click', () => {
//     if (showCards) {
//         getProphetData();
//     }

// });


const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
    try {

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data.prophets);
            displayProphets(data.prophets);

        } else {
            console.log("The resource cannot be found.");
        }

    } catch (error) {
        console.error("The error was: ", error);
    }

}
// function doStuff(data) {
//     results = data;
//     console.log("first: ", results);
//     console.table(results);
// }

// console.log("second", results);



const displayProphets = (prophets) => {
    //card build code goes here
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        card.className = 'card';
        const fullName = document.createElement('h2');
        fullName.className = 'fullName';
        const portrait = document.createElement('img');
        portrait.className = 'portrait';

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;


        portrait.src = `${prophet.imageurl}`;
        portrait.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;
        portrait.loading = 'lazy';
        portrait.width = '200';
        portrait.height = '200';

        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);


    });
}


getProphetData();
