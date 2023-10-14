import { galleryItems } from './gallery-items.js';
//Change code below this line
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






//


// const qwe = document.querySelector('document');
// qwe.addEventListener('click', ddd);
// function ddd(ev) {
//     console.dir(ev);
// }

// function checkBrackets(str) {
//     const stack = [];
//     const obj = {
//         "(": ")",
//         "{": "}",
//         "[": "]",
//     };

//     for (let i = 0; i < str.length; i++) {
//         const bracket = str[i];
//         if (bracket === "(" || bracket === "{" || bracket === "[") {
//             stack.push(bracket);
//         }
//         if (bracket === "}" || bracket === ")" || bracket === "]") {
//             const lastEl = stack.pop();
//             if (bracket !== obj[lastEl]) {
//                 return false;
//             }
//         }
//     }
//     if (stack.length) return false;
//     return true;
// }