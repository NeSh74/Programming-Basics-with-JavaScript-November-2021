function histogram(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i < n; i++) {

        let x = Number(input[index]);
        index++;
        if (x < 200) {
            c1++;
        } else if (x < 400) {
            c2++;
        } else if (x < 600) {
            c3++;
        } else if (x < 800) {
            c4++;
        } else if (x >= 800) {
            c5++;
        }
    }
    p1 = c1 / n * 100;
    p2 = c2 / n * 100;
    p3 = c3 / n * 100;
    p4 = c4 / n * 100;
    p5 = c5 / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["3",
    "1",
    "2",
    "999"]);
