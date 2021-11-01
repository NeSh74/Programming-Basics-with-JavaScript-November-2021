function suppliesForSchool(input)
{
    let penPack = Number(input[0]);
    let markersPack = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);

    let penPrice = penPack * 5.80;
    let markersPrice = markersPack * 7.20;
    let detergentPrice = detergent * 1.20;

    let totalprice = penPrice + markersPrice + detergentPrice;
    let priceWithDiscount = totalprice - totalprice * (discount/100);

    console.log(priceWithDiscount);
}

suppliesForSchool(["4", "2", "5", "13"]);