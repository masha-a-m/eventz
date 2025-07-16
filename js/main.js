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
    // Simulate logged-in check
    const isLoggedIn = false; // Change this to true if user is logged in

    if (isLoggedIn) {
      // Show the modal
      const modal = new bootstrap.Modal(document.getElementById('eventModal'));
      modal.show();
    } else {
      // Redirect to sign-up page
      window.location.href = "signup.html"; // Make sure this file exists
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
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Save user data (example)
  const userData = {
    name: fullName,
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