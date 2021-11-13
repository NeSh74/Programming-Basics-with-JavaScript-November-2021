function tradeCommission(input){
     let town = input[0];
     let amount = Number(input[1]);
     let commission = 0;

     if(town === "Sofia"){
         if(amount >= 0 && amount <= 500){
            commission =  amount * 0.05;
         }else if(amount > 500 && amount <= 1000){
            commission = amount * 0.07;
         }else if(amount > 1000 && amount <= 10000){
             commission = amount * 0.08;
         }else if(amount > 10000){
            commission =amount * 0.12;
         }
     }else if(town === "Varna"){
        if(amount >= 0 && amount <= 500){
            commission =  amount * 0.045;
         }else if(amount > 500 && amount <= 1000){
            commission = amount * 0.075;
         }else if(amount > 1000 && amount <= 10000){
             commission = amount * 0.10;
         }else if(amount > 10000){
            commission = amount *0.13;
         }
     }else if(town === "Plovdiv"){
        if(amount >= 0 && amount <= 500){
            commission =  amount * 0.055;
         }else if(amount > 500 && amount <= 1000){
            commission = amount * 0.08;
         }else if(amount > 1000 && amount <= 10000){
             commission = amount * 0.12;
         }else if(amount > 10000){
            commission = amount * 0.145;
         }
     }
     if(!commission){
            console.log("error");
        }else{
     console.log(commission.toFixed(2))}
}
tradeCommission(["Sofia",
"1500"])
