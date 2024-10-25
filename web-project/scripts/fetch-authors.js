export { fetchAuthors };

const api_url = "data/quotes.json";


async function fetchAuthors(api_url) {
    try {
        const response = await fetch(api_url);
        if (response.ok) {
            const authors = await response.json();
            console.table(authors);
            // dropdownAuthors(authors);
            dropdownCategories();
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


// Populate your dropdown with the chamber's  member's names.

// const dropdownAuthors = (authors) => {

//     const selector = document.querySelector('#dynamic-authors');

//     authors.forEach((author) => {


//         // populate the dropdown with the member's names
//         const categoryName = `${author.category}`;

//         // Check if the option already exists...
//         const existingOption = Array.from(selector.options).some(option => option.value === `${categoryName.id} ${categoryName.name}`);
//         // Create the dropdown list only if empty initially...
//         if (!existingOption) {

//             const option = document.createElement('option');

//             option.value = categoryName;
//             option.textContent = categoryName;

//             selector.append(option);


//         }


//     });

// }

function dropdownCategories() {
    // const categories = ["Action", "Belief", "Courage", "Dreams", "Future", "Happiness", "Inner Strength", "Impact", "Kindness", "Life", "Motivation", "Opportunity", "Perseverance", "Positivity", "Perspective", "Resilience", "Success", "Time", "Work"]
    const categories = ["Action", "Dreams", "Impact", "Life", "Motivational", "Opportunity", "Perseverance", "Positivity", "Resilience", "Self-Reflection", "Success", "Goals"];

    const selector = document.getElementById('dynamic-authors');

    if (selector) {
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            selector.appendChild(option);
        });
    }

}


// const api_url = "https://zenquotes.io/api/random";


// async function getapi(api_url) {
//     try {
//         const response = await fetch(api_url);
//         if (response.ok) {
//             var data = await response.json();
//             console.table(data);
//         }
//         else {
//             throw new Error('No network response from server');
//         }

//     }
//     catch (error) {
//         console.error(error);
//     }
// }

// getapi(api_url);
