import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";
// import { updateText } from "./windowsize.js";


document.addEventListener('DOMContentLoaded', () => {


    // showHideHamburger();
    getDateTimeInfo();
    windowScroll();
    // updateText();
    // fetchAuthors();
    generateRandomQuote();




    const api_url = "data/quotes.json";


    async function fetchAuthors(api_url) {
        try {
            const response = await fetch(api_url);
            if (response.ok) {
                const authors = await response.json();
                console.table(authors);
                const randNumber = generateRandomQuote();
                filterAuthors(authors, randNumber);

                return authors;
            }
            else {
                throw new Error('No network response from server');
            }

        }
        catch (error) {
            console.error(error);
        }
    }

    fetchAuthors(api_url);

    // Generate a random number from 1 to 100
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    const randomQuotes = document.querySelector('#random-quotes');
    function generateRandomQuote(authors) {

        window.addEventListener('load', () => {
            // Hid the number generated
            // const randNumber = getRandomInt(1, 100);

            // randomQuotes.textContent = `${randNumber}`;

        });
    }


    // This main function is the middleman for fetchAuthors and filterAuthors


    async function main() {
        try {
            const authors = await fetchAuthors();
            console.log(authors);


            filterAuthors(authors);
        } catch (error) {
            console.error(error);
        }


    }



    // ============== FILTER AN AUTHOR ====================

    const filterAuthors = (authors) => {
        const myRandomNum = getRandomInt(1, 100); // Generate numbers between 1 and 100
        const filteredAuthors = authors.filter(author => author.id === myRandomNum);

        if (myRandomNum > authors.length) {
            randomQuotes.innerHTML = `<p id="randomQuotes">Sorry, quote not found.</p>`;
        } else if (filteredAuthors.length > 0 && filteredAuthors[0].imageSmall) {
            randomQuotes.innerHTML = `<img src="${filteredAuthors[0].imageSmall}" alt="No photo available" loading="lazy" width="150px" height="auto"> <p id="randomQuotes">${filteredAuthors[0].html}</p>`;
        } else {
            // Return an empty picture or placeholder image
            randomQuotes.innerHTML = `<img src="path/to/empty-image.png" alt="No image available" loading="lazy" width="150px" height="auto"> <p id="randomQuotes">No image available for this quote.</p>`;
        }
    };


    const refreshBtn = document.querySelector('#refresh-btn');

    refreshBtn.addEventListener('click', () => {
        randomQuoteRefresh();
    });

    function randomQuoteRefresh(event) {


        location.reload();

    }

});