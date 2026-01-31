const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const theCityName = document.querySelector("#city-name");

const apiKey = `0778f1befc62393b4badae75707b09a5`;

// Fetch weather for a given city
function getURL(city = "Iloilo") {
  apiFetch(city);
}

// API call
async function apiFetch(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch weather");

    const data = await response.json();
    console.table(data);
    displayResults(data, city);
  } catch (error) {
    console.error("Weather API error:", error);
  }
}

// Display weather results
function displayResults(data, city) {
  theCityName.textContent = city;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;

  currentTemp.textContent = `${data.main.temp.toFixed(1)}°C`;
}

// Connect city dropdown to weather updates
const citySelect = document.querySelector("#dynamic-cities");
citySelect?.addEventListener("change", (e) => {
  const city = e.target.value;
  if (city) getURL(city);
});

// Optional: show default city on page load
getURL(); // Iloilo by default

export { getURL, apiFetch, displayResults };
