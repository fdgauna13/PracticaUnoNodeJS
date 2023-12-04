const numbersForEach = [1, 2, 3, 4, 5];
let suma = 0;

numbersForEach.forEach(function(numero) {
    suma += numero;
});

console.log("La suma de los números es: " + suma);


//EJERCICIO 2: IMPRESION DE ELEMENTOS AL CUADRADO CON FOREACH
const numeros = [2, 4, 6, 8];

numeros.forEach( (Number) => {
    result= Number * Number;
    console.log(result)
}
)

//EJERCICIO 3: MULTIPLICAR NUMEROS CON MAP
const numbersMap = [3, 7, 1, 9];

const multiplicar = numbersMap.map(x => x * 2);
console.log(multiplicar)


//EJERCICIO DE MAYUSCULAS CON MAP
const wordsMap = ['apple', 'banana', 'orange'];

const mayusculas = wordsMap.map(function(fruta){
    return fruta.toUpperCase();

})
console.log(mayusculas)

//FILTRAR NUMEROS PARES CON FILTER
const numbersFilter = [11, 22, 33, 44, 55];
const evenNumbers = numbersFilter.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(evenNumbers)

//FILTRAR PALABRAS CORTAS CON FILTER
const wordsFilter = ['apple', 'banana', 'kiwi', 'grape'];

const evenWords = wordsFilter.filter(function(palabra){
 return palabra.length <= 5;
});
console.log(evenWords)

//SUMA CON ELEMENTOS CON REDUCE
const numbersReduce = [5, 10, 15, 20];
const sumar = numbersReduce.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(result)

//CONCATENACION DE PALABRAS CON REDUCE
const wordsReduce = ['Hola', ' ', 'Mundo', '!'];
const concatenacion = wordsReduce.reduce(function(acumulador, palabra){
    return acumulador + palabra;
});
console.log(concatenacion)

//ENCONTRAR NUMERO MAYOR A 5 CON FIND
const numbersFind = [2, 4, 6, 8, 10];
const findNumberLest5 = numbersFind.find(function(numero){
    return numero > 5;
});
console.log(findNumberLest5)


//ENCONTRAR PALABRA QUE CONTENGA "A" CON FIND
const wordsFind = ['apple', 'banana', 'kiwi', 'grape'];
const findWord = wordsFind.find(function(palabra){
    return palabra.includes('a');
})
console.log(findWord)

//INDICE DEL PRIMER NUMERO PAR CON FINDINDEX
const numbersFindIndex = [3, 7, 2, 9, 5];
const numerosPares = numbersFindIndex.findIndex(function(numero){
    return numero % 2 === 0;
});
console.log(numerosPares)

//INDICE DE LA PRIMER PALABRA CON MAS DE TRES LETRAS FINDINDEX
const wordsFindIndex = ['cat', 'dog', 'elephant', 'bird'];
const WordWith3Letters = wordsFindIndex.findIndex(function(palabra){
    return palabra.length > 3;
});
console.log(WordWith3Letters)

//¿HAY NUMEROS PARES? CON SOME
const numbersSome = [1, 3, 5, 6, 9];
const numerosPars = numbersSome.some(function(numero){
    return numero % 2 === 0;
});
console.log(numerosPars)

//¿HAY PALABRAS CON MAS DE 5 LETRAS? CON SOME
const wordsSome = ['cat', 'dog', 'elephant', 'bird'];
const wordWithMore5Letter = wordsSome.some(function(palabra){
    return palabra.length < 5;
});
console.log(wordWithMore5Letter)

//¿TODOS LOS NUMEROS SON MAYORES A 0? EVERY
const numbersEvery = [2, 5, 8, 10];
const numerosMayores = numbersEvery.every(function(numero){
    return numero > 0;
});
console.log(numerosMayores)

//¿TODAS LAS PALABRAS COMIENZAN CON S? EVERY
const wordsEvery = ['Sun', 'Sky', 'Sea', 'Sand'];
const wordsWithS = wordsEvery.every(function(palabra){
    return palabra.charAt(0).toUpperCase()=== 'S';
});
console.log(wordsWithS)