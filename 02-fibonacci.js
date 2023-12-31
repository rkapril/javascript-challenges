// While Loop
function fibonacciGenerator(n) {
  output = [];

  if (n === 1) {
    output.push(0);
  } else if (n === 2) {
    output.push(0);
    output.push(1);
  } else if (n > 2) {
    output.push(0);
    output.push(1);
    while (n !== output.length) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

console.log(fibonacciGenerator(0));

// For Loop
function fibonacciGenerator(n) {
  output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else if (n > 2) {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

console.log(fibonacciGenerator(3));
