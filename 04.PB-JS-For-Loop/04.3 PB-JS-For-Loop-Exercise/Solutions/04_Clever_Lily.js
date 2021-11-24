function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let amount = 10;
    let currentAmount = 0;
    let toys = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            currentAmount += amount;
            amount += 10;
            currentAmount -= 1;
        } else {
            toys++;
        }
    }
    let totalAmount = toys * toyPrice + currentAmount;
    let diff = Math.abs(totalAmount - washingMachinePrice);

    if (totalAmount >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
cleverLily(["10",
    "170.00",
    "6"]);