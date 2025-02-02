document.querySelectorAll('.options a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento predeterminado del enlace

        const targetId = this.getAttribute('href').substring(1); // Obtiene el id de la sección
        const targetElement = document.getElementById(targetId); // Selecciona la sección

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'start'     // Alinea la sección al inicio de la ventana
            });
        }
    });
});