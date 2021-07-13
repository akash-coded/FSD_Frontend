function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = 2;
let n = 3;

// let x = prompt("x?", "");
// let n = prompt("n?", "");

if (n < 0) {
  console.log(
    `Power ${n} is not supported, please enter a non-negative integer number`
  );
  //   alert(
  //     `Power ${n} is not supported, please enter a non-negative integer number`
  //   );
} else {
  console.log(pow(x, n));
  //   alert(pow(x, n));
}
