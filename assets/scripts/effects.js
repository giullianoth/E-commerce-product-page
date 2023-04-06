import { transitionDuration, transitionGap, transitionProperties } from "./variables.js";

const fadeIn = (element, displayElement = "block") => {

    element.style.transition = transitionProperties();
    element.style.opacity = 0;
    element.style.display = displayElement;

    setTimeout(() => {
        element.style.opacity = "";
        setTimeout(() => {
            element.style.transition = "";
        }, transitionGap);
    }, transitionDuration);
}

const fadeInToDown = (element, setDisplay = false, displayElement = "block") => {

    element.style.display = setDisplay ? displayElement : "";

    element.style.transition = transitionProperties();
    element.style.opacity = 0;
    element.style.transform = "translateY(-20px)";

    setTimeout(() => {
        element.style.opacity = "";
        element.style.transform = "";

        setTimeout(() => {
            element.style.transition = "";
        }, transitionDuration);
    }, transitionGap);
}

const fadeOut = (element, removeElement = false) => {

    element.style.transition = transitionProperties();
    element.style.opacity = 0;

    setTimeout(() => {
        element.style.display = "";
        element.style.opacity = "";
        element.style.transition = "";
        removeElement && element.remove();
    }, transitionDuration);
}

const fadeOutToUp = (element) => {
    element.style.transition = transitionProperties();
    element.style.opacity = 0;
    element.style.transform = "translateY(-20px)";

    setTimeout(() => {
        element.style.transition = "";
        element.style.transform = "";
        element.style.opacity = "";
        element.style.display = "";
    }, transitionDuration);
}

const slideDown = (element, displayElement = "block") => {
    element.style.transition = transitionProperties();
    element.style.display = displayElement;
    let maxHeight = element.offsetHeight;

    element.style.overflow = "hidden";
    element.style.maxHeight = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;

    setTimeout(() => {
        element.style.maxHeight = `${maxHeight}px`;
        element.style.paddingTop = "";
        element.style.paddingBottom = "";

        setTimeout(() => {
            element.style.transition = "";
        }, transitionDuration);
    }, transitionGap);
}

const slideUp = (element) => {
    element.style.transition = transitionProperties();
    element.style.overflow = "hidden";
    element.style.maxHeight = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;

    setTimeout(() => {
        element.style.display = "";
        element.style.transition = "";
        element.style.maxHeight = "";
        element.style.paddingTop = "";
        element.style.paddingBottom = "";
        element.style.overflow = "";
    }, transitionDuration);
}

export { fadeIn, fadeInToDown, fadeOut, fadeOutToUp, slideDown, slideUp };