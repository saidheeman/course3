// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
  navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navMenu.classList.remove("active"); // auto-close menu
  });
});

// Lightbox for project images
const modal = document.get


