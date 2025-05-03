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
  }
*/

function slide(direction) {
    const slider = event.target.closest('.slider'); // Get the slider container
    const images = slider.querySelectorAll('img'); // Get all the images inside the slider
    let currentIndex = -1;

    // Find the current visible image (this is the first image with the "visible" class)
    images.forEach((image, index) => {
        if (image.classList.contains('visible')) {
            currentIndex = index;
        }
    });

    // Remove the "visible" class from the current image
    if (currentIndex !== -1) {
        images[currentIndex].classList.remove('visible');
    }

    // Calculate the new index based on the direction (-1 for left, 1 for right)
    let newIndex = (currentIndex + direction + images.length) % images.length;

    // Add the "visible" class to the new image
    images[newIndex].classList.add('visible');
}

// Set the first image as visible initially when the page loads
window.onload = () => {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        if (images.length > 0) {
            images[0].classList.add('visible');
        }
    });
};
