const API_KEY = '94ce3e471f932c77360abddda2c2fdf8';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  
  if (!city) {
    alert('Please enter a city name.');
    return;
  }
  
  try {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    
    if (!response.ok) {
      throw new Error('City not found.');
    }
    
    const data = await response.json();
    updateWeatherInfo(data);
  } catch (error) {
    alert(error.message);
  }
}

function updateWeatherInfo(data) {
  const location = document.getElementById('location');
  const description = document.getElementById('description');
  const temperature = document.getElementById('temperature');

  location.textContent = `${data.name}, ${data.sys.country}`;
  description.textContent = `Weather: ${data.weather[0].description}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
}
