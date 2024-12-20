import { getURL, apiFetch } from "./weather.js";
import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";
// import { updateText } from "./windowsize.js";


document.addEventListener('DOMContentLoaded', () => {

    // comment out showHideHamburger here because it won't work if otherwise...
    // showHideHamburger();
    getDateTimeInfo();
    windowScroll();
    // updateText();
    getURL();
    generateDailyQuote();



});


const api_url = "data/dailyquotes.json";


async function fetchDailyQuote(api_url) {
    try {
        const response = await fetch(api_url);
        if (response.ok) {
            const authors = await response.json();
            console.table(authors);
            const theDay = getTodaysDate();
            filterAuthors(authors, theDay);

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

fetchDailyQuote(api_url);

// return day today
function getTodaysDate() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    console.log(dayOfYear);
    // Ensure dayOfYear is between 1 and 365
    return dayOfYear > 365 ? 365 : dayOfYear;
}



const dailyQuote = document.querySelector('.daily-quote');
function generateDailyQuote(authors) {

    window.addEventListener('load', () => {
        // Hid the number generated
        //const dayNumber = getTodaysDate();

        //dailyQuote.textContent = `${dayNumber}`;

    });
}


// This main function is the middleman for fetchDailyQuote and filterAuthors


async function main() {
    try {
        const authors = await fetchDailyQuote();
        console.log(authors);


        filterAuthors(authors);
    } catch (error) {
        console.error(error);
    }


}



// ============== FILTER BY AUTHOR FOR DAILY QUOTES ====================

const filterAuthors = (authors) => {

    const myDayNum = getTodaysDate();
    const filteredAuthors = authors.filter(author => author.id === myDayNum);


    if (filteredAuthors.length > 0) {
        dailyQuote.innerHTML = `<p id="todays-quote">"${filteredAuthors[0].quote}"</p>
        <p id="author-name">${filteredAuthors[0].name}</p>`;
    }

    else {
        dailyQuote.innerHTML = 'Sorry, quote not found.';
    }




}