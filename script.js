// Select the button element
const button = document.getElementById('colorButton');

// Add a click event listener
button.addEventListener('click', () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
    // Change the button's background color
    button.style.backgroundColor = randomColor;

    // Update the button text
    button.textContent = `Color: ${randomColor}`;
});
