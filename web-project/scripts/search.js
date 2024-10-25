
import { fetchAuthors } from "./fetch-authors.js";
import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";
import { updateText } from "./windowsize.js";


document.addEventListener('DOMContentLoaded', () => {


    showHideHamburger();
    getDateTimeInfo();
    windowScroll();
    updateText();
    fetchAuthors();



});

const grid = document.querySelector('#grid');
grid.addEventListener('click', () => {
    if (grid) {

        fetchAuthorsGrid();


    }


});

const list = document.querySelector('#list');
list.addEventListener('click', () => {
    if (list) {
        fetchAuthorsList();
    }


});



const dynamicAuthors = document.querySelector('#dynamic-authors');
dynamicAuthors.addEventListener('change', () => {
    if (dynamicAuthors) {

        // Check user selection
        const choice = document.querySelector('#dynamic-authors').value;

        filterAuthorsGrid(choice)



    }
});


// ============== FILTER A MEMBER ====================

async function filterAuthorsGrid(choice) {


    try {

        const response = await fetch('data/quotes.json'); // fetch the json file from a relative path


        if (!response.ok) { // Check if no response 
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();  // await for Promise to resolve or be rejected and parse the result as json object

        const authors = data;
        // log result to console
        // console.table(authors);

        console.log('Length is: ', authors.length); // get the length of the data

        console.log('name: ', authors[0].name);

        // reset display; avoid duplicating the card display.
        selectedCategory.innerHTML = ``;
        quotes.innerHTML = '';

        // load the authors and the user choice for category
        loadQuotes(authors, choice);


    }

    catch (error) {
        console.error(error);
    }


};
const selectedCategory = document.getElementById('selected-category'); // target the quotes div by id

function loadQuotes(authors, choice) {


    const filteredAuthors = authors.filter(author => author.category === choice);
    // alert(filteredAuthors[0].quote);
    // alert(choice);
    selectedCategory.innerHTML = ``;

    filteredAuthors.forEach(filteredAuthor => {


        if (filteredAuthors.length > 0) {

            const img = document.createElement('img');
            img.src = filteredAuthor.imageSmall;
            img.alt = filteredAuthor.imageAlt;
            img.loading = 'lazy';
            img.classList.add('profile');

            const card = document.createElement('section');
            card.className = 'quote-card';

            const li = document.createElement('li');

            li.style.listStyleType = 'none';


            li.innerHTML = `${filteredAuthor.html}`;


            card.append(img);
            card.append(li);
            selectedCategory.append(card);


        }

        else {
            selectedCategory.innerHTML = 'Sorry, quote not found.';
        }
    });

}


// ============== GRID VIEW ====================

async function fetchAuthorsGrid() {


    // Clear the dropdown values to avoid duplicating the list again.
    document.querySelector('#dynamic-authors').value = '';

    try {

        const response = await fetch('data/quotes.json'); // fetch the json file from a relative path


        if (!response.ok) { // Check if no response 
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();  // await for Promise to resolve or be rejected and parse the result as json object

        const authors = data;
        // log result to console
        // console.table(authors);

        const quotes = document.getElementById('quotes'); // target the quotes div by id

        console.log('Length is: ', authors.length); // get the length of the data

        console.log('name: ', authors[0].name);

        quotes.innerHTML = ''; // reset display; avoid duplicating the card display.

        // iterate each author
        authors.forEach(author => {

            dynamicAuthors.style.display = 'grid';

            quotes.style.display = 'grid';
            quotes.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
            quotes.style.gap = '1rem';
            quotes.style.alignItems = 'center';
            quotes.style.alignContent = 'center';
            quotes.style.justifyContent = 'center';
            quotes.style.padding = '10px 0';
            quotes.style.margin = '0 auto';

            const container = document.createElement('div'); // create a div 
            container.className = 'quote-grid';

            const picprofile = document.createElement('div');

            picprofile.className = 'picprofile';


            const p = document.createElement('p');
            p.className = 'authors-labels';

            const img = document.createElement('img');
            img.id = 'authors-img';


            const ul = document.createElement('ul');
            ul.id = 'authors-ul';


            const li = document.createElement('li');
            li.id = 'authors-li';

            const a = document.createElement('a');
            a.id = 'authors-links';

            const blockQuote = document.querySelector('.blockquote');

            // blockQuote.style.backgroundColor = 'firebrick';

            container.innerHTML = `             
            <img  src=${author.imageSmall} alt=${author.imageAlt} loading='lazy' width='150px' height='auto'><p class="blockquote"> ${author.html}</p>                                                                        
                                    `;
            picprofile.appendChild(container);

            quotes.appendChild(picprofile);


        });


    }

    catch (error) {
        console.error(error);
    }


};


// ============== LIST VIEW ====================


async function fetchAuthorsList() {

    // Clear the dropdown values to avoid duplicating the list again.
    document.querySelector('#dynamic-authors').value = '';

    try {

        const response = await fetch('data/quotes.json'); // fetch the json file from a relative path

        if (!response.ok) { // Check if no response 
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();  // await for Promise to resolve or be rejected and parse the result as json object

        const authors = data;

        console.log(authors); // log result to console

        console.log(data.length); // get the length of the data

        const quotes = document.getElementById('quotes'); // target the businesses div by id

        quotes.innerHTML = ''; // reset display; avoid duplicating the card display.

        // Iterate through each business item from your parsed json data...
        authors.forEach(author => {


            quotes.style.display = 'flex';
            quotes.style.flexDirection = 'column';
            quotes.style.gap = '0.5rem';
            quotes.style.alignItems = 'flex-start';
            quotes.style.alignContent = 'flex-start';
            quotes.style.justifyContent = 'center';
            quotes.style.margin = '0 auto';
            // businesses.style.fontFamily = 'Montserrat';

            const container = document.createElement('div'); // create a div 
            container.className = 'container';
            container.style.display = 'flex';
            // container.style.flexDirection = 'row';
            container.style.alignContent = 'left';
            container.style.alignItems = 'left';

            container.style.listStyleType = 'none';
            container.style.backgroundColor = '#fff';

            container.style.border = '1px solid #ccc';

            container.style.color = '#000';
            container.style.boxShadow = '0px 0px 3px #888';
            container.style.height = '25rem';
            container.style.width = '100%';

            container.style.fontSize = 'small';


            const p = document.createElement('p');
            p.className = 'authors-labels';

            const img = document.createElement('img');
            img.id = 'authors-img';
            img.loading = 'lazy';

            const ul = document.createElement('ul');
            ul.id = 'authors-ul';

            const li = document.createElement('li');
            li.id = 'authors-li';

            container.innerHTML = ` <ul><span class='authors-labels'> Name: </span> <li>${author.name}</li>  
                                    <span class='authors-labels'> Quote: </span> <li> ${author.quote}</li>
                                    <span class='authors-labels'> Category: </span> <li>${author.category}</li> 
                                    </ul>`;

            quotes.appendChild(container);

        });

    }

    catch (error) {
        console.error(error);
    }



}
