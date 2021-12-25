function numberPyramid(input) {
    let n = Number(input[0]);
    let currentNumber = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (currentNumber > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentNumber + " ";
            currentNumber++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }
}
numberPyramid(["15"]);