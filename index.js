const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const navigation = document.querySelector('.navigation');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function goToSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.style.left = `${(slideIndex - index) * 100}%`;
  });

  currentSlide = index;
}

prevButton.addEventListener('click', () => {
  if (currentSlide === 0) {
    goToSlide(slides.length - 1);
  } else {
    goToSlide(currentSlide - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlide === slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentSlide + 1);
  }
});

goToSlide(currentSlide);

