function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishersCount = Number(input[2]);

    let amount = 0;

    if (season == "Spring") {
        if (fishersCount <= 6) {
            amount = 3000 * 0.90;
        } else if (fishersCount >= 7 && fishersCount <= 11) {
            amount = 3000 * 0.85;
        } else if (fishersCount >= 12) {
            amount = 3000 * 0.75;
        }
    } else if (season == "Summer" || season == "Autumn") {
        if (fishersCount <= 6) {
            amount = 4200 * 0.90;
        } else if (fishersCount >= 7 && fishersCount <= 11) {
            amount = 4200 * 0.85;
        } else if (fishersCount >= 12) {
            amount = 4200 * 0.75;
        }
    } else if (season == "Winter") {
        if (fishersCount <= 6) {
            amount = 2600 * 0.90;
        } else if (fishersCount >= 7 && fishersCount <= 11) {
            amount = 2600 * 0.85;
        } else if (fishersCount >= 12) {
            amount = 2600 * 0.75;
        }
    }
    if (fishersCount % 2 == 0 && season != "Autumn") {
        amount *= 0.95;
    }

    let diff = Math.abs(budget - amount);

    if (budget >= amount) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["3000",
    "Summer",
    "11"])
