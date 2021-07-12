function fun() {
  let condition = 5;

  console.log(x);

  if (5 === condition) {
    var x = 10;
    console.log(x); // Valid
    console.log(x / 0); // Valid
  }
}

fun();
