function sumOfTwoNumbers(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let targetNum = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let i = firstNum; i <= lastNum; i++) {
        for (let j = firstNum; j <= lastNum; j++) {
            counter++;
            if (i + j === targetNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${targetNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${targetNum}`);
    }
}
sumOfTwoNumbers(["23",
    "24",
    "20"])