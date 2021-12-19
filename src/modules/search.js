import getData from './getData';
import renderGoods from './renderGoods';
import { searchFilter } from './filters';

const search = () => {
  const inputSearch = document.querySelector('.search-wrapper_input');
  inputSearch.addEventListener('input', event => {
    const value = event.target.value;
    getData(value).then(data => {
      renderGoods(searchFilter(data, value));
    });
  });
};

export default search;