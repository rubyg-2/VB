let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart");
    const totalSpan = document.getElementById("total");

    cartList.innerHTML = "";
    cart.forEach((entry, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${entry.item} - $${entry.price}`;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(index);

        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });

    totalSpan.textContent = total;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// JavaScript Slideshow Code ALLOWING SWITCH OF IMAGES
document.addEventListener("DOMContentLoaded", function () {
    const slideshows = document.querySelectorAll(".slideshow");

    slideshows.forEach(slideshow => {
        const images = slideshow.querySelectorAll("img"); // Fix: Select all images
        let currentIndex = 0; // Track active image index
       
        if (images.length > 0) {
            images[currentIndex].classList.add("active"); // Ensure first image is visible
        }
        // Function to switch images
        function showNextImage() {
            images[currentIndex].classList.remove("active"); // Hide current image
            currentIndex = (currentIndex + 1) % images.length; // Move to next image
            images[currentIndex].classList.add("active"); // Show next image
        }

        // Set interval for slideshow (e.g., every 3 seconds)
        setInterval(showNextImage, 3000); // 3000ms = 3 seconds

    });
});

window.addEventListener("resize", function () {
    const img = document.querySelector(".member-card img");
    if (window.innerWidth > 1200) {
        img.style.width = "40vw";
    } else if (window.innerWidth > 600) {
        img.style.width = "50vw";
    } else {
        img.style.width = "80vw";
    }
});



/*TESTING PRELOAD*/
// Get the video element
const video = document.getElementById('loader-video');

// Event listener for when the video ends
video.addEventListener('ended', function() {
    // Fade out effect
    document.getElementById('preloader').classList.add('fade-out');

    // After fade-out, hide preloader and show the main content
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none'; // Hide the preloader
        document.getElementById('main-content').style.display = 'block'; // Show main content
    }, 1000); // Wait for 1 second to let the fade-out effect complete
});


/*
function toggleDetails(button) {
    const details = button.nextElementSibling;
    details.classList.toggle("hidden");
    button.textContent = details.classList.contains("hidden") ? "Read More" : "Read Less";
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
  }

// Function to move the slider images
 function slide(direction, sliderId) {
    const slider = document.getElementById(sliderId);
    const images = slider.querySelectorAll('img');
    const imageWidth = images[0].clientWidth;
    const currentTransform = slider.style.transform || "translateX(0px)";
    const currentX = parseInt(currentTransform.match(/-?\d+/)[0]);

    let maxX = -(imageWidth * (images.length - 1));
    let newX = currentX + direction * imageWidth;

    if (newX > 0) newX = 0;
    if (newX < maxX) newX = maxX;

    slider.style.transform = `translateX(${newX}px)`;
  }

// Set the first image as visible initially when the page loads
window.onload = () => {
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(sliderContainer => {
        const images = sliderContainer.querySelectorAll('.slider img');
        if (images.length > 0) {
            images[0].classList.add('visible');
        }

        // Add event listeners to the arrow buttons
        const leftArrow = sliderContainer.querySelector('.arrow.left');
        const rightArrow = sliderContainer.querySelector('.arrow.right');

        if (leftArrow) {
            leftArrow.addEventListener('click', () => slide(-1, sliderContainer)); // Move left
        }

        if (rightArrow) {
            rightArrow.addEventListener('click', () => slide(1, sliderContainer)); // Move right
        }
    });
};*/



function toggleDetails(button) {
    var details = button.nextElementSibling;
    details.classList.toggle('hidden');
    button.textContent = details.classList.contains('hidden') ? 'Read More' : 'Hide';
}

// Function to move the slider images
function slide(direction, sliderContainer) {
  const slider = sliderContainer.querySelector('.slider');
  if (!slider) return console.error(`No .slider inside`, sliderContainer);

  const images = slider.querySelectorAll('img');
  const imageWidth = images[0]?.clientWidth || 0;

  const currentTransform = slider.style.transform || "translateX(0px)";
  const currentX = parseInt(currentTransform.match(/-?\d+/)?.[0] || "0");

  const maxX = -(imageWidth * (images.length - 1));
  let newX = currentX + direction * imageWidth;

  if (newX > 0) newX = 0;
  if (newX < maxX) newX = maxX;

  slider.style.transform = `translateX(${newX}px)`;
}


// Set the first image as visible initially when the page loads
window.onload = () => {
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(sliderContainer => {
        const images = sliderContainer.querySelectorAll('.slider img');
        if (images.length > 0) {
            images[0].classList.add('visible');
        }

        // Add event listeners to the arrow buttons
        const leftArrow = sliderContainer.querySelector('.arrow.left');
        const rightArrow = sliderContainer.querySelector('.arrow.right');

        if (leftArrow) {
            leftArrow.addEventListener('click', () => slide(-1, sliderContainer)); // Move left
        }

        if (rightArrow) {
            rightArrow.addEventListener('click', () => slide(1, sliderContainer)); // Move right
        }
    });
};
