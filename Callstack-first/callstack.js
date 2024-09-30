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
