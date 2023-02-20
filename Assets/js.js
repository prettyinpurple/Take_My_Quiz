var timeE1 = document.querySelector(".time");

var timeLeft = 75;

function Timer()  {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeE1.textContent = timeLeft + ":";

      if(timeLeft === 0)  {
        clearInterval(timerInterval);

        sendMessage();
      }
    }, 1000);


    }