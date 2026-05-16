// Hamburger Menu
const menuButton = document.querySelector("#menu-btn");
const navigation = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

    if (navigation.classList.contains("show")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

// Current Year
document.querySelector("#year").textContent =
new Date().getFullYear();

// Last Modified Date
document.querySelector("#lastModified").textContent =
document.lastModified;