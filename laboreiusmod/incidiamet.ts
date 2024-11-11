let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello World');
  }, 2000);
});

promise.then((value) => {
  console.log(value); // "Hello World"
});
