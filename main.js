const cards = document.querySelectorAll(".card");
let currentIndex = 0;
let visibleCards = window.innerWidth <= 636 ? 1 : 3;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.style.display =
      index >= currentIndex && index < currentIndex + visibleCards
        ? "block"
        : "none";
  });
}

function scrollToRight() {
  // Si on est à la fin, on revient au début
  currentIndex = (currentIndex + visibleCards) % cards.length;
  updateCarousel();
}

function scrollToLeft() {
  // Si on est au début, on revient à la fin
  currentIndex = (currentIndex - visibleCards + cards.length) % cards.length;
  updateCarousel();
}

// Fonction pour ajuster la valeur de visibleCards en fonction de la taille de l'écran
function handleResize() {
  visibleCards = window.innerWidth <= 636 ? 1 : 3;
  currentIndex = 0; // Réinitialise l'index de départ
  updateCarousel(); // Actualise l'affichage
}

// Détecte le redimensionnement de la fenêtre pour adapter le nombre de cartes visibles
window.addEventListener("resize", handleResize);

// Appel initial pour afficher le premier groupe de cartes
updateCarousel();
