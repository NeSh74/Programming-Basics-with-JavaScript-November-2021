function sumSeconds(input) {
    let s1 = Number(input[0]);
    let s2 = Number(input[1]);
    let s3 = Number(input[2]);

    let sumSeconds = s1 + s2 + s3;
    let minutes = Math.floor(sumSeconds / 60);
    let seconds = sumSeconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}
sumSeconds(["35",
    "45",
    "44"]);
