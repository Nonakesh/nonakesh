const navResponsiveOpen = "nav--responsive-open";
let navigation = document.getElementById("nav");

// ==== Responsive menu button ====
// Button toggle
let navMenuButton = document.getElementById("nav__menu__button");
navMenuButton.addEventListener("click", () => {
    if (navigation.classList.contains(navResponsiveOpen)) {
        navigation.classList.remove(navResponsiveOpen);
    } else {
        navigation.classList.add(navResponsiveOpen);
    }
});

// Any button was clicked, close the list again
document.querySelectorAll(".nav__item").forEach((item) => {
    item.addEventListener('click', () => {
        navigation.classList.remove(navResponsiveOpen);
    })
});

// ==== Hide on scroll ====
let prevScrollPos = window.scrollY;
window.addEventListener("scroll", () => {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        navigation.classList.remove("nav--hidden");
    } else {
        navigation.classList.add("nav--hidden");
    }
    prevScrollPos = currentScrollPos;
});