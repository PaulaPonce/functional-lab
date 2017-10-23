/*
exports.factorial = (n) => {
	if (n == 0) {
		return 1
	} else {
		return n * factorial(n - 1)}
}
*/
exports.factorial = (n) => {(n == 0) ? 1 : n * exports.factorial(n - 1)}


/*
exports.fibonacci = (n) => {
	if (n == 1 || n == 2) {
		return 1
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2)
	}
}
*/
exports.fibonacci = (n) => {(n == 1 || n == 2) ? 1 : exports.fibonacci(n - 1) + exports.fibonacci(n - 2)}


/*
exports.divide = (a, b) => {
	if (b > a) {
		return 0
	} else {
		return divide(a - b, b) + 1
	}
}
*/
exports.divide = (a, b) => {(b > a) ? 0 : exports.divide(a - b, b) + 1}


/*
exports.invert = (n) => {
	if (n < 10) {
		return n
	} else {
		return n % 10 + invert(n / 10) * 10
	} 
}
*/
exports.invert = (n) => {(n < 10) ? n : (n % 10) + exports.invert(n / 10) * 10}


/*
exports.suma = (n) => {
	if (n == 0) {
		return n
	} else {
		return Math.floor(suma(n / 10) + (n % 10))
	}
}
*/
exports.suma = (n) => {(n == 0) ? n : Math.floor(exports.suma(n / 10) + (n % 10))}


exports.multi = (a, b) => {
	if (a == 1) {
		return b
	}
	if (a % 2 != 0) {
		return b + exports.multi(a / 2, b * 2)
	} else {
		return exports.multi(a / 2, b * 2)
	}
}


/*
exports.sumArr = (arr) => {
	if (arr.length == 0) {
		return 0
	} else {
		return arr[0] + sumArr(arr.slice(1))
	}
}
*/
exports.sumArr = (arr) => {(arr.length == 0) ? 0 : arr[0] + exports.sumArr(arr.slice(1))}
