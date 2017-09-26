const lowercaser = require('../lowercaser') //los elementos públicos se llaman con require

test('lowercaser debería retornar un string en lowercase', () => {
	const actual = 'LOREM IPSUM'
	const expected = 'lorem ipsum'

	expect(lowercaser(actual)).toBe(expected)
})

test('deberia fallar cuando se ingresa un número', () =>{
	const actual = 1
	//const expected = '1'

	//expect(lowercaser(actual)).toBe(expected)
	expect(() => {
		lowercaser(actual)
	}).toThrow()
})