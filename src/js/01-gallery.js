// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery')
const markupArray = galleryItems.map(({ preview, original, description }) =>
{
   
   return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
       src="${preview}"
      alt="${description}"
    />
  </a>
</li>`})
const markup = markupArray.join('')
gallery.insertAdjacentHTML("beforeend", markup)

let galleryLightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250 });
gallery.addEventListener('click', galleryClick)
function galleryClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }

}