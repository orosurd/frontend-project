// Scroll to top
const scrolltp = document.querySelector('#scrolltp');
scrolltp.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
window.addEventListener('scroll', function() {
    if(scrollY >= 700) {
        scrolltp.style.opacity = 1;
    }
    else {
        scrolltp.style.opacity = 0;
    }
});

// Theme
const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");
if(darkmode){
    body.classList.add("dark");
    themeToggle.checked = true;
}
themeToggle.addEventListener('change', function(){
    body.classList.toggle("dark");

    if(body.classList.contains("dark")) {
        localStorage.setItem("dark","active");
    } else {
        localStorage.removeItem("dark");
    }
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton =document.querySelector('.hamburger-button');
    const mobileMenu =document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburgerButton.classList.toggle('active');
    });
});
