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


const api_url = "data/quotes.json";


async function getapi(api_url) {
    try {
        const response = await fetch(api_url);
        if (response.ok) {
            var data = await response.json();
            console.table(data);
        }
        else {
            throw new Error('No network response from server');
        }

    }
    catch (error) {
        console.error(error);
    }
}

getapi(api_url);


