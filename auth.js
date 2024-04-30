document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
  
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const username = registrationForm.elements['username'].value;
      const email = registrationForm.elements['email'].value;
      const password = registrationForm.elements['password'].value;
      const confirmPassword = registrationForm.elements['confirm-password'].value;
  
      // Validation
      if (!username || !email || !password || !confirmPassword) {
        displayErrorMessage('Please fill out all fields.');
        return;
      }
  
      if (password !== confirmPassword) {
        displayErrorMessage('Passwords do not match.');
        return;
      }
  
      // Mock registration logic (replace with actual registration code)
      console.log('Registration Data:', { username, email, password });
      displaySuccessMessage('Registration successful!'); // Display success message
    });
  
    function displayErrorMessage(message) {
      const errorElement = document.getElementById('error-message');
      errorElement.textContent = message;
      errorElement.style.color = 'red';
    }
  
    function displaySuccessMessage(message) {
      const successElement = document.getElementById('success-message');
      successElement.textContent = message;
      successElement.style.color = 'green';
    }
  });
  