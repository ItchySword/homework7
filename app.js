const RESUME_BUTTON = document.getElementById("resume_button");
const NAME = "Dyllon";
const INTRO = document.getElementById("introduction");

var hasDownloadedResume = false;

showGreeting(NAME)

RESUME_BUTTON.addEventListener("click", function() {
    if(!hasDownloadedResume)
    {
        alert("Dyllon Smith's resume is downloaded successfully!");
    }
    hasDownloadedResume = true;
});

function showGreeting(name)
{
    INTRO.textContent = "Hello, my name is " + name +
        "! Welcome to my portfolio!";
}

function daysUntilDeadline(endDate) {
    // Create Date object for the current date
    let currentDate = new Date();

    // Create Date object for the end date
    let end = new Date(endDate);

    // Calculate time difference in milliseconds
    let timeDifference = end - currentDate;

    // Convert milliseconds to days and use Math.ceil to avoid fractional days
    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
}

let endDate = '2027-04-16';
let daysUntilEndDate = daysUntilDeadline(endDate);
console.log(`The number of days from today to ${endDate} is: ${daysUntilEndDate}`);
