function exam(input) {
    let examH = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalH = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let examM = examH * 60 + examMin;
    let arrivalM = arrivalH * 60 + arrivalMin;

    let m = 0;
    let h = 0;
    let diff = Math.abs(arrivalM - examM);

    if (arrivalM > examM) {
        console.log(`Late`);
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            h = Math.floor(diff / 60);
            m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        }
    } else if (arrivalM < examM - 30) {
        console.log(`Early`)
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else {
            h = Math.floor(diff / 60);
            m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
    } else {
        console.log(`On time`);
        console.log(`${diff} minutes before the start`);
    }
}
exam(["9",
    "30",
    "9",
    "50"])
