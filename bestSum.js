const bestSum = (targetSum,numbers) => {
    if(targetSum===0) return [];
    if(targetSum<0) return null;

    let shortestCombination=null;

    for(let num of numbers){
        const remainder = targetSum-num;
        const remainderCombination=bestSum(remainder,numbers);
        if(remainderCombination !==null){
            const combination = [...remainderCombination,num];
            if(shortestCombination===null || combination.length<shortestCombination.length){
                shortestCombination=combination;
            }


        }
    }   
    return shortestCombination;
};

// m = targetSum
// n = numbers.length

//brute force
// time: O(n^m * m)
// space: O(m**2)

console.time("bestSum");
console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,3,5]));
console.log(bestSum(8,[1,4,5]));
console.log(bestSum(30,[1,2,5,25]));
console.timeEnd("bestSum");


const bestSumFaster = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    
    if(targetSum===0) return [];
    if(targetSum<0) return null;

    let shortestCombination=null;

    for(let num of numbers){
        const remainder = targetSum-num;
        const remainderCombination=bestSumFaster(remainder,numbers,memo);
        if(remainderCombination !==null){
            const combination = [...remainderCombination,num];
            if(shortestCombination===null || combination.length<shortestCombination.length){
                shortestCombination=combination;
            }


        }
    }   
    memo[targetSum] = shortestCombination
    return shortestCombination;
};

// m = targetSum
// n = numbers.length

//brute force
// time: O(m * n * m)
// space: O(m**2) // because of memo

console.time("bestSumFaster");
console.log(bestSumFaster(7,[5,3,4,7]));
console.log(bestSumFaster(8,[2,3,5]));
console.log(bestSumFaster(8,[1,4,5]));
console.log(bestSumFaster(20,[1,2,5,25]));
console.timeEnd("bestSumFaster");
