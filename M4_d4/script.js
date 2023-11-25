document.addEventListener('DOMContentLoaded', function () {
  const url = "https://striveschool-api.herokuapp.com/books";

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Errore nella risposta della richiesta. Status: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      // Gestisci la risposta della chiamata API qui
      console.log(data);

      // Esempio: cicla attraverso i libri e crea le carte
      const booksContainer = document.querySelector('.row');

      data.forEach(book => {
        createCard(book, booksContainer);
      });
    })
    .catch(error => {
      // Gestisci gli errori della chiamata API qui
      console.error('Errore nella chiamata API:', error.message);
    });

  function createCard(book, container) {
    const card = document.createElement('div');
    card.classList.add('col', 'col-3');

    const cardHtml = `
      <div class="card mb-4 shadow-sm">
        <img src="${book.img}" alt="${book.title}">
        <div class="card-body">
          <p>${book.title}</p>
          <div class="d-flex">
            <button class="btn btn-primary">Prezzo: ${book.price} EUR</button>
            <button class="btn btn-secondary">Nascondi</button>
          </div>
        </div>
      </div>
    `;

    card.innerHTML = cardHtml;
    container.appendChild(card);
  }

});
