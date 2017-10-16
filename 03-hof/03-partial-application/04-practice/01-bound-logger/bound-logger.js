// ** Usar Function#bind para implementar una función logger que permita separar mensajes en diferentes ámbitos (namespaces).

// ** Solución
exports.log = (...args) => args.join(' ') //retorna un string con los parámetros de entrada concatenados y separados por espacios
exports.logger = (namespace) => exports.log.bind(null, namespace) //retorna una función que se comporta como log, pero añade namespace al principio