function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    i = 1;
    let badGradeCounter = 0;
    let sumGrade = 0;

    while (i <= 12) {
        let tempGrade = Number(input[index]);
        index++;
        if (tempGrade < 4) {
            badGradeCounter++;
            if (badGradeCounter >= 2) {
                break;
            }
            continue;
        }
        sumGrade += tempGrade;
        i++;
    }
    let average = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])