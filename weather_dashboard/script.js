document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();
  fetchData()
});


async function fetchData() {
  const location = document.getElementById('City').value.trim();
  if (!location) {
    alert('Please enter a city: ');
    return;
  }

  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=049f104b90d14d60bec220629240404&q=${location}&days=5&aqi=no&alerts=no`);
    const data = await response.json();

    document.getElementById('city').textContent = data.location.name;
    document.getElementById('currentTime').textContent = data.location.localtime;
    document.getElementById('currentTemp').textContent = data.current.temp_c;
    document.getElementById('condition').textContent = data.current.condition.text;
    document.getElementById('humidity').textContent = data.current.humidity;


    const ForecastWeekElement = document.getElementById('ForecastWeek');
    ForecastWeekElement.innerHTML = '';
    data.forecast.forecastday.forEach(day => {
      const dayElement = document.createElement('div');
      dayElement.innerHTML = `
        <h2>${day.date}</h2>
        <p>Min Temperature: ${day.day.mintemp_f} °F</p>
        <p>Max Temperature: ${day.day.maxtemp_f} °F</p>
        <p>Condition: ${day.day.condition.text}</p>
      `;
      ForecastWeekElement.appendChild(dayElement);
    });
    
  }
  catch (error) {
    console.error('Error fetching data:', error);
  }
}

