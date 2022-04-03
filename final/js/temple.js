function toggleMenu() {
    document.getElementById("main-nav").classList.toggle("open");
    document.getElementById("hamburger-btn").classList.toggle("open");
}

const x = document.getElementById("hamburger-btn");
x.onclick = toggleMenu;

let update = document.lastModified;
document.getElementById("last-modified").innerHTML = update;