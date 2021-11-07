function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let amount = puzzlesCount * 2.60 + dollsCount * 3 + teddyBearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let toyCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;
    if (toyCount >= 50) {
        amount *= 0.75;
    }
    amount *= 0.90;

    let diffrence = Math.abs(amount - tripPrice);

    if (amount >= tripPrice) {
        console.log(`Yes! ${diffrence.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diffrence.toFixed(2)} lv needed.`);
    }
}
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"]);












