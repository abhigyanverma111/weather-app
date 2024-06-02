// api address = http://api.weatherapi.com/v1/current.json?key=e25309246b154712ad1102115243105&q=London&aqi=no
const SearchButton = document.getElementById("SearchButton");
const SearchBar = document.getElementById("SearchBar");
async function getData(location) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=e25309246b154712ad1102115243105&q=${location}&aqi=yes`
  );
  return await data.json();
}

const searchFunction = async () => {
  const location = document.getElementById("SearchBar").value;
  const weatherData = await getData(location);
  console.log(weatherData);
  // list of elements to be changed
  // img with id 'weather-icon'
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.src = weatherData.current.condition.icon;
  const conditionText = document.getElementById("condition-text");
  conditionText.innerText = weatherData.current.condition.text;
  const temperature = document.getElementById("temperature");
  temperature.innerText = weatherData.current.temp_c;
  const windspeed = document.getElementById("wind-speed");
  windspeed.innerText = weatherData.current.wind_kph;
  const precipitation = document.getElementById("precipitation");

  precipitation.innerText = weatherData.current.precip_mm;
  document.getElementById("weather-info").style.display = "block";
};

SearchButton.addEventListener("click", searchFunction);

SearchBar.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    SearchButton.click();
  }
});
