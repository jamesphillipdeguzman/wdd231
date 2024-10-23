export { fetchAuthors };

const api_url = "data/quotes.json";


async function fetchAuthors(api_url) {
    try {
        const response = await fetch(api_url);
        if (response.ok) {
            const authors = await response.json();
            console.table(authors);
            dropdownAuthors(authors);
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

const dropdownAuthors = (authors) => {

    const selector = document.querySelector('#dynamic-authors');

    authors.forEach((author) => {


        // populate the dropdown with the member's names
        const authorName = `${author.id} ${author.name}`;

        // Check if the option already exists...
        const existingOption = Array.from(selector.options).some(option => option.value === `${authorName.id} ${authorName.name}`);
        // Create the dropdown list only if empty initially...
        if (!existingOption) {

            const option = document.createElement('option');

            option.value = authorName;
            option.textContent = authorName;

            selector.append(option);


        }


    });

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
