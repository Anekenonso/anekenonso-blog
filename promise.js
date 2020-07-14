var promise = new Promise ( function getInfo(resolve, reject) {

  setTimeout(() => resolve('hello'), 1000)

  console.log(promise);
});