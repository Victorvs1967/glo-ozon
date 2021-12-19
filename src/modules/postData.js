const postData = () => {
  return fetch('https://g-ozon-default-rtdb.europe-west1.firebasedatabase.app/goods.json', {
    method: 'POST',
    body: JSON.stringify({
      title: "iMac 27' 5k'",
      price: 3000,
      sale: true,
      img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
      category: "Computers"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(res => res.json());
};

export default postData;