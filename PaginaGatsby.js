var subtitlu = document.querySelector('.subtitlu');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var gallerySlider = document.querySelector('.gallery-slider');
var images = Array.from(gallerySlider.querySelectorAll('img'));
var currentIndex = 0;


// Ascundeți elementul inițial
subtitlu.style.height = '0';
subtitlu.style.overflow = 'hidden';
subtitlu.style.transition = 'height 2s';

// Faceți-l să apară prin animarea înălțimii
setTimeout(function() {
  subtitlu.style.height = '100px'; // Înălțimea dorită
}, 500);



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
