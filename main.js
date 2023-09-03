
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