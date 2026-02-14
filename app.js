const tempBtn = document.getElementById("tempBtn");
const condBtn = document.getElementById("condBtn");
const result = document.getElementById("result");

const latitude = 35.9557;
const longitude = -80.0053;

const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

async function fetchWeather() {
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.current_weather;

  } catch (error) {
    result.innerHTML = "Error fetching weather data.";
    console.error(error);
  }
}

tempBtn.addEventListener("click", async () => {
  result.innerHTML = "Loading...";
  const weather = await fetchWeather();
  if (weather) {
    result.innerHTML = `Current Temperature: ${weather.temperature}°C`;
  }
});

condBtn.addEventListener("click", async () => {
  result.innerHTML = "Loading...";
  const weather = await fetchWeather();
  if (weather) {
    result.innerHTML = `Wind Speed: ${weather.windspeed} km/h`;
  }
});
