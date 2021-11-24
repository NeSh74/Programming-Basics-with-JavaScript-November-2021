function tennisRanklist(input) {
    let index = 0;
    let countTournaments = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;

    let temPoints = 0;
    let countWins = 0;

    for (i = 0; i < countTournaments; i++) {
        let res = input[index];
        index++;

        switch (res) {
            case "W": temPoints += 2000; countWins++; break;
            case "F": temPoints += 1200; break;
            case "SF": temPoints += 720;
        }
    }
    let finalPoints = startPoints + temPoints;
    let averPoints = temPoints / countTournaments;
    let win = countWins/countTournaments *100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averPoints)}`);
    console.log(`${win.toFixed(2)}%`)
}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
