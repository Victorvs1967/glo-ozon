/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\n\n\n\n\n\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://glo-ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\n\n\nconst cart = () => {\n  const cartBtn = document.getElementById('cart'),\n        cartCounter = document.querySelector('.counter'),\n        cartModal = document.querySelector('.cart'),\n        cartClose = document.querySelector('.cart-close'),\n        goodsWraper = document.querySelector('.goods'),\n        cartTotal = document.querySelector('.cart-total > span'),\n        cartWrapper = document.querySelector('.cart-wrapper'),\n        cartSender = document.querySelector('.cart-confirm');\n\n  const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];\n  cartCounter.textContent = cart.length;\n\n  const openCart = () => {\n    const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];\n    cartModal.style.display = 'flex';\n    (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\n    cartTotal.textContent = cart.reduce((sum, item) => {\n      return sum + item.price;\n    }, 0);\n  };\n\n  const closeCart = () => cartModal.style.display = '';\n\n  cartBtn.addEventListener('click', openCart);\n  cartClose.addEventListener('click', closeCart);\n\n  cartWrapper.addEventListener('click', event => {\n    if (event.target.classList.contains('btn-danger')) {\n      const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];\n      const key = event.target.closest('.card').dataset.key;\n      const index = cart.findIndex(item => item.id === +key);\n      cart.splice(index, 1);\n      sessionStorage.setItem('cart', JSON.stringify(cart));\n      cartCounter.textContent = cart.length;\n      openCart();\n    }\n  });\n\n  goodsWraper.addEventListener('click', event => {\n    if (event.target.classList.contains('btn-primary')) {\n      const goods = JSON.parse(sessionStorage.getItem('goods'));\n      const key = event.target.closest('.card').dataset.key;\n      const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];\n      sessionStorage.setItem('cart', JSON.stringify([goods.find(item => item.id === +key), ...cart]));\n      cartCounter.textContent = +cartCounter.textContent + 1;\n    }\n  });\n\n  cartSender.addEventListener('click', () => {\n    const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];\n    (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\n      sessionStorage.removeItem('cart');\n      (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\n      cartTotal.textContent = 0;\n      cartCounter.textContent = 0;\n    });\n  }); \n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://glo-ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst catalog = () => {\n  const catalogBtn = document.querySelector('.catalog-button > button'),\n        catalogModal = document.querySelector('.catalog'),\n        catalogItems = document.querySelectorAll('.catalog-list li');\n\n  let isOpen = false;\n\n  catalogBtn.addEventListener('click', () => {\n    toggle();\n    catalogItems.forEach(item => {\n      item.addEventListener('click' , () => {\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n          (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.catalogFilter)(data, item.textContent));\n        });\n        catalogModal.style.display = '';\n        isOpen = false;\n      });\n    });\n  });\n\n  const toggle = () => {\n    isOpen = !isOpen;\n    catalogModal.style.display = isOpen ? 'block' : '';\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://glo-ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst filter = () => {\n  const minInput = document.getElementById('min'),\n        maxInput = document.getElementById('max'),\n        checkInput = document.getElementById('discount-checkbox'),\n        checkmark = document.querySelector('.filter-check_checkmark');\n\n  minInput.addEventListener('input', () => {\n    min = minInput.value;\n    max = maxInput.value;\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkInput.checked), min, max)));\n  });\n\n  maxInput.addEventListener('input', () => {\n    min = minInput.value;\n    max = maxInput.value;\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkInput.checked), min, max)));\n  });\n\n  checkInput.addEventListener('change', () => {\n    min = minInput.value;\n    max = maxInput.value;\n    checkInput.checked ? checkmark.classList.add('checked') : checkmark.classList.remove('checked');\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkInput.checked), min, max)));\n  });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://glo-ozon/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"catalogFilter\": () => (/* binding */ catalogFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n\n\nconst searchFilter = (goods, value) => {  \n  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toArray)(goods).filter(item => item.title.toLowerCase().includes(value.toLowerCase()));\n};\n\nconst catalogFilter = (goods, value) => {  \n  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toArray)(goods).filter(item => value !== 'Все' ? item.category.includes(value) : true);\n};\n\nconst priceFilter = (goods, min, max) => {  \n  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toArray)(goods).filter(item => {\n    if (min === '' && max === '') {\n      return item;\n    } else if (min !== '' && max !== '') {\n      return item.price > +min && item.price < +max;\n    } else if (min !== '' && max === '') {\n      return item.price > +min;\n    } else if (min === '' && max !== '') {\n      return item.price < +max;\n    }    \n  });\n};\n\nconst hotSaleFilter = (goods, value) => {\n  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toArray)(goods).filter(item => {\n    return value ? item.sale : item;\n  });\n};\n\n//# sourceURL=webpack://glo-ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = value => {\n  return fetch(`https://g-ozon-default-rtdb.europe-west1.firebasedatabase.app/goods.json`)\n    .then(response => response.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://glo-ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\n\n\nconst load = () => {\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://glo-ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = cart => {\n  return fetch('https://g-ozon-cart-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {  \n    method: 'POST',\n    body: JSON.stringify(cart),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  }).then(res => res.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://glo-ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cartWrapper = document.querySelector('.cart-wrapper');\n\nconst renderCart = cart => {\n  if (cart.length != 0) {\n    cartWrapper.innerHTML = '';\n    cart.forEach(item => {\n      const { id, title, img, price, sale } = item;\n      cartWrapper.insertAdjacentHTML('beforeend', `\n        <div class=\"card\" data-key=\"${id}\">\n          ${sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n          <div class=\"card-img-wrapper\">\n            <span class=\"card-img-top\"\n              style=\"background-image: url('${img}')\"></span>\n          </div>\n          <div class=\"card-body justify-content-between\">\n            <div class=\"card-price\">${price} ₽</div>\n            <h5 class=\"card-title\">${title}</h5>\n            <button class=\"btn btn-danger\">Из карзины</button>\n          </div>\n        </div>\n      `);\n    });\n  } else {\n    cartWrapper.innerHTML = `<div id=\"cart-empty\">Ваша корзина пока пуста</div>`;\n  }\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://glo-ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n\n\nconst goodsWrapper = document.querySelector('.goods');\n\nconst renderGoods = goods => {\n  sessionStorage.setItem('goods', JSON.stringify((0,_utils__WEBPACK_IMPORTED_MODULE_0__.toArray)(goods)));\n  goodsWrapper.innerHTML = '';\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toArray)(goods).forEach(item => {\n    const { id, title, img, price, sale } = item;\n    goodsWrapper.insertAdjacentHTML('beforeend', `\n      <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n        <div class=\"card\" data-key=\"${id}\">\n          ${sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n          <div class=\"card-img-wrapper\">\n            <span class=\"card-img-top\"\n              style=\"background-image: url('${img}')\"></span>\n          </div>\n          <div class=\"card-body justify-content-between\">\n            <div class=\"card-price\">${price} ₽</div>\n            <h5 class=\"card-title\">${title}</h5>\n            <button class=\"btn btn-primary\">В корзину</button>\n          </div>\n        </div>\n      </div>\n    `);\n  });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://glo-ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst search = () => {\n  const inputSearch = document.querySelector('.search-wrapper_input');\n  inputSearch.addEventListener('input', event => {\n    const value = event.target.value;\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value).then(data => {\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://glo-ozon/./src/modules/search.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toArray\": () => (/* binding */ toArray)\n/* harmony export */ });\nconst toArray = obj => Object.keys(obj).map(key => obj[key]);\n\n//# sourceURL=webpack://glo-ozon/./src/modules/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;