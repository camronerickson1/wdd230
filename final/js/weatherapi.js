const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&appid=a52c3497cf85f8319344f4b3cef2e8a8";
const alertapiURL = "https://api.weather.gov/alerts/active/zone/UTZ106";

fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
        console.log(x);
        const currentTemp = document.querySelector("#current-temp");
        const weathericon = document.querySelector("#weathericon");
        const caption = document.querySelector('figcaption');
        const currentHumidity = document.querySelector("#humidity");

        currentTemp.textContent = x.main.temp.toFixed(0);
        let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
        let imgalt = x.weather[0].description;
        imgalt = imgalt.split(' ').map(capitalize).join(' ');
        let humidity = x.main.humidity;

        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', imgalt);
        caption.textContent = imgalt;
        currentHumidity.textContent = humidity;
    });

    function capitalize(word) {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    }

fetch(alertapiURL)
    .then((response) => response.json())
    .then((x) => {
        console.log(x);
        
        let alertZone = x.features;

        for (let i in alertZone) {
            
            alert(`Weather Alert:\n${alertZone[i].properties.description}`);
        }
    });