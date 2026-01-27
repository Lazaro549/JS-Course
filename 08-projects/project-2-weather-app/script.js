/**
 * WEATHER APP
 * -----------
 * Uses OpenWeatherMap API
 * Replace API_KEY with your own key
 */

const API_KEY = "YOUR_API_KEY_HERE";
const form = document.getElementById("weather-form");
const input = document.getElementById("city-input");
const result = document.getElementById("weather-result");

form.addEventListener("submit", async e => {
  e.preventDefault();

  const city = input.value.trim();
  if (!city) return;

  result.textContent = "Loading...";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    result.innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    result.textContent = error.message;
  }

  input.value = "";
});
