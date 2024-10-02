function foo(b){
    
    var a = 5;
    return a * b + 10;
    
}

function bar (x) {
    
    var y = 3;
    
    return foo(x * y);
}

console.log(bar(6));

/* 
Callstack will be composed by:


1. foo(18) 


2. bar(6) 


3. console.log(bar(6));


4. main()
*/