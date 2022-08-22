import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListItem = document.querySelector('.gallery');
const createList = createListItem(galleryItems);

function createListItem(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="" title="${description}"/>
</a>`
    )
    .join('');
}

galleryListItem.insertAdjacentHTML('beforeend', createList);
galleryListItem.addEventListener('click', largePicture);

let gallery = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionDelay: 250,
});

function largePicture(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) return;

  gallery.on('show.simplelightbox');
}
