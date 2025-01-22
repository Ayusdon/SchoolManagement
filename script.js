// Add event listener to the login button
document.getElementById('login-btn').addEventListener('click', function() {
    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    // Perform login validation and submission (replace with your actual logic)
    if (username && password) {
        // Send data to server using AJAX or other methods
        alert('Login successful!'); // Replace with actual success handling
    } else {
        alert('Please enter username and password.');
    }
});