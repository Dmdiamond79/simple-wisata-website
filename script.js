let currentSlide = 0;
const slides = document.querySelectorAll('.image-slider img');

// Function to show the current slide
function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// Function to show the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

// Function to show the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

// Automatically advance to the next slide every 3 seconds (adjust the timing as needed)
setInterval(nextSlide, 3000);

// Initialize the image slider
showSlide();
