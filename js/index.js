
//Navigation Bar
const navBtn = document.getElementById("navigation-btn");
const navBg = document.getElementById("navigation-bg");
const navMenu = document.getElementById("navigation-menu");
const navLink = document.querySelectorAll(".navigation__item");

navBtn.addEventListener("click", () => {
    navBg.classList.toggle("open");
});

navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("menu");
});

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("change");
});

navLink.forEach((e) => {
    e.addEventListener('click', () => {
        navBtn.classList.remove("change");
        navMenu.classList.remove("menu");
        navBg.classList.remove("open");
    })

});

//Copyright date
const footerYear = document.getElementById("copyright");

footerYear.appendChild(document.createTextNode(new Date().getFullYear()));