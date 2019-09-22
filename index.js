/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time){
  // const timeInt = time.split(':');
  const timeInt = parseInt(time, 10)
  
  if (timeInt < 12) return 'Good Morning'
  if (timeInt < 17) return 'Good Afternoon'
  return 'Good Evening'
}

function displayMessage(x){
  document.getElementById("greeting").innerText = x;
}