const allConstruct = (target,wordBank,memo={}) => {
    if ( target==='') return [[]];
    const result = [];
    for (let word of wordBank){
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            const suffixWays=allConstruct(suffix,wordBank);
            const targetWays = suffixWays.map(way => [word,...way]);
            result.push(...targetWays);

        }
    }
    return result;
};

console.time("allConstruct");
console.log(allConstruct("purple",['purp','p','ur','le','purpl']));
console.log(allConstruct("abcdef",['ab','abc','cd','def','abcd','ef','c']));
//console.log(allConstruct("skateboard",['bo','rd','ate','t','ska','sk','boar']));
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz",['a','aa','aaa','aaaa','aaaaa']));

console.timeEnd("allConstruct");
const allConstructFaster = (target,wordBank,memo={}) => {
    if(target in memo) return memo[target];
    if ( target==='') return [[]];
    const result = [];
    for (let word of wordBank){
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            const suffixWays=allConstructFaster(suffix,wordBank,memo);
            const targetWays = suffixWays.map(way => [word,...way]);
            result.push(...targetWays);

        }
    }
    memo[target] = result;
    return result;
};


console.time("allConstructFaster");
console.log(allConstructFaster("purple",['purp','p','ur','le','purpl']));
console.log(allConstructFaster("abcdef",['ab','abc','cd','def','abcd','ef','c']));
//console.log(allConstruct("skateboard",['bo','rd','ate','t','ska','sk','boar']));
console.log(allConstructFaster("aaaaaaaaaaaaaaaaaaaaaaaaaaz",['a','aa','aaa','aaaa','aaaaa']));
console.timeEnd("allConstructFaster");

