# 🎉 Eventz — Event Booking Web App

Eventz is a clean and modern event booking web app that allows users to browse events by category, view event details, book tickets, and manage their profile — all with a responsive design and dynamic JavaScript logic.

## 📁 Project Features

- ✅ Sign Up / Login system with `localStorage`
- ✅ Password toggle and spinner on loading
- ✅ Dynamic event details (title, image, date, time, price)
- ✅ Category filtering (e.g., Tech, Music, Art, etc.)
- ✅ Bookmarked events with toggle save/unsave
- ✅ Payment system (Card & Bank)
- ✅ Protected pages (profile, booking, event details)
- ✅ Modal for logout confirmation
- ✅ Clean, modern UI with Bootstrap 5 and Font Awesome



## 🧩 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Font Awesome Icons
- LocalStorage for user data and bookmarks



## 📁 File Structure

```
eventz/
├── index.html              # Home / Landing Page
├── login.html              # Login Page
├── signup.html             # Sign Up Page
├── forgot-password.html    # Forgot Password Page
├── categories.html         # All Categories Page
├── event-details.html      # Dynamic Event Details
├── booking.html            # Payment Page
├── profile.html            # User Profile
├── settings.html           # Settings & Logout Modal
├── js/
│   ├── main.js             # General logic
│   ├── login.js            # Login logic
│   ├── signup.js           # Sign Up logic
│   ├── booking.js          # Booking logic
│   └── settings.js         # Settings logic
├── css/
│   └── style.css           # Custom styling
├── images/                 # Event and category images
└── README.md               # This file
```



## 🔐 Authentication System

- Sign Up and Login forms simulate real authentication using `localStorage`
- ✅ On login/signup, user data is stored as:
  ```js
  {
    isLoggedIn: true,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com"
  }
  ```
- ✅ Protected pages check login status:
  ```js
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || !user.isLoggedIn) {
    window.location.href = 'login.html';
  }
  ```



## 📅 Event System

- Each event card is dynamic and links to `event-details.html?event=tech1`
- ✅ Event details are loaded from `events.js` based on the URL parameter
- ✅ Users can bookmark events using:
  ```js
  const bookmarkedEvents = JSON.parse(localStorage.getItem('bookmarkedEvents')) || [];
  ```



## 💳 Booking System

- ✅ "Book Now" button shows a spinner before redirecting
- ✅ Supports:
  - Card payment with:
    - Card number
    - Expiry date
    - CVV
    - 4-digit PIN confirmation
  - Bank payment with:
    - Bank selection
    - Account number input
- ✅ Discount code input updates total dynamically



## 🧾 Settings & Profile

- ✅ Profile page shows and allows editing of name, username, and email
- ✅ Settings page includes:
  - Password change
  - Notification preferences
  - Bookmarked events list
- ✅ Bootstrap modal asks for confirmation before logging out



## 🧪 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/masha-a-m/eventz.git
   ```
2. Open any HTML file in your browser
3. Or use a local server:
   ```bash
   cd eventz
   npx serve
   ```



## 📦 How to Use

| Action | Description |
|-------|-------------|
| 👤 Sign Up | Create a new account |
| 🔐 Login | Access your saved events |
| 📁 Categories | Browse events by type |
| 📎 Event Details | View full event info |
| 💳 Book Now | Go to payment page |
| 📝 Profile | Edit your details |
| ⚙️ Settings | Change password, manage bookmarks |
| 📤 Logout | Secure logout with confirmation



## 📄 License

MIT License — see `LICENSE` for details.



## 📬 Contact

Have questions or feedback?  
📧 Reach out at: your.email@example.com  
🔗 GitHub: [github.com/your-username/eventz](https://github.com/masha-a-m/eventz)