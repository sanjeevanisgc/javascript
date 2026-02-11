/*
Problem statement:
Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

Please solve it without using lodash's _.chunk function.
*/

/*
-----------------------------------------------------------------------------------------------------
                    METHOD : 1
-----------------------------------------------------------------------------------------------------
*/

const chunk = (arr, size) => {
  return arr.reduce((chunkedArray, element) => {
    
    const lastChunk = chunkedArray[chunkedArray.length - 1];
    
    if (!lastChunk || lastChunk.length === size) {
      chunkedArray.push([element]);      
    } else {
      lastChunk.push(element);      
    }
    return chunkedArray;
  }, []);
};

let res = chunk([1,2,3,4,5], 1);
console.log(res);

res = chunk([1,2,3,4,5],3);
console.log(res);

res = chunk([8,5,3,2,6],6);
console.log(res);

res = chunk([],1)
console.log(res);


/*
-----------------------------------------------------------------------------------------------------
                    METHOD : 2
-----------------------------------------------------------------------------------------------------
*/

/*

var chunk = function(arr, size) {
    let result =[];
    for(let i=0; i<arr.length; i+=size){
        result.push(arr.slice(i,i+size))
    }
    return result;
};


*/