const Convert = (number: number) => {
  if (Number.isInteger(number / 3)) return "Fizz"; // more readable than using % modulus
  if (number === 5) return "Buzz";

  return number.toString();
};

export default Convert;
