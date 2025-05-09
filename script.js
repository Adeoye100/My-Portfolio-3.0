
// Initialize Swiper
const heroSwiper = new Swiper(".hero-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  speed: 800,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

// Navigation Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list ul");
const navLinks = document.querySelectorAll(".nav-list ul li a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  });
});

// Theme Switch Functionality
const themeSwitchCheckbox = document.getElementById("checkbox");
const body = document.body;

function setTheme(theme) {
  body.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  setTheme(currentTheme);
  if (currentTheme === "dark") {
    themeSwitchCheckbox.checked = true;
  }
} else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  setTheme("dark");
  themeSwitchCheckbox.checked = true;
} else {
  setTheme("light");
}

themeSwitchCheckbox.addEventListener("change", () => {
  if (themeSwitchCheckbox.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
});

// Intersection Observer for revealing elements on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  },
  {
    threshold: 0.1, // Trigger when 10% of the element is visible
  }
);

const serviceItems = document.querySelectorAll(".service-item");
serviceItems.forEach((item) => {
  observer.observe(item);
});

const projectItems = document.querySelectorAll(".project-item");
projectItems.forEach((item) => {
  observer.observe(item);
});

const aboutImg = document.querySelector(".about-img");
observer.observe(aboutImg);

const contactItems = document.querySelectorAll(".contact-item");
contactItems.forEach((item) => {
  observer.observe(item);
});
