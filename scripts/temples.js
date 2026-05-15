// Hamburger menu toggle
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // Change icon
  if (navMenu.classList.contains("show")) {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified
document.getElementById("lastModified").textContent = document.lastModified;