// Toggle navigation menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
  navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navMenu.classList.remove("active"); // auto close menu on mobile
  });
});

// Filter projects by category (optional enhancement, not triggered by buttons yet)
function filterProjects(category) {
  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {
    if (category === "all" || project.dataset.category === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Lightbox effect for project images
const modal = document.getElementById("lightbox");
const modalImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".project img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let valid = true;

  if (name.value.trim() === "") {
    name.classList.add("error");
    valid = false;
  } else {
    name.classList.remove("error");
  }

  if (!email.value.includes("@")) {
    email.classList.add("error");
    valid = false;
  } else {
    email.classList.remove("error");
  }

  if (message.value.trim() === "") {
    message.classList.add("error");
    valid = false;
  } else {
    message.classList.remove("error");
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});
