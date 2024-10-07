const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
// const lat = 0;
// const lon = 0;

function getURL(lat, lon) {
    // API key: 0778f1befc62393b4badae75707b09a5
    // Iloilo City coordinates
    // const lat = 10.6918;
    // const lon = 122.5621;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=0778f1befc62393b4badae75707b09a5`;
    apiFetch(url);
    return url;
}


// getURL();


async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('The network could not be reached', await response.text());
        }
        else {
            const data = await response.json();
            console.table(data);
            // alert('hi there');
            displayResults(data);
        }
    }
    catch (error) {
        console.error('The error was: ', error);
    }
}

// apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${data.weather[0].description}`);
    captionDesc.textContent = `${desc}`;



}

export { getURL, apiFetch, displayResults };