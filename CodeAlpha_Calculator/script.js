const calculationDisplay = document.querySelector('.calculation-display');
console.log(calculationDisplay);
let finalValue = ''
if(finalValue === ''){
    calculationDisplay.innerHTML = '0';
}
const addToFinalValue = (value) =>{
    finalValue = finalValue + value
    console.log(finalValue);
    calculationDisplay.innerHTML = finalValue;
}
const addToFinalValueforSigns = (value) =>{
    if(finalValue === ''){
        console.log('there has to be a number');
    }else{
        finalValue = finalValue + value
    console.log(finalValue);
    calculationDisplay.innerHTML = finalValue;
    }
}

const convertToCalculation = () =>{
    if(finalValue === ''){
        console.log("no calculation")
    }else{
 finalValue= String(eval(finalValue));
 console.log(finalValue);
 calculationDisplay.innerHTML = finalValue;
 }
}
const backspaceFinalValue = () =>{
    let newStr = finalValue.slice(0, -1);
    finalValue = newStr;
    calculationDisplay.innerHTML = finalValue;
    if(finalValue === ''){
        calculationDisplay.innerHTML = '0'
    }
}

const resetFinalValue = () =>{
    finalValue = '';
    calculationDisplay.innerHTML = '0';
}