function newHouse(input) {
    let flowerType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    if (flowerType == "Roses") {
        price = 5 * flowersCount;
        if (flowersCount > 80) {
            price *= 0.90;
        }
    } else if (flowerType == "Dahlias") {
        price = flowersCount * 3.80;
        if (flowersCount > 90) {
            price *= 0.85;
        }
    } else if (flowerType == "Tulips") {
        price = flowersCount * 2.80;
        if (flowersCount > 80) {
            price *= 0.85;
        }
    } else if (flowerType == "Narcissus") {
        price = flowersCount * 3;
        if (flowersCount < 120) {
            price *= 1.15;
        }
    } else if (flowerType == "Gladiolus") {
        price = flowersCount * 2.50;
        if (flowersCount < 80) {
            price *= 1.20;
        }
    }
    let diff = Math.abs(budget-price); 
    if(budget>price){
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
        newHouse(["Roses",
            "55",
            "250"]);
