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

function showContent(id) {
  var menus = document.getElementsByClassName("switch");

  for (var i = 0; i < menus.length; i++) {
    menus[i].style.background = "#fffaf5";
    menus[i].style.color = "#08121d";
  }

  var menu = document.getElementById(id);

  if (menu) {
    menu.style.background = "#e89a47";
    menu.style.color = "#08121d";
  }

  if (id === "PERSPECTIVAS") {
    switchGallery("slidesRenders");
  } else {
    switchGallery("slidesPlantas");
  }
}

showContent("PERSPECTIVAS");

function switchGallery(id) {
  var renders = document.getElementById("slidesRenders");
  var plants = document.getElementById("slidesPlantas");

  if (id === "slidesRenders") {
    plants.style.display = "none";
    renders.style.display = "block";
  } else {
    renders.style.display = "none";
    plants.style.display = "block";
  }
}

switchGallery("slidesRenders");

function openForms() {
  const pop = document.getElementById("formPop");

  if (pop) {
    pop.showModal();

    pop.addEventListener("click", function (event) {
      var rect = pop.getBoundingClientRect();
      var isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        pop.close();
      }
    });
  }
}

function closeForms() {
  const pop = document.getElementById("formPop");

  pop.close();
}

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const sliderScrollbar = document.querySelector(
    ".containerGalerryPhoto .slider-scrollbar"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = 252 * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  };

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
  });
};

const initSliderX = () => {
  const imageListX = document.querySelector(".slider-wrapperX .image-listX");
  const slideButtonsX = document.querySelectorAll(
    ".slider-wrapperX .slide-buttonX"
  );

  const larguraDaTela = window.innerWidth;

  if (larguraDaTela > 908) {
    const lefting = (larguraDaTela - 960) / 2;
    imageListX.style.paddingLeft = lefting + "px";
    imageListX.style.paddingRight = lefting + "px";
  }

  slideButtonsX.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slideX" ? -1 : 1;
      if (larguraDaTela > 908) {
        const scrollAmount = 1000 * direction;
        imageListX.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        const scrollAmount = 398 * direction;
        imageListX.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    });
  });
};

const initSliderXy = () => {
  const imageListXy = document.querySelector(".slider-wrapperXy .image-listXy");
  const slideButtonsXy = document.querySelectorAll(
    ".slider-wrapperXy .slide-buttonXy"
  );

  const larguraDaTela = window.innerWidth;

  if (larguraDaTela > 908) {
    const lefting = (larguraDaTela - 960) / 2;
    imageListXy.style.paddingLeft = lefting + "px";
    imageListXy.style.paddingRight = lefting + "px";
  }

  slideButtonsXy.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slideXy" ? -1 : 1;
      if (larguraDaTela > 908) {
        const scrollAmount = 1000 * direction;
        imageListXy.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        const scrollAmount = 398 * direction;
        imageListXy.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    });
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("resize", initSliderX);
window.addEventListener("resize", initSliderXy);
window.addEventListener("load", initSlider);
window.addEventListener("load", initSliderX);
window.addEventListener("load", initSliderXy);
