// Scroll to top
document.querySelector('a[href="#"]').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Datepicker (example for filters)
document.addEventListener('DOMContentLoaded', function () {
  $('.datepicker').datepicker();
});


//book now button functionality
  function handleBooking() {
  // Check localStorage for login state
  const user = localStorage.getItem('user');

  if (user) {
    // Parse the user data
    const userData = JSON.parse(user);

    // Check if user is logged in
    if (userData.isLoggedIn) {
      // Show the modal
      const modal = new bootstrap.Modal(document.getElementById('eventModal'));
      modal.show();
    } else {
      // If not logged in, redirect to signup
      window.location.href = "signup.html";
    }
  } else {
    // No user found in localStorage
    window.location.href = "signup.html";
  }
}

//toggle password 
document.addEventListener('DOMContentLoaded', function () {
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');

  togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  });
});


// Form validation, save data to localStorage, loading spinner
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop form from submitting normally

  const fullName = document.getElementById('fullName').value.trim();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Save user data (example)
  const userData = {
    name: fullName,
    username: username,
    email: email,
    isLoggedIn: true
  };

  localStorage.setItem('user', JSON.stringify(userData));

  // Hide entire body content
  document.body.style.display = 'none';

  // Show fullscreen spinner
  const spinnerOverlay = document.getElementById('spinnerOverlay');
  spinnerOverlay.classList.remove('d-none');

  // Simulate loading delay before redirect
  setTimeout(() => {
    window.location.href = 'landing-page-signedin.html'; // or dashboard.html
  }, 2000); // 2 seconds delay
});




// // Login form submission with spinner and redirect
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const spinner = document.getElementById('spinnerOverlay');

  // Show spinner
  spinner.classList.remove('d-none');

  // Hide body content
  document.body.style.display = 'none';

  // Simulate login delay
  setTimeout(() => {
    // Save login status in localStorage
    localStorage.setItem('user', JSON.stringify({
      isLoggedIn: true,
      username: document.getElementById('loginUsername').value
    }));

    // Redirect
    window.location.href = 'landing-page-signedin.html';
  }, 2000);
});