document.getElementById('forgotPasswordForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const spinner = document.getElementById('spinnerOverlay');
  const successMessage = document.getElementById('successMessage');

  // Show spinner
  spinner.classList.remove('d-none');
  document.body.style.display = 'none';

  // Simulate API delay
  setTimeout(() => {
    // Hide spinner
    spinner.classList.add('d-none');

    // Show success message
    successMessage.classList.remove('d-none');

    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 3000);
  }, 2000);
});