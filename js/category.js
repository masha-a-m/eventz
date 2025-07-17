let activeCategory = 'all';

function filterCategory(element, category) {
  document.querySelectorAll('.filter-item').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
  activeCategory = category;
  filterEvents();
}

function toggleFilters() {
  const filterBar = document.getElementById('filterBar');
  filterBar.classList.toggle('d-none');
}

function filterEvents() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('#eventList .col-md-4');

  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const cardCategory = card.getAttribute('data-category');

    const matchesSearch = title.includes(query);
    const matchesFilter = activeCategory === 'all' || cardCategory === activeCategory;

    card.style.display = (matchesSearch && matchesFilter) ? 'block' : 'none';
  });
}

// Search input listener
document.getElementById('searchInput').addEventListener('input', filterEvents);




  // Get category from URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category') || 'all';

  // Highlight active filter
  document.querySelectorAll('.filter-item').forEach(item => {
    if (item.getAttribute('data-category') === category) {
      item.classList.add('active');
    }
  });

  // Filter events
  document.querySelectorAll('#eventList .col-md-4').forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
