function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);

    let studio = 0;;
    let apartment = 0;


    if (month === "May" || month === "October") {
        studio = 50 * nightsCount;
        apartment = 65 * nightsCount;
        if (nightsCount > 7 && nightsCount <= 14) {
            studio *= 0.95;
        } else if (nightsCount > 14) {
            studio *= 0.70;
            apartment *= 0.90;
        }
    }
    else if (month === "June" || month === "September") {
        studio = 75.20 * nightsCount;
        apartment = 68.70 * nightsCount;
        if (nightsCount > 14) {
            studio *= 0.80;
            apartment *= 0.90;
        }
    } else if (month === "July" || month === "August") {
        studio = nightsCount * 76;
        apartment = nightsCount * 77;
        if (nightsCount > 14) {
            apartment *= 0.90;
        }
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`)
}
hotelRoom(["May",
    "15"]);
