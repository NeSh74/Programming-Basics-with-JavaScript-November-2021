function lunchBreak(input){
    let filmName = input[0];
    let filmTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let relaxTime = breakTime / 4;
    let restBreakTime = breakTime - lunchTime - relaxTime;
    let diff = Math.abs(restBreakTime-filmTime);

    if(restBreakTime>=filmTime){
        console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(diff)} minutes free time.`)
    }
    else{
        console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"]);

