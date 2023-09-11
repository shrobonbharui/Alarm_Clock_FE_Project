var alarmString = null;

// Audio sound
const alarmAudio = new Audio ('https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav');

// Select DOM element
//create-alarm id
const createAlarm = document.querySelector(".create-alarm");
//alarm container
const activeAlarm = document.getElementById("active-alarm");
// clear button
const clearAlarm = document.getElementById("clear-alarm");
//active alarm text
const alarmTextContainer = document.getElementById("alarm-text");

const alarmText = (time) => `Alarm set at time ${time}`;

// Handle Create Alarm submit
const handleSubmit = (event) => {
  // Prevent default action of reloading the page
  event.preventDefault();
  const { hour, minute, second, amORpm } = document.forms[0];
  alarmString = getTimeString({
    hours: hour.value,
    minutes: minute.value,
    seconds: second.value,
    am_pm: amORpm.value
  }); 

  // Reset form after submit
  document.forms[0].reset();
  // Hide create alarm
  createAlarm.style.display = "none";
  // show active alarm with text
  activeAlarm.style.display = "block";
  alarmTextContainer.innerHTML = alarmText(alarmString);
};

const handleClear = () => {
  alarmString = "";
  activeAlarm.style.display = "none";
  createAlarm.style.display = "block";
};

// Trigger handleClear on button click
clearAlarm.addEventListener("click", handleClear);

// Attach submit event to the form
document.forms[0].addEventListener("submit", handleSubmit);

// Function to check if alarm needs to be triggered
const checkAlarm = (timeString) => {
  if (alarmString === timeString) {
    alarmAudio.play();
  }
};

// Function to convert time to string value
const getTimeString = ({ hours, minutes, seconds, am_pm }) => {
  if (minutes / 10 < 1) {
    minutes = "0" + minutes;
  }
  if (seconds / 10 < 1) {
    seconds = "0" + seconds;
  }
  return `${hours}:${minutes}:${seconds} ${am_pm}`;
};

// Function to display current time
const renderTime = () => {
  var currentTime = document.getElementById("current-time");
  const currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  var am_pm = hours >= 12 ? "PM" : "AM";
  if (hours > 12) {
    hours = hours % 12;
  }
  const timeString = getTimeString({ hours, minutes, seconds, am_pm });
  checkAlarm(timeString);
  currentTime.innerHTML = timeString;
};

// Update time every second
setInterval(renderTime, 1000);