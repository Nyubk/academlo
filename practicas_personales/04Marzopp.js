let frase = "Me llamo Brenda y me gustan mucho los gatos. Los gatos son mi animal favorito, los gatos maullan"

let indicePalabraEncontrada = frase.indexOf( "gatos" )
console.log( indicePalabraEncontrada )

console.log( frase.indexOf( "gatos", (indicePalabraEncontrada + 1) ) )
