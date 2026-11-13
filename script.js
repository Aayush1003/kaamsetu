document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const year = document.getElementById("year");

  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
