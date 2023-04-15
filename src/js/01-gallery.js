// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');

//building html structure

galleryItems.forEach(item => {
  let link = document.createElement('a');
  link.classList.add('gallery__item');
  link.href = item.original;

  let img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = item.preview;
  img.alt = item.description;

  link.append(img);
  gallery.append(link);
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

//Click event listener

gallery.addEventListener('click', event => {
  //finding big image url
  event.preventDefault();

  if (event.target.classList.value !== 'gallery__image') {
    return;
  }

  let findGalleryItemByPreview = galleryItems.find(
    el => el.preview === event.target.src
  );

  //modal close from key Escape

  const close = document.addEventListener(
    'keydown',
    event => {
      if (event.key === 'Escape') {
        instance.close();
        document.removeEventListener(Object, close);
      }
    },
    { once: true }
  );
});
