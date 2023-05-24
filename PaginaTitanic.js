var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var gallerySlider = document.querySelector('.gallery-slider');
var images = Array.from(gallerySlider.querySelectorAll('img'));   //vector cu imagini din galerie 
var currentIndex = 0;      //indexul imaginii din galerie 


function initGallery() {
  images.forEach(function(image) {
    image.style.display = 'none';
  });

  images[currentIndex].style.display = 'block';


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

initGallery();



var element = document.querySelector(".date");

var culoareAleatoare = '#' + Math.floor(Math.random() * 16777215).toString(16);
element.style.color = culoareAleatoare;

