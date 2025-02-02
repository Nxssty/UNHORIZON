document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Evitar el comportamiento predeterminado del formulario
    event.preventDefault();

    // Enviar el formulario con fetch
    fetch(this.action, {
      method: "POST",
      body: new FormData(this),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        // Mostrar el modal de Ã©xito
        var successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        // Limpiar los campos del formulario
        this.reset();
      } else {
        alert("Hubo un problema al enviar el mensaje.");
      }
    }).catch(error => {
      alert("Error de red: " + error.message);
    });
  });