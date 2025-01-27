document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceList = document.getElementById('serviceList');
    const serviceItems = document.querySelectorAll('.service-item');
  
    // Filtro de pesquisa
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      serviceItems.forEach(item => {
        const name = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        if (name.includes(searchTerm) || description.includes(searchTerm)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  
    // Filtro por categoria
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        serviceItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });