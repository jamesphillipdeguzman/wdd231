const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API key: 0778f1befc62393b4badae75707b09a5
// Lat: 49.77156
// Lon: 6.64533
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.77156&lon=6.64533&units=metric&appid=0778f1befc62393b4badae75707b09a5';



async function apiFetch() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('The network could not be reached', await response.text());
        }
        else {
            const data = await response.json();
            console.table(data);
            displayResults(data);
        }
    }
    catch (error) {
        console.error('The error was: ', error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${data.weather[0].description}`);
    captionDesc.textContent = `${desc}`;

}

