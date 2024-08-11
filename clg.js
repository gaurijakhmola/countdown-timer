let countdown;
let isPaused = false;
let remainingTime = 0;

const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const display = document.getElementById('display');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

// Function to update the display
function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start the countdown
startButton.addEventListener('click', () => {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    // Set remaining time in seconds
    remainingTime = minutes * 60 + seconds;

    if (remainingTime > 0 && !countdown) {
        countdown = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updateDisplay(remainingTime);
            } else {
                clearInterval(countdown);
                countdown = null;
                updateDisplay(0); // Show 00:00 when it reaches 0
            }
        }, 1000);
    }
});

// Pause the countdown
pauseButton.addEventListener('click', () => {
    if (countdown) {
        clearInterval(countdown);
        countdown = null;
    }
});

// Reset the countdown
resetButton.addEventListener('click', () => {
    clearInterval(countdown);
    countdown = null;
    remainingTime = 0;
    updateDisplay(0);
    minutesInput.value = '';
    secondsInput.value = '';
});
