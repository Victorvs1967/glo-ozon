const cartWrapper = document.querySelector('.cart-wrapper');

const renderCart = cart => {
  if (cart.length != 0) {
    cartWrapper.innerHTML = '';
    cart.forEach(item => {
      const { id, title, img, price, sale } = item;
      cartWrapper.insertAdjacentHTML('beforeend', `
        <div class="card" data-key="${id}">
          ${sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
          <div class="card-img-wrapper">
            <span class="card-img-top"
              style="background-image: url('${img}')"></span>
          </div>
          <div class="card-body justify-content-between">
            <div class="card-price">${price} ₽</div>
            <h5 class="card-title">${title}</h5>
            <button class="btn btn-danger">Из карзины</button>
          </div>
        </div>
      `);
    });
  } else {
    cartWrapper.innerHTML = `<div id="cart-empty">Ваша корзина пока пуста</div>`;
  }

};

export default renderCart;