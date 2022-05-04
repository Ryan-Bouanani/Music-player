///// carrousels ///////////

// On selectionne les images de notre carousel
const carousel = [...document.querySelectorAll('.carousel img')];

// Initialisation d'un compteur
let carouselImageIndex = 0;

// Changement d'image du carrousel
const changeCarousel = () => {
    // Met la classe active a la premiere image
    carousel[carouselImageIndex].classList.toggle('active');
    // Si mon image est la derniere a s'afficher on remet la premiere image au compteur sinon on passe à l'image suivante
    if (carouselImageIndex >= carousel.length - 1) {
        carouselImageIndex = 0;
    } else {
        carouselImageIndex++;
    }
    // Et on désactive la classe active
    carousel[carouselImageIndex].classList.toggle('active');
}
// On effectue le changement d'image toutes les 3 secondes
setInterval(() => {
    changeCarousel();
}, 3000);