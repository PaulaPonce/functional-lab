# Control de flujo

##  Recursividad

La capacidad de una función de invocarse a sí misma.

Una función recursiva devuelve una función hasta llegar al caso base: criterio de parada para que no siga iterando, se puede comparar con el input de entrada.
con esto se cumple que las funciones sean puras

así se apilan en memoria las funciones --> árbol de ejecución
(pilas)

```js
fac(6)
	6*fac(5)
		5*fac(4)
			4*fac(3)
				3*fac(2)
					2*fac(1)
						1*fac(0)
fac(1)=1
fac(2)=2
...
```

2.ejercicios de recursividad
reemplaza iteración con recursión

```js
applyDiscount({ price: 1 },{ price: 2 },{ price: 3 }, .2)
({price: 3*0.8}).concat(applyDiscount({ price: 2 },{ price: 3 }, .2))
({price: 2*0.8}).concat(applyDiscount( {price: 3 }, .2))
({price: 1*0.8}).concat(applyDiscount( {[]}, .2))
```

## Asincronía

por ejemplo `setTimeout` 
javascript es nonblocking --> es asíncrono
la sincronía está ligada con mutabilidad

llamada api tiene un tiempo de respuesta, el cual no es instantaneo. cuando se hace un petición ajax, devuelve un respuesta asíncrona

callback --> perite tener la respuesta de forma asíncrona, es una higher orden function

api --> formato rest, tiene  4 protocolos: get (obtener un recurso), post (crear), delete, put(actualiza), patch(actualización parcial). cada protocolo tiene un tiemmpo de respuesa desde que se hace la petición hasta que se obtiene la respuesta.

```js
$.get("/api/example", response => { //callback
    data = response
  })
```

## problemas
calback hell

solución: librerías --> async, Q, when

promesas: forma síncrona de manejar la asincronía, transformaron los callback en promesas
las promesas se pueden concatenar
se usa para saber cuando va a terminar y que hacer con la respuesta

```js
const getData = (options, callback) => {
  $.get("/api/example", options, response => { //resolve
    callback(null, JSON.parse(response))
  }, () => {
    callback(new Error("AJAX request failed!")) //reject
  })
}
```

ejemplo de promesas
fetch --> nativo de js, retorna una promesa
hay liibrerías que reemplazan fetch --> request
npm request

```js
const request = require('request')

function lala() {
	request('https://www.google.com', function (err, res){ //dos parámetros: url y callback
		
		if(err) {
			console.log(err)
			return
		}
		console.log(res)
	})
}
lala()
```

//res es el código fuente de la pág

```js
const request = require('request')

function lala() {
	return new Promise((resolve, reject) => { //new promise recibe un callback o hof
		request('https://www.google.com', function (err, res){ 
			if(err) {
				return reject(err)
			}
			resolve(res)
		})
	}) 
}
lala()

//.then solo depende de su respuesta //al contrario de lo que ocurre con callback hell donde cada función depende de la anterior

//entonces con esto se soluciona el callback hell
.then((response) =>{
	console.log(response)
	})
.then((response) =>{
	console.log()
	})
.catch(err => {
	console.log(err)
	})
```