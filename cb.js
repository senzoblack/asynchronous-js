async function serialAsync() {
    console.log("start");
    
    const result1 = await asyncOperation1();
    console.log(result1);
    
    const result2 = await asyncOperation2();
    console.log(result2);
    
    console.log("end");
  }
  
  function asyncOperation1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("asyncOperation1 result");
      }, 1000);
    });
  }
  
  function asyncOperation2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("asyncOperation2 result");
      }, 2000);
    });
  }
  
  serialAsync();
//NOTE - Serial execution of async code refers to executing asynchronous code in a sequantial  and ordered manner, where each async operation is completed before moving on to next one.
//NOTE - This is achieved by using the `await` keyword in languages sucj asa javascript, which allows to pause the execution until a Promise  resolves or rejects.

//NOTE - `serialAsync()` is an async function that calls `asyncOperation1()` and `asyncOperation1()` sequentially using `await`. The `asynchOperation1()` &  `asynchOperation2()` 
//NOTE - functions returnPromoses that resolve after delay of 1 & 2 seconds respectively. The output of code will be:
//start
//asyncOperation1 result
// asyncOperation2 result
// end
