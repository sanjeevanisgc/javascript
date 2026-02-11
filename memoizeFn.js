function memoize(fn) {
    
   const cache = {};
  
   return function(...args) {
    // console.log(fn(), "function 2")
    const key = JSON.stringify(args);
      
    if (key in cache) {
      return cache[key];
    }


    const result = fn.apply(this, args);
    cache[key] = result;
    
    return result;
  }
  
  
}


// const memoizedSum = memoize(function(a, b) {
//     console.log("in fn")
//   return a + b;
// });

// console.log(memoizedSum(2,3));
// console.log(memoizedSum(2,3));
// console.log(memoizedSum(3,2));

 let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
   console.log(callCount, "call")
    return a + b;
  })
  memoizedFn(2, 3) // 5
  memoizedFn(2, 3) // 5
  memoizedFn(2, 2) // 5
  console.log(callCount, "count") // 1 
