export const initializeMenu = () => {
    const openButton = document.querySelector("#menu-bugger");
    const closeButton = document.querySelector("#close-menu");
    const modalBugger = document.querySelector("#modal-bugger");

    if (!openButton || !closeButton || !modalBugger) return;

    const updateAriaAtributes = (isOpen) => {
        openButton.setAttribute("aria-expanded", true);
        openButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    };

    const toggleClass = (element, classe) => {
        element.classList.toggle(classe);
    }

    const toggle = (event) => {
        if (event?.type === "touchstart") event.preventDefault();
        toggleClass(openButton, "menu-open");

        const isOpen = openButton.classList.contains("menu-open");
        updateAriaAtributes(isOpen);

        toggleClass(modalBugger, "open-menu-modal");
    }

    openButton.addEventListener("click", toggle);
    openButton.addEventListener("touchstart", toggle);
    closeButton.addEventListener("click", toggle);
    closeButton.addEventListener("touchstart", toggle);
}