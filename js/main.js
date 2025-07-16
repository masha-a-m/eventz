// Scroll to top
document.querySelector('a[href="#"]').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Datepicker (example for filters)
document.addEventListener('DOMContentLoaded', function () {
  $('.datepicker').datepicker();
});



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