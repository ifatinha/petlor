function toggleModal(element) {
    element.classList.toggle("open-modal");
}

export function setupModalToggle(button, modal) {
    if (button && modal) {
        button.addEventListener("click", () => toggleModal(modal));
    }
}