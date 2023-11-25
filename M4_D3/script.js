document.addEventListener('DOMContentLoaded', function () {
  const apiKey = 'hXiYGd8FHLv6b5FxNWhjmJgssk7BqKGDVQpUFNAth1vHij330quT26Bx';
  const apiUrl = 'https://api.pexels.com/v1/search?query=cats';

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': apiKey,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Errore nella risposta della richiesta. Status: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      const photos = data.photos;

      photos.forEach(photo => {
        createCard(photo.src.medium, photo.photographer, photo.photographer_url);
      });
    })
    .catch(error => {
      console.error('Errore nella chiamata API:', error.message);
    });

  function createCard(imageUrl, photographer, photographerUrl) {
    const container = document.querySelector('.row');

    const card = document.createElement('div');
    card.classList.add('col', 'col-4');

    const cardHtml = `
      <div class="card mb-4 shadow-sm">
        <img src="${imageUrl}" alt="${photographer}">
        <div class="card-body">
          <p class="card-text">Photographer: <a href="${photographerUrl}" target="_blank">${photographer}</a></p>
        </div>
      </div>
    `;

    card.innerHTML = cardHtml;
    container.appendChild(card);
  }
});
