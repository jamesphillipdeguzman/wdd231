/**
 * WDD 231 - Philippine City Gallery Controller
 * Loads city profiles, populates interactive selector, and coordinates with the weather widget.
 */

const FALLBACK_CITIES = [
  {
    id: "1",
    name: "Quezon City",
    postcode: "1100",
    image: "/images/cities/qc.webp",
    rank: "1st",
    latitude: 14.676,
    longitude: 121.0437,
    population: 2994000,
    tourist_destinations: {
      tourist1: "Aguinaldo Shrine",
      tourist2: "Quezon Memorial Circle",
      tourist3: "Loyola Memorial Park"
    },
    wiki: "https://en.wikipedia.org/wiki/Quezon_City"
  },
  {
    id: "2",
    name: "Manila",
    postcode: "1000",
    image: "/images/cities/manila.webp",
    rank: "2nd",
    latitude: 14.5995,
    longitude: 120.9842,
    population: 1785000,
    tourist_destinations: {
      tourist1: "Intramuros",
      tourist2: "Rizal Park",
      tourist3: "National Museum Complex"
    },
    wiki: "https://en.wikipedia.org/wiki/Manila"
  },
  {
    id: "3",
    name: "Cebu City",
    postcode: "6000",
    image: "/images/cities/cebu.webp",
    rank: "3rd",
    latitude: 10.3157,
    longitude: 123.8854,
    population: 922611,
    tourist_destinations: {
      tourist1: "Magellan's Cross",
      tourist2: "Basilica Minore del Santo Niño",
      tourist3: "Taoist Temple"
    },
    wiki: "https://en.wikipedia.org/wiki/Cebu_City"
  },
  {
    id: "4",
    name: "Davao City",
    postcode: "8000",
    image: "/images/cities/davao.webp",
    rank: "4th",
    latitude: 7.1907,
    longitude: 125.4553,
    population: 1633000,
    tourist_destinations: {
      tourist1: "Philippine Eagle Center",
      tourist2: "People's Park",
      tourist3: "Mount Apo"
    },
    wiki: "https://en.wikipedia.org/wiki/Davao_City"
  },
  {
    id: "5",
    name: "Zamboanga City",
    postcode: "7000",
    image: "/images/cities/zamboanga.webp",
    rank: "5th",
    latitude: 6.8925,
    longitude: 122.0872,
    population: 861799,
    tourist_destinations: {
      tourist1: "Paseo del Mar",
      tourist2: "Fort Pilar",
      tourist3: "Pink Sand Beach"
    },
    wiki: "https://en.wikipedia.org/wiki/Zamboanga_City"
  },
  {
    id: "6",
    name: "Antipolo City",
    postcode: "1870",
    image: "/images/cities/antipolo.webp",
    rank: "6th",
    latitude: 14.5804,
    longitude: 121.12,
    population: 776000,
    tourist_destinations: {
      tourist1: "Antipolo Cathedral",
      tourist2: "Hinulugang Taktak",
      tourist3: "Lourdes Church"
    },
    wiki: "https://en.wikipedia.org/wiki/Antipolo"
  },
  {
    id: "7",
    name: "Pasig City",
    postcode: "1600",
    image: "/images/cities/pasig.webp",
    rank: "7th",
    latitude: 14.5802,
    longitude: 121.085,
    population: 803400,
    tourist_destinations: {
      tourist1: "Emerald Avenue",
      tourist2: "Pasig Rainforest Park",
      tourist3: "Metrowalk"
    },
    wiki: "https://en.wikipedia.org/wiki/Pasig"
  },
  {
    id: "8",
    name: "Taguig City",
    postcode: "1630",
    image: "/images/cities/taguig.webp",
    rank: "8th",
    latitude: 14.5304,
    longitude: 121.0509,
    population: 886600,
    tourist_destinations: {
      tourist1: "Bonifacio Global City",
      tourist2: "SM Aura Premier",
      tourist3: "Heritage Park"
    },
    wiki: "https://en.wikipedia.org/wiki/Taguig"
  },
  {
    id: "9",
    name: "Iloilo City",
    postcode: "5000",
    image: "/images/cities/iloilo.webp",
    rank: "9th",
    latitude: 10.6918,
    longitude: 122.5621,
    population: 454600,
    tourist_destinations: {
      tourist1: "Iloilo River Esplanade",
      tourist2: "Molo Church",
      tourist3: "Jaro Cathedral"
    },
    wiki: "https://en.wikipedia.org/wiki/Iloilo_City"
  },
  {
    id: "10",
    name: "General Santos City",
    postcode: "9500",
    image: "/images/cities/gensan.webp",
    rank: "10th",
    latitude: 6.1045,
    longitude: 125.171,
    population: 259000,
    tourist_destinations: {
      tourist1: "Fish Port Complex",
      tourist2: "Sarangani Bay",
      tourist3: "Panggal Festival"
    },
    wiki: "https://en.wikipedia.org/wiki/General_Santos"
  }
];

let allCities = [];

async function fetchCities() {
  try {
    const response = await fetch("/data/cities.json").catch(() => fetch("data/cities.json"));
    if (!response.ok) throw new Error("Could not fetch data/cities.json");
    const data = await response.json();
    allCities = data.cities && data.cities.length ? data.cities : FALLBACK_CITIES;
  } catch (error) {
    console.info("[Cities] Using local dataset for cities:", error.message);
    allCities = FALLBACK_CITIES;
  }

  buildCityDropdown(allCities);
  
  // Set default city to Iloilo City
  const defaultCity = allCities.find(c => c.name.includes("Iloilo")) || allCities[0];
  if (defaultCity) {
    const selector = document.querySelector("#dynamic-cities");
    if (selector) selector.value = defaultCity.name;
    buildCityGallery([defaultCity]);
    if (window.updateWeather) {
      window.updateWeather(defaultCity.name);
    }
  } else {
    buildCityGallery(allCities);
  }
}

function buildCityDropdown(cities) {
  const selector = document.querySelector("#dynamic-cities");
  if (!selector) return;

  selector.innerHTML = `
    <option value="">Show All Cities (${cities.length})</option>
    ${cities
      .map((city) => `<option value="${escapeHtml(city.name)}">${escapeHtml(city.name)} (Rank ${city.rank})</option>`)
      .join("")}
  `;

  selector.addEventListener("change", (e) => {
    const selectedCity = e.target.value;
    if (selectedCity) {
      const filtered = allCities.filter((c) => c.name === selectedCity);
      buildCityGallery(filtered);
      if (window.updateWeather) {
        window.updateWeather(selectedCity);
      }
    } else {
      buildCityGallery(allCities);
      if (window.updateWeather) {
        window.updateWeather("Iloilo City");
      }
    }
  });
}

function buildCityGallery(cities) {
  const galleryContainer = document.querySelector(".city-cards") || document.querySelector(".cities-gallery .city-cards");
  if (!galleryContainer) return;

  galleryContainer.innerHTML = "";

  cities.forEach((city) => {
    const card = document.createElement("article");
    card.className = "city-section";

    const wikiUrl = city.wiki || `https://en.wikipedia.org/wiki/${encodeURIComponent(city.name.replace(/ /g, "_"))}`;
    const popFormatted = Number(city.population).toLocaleString();
    const touristSpot = city.tourist_destinations?.tourist1 || "Cultural Landmark";

    const imgSrc = city.image ? (city.image.startsWith('/') ? city.image : '/' + city.image) : '/images/philippines.png';

    card.innerHTML = `
      <a href="${wikiUrl}" target="_blank" rel="noopener noreferrer" class="city-img-link" title="Open Wikipedia article for ${escapeHtml(city.name)}">
        <img src="${imgSrc}" alt="The city of ${escapeHtml(city.name)}" width="240" height="150" loading="lazy" onerror="this.onerror=null; this.src='/images/philippines.png';">
        <span class="city-rank-badge">${escapeHtml(city.rank)} Largest</span>
      </a>
      <div class="city-dataBox">
        <h4 class="city-card-name">${escapeHtml(city.name)}</h4>
        <div class="city-meta-grid">
          <p><strong>Postcode:</strong> ${escapeHtml(city.postcode || '—')}</p>
          <p><strong>Population:</strong> ${popFormatted}</p>
          <p><strong>Coordinates:</strong> ${city.latitude.toFixed(2)}°N, ${city.longitude.toFixed(2)}°E</p>
          <p class="tourist-row"><strong>Highlight:</strong> 🌟 ${escapeHtml(touristSpot)}</p>
        </div>
        <a href="${wikiUrl}" target="_blank" rel="noopener noreferrer" class="city-wiki-btn">
          Explore City &rarr;
        </a>
      </div>
    `;

    galleryContainer.appendChild(card);
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

document.addEventListener("DOMContentLoaded", fetchCities);
