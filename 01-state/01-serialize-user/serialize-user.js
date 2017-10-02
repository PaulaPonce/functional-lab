// **Refactorizar la función serializeUser() para convertirla en una función pura y evitar que modifique el objeto que recibe como argumento

/*
const serializeUser = user => {
	user.name = (user.name.length > 10) ? `${user.name.slice(0, 7)}...` : user.name;
	user.date = user.date.toJSON();
	return JSON.stringify(user);
};
*/


// **Solución

const serializeUser = user => {

  //para evitar la mutación se crea una copia de user
  const copyUser = Object.assign({}, user)

  copyUser.name = (copyUser.name.length > 10) ? `${copyUser.name.slice(0, 7)}...` : copyUser.name;
  copyUser.date = copyUser.date.toJSON();

  return JSON.stringify(copyUser);
};

module.exports = serializeUser;