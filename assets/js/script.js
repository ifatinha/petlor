/** open menu mobile */
const menuMobile = document.querySelector(".menu-mobile");

function openMenu(ev) {
    ev.currentTarget.classList.toggle("change");
}

menuMobile.addEventListener("click", openMenu);