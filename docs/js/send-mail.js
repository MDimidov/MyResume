document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page from refreshing

  // manually send the form with Fetch API
  const formData = new FormData(this);

  const modal = document.querySelector(".modal");
  const pElement = modal.querySelector("p");
  // const divElement = pElement.querySelector('div');

  // Pop up waiting for email sending
  pElement.innerHTML =
    "Your email is sending. Please wait, this may take a few moments." +
    '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
  modal.style.display = "block";

  let emailInfo = "";
  fetch(this.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        emailInfo = "Email sent successfully!";
        pElement.style.color = "#2add17";
      } else {
        emailInfo = "Email failed to send.";
        pElement.style.color = "#9c0919";
      }

      // Pop the successful message
      pElement.innerHTML = "";
      pElement.textContent = emailInfo;
      modal.style.display = "block";
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // Close success message
  // document.querySelector('button[aria-label='Close']').onclick = function () {
  //   modal.style.display = 'none';
  // };

  modal.querySelector(".modal-footer>button.btn.rounded").onclick =
    function () {
      modal.style.display = "none";
    };

  //   window.onclick = function (event) {
  //     if (event.target === modal) {
  //       modal.style.display = 'none';
  //     }
  //   };
});
