//your JS code here. If required.
function updateTimer() {
            const timerElement = document.getElementById("timer");
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            timerElement.textContent = `${formattedDate} ${formattedTime}`;
        }

        // Update the timer every second
        setInterval(updateTimer, 1000);

        // Initial update
        updateTimer();
