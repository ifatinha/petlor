import { setupModalToggle } from "./modal.js";

export function openVideo() {
    const btnOpenModal = document.querySelector("#faqModalOpen");
    const btnCloseModal = document.querySelector("#faqModalClose");
    const faqModal = document.querySelector("#faqModal");
    const video = document.querySelector("#faqVideo");

    setupModalToggle(btnOpenModal, faqModal);
    setupModalToggle(btnCloseModal, faqModal);

    console.log(video);

}