const frutas =["pera","manzana","uva","patilla","fresa"]
/**agrega elemento al final del Array */
frutas.push("kiwi","Cereza")
/**
 * elimina elemento al final del Array
 */
frutas.pop()
/**imprimir por posicion */
console.log(frutas[0])
console.log(frutas)


/**
 * recorrido
 */
console.log("Recorrido con Ciclo for")
for(let i=0;i<frutas.length;i++){
    console.log(frutas[i])
}

/**
 * for each em6 javascript
 */
console.log("Recorrido con For each")
frutas.forEach(fruta=>{
    console.log(`Nombre:${fruta} Longitud:${fruta.length}`)
})





