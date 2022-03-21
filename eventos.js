const form = document.querySelector('#SeAmostre-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const amostrado = document.querySelector('textares');
    const texto = document.queryTextNode(amostrado.value);
    const cards = document.querySelector('#cards');
    const card = document.createElement('section');

    section.appendChild(texto);
    cards.appendChild(card);
});

