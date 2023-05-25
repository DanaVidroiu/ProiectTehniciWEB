var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var gallerySlider = document.querySelector('.gallery-slider');
var images = Array.from(gallerySlider.querySelectorAll('img')); 
var currentIndex = 0;    


// getComputedStyle() și getBoundingClientRect()
var subtitluDiv = document.querySelector('.subtitlu'); 

var pElement = subtitluDiv.querySelector('p');
console.log(pElement.textContent); 
pElement.textContent = '196 minute | Dramă, Romantic, Dragoste';   //din 194 minute, s a transformat in 196 


var style = window.getComputedStyle(subtitluDiv);
console.log(style.backgroundColor); 


var spanElement = document.createElement('span');
spanElement.textContent = 'Regizor: James Cameron';
subtitluDiv.appendChild(spanElement);     //am adaugat noul element static, regizor: James Cameron
x


var rect = subtitluDiv.getBoundingClientRect();
console.log(rect.width); 
console.log(rect.height); 
console.log(rect.top); 
console.log(rect.left);


var element = document.querySelector(".date p");

var culoareAleatoare = '#' + Math.floor(Math.random() * 18032).toString(16);      //schimbarea aleatorie a culorii titlului "Datele filmului" cu o functie math
element.style.setProperty("color", culoareAleatoare);



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


