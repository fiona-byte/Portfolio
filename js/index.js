
//Navigation Bar
const navBtn = document.getElementById("navigation-btn");
const navBg = document.getElementById("navigation-bg");
const navMenu = document.getElementById("navigation-nav");
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

// scroll to top button

const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        if(!scrollToTopButton.classList.contains("btn-entrance")) {
            scrollToTopButton.classList.remove("btn-exit");
            scrollToTopButton.classList.add("btn-entrance");
            scrollToTopButton.style.display = "block";
        }
    }
    else {
        if(!scrollToTopButton.classList.contains("btn-exit")) {
            scrollToTopButton.classList.remove("btn-entrance");
            scrollToTopButton.classList.add("btn-exit");
            setTimeout(() => {
                scrollToTopButton.style.display = "none";
            }, 300);
        }
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

//Copyright date
const footerYear = document.getElementById("copyright");

footerYear.appendChild(document.createTextNode(new Date().getFullYear()));