document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('theme-switch');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const lightModeIcon = document.getElementById('light-mode-icon');

  function toggleTheme() {
    // Toggle 'dark-mode' class on <body>
    document.body.classList.toggle('dark-mode');

    // Check if 'dark-mode' class is now applied
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Toggle visibility of theme icons based on current mode
    darkModeIcon.style.display = isDarkMode ? '' : 'none';
    lightModeIcon.style.display = isDarkMode ? 'none' : '';

    // Save the theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Debug: Log current theme state and saved preference
    console.log('Theme toggled to:', isDarkMode ? 'dark' : 'light');
    console.log('Theme preference saved:', localStorage.getItem('theme'));
  }

  // Attach click event listeners to theme icons for toggling
  darkModeIcon.addEventListener('click', toggleTheme);
  lightModeIcon.addEventListener('click', toggleTheme);

  // Initialize theme based on saved preference (default: 'light')
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (savedTheme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    toggleTheme(); // Apply 'dark-mode' if preferred theme is dark
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Target the logout link by its ID
  const logoutLink = document.getElementById('logout-link');

  // Add a click event listener to the logout link
  logoutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Perform the redirection to login.html
    window.location.href = '/index.html';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const sidebarOpen = document.getElementById('sidebar-open');
  const sidebarClose = document.getElementById('sidebar-close');

  // Function to open the sidebar
  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOpen.style.display = 'none';
    sidebarClose.style.display = 'block';
  }

  // Function to close the sidebar
  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOpen.style.display = 'block';
    sidebarClose.style.display = 'none';
  }

  // Event listener for opening sidebar
  sidebarOpen.addEventListener('click', openSidebar);

  // Event listener for closing sidebar
  sidebarClose.addEventListener('click', closeSidebar);
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.plan-container');
  if (container) {
    container.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) {
        container.scrollLeft += 100; // Adjust the value to change scroll speed
      } else {
        container.scrollLeft -= 100; // Adjust the value to change scroll speed
      }
      e.preventDefault(); // Prevent the default vertical scroll
    });
  }
});