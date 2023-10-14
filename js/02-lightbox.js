import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryList = galleryItems.map(({ preview, original, description }) =>
    `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`).join('');

gallery.insertAdjacentHTML('beforeend', galleryList);

gallery.addEventListener('click', (event) => {
    event.preventDefault()
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    let lightBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 })
})


