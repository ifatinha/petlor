export function activeStick() {
    const navbar = document.querySelector(".header__navbar");
    const stick = navbar.offsetTop;

    const toggleStickMenu = () => {
        if (window.scrollY >= stick) {
            navbar.classList.add("stick-menu");
        } else {
            navbar.classList.remove("stick-menu");
        }
    }

    window.addEventListener("scroll", toggleStickMenu);
}