// Variable Lookup
// {} - code block
const gloableNumber = 5;

function add(num1, num2) {
 const gloableNumber = 7;
 const result = num1 + num2 + gloableNumber;

 function multiply() {
  const gloableNumber = 10;
  const multiplyResult = result * gloableNumber;
  console.log("multiplyResult ", multiplyResult);
 }
 multiply();
 return result;

}
console.log(add(2, 3));