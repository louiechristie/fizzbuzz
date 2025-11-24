const Convert = (number: number) => {
  if(!Number.isSafeInteger(number)) throw new Error(`Number is not a Safe Integer: ${number}`);
  return number.toString();
}

export default Convert

