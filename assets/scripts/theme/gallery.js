import { galleryFeaturedImage, galleryImagePath, galleryImagesExtension, galleryImagesList, galleryNavNext, galleryNavPrev, galleryThumbs, getFeaturedImageByElement, getImageIndex, transitionDuration, transitionProperties } from "../variables.js"

const showNavButtons = () => {
    galleryNavPrev().style.display = galleryImagesList.indexOf(getFeaturedImageByElement()) === 0 ? "none" : "";
    galleryNavNext().style.display = galleryImagesList.indexOf(getFeaturedImageByElement()) === galleryImagesList.length - 1 ? "none" : "";
}

const setNewImage = (img) => {
    let activeImage = `${galleryImagePath}/${img}.${galleryImagesExtension}`
    let thumbIndex = galleryImagesList.indexOf(img);

    galleryFeaturedImage().style.transition = transitionProperties();
    galleryFeaturedImage().style.opacity = 0;
    galleryNavPrev().style.opacity = 0;
    galleryNavNext().style.opacity = 0;

    galleryThumbs().forEach((thumb, index) => {
        thumb.classList.remove("active");
        if (index === thumbIndex) {
            thumb.classList.add("active");
        }
    })

    setTimeout(() => {
        galleryFeaturedImage().src = activeImage;
        galleryFeaturedImage().style.opacity = "";
        showNavButtons();
        galleryNavPrev().style.opacity = "";
        galleryNavNext().style.opacity = "";
    }, transitionDuration);
}

const navThroughImages = (event) => {
    let newIndex = getImageIndex();
    let navType = event.target.parentNode.classList[1];

    switch (navType) {
        case "prev":
            newIndex -= 1;
            break;

        case "next":
            newIndex += 1;
            break;
    }

    setNewImage(galleryImagesList[newIndex]);
}

export const Gallery = () => {
    showNavButtons();
    // console.log(galleryNavPrev(), galleryNavNext());

    galleryThumbs().forEach((thumb, index, arr) => {
        thumb.addEventListener("click", () => {
            arr.forEach((element) => {
                element.classList.remove("active");
            })

            thumb.classList.add("active");

            setNewImage(galleryImagesList[index]);
        })
    })

    galleryNavPrev().addEventListener("click", navThroughImages);
    galleryNavNext().addEventListener("click", navThroughImages);
}