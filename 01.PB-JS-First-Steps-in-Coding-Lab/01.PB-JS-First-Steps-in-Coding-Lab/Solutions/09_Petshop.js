function zooShop([dogFood, catFood])
{
    let dogTotalAmount = 2.50 * dogFood;
    let catTotalAmount = 4 * catFood;
    let totalAmount = catTotalAmount + dogTotalAmount;
    console.log(`${totalAmount} lv.`)
}

zooShop(["13", "9"]);