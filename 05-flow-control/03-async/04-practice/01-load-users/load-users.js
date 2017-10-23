// ** Arreglar el siguiente código
// La función callback debería ser llamada con todos los usuarios ya cargados. 
// El orden de los usuarios debería coincidir con el orden de los ID de usuarios suministrados.

/*
const loadUsers = (userIds, load, done) => {
  var users = [];
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]));
  }
  return users;
}
*/

// ** Solución
const loadUsers = (userIds, load, done) => {
	let completed = 0
  const users = []
  userIds.forEach((id, index) => {
  	load(id, user => {
  		users[index] = user
  		if(++completed === userIds.length) {
  			return done(users)
  		}
  	})
  })
}

module.exports = loadUsers;