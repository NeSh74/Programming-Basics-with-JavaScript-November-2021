function bsketballEquipment(input)
{
    let annualFee = Number(input[0]);
    let sneakersPrice = annualFee * 0.60;
    let clothes = sneakersPrice * 0.80;
    let basketball = clothes / 4;
    let accessories = basketball / 5;

    let totalCosts =  annualFee + sneakersPrice + clothes + basketball + accessories;

    console.log(totalCosts);
}

bsketballEquipment(["365"]);