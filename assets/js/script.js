/** open menu mobile */
const menuMobile = document.querySelector(".menu-mobile");
const sidenav = document.querySelector(".overlay");

function openMenu(ev) {
    ev.currentTarget.classList.toggle("change");

    if (sidenav.style.maxHeight) {
        sidenav.style.maxHeight = null;
    } else {
        sidenav.style.maxHeight = sidenav.scrollHeight + "px";
    }
}

menuMobile.addEventListener("click", openMenu);