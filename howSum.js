const howSum = (targetSum,numbers) => {
    if (targetSum===0) return [];
    if (targetSum<0) return null;

    for(let num of numbers){
        const remainder = targetSum-num;
        const remainderResult = howSum(remainder,numbers);
        if(remainderResult !== null){
            return [...remainderResult,num];
        }
    }
    return null;

    
};


console.time("howSum");
console.log(howSum(7,[2,3]));
console.log(howSum(7,[5,3,4,7]));
console.log(howSum(7,[2,4]));
console.log(howSum(8,[2,3,5]));
console.log(howSum(300,[7,14]));
console.timeEnd("howSum");

const howSumFaster = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if (targetSum===0) return [];
    if (targetSum<0) return null;

    for(let num of numbers){
        const remainder = targetSum-num;
        const remainderResult = howSumFaster(remainder,numbers,memo);
        if(remainderResult !== null){
            memo[targetSum]= [...remainderResult,num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];

    
};


console.time("howSumFaster");
console.log(howSumFaster(7,[2,3]));
console.log(howSumFaster(7,[5,3,4,7]));
console.log(howSumFaster(7,[2,4]));
console.log(howSumFaster(8,[2,3,5]));
console.log(howSumFaster(300,[7,14]));
console.timeEnd("howSumFaster");