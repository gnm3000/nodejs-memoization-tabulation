const countConstruct = (target,wordBank) => {
    if(target === '') return 1;
    let totalCount=0;
    for (let word of wordBank){
        if(target.indexOf(word)===0){
            const numWays = countConstruct(target.slice(word.length),wordBank);
            totalCount+=numWays;
        }
    }
    return totalCount;
}
console.time("countConstruct")
console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"]))
console.log(countConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"]))
console.timeEnd("countConstruct")


const countConstructFaster = (target,wordBank,memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return 1;
    let totalCount=0;
    for (let word of wordBank){
        if(target.indexOf(word)===0){
            const numWays = countConstructFaster(target.slice(word.length),wordBank,memo);
            totalCount+=numWays;
        }
    }
    memo[target]= totalCount;
    return totalCount;
}
console.time("countConstructFaster")
console.log(countConstructFaster("abcdef",["ab","abc","cd","def","abcd"]))
console.log(countConstructFaster("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(countConstructFaster("enterapotentpot",["a","p","ent","enter","ot","o","t"]))
console.log(countConstructFaster("eeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"]))
console.timeEnd("countConstructFaster")