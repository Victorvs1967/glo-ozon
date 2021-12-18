import getData from './getData';

const cart = () => {
  const cartBtn = document.getElementById('cart'),
  cartModal = document.querySelector('.cart'),
  cartClose = document.querySelector('.cart-close');

  const openCart = () => cartModal.style.display = 'flex';
  const closeCart = () => cartModal.style.display = '';

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);

};

export default cart;