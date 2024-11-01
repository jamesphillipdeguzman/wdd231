export { getURL, apiFetch };

// Show current temp and weather data for the city
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
// const lat = 0; // Not needed anymore since we get coordinates from Geolocation
// const lon = 0; // Not needed anymore since we get coordinates from Geolocation
const apiKey = `0778f1befc62393b4badae75707b09a5`;

// Get URL using latitude and longitude
function getURL(lat, lon) {
    // Construct API URL for fetching weather data based on coordinates
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    apiFetch(url);
}

// Fetch weather data from the API
async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('The network could not be reached');
        } else {
            const data = await response.json();
            displayResults(data); // Display the results using the response data
        }
    } catch (error) {
        console.error('The error was: ', error);
    }
}

// Display the weather results on the webpage
function displayResults(data) {
    const theCityName = document.querySelector('#city-name');
    const city = data.name; // Get the city name from the API response

    theCityName.innerHTML = `${city}`; // Display the city name

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    currentTemp.innerHTML = `${data.main.temp}&deg`; // Display the current temperature

    const tempInfo = document.createElement('span');
    tempInfo.textContent = `${data.main.temp}&deg`; // Create a span element for the temperature
}

// Get user's location and fetch weather data
function getLocation() {
    if (navigator.geolocation) {
        // Check if the Geolocation API is supported
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getURL(lat, lon); // Fetch weather data using coordinates
        }, () => {
            console.error('Geolocation is not supported or permission denied.');
            // Fallback or default city if geolocation fails
            const defaultCity = 'Iloilo City';
            getURLByCityName(defaultCity); // Fetch weather for default city
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
        // Fallback or default city if Geolocation API is not supported
        const defaultCity = 'Iloilo City';
        getURLByCityName(defaultCity); // Fetch weather for default city
    }
}

// Fetch weather data by city name
function getURLByCityName(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    apiFetch(url);
}

// Ensure DOM is loaded before activating the functions
document.addEventListener('DOMContentLoaded', () => {
    getLocation(); // Start the process to get user's location
});
