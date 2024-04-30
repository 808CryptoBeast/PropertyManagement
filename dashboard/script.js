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

  const user = {
    username: 'john_doe',
    fullName: 'John Doe',
    email: 'john@example.com',
    profilePhoto: 'https://example.com/profile.jpg',
    backgroundImage: 'https://example.com/background.jpg'
  };

  function displayUserInfo(user) {
    const userDetailsDiv = document.getElementById('user-details');
    userDetailsDiv.innerHTML = `
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Full Name:</strong> ${user.fullName}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <img src="${user.profilePhoto}" alt="Profile Photo" style="max-width: 200px; border-radius: 50%;">
    `;
  }

  displayUserInfo(user);

  const customizeForm = document.getElementById('customize-form');
  customizeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const profilePhotoUrl = customizeForm.elements['profile-photo'].value;
    const backgroundImageUrl = customizeForm.elements['background-image'].value;
    user.profilePhoto = profilePhotoUrl;
    user.backgroundImage = backgroundImageUrl;
    displayUserInfo(user);
    customizeForm.reset();
  });

  const uploadBoxes = document.querySelectorAll('.upload-box');
  uploadBoxes.forEach((box) => {
    box.addEventListener('dragover', (e) => {
      e.preventDefault();
      box.classList.add('dragover');
    });

    box.addEventListener('dragleave', () => {
      box.classList.remove('dragover');
    });

    box.addEventListener('drop', (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      console.log('File dropped:', file.name);
      box.classList.remove('dragover');
    });
  });
});
