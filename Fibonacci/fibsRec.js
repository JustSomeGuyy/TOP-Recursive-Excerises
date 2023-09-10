/* eslint-disable require-jsdoc */
function fibsRec(n) {
  if (n == 1 || n == 0) {
    return n;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
  }
}

fibsRec(7);
