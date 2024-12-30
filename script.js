// Function to validate the login form
function validateForm(event) {
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if either field is empty
    if (username === "" || password === "") {
        // Prevent form submission if any field is empty
        event.preventDefault();
        
        // Display an error message
        displayError("Both fields are required!");
    } else {
        // If validation passes, clear any previous error message
        clearError();
    }
}

// Function to display the error message
function displayError(message) {
    const errorDiv = document.querySelector('.error-message');
    errorDiv.innerHTML = `<p>${message}</p>`;
}

// Function to clear any existing error messages
function clearError() {
    const errorDiv = document.querySelector('.error-message');
    errorDiv.innerHTML = '';
}

// Attach the validateForm function to the form submit event
document.querySelector('form').addEventListener('submit', validateForm);
