// Product Array
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Anti-Gravity Boots" },
  { id: "jh-1969", name: "Hoverboard" }
];

// Populate Product Select Dynamically
function populateProducts() {
  const select = document.getElementById("product-name");
  
  if (!select) return;

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
}

// Dynamic Footer Year
function setFooterYear() {
  const yearEl = document.getElementById("footer-year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const currentYearEl = document.getElementById("current-year");

  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
}

// Last Modified Date
function setLastModified() {
  const modEl = document.getElementById("last-modified");

  if (!modEl) return;

  modEl.textContent = document.lastModified;
}

// Update and Display Review Count on review.html
function updateReviewCount() {
  const countEl = document.getElementById("review-count");

  if (!countEl) return;

  let count = localStorage.getItem("reviewCount");
  count = count ? parseInt(count) + 1 : 1;

  localStorage.setItem("reviewCount", count);
  countEl.textContent = count;
}

// Run functions
populateProducts();
setFooterYear();
setLastModified();
updateReviewCount();