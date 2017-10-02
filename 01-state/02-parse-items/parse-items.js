// **Refactorizar le siguiente función para que devuelva un nuevo arreglo en vez de modificar el arreglo que recibe como argumento.

/*
const parseItems = (items) => {
  for (let i = 0; i < items.length; i++) {
    items[i] = parseInt(items[i]);
  }
  return items.sort();
};
*/

// **Solución

//se usa .map() para iterar sobre el array items[]
const parseItems = items => items.map(item => parseInt(item)).sort();


module.exports = parseItems;