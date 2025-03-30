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
const currentGradesData = [
    {
        code: "CSE101",
        description: "Data Structures and Algorithms",
        units: 3,
        midterm: 1.50,
        finals: 1.25,
        finalGrade: 1.38,
        type: "major",
        instructor: "Dr. Santos"
    },
    {
        code: "CSE202",
        description: "Object-Oriented Programming",
        units: 3,
        midterm: 1.75,
        finals: 1.50,
        finalGrade: 1.63,
        type: "major",
        instructor: "Prof. Garcia"
    },
    {
        code: "CSE303",
        description: "Information Management",
        units: 3,
        midterm: 1.75,
        finals: 2.00,
        finalGrade: 1.88,
        type: "major",
        instructor: "Ms. Cruz"
    },
    {
        code: "GEN101",
        description: "Understanding the Self",
        units: 3,
        midterm: 1.50,
        finals: 1.75,
        finalGrade: 1.63,
        type: "minor",
        instructor: "Prof. Reyes"
    },
    // Add more subjects as needed
];

// Calculate remarks based on final grade
function getRemarks(grade) {
    if (grade <= 3.0) return "Passed";
    return "Failed";
}

// Calculate grade color class
function getGradeClass(grade) {
    if (grade <= 1.25) return "excellent";
    if (grade <= 1.75) return "very-good";
    if (grade <= 2.25) return "good";
    if (grade <= 2.75) return "satisfactory";
    return "passing";
}

// Populate grades table
function populateGradesTable(grades) {
    const tableBody = document.getElementById('gradesTableBody');
    tableBody.innerHTML = '';

    grades.forEach(grade => {
        const row = document.createElement('tr');
        const remarks = getRemarks(grade.finalGrade);
        const gradeClass = getGradeClass(grade.finalGrade);

        row.innerHTML = `
            <td>${grade.code}</td>
            <td>${grade.description}</td>
            <td>${grade.units}</td>
            <td class="${getGradeClass(grade.midterm)}">${grade.midterm.toFixed(2)}</td>
            <td class="${getGradeClass(grade.finals)}">${grade.finals.toFixed(2)}</td>
            <td class="${gradeClass}">${grade.finalGrade.toFixed(2)}</td>
            <td><span class="badge ${remarks.toLowerCase()}">${remarks}</span></td>
            <td>${grade.instructor}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Search functionality
function searchGrades() {
    const searchInput = document.getElementById('gradeSearch');
    const filterSelect = document.getElementById('subjectFilter');
    const searchTerm = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    const filteredGrades = currentGradesData.filter(grade => {
        const matchesSearch = grade.description.toLowerCase().includes(searchTerm) ||
                            grade.code.toLowerCase().includes(searchTerm) ||
                            grade.instructor.toLowerCase().includes(searchTerm);
        
        const matchesFilter = filterValue === 'all' || grade.type === filterValue;

        return matchesSearch && matchesFilter;
    });

    populateGradesTable(filteredGrades);
}

// Filter subjects
function filterSubjects() {
    searchGrades();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    populateGradesTable(currentGradesData);

    // Add search input event listener
    const searchInput = document.getElementById('gradeSearch');
    searchInput.addEventListener('input', searchGrades);
});
    const pastGradesData = {
        "1st-1st": [
            {
                code: "ART 101",
                description: "Art Appreciation",
                units: 3,
                grade: 1.50,
                remarks: "Passed"
            },
            {
                code: "DSA 101",
                description: "Data Structures and Algorithms",
                units: 3,
                grade: 1.50,
                remarks: "Passed"
            },
            {
                code: "PE 101",
                description: "Individual and Dual Sports",
                units: 2,
                grade: 1.25,
                remarks: "Passed"
            },
            {
                code: "IM 101",
                description: "Information Management",
                units: 3,
                grade: 1.75,
                remarks: "Passed"
            },
            {
                code: "NET 102",
                description: "Networking 2",
                units: 3,
                grade: 1.75,
                remarks: "Passed"
            },
            {
                code: "OOP 101",
                description: "Object-Oriented Programming",
                units: 3,
                grade: 1.75,
                remarks: "Passed"
            },
            {
                code: "SAD 101",
                description: "Systems Analysis and Design",
                units: 3,
                grade: 1.75,
                remarks: "Passed"
            }
        ],
        "1st-2nd": [
            {
                code: "STS 101",
                description: "Science, Technology and Society",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "PC 101",
                description: "Purposive Communication",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "PPC 101",
                description: "Philippine Popular Culture",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "IP 101",
                description: "Intermediate Programming",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "PT 101",
                description: "Platform Technologies",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "NET 101",
                description: "Networking 1",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "RA 101",
                description: "Rhythmic Activities",
                units: 2,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "NSTP 102",
                description: "National Service Training Program 2",
                units: 3,
                grade: null,
                remarks: "In Progress"
            }
        ],
        "2nd-1st": [
            {
                code: "ART 101",
                description: "Art Appreciation",
                units: 3,
                grade: 1.25,
                remarks: "Passed"
            },
            {
                code: "SAD 101",
                description: "Systems Analysis and Design",
                units: 3,
                grade: 1.75,
                remarks: "Passed"
            },
            {
                code: "DSA 101",
                description: "Data Structures and Algorithms",
                units: 3,
                grade: 1.25,
                remarks: "Passed"
            },
            {
                code: "IM 101",
                description: "Information Management",
                units: 3,
                grade: 1.5,
                remarks: "Passed"
            },
            {
                code: "OOP 101",
                description: "Object-Oriented Programming",
                units: 3,
                grade: 1.25,
                remarks: "Passed"
            },
            {
                code: "NET 102",
                description: "Networking 2",
                units: 3,
                grade: 1.75,
                remarks: "Passed"
            },
            {
                code: "PE 101",
                description: "Individual and Dual Sports",
                units: 2,
                grade: 1.25,
                remarks: "Passed"
            }
        ],
        "2nd-2nd": [
            {
                code: "GEC 201",
                description: "Understanding the Self",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "GEC 202",
                description: "Readings in Philippine History",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "HCI 201",
                description: "Introduction to Human Computer Interaction",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "SE 201",
                description: "Software Engineering",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "IPT 201",
                description: "Integrative Programming and Technologies 1",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "ADS 201",
                description: "Advanced Database Systems",
                units: 3,
                grade: null,
                remarks: "In Progress"
            },
            {
                code: "TS 201",
                description: "Team Sports",
                units: 2,
                grade: null,
                remarks: "In Progress"
            }
        ],
        "3rd-1st": [
            {
                code: "TCW 301",
                description: "The Contemporary World",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "LWR 301",
                description: "The Life and Works of Rizal",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "DM 301",
                description: "Discrete Mathematics",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "SPI 301",
                description: "Social Professional Issues 1",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "AO 301",
                description: "Architecture and Organization",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "IPT 302",
                description: "Integrative Programming and Technologies 2",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "SIA 301",
                description: "Systems Integration and Architecture 1",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            }
        ],
        "3rd-2nd": [
            {
                code: "ETH 301",
                description: "Ethics",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "AC 301",
                description: "Algorithms and Complexity",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "QM 301",
                description: "Quantitative Methods",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "ADET 301",
                description: "Application Development and Emerging Technologies",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "FIAS 301",
                description: "Fundamental of Information Assurance and Security 1",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "SIA 302",
                description: "Systems Integration and Architecture 2",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            }
        ],
        "4th-1st": [
            {
                code: "CPR 401",
                description: "Capstone Project and Research 1",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "PRAC 401",
                description: "Practicum 1",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "ATFL 401",
                description: "Automata Theory and Formal Language",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "IAS 402",
                description: "Information Assurance and Security 2",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            }
        ],
        "4th-2nd": [
            {
                code: "CPR 402",
                description: "Capstone Project and Research 2",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "PRAC 402",
                description: "Practicum 2",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            },
            {
                code: "SAM 401",
                description: "Systems Administration and Maintenance",
                units: 3,
                grade: null,
                remarks: "Not Taken"
            }
        ]
    // Add more semesters here
};

function displayPastGrades(grades) {
    const tableBody = document.getElementById('past-grades-table');
    const gwaDisplay = document.getElementById('gwa-display');
    const unitsDisplay = document.getElementById('units-display');
    const standingDisplay = document.getElementById('standing-display');
    
    tableBody.innerHTML = '';
    
    let totalUnits = 0;
    let totalGradePoints = 0;

    grades.forEach(grade => {
        const row = document.createElement('tr');
        const gradeClass = getGradeClass(grade.grade);
        
        row.innerHTML = `
            <td>${grade.code}</td>
            <td>${grade.description}</td>
            <td>${grade.units}</td>
            <td class="grade ${gradeClass}">${grade.grade?.toFixed(2) || 'N/A'}</td>
            <td><span class="badge ${grade.remarks.toLowerCase()}">${grade.remarks}</span></td>
        `;
        
        tableBody.appendChild(row);

        if (grade.grade) {
            totalUnits += grade.units;
            totalGradePoints += grade.grade * grade.units;
        }
    });

    // Update summary cards
    if (totalUnits > 0) {
        const gwa = (totalGradePoints / totalUnits).toFixed(2);
        gwaDisplay.textContent = gwa;
        unitsDisplay.textContent = totalUnits;
        standingDisplay.textContent = getAcademicStanding(gwa);
    }
}

function getGradeClass(grade) {
    if (!grade) return '';
    if (grade <= 1.25) return 'excellent';
    if (grade <= 1.75) return 'very-good';
    if (grade <= 2.25) return 'good';
    if (grade <= 2.75) return 'satisfactory';
    return 'passing';
}

function getAcademicStanding(gwa) {
    if (gwa <= 1.25) return 'Excellent';
    if (gwa <= 1.75) return 'Very Good';
    if (gwa <= 2.25) return 'Good';
    if (gwa <= 2.75) return 'Satisfactory';
    return 'Fair';
}

function filterGrades() {
    const selectedYear = document.getElementById('grade-year').value;
    const selectedSem = document.getElementById('grade-sem').value;
    
    let filteredGrades = [];
    
    for (const key in pastGradesData) {
        const [year, sem] = key.split('-');
        if ((selectedYear === 'all' || year === selectedYear) && 
            (selectedSem === 'all' || sem === selectedSem)) {
            filteredGrades = filteredGrades.concat(pastGradesData[key]);
        }
    }
    
    displayPastGrades(filteredGrades);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    filterGrades();
});