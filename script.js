const sliders = document.querySelectorAll('.slider');
const texts = document.querySelectorAll('.texto .slidert');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  sliders.forEach(item => item.classList.remove('on'));
  texts.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  sliders[currentSlide].classList.add('on');
  texts[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  if (currentSlide === sliders.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = sliders.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);
