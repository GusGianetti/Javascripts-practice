/* Recursive way, time complexity: O(2^n) */

function Fibonacci(n){
    if (n<=1)
        return(n);
    return Fibonacci (n-2) + Fibonacci (n-1);

}

let n = 30;

let start = performance.now()

let result = Fibonacci (n);

let end = performance.now()

console.log("Fibonacci`s recursive way:",result,"solved in", (end-start).toFixed(4),"miliseconds" )

/* Iterative way, time complexity: O(n) */

function fibonacciOpt (n){
    if (n<=1) return n;

    let dp = new Array (n+1);

    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i<=n; i++){
        dp[i] = dp[i - 1] + dp [i - 2];
    }
    return dp[n];
}

let start2 = performance.now()

let result2 = fibonacciOpt(n);

let end2 = performance.now()

console.log("Fibonacci`s recursive way:",result2,"solved in", (end2-start2).toFixed(4),"miliseconds" )