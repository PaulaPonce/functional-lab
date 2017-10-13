const repeat = require('../repeat')

describe('repeat()', () => {
	test('Si repeat recibe num = 3, función debería ejecutar 3 veces', () => {
		//contador de iteraciones
		let iter = 0

		const num = 3
		const iter_num = 3

		const fn = () => {
			iter = iter + 1
		}

		repeat(fn,num)

		expect(iter).toBe(iter_num)
	})
})

//describe() permite encapsular test que son propios de repeat() dentro de una subsuite de test 
//test unitario

describe('repeat()', () => {
	test('No debería invocar la función cuando n es 0', () => {
		let iter = 0
		const fn = () => iter++
		repeat(fn, 0)
		expect(iter).toBe(0)
	})
})