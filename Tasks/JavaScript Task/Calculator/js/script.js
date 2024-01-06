// Select the display element and all buttons
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// Define special characters and initialize the output
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Function to handle button clicks and update the display
const calculate = (btnValue) => {
  // Ensure the display is in focus for a better user experience
  display.focus();

  // Switch statement to handle different button values
  switch (btnValue) {
    // If equals sign is clicked, evaluate the expression in the output
    case "=":
      output = eval(output.replace("%", "/100"));
      break;
    // If "C" is clicked, clear the output
    case "C":
      output = "";
      break;
    // If "DEL" is clicked, remove the last character from the output
    case "DEL":
      output = output.slice(0, -1);
      break;
    // For other buttons, append the value to the output if not empty
    default:
      if (output === "" && specialChars.includes(btnValue)) return;
      output += btnValue;
  }

  // Update the display with the current output
  display.value = output;
};

// Add click event listeners to all buttons, calling calculate() with the button value
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
