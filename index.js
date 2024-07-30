const carousel = document.querySelector('.classic-accessories-container');
const carouselInner = document.querySelector('.classic-accessories-items');
const carouselItems = document.querySelectorAll('.accessories-item');
const navBtns = document.querySelectorAll('.nav-btn');

let activeIndex = 0;

// Add event listeners to navigation buttons
navBtns.forEach((btn, index) => {
btn.addEventListener('click', () => {
setActiveIndex(index);
});
});

// Set the active index and update the carousel
function setActiveIndex(index) {
activeIndex = index;
updateCarousel();
}

// Update the carousel and navigation buttons
function updateCarousel() {
carouselItems.forEach((item, index) => {
item.classList.toggle('active', index === activeIndex);
});

navBtns.forEach((btn, index) => {
btn.classList.toggle('active', index === activeIndex);
});
}

// Initialize the carousel
updateCarousel();
setInterval(function() {
activeIndex++;
if (activeIndex >= carouselItems.length) {
activeIndex = 0;
}
updateCarousel();
}, 5000);

let lastScrollTop = 0; // Variable to store the last scroll position
const header = document.getElementById('desktopnav'); // Get the header element

window.addEventListener('scroll', () => {
const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; 

if (currentScrollTop > lastScrollTop) {
header.style.top = '-60px'; 
} else {
header.style.top = '0';
}


lastScrollTop = currentScrollTop;
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    const offset = 60; // Height of your fixed header
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.desktop-navigation');
    
    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function() {
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-name');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownToggle.addEventListener('click', function(event) {
event.preventDefault();
dropdownContent.classList.toggle('show');

if (dropdownContent.classList.contains('show')) {
    dropdown.style.marginBottom = '100px';
}
});
});

ScrollReveal().reveal('.collection-item',{ easing: 'ease-in',interval: 300,reset:true });
