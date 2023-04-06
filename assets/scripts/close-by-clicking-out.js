import { fadeOutToUp } from "./effects.js";
import { elementsCloseClickingOut, isVisible } from "./variables.js"

export const CloseByClickingOut = () => {
    document.body.addEventListener("click", (event) => {
        elementsCloseClickingOut().forEach((element) => {
            if (isVisible(element) && element.classList.contains("active") && element.parentNode !== event.target.parentNode) {
                element.classList.remove("active");
                fadeOutToUp(element);
            }
        })
    })
}