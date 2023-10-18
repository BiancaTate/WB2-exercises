"use strict"

//Overtime = payRate*1.5*extraHours 
//Gross pay = payRate * hoursWorked 
//extraHours= hoursWorked-40

// if housWorked > 40
//      hoursWorked-40=extraHours
//      overtime calulations
//      log gross Pay + overtime
//else 
// console.log(grossPay)

let payRate = 17.30
let hoursWorked = 45 
let extraHours = hoursWorked - 40
let grossPay = payRate * (hoursWorked-extraHours)
let overTime = payRate *1.5* extraHours

if (hoursWorked> 40){
  
    console.log(overTime+grossPay)
}
else{
    console.log(grossPay)
}

console.log(grossPay)
console.log(overTime)