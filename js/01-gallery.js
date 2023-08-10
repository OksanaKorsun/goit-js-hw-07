import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// console.log(basicLightbox);
const gallery = document.querySelector(".gallery");
console.log(gallery);
gallery.addEventListener("click", handlerClick);
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}
gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function handlerClick(evt) {
  evt.preventDefault();
  // if (!event.target.classList.contains('gallery__image'))
  if (evt.target === evt.currentTarget) {
    return;
  }
  // const currentImg = evt.target.closest(".gallery__item");
  // const source = currentImg.dataset.source;
  // console.log(source);
  // const image = galleryItems.find(
  //   ({ original }) => original === source
  // );
  const instance = basicLightbox.create(
    `<div class="modal"><img width="1080" src="${evt.target.dataset.source}"/>
</div>`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEsc);
      },
    }
  );
  instance.show();
  function onEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
