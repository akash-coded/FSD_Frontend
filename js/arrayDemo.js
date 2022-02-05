function arrDemo() {
  const arr = [50, 20, 60, 80, 90];
  console.log("Arrays numbers are: ");
  console.table(arr);
  console.log(arr[2]);

  arr.sort();
  console.table(arr);
}

arrDemo();

function addNum(arg1, arg2) {
  let retval = null;
  if ("number" === typeof arg1 && "number" === typeof arg2) {
    let sum = arg1 + arg2; // 40: number
    retval = sum.toString(); // "40": string
  } else {
    retval = "Can not add non-numbers";
  }
  return retval;
}

let val = null;
val = addNum(10, 30);
console.log("Sum = " + val);
