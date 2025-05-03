
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


