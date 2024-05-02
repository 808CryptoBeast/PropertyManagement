document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const themeSwitch = document.getElementById('theme-switch');

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
      themeSwitch.style.left = '220px';
    } else {
      themeSwitch.style.left = '20px';
    }
  }

  document.querySelector('nav ul li:first-child a').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSidebar();
  });

  function toggleTheme() {
    const body = document.body;
    const slider = document.querySelector('.slider');
    slider.classList.toggle('active');
    body.classList.toggle('dark-mode');
  }

  themeSwitch.addEventListener('click', function() {
    toggleTheme();
  });

  const customizeForm = document.getElementById('customize-form');
  customizeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Reset the form
    customizeForm.reset();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Target the logout link by its ID
  const logoutLink = document.getElementById('logout-link');

  // Add a click event listener to the logout link
  logoutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Perform the redirection to login.html
    window.location.href = '/PropertManagement/index.html';
  });
});
