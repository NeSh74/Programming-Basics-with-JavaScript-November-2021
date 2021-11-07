function wordSwimmingRecord(input) {
    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeInSperM = Number(input[2]);

    let time = distanceInM * timeInSperM;
    let delay = Math.floor(distanceInM / 15) * 12.5;


    let totalTime = time + delay;
    let diff = Math.abs(recordInSec - totalTime);

    if (recordInSec > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}
wordSwimmingRecord(["55555.67",
    "3017",
    "5.03"]);



