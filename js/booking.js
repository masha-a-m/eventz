// booking.js

document.addEventListener('DOMContentLoaded', function () {
  const cardFields = document.getElementById('cardFields');
  const bankFields = document.getElementById('bankFields');
  const payBtn = document.getElementById('payBtn');
  const successMessage = document.getElementById('successMessage');

  const subtotal = 40;
  const subtotalDisplay = document.getElementById('subtotal');
  const discountDisplay = document.getElementById('discountAmount');
  const totalDisplay = document.getElementById('totalAmount');

  // Toggle payment methods
  document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
    radio.addEventListener('change', function () {
      if (this.id === 'card') {
        cardFields.classList.remove('d-none');
        bankFields.classList.add('d-none');
        payBtn.textContent = 'Pay $40';
      } else {
        cardFields.classList.add('d-none');
        bankFields.classList.remove('d-none');
        payBtn.textContent = 'Pay via Bank';
      }
    });
  });

  // Apply Discount Code
  const discountCode = document.getElementById('discountCode');
  const applyBtn = document.getElementById('applyBtn');

  applyBtn.addEventListener('click', function () {
    const code = discountCode.value.trim();
    let discount = 0;

    // Simulate discount
    if (code === 'SAVE10') {
      discount = 10;
      discountDisplay.textContent = `-$${discount}`;
      totalDisplay.textContent = `$${subtotal - discount}`;
      applyBtn.classList.remove('btn-outline-secondary');
      applyBtn.classList.add('btn-brown');
    } else {
      discountDisplay.textContent = '-$0';
      totalDisplay.textContent = `$${subtotal}`;
      applyBtn.classList.remove('btn-brown');
      applyBtn.classList.add('btn-outline-secondary');
    }
  });

  // Handle Pay Now
  payBtn.addEventListener('click', function () {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    if (paymentMethod === 'card') {
      // Show PIN field
      const cardFields = document.getElementById('cardFields');
      cardFields.innerHTML = `
        <div class="mb-3 text-center">
          <p class="mb-3">Enter your 4-digit PIN to confirm this payment</p>
          <div class="d-flex justify-content-center gap-2 mb-3">
            <input type="password" maxlength="1" class="form-control pin-input" style="width: 50px; text-align: center;" oninput="moveCursor(this, event)">
            <input type="password" maxlength="1" class="form-control pin-input" style="width: 50px; text-align: center;" oninput="moveCursor(this, event)">
            <input type="password" maxlength="1" class="form-control pin-input" style="width: 50px; text-align: center;" oninput="moveCursor(this, event)">
            <input type="password" maxlength="1" class="form-control pin-input" style="width: 50px; text-align: center;" oninput="moveCursor(this, event)">
          </div>
        </div>
        <button class="btn btn-brown w-100 mt-3" onclick="confirmPayment()">Confirm Payment</button>
      `;
    } else {
      // Bank method
      cardFields.innerHTML = `
        <p>You’ve selected Bank Transfer. Please follow the instructions to complete your payment.</p>
        <button class="btn btn-brown w-100 mt-3" onclick="confirmPayment()">Confirm Payment</button>
      `;
    }
  });

  // Move cursor to next input in PIN
  window.moveCursor = function (element, event) {
    const inputs = document.querySelectorAll('.pin-input');
    const index = [...inputs].indexOf(element);
    const next = inputs[index + 1];
    const value = element.value;

    if (value.length === 1 && next) {
      next.focus();
    }
  };

  // Show success message after PIN
  window.confirmPayment = function () {
    const pinInputs = document.querySelectorAll('.pin-input');
    const pin = [...pinInputs].map(i => i.value).join('');

    if (pin.length === 4 || document.querySelector('input[name="paymentMethod"]:checked').value === 'bank') {
      document.querySelector('section.py-5').classList.add('d-none');
      successMessage.classList.remove('d-none');
    }
  };
});



// Toggle bank dropdown
function toggleBankDropdown() {
  const dropdown = document.getElementById("bankDropdown");
  const arrow = document.getElementById("bankArrow");

  const isVisible = !dropdown.classList.contains("d-none");
  dropdown.classList.toggle("d-none", isVisible);
  arrow.classList.toggle("fa-chevron-down", !isVisible);
  arrow.classList.toggle("fa-chevron-right", isVisible);
}

// Select bank and show account number field
function selectBank(bankName) {
  document.getElementById("bankSelect").value = bankName;
  document.getElementById("bankAccountField").classList.remove("d-none");
  document.getElementById("confirmBankBtn").classList.remove("d-none");
}



  window.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');

    if (eventId && eventData[eventId]) {
      const event = eventData[eventId];

      document.getElementById("bookNowBtn").setAttribute("href", `book-event.html?event=${eventId}`);

      // Update event info
      document.getElementById("eventTitle").textContent = event.title;
      document.getElementById("eventImage").src = event.image;
      document.getElementById("eventPrice").textContent = event.price;
      document.getElementById("subtotal").textContent = event.price;

      // Set initial total
      document.getElementById("totalAmount").textContent = event.price;
    } else {
      // Fallback
      const orderSummary = document.querySelector('.col-md-4');
      orderSummary.innerHTML = `
        <div class="text-center py-4">
          <p class="text-muted">Event not found</p>
          <a href="index.html" class="btn btn-success">Go Back</a>
        </div>`;
    }
  });



  // Apply discount
  document.getElementById("applyBtn").addEventListener("click", function () {
    const code = document.getElementById("discountCode").value.trim();
    let discount = 0;

    // Simulate discount
    if (code === "SAVE10") {
      discount = 10;
    }

    const subtotal = parseFloat(document.getElementById("subtotal").textContent.replace('$', ''));
    const total = subtotal - discount;

    document.getElementById("discountAmount").textContent = `-$${discount}`;
    document.getElementById("totalAmount").textContent = `$${total}`;
  });
