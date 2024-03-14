// This function shows the current date and time
const currentDate = new Date();
console.log(currentDate); 



// The target date for countdown
const targetDate = new Date('2024-03-14T23:59:59');
console.log(targetDate);


// Subtracts current time from target date to show remainder
const difference = targetDate - currentDate; 
console.log(difference);
// This function will calculate the time remaining and update the HTML elements accordingly
function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(difference % (1000 * 60 * 60 * 24));
  const minutes = Math.floor(difference % ((difference %  (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.floor(difference % (difference %  (1000 * 60)) / (1000 * 60));

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

}
