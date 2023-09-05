
//string value of current active alarm
let alarmString = null;

// handle create Alarm submit
const handleSubmit = (event) => {
    // Prevent default action of reloading the page
    event.preventDefault();
    const {hour, second, minute, amORpm} = document.forms[0];
    alarmString = getTimeString({
        hours: hour.value,
        minutes: minute.value,
        seconds: second.value,
        am_pm: amORpm.value
    });

    // reset form after submit
    document.forms[0].reset();
};
// atach submit even to the form
document.forms[0].addEventListener("submit", handleSubmit);




// convert time to string value
const getTimeString = ({hours, minutes, seconds, am_pm}) => {
    if (hours/10 < 1){
        hours ="0"+hours;
    }
    if (minutes/10 < 1){
        minutes ="0"+minutes;
    }
    if (seconds/10 < 1){
        seconds ="0"+seconds;
    }
    return `${hours}:${minutes}:${seconds}:${am_pm}`
}

// display current time on screen function
const renderTime = ()=>{
    let currentTime = document.getElementById("current-time");
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let am_pm = hours >= 12 ? "Pm" : "Am";
    if(hours > 12){
        hours = hours % 12;
    };
    const timeString = getTimeString({ hours, minutes, seconds, am_pm});
    currentTime.innerHTML = timeString;
};

// update time 
setInterval(renderTime, 1000);