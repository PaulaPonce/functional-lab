// ** Usar aplicación parcial para crear una función logger que añada un "namespace" (un string) al principio del resultado.

// ** Solución
const logger = namespace => (...args) => `${namespace} ${args.join(' ')}`

module.exports = logger;