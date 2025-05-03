
function toggleDetails(btn) {
  const details = btn.nextElementSibling;
  details.classList.toggle('hidden');
  btn.textContent = details.classList.contains('hidden') ? 'Read More' : 'Hide';
}

/*
let currentIndex = 0;

  function slide(direction) {
    const slider = document.getElementById('imageSlider');
    const totalImages = slider.children.length;
    const containerWidth = slider.parentElement.offsetWidth;

    currentIndex += direction;

    if (currentIndex < 0) currentIndex = totalImages - 1;
    if (currentIndex >= totalImages) currentIndex = 0;

    slider.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
  }*/

window.slide = function (button, direction) {
  const slider = button.closest('.slider-container').querySelector('.slider');
  const slides = slider.querySelectorAll('.slide');
  let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  if (currentIndex === -1) currentIndex = 0; // Fallback safety

  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
};


