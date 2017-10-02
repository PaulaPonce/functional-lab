'use strict';

// ** Refactorizar la función applyDiscount() para convertirla en una función pura

/*
const discount = .2;

// Broken: returns new array but mutates same object references.
const applyDiscount = (cart) => {
  if (!cart.length) {
    return [];
  }

  const current = cart.shift();
  current.price *= (1 - discount);
  return [current].concat(applyDiscount(cart));
};
*/


// ** Solución

//se usa discount como argumento de la función
const applyDiscount = (cart, discount) => {
  
  if (!cart.length) {
    return [];
  }

  //para evitar la mutación se crea una copia del arreglo
  //copia de cart: Object.assign({}, cart)

  const cartCopy = cart.map(item => Object.assign({}, item))
  const current = cartCopy.shift()
  current.price *= (1 - discount);

  return [current].concat(applyDiscount(cartCopy, discount))
};


module.exports = applyDiscount;