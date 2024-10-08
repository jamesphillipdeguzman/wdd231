import { getURL, apiFetch, displayResults } from "./course-weather.js";

async function fetchCities() {
    try {

        const response = await fetch('data/cities.json');
        if (!response.ok) {
            throw new Error('No network response.');
        }
        else {

            const data = await response.json();
            const cities = data.cities;
            console.table(cities);

            dropdownCities(cities);
            return cities;
        }

    }
    catch (error) {
        console.error(error.message);
    }
}



const dropdownCities = (cities) => {
    const selector = document.querySelector('#dynamic-cities');

    cities.forEach(city => {

        // Check if the option already exists...
        const existingOption = Array.from(selector.options).some(option => option.value === `${city.name}`);

        console.log(existingOption);

        if (!existingOption) {

            const cityCurrentTemp = document.createElement('span');
            const cityName = document.createElement('p');
            const tempBox = document.createElement('figure');
            const tempBoxCaption = document.createElement('figcaption');

            // Target elements for temperature, weather icon and figcaption for weather forecast
            // const weatherInfo = document.querySelector('.weather-info');
            const currentTemp = document.querySelector('#current-temp');
            const weatherIcon = document.querySelector('#weather-icon');
            const captionDesc = document.querySelector('figcaption');

            const option = document.createElement('option');
            const cityNames = `${city.name}`;

            // Populate DROPDOWN with city names from PH
            option.value = cityNames;
            option.textContent = cityNames;

            // POPULATE THE SCROLL GALLERY FOR CITIES...

            // Target elements using constant variables

            const card = document.querySelector('.cities-gallery');
            const cardTitle = document.querySelector('.city-title');

            const img = document.createElement('img');

            const dataBox = document.createElement('p');
            const rank = document.createElement('p');
            const lat = document.createElement('p');
            const lon = document.createElement('p');
            const population = document.createElement('p');
            const tourist = document.createElement('p');

            const section = document.createElement('section');
            const span = document.createElement('span');


            // Class names

            section.className = 'city-section';
            dataBox.className = 'city-dataBox';
            tempBox.className = 'temp-box';
            tourist.className = 'tourist-spot';
            rank.className = 'rank';

            // Image properties

            img.className = "city-img";
            img.setAttribute("src", `${city.image}`);
            img.setAttribute("alt", `The city of ${city.name}`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', '200');
            img.setAttribute('height', '200');
            img.style.border = '1px solid #ccc';
            img.style.boxShadow = '0px 0px 4px #888';


            // figcaption properties
            dataBox.style.fontStyle = 'normal';
            dataBox.textContent = `Name: ${city.name}`;
            dataBox.style.color = 'white';
            dataBox.style.fontSize = '0.7rem';



            // Card details here...

            rank.textContent = `Rank: ${city.rank}`;
            rank.style.color = '#fff';
            rank.style.fontSize = '0.8rem';
            rank.style.margin = '0 auto';

            lat.textContent = `lat: ${city.latitude}`;
            lon.textContent = `lon: ${city.longitude}`;
            population.textContent = `Population: ${city.population}`;
            tourist.textContent = `Tourist spot: ${city.tourist_destinations.tourist1}`;


            getURL(`${city.name}`);

            // const theTemp = getURL(`${city.name}`);
            selector.append(option);
            cardTitle.append(selector);
            span.append(tourist);
            span.append(population);

            span.append(lat);
            span.append(lon);
            span.append(rank);
            span.append(cityCurrentTemp);
            section.append(img);
            dataBox.append(span);
            section.append(dataBox);
            card.append(section);




        }




    });

    const dynamicCities = document.querySelector('#dynamic-cities');

    dynamicCities.addEventListener('change', () => {
        // alert(document.querySelector('#dynamic-cities').value);

        const city = document.querySelector('#dynamic-cities').value;




        if (document.querySelector('#dynamic-cities').value == city) {
            // alert('match!');
            // Get weather API
            getURL(`${city}`);



        }

    });


};

fetchCities();






