import renderCart from './renderCart';
import postData from './postData';

const cart = () => {
  const cartBtn = document.getElementById('cart'),
        cartCounter = document.querySelector('.counter'),
        cartModal = document.querySelector('.cart'),
        cartClose = document.querySelector('.cart-close'),
        goodsWraper = document.querySelector('.goods'),
        cartTotal = document.querySelector('.cart-total > span'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartSender = document.querySelector('.cart-confirm');

  const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];
  cartCounter.textContent = cart.length;

  const openCart = () => {
    const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];
    cartModal.style.display = 'flex';
    renderCart(cart);
    cartTotal.textContent = cart.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
  };

  const closeCart = () => cartModal.style.display = '';

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);

  cartWrapper.addEventListener('click', event => {
    if (event.target.classList.contains('btn-danger')) {
      const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];
      const key = event.target.closest('.card').dataset.key;
      const index = cart.findIndex(item => item.id === +key);
      cart.splice(index, 1);
      sessionStorage.setItem('cart', JSON.stringify(cart));
      cartCounter.textContent = cart.length;
      openCart();
    }
  });

  goodsWraper.addEventListener('click', event => {
    if (event.target.classList.contains('btn-primary')) {
      const goods = JSON.parse(sessionStorage.getItem('goods'));
      const key = event.target.closest('.card').dataset.key;
      const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];
      sessionStorage.setItem('cart', JSON.stringify([goods.find(item => item.id === +key), ...cart]));
      cartCounter.textContent = +cartCounter.textContent + 1;
    }
  });

  cartSender.addEventListener('click', () => {
    const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];
    postData(cart).then(() => {
      sessionStorage.removeItem('cart');
      renderCart([]);
      cartTotal.textContent = 0;
      cartCounter.textContent = 0;
    });
  }); 

};

export default cart;