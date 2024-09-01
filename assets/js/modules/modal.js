function toggleModal(element) {
    element.classList.toggle("open-modal");
}

export function setupModalToggle(button, modal) {
    if (button && modal) {

        button.addEventListener("click", () => toggleModal(modal));

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("open-modal");
                location.reload();
            }
        });
    }
}
