/*
Problem Statement:
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.
*/

var isEmpty = function(obj){
    const len = Object.keys(obj).length;
    if(len === 0) return true;
    return false;
}

let result = isEmpty({"1":"hhjhj"});
console.log(result);

result = isEmpty([1,1,1]);
console.log(result);