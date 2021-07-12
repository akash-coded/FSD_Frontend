function paramDemo(num1, num2) {
  console.log("Sum = ", num1 + num2);
}
// paramDemo("Akash", "Das");

function opOverload1(arg1, arg2) {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    console.log("Both are numbers");
  }
  if (typeof arg1 === "string" && typeof arg2 === "string") {
    console.log("Both are strings");
  }
}
opOverload1(10, 20);

function opOverload2(arg1, arg2) {
  if (typeof (arg1 && arg2) == "number") return console.log("Both are numbers");
  else if (typeof (arg1 && arg2) == "string")
    return console.log("Both are string");
}
opOverload2(3.146, 345);

function opOverload(arg1, arg2) {
  if (typeof arg1 === typeof arg2) {
    console.log("Both are " + typeof arg1);
  }
}
opOverload(10, 20);
