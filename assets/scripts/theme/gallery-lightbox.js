import { fadeIn, fadeOut } from "../effects.js";
import { desactivateGalery, galleryArea, galleryFeaturedImage, galleryLightboxArea, galleryNavNext, galleryNavPrev, galleryThumbs, getImageIndex, resetGallery, transitionDuration } from "../variables.js"
import { Gallery } from "./gallery.js";

const createLightbox = () => {
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
        <img src="assets/images/image-product-1.jpg" alt="Fall Limited Edition Sneakers" class="j_featured">
        </div>

        <div class="sneakers_lightbox_content_gallery_thumbs">
        <div class="thumb j_thumb active"><img src="assets/images/image-product-1-thumbnail.jpg" alt="Thumbnail"></div>
        <div class="thumb j_thumb"><img src="assets/images/image-product-2-thumbnail.jpg" alt="Thumbnail"></div>
        <div class="thumb j_thumb"><img src="assets/images/image-product-3-thumbnail.jpg" alt="Thumbnail"></div>
        <div class="thumb j_thumb"><img src="assets/images/image-product-4-thumbnail.jpg" alt="Thumbnail"></div>
        </div>
        </div>
        </div>
    `;

    return lightbox;
}

export const GalleryLightbox = () => {
    !galleryLightboxArea() && galleryFeaturedImage().addEventListener("click", () => {
        desactivateGalery();

        let lightbox = createLightbox();

        document.body.prepend(lightbox);
        fadeIn(lightbox, "flex");

        setTimeout(() => {
            Gallery();

            galleryLightboxArea().addEventListener("click", (event) => {
                if (event.target.classList.contains("j_lightbox")) {
                    fadeOut(galleryLightboxArea(), true);
                    resetGallery();
                }
            })
        }, transitionDuration);
    })
}