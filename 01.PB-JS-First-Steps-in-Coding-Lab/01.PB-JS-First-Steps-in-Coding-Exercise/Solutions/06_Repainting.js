function repainting(input)
{
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workingHours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint*1.10) * 14.50;
    let thinnerPrice = thinner * 5.00;
    let bagPrice = 0.40;
    let totalCosts = nylonPrice + paintPrice + thinnerPrice + bagPrice;
    let workPayment = (totalCosts * 0.30) * workingHours;
    let totalAmount = totalCosts + workPayment;

    console.log(totalAmount)
} 

repainting(["10", "11", "4","8"]);