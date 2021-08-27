// alert("Welcome to our JavaScript Digital Clock application");

var applicationState = "stopped";
var t;

function changeDate(){
    var date = new Date();

    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday = ( hour >= 12) ? "PM" : "AM";

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    var currentDay = days[date.getDay()];
    var day = date.getDay();
    var currentMonth = months[date.getMonth()];
    var year = date.getFullYear();

    var date = currentDay + " " + day + " - " + currentMonth + " - " + year;

    
    document.getElementById("date-value").innerText = date;



    document.getElementById("time-value").innerText = hour + " : " + minutes + " : " + seconds + " " + midday;

    t = setTimeout(changeDate, 1000);
}

//START APPLICATION
// changeDate();
document.getElementById("start").addEventListener("click", function(e){

    if( applicationState == "stopped") {
        changeDate();
        applicationState = "running";
        e.target.innerText = "Stop";
        document.getElementsByClassName('indicator')[0].style.backgroundColor = "green";

    } else if( applicationState == "running") {
        clearTimeout(t)
        applicationState = "stopped";
        e.target.innerText = "Start";
        document.getElementsByClassName('indicator')[0].style.backgroundColor = "red";

    }
});




function printName ( name ) {
    alert ( name )
}


if (hour < 12) {
    greeting = "Good morning";
} else {
    greeting = "Good day"
}