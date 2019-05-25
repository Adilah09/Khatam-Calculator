function calculateDaysNeeded(){
    const pagesRead = parseInt (document.getElementById("pages").value);
    const daysNeeded = 604 / pagesRead;
    printDaysNeededToCard(daysNeeded, pagesRead);
}

function printDaysNeededToCard(daysNeeded, pagesRead) {
    let message = "If you read " + pagesRead + " page(s) a day, you will complete it in about " + daysNeeded + " day(s)";
    if (pagesRead === 0){
        message = " Please read the Quran...";
    } else if(pagesRead > 604){
        messsage = " Error! Maximum pages in Al-Quran is 604 pages";
    } else if (pagesRead < 0){
        message = " Error! Minimum page is 1 page";
    } else if (daysNeeded < 30){
        message += " Good job! Keep up the good work!";
    } else if (daysNeeded > 30){
        message += " You will do better in no time!";
    } else if (daysNeeded > 365){
        message += " You can do it!";
    }
    document.getElementById("cardContents").innerHTML = message;
}