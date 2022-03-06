// Operadores básicos
// = igualdad, > mayor que, < menor que

// = igualdad
let a = 10
let b = 5

let c = 15

/*let sonIguales = a == b
console.log("sonIguales es: " +sonIguales)

let prueba = a == b > c

console.log("prueba: " +prueba)
console.log("String: " +("VICTOR" == "victor")) //Da falso porque al ser string se comparan los valores UNICODE son distintos.

console.log("null== null: "+(null== null))
console.log("null == undefined: "+(null == undefined))

console.log("10 === 10: " +(10 === "10"))// Igualdad estricta, deben utilizarse por convención a no ser que se determine no utilizarlas
// > mayor que
// a > b "a es mayor que b"

console.log("a > b: "+(a > b)) //10 > 5
console.log("200 > 100: "+("200" > 100))
console.log("VICTOR > victor: "+("VICTOR" > "victor"))//se compara la "suma" de los valoreS UNICODE
console.log("VHLD > v: "+("VHLD" > "v")) //Los caracteres de mayusculas sus valores UNICODE son  menores que los caracteres en minusculas

//< menor que
console.log("90 < 100: "+(90 < 100))

// !=  diferente de !== diferencia exacta

console.log("10! = 5: "+(10 != 5))
console.log("10! = 10: "+(10 != 10))
console.log("10.5 !== 10: "+(10.5 !== 10))
console.log("'10' != 10: "+("10" != 10))
//  mayor o igual que >=
console.log("10 >= 5: "+(10 >= 5))
console.log("10 >= 11: "+(10 >= 11))
// menor o igual que <=
console.log("4 <= 5: "+(4 <= 5))
console.log("6 <= 5: "+(6 <= 5))


// OPERADORES LOGICOS
// SE LLEVAN A CABO CON DATOS BOOLEANOS Y DEVUELVEN O GENERAN UN BOOLEAN

// OPERADOR NEGACION (!)

let valorDeVerdad = false 
let valorDeFalso  = true
console.log("Con la condicion !dato, false se convierte en: "+!valorDeVerdad)
console.log("Con la condicion !dato, true se convierte en: "+!valorDeFalso)

// AND (&&)

/*  dato1   dato2   &&dato
    true    true    true
    true    false   false
    false   false   false
    false   true    false


console.log(valorDeFalso && !valorDeVerdad)

// OR (||)

/*  dato1   dato2   &&dato
    true    true    true
    true    false   true
    false   true    true
    false   false   false


console.log(!valorDeFalso || valorDeVerdad)
console.log(!valorDeFalso || valorDeVerdad+" es igual a ya me chingue porque no hay papitas ni chocolate :')")

// correo y contraseña
let usuarioExiste = true
let contraseñaCorrecta = true

//ejercicio
// Como detectar si un numero cualquiera se encuentra dentro del intervalo (0,10)
let numero = 100
let estaDentroDelIntervalo = (numero >= 0 ) && (numero <= 10)

console.log("El numero se encuentra dentro del intervalo: "+ estaDentroDelIntervalo)
*/

// PROPIEDADES Y METODOS

// propiedades --> caracteristicas que puedo conocer sobre el dato 
    // dato.nombreDeLaPropiedad

    
let unaCadena ="Esta es una frase cualquiera"

let longitud = unaCadena.length

console.log("La longitud de "+unaCadena +" son "+longitud+" caracteres")

// metodos -->     acciones que puede llevarse a cabo con los datos
    // dato.nombreDelMetodo
