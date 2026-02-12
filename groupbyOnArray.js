/*
Problem statement:
Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.
*/

/*          Method : 1      */
Array.prototype.groupBy = function(fn) {
    const ans = {};
    for(let e of this){
        const key = fn((e));
        ans[key] ||=[];
        ans[key].push(e);        
    }
    return ans;
};

/*      Method : 2          */

Array.prototype.groupBy2 = function(fn){
    return this.reduce((grouped, item) => {
        const key = fn(item);
        grouped[key] ||= [];
        grouped[key].push(item);

        return grouped;

    },{});
}



let array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
];

let fn = function (list) { 
  return String(list[0]); 
};

console.log(array.groupBy(fn))

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fn = function (n) { 
  return String(n > 5);
};

console.log(array.groupBy2(fn));


array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
];
fn = function (item) { 
  return item.id; 
};
console.log(array.groupBy(fn));