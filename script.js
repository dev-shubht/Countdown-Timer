// Get the "Start" button element by its ID and store it in the variable 'startButton'
const startButton = document.getElementById('startButton');

// Get the input element where user enters time (in seconds) and store it in 'timeInput'
const timeInput = document.getElementById('timeInput');

// Define the function that will start the countdown timer
function startTimer() {
    // Get the value from the input field, convert it from string to integer
    let valueInSeconds = parseInt(timeInput.value);
    
    // Check if the input is not a valid number
    if (isNaN(valueInSeconds)) {
        // If not valid, show error message (assuming countdownDisplay is defined somewhere)
        countdownDisplay.innerText = 'Please enter a valid number';
        return; // Stop execution
    }

    // Check if the input is zero or negative
    if (valueInSeconds <= 0) {
        // Show message to enter a positive number
        countdownDisplay.innerText = 'Please enter a positive number';
        return; // Stop execution
    }

    // Set up a timer using setInterval that runs every 1000ms (1 second)
    const timer = setInterval(function() {
        // Decrease the countdown value by 1 each second
        valueInSeconds--;

        // Update the text on the screen to show remaining time
        countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`;

        // Check if time has run out
        if (valueInSeconds <= 0) {
            clearInterval(timer); // Stop the timer
            countdownDisplay.innerText = 'Time\'s up!'; // Show final message
        }
    }, 1 * 1000); // Delay of 1 second (1000ms)
}

// Add a click event listener to the start button
// When the button is clicked, it will call the startTimer function
startButton.addEventListener('click', startTimer);
