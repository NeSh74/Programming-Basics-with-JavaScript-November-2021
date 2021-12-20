function vacation(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let totalDays = 0;
    let totalSpentDays = 0;

    while (money < needMoney) {
        let command = input[index];
        index++;
        let currentMoney = Number(input[index]);
        index++;
        totalDays++;

        switch (command) {
            case "save":
                money += currentMoney;
                totalSpentDays = 0;
                break;
            case "spend":
                totalSpentDays++;
                money -= currentMoney;
                if (money < 0) {
                    money = 0;
                }
        }
        if (totalSpentDays === 5) {
            console.log("You can't save the money.");
            console.log(totalDays);
            break;
        }
    }
    if (money >= needMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])