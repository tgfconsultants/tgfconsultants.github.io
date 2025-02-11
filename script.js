


var sideBar = document.getElementById("menu-toggle-icon");
var hiddenMenu = document.getElementById("sidebar-wrapper");
var overlay = document.getElementById("overlay");


sideBar.onclick = function(){
  hiddenMenu.style.display = "block";
}
overlay.onclick = function(){
  hiddenMenu.style.display = "none";
}
let slideIndex = 1;
showSlides(slideIndex);

// Manual slide navigation via dots or buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show slide based on the current index
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Wrap around if we go past the last slide or before the first
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Automatic slide transition every 2 seconds
function goToNextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

// Set interval to change slides every 2 seconds
setInterval(goToNextSlide, 2000); 

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your enquiry has been sent!');
    this.submit();
    
});
