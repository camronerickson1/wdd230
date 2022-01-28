const d = new Date();

const year = d.getFullYear();


let update = document.lastModified;
document.getElementById("last-modified").innerHTML = update;


const fullYear = document.querySelector('#year');

try {
    fullYear.textContent = year;
} catch (e) {
    alert('Error with code or your browser does not support Locale');
}

function toggleMenu() {
    document.getElementById("main-nav").classList.toggle("open");
    document.getElementById("hamburger-btn").classList.toggle("open");
}

const x = document.getElementById("hamburger-btn");
x.onclick = toggleMenu;