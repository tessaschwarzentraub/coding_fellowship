// when the submit button is clicked do math
// when x math operator is selected do x type of math and then print the result

function doMath(){
    let getNum1 = document.getElementById("num1").value;
    let getNum2 = document.getElementById("num2").value;
    let getMathOperator = document.getElementById("math").value;
    let result;

    if(getMathOperator =="add"){
        result = Number(getNum1) + Number(getNum2);
    }else if(getMathOperator == "subtract"){
        result = Number(getNum1) - Number(getNum2);
    }else if(getMathOperator == "multiply"){
        result = Number(getNum1) * Number(getNum2);
    }else if(getMathOperator == "divide"){
        result = Number(getNum1) / Number(getNum2);
    }
    
    document.getElementById("printResult").innerHTML = result;
}