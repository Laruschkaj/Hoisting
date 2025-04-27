/* Task 1: Declare a Destination Variable */
let destination = "Ancient Egypt";
console.log(`Destination: ${destination}`);

/* Task 2: Change the Destination */
destination = "Medieval Europe";
console.log(`New Destination: ${destination}`);

/* Task 3: Declare a Constant Travel Date */
const travelDate = "2030-03-15";
console.log(`Travel Date: ${travelDate}`);
/*
 Observations:
 The above attempt to reassign a new value to "travelDate" will result in a TypeError. This is because "const" declarations are read-only and cannot be reassigned after their initial assignment.
 */

/* Task 4: Experiment with Variable Hoisting */
console.log(`Time Machine Model: ${timeMachineModel}`);
var timeMachineModel = "T-800";
/*
 * Observations:
The console.log statement prints "undefined" instead of throwing a ReferenceError. This is due to variables being hoisted or lifted to the top of the their scope. The assignment happens after the cosnole.log. 
 */

