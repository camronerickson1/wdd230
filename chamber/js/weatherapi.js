const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5781860&units=imperial&appid=a52c3497cf85f8319344f4b3cef2e8a8";

fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
        // console.log(jsObject);
        const currentTemp = document.querySelector("#current-temp");
        const weathericon = document.querySelector("#weathericon");
        const caption = document.querySelector('figcaption');

        currentTemp.textContent = x.main.temp.toFixed(0);
        let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
        let imgalt = x.weather[0].description;
        imgalt = imgalt.split(' ').map(capitalize).join(' ');

        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', imgalt);
        caption.textContent = imgalt;
    });

    function capitalize(word) {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    }