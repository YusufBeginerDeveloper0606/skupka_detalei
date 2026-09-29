
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
}

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu?.classList.remove("open");
    });
});

document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
});
