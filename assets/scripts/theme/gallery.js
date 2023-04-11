import { fadeIn, fadeOut } from "../effects.js";
import { galleryFeaturedImage, galleryFeaturedImageArea, galleryImagePath, galleryImagesExtension, galleryImagesList, galleryNavNext, galleryNavPrev, galleryThumbs, getFeaturedImageByElement, getImageIndex, transitionDuration, } from "../variables.js"
import { GalleryLightbox } from "./gallery-lightbox.js";

const showNavButtons = () => {
    galleryNavPrev().style.display = galleryImagesList.indexOf(getFeaturedImageByElement()) === 0 ? "none" : "";
    galleryNavNext().style.display = galleryImagesList.indexOf(getFeaturedImageByElement()) === galleryImagesList.length - 1 ? "none" : "";
}

const setNewImage = (img) => {
    let activeImage = `${galleryImagePath}/${img}.${galleryImagesExtension}`
    let thumbIndex = galleryImagesList.indexOf(img);

    let newFeaturedImage = document.createElement("img");
    newFeaturedImage.className = "j_featured";
    newFeaturedImage.setAttribute("alt", "Fall Limited Edition Sneakers");
    newFeaturedImage.setAttribute("title", "Click to view picture");
    newFeaturedImage.src = activeImage;
    
    fadeOut(galleryFeaturedImage(), true);
    galleryNavPrev().style.opacity = 0;
    galleryNavNext().style.opacity = 0;

    galleryThumbs().forEach((thumb, index) => {
        thumb.classList.remove("active");
        if (index === thumbIndex) {
            thumb.classList.add("active");
        }
    })

    setTimeout(() => {
        galleryFeaturedImageArea().append(newFeaturedImage);
        fadeIn(newFeaturedImage);
        showNavButtons();
        galleryNavPrev().style.opacity = "";
        galleryNavNext().style.opacity = "";
        GalleryLightbox(galleryFeaturedImage().src);
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
    GalleryLightbox(galleryFeaturedImage().src);

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