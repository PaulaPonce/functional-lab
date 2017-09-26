# Evitando el estado compartido

¿Qué es una función?
Es un proceso que recibe parámetros de entrada y retorna datos de salida.

## Funciones puras

Dados los mismos parámetros de entrada siempre retorna el mismo valor de salida

Ejemplo 1 --> función pura
sum 2 3 => 5
sum 2 3 => 5
sum 2 3 => 5

Ejemplo 2 --> función no pura
Math.random() // 0.1
Math.random() // 0.2
Math.random() // 0.3

## Inmutabilidad

Propiedad que tienen todas las variables que puede cambiar o no cambiar.

Un valor inmutable es aquel que no es alterado nunca. Sirve para evitar errores al usar una variable que utiliza otra que podría cambiar.

Por ejemplo --> un string es un tipo de dato que no puede ser cambiado, i.e es inmutable

### Recursividad

Consiste en funciones que se llaman a sí mismas, evitando el uso de bucles y otros iteradores