// function toggleMenu() {
//     document.getElementById("main-nav").classList.toggle("open");
//     document.getElementById("hamburger-btn").classList.toggle("open");
// }

// const x = document.getElementById("hamburger-btn");
// x.onclick = toggleMenu;

// let update = document.lastModified;
// document.getElementById("last-modified").innerHTML = update;

const requestURL = 'https://camronerickson1.github.io/wdd230/final/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemple);
  });

  function displayTemple(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let image = document.createElement('img');
    let services = document.createElement('p');
    let history = document.createElement('p');
    let ordinance = document.createElement('p');
    let session = document.createElement('p');
    let closure = document.createElement('p');
    let like = document.createElement('button');
  
    // Change the textContent property of the h2 element
    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    email.textContent = `${temple.email}`;
    services.textContent = `${temple.services}`;
    history.textContent = `${temple.history}`;
    ordinance.textContent = `${temple.ordinance}`;
    session.textContent = `${temple.session}`;
    closure.textContent = `${temple.closure}`;

    like.setAttribute = ('class', 'like');
    like.textContent = `${temple.like}`;
    
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', temple.image);
    image.setAttribute('alt', `image of ${temple.name}`);
    image.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(image);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinance);
    card.appendChild(session);
    card.appendChild(closure);
    card.appendChild(like);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
    }

// Like button
// const likeButton = document.querySelector('.cards section button');


// function addLike() {
//     likeButton.setAttribute('class', 'liked');
//     likeButton.textContent = "Liked!"
// }

// likeButton.addEventListener('click', addLike);