// ** Implementar una función que reciba una función como primer argumento, y un número num como segundo argumento. La función debe ejecutar la función num veces.

// ** Solución recursiva

function repeat(operation, num) {
  if (num === 0) {
    return
  }
  operation()

  return repeat(operation, num - 1)
}



// ** Solución iterativa

/*
function repeat(operation, num) {
  for(let i = 0; i < num; i++) {
    operation()
  }
}
*/


module.exports = repeat;