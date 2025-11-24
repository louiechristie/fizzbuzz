const FizzBuzzInputChecker = (number: number) => {
  if(!Number.isSafeInteger(number)) throw new Error(`Number is not a Safe Integer: ${number}`);
  
  return number;
}

export default FizzBuzzInputChecker
