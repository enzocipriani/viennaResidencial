const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const navigation = document.querySelector(".navigation");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentSlide = 0;

function goToSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.style.left = `${(slideIndex - index) * 100}%`;
  });

  currentSlide = index;
}

prevButton.addEventListener("click", () => {
  if (currentSlide === 0) {
    goToSlide(slides.length - 1);
  } else {
    goToSlide(currentSlide - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide === slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentSlide + 1);
  }
});

goToSlide(currentSlide);



//popup
var modal = document.getElementById("modal");
var img = document.getElementById("modal-img");
var slidesX = document.querySelectorAll(".slide img");

slidesX.forEach((slide) => {
  slide.onclick = function () {
    modal.style.display = "block";
    img.src = this.src;
  };
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modalx = document.getElementById("modalx");
var imgx = document.getElementById("modal-imgx");
var slidesXx = document.querySelectorAll(".image-itemxX img");
var slidesXy = document.querySelectorAll(".image-itemxXy img");

slidesXx.forEach((slide) => {
  slide.onclick = function () {
    modalx.style.display = "block";
    imgx.src = this.src;
  };
});

slidesXy.forEach((slide) => {
  slide.onclick = function () {
    modalx.style.display = "block";
    imgx.src = this.src;
  };
});

var spanx = document.getElementsByClassName("closez")[0];

spanx.onclick = function () {
  modalx.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalx) {
    modalx.style.display = "none";
  }
};

