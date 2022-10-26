const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        })
    },
    {
        threshold: 1,
    });
document.querySelectorAll(".appear").forEach((elem) => {
    intersectionObserver.observe(elem);
});