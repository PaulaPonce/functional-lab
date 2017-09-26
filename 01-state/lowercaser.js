/*
function lowercaser (input) {
	return input.toLowerCase()
}
*/

/**
 * lowercaser recibe input y lo transforma a lowrcase
**/
const lowercaser = (input) => {
	if(typeof input != 'string') {
		throw ('input is not a valid string')
	}
	return input.toLowerCase()	
}


module.exports = lowercaser //agrega un método al scope global del programa --> público