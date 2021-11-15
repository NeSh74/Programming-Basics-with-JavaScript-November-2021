function operations(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;

    if (operator == "+") {
        result = n1 + n2;
    } else if (operator == "-") {
        result = n1 - n2;
    } else if (operator === "*") {
        result = n1 * n2;
    } else if (operator === "/" && n2 != 0) {
        result = n1 / n2;
    }
    else if (operator === "%" && n2 !=0) {
        result = n1 % n2;
    }

    if ((operator === "+" || operator === "-" || operator === "*" )&& result % 2 === 0) {
        console.log(`${n1} ${operator} ${n2} = ${result} - even`);
    } else if ((operator === "+" || operator === "-" || operator === "*") && result % 2 != 0) {
        console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
    } else if (operator === "%" && n2 !=0) {
        result = n1 % n2
        console.log(`${n1} ${operator} ${n2} = ${result}`);
    } else if(operator === "/" && n2 !==0){
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }
    else if(n2 ===0 && operator === "/"|| operator ==="%"){
        console.log(`Cannot divide ${n1} by zero`);
    }
}
operations(["10",
    "1",
    "-"])
