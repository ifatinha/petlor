export function activeLinksMobile() {
    const links = document.querySelectorAll("#navbarMobile a");
    const modal = document.querySelector("#modal-bugger");
    const openButton = document.querySelector("#menu-bugger");

    links.forEach((link) => {
        link.addEventListener("click", () => {
            modal.classList.remove("open-menu-modal");
            openButton.classList.remove("menu-open");
        })
    })
}