import { fadeIn, fadeOut } from "../effects.js";
import { desactivateGalery, galleryFeaturedImage, galleryImagePath, galleryImagesExtension, galleryLightboxArea, galleryThumbs, getFeaturedImageByElement, getImageIndex, resetGallery, transitionDuration } from "../variables.js"
import { Gallery } from "./gallery.js";

const createLightbox = (img) => {
    let lightbox = document.createElement("section");
    lightbox.className = "sneakers_lightbox j_lightbox";

    lightbox.innerHTML = `
        <div class="sneakers_lightbox_content">
        <div class="sneakers_lightbox_content_gallery j_gallery">
        <div class="sneakers_lightbox_content_gallery_featured j_gallery_featured">
        <div class="sneakers_lightbox_content_gallery_featured_navigation">
        <span class="nav prev j_nav"><i class="fa-solid fa-angle-left"></i></span>
        <span class="nav next j_nav"><i class="fa-solid fa-angle-right"></i></span>
        </div>
        <img src="${img}" alt="Fall Limited Edition Sneakers" class="j_featured">
        </div>

        <div class="sneakers_lightbox_content_gallery_thumbs">
        <div class="thumb j_thumb"><img src="assets/images/image-product-1-thumbnail.jpg" alt="Thumbnail"></div>
        <div class="thumb j_thumb"><img src="assets/images/image-product-2-thumbnail.jpg" alt="Thumbnail"></div>
        <div class="thumb j_thumb"><img src="assets/images/image-product-3-thumbnail.jpg" alt="Thumbnail"></div>
        <div class="thumb j_thumb"><img src="assets/images/image-product-4-thumbnail.jpg" alt="Thumbnail"></div>
        </div>
        </div>
        </div>
    `;
    
    return lightbox;
}

export const GalleryLightbox = (img) => {
    !galleryLightboxArea() && galleryFeaturedImage().addEventListener("click", () => {
        desactivateGalery();

        let lightbox = createLightbox(img);

        document.body.prepend(lightbox);
        fadeIn(lightbox, "flex");

        galleryThumbs()[getImageIndex()].classList.add("active");

        setTimeout(() => {
            Gallery();

            galleryLightboxArea().addEventListener("click", (event) => {
                if (event.target.classList.contains("j_lightbox")) {
                    fadeOut(galleryLightboxArea(), true);
                    resetGallery();

                    let imageOnClose = `${galleryImagePath}/${getFeaturedImageByElement()}.${galleryImagesExtension}`;
                    
                    setTimeout(() => {
                        galleryFeaturedImage().src = imageOnClose;
                        galleryThumbs().forEach((thumb) => thumb.classList.remove("active"));
                        galleryThumbs()[getImageIndex()].classList.add("active");
                    }, transitionDuration);
                }
            })
        }, transitionDuration);
    })
}