const Convert = (number: number) => {
  /*
   * Using Number.isInteger
   * (released September 2015 https://262.ecma-international.org/6.0/index.html#sec-arrow-function-definitions )
   * Because it is more readable than using the % remainder operator
   * (which is older and was available from July 2015 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder#:~:text=In%20JavaScript%2C%20the%20modulo%20operation,the%20divisor%20y%20is%200n%20 )
   */
  if (number === 15) return "FizzBuzz";
  if (Number.isInteger(number / 3)) return "Fizz";
  if (Number.isInteger(number / 5)) return "Buzz";

  return number.toString();
};

export default Convert;
