var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var gallerySlider = document.querySelector('.gallery-slider');
var images = Array.from(gallerySlider.querySelectorAll('img'));
var currentIndex = 0;

// Funcția de inițializare a galeriei
function initGallery() {
  // Ascunde toate imaginile inițial
  images.forEach(function(image) {
    image.style.display = 'none';
  });

  // Afișează prima imagine
  images[currentIndex].style.display = 'block';

  // Adaugă event listener pentru butoanele de navigare
  prevButton.addEventListener('click', function() {
    navigateGallery(-1);
  });

  nextButton.addEventListener('click', function() {
    navigateGallery(1);
  });
}

// Funcția de navigare în galerie
function navigateGallery(direction) {
  images[currentIndex].style.display = 'none';
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  images[currentIndex].style.display = 'block';
}

// Apelăm funcția de inițializare a galeriei
initGallery();
