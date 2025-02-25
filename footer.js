let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let footer = document.getElementById("footer");
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.offsetHeight;

    if (scrollTop + windowHeight >= documentHeight - 10) {
        footer.style.bottom = "0";
    } else if (scrollTop < lastScrollTop) {
        footer.style.bottom = "-100%";
    }

    lastScrollTop = scrollTop;
});
