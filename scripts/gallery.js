import { fadeIn, fadeOut } from "./effects.js";

const gallery = document.querySelector(".j_gallery");
const featuredImage = gallery.querySelector(".featured img");
const thumbsImage = gallery.querySelectorAll(".thumbs .thumb");
const btnNav = document.querySelector(".j_navigation");
const btnNavNext = btnNav.querySelector(".nav.next");
const btnNavPrev = btnNav.querySelector(".nav.prev");

const imagePath = "images";
let featuredImageSrc = "image-product-";

const showImage = (imgItem, imgArr, featured, image) => {
    imgArr.forEach((item) => {
        item.classList.remove("active");
    })

    imgItem.classList.add("active");
    featured.style.opacity = "0";

    setTimeout(() => {
        featured.src = image;
        featured.style.opacity = "";
    }, 300);
}

const imageNav = (imgItem, imgIndex, imgArr, featured) => {
    let imgNumber = imgIndex + 1;
    let image = `${imagePath}/${featuredImageSrc}${imgNumber}.jpg`;

    imgItem.addEventListener("click", () => {
        showImage(imgItem, imgArr, featured, image);
    })
}

const checkNavBtn = (list, btn1, btn2) => {

    btn1.style.opacity = "";
    btn2.style.opacity = "";

    if (list[0].classList.contains("active")) {
        btn1.style.opacity = "0";
    }

    if (list[list.length - 1].classList.contains("active")) {
        btn2.style.opacity = "0";
    }
}

const navWithBtn = (btn, images, image) => {

    try {
        images.forEach((item, index, arr) => {

            let checkLength;
            let imgIndex;
            let imgNumber;

            if (btn.classList.contains("next")) {
                checkLength = index < images.length - 1;
                imgIndex = index + 1;
                imgNumber = index + 2
            } else if (btn.classList.contains("prev")) {
                checkLength = index > 0;
                imgIndex = index - 1;
                imgNumber = index;
            }

            let featured = `${imagePath}/${featuredImageSrc}${imgNumber}.jpg`;

            if (item.classList.contains("active") && checkLength) {
                showImage(images[imgIndex], arr, image, featured);
                throw new Exception();
            }
        })
    } catch (e) { }
}

const lightboxGallery = (galleryElement) => {
    let lightbox = document.createElement("section");
    let closeBtn = document.createElement("div");
    let closeIcon = document.createElement("i");
    let thumbsImageLightbox = galleryElement.querySelectorAll(".thumbs .thumb");
    let featuredImageLightbox = galleryElement.querySelector(".featured img");

    let lightboxPrev = galleryElement.querySelector(".j_navigation .prev");
    let lightboxNext = galleryElement.querySelector(".j_navigation .next");

    lightbox.className = "main_lightbox";
    galleryElement.className = "main_lightbox_gallery";
    closeBtn.className = "close";
    closeIcon.className = "fa-solid fa-xmark";

    closeBtn.append(closeIcon);
    galleryElement.prepend(closeBtn);
    lightbox.append(galleryElement);

    document.querySelector("body").prepend(lightbox);
    fadeIn(lightbox, "flex");

    thumbsImageLightbox.forEach((item, index, arr) => {
        imageNav(item, index, arr, featuredImageLightbox);
        checkNavBtn(thumbsImageLightbox, lightboxPrev, lightboxNext);
    })

    checkNavBtn(thumbsImageLightbox, lightboxPrev, lightboxNext);

    lightboxNext.addEventListener("click", () => {
        navWithBtn(lightboxNext, thumbsImageLightbox, featuredImageLightbox);
        checkNavBtn(thumbsImageLightbox, lightboxPrev, lightboxNext);
    })

    lightboxPrev.addEventListener("click", () => {
        navWithBtn(lightboxPrev, thumbsImageLightbox, featuredImageLightbox);
        checkNavBtn(thumbsImageLightbox, lightboxPrev, lightboxNext);
    })

    closeBtn.addEventListener("click", () => {

        thumbsImageLightbox.forEach((item, index) => {
            if (item.classList.contains("active")) {
                showImage(thumbsImage[index], thumbsImage, featuredImage, featuredImageLightbox.src);
            }
        })

        fadeOut(lightbox);
        setTimeout(() => {
            lightbox.remove();
        }, 300);
    })
}

const imageGallery = () => {

    thumbsImage.forEach((item, index, arr) => {
        imageNav(item, index, arr, featuredImage);
    })

    featuredImage.addEventListener("click", () => {
        lightboxGallery(gallery.cloneNode(true));
    });

    checkNavBtn(thumbsImage, btnNavPrev, btnNavNext);

    btnNavNext.addEventListener("click", () => {
        navWithBtn(btnNavNext, thumbsImage, featuredImage);
        checkNavBtn(thumbsImage, btnNavPrev, btnNavNext);
    })

    btnNavPrev.addEventListener("click", () => {
        navWithBtn(btnNavPrev, thumbsImage, featuredImage);
        checkNavBtn(thumbsImage, btnNavPrev, btnNavNext);
    })
}

export default imageGallery;