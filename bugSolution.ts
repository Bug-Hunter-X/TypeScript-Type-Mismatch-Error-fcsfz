function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error("Invalid input types: a = ", a, ", b = ", b);
    return 0; // Or throw an error
  }
}

let result1 = addSafe(1, 2); // Correct usage
let result2 = addSafe(1, "2"); // Safe handling of type mismatch