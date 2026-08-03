let finalValue = ''
const addToFinalValue = (value) =>{
    finalValue = finalValue + value
    console.log(finalValue);
}
const convertToCalculation = () =>{
 finalValue= eval(finalValue);
 console.log(finalValue);
 finalValue = '';
}
const backspaceFinalValue = () =>{
    let newStr = finalValue.slice(0, -1);
    finalValue = newStr;
    console.log(finalValue);
}