// JavaScript for image slider
let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const translation = -currentIndex * 100 + '%';
    
    // Add a smooth transition effect
    slider.style.transition = 'transform 0.5s ease-in-out';
    
    slider.style.transform = `translateX(${translation})`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}


document.querySelector('.slider').addEventListener('transitionend', function() {
    this.style.transition = 'none';
});


setInterval(nextSlide, 3000);

e
function submitForm(event) {
        event.preventDefault(); 
        document.getElementById('submitted-message').style.display = 'block';
    
    }