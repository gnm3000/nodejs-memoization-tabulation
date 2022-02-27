const gridTraveler = (m,n) => {
    
    if((m==1) && (n==1)) return 1;
    if((m==0) || (n==0)) return 0;
    return gridTraveler(m-1,n)+ gridTraveler(m,n-1);
    

};

console.log(gridTraveler(1,1)) // 1
console.log(gridTraveler(2,3)) // 3
console.log(gridTraveler(3,2)) // 3
console.log(gridTraveler(3,3)) // 6
//console.log(gridTraveler(18,18)) 

const gridTravelerFaster = (m,n,memo={}) => {
    const key = m+','+n;
    if(key in memo) return memo[key];
    if((m==1) && (n==1)) return 1;
    if((m==0) || (n==0)) return 0;
    memo[key]= gridTravelerFaster(m-1,n,memo)+ gridTravelerFaster(m,n-1,memo);
    return memo[key];

};
console.log(gridTravelerFaster(1,1)) // 1
console.log(gridTravelerFaster(2,3)) // 3
console.log(gridTravelerFaster(3,2)) // 3
console.log(gridTravelerFaster(3,3)) // 6
console.log(gridTravelerFaster(18,18)) 