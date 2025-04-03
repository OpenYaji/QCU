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
    const gradeOptions = document.querySelectorAll('.grade-option');
    const contentSections = document.querySelectorAll('.content-section');

    const allLinks = [...navLinks, ...gradeOptions]; // Combine both sets of links

    allLinks.forEach(link => {
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
        instructor: "Prof. Sambajon"
    },
    {
        code: "CSE202",
        description: "Object-Oriented Programming",
        units: 3,
        midterm: 1.75,
        finals: 1.50,
        finalGrade: 1.63,
        type: "major",
        instructor: "Prof. Escultura"
    },
    {
        code: "CSE303",
        description: "Information Management",
        units: 3,
        midterm: 1.75,
        finals: 2.00,
        finalGrade: 1.88,
        type: "major",
        instructor: "Prof. Molinar"
    },
    {
        code: "GEN101",
        description: "Understanding the Self",
        units: 3,
        midterm: 1.50,
        finals: 1.75,
        finalGrade: 1.63,
        type: "minor",
        instructor: "Prof. Randy"
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
            code: "MATH 1",
            description: "Mathematics in the Modern World",
            units: 3,
            grade: 2.00,
            remarks: "Passed"
        },
        {
            code: "GEE 1",
            description: "Gender and Society",
            units: 3,
            grade: 1.75,
            remarks: "Passed"
        },
        {
            code: "GEE 2",
            description: "People and the Earth’s Ecosystems",
            units: 3,
            grade: 1.50,
            remarks: "Passed"
        },
        {
            code: "CC101",
            description: "Introduction to Computing",
            units: 3,
            grade: 2.25,
            remarks: "Passed"
        },
        {
            code: "CC102",
            description: "Fundamentals of Programming",
            units: 3,
            grade: 2.50,
            remarks: "Passed"
        },
        {
            code: "WS101",
            description: "Web Systems and Technologies 1 (Electives)",
            units: 3,
            grade: 1.75,
            remarks: "Passed"
        },
        {
            code: "PE 1",
            description: "Physical Fitness and Wellness",
            units: 2,
            grade: 1.25,
            remarks: "Passed"
        },
        {
            code: "NSTP 1",
            description: "National Service Training Program 1",
            units: 3,
            grade: 1.50,
            remarks: "Passed"
        }
    ],
    "1st-2nd": [
        {
            code: "SCI 1",
            description: "Science, Technology and Society",
            units: 3,
            grade: 1.75,
            remarks: "Passed"
        },
        {
            code: "ENG 1",
            description: "Purposive Communication",
            units: 3,
            grade: 2.00,
            remarks: "Passed"
        },
        {
            code: "GEE 3",
            description: "Philippine Popular Culture",
            units: 3,
            grade: 2.25,
            remarks: "Passed"
        },
        {
            code: "CC103",
            description: "Intermediate Programming",
            units: 3,
            grade: 2.50,
            remarks: "Passed"
        },
        {
            code: "PT101",
            description: "Platform Technologies (Electives)",
            units: 3,
            grade: 1.50,
            remarks: "Passed"
        },
        {
            code: "NET101",
            description: "Networking 1",
            units: 3,
            grade: 1.75,
            remarks: "Passed"
        },
        {
            code: "PE 2",
            description: "Rhythmic Activities",
            units: 2,
            grade: 1.25,
            remarks: "Passed"
        },
        {
            code: "NSTP 2",
            description: "National Service Training Program 2",
            units: 3,
            grade: 1.50,
            remarks: "Passed"
        }
    ],
    "2nd-1st": [
        {
            code: "HUM 1",
            description: "Art Appreciation",
            units: 3,
            grade: 1.50,
            remarks: "Passed"
        },
        {
            code: "IS104",
            description: "Systems Analysis and Design",
            units: 3,
            grade: 1.75,
            remarks: "Passed"
        },
        {
            code: "CC104",
            description: "Data Structures and Algorithms",
            units: 3,
            grade: 1.50,
            remarks: "Passed"
        },
        {
            code: "CC105",
            description: "Information Management",
            units: 3,
            grade: 1.75,
            remarks: "Passed"
        },
        {
            code: "PF101",
            description: "Object-Oriented Programming",
            units: 3,
            grade: 1.25,
            remarks: "Passed"
        },
        {
            code: "NET102",
            description: "Networking 2",
            units: 3,
            grade: 1.75,
            remarks: "Passed"
        },
        {
            code: "PE 3",
            description: "Individual and Dual Sports",
            units: 2,
            grade: 1.25,
            remarks: "Passed"
        }
    ],
    "2nd-2nd": [
        {
            code: "SOCSCI 1",
            description: "Understanding the Self",
            units: 3,
            grade: null,
            remarks: "In Progress"
        },
        {
            code: "SOCSCI 2",
            description: "Readings in Philippine History",
            units: 3,
            grade: null,
            remarks: "In Progress"
        },
        {
            code: "HCI101",
            description: "Introduction to Human Computer Interaction",
            units: 3,
            grade: null,
            remarks: "In Progress"
        },
        {
            code: "SE101",
            description: "Software Engineering",
            units: 3,
            grade: null,
            remarks: "In Progress"
        },
        {
            code: "IPT101",
            description: "Integrative Programming and Technologies 1",
            units: 3,
            grade: null,
            remarks: "In Progress"
        },
        {
            code: "IM101",
            description: "Advanced Database Systems",
            units: 3,
            grade: null,
            remarks: "In Progress"
        },
        {
            code: "PE 4",
            description: "Team Sports",
            units: 2,
            grade: null,
            remarks: "In Progress"
        }
    ],
    "3rd-1st": [
        {
            code: "SOCSCI 3",
            description: "The Contemporary World",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "RIZAL",
            description: "The Life and Works of Rizal",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "MS101",
            description: "Discrete Mathematics",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "SPI101",
            description: "Social Professional Issues 1",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "AR101",
            description: "Architecture and Organization",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "IPT102",
            description: "Integrative Programming and Technologies 2",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "SIA101",
            description: "Systems Integration and Architecture 1",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        }
    ],
    "3rd-2nd": [
        {
            code: "HUM 2",
            description: "Ethics",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "AL101",
            description: "Algorithms and Complexity",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "MS102",
            description: "Quantitative Methods",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "CC106",
            description: "Application Development and Emerging Technologies",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "IAS101",
            description: "Fundamental of Information Assurance and Security 1",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "SIA102",
            description: "Systems Integration and Architecture 2",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        }
    ],
    "4th-1st": [
        {
            code: "CAP101*",
            description: "Capstone Project and Research 1",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "PRC101*",
            description: "Practicum 1",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "AL102",
            description: "Automata Theory and Formal Language",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "IAS102",
            description: "Information Assurance and Security 2",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        }
    ],
    "4th-2nd": [
        {
            code: "CAP102",
            description: "Capstone Project and Research 2",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "PRC102",
            description: "Practicum 2",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        },
        {
            code: "SAM101",
            description: "Systems Administration and Maintenance",
            units: 3,
            grade: null,
            remarks: "Not Taken"
        }
    ]
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

const curriculumData = {
    "1st-1st": [
        { code: "MATH 1", title: "Mathematics in the Modern World", units: 3, prereq: "None" },
        { code: "GEE 1", title: "Gender and Society", units: 3, prereq: "None" },
        { code: "GEE 2", title: "People and the Earth’s Ecosystems", units: 3, prereq: "None" },
        { code: "CC101", title: "Introduction to Computing", units: 3, prereq: "None" },
        { code: "CC102", title: "Fundamentals of Programming", units: 3, prereq: "None" },
        { code: "WS101", title: "Web Systems and Technologies 1 (Electives)", units: 3, prereq: "None" },
        { code: "PE 1", title: "Physical Fitness and Wellness", units: 2, prereq: "None" },
        { code: "NSTP 1", title: "National Service Training Program 1", units: 3, prereq: "None" }
    ],
    "1st-2nd": [
        { code: "SCI 1", title: "Science, Technology and Society", units: 3, prereq: "None" },
        { code: "ENG 1", title: "Purposive Communication", units: 3, prereq: "None" },
        { code: "GEE 3", title: "Philippine Popular Culture", units: 3, prereq: "None" },
        { code: "CC103", title: "Intermediate Programming", units: 3, prereq: "CC101, CC102" },
        { code: "PT101", title: "Platform Technologies (Electives)", units: 3, prereq: "CC101, CC102" },
        { code: "NET101", title: "Networking 1", units: 3, prereq: "None" },
        { code: "PE 2", title: "Rhythmic Activities", units: 2, prereq: "PE 1" },
        { code: "NSTP 2", title: "National Service Training Program 2", units: 3, prereq: "NSTP 1" }
    ],
    "2nd-1st": [
        { code: "HUM 1", title: "Art Appreciation", units: 3, prereq: "None" },
        { code: "IS104", title: "Systems Analysis and Design", units: 3, prereq: "2nd Year Standing, CC103" },
        { code: "CC104", title: "Data Structures and Algorithms", units: 3, prereq: "CC103" },
        { code: "CC105", title: "Information Management", units: 3, prereq: "CC103" },
        { code: "PF101", title: "Object-Oriented Programming", units: 3, prereq: "CC103, PT101, NET101" },
        { code: "NET102", title: "Networking 2", units: 3, prereq: "NET101, PT101" },
        { code: "PE 3", title: "Individual and Dual Sports", units: 2, prereq: "PE 1" }
    ],
    "2nd-2nd": [
        { code: "SOCSCI 1", title: "Understanding the Self", units: 3, prereq: "None" },
        { code: "SOCSCI 2", title: "Readings in Philippine History", units: 3, prereq: "None" },
        { code: "HCI101", title: "Introduction to Human Computer Interaction", units: 3, prereq: "None" },
        { code: "SE101", title: "Software Engineering", units: 3, prereq: "CC105, PF101, IS104" },
        { code: "IPT101", title: "Integrative Programming and Technologies 1", units: 3, prereq: "PT101, PF101" },
        { code: "IM101", title: "Advanced Database Systems", units: 3, prereq: "CC105, PF101, IS104" },
        { code: "PE 4", title: "Team Sports", units: 2, prereq: "PE 1" }
    ],
    "3rd-1st": [
        { code: "SOCSCI 3", title: "The Contemporary World", units: 3, prereq: "None" },
        { code: "RIZAL", title: "The Life and Works of Rizal", units: 3, prereq: "None" },
        { code: "MS101", title: "Discrete Mathematics", units: 3, prereq: "3rd Year Standing, CC104, PF101" },
        { code: "SPI101", title: "Social Professional Issues 1", units: 3, prereq: "3rd Year Standing, SE101" },
        { code: "AR101", title: "Architecture and Organization", units: 3, prereq: "3rd Year Standing, CC103" },
        { code: "IPT102", title: "Integrative Programming and Technologies 2 (Electives)", units: 3, prereq: "3rd Year Standing, IPT101" },
        { code: "SIA101", title: "Systems Integration and Architecture 1", units: 3, prereq: "3rd Year Standing, IPT101" }
    ],
    "3rd-2nd": [
        { code: "HUM 2", title: "Ethics", units: 3, prereq: "None" },
        { code: "AL101", title: "Algorithms and Complexity", units: 3, prereq: "MS101" },
        { code: "MS102", title: "Quantitative Methods", units: 3, prereq: "3rd Year Standing, MS101" },
        { code: "CC106", title: "Application Development and Emerging Technologies", units: 3, prereq: "3rd Year Standing, SE101" },
        { code: "IAS101", title: "Fundamental of Information Assurance and Security 1", units: 3, prereq: "3rd Year Standing, SIA101" },
        { code: "SIA102", title: "Systems Integration and Architecture 2 (Electives)", units: 3, prereq: "3rd Year Standing, SIA101" }
    ],
    "4th-1st": [
        { code: "CAP101*", title: "Capstone Project and Research 1", units: 3, prereq: "4th Year Standing, IAS101, MS102" },
        { code: "PRC101*", title: "Practicum 1", units: 3, prereq: "4th Year Standing, MS102, IAS101, CC106" },
        { code: "AL102", title: "Automata Theory and Formal Language", units: 3, prereq: "AL101" },
        { code: "IAS102", title: "Information Assurance and Security 2", units: 3, prereq: "IAS101" }
    ],
    "4th-2nd": [
        { code: "CAP102", title: "Capstone Project and Research 2", units: 3, prereq: "CAP101" },
        { code: "PRC102", title: "Practicum 2", units: 3, prereq: "PRC101" },
        { code: "SAM101", title: "Systems Administration and Maintenance", units: 3, prereq: "IAS102" }
    ]
};

const curriculumTable = document.getElementById('curriculum-table').getElementsByTagName('tbody')[0];
const curriculumYearSelect = document.getElementById('curriculum-year');
const curriculumSemSelect = document.getElementById('curriculum-sem');

function displayCurriculum(curriculum) {
    curriculumTable.innerHTML = '';
    curriculum.forEach(item => {
        const row = curriculumTable.insertRow();
        row.insertCell().textContent = item.code;
        row.insertCell().textContent = item.title;
        row.insertCell().textContent = item.units;
        row.insertCell().textContent = item.prereq;
    });
}

function filterCurriculum() {
    const selectedYear = curriculumYearSelect.value;
    const selectedSem = curriculumSemSelect.value;

    let filteredCurriculum = [];

    for (const key in curriculumData) {
        const [year, sem] = key.split('-');

        const yearMatch = selectedYear === 'all' || year === selectedYear;
        const semMatch = selectedSem === 'all' || sem === selectedSem;

        if (yearMatch && semMatch) {
            filteredCurriculum = filteredCurriculum.concat(curriculumData[key]);
        }
    }
    displayCurriculum(filteredCurriculum);
}

// Initial display:
filterCurriculum();

// Add event listeners to the select elements
curriculumYearSelect.addEventListener('change', filterCurriculum);
curriculumSemSelect.addEventListener('change', filterCurriculum);
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');

        button.classList.add('active');
        document.getElementById(tabId).style.display = 'block';
    });
});