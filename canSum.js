const canSum = (targetSum,numbers) => {
    if(targetSum===0) return true;
    if(targetSum<0) return false;
    
    for (let num of numbers){
        const remainder = targetSum - num;
        if(canSum(remainder,numbers)===true) return true;
    }
    return false;
};

// check if you can sum up with array numbers the first param we pass the function
console.time("canSum");
console.log(canSum(7,[2,3]));
console.log(canSum(7,[5,3,4,7]));
console.log(canSum(7,[2,4]));
console.log(canSum(8,[2,3,5]));
console.log(canSum(300,[7,14]));
console.timeEnd("canSum");
//memoize
const canSumFaster = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum===0) return true;
    if(targetSum<0) return false;
    
    for (let num of numbers){
        const remainder = targetSum - num;
        if(canSumFaster(remainder,numbers,memo)===true){
            memo[targetSum]=true;
            return true;
        } 
    }
    memo[targetSum]=false;
    return false;
};
console.time("canSumFaster");
console.log(canSumFaster(7,[2,3]));
console.log(canSumFaster(7,[5,3,4,7]));
console.log(canSumFaster(7,[2,4]));
console.log(canSumFaster(8,[2,3,5]));
console.log(canSumFaster(300,[7,14]));
console.timeEnd("canSumFaster");