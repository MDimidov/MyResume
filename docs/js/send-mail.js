document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page from refreshing

  // manually send the form with Fetch API
  const formData = new FormData(this);

  const modal = document.querySelector('.modal');
  const pElement = modal.querySelector('p');

  // Pop up waiting for email sending
  pElement.textContent = 'Your email is sending. Please wait, this may take a few moments.';
  modal.style.display = 'block';

  let emailInfo = '';
  fetch(this.action, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        emailInfo = 'Email sent successfully!';
      } else {
        emailInfo = 'Email failed to send.';
      }

      // Pop the successful message
      pElement.textContent = emailInfo;
      pElement.style.color = '#2add17';
      modal.style.display = 'block';
      document.getElementById('contactForm').reset();
    })
    .catch((error) => {
      console.error('Error:', error);
    });


  // Close success message
  document.querySelector('button[aria-label="Close"]').onclick = function () {
    modal.style.display = 'none';
  };

  modal.querySelector('.modal-footer>button.btn.rounded').onclick = function () {
    modal.style.display = 'none';
  };


  //   window.onclick = function (event) {
  //     if (event.target === modal) {
  //       modal.style.display = 'none';
  //     }
  //   };
});
