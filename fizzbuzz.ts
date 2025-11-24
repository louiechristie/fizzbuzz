const Convert = (number: number) => {
  if(!Number.isSafeInteger(number)) throw new Error(`Number is not a Safe Integer: ${number}`);

  if(number === 3) return 'Fizz';
  
  return number.toString();
}

export default Convert

