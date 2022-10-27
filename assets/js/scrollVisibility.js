const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let isLargerThanScreen = entry.rootBounds.height < entry.boundingClientRect.height;
                let isFullyOnSreen = entry.intersectionRatio === 1;
                if (isLargerThanScreen || isFullyOnSreen) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            }
        })
    },
    {
        threshold: [0, 1]
    });
document.querySelectorAll(".appear").forEach((elem) => {
    intersectionObserver.observe(elem);
});