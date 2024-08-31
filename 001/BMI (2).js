


function BMICalculator(weight, height) {
    return weight / (Math.pow(height, 2))
}



function getBMIStatus(index) {
   if(index < 19) {
    return "UNDERWEIGHT"
   }

   if(index > 25) {
    return "OVERWEIGHT"
   }

   return "NORMAL"

}




const weight    = prompt("enter your weight (kg)");
const height    = prompt("enter your height (m)");

const bmiIndex  = BMICalculator(weight,height);
const status    = getBMIStatus(bmiIndex);
alert("your bmi status is: " + status);