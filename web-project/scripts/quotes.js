
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
        const id = choice.split(' ');
        // get the id or order of prophet
        const filter = parseInt(id[0]);

        // alert(filter);

        main(filter)


    }
});

// This main function is the middleman for fetchAuthors and filterAuthors
// It passes the filter number to locate the chamber author...

async function main(filter) {
    try {
        const authors = await fetchAuthors();
        filterAuthors(authors, filter);
    } catch (error) {
        console.error(error);
    }


}






// ============== FILTER A MEMBER ====================

const filterAuthors = (authors, filter) => {

    // Target card-wrapper class or element
    const quotes = document.querySelector('#quotes');



    // Clear the previous result
    quotes.innerHTML = '';


    const name = document.createElement('h4');
    name.style.color = '#000';
    name.style.fontFamily = 'var(--default-font)';
    name.style.textAlign = 'center';

    const characters = document.createElement('p');
    const category = document.createElement('p');
    const imageAlt = document.createElement('p');

    // Create an anchor tag element
    const url = document.createElement('a');



    id.innerHTML = `<span class="label">ID:</span> ${authors[filter - 1].id}`;

    name.innerHTML = `<span class="label">Name</span> ${authors[filter - 1].name}`;
    characters.innerHTML = `<span class="label">Characters:</span> ${authors[filter - 1].characters}`;
    category.innerHTML = `<span class="label">Category:</span> ${authors[filter - 1].category}`;
    imageAlt.innerHTML = `<span class="label">About:</span> ${authors[filter - 1].imageAlt}`;


    // url.setAttribute('href', authors[filter - 1].url);
    // url.innerHTML = `<span class="label">Visit:</span>link`;
    // alert(`${authors[filter - 1].url}`);

    // Create a span element
    const stats = document.createElement('div');
    stats.className = 'label';
    stats.style.fontSize = '0.8rem';
    stats.style.margin = '0 auto';
    stats.style.maxWidth = '100%';


    // Create an img element and define its class name
    const logo = document.createElement('img');
    logo.className = 'grid';
    logo.style.margin = '20px auto';

    // Set properties for your image element here...
    logo.setAttribute('src', `${authors[filter - 1].imageSmall}`);
    logo.setAttribute('alt', `Logo of ${authors[filter - 1].imageAlt}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '100');
    logo.setAttribute('height', '100');
    logo.style.border = '1px solid #ccc';
    logo.style.boxShadow = '0px 0px 4px #888';

    // Create a logo link
    const logolink = document.createElement('a');
    logolink.setAttribute('href', authors[filter - 1].url);
    logolink.append(logo);


    // Build the card here one element at a time. Finally, append to the quotes class element.

    // stats.append(id);
    stats.append(name);
    stats.append(characters);
    stats.append(category);

    // stats.append(url);

    card.append(stats);
    // card.append(logolink);

    quotes.append(card);


}

// ============== GRID VIEW ====================

async function fetchAuthorsGrid() {

    // const leftSideBar = document.querySelector('.left-sidebar');

    // leftSideBar.style.display = 'none';

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

        // Iterate through each business item from your parsed json data...
        authors.forEach(author => {

            dynamicAuthors.style.display = 'grid';

            quotes.style.display = 'grid';
            quotes.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
            quotes.style.gap = '1rem';
            quotes.style.alignItems = 'center';
            quotes.style.alignContent = 'center';
            quotes.style.justifyContent = 'center';
            // quotes.style.fontFamily = 'Montserrat';
            // quotes.style.maxWidth = '80vw';
            quotes.style.padding = '10px 0';
            quotes.style.margin = '0 auto';

            // dynamicAuthors.style.gridColumn = '2/3';

            const container = document.createElement('div'); // create a div 
            container.className = 'quote-container';


            // container.style.margin = '0 2rem';
            // container.style.maxWidth = '100vw';

            const picprofile = document.createElement('div');

            picprofile.className = 'picprofile';


            const p = document.createElement('p');
            p.className = 'authors-labels';

            const img = document.createElement('img');
            // img.id = 'authors-img';

            const ul = document.createElement('ul');
            ul.id = 'authors-ul';


            const li = document.createElement('li');
            li.id = 'authors-li';

            const a = document.createElement('a');
            a.id = 'authors-links';

            const blockQuote = document.querySelector('.blockquote');

            // blockQuote.style.backgroundColor = 'firebrick';

            container.innerHTML = `             
            <img  src=${author.imageSmall} alt=${author.imageAlt} width='150px' height='auto'><p class="blockquote"> ${author.html}</p>                                                                        
                                    `;
            // <span class='authors-labels'> Category: </span> <p>${author.category}</p>

            // container.appendChild(a);
            // container.appendChild(li);
            // container.appendChild(ul);
            // container.appendChild(p);
            // container.appendChild(img);
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

    const leftSideBar = document.querySelector('.left-sidebar');

    // leftSideBar.style.display = 'block';

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

        const container = document.createElement('container'); // target the quotes div by id

        console.log(data.length); // get the length of the data

        container.innerHTML = ''; // reset display; avoid duplicating the card display.

        // Iterate through each business item from your parsed json data...
        authors.forEach(author => {

            const quotes = document.querySelector('#quotes'); // create a div 

            quotes.style.display = 'flex';
            quotes.style.flexDirection = 'column';
            quotes.style.gap = '0.5rem';
            quotes.style.alignItems = 'flex-start';
            quotes.style.alignContent = 'flex-start';
            quotes.style.justifyContent = 'center';
            quotes.style.margin = '0 auto';
            // quotes.style.fontFamily = 'Montserrat';





            const p = document.createElement('p');
            p.className = 'authors-labels';

            const img = document.createElement('img');
            img.id = 'authors-img';
            img.loading = 'lazy';

            const ul = document.createElement('ul');
            ul.id = 'authors-ul';

            const li = document.createElement('li');
            li.id = 'authors-li';

            const a = document.createElement('a');
            a.id = 'authors-links';



            quotes.innerHTML = ` <a href='${author.url}'><img id='authors-img' src=${author.imageSmall} alt=${author.imageAlt} width='150px' height='auto'></a>
                                    
                                    <span class='authors-labels'> Category: </span> <p>${author.category}</p>
                                    <p> ${author.html}</p>`;

            quotes.appendChild(a);

            quotes.appendChild(li);

            quotes.appendChild(ul);

            quotes.appendChild(container);




        });


    }

    catch (error) {
        console.error(error);
    }



}


