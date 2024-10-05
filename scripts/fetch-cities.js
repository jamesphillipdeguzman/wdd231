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
            const cityName = `${city.name}`;
            const option = document.createElement('option');

            option.value = cityName;
            option.textContent = cityName;

            const card = document.querySelector('.cities');

            // Create an img element and define its class name
            const img = document.createElement('img');
            img.className = "city-img";
            img.setAttribute("src", `${city.image}`);
            img.setAttribute("alt", `The city of ${city.name}`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', '100');
            img.setAttribute('height', '100');
            img.style.border = '1px solid #ccc';
            img.style.boxShadow = '0px 0px 4px #888';

            const cardTitle = document.querySelector('.city-title');

            cardTitle.append(selector);

            selector.append(option);
            card.append(img);




        }




    });
    selectCities.addEventListener('change', (cities) => {

        const card = document.querySelector('.cities');

        // Create an img element and define its class name
        const img = document.createElement('img');
        img.className = "city-img";
        img.setAttribute("src", `${city.image}`);
        img.setAttribute("alt", `The city of ${city.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '100');
        img.setAttribute('height', '100');
        img.style.border = '1px solid #ccc';
        img.style.boxShadow = '0px 0px 4px #888';

        const cardTitle = document.querySelector('.city-title');

        cardTitle.append(selector);

        selector.append(option);
        card.append(img);
        // selectCities.innerHTML
        // populateCities();
        alert('ok');


    });
};




// export { fetchCities, dropdownCities };

