// A general function for the Fibonacci Sequence
const arr = [];

for (let i = 0; i < 8; i += 1) {
  const answer = fib(i);
  arr.push(answer);
}

console.log(arr);
// eslint-disable-next-line require-jsdoc
function fib(n) {
  let result;
  if (n == 0 || n == 1) {
    return n;
  } else {
    for (let i = 0; i < n; i++) {
      result = n-1 + n-2;
      return result;
    }
  }
}

