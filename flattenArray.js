/*
Problem statement: 
flatten array till given depth
*/

var flat = function (arr, n) {
     if(n == 0) return arr;    
    
    let answer = [];
    
    for(let i=0; i<arr.length; i++){
    
        if(n>0 && Array.isArray(arr[i])){
            answer.push(...flat(arr[i], n-1));
        }
        else{
            answer.push(arr[i]);
        }
    }
    return answer;
};


let arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];
let n = 0;
console.log(arr , "\n", flat(arr, n));

arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];
n = 1;
console.log("\n",arr , "\n", flat(arr, n));

arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];
n = 2;
console.log("\n",arr , "\n", flat(arr, n));
