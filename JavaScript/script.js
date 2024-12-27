// Get the element with ID 
var clouds = document.getElementById("clouds");
var mountains = document.getElementById("mountains");
var heroText = document.getElementById("content_hero");
var cameraman = document.getElementById("cameraman");
var btnUp = document.getElementById("up");

// Function to ensure a value remains between a specified minimum and maximum
function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

// Add an event listener to execute the following logic whenever the user scrolls
window.onscroll = () => {
    const scrollY = window.pageYOffset;
    let value = clamp(scrollY, 0, 800);
    clouds.style.top = -value / 2 + "px";
    mountains.style.top = -value / 4 + "px";
    heroText.style.top = value + "px";
    this.scrollY >= 800 ? btnUp.classList.add("show") : btnUp.classList.remove("show");
}

// Function to scroll smoothly back to the top of the page
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

btnUp.addEventListener('click', backToTop);

// Get all sections with both an "id" attribute and the class "on-section"
const sections = document.querySelectorAll('.on-section[id]');

// Function to highlight the navigation link corresponding to the currently visible section
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.sider-on a[href*='${sectionId}']`).classList.add('active-link');
            activeSet = true;
        } else {
            document.querySelector(`.sider-on a[href*='${sectionId}']`).classList.remove('active-link');
        }
    });
    // If no section is active, remove 'active-link' from all navigation links
    // 'activeSet' will be false if no section is within the viewport
    !activeSet && navLinks.forEach((link) => link.classList.remove('active-link'));
}

window.addEventListener('scroll', scrollActive);

// Function to reveal elements as they come into view while scrolling
function scrollReveal() {
    const revealPoint = 100;
    let revealElement = document.querySelectorAll(".section-show");
    for (var i = 0; i < revealElement.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = revealElement[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            revealElement[i].classList.add("active");
        } else {
            revealElement[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", scrollReveal);
