import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    (galleryItem) =>
      `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`
  )
    .join("");
  
gallery.insertAdjacentHTML('beforeend', markupGallery);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: "250" });