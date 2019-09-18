/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
  debugger
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const timeSplit = timeString.split(':')
  const hour = parseInt(timeSplit[0])
  const minute = parseInt(timeSplit[1])
  console.log(hour)
  console.log(minute)
  if(hour >= 0 && hour <= 11){
    return "Good Morning"
  }
  if(hour >= 12 && hour <= 17){
    return "Good Afternoon"
  }
  if(hour > 17 && hour < 24){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  let display = document.querySelector('#greeting')
  display.innerText = greeting 
}
