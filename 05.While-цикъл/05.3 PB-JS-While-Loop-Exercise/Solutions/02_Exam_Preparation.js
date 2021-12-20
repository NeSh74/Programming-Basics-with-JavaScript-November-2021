function examPrep(input) {
    let index = 0;
    let negativeGrade = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let sumGrades = 0;
    let count = 0;
    let lastTask = "";
    let countNegativeGrade = 0;
    let isNeededBreak = false;

    while (command !== "Enough") {
        let currentTask = command;
        let currentGrade = Number(input[index]);
        index++;

        if (currentGrade <= 4) {
            countNegativeGrade++;
        }

        if (countNegativeGrade === negativeGrade) {
            isNeededBreak = true;
            console.log(`You need a break, ${countNegativeGrade} poor grades.`)
            break;
        }
        sumGrades += currentGrade;
        count++;
        lastTask = currentTask;

        command = input[index];
        index++;
    }
    if (!isNeededBreak) {
        let averGrade = sumGrades / count;
        console.log(`Average score: ${averGrade.toFixed(2)}`);
        console.log(`Number of problems: ${count}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
examPrep(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])