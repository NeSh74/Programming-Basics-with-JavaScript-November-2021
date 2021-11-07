function speedInfo(input){
    let speedData = Number(input[0]);

    if(speedData <= 10 ){
        console.log("slow");
    }else if(speedData <= 50){
        console.log("average");
    }else if(speedData <= 150){
        console.log("fast");
    }else if(speedData <= 1000)     {
        console.log("ultra fast");
    }else {
        console.log("extremely fast");
    }
}
speedInfo(["3500"]);