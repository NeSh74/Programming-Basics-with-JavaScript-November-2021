function shopping(input) {
    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCounts = Number(input[3]);

    let amountOfVideoCards = videoCardsCount * 250;
    let processorsAmount = (amountOfVideoCards * 0.35) * processorsCount;
    let ramAmount = (amountOfVideoCards * 0.10) * ramCounts;

    let totalAmount = amountOfVideoCards + processorsAmount + ramAmount;

    if (videoCardsCount > processorsCount) {
        totalAmount *= 0.85;
    }
    let diff = Math.abs(budget - totalAmount)
    if (budget >= totalAmount) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}
shopping(["920.45",
    "3",
    "1",
    "1"]);