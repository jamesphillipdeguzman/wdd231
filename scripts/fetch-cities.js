import { getURL } from "./course-weather.js";

let allCities = []; // store all cities

async function fetchCities() {
  try {
    const response = await fetch("data/cities.json");
    if (!response.ok) throw new Error("Failed to fetch cities data");

    const data = await response.json();
    allCities = data.cities; // save all cities

    buildCityDropdown(allCities);
    buildCityGallery(allCities); // show all by default

    // Load weather for the first city by default
    if (allCities.length) getURL(allCities[0].name);
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
}

function buildCityDropdown(cities) {
  const selector = document.querySelector("#dynamic-cities");
  if (!selector) return;

  selector.innerHTML = `<option value="">Select a city</option>`;

  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    selector.append(option);
  });

  selector.addEventListener("change", () => {
    const selectedCity = selector.value;
    if (selectedCity) {
      getURL(selectedCity); // update weather
      filterCityGallery(selectedCity); // filter gallery
    } else {
      buildCityGallery(allCities); // show all if none selected
    }
  });
}

function filterCityGallery(cityName) {
  const filtered = allCities.filter((city) => city.name === cityName);
  buildCityGallery(filtered);
}

function buildCityGallery(cities) {
  const galleryContainer = document.querySelector(
    ".cities-gallery .city-cards",
  );
  if (!galleryContainer) return;

  galleryContainer.innerHTML = ""; // clear previous cards

  cities.forEach((city) => {
    const section = document.createElement("section");
    section.className = "city-section";

    const wikiLink = document.createElement("a");
    wikiLink.href = `https://en.wikipedia.org/wiki/${city.name.replace(/ /g, "_")}`;
    wikiLink.target = "_blank";
    wikiLink.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = city.image;
    img.alt = `The city of ${city.name}`;
    img.width = 200;
    img.height = 200;

    wikiLink.appendChild(img);

    const infoBox = document.createElement("div");
    infoBox.className = "city-dataBox";
    infoBox.innerHTML = `
      <p><strong>Name:</strong> ${city.name}</p>
      <p><strong>Rank:</strong> ${city.rank}</p>
      <p><strong>Latitude:</strong> ${city.latitude}</p>
      <p><strong>Longitude:</strong> ${city.longitude}</p>
      <p><strong>Population:</strong> ${city.population}</p>
      <p><strong>Tourist spot:</strong> ${city.tourist_destinations.tourist1}</p>
    `;

    section.append(wikiLink, infoBox);
    galleryContainer.appendChild(section);
  });
}

fetchCities();
