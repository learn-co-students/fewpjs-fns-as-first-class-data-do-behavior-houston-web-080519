/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  time = time.replace(":", "");
  console.log(time);
  if(parseInt(time, 10) < 1200){
    return "Good Morning";
  } else if(parseInt(time, 10) > 1200 && parseInt(time, 10) < 1700){
    return "Good Afternoon";
  } else if(parseInt(time, 10) > 1700){
    return "Good Evening";
  };

};
/* Write your implementation of displayMessage() */

function displayMessage(string){
  let dude = document.getElementById("greeting");
  dude.innerText = string;
}