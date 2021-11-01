function depositCalculator(input)
{
    let depositedAmount = Number(input[0]);
    let termsOfDepost = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let interest = depositedAmount * (annualInterestRate / 100);
    let interestPerMonth = interest / 12;
    let amount = depositedAmount + termsOfDepost *interestPerMonth;

    console.log(amount);
}

depositCalculator(["200","3","5.7"]);
