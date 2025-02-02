const slidesContainer2 = document.querySelector('.slides-container2');
const slides2 = document.querySelectorAll('.slide2');
const prevButton2 = document.querySelector('.prev2');
const nextButton2 = document.querySelector('.next2');
const indicators2 = document.querySelectorAll('.indicator2');
let currentSlide2 = 0;

function updateCarousel2() {
    // Mueve el contenedor de slides
    slidesContainer2.style.transform = `translateX(-${currentSlide2 * 100}%)`;

    // Actualiza los indicadores
    indicators2.forEach((indicator, index) => {
        indicator.classList.toggle('active2', index === currentSlide2);
    });
}

// Evento para el botón "Siguiente"
nextButton2.addEventListener('click', () => {
    currentSlide2 = (currentSlide2 + 1) % slides2.length;
    updateCarousel2();
});

// Evento para el botón "Anterior"
prevButton2.addEventListener('click', () => {
    currentSlide2 = (currentSlide2 - 1 + slides2.length) % slides2.length;
    updateCarousel2();
});

// Evento para los indicadores
indicators2.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide2 = index;
        updateCarousel2();
    });
});

// Inicializar el carrusel
updateCarousel2();