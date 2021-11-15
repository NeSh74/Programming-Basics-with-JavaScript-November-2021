function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let review = input[2];

    let amount = 0;

    switch (roomType) {
        case "room for one person":
            amount = (days - 1) * 18.00;
            break;
        case "apartment":
            amount = (days - 1) * 25;
            if (days < 10) {
                amount *= 0.70;
            } else if (days >= 10 && days <= 15) {
                amount *= 0.65;
            } else if (days > 15) {
                amount *= 0.50;
            }
            break;
        case "president apartment":
            amount = (days - 1) * 35.00;
            if (days < 10) {
                amount *= 0.90;
            } else if (days >= 10 && days <= 15) {
                amount *= 0.85;
            } else if (days > 15) {
                amount *= 0.80;
            }
            break;
    }
    if(review === "positive"){
        amount*=1.25;
    }else if(review === "negative"){
        amount*=0.90;
    }
    console.log(amount.toFixed(2));
}
skiTrip(["14",
    "apartment",
    "positive"])
