function numberInRange(input) {
    let number = Number(input[0]);
    let output = "";

    if(number >= -100 && number !== 0 && number <= 100){
        output = "Yes";
    }
    else{
        output = "No";
    }
    console.log(output);
}
numberInRange(["0"])