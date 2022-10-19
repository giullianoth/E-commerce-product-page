const timeTransition = 100;

const fadeIn = (element, elementDisplay = "block") => {
    element.style.display = elementDisplay;

    setTimeout(() => {
        element.style.opacity = "1";
    }, timeTransition);
}

const fadeOut = (element) => {
    element.style.opacity = "0";

    setTimeout(() => {
        element.style.display = "none";
    }, timeTransition);
}

export { fadeIn, fadeOut };