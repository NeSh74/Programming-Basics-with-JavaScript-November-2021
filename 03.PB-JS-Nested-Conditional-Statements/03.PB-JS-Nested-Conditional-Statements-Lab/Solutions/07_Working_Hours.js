function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];
    let output = "";

    if((hour >= 10 && 
        hour < 18 ) && 
        (day === "Monday" || 
        day === "Tuesday" || 
        day === "Wednesday" || 
        day === "Thursday" || 
        day === "Friday" ||
        day === "Saturday")){
            output = "open";
    }else{
        output = "closed";
    }
    console.log(output);
}
workingHours(["19",
"Friday"])

