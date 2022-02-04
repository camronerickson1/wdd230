const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click', function() {
    let chapter = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listBtn = document.createElement('button');

    listItem.textContent = chapter;
    


    
    // for (let i = 1; i <= size; i++) {
    //     let li = document.createElement('li');
    //     li.innerHTML = `${input}`;
    //     list.appendChild(li);
    }
)