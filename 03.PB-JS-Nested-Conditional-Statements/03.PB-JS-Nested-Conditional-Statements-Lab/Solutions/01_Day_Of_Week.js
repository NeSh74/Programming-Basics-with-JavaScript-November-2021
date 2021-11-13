function dayOfWeek(input){
    let numOfWeek = Number(input[0]);   
    let dayOfWeek = "";
    switch(numOfWeek){
    case 1:
    dayOfWeek = "Monday";
    break;
    case 2:
    dayOfWeek = "Tuesday";
    break;
    case 3:
    dayOfWeek = "Wednesday";
    break;
    case 4:
    dayOfWeek = "Thursday";
    break;
    case 5:
    dayOfWeek = "Friday";
    break;
    case 6:
    dayOfWeek = "Saturday";
    break;
    case 7:
    dayOfWeek = "Sunday";
    break;
    default:
    dayOfWeek = "Error";
    break;
        }
        console.log(dayOfWeek)
}
dayOfWeek(["7"]);