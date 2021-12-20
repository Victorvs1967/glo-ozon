const postData = cart => {
  return fetch('https://g-ozon-cart-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {  
    method: 'POST',
    body: JSON.stringify(cart),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(res => res.json());
};

export default postData;