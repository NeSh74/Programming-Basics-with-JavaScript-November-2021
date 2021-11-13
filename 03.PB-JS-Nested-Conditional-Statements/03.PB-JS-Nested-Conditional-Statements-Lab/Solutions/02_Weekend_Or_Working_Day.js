function day(input) {
    let day = input[0];
    let output = "";

    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        output = "Working day"; 
        break;
        case "Saturday":
        case "Sunday":
        output = "Weekend";
        break;
        default:
        output = "Error";
        break;
    }
    console.log(output);
}
day(["Sunday"]);