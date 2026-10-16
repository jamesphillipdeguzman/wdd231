/**
 * WDD 231 - Course Viewer & Academic Progression Controller
 * Handles course fetching, dynamic iframe preview, and subject filtering.
 */

let courses = [];

// Fallback catalog of core courses to guarantee offline & file:// rendering
const FALLBACK_COURSE_LIST = [
  {
    subject: "PC",
    number: 101,
    code: "PC101",
    title: "Life Skills",
    courseLevel: "Lower Division",
    credits: 3,
    creditsEarned: 3.0,
    grade: "A",
    term: "2023 Spring Block 1",
    certificate: "Pathway Connect",
    description: "Focuses on foundational life skills, personal development, self-reliance, and basic academic and practical habits for university success.",
    completed: true,
    status: "Complete",
    courselink: null
  },
  {
    subject: "PC",
    number: 102,
    code: "PC102",
    title: "Professional Skills",
    courseLevel: "Lower Division",
    credits: 3,
    creditsEarned: 3.0,
    grade: "A",
    term: "2023 Spring Block 2",
    certificate: "Pathway Connect",
    description: "Prepares students with professional communication, interpersonal, workplace etiquette, and career management skills.",
    completed: true,
    status: "Complete",
    courselink: null
  },
  {
    subject: "CSE",
    number: 110,
    code: "CSEPC110",
    title: "Introduction to Programming",
    courseLevel: "Lower Division",
    credits: 2,
    creditsEarned: 2.0,
    grade: "A",
    term: "2023 Fall Block 1",
    certificate: "Web and Computer Programming",
    description: "Introduces foundational programming concepts including variables, decisions, loops, arrays, and problem-solving with Python.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse110-ww-course/"
  },
  {
    subject: "WDD",
    number: 130,
    code: "WDD130",
    title: "Web Fundamentals",
    courseLevel: "Lower Division",
    credits: 2,
    creditsEarned: 2.0,
    grade: "A-",
    term: "2024 Winter Semester",
    certificate: "Web and Computer Programming",
    description: "Introduces web design, semantic HTML5 structure, responsive CSS layout, and career fundamentals.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/wdd130-ww-course/"
  },
  {
    subject: "CSE",
    number: 111,
    code: "CSE111",
    title: "Programming with Functions",
    courseLevel: "Lower Division",
    credits: 2,
    creditsEarned: 2.0,
    grade: "A",
    term: "2024 Winter Semester",
    certificate: "Web and Computer Programming",
    description: "Builds functional programming prowess with Python: writing, calling, debugging, testing, and handling exceptions.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse111-ww-course/"
  },
  {
    subject: "CSE",
    number: 210,
    code: "CSE210",
    title: "Programming with Classes",
    courseLevel: "Lower Division",
    credits: 2,
    creditsEarned: 2.0,
    grade: "A",
    term: "2024 Spring Semester",
    certificate: "Web and Computer Programming",
    description: "Introduces classes, objects, encapsulation, inheritance, and polymorphism using C#.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse210-ww-course/"
  },
  {
    subject: "WDD",
    number: 131,
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    courseLevel: "Lower Division",
    credits: 2,
    creditsEarned: 2.0,
    grade: "A",
    term: "2024 Spring Semester",
    certificate: "Web and Computer Programming",
    description: "Teaches dynamic DOM manipulation, JavaScript event handling, and interactive responsive web experiences.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/wdd131-ww-course/"
  },
  {
    subject: "WDD",
    number: 231,
    code: "WDD231",
    title: "Frontend Web Development I",
    courseLevel: "Lower Division",
    credits: 2,
    creditsEarned: 2.0,
    grade: "A",
    term: "2024 Fall Semester",
    certificate: "Web and Computer Programming",
    description: "Focuses on user experience, web accessibility, standards compliance, performance optimization, and asynchronous API data integration.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/wdd231-ww-course/"
  },
  {
    subject: "CIT",
    number: 111,
    code: "CIT111",
    title: "Introduction to Databases",
    courseLevel: "Lower Division",
    credits: 3,
    creditsEarned: 3.0,
    grade: "A",
    term: "2024 Winter Semester",
    certificate: "Web Development",
    description: "Introductory course covering relational database principles, schema modeling, and SQL queries.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cit111-ww-course/"
  },
  {
    subject: "WDD",
    number: 330,
    code: "WDD330",
    title: "Web Frontend Development II",
    courseLevel: "Upper Division",
    credits: 3,
    creditsEarned: 3.0,
    grade: "A",
    term: "2025 Term 1",
    certificate: "Web Development",
    description: "Advanced frontend architecture, Single Page Application routing, components, and state management.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/wdd330-ww-course/"
  },
  {
    subject: "CSE",
    number: 341,
    code: "CSE341",
    title: "Web Services",
    courseLevel: "Upper Division",
    credits: 3,
    creditsEarned: 3.0,
    grade: "A",
    term: "2025 Term 3",
    certificate: "Web Development",
    description: "RESTful web services, API architecture, JSON serialization, and backend integration.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse341-ww-course/"
  },
  {
    subject: "CSE",
    number: 340,
    code: "CSE340",
    title: "Web Backend Development",
    courseLevel: "Upper Division",
    credits: 3,
    creditsEarned: 3.0,
    grade: "A",
    term: "2025 Term 5",
    certificate: "Web Development",
    description: "Server-side programming with Node.js, Express, MongoDB, and user authentication.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse340-ww-course/"
  },
  {
    subject: "WDD",
    number: 430,
    code: "WDD430",
    title: "Web Full-Stack Development",
    courseLevel: "Upper Division",
    credits: 3,
    creditsEarned: 3.0,
    grade: "A",
    term: "2025 Term 6",
    certificate: "Web Development",
    description: "Combines frontend and backend skills to architect full-stack web applications.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/wdd430-ww-course/"
  },
  {
    subject: "CSE",
    number: 212,
    code: "CSE212",
    title: "Programming with Data Structures",
    courseLevel: "Lower Division",
    credits: 2,
    creditsEarned: 2.0,
    grade: "A",
    term: "2025 Term 4",
    certificate: "Software Development",
    description: "Data structures, Big-O algorithm analysis, stacks, queues, trees, and hash tables in C#.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse212-ww-course/"
  },
  {
    subject: "CSE",
    number: 270,
    code: "CSE270",
    title: "Software Testing",
    courseLevel: "Lower Division",
    credits: 3,
    creditsEarned: 3.0,
    grade: "A",
    term: "2026 Block 1",
    certificate: "Software Development",
    description: "Covers software testing methodologies, test automation, Selenium, unit tests, and integration testing.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse270-ww-course/"
  },
  {
    subject: "CSE",
    number: 310,
    code: "CSE310",
    title: "Applied Programming",
    courseLevel: "Lower Division",
    credits: 3,
    creditsEarned: 3.0,
    grade: "A",
    term: "2026 Block 2",
    certificate: "Software Development",
    description: "Practical development projects applying Kotlin, SQLite3, and mobile app architecture.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse310-ww-course/"
  },
  {
    subject: "CSE",
    number: 325,
    code: "CSE325",
    title: ".NET Software Development",
    courseLevel: "Upper Division",
    credits: 3,
    creditsEarned: 3.0,
    grade: "A",
    term: "2026 Block 3",
    certificate: "Software Development",
    description: ".NET ecosystem, ASP.NET Core, Blazor components, and .NET MAUI cross-platform development.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse325-ww-course/"
  },
  {
    subject: "CSE",
    number: 300,
    code: "CSE300",
    title: "Professional Readiness",
    courseLevel: "Upper Division",
    credits: 1,
    creditsEarned: 1.0,
    grade: "A",
    term: "2026 Block 4",
    certificate: "Software Development",
    description: "Prepares software engineers for technical interviewing, portfolio development, and networking.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse300-ww-course/"
  },
  {
    subject: "CSE",
    number: 370,
    code: "CSE370",
    title: "Software Engineering Principles",
    courseLevel: "Upper Division",
    credits: 2,
    creditsEarned: 2.0,
    grade: "A",
    term: "2026 Block 4",
    certificate: "Software Development",
    description: "Software engineering design patterns, requirements elicitation, testing, and lifecycle management.",
    completed: true,
    status: "Complete",
    courselink: "https://byui-cse.github.io/cse370-ww-course/"
  },
  {
    subject: "CSE",
    number: 499,
    code: "CSE499",
    title: "Senior Project",
    courseLevel: "Upper Division",
    credits: 3,
    creditsEarned: 0.0,
    grade: null,
    term: "2026 Block 5",
    certificate: "Software Development",
    description: "Capstone project integrating TypeScript, FastAPI, React, Leaflet, and Google Gemini AI.",
    completed: false,
    status: "Current",
    courselink: "https://byui-cse.github.io/cse499-ww-course/"
  }
];

/* ===============================
   LOAD COURSES
================================ */
async function loadCourses() {
  try {
    const response = await fetch("data/courses.json");
    if (response.ok) {
      const data = await response.json();
      if (data && Array.isArray(data.courses) && data.courses.length) {
        courses = data.courses;
        buildCourseDropdown();
        renderAllCourses();
        return;
      }
    }
  } catch (e) {
    // Fallback for offline or local file:// protocol restrictions
  }

  courses = FALLBACK_COURSE_LIST;
  buildCourseDropdown();
  renderAllCourses();
}

/* ===============================
   NAVIGATION MENU
================================ */
function setupHamburgerMenu() {
  const hamburgerBtn = document.querySelector("#menu");
  const navigationBtn = document.querySelector(".top-navlinks");

  if (hamburgerBtn && navigationBtn) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("open");
      navigationBtn.classList.toggle("open");
    });
  }
}

/* ===============================
   FOOTER DATES
================================ */
function setupFooterDates() {
  const yearEl = document.querySelector("#currentyear");
  const lastModifiedEl = document.querySelector("#lastModified");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (lastModifiedEl) {
    const modified = new Date(document.lastModified);
    lastModifiedEl.textContent =
      modified.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }) +
      " " +
      modified.toLocaleTimeString();
  }
}

/* ===============================
   COURSE FILTERS + ACTIVE TABS
================================ */
function setupCourseFilters() {
  const filterButtons = document.querySelectorAll(".course-navlinks ul li a");

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active from all filters
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active to clicked filter
      button.classList.add("active");

      // Render courses
      const id = button.id;
      switch (id) {
        case "all":
          renderAllCourses();
          break;
        case "cse":
          renderFilteredCourses("CSE");
          break;
        case "wdd":
          renderFilteredCourses("WDD");
          break;
      }
    });
  });
}

/* ===============================
   COURSE RENDERING
================================ */
function renderAllCourses() {
  renderCourses(courses, true);
}

function renderFilteredCourses(subject) {
  const filtered = courses.filter((course) => course.subject === subject);
  renderCourses(filtered, false);
}

function renderCourses(courseList, showCompletedTotal) {
  const container = document.querySelector(".courses") || document.querySelector("#courses-container");
  const tallyEl = document.querySelector("#credits-tally");
  if (!container) return;
  container.innerHTML = "";

  let totalCredits = 0;
  let completedCredits = 0;

  // Group courses by certificate
  const coursesByCertificate = {};
  courseList.forEach((course) => {
    const cert = course.certificate || "General Requirements";
    if (!coursesByCertificate[cert]) {
      coursesByCertificate[cert] = [];
    }
    coursesByCertificate[cert].push(course);
  });

  // Render courses grouped by certificate
  for (const [certificate, groupCourses] of Object.entries(coursesByCertificate)) {
    // Certificate subheader banner
    const certHeader = document.createElement("li");
    certHeader.classList.add("certificate-header");
    certHeader.innerHTML = `
      <span class="cert-title">${escapeHtml(certificate)}</span>
      <span class="cert-count">${groupCourses.length} course${groupCourses.length > 1 ? 's' : ''}</span>
    `;
    container.appendChild(certHeader);

    // Render each course under this certificate
    groupCourses.forEach((course) => {
      const li = document.createElement("li");
      li.classList.add("course-card-item");

      const isCompleted = course.completed || course.status === "Complete" || course.status === "Fulfilled";
      const isCurrent = course.status === "Current";

      let statusClass = "not-started";
      let statusLabel = course.status || "Scheduled";

      if (isCompleted) {
        statusClass = "complete";
        statusLabel = course.grade ? `Completed (${course.grade})` : "Completed";
        completedCredits += Number(course.creditsEarned) || Number(course.credits) || 0;
      } else if (isCurrent) {
        statusClass = "in-progress";
        statusLabel = "In Progress";
      }

      totalCredits += Number(course.credits) || 0;

      li.classList.add(statusClass);

      li.innerHTML = `
        <div class="course-card-top">
          <div class="course-code-row">
            <span class="course-code-badge">${escapeHtml(course.subject)} ${escapeHtml(course.number)}</span>
            <span class="status-badge ${statusClass}">${escapeHtml(statusLabel)}</span>
          </div>
          <h4 class="course-card-title">${escapeHtml(course.title)}</h4>
        </div>
        
        <div class="course-card-bottom">
          <div class="course-meta">
            <span class="credits-pill">⚡ ${course.credits} Credits</span>
            <span class="term-pill">📅 ${escapeHtml(course.term || '')}</span>
          </div>
          ${course.courselink ? `
            <a href="${course.courselink}" target="_blank" rel="noopener noreferrer" class="course-link-btn" title="View Syllabus">
              Course Site &rarr;
            </a>
          ` : `
            <span class="no-link-text">Catalog Entry</span>
          `}
        </div>
      `;

      container.appendChild(li);
    });
  }

  // Update credits summary display
  if (tallyEl) {
    tallyEl.textContent = showCompletedTotal
      ? `Credits: ${completedCredits} completed / ${totalCredits} shown`
      : `Credits: ${completedCredits} completed (${totalCredits} total)`;
  }
}

/* ===============================
   COURSE DROPDOWN & SPOTLIGHT
================================ */
function buildCourseDropdown() {
  const iframe = document.querySelector("#course-iframe");
  const placeholder = document.querySelector("#course-iframe-placeholder");
  const title = document.querySelector("#current-course-title");
  const externalLink = document.querySelector("#course-external-link");
  const container = document.querySelector(".course-work");
  if (!container) return;

  // Check if select already exists
  let select = document.querySelector("#course-dropdown");
  if (!select) {
    select = document.createElement("select");
    select.id = "course-dropdown";
    select.setAttribute("aria-label", "Select course to preview syllabus");

    const header = container.querySelector(".section-header") || title;
    if (header) {
      header.insertAdjacentElement("afterend", select);
    } else {
      container.prepend(select);
    }
  }

  select.innerHTML = `<option value="">-- Choose a course to preview syllabus --</option>`;

  // Filter courses that have public links first
  const linkable = courses.filter((c) => c.courselink);
  linkable.forEach((course) => {
    const option = document.createElement("option");
    option.value = course.courselink;
    option.textContent = `${course.subject} ${course.number}: ${course.title} (${course.credits} cr)`;
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    const url = e.target.value;
    const selectedText = e.target.options[e.target.selectedIndex]?.text;

    if (!url) {
      if (title) title.textContent = "Select a course to view";
      if (iframe) {
        iframe.src = "";
        iframe.style.display = "none";
      }
      if (placeholder) placeholder.style.display = "flex";
      if (externalLink) {
        externalLink.href = "degree-tracker.html";
        externalLink.textContent = "Open in Degree Tracker \u2192";
      }
      return;
    }

    if (title) {
      title.textContent = `Preview: ${selectedText}`;
    }

    if (iframe) {
      iframe.src = url;
      iframe.style.display = "block";
    }

    if (placeholder) {
      placeholder.style.display = "none";
    }

    if (externalLink) {
      externalLink.href = url;
      externalLink.textContent = "Open Full Course Site \u2197";
    }
  });

  // Default selection: WDD 231 (the course for this very site!)
  const wdd231Course = linkable.find((c) => c.subject === "WDD" && Number(c.number) === 231);
  if (wdd231Course) {
    select.value = wdd231Course.courselink;
    select.dispatchEvent(new Event("change"));
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ===============================
   INITIALIZE EVERYTHING
================================ */
document.addEventListener("DOMContentLoaded", () => {
  setupHamburgerMenu();
  setupFooterDates();
  setupCourseFilters();
  loadCourses();
});
