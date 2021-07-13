let promise = new Promise(function (resolve, reject) {
  // the function will automatically  get executed when the promise is constructed.
  console.log("Executing synchronously");
  // state of promise object -> "pending", result -> undefined

  setTimeout(() => resolve("done!"), 1000);
  // state -> fulfilled, result -> done
});

promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);
