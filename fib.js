const fib = (n) => { 
    if(n<=2) return 1;
    return fib(n-1)+fib(n-2);
};
console.time('normal_fib')
console.log(fib(6));
console.log(fib(7));
console.log(fib(40));
console.timeEnd('normal_fib')
// we are gonna implement memoization strategy for dynamic programming

const fib_faster = (n,memo={}) => { 
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n]= fib_faster(n-1,memo)+fib_faster(n-2,memo);
    return memo[n];
};
console.time('faster_fib')
console.log(fib_faster(6));
console.log(fib_faster(7));
console.log(fib_faster(40));
console.timeEnd('faster_fib')