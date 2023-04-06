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

const fadeOut = (element) => {

    element.style.transition = transitionProperties();
    element.style.opacity = 0;

    setTimeout(() => {
        element.style.display = "";
        element.style.opacity = "";
        element.style.transition = "";
    }, transitionDuration);
}

const fadeOutToUp = (element) => {
    element.style.transition = transitionProperties();
    element.style.opacity = 0;
    element.style.transform = "translateY(-20px)";

    setTimeout(() => {
        element.style.transition = "";
        element.style.transform = "";
        element.style.display = "";
    }, transitionDuration);
}

export { fadeIn, fadeInToDown, fadeOut, fadeOutToUp };