const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&appid=a52c3497cf85f8319344f4b3cef2e8a8";
const alertapiURL = "https://api.weather.gov/alerts/active/zone/UTZ106";

fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
        console.log(x);
        const currentTemp = document.querySelector("#current-temp");
        const weathericon = document.querySelector("#weathericon");
        const caption = document.querySelector('figcaption');
        const windSpeed = document.querySelector('#windspeed');
        const currentHumidity = document.querySelector("#humidity");

        currentTemp.textContent = x.main.temp.toFixed(0);
        let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
        let imgalt = x.weather[0].description;
        imgalt = imgalt.split(' ').map(capitalize).join(' ');
        // let wind = x.wind.speed;
        let humidity = x.main.humidity;

        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', imgalt);
        caption.textContent = imgalt;
        // windSpeed.textContent = wind;
        currentHumidity.textContent = humidity;

        // const temp = x.main.temp.toFixed(0);
        // const speed = x.wind.speed;
        // if(temp <= 50 && speed > 3) {
        //     const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 * temp * Math.pow(speed,0.16);
        //     document.querySelector("#wind-chill").innerHTML = `${Math.round(windchill)}&#176;F`;
        // }
        // else {
        //     document.querySelector("#wind-chill").innerHTML = "N/A"
        // }
    });

    function capitalize(word) {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    }

fetch(alertapiURL)
    .then((response) => response.json())
    .then((x) => {
        console.log(x);
        
        let alertZone = x.features;
        let testAlert = "";

        for (let i in alertZone) {
            
            alert(`Weather Alert:\n${alertZone[i].properties.description}`);
        }
    });

// asdf = "sksks"
// tester = document.querySelector("#humidity");
// tester.textContent = asdf;