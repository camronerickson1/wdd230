const visitsDisplay = document.getElementById('visitInfo');

let lastVisit = Number(window.localStorage.getItem('visits-ls'));

if (lastVisit == 0) {
    visitsDisplay.textContent = `Today!`;
} else {
    let dateDifference = Math.round((Date.now() - lastVisit) / (60*60*24*1000)); 
    visitsDisplay.textContent = `${dateDifference} days ago`;
}

lastVisit = Date.now();

localStorage.setItem("visite-ls", lastVisit);