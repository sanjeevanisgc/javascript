var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let functionCount = functions.length;

        functions.forEach((fn, i) => {
            fn()
                .then((result) => {
                    results[i] = result;
                    functionCount--;
                    if(functionCount === 0) resolve(results);
                })
                .catch((err) => reject(err))
        })
    })
    
};


let promise = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))])
promise.then(console.log);

const promise2 = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(5), 200))]);
promise2
    .then(console.log)
    .catch(console.log);


const promise3 = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(1), 200)), () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))]);
promise3
    .then(console.log)
    .catch(console.log);