const mainImage = document.querySelector("#main-product-img");
const thumbnails = document.querySelectorAll(".thumb-btn");

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        const thumbImg = thumb.querySelector("img");
        mainImage.src = thumbImg.src;
    });
});

const cartDrawer = document.querySelector("#cart-drawer");
const cartOpenBtn = document.querySelector("#cart-toggle");
const cartCloseBtn = document.querySelector("#cart-close");

cartOpenBtn.addEventListener("click", () => {
    cartDrawer.classList.toggle("is-open");
});

cartCloseBtn.addEventListener("click", () => {
    cartDrawer.classList.remove("is-open");
});