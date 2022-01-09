const d = new Date();
const year = d.getFullYear();

let update = document.lastModified;
document.getElementById("currentdate").innerHTML = update;


const fullYear = document.querySelector('#year');
fullYear.textContent = year;