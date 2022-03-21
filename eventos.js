window.onload = function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gerenciando o input Nome:
        const entraNome = document.querySelector('#name');
        const nome = document.createElement('h3');
        nome.appendChild(document.createTextNode(entraNome.value));

        // Gerenciando o input Interesses:
        const entraInteresses = document.querySelector('#interesses');
        const interesses = document.createElement('p');
        interesses.appendChild(document.createTextNode(entraInteresses.value));
        
        // Gerenciando o input url:
        const entraUrl = document.querySelector('#url');
        const foto = document.createElement('foto-card');
        foto.classList.add('foto-card');
        foto.setAttribute('src', entraUrl.value);
        
        //Criando os cards
                
        form.reset();
    });
}
