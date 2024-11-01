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



function dropdownCategories() {
    // const categories = ["Action", "Belief", "Courage", "Dreams", "Future", "Happiness", "Inner Strength", "Impact", "Kindness", "Life", "Motivation", "Opportunity", "Perseverance", "Positivity", "Perspective", "Resilience", "Success", "Time", "Work"]
    const categories = [
        "Action",
        "Change",
        "Charity",
        "Courage",
        "Determination",
        "Divine Guidance",
        "Dreams",
        "Faith",
        "Growth",
        "Happiness",
        "Hope",
        "Impact",
        "Inspiration",
        "Leadership",
        "Life",
        "Motivational",
        "Opportunity",
        "Perseverance",
        "Positivity",
        "Resilience",
        "Self-Reflection",
        "Service",
        "Success",
        "Wisdom"
    ];



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
