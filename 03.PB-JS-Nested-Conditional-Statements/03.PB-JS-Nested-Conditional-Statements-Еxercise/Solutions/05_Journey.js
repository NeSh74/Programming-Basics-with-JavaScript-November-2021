function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let amount = 0;
    let accomodation;
    let destination;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            amount = budget * 0.30;
            accomodation = "Camp";
        }
        else if (season == "winter") {
            amount = budget * 0.70;
            accomodation = "Hotel";
        }
    }
    else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            amount = budget * 0.40;
            accomodation = "Camp";
        }
        else if (season == "winter") {
            amount = budget * 0.80;
            accomodation = "Hotel";
        }
    }
    else if (budget > 1000 && (season == "summer" || season == "winter")) {
        destination = "Europe";
        amount = budget * 0.90;
        accomodation = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${amount.toFixed(2)}`)
}
journey(["1500", "summer"]);