document.addEventListener("DOMContentLoaded", function () {
    // Get elements by ID
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const firstScreen = document.getElementById("first-screen");
    const secondScreen = document.getElementById("second-screen");

    // Get the smaller screen container
    const smallerScreen = document.getElementById("smaller-screen");

    // Declare boundaries variables
    let maxX, maxY;

    // Function to set initial boundaries for the smaller screen
    function setBoundaries() {
        const screenRect = smallerScreen.getBoundingClientRect();

        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Add some padding to avoid the button being too close to edges
        const padding = 50;

        // Define max boundaries for the "No" button inside the smaller screen
        maxX = screenRect.width - buttonWidth - padding; // Clamped to smaller screen width
        maxY = screenRect.height - buttonHeight - padding; // Clamped to smaller screen height
    }

    // Call the setBoundaries function once on page load
    setBoundaries();

    // Function to move the button to a random position
    function moveNoButton() {
        // Random x and y positions for the button
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Apply the new position to the "No" button
        noButton.style.position = "absolute";
        noButton.style.left = `${Math.floor(Math.random() * 310)}px`;  // Ensure it stays within bounds
        noButton.style.top = `${Math.floor(Math.random() * 170)}px`;    // Ensure it stays within bounds
        console.log(`${Math.floor(Math.random() * 310)}px`);
        console.log(`${Math.floor(Math.random() * 170)}px`);
    }

    // Functionality for the "No" button (avoid cursor movement)
    noButton.addEventListener("mouseover", moveNoButton);

    // Functionality for the "Yes" button
    yesButton.addEventListener("click", function () {
        firstScreen.style.display = "none"; // Hide the first screen
        secondScreen.style.display = "block"; // Show the second screen
    });

    // Listen for window resize event to update boundaries in case the window size changes
    window.addEventListener("resize", setBoundaries);
});
