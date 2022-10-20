const gallery = document.querySelector(".j_gallery");
const featuredImage = gallery.querySelector(".featured img");
const thumbsImage = gallery.querySelectorAll(".thumbs .thumb");
const imagePath = "images";

let featuredImageSrc = "image-product-";

const imageGallery = () => {
    
    thumbsImage.forEach((item, index, arr) => {

        let imgNumber = index + 1;

        item.addEventListener("click", () => {

            arr.forEach((i) => {
                i.classList.remove("active");
            })

            item.classList.add("active");
            featuredImage.style.opacity = "0";

            setTimeout(() => {
                featuredImage.src = `${imagePath}/${featuredImageSrc}${imgNumber}.jpg`;
                featuredImage.style.opacity = "1";
            }, 300);
        })
    })
}

export default imageGallery;