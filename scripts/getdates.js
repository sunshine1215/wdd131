const yearSpan = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

// Insert current year
yearSpan.textContent = new Date().getFullYear();

// Insert last modified date
lastModified.textContent = `Last Modified: ${document.lastModified}`;