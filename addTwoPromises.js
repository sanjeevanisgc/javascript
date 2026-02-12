// Method 1: concurrent execution
let addTwoPromises = async function(promise1, promise2){
    const [value1, value2] = await Promise.all([promise1, promise2]);        
    return value1 + value2;

    /* other way of same execution
    const result = (await Promise.all([promise1, promise2])).reduce((val1, val2) => val1+ val2);
    return result;
    */
}

// Method 2 : sequential execution



let addTwoPromises2 = async (promise1, promise2) =>{
    return ((await promise1) + (await promise2));
}

let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
let promise2 = new Promise(resolve => setTimeout(() =>  resolve(3), 60));

addTwoPromises(promise1, promise2)
    .then(res => console.log(res));

    
addTwoPromises2(promise1, promise2)
    .then(res => console.log(res));