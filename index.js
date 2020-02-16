/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let message = "Good Morning";
  let hourInt = timeString.split(':')[0];
  parseInt(hourInt);
  if (hourInt < 12){
  } else if (hourInt > 17) {
    message = "Good Evening";
  } else {
    message = "Good Afternoon";
  }
  return message;
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}