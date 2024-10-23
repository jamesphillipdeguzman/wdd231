
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

    quotes.style.display = 'grid';
    quotes.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 4fr))';
    quotes.style.gap = '5px';
    quotes.style.alignItems = 'center';
    quotes.style.alignContent = 'center';
    quotes.style.justifyContent = 'center';
    // quotes.style.fontFamily = 'Montserrat';
    quotes.style.maxWidth = '100vw';
    quotes.style.padding = '5px 0';
    quotes.style.margin = '0 auto';
    // Create a section element and define its class name
    const card = document.createElement('section');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignContent = 'center';
    card.style.justifyContent = 'center';
    card.style.alignItems = 'center';
    card.style.maxWidth = '80%';
    card.style.border = '1px solid #ccc';
    card.style.borderRadius = '5px';
    card.style.margin = '0 auto';
    card.style.padding = '10px';
    card.style.boxShadow = '0px 0px 4px #888';
    card.style.width = '100%';
    card.style.height = 'auto';



    const id = document.createElement('p');

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
    name.innerHTML = `<span class="label"></span> ${authors[filter - 1].name}`;
    characters.innerHTML = `<span class="label">Characters:</span> ${authors[filter - 1].characters}`;
    category.innerHTML = `<span class="label">Category:</span> ${authors[filter - 1].category}`;
    imageAlt.innerHTML = `<span class="label">About:</span> ${authors[filter - 1].imageAlt}`;


    url.setAttribute('href', authors[filter - 1].url);
    url.innerHTML = `<span class="label">Visit:</span>link`;
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
    stats.append(address);
    stats.append(contact);

    // stats.append(url);

    card.append(stats);
    card.append(logolink);

    quotes.append(card);


}

// ============== GRID VIEW ====================

async function fetchAuthorsGrid() {

    const leftSideBar = document.querySelector('.left-sidebar');

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
            quotes.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
            quotes.style.gap = '0.5rem';
            quotes.style.alignItems = 'center';
            quotes.style.alignContent = 'center';
            quotes.style.justifyContent = 'center';
            // quotes.style.fontFamily = 'Montserrat';
            // quotes.style.maxWidth = '80vw';
            quotes.style.padding = '5px 0';
            quotes.style.margin = '0 auto';

            // dynamicAuthors.style.gridColumn = '2/3';

            const container = document.createElement('div'); // create a div 
            container.className = 'container';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.alignContent = 'center';
            container.style.alignItems = 'center';
            container.style.maxWidth = '100vw';
            container.style.listStyleType = 'none';
            container.style.backgroundColor = '#fff';
            container.style.border = '1px solid #ccc';
            container.style.color = '#000';
            container.style.borderRadius = '5px';
            container.style.boxShadow = '0px 0px 3px #888';
            container.style.height = '30rem';
            container.style.width = '100%';
            // container.style.margin = '0 2rem';
            // container.style.maxWidth = '100vw';

            const subcontainer = document.createElement('div');

            subcontainer.className = 'subcontainer';


            const p = document.createElement('p');
            p.className = 'authors-labels';

            const img = document.createElement('img');
            img.id = 'authors-img';

            const ul = document.createElement('ul');
            ul.id = 'authors-ul';
            ul.style.display = 'flex';
            ul.style.alignItems = 'center';
            ul.style.justifyItems = 'center';
            ul.style.alignContent = 'center';
            ul.style.margin = '0 auto';

            const li = document.createElement('li');
            li.id = 'authors-li';

            const a = document.createElement('a');
            a.id = 'authors-links';


            container.innerHTML = ` <a href='${author.url}'><img id='authors-img' src=${author.imageSmall} alt=${author.imageAlt} width='150px' height='auto'></a>
                                    <p> ${author.html}</p>
                                    <span class='authors-labels'> Category: </span> <p>${author.category}</p>`;
            subcontainer.appendChild(a);
            subcontainer.appendChild(li);
            subcontainer.appendChild(ul);
            subcontainer.appendChild(p);
            subcontainer.appendChild(img);
            subcontainer.appendChild(container);
            quotes.appendChild(container);


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

        const quotes = document.getElementById('quotes'); // target the quotes div by id

        console.log(data.length); // get the length of the data

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
            // quotes.style.fontFamily = 'Montserrat';

            const container = document.querySelector('#quotes'); // create a div 
            container.className = 'container';
            container.style.display = 'flex';
            // container.style.flexDirection = 'row';
            container.style.alignContent = 'center';
            container.style.alignItems = 'center';

            container.style.listStyleType = 'none';
            container.style.backgroundColor = '#fff';
            container.style.border = '1px solid #ccc';
            // container.style.padding = '0';
            // container.style.marginLeft = '5px';
            container.style.color = '#000';
            // container.style.borderRadius = '5px';
            container.style.boxShadow = '0px 0px 3px #888';
            container.style.height = '10rem';
            container.style.width = '80%';
            // container.style.margin = '0 1rem';
            // container.style.maxWidth = '100vw';
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

            const a = document.createElement('a');
            a.id = 'authors-links';



            container.innerHTML = ` <a href='${author.url}'><img id='authors-img' src=${author.imageSmall} alt=${author.imageAlt} width='150px' height='auto'></a>
                                    
                                    <span class='authors-labels'> Category: </span> <p>${author.category}</p>
                                    <p> ${author.html}</p>`;

            container.appendChild(a);

            container.appendChild(li);

            container.appendChild(ul);

            quotes.appendChild(container);



        });


    }

    catch (error) {
        console.error(error);
    }



}

