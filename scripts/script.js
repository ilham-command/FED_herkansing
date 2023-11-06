console.log("hi");
const carousel = document.querySelector('.slide');
const prevButton = document.querySelector('.slide-button.prev');
const nextButton = document.querySelector('.slide-button.next');
const items = document.querySelectorAll('.card');

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  const translateX = -currentIndex * itemWidth;
  carousel.style.transform = `translateX(${translateX}px)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

var winkelwagenbutton = document.querySelectorAll('.winkelwagenButton');
var notificatie = document.querySelector('main .microinteractie');

for (var i = 0; i < winkelwagenbutton.length; i++) {
  winkelwagenbutton[i].addEventListener('click', microinteractie);
}

function microinteractie() {
  notificatie.classList.toggle('microinteractie');
}




