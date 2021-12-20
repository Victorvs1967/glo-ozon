import getData from './getData';
import renderGoods from './renderGoods';
import { priceFilter, hotSaleFilter } from './filters';

const filter = () => {
  const minInput = document.getElementById('min'),
        maxInput = document.getElementById('max'),
        checkInput = document.getElementById('discount-checkbox'),
        checkmark = document.querySelector('.filter-check_checkmark');

  minInput.addEventListener('input', () => {
    min = minInput.value;
    max = maxInput.value;
    getData().then(data => renderGoods(priceFilter(hotSaleFilter(data, checkInput.checked), min, max)));
  });

  maxInput.addEventListener('input', () => {
    min = minInput.value;
    max = maxInput.value;
    getData().then(data => renderGoods(priceFilter(hotSaleFilter(data, checkInput.checked), min, max)));
  });

  checkInput.addEventListener('change', () => {
    min = minInput.value;
    max = maxInput.value;
    checkInput.checked ? checkmark.classList.add('checked') : checkmark.classList.remove('checked');
    getData().then(data => renderGoods(priceFilter(hotSaleFilter(data, checkInput.checked), min, max)));
  });

};

export default filter;