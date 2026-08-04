const calculationDisplay = document.querySelector('.calculation-display');
console.log(calculationDisplay);
let finalValue = ''
const addToFinalValue = (value) =>{
    finalValue = finalValue + value
    console.log(finalValue);
    calculationDisplay.innerHTML = finalValue;
}
const convertToCalculation = () =>{
 finalValue= eval(finalValue);
 console.log(finalValue);
 calculationDisplay.innerHTML = finalValue;
 finalValue =''
}
const backspaceFinalValue = () =>{
    let newStr = finalValue.slice(0, -1);
    finalValue = newStr;
    calculationDisplay.innerHTML = finalValue;
    console.log(finalValue);
}