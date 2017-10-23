// ** Implementar una función recursiva que devuelva todas las dependencias únicas y subdependencias de un módulo ordenadas alfabéticamente. 
// Las dependencias deben imprimirse como dependencia@versión

// ** Solución
function getDependencies(mod, res) {
  res = res || [];
  const dependencies = mod && mod.dependencies || [];
  Object.keys(dependencies).forEach(dep => {
    const key = dep + '@' + mod.dependencies[dep].version;
    if (res.indexOf(key) === -1) res.push(key);
    getDependencies(mod.dependencies[dep], res);
  });
  return res.sort();
}

module.exports = getDependencies;