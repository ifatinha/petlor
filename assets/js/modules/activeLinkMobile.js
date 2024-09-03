import { updateAriaAtributes } from "./updateLinks.js";

export function activeLinksMobile() {
    const links = document.querySelectorAll("#navbarMobile a");
    const modal = document.querySelector("#modal-bugger");
    const openButton = document.querySelector("#menu-bugger");

    const closeMenu = () => {
        modal.classList.remove("open-menu-modal");
        openButton.classList.remove("menu-open");
        updateAriaAtributes(false, openButton);
    }

    links.forEach((link) => {
        link.addEventListener("click", closeMenu)
    })
}