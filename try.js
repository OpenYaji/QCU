const toggleDropdown = (dropdown, menu, isOpen) => {
  dropdown.classList.toggle("open", isOpen);
  menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
};

// Close all open dropdowns
const closeAllDropdowns = () => {
  document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
      toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
  });
};

// Attach click event to all dropdown toggles
document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
  dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const dropdown = dropdownToggle.closest(".dropdown-container");
      const menu = dropdown.querySelector(".dropdown-menu");
      const isOpen = dropdown.classList.contains("open");
      closeAllDropdowns(); // Close all open dropdowns
      toggleDropdown(dropdown, menu, !isOpen); // Toggle current dropdown visibility
  });
});

// Attach click event to sidebar toggle buttons
document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach((button) => {
  button.addEventListener("click", () => {
      closeAllDropdowns(); // Close all open dropdowns
      document.querySelector(".sidebar").classList.toggle("collapsed"); // Toggle collapsed class on sidebar
  });
});

// Collapse sidebar by default on all screen sizes
document.querySelector(".sidebar").classList.add("collapsed");

const logoutLink = document.querySelector('.logout-link');

logoutLink.addEventListener('click', () => {
  // Redirect to index.html
  window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', function() {
  const userProfileImage = document.getElementById('userDropdownToggle');
  const dropdownContent = document.getElementById('userDropdown');

  if(userProfileImage && dropdownContent) {
      userProfileImage.addEventListener('click', function(event) {
          event.stopPropagation();
          dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      });

      document.addEventListener('click', function(event) {
          if (!userProfileImage.contains(event.target) && !dropdownContent.contains(event.target)) {
              dropdownContent.style.display = 'none';
          }
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const contentSections = document.querySelectorAll('.content-section');

  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();

          const sectionId = this.getAttribute('data-section');

          if (sectionId) {
              contentSections.forEach(section => {
                  section.classList.remove('active');
              });

              const targetSection = document.getElementById(sectionId);
              if (targetSection) {
                  targetSection.classList.add('active');
              }
          }
      });
  });
});
const toggleNightMode = document.querySelector('.toggle-night-mode');
const body = document.body;
const notificationIcon = document.querySelector('.header-icons.notification');

toggleNightMode.addEventListener('click', () => {
    body.classList.toggle('night-mode');
    toggleNightMode.classList.toggle('bx-toggle-left');
    toggleNightMode.classList.toggle('bx-toggle-right');
});

notificationIcon.addEventListener('mouseover', () => {
    notificationIcon.classList.remove('bx-bell');
    notificationIcon.classList.add('bxs-bell');
});

notificationIcon.addEventListener('mouseout', () => {
    notificationIcon.classList.remove('bxs-bell');
    notificationIcon.classList.add('bx-bell');
});

// Night Mode Toggle Hover
toggleNightMode.addEventListener('mouseover', () => {
    if (body.classList.contains('night-mode')) {
        toggleNightMode.classList.remove('bx-toggle-left');
        toggleNightMode.classList.add('bxs-toggle-left');
    } else {
        toggleNightMode.classList.remove('bx-toggle-right');
        toggleNightMode.classList.add('bxs-toggle-right');
    }
});

toggleNightMode.addEventListener('mouseout', () => {
    if (body.classList.contains('night-mode')) {
        toggleNightMode.classList.remove('bxs-toggle-left');
        toggleNightMode.classList.add('bx-toggle-left');
    } else {
        toggleNightMode.classList.remove('bxs-toggle-right');
        toggleNightMode.classList.add('bx-toggle-right');
    }
});
document.addEventListener('DOMContentLoaded', function() {
  const tableBody = document.getElementById('table-body');

  // Sample data (replace with your actual data source)
  const gradeData = [
      { subCode: 'HUM1', subject: 'Art Appreciation', midterm: 99, finals: 1, remarks: 'PASSED', instructor: 'LASQUITE, Amalia' },
      { subCode: 'CC104', subject: 'Data Structures and Algorithms', midterm: 100, finals: 1, remarks: 'PASSED', instructor: 'SAMBAJON, John Gabriel' },
      { subCode: 'PES', subject: 'Individual and Dual Sports', midterm: 100, finals: 1, remarks: 'PASSED', instructor: 'LEONARDO, Butch C.' },
      { subCode: 'CC105', subject: 'Information Management', midterm: 99, finals: 1, remarks: 'PASSED', instructor: 'MOLINAR, Benjamin' },
      { subCode: 'NET102', subject: 'Networking 2', midterm: 100, finals: 1, remarks: 'PASSED', instructor: 'ROMERO, Carlo' },
      { subCode: 'PF101', subject: 'Object-Oriented Programming', midterm: 99, finals: 1, remarks: 'PASSED', instructor: 'ESCULTURA, Jerome C.' },
      { subCode: 'IS104', subject: 'Systems Analysis and Design', midterm: 100, finals: 1, remarks: 'PASSED', instructor: 'PAPA, John Christopher T.' }
  ];

  // Function to create table rows
  function createTableRow(data) {
      const row = document.createElement('tr');
      for (const key in data) {
          const cell = document.createElement('td');
          cell.textContent = data[key];
          row.appendChild(cell);
      }
      return row;
  }

  // Populate the table
  gradeData.forEach(item => {
      const row = createTableRow(item);
      tableBody.appendChild(row);
  });

  // Search functionality (conceptual)
  const searchInput = document.querySelector('.search-bar input[type="text"]');
  if (searchInput) {
      searchInput.addEventListener('input', function() {
          const searchTerm = searchInput.value.toLowerCase();
          // Implement your search logic here (e.g., filter `gradeData`)
          console.log('Search term:', searchTerm);
      });
  }

  // Filter functionality (conceptual)
  const filterButton = document.querySelector('.search-bar button');
  if (filterButton) {
      filterButton.addEventListener('click', function() {
          // Implement your filter logic here (e.g., open a filter dialog)
          console.log('Filter button clicked');
      });
  }
});