document.addEventListener('DOMContentLoaded', function() {
    // Event listener for login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission (for testing)
            // Retrieve username and password from form inputs
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // Simulate successful login
            // Redirect to dashboard
            window.location.href = 'dashboard/index.html';
        });
    }
    // Event listener for registration link click
    const registerLink = document.getElementById('register-link');
    if (registerLink) {
        registerLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            // Registration form HTML
            const registerFormHTML = `
                <form id="register-form">
                    <label for="new-username">Username:</label>
                    <input type="text" id="new-username" name="new-username" required>
                    <label for="new-email">Email:</label>
                    <input type="email" id="new-email" name="new-email" required>
                    <label for="new-password">Password:</label>
                    <input type="password" id="new-password" name="new-password" required>
                    <button type="submit">Register</button>
                </form>
            `;
            // Replace main content with registration form
            const mainContent = document.querySelector('main');
            if (mainContent) {
                mainContent.innerHTML = registerFormHTML;
                // Event listener for registration form submission
                const registerForm = document.getElementById('register-form');
                if (registerForm) {
                    registerForm.addEventListener('submit', function(event) {
                        event.preventDefault(); // Prevent form submission
                        // Retrieve form values
                        const newUsername = document.getElementById('new-username').value;
                        const newEmail = document.getElementById('new-email').value;
                        const newPassword = document.getElementById('new-password').value;
                        // Store user info (username, email, password) in localStorage
                        const userInfo = {
                            username: newUsername,
                            email: newEmail,
                            password: newPassword
                        };
                        localStorage.setItem('userInfo', JSON.stringify(userInfo));
                        // Display confirmation message (optional)
                        alert('Registration successful! You will now be redirected to the login page.');
                        // Redirect to login page
                        window.location.href = '/PropertyManagement/index.html';
                    });
                }
            }
        });
    }
});
