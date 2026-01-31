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

loadCourses();

/* ===============================
   NAVIGATION MENU
================================ */
const hamburgerBtn = document.querySelector("#menu");
const navigationBtn = document.querySelector(".top-navlinks");

if (hamburgerBtn && navigationBtn) {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("open");
    navigationBtn.classList.toggle("open");
  });
}

/* ===============================
   FOOTER DATES
================================ */
const today = new Date();
const yearEl = document.querySelector("#currentyear");
const lastModifiedEl = document.querySelector("#lastModified");

if (yearEl) yearEl.textContent = today.getFullYear();
if (lastModifiedEl)
  lastModifiedEl.textContent =
    today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }) +
    " " +
    today.toLocaleTimeString();

/* ===============================
   COURSE FILTER BUTTONS
================================ */
document.querySelector("#all")?.addEventListener("click", (e) => {
  e.preventDefault();
  renderAllCourses();
});

document.querySelector("#cse")?.addEventListener("click", () => {
  renderFilteredCourses("CSE");
});

document.querySelector("#wdd")?.addEventListener("click", () => {
  renderFilteredCourses("WDD");
});

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

  courseList.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("course");

    // Determine class based on status
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
      <span>${course.certificate} - ${course.subject} ${course.number} - (${course.title}) - ${course.credits} credits</span>
      <span class="status-badge">${course.status}</span>
    `;

    container.appendChild(li);
    totalCredits += course.credits;
  });

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
