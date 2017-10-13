//función que retorna otra función, o que retorna un callback

function sumAndMult(arr){
	const sum = arr.reduce((acc, elem) => acc + elem, 0) //inicializa en 0
	console.log(sum)
	return (factor) => { //función anónima //está dentro del scope de sum
		return sum * factor
	}
}

const sumArr = sumAndMult([1,2,3,4,5,6])(2) //currying //2 es el factor
console.log(sumArr)

/*
function sumAndMult(arr){
	const sum = arr.reduce((acc, elem) => acc + elem, 0) //inicializa en 0
	console.log(sum)
	return (factor) => {
		const (div) => {
			return mult / div
		}
	}
}
const sumArr = sumAndMult([1,2,3,4,5,6])(2)(2)
*/