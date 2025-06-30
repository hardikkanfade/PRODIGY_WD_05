async function getWeather() {
  const apiKey = "5166a1616f503a5cce359fb109d18e7b"; // Replace with your actual API key
  const city = document.getElementById('locationInput').value.trim();
  const weatherBox = document.getElementById('weatherBox');

  if (!city) {
    weatherBox.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    const { name, main, weather } = data;

    weatherBox.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Temperature:</strong> ${main.temp} °C</p>
      <p><strong>Condition:</strong> ${weather[0].main}</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
    `;
  } catch (error) {
    weatherBox.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
