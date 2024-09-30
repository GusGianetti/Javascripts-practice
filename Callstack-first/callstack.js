//testing
function firstFunction() 
{
    console.log("Entering firstFunction");
    secondFunction();
    console.log("Exiting firstFunction");
}

function secondFunction() {
    console.log("Entering secondFunction");
    thirdFunction();
    console.log("Exiting secondFunction");
}

function thirdFunction() {
    console.log("Entering thirdFunction");
    // This function does not call any other function
    console.log("Exiting thirdFunction");
}

// Start the call stack
console.log("Starting the call stack");
firstFunction();
console.log("Call stack completed");
