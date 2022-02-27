const canConstruct = (target,wordBank) => {
    if(target === '') return true;

    for (let word of wordBank){
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix,wordBank)===true){
                return true;
            }
        }
    }
    return false;
}
console.time("canConstruct")
console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]))
console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(canConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"]))
console.timeEnd("canConstruct")

const canConstructFaster = (target,wordBank,memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;

    for (let word of wordBank){
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            if(canConstructFaster(suffix,wordBank,memo)===true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

console.time("canConstructFaster")
console.log(canConstructFaster("abcdef",["ab","abc","cd","def","abcd"]))
console.log(canConstructFaster("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(canConstructFaster("enterapotentpot",["a","p","ent","enter","ot","o","t"]))
console.log(canConstructFaster("eeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"]))
console.timeEnd("canConstructFaster")

