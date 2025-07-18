// settings.js

// Load user data
window.addEventListener('DOMContentLoaded', loadProfile);

function loadProfile() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.isLoggedIn) {
    document.getElementById("settingsName").textContent = user.name;
    document.getElementById("settingsEmail").textContent = user.email;

    document.getElementById("fullName").value = user.name;
    document.getElementById("username").value = user.username;
    document.getElementById("email").value = user.email;
  } else {
    window.location.href = 'login.html';
  }

  // Load bookmarked events
  loadBookmarkedEvents();
}

// Show section
function showSection(sectionId) {
  document.querySelectorAll('.settings-section').forEach(el => el.classList.add('d-none'));
  document.getElementById(sectionId).classList.remove('d-none');

  // Highlight active sidebar item
  document.querySelectorAll('.list-group-item').forEach(link => {
    link.classList.remove('active');
  });
  event.target.classList.add('active');
}

// Save account settings
document.getElementById("accountForm")?.addEventListener('submit', function (e) {
  e.preventDefault();

  const updatedUser = JSON.parse(localStorage.getItem('user'));
  updatedUser.name = document.getElementById("fullName").value.trim();
  updatedUser.username = document.getElementById("username").value.trim();
  localStorage.setItem('user', JSON.stringify(updatedUser));
  alert("Profile updated successfully!");
});

// Save password
document.getElementById("passwordForm")?.addEventListener('submit', function (e) {
  e.preventDefault();

  const current = document.getElementById("currentPassword").value.trim();
  const newPass = document.getElementById("newPassword").value.trim();
  const confirmPass = document.getElementById("confirmPassword").value.trim();

  if (newPass !== confirmPass) {
    alert("New passwords do not match.");
    return;
  }

  alert("Password updated successfully!");
});

// Load bookmarked events
function loadBookmarkedEvents() {
  const bookmarkedEvents = JSON.parse(localStorage.getItem('bookmarkedEvents')) || [];

  const container = document.getElementById("bookmarkedEvents");
  container.innerHTML = "";

  if (bookmarkedEvents.length === 0) {
    container.innerHTML = `<p class="text-muted">You have no bookmarked events.</p>`;
    return;
  }

  // Load event data from events.js
  bookmarkedEvents.forEach(id => {
    const event = eventData[id];

    if (event) {
      const col = document.createElement("div");
      col.className = "col-md-4";

      col.innerHTML = `
        <div class="card h-100">
          <img src="${event.image}" class="card-img-top" style="height: 150px; object-fit: cover;" />
          <div class="card-body">
            <h6>${event.title}</h6>
            <small class="text-muted">${event.category}</small>
            <p class="card-text mt-2">${event.date}<br>${event.time}</p>
            <a href="event-details.html?event=${id}" class="btn btn-success btn-sm w-100">View Details</a>
          </div>
        </div>
      `;

      container.appendChild(col);
    }
  });
}




  function confirmLogout() {
    // Clear user data from localStorage
    localStorage.removeItem('user');

    // Redirect to login page
    window.location.href = 'login.html';
  }
