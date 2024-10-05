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

            selector.append(option);
        }


    });
}

export { fetchCities, dropdownCities };

