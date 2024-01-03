/** open menu mobile */
const menuMobile = document.querySelector(".menu-mobile");

function openMenu(ev) {
    ev.currentTarget.classList.toggle("change");

    const sidenav = document.querySelector(".overlay");

    if (sidenav.style.display === "none") {
        sidenav.style.display = "block";
    } else {
        sidenav.style.display = "none";
    }
}

menuMobile.addEventListener("click", openMenu);