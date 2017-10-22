// ** Implementar la función 'curry' para un número arbitrario de argumentos.

// fn: función a la que se añade curry
// n: número de argumentos para curry

// ** Solución

const curryN = fn => n => fn.length <= 1 ? fn(n) : curryN(fn.bind(null, n));

module.exports = curryN