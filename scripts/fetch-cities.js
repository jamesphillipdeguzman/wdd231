// course-cities.js
import { getURL } from "./course-weather.js";

async function fetchCities() {
  try {
    const response = await fetch("data/cities.json");
    if (!response.ok) throw new Error("Failed to fetch cities data");

    const data = await response.json();
    const cities = data.cities;

    console.table(cities);
    buildCityDropdown(cities);
    buildCityGallery(cities);

    // Optionally, load weather for first city by default
    if (cities.length) getURL(cities[0].name);
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
}

function buildCityDropdown(cities) {
  const selector = document.querySelector("#dynamic-cities");
  if (!selector) return;

  // Clear existing options
  selector.innerHTML = `<option value="">Select a city</option>`;

  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    selector.append(option);
  });

  selector.addEventListener("change", () => {
    const selectedCity = selector.value;
    if (selectedCity) getURL(selectedCity);
  });
}

function buildCityGallery(cities) {
  const gallery = document.querySelector(".cities-gallery");
  if (!gallery) return;

  gallery.innerHTML = ""; // Clear existing cards

  cities.forEach((city) => {
    const section = document.createElement("section");
    section.className = "city-section";

    // City Image
    const img = document.createElement("img");
    img.className = "city-img";
    img.src = city.image;
    img.alt = `The city of ${city.name}`;
    img.loading = "lazy";
    img.width = 200;
    img.height = 200;
    img.style.border = "1px solid #ccc";
    img.style.boxShadow = "0 0 4px #888";

    // City Info
    const infoBox = document.createElement("div");
    infoBox.className = "city-dataBox";
    infoBox.style.color = "#fff";
    infoBox.style.fontSize = "0.75rem";
    infoBox.innerHTML = `
      <p><strong>Name:</strong> ${city.name}</p>
      <p><strong>Rank:</strong> ${city.rank}</p>
      <p><strong>Latitude:</strong> ${city.latitude}</p>
      <p><strong>Longitude:</strong> ${city.longitude}</p>
      <p><strong>Population:</strong> ${city.population}</p>
      <p><strong>Tourist spot:</strong> ${city.tourist_destinations.tourist1}</p>
    `;

    section.append(img, infoBox);
    gallery.append(section);
  });
}

// Kick off fetching cities
fetchCities();
