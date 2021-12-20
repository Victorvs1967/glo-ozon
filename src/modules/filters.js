import { toArray } from './utils';

export const searchFilter = (goods, value) => {  
  return toArray(goods).filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
};

export const catalogFilter = (goods, value) => {  
  return toArray(goods).filter(item => value !== 'Все' ? item.category.includes(value) : true);
};

export const priceFilter = (goods, min, max) => {  
  return toArray(goods).filter(item => {
    if (min === '' && max === '') {
      return item;
    } else if (min !== '' && max !== '') {
      return item.price > +min && item.price < +max;
    } else if (min !== '' && max === '') {
      return item.price > +min;
    } else if (min === '' && max !== '') {
      return item.price < +max;
    }    
  });
};

export const hotSaleFilter = (goods, value) => {
  return toArray(goods).filter(item => {
    return value ? item.sale : item;
  });
};