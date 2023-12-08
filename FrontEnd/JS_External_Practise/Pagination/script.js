const itemsPerPage = 5; // Number of items per page
const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`); // Sample data

function displayData(currentPage) {
  const container = document.getElementById('data-container');
  container.innerHTML = '';

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  for (let i = start; i < end; i++) {
    if (data[i]) {
      const listItem = document.createElement('li');
      listItem.textContent = data[i];
      container.appendChild(listItem);
    }
  }
}

function setupPagination() {
  const paginationContainer = document.getElementById('pagination');
  const pageCount = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = i;
    listItem.appendChild(link);

    link.addEventListener('click', (event) => {
      event.preventDefault();
      setCurrentPage(i);
    });

    paginationContainer.appendChild(listItem);
  }
}

function setCurrentPage(page) {
  const paginationItems = document.querySelectorAll('#pagination li');
  paginationItems.forEach((item, index) => {
    if (index + 1 === page) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  displayData(page);
}

// Initial setup
setupPagination();
setCurrentPage(1);
