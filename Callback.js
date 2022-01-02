// Callback functions ,Higher-order functions as a first class object/citizens
// Function are first class object - stored in a variable (expression),passed as an argument to another function,return from the funtion(closure)
// Higher-order functions -accepts another funtions as an argument  or returns another  function as a result  
// callback funtion passed to a another function as an argument and executed inside that function

function Calculation(total) {
 console.log("Total of you amount is", total);
}
function Add(Cal) {
 let a = parseInt(prompt("Please Enter Value of A"))
 let b = parseInt(prompt("Please Enter Value of B"))
 let total = a + b;
 Cal(total);
}
Add(Calculation);