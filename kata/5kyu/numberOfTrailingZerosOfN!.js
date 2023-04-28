/**
 * Write a program that will calculate the number of trailing zeros in a factorial of a given number.
 * N! = 1 * 2 * 3 *  ... * N
 * Be careful 1000! has 2568 digits...
 *
 * Examples
 * zeros(6) = 1
 * # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
 *
 * zeros(12) = 2
 * # 12! = 479001600 --> 2 trailing zeros
 * Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
 *
 * @param {number} n
 * @return {number}
 */
function zeros(n) {
  // RECURSION BASE
  if (n < 5) return 0;

  // RECURSION STEP
  const res = Math.floor(n / 5);
  return res + zeros(res);
}

console.log(zeros(0));
console.log(zeros(5));
console.log(zeros(6));
console.log(zeros(30));
