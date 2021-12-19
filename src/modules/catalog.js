import getData from './getData';
import renderGoods from './renderGoods';
import { catalogFilter } from './filters';

const catalog = () => {
  const catalogBtn = document.querySelector('.catalog-button > button'),
        catalogModal = document.querySelector('.catalog'),
        catalogItems = document.querySelectorAll('.catalog-list li');

  let isOpen = false;

  catalogBtn.addEventListener('click', () => {
    toggle();
    catalogItems.forEach(item => {
      item.addEventListener('click' , () => {
        getData().then(data => {
          renderGoods(catalogFilter(data, item.textContent));
        });
        catalogModal.style.display = '';
        isOpen = false;
      });
    });
  });

  const toggle = () => {
    isOpen = !isOpen;
    catalogModal.style.display = isOpen ? 'block' : '';
  };
};

export default catalog;