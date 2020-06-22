function doMath(){
    let getNum1 = document.getElementById("num1").value;
    let getNum2 = document.getElementById("num2").value;
    let getMathOperator = document.getElementById("math").value;
    let result;

    if(getMathOperator =="add"){
        result = Number(getNum1) + Number(getNum2);
    }else if(getMathOperator == "subtract"){
        result = Number(getNum1) - Number(getNum2);
    }else if(getMathOperator == "divide"){
        result = Number(getNum1) / Number(getNum2);
    }else if(getMathOperator == "multiply") {
        result = Number(getNum1) * Number(getNum2);
    }

    document.getElementById("printResults").innerHTML = result;
}