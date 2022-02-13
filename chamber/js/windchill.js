let windSpeed = document.getElementById("wind-speed");
let temp = parseFloat(document.getElementById("temp"));


function getWindChill() {
    let T = parseFloat(document.getElementById("temp").textContent);
    let W = parseInt(document.getElementById("windspeed").textContent);
    return Math.round(35.74 + (0.6215 * T) - (35.75 * (W**0.16)) + (0.4275 * T * (W**0.16)));
    
}

document.getElementById("wind-chill").innerHTML = `${getWindChill()}`;