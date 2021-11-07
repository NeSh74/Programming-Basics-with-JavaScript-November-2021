function time(input) {
    let hour = Number(input[0]);
    let minute = Number(input[1]) + 15;

    if (minute >= 60) {
        minute -= 60;
        hour += 1;
    }
    if (hour >= 24) {
        hour = 0;
    }
    if (minute < 10) {
        console.log(`${hour}:0${minute}`)
    } else {
        console.log(`${hour}:${minute}`)
    }
}
time(["1", "46"]);