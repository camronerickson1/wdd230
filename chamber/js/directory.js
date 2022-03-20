const requestURL = 'https://camronerickson1.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusiness);
  });

  function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let image = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    name.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    website.textContent = `${business.website}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', business.image);
    image.setAttribute('alt', `Logo for ${business.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(image);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
    }
