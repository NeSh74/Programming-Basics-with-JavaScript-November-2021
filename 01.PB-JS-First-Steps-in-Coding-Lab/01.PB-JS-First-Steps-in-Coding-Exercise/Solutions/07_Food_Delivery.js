function foodDelivery(input)
{
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegetarianMenuPrice = vegetarianMenu * 8.15;
    let mealAmount = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    let dessertPrice = mealAmount * 0.20;
    let deliveryPrice = 2.50;
    let totalAmount = mealAmount + dessertPrice + deliveryPrice;

    console.log(totalAmount);
}

foodDelivery(["2", "4", "3"]);