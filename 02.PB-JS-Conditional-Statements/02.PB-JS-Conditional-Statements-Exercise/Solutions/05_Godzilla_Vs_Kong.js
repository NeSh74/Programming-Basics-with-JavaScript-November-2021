function filmProduction(input) {
    let filmBudget = Number(input[0]);
    let statistCount = Number(input[1]);
    let statistClothPrice = Number(input[2]) * statistCount;

    let decorPrice = filmBudget * 0.10;

    if (statistCount > 150) {
        statistClothPrice *= 0.90;
    }
    let costs = decorPrice + statistClothPrice;
    let diff = Math.abs(costs - filmBudget);

    if (filmBudget >= costs) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }
}
filmProduction(["9587.88",
"222",
"55.68"]);
