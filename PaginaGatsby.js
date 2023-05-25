var subtitlu = document.querySelector('.subtitlu');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var gallerySlider = document.querySelector('.gallery-slider');
var images = Array.from(gallerySlider.querySelectorAll('img'));
var currentIndex = 0;



subtitlu.style.height = '0';
subtitlu.style.overflow = 'hidden';
subtitlu.style.transition = 'height 2s';

setTimeout(function() {
  subtitlu.style.height = '100px'; 
}, 500);


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
