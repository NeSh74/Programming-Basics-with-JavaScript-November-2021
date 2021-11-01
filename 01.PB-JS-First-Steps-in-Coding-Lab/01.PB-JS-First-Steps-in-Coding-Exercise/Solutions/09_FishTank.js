function fishTank(input)
{
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let percentage = Number(input[3]);

    let volumе = (a * b * c) *0.001;
    let neededLitters = volumе - (volumе * (percentage / 100));

    console.log(neededLitters);
}

fishTank(["85", "75", "47", "17"]);