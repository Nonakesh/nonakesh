const navResponsiveOpen = "nav--responsive-open";
let navigation = document.getElementById("nav");

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