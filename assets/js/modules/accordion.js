export function openAccordion() {
    const dts = document.querySelectorAll(".faq__accordion dt");

    const removeActiveClasses = () => {
        dts.forEach((dt) => {
            const button = dt.firstElementChild;
            const panel = dt.nextElementSibling;

            button.classList.remove("accordion-active");
            panel.style.maxHeight = null;
        })
    }

    const toggleAccordion = (dt) => {
        const button = dt.firstElementChild;
        const panel = dt.nextElementSibling;

        if (!button.classList.contains("accordion-active")) {
            removeActiveClasses();
            button.classList.toggle("accordion-active");
            panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`
        } else {
            button.classList.remove("accordion-active");
            panel.style.maxHeight = null;
        }

    }

    if (dts.length > 0) {
        toggleAccordion(dts[0]);
    }

    dts.forEach((dt) => {
        dt.addEventListener("click", () => toggleAccordion(dt));
    });

}