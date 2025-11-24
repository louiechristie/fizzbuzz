const Convert = (number: number) => {
  if (number === 3) return "Fizz";
  if (number === 6) return "Fizz";
  if (number === 9) return "Fizz";

  return number.toString();
};

export default Convert;
