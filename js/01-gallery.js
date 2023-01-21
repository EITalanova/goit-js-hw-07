import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src='${galleryItem.preview}'
      data-source='${galleryItem.original}'
      alt='${galleryItem.description}'
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markupGallery);

function handlerOpenModal(evt) {
  evt.preventDefault();
  window.addEventListener("keydown", handlerCloseModal);
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src=${evt.target.dataset.source} width="800" height="600">
    </div>
`);
  instance.show();

  function handlerCloseModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

gallery.addEventListener("click", handlerOpenModal);
