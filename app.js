const API_KEY = "53d1b699c38e124ca3e328ef88fe2f77";

const getWeather = (citySelector, tempSelector, iconSelector) => {
  const city = document.querySelector(citySelector),
    currentTemp = document.querySelector(tempSelector),
    currentIcon = document.querySelector(iconSelector);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((location) => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;

      const API = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${lat},${lon}`;
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          city.textContent = data.location.name;
          currentTemp.textContent = data.current.temperature;
          currentTemp.src =
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png";
        })
        .catch((error) => {
          console.error(`Произошла ошибка! ${error}`);
        });
    });
  }
};

window.addEventListener("DOMContentLoaded", () => {
  getWeather("#weatherCity", "#weatherTemp", "#weatherImg");
});
