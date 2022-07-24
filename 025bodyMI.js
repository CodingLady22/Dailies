/* 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/
function bmi(w, h) {
  let b = w / h **2
  if(b <= 18.5) {
    return "Underweight"
  } else if(b <= 25.0) {
    return "Normal"
  } else if(b <= 30.0) {
    return "Overweight"
  } else if(b > 30.0) {
    return "Obese"
  } 
  return b
}