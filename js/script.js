// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// ketika hamburger menu diklik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Ketika Shopping Cart diklik
const navShop = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart").onclick = (e) => {
  navShop.classList.toggle("active");
  e.preventDefault();
};
// klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sh = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sh.contains(e.target) && !navShop.contains(e.target)) {
    navShop.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".detail-item-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

const closeDetailButton = document.querySelector(".close-icon");

closeDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Close modal

const modal = document.querySelector("#item-detail-modal");

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
