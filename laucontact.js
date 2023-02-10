const scriptURL = 'https://script.google.com/macros/s/AKfycby7_hxP0W2zoDd9_vEqJLiWtFxGPQfXNEmca31vVshCAUObc3Vwk8QBnx2gKlw1cl56IQ/exec'
      const form = document.forms['lau-contact']

      form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })