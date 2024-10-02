function firstFunction(){
    
    console.log ("Inicio de firstFunction");
    secondFunction();
    console.log("Saliendo de la primer función");
}
function secondFunction()
{
    console.log ("Inicio de secondFunction");
    thirdFunction();
    console.log("Saliendo de la segunda función");
}

function thirdFunction()
{
    console.log("Inicio de thirdFunction")
    console.log("Saliendo de thirdFunction")
}
// Start the call stack
console.log ("El funcionamiento del Callstack es el siguiente:");
console.log("Comienzo del Callstack");
firstFunction();
console.log("Finalizado del Call stack");

/* 
Javascript ejecuta con el siguiente orden: Last in first out.
Esto quiere decir que el orden de ejecución de las funciones va a ser determinado
por la última función invocada.
Lo podemos chequear en el siguiente resultado de consola.

Resultado en consola:

El funcionamiento del Callstack es el siguiente:
callstack.js:21 Comienzo del Callstack
callstack.js:3 Inicio de firstFunction
callstack.js:9 Inicio de secondFunction
callstack.js:16 Inicio de thirdFunction
callstack.js:17 Saliendo de thirdFunction
callstack.js:11 Saliendo de la segunda función
callstack.js:5 Saliendo de la primer función
callstack.js:23 Finalizado del Call stack */