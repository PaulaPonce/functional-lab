// ** Implementar Array#reduce usando recursión

// arr: arreglo de palabras 
// fn => fn(prev, curr, index, arr) => prev + curr
// init: valor inicial de la reducción

// ** Solución
function reduce(arr, fn, initial) {
    return (function innerReduce (idx, value) {
      if (idx > arr.length - 1){ //length-1 porque se compara con el índice
          return value //retorna el último valor por el que pasó fn
      }
      return innerReduce(idx + 1, fn(value, arr[idx], idx, arr))
  })(0, initial)
}

module.exports = reduce;