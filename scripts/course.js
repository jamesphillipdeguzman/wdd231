let courses = [];

/* ===============================
   LOAD COURSES
================================ */
async function loadCourses() {
  try {
    const response = await fetch("data/course.json");
    if (!response.ok) throw new Error("Failed to load course data");

    const data = await response.json();
    courses = data.courses;

    buildCourseDropdown();
    renderAllCourses();
  } catch (error) {
    console.error("Error loading courses:", error);
  }
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

/* ----------------------------
   ACTIVE TAB FOR NAV MENUS
----------------------------- */
function setupActiveMenu(selector) {
  const links = document.querySelectorAll(selector);

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Skip external links
      if (link.hostname !== window.location.hostname) return;

      e.preventDefault();

      // Remove active from all links
      links.forEach((l) => l.classList.remove("active"));

      // Add active to clicked link
      link.classList.add("active");

      // Navigate if internal link
      const href = link.getAttribute("href");
      if (!href.startsWith("#")) {
        window.location.href = href;
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
  const filtered = courses.filter(
    (course) => course.subject === subject && course.completed,
  );
  renderCourses(filtered, false);
}

function renderCourses(courseList, showCompletedTotal) {
  const container = document.querySelector(".courses");
  if (!container) return;
  container.innerHTML = "";

  let totalCredits = 0;
  let completedCredits = 0;

  // Group courses by certificate
  const coursesByCertificate = {};
  courseList.forEach((course) => {
    if (!coursesByCertificate[course.certificate]) {
      coursesByCertificate[course.certificate] = [];
    }
    coursesByCertificate[course.certificate].push(course);
  });

  // Render courses grouped by certificate
  for (const [certificate, courses] of Object.entries(coursesByCertificate)) {
    // Certificate subheader
    const certHeader = document.createElement("li");
    certHeader.classList.add("course", "certificate-header");
    certHeader.textContent = certificate;
    container.appendChild(certHeader);

    // Render each course under this certificate
    courses.forEach((course) => {
      const li = document.createElement("li");
      li.classList.add("course");

      let statusClass = "";
      switch (course.status) {
        case "Complete":
          statusClass = "complete"; // green
          completedCredits += course.credits;
          break;
        case "In Progress":
          statusClass = "in-progress"; // yellow
          break;
        case "Not Started":
        default:
          statusClass = "not-started"; // gray/orange
      }
      li.classList.add(statusClass);

      li.innerHTML = `
        <span>
          <strong><a href="${course.courselink}" target="_blank" rel="noopener noreferrer">
            ${course.subject} ${course.number}
          </a></strong> - (${course.title}) - ${course.credits} credits
        </span>
        <span class="status-badge">${course.status}</span>
      `;

      container.appendChild(li);
      totalCredits += course.credits;
    });
  }

  // Add summary
  const summary = document.createElement("li");
  summary.classList.add("course", "summary");
  summary.textContent = showCompletedTotal
    ? `Total Credits Completed: ${completedCredits}/${totalCredits}`
    : `Total Credits: ${completedCredits}`;

  container.appendChild(summary);
}

/* ===============================
   COURSE DROPDOWN
================================ */
function buildCourseDropdown() {
  const iframe = document.querySelector("#course-iframe");
  const title = document.querySelector("#current-course-title");
  const container = document.querySelector(".course-work");
  if (!iframe || !title || !container) return;

  const select = document.createElement("select");
  select.id = "course-dropdown";
  select.innerHTML = `<option value="">Select a course</option>`;

  courses.forEach((course) => {
    const option = document.createElement("option");
    option.value = course.courselink;
    option.textContent = `${course.subject} ${course.number} - ${course.title}`;
    select.appendChild(option);
  });

  container.insertBefore(select, title.nextElementSibling);

  select.addEventListener("change", (e) => {
    if (!e.target.value) return;
    iframe.src = e.target.value;
    title.textContent = `Current Course: ${
      e.target.options[e.target.selectedIndex].text
    }`;
  });
}

/* ===============================
   INITIALIZE EVERYTHING
================================ */
document.addEventListener("DOMContentLoaded", () => {
  setupHamburgerMenu();
  setupFooterDates();
  setupCourseFilters();
  setupActiveMenu(".course-navlinks ul li a");
  setupActiveMenu("nav.top-navlinks ul li a");
  loadCourses();
});
