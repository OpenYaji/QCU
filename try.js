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
  // Collapse sidebar by default on small screens
  if (window.innerWidth <= 1024) document.querySelector(".sidebar").classList.add("collapsed");
  const logoutLink = document.querySelector('.logout-link');

logoutLink.addEventListener('click', () => {
  // Redirect to index.html
  window.location.href = 'index.html'; 
});//
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
