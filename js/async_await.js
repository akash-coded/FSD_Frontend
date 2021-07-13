async function fun() {
  console.log("Having fun");

  let promise = new Promise(function (resolve, reject) {
    // the function will automatically  get executed when the promise is constructed.
    console.log("Fulfilling my promise");
    // state of promise object -> "pending", result -> undefined

    setTimeout(() => resolve("Fulfilled!"), 1000);
    // state -> fulfilled, result -> done
  });

  let result = await promise; // wait until the promise resolves

  console.log(result);

  return 1;
}

fun().then(console.log("After having fun, I am getting printed."));
