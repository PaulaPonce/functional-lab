// ** Refactorizar la función applyDiscount() reemplazando iteración con recursión

// Broken: mutates array as well as objects!!
/*
const applyDiscount = (cart, discount) => {
  for (let i = 0; i < cart.length; i++) {
    cart[i].price *= (1 - discount);
  }
  return cart;
};
*/

// ** Solución
const applyDiscount = (cart, discount) => {
  //criterio de parada
  if (!cart.length) return []
    
  return [{price: cart[0].price * (1-discount)}]
	.concat(applyDiscount(cart.slice(1), discount))
}    

module.exports = applyDiscount;