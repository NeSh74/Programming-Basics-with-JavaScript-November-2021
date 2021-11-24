function trekkingMania(input) {
    let index = 0;
    let count = Number(input[index]);
    index++;

    let musala = 0;
    let monblan = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;


    for (let i = 0; i < count; i++) {
        let countPeople = Number(input[index]);
        index++;
        total += countPeople;

        if (countPeople <= 5) {
            musala += countPeople;
        } else if (countPeople >= 6 && countPeople <= 12) {
            monblan += countPeople;
        } else if (countPeople >= 13 && countPeople <= 25) {
            kilimandzharo += countPeople;
        } else if (countPeople >= 21 && countPeople <= 40) {
            k2 += countPeople;
        } else {
            everest += countPeople;
        }
    }
    let musalaPr = musala / total * 100;
    let monblanPr = monblan / total * 100;
    let kilimandzharoPr = kilimandzharo / total * 100;
    let k2Pr = k2 / total * 100;
    let everestPr = everest / total * 100;

    console.log(musalaPr.toFixed(2) + "%");
    console.log(monblanPr.toFixed(2) + "%");
    console.log(kilimandzharoPr.toFixed(2) + "%");
    console.log(k2Pr.toFixed(2) + "%");
    console.log(everestPr.toFixed(2) + "%");
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])