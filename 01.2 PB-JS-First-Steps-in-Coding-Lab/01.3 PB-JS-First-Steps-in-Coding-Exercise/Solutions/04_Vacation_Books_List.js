function vacationBookList(input)
{
    let countPages = Number(input[0]);
    let readedPagesForHour = Number(input[1]);
    let daysNeededToRead = Number(input[2]);

    let totalTime = countPages / readedPagesForHour;
    let neededHoursPerDay =  totalTime / daysNeededToRead;

    console.log(neededHoursPerDay);

}

vacationBookList(["212","20","2"]);