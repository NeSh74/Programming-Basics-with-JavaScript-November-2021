function yardGreening([yard])
{
    let price = Number(yard * 7.61);
    let discount = Number(price * 0.18);
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);