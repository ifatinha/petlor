/** open menu mobile */
const menuMobile = document.querySelector(".menu-mobile");
const sidenav = document.querySelector(".overlay");

function openMenu(ev) {
    ev.currentTarget.classList.toggle("change");

    if (sidenav.style.height === "75%") {
        sidenav.style.height = "0%";
    } else {
        sidenav.style.height = "75%";
    }
}

menuMobile.addEventListener("click", openMenu);