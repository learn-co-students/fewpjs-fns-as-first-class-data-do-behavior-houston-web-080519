/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time_string){
	let currentTime = parseInt(time_string, 10);
	if (currentTime < 12){
		return 'Good Morning'
	} else if (currentTime > 12 && currentTime < 17){
		return 'Good Afternoon'
	} else {
		return 'Good Evening'
	}
		


}

function displayMessage(greeting){
	document.querySelector("#greeting").innerText = greeting
}