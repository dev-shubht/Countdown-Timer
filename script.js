const startButton = document.getElementById('startButton');
const timeInput = document.getElementById('timeInput')

function startTimer(){
    let valueInSeconds = parseInt(timeInput.value);
    
    if(isNaN(valueInSeconds)) {
            countdownDisplay.innerText = 'Please enter a valid number';
            return;
    }

    if (valueInSeconds <= 0) {
        countdownDisplay.innerText = 'Please enter a positive number';
        return
    }

    const timer = setInterval(function() {
        valueInSeconds--;
        countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`;

        if (valueInSeconds <= 0) {
            clearInterval(timer);
            countdownDisplay.innerText = 'Time\'s up!';
        }
    }, 1 * 1000)
}


startButton.addEventListener('click', startTimer);