async function fetchApiDataWithToken() {
    const apiUrl = "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/";
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGYxZWYzMzk1MzljNDAwMTQ3MmM2MWQiLCJpYXQiOjE2OTM1NzcwMTIsImV4cCI6MTY5NDc4NjYxMn0.NmKx2Mxoz3c-9pmDqb24tesG-BFwTfxwHu7jvYkv7ww';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET', 
        headers: {
          'Authorization': `Bearer ${authToken}`, 
          'Content-Type': 'application/json', 
        },
      });
  
      if (!response.ok) {
        throw new Error('Errore nella richiesta API');
      }
  
      const data = await response.json();
  
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  







const form = document.getElementById('form')

form.addEventListener('click', function() {
    window.location.href = ('form.html');
});


