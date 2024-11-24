// Define courses object details here...

const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce heros to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
        technology: [
            "Python"
        ],
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces heros to the World Wide Web and to careers in web site design and development. The course is hands-on with heros actually participating in simple web designs and programming. It is anticipated that heros who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
        technology: [
            "HTML",
            "CSS"
        ],
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "CSE 111 heros become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 heros write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
        technology: [
            "Python"
        ],
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
        technology: [
            "C#"
        ],
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds on prior experience in Web Fundamentals and programming. Heros will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
        technology: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds on prior experience with Dynamic Web Fundamentals and programming. Heros will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
        technology: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        completed: true
    }
];


const hamburgerBtn = document.querySelector('#menu');
const navigationBtn = document.querySelector('.top-navlinks');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    navigationBtn.classList.toggle('open');
});

// Get the year
const todaysDate = new Date();
const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
const timeFormat = todaysDate.toLocaleTimeString();
const formattedDate = todaysDate.toLocaleDateString('en-US', dateFormat);
const formattedDateTime = formattedDate + " " + timeFormat;

const year = document.querySelector('#currentyear');
year.innerHTML = `<span class="highlight">${todaysDate.getFullYear()}</span>`;
// year.innerHTML = `${todaysDate.getFullYear()}`

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `<span class="highlight">${formattedDateTime}</span>`;

const allCourses = document.querySelector('#all');
const cseOnly = document.querySelector('#cse');
const wddOnly = document.querySelector('#wdd');
const selectCities = document.querySelector('#dynamic-cities');

selectCities.addEventListener('mouseenter', () => {
    // alert('mouse enter');
    selectCities.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
});

selectCities.addEventListener('mouseleave', () => {
    // alert('mouse leave!');
    selectCities.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
});

// selectCities.addEventListener('hover', () => {

//     const card = document.querySelector('.cities');

//     // Create an img element and define its class name
//     const img = document.createElement('img');
//     img.className = "city-img";
//     img.setAttribute("src", `${city.image}`);
//     img.setAttribute("alt", `The city of ${city.name}`);
//     img.setAttribute('loading', 'lazy');
//     img.setAttribute('width', '100');
//     img.setAttribute('height', '100');
//     img.style.border = '1px solid #ccc';
//     img.style.boxShadow = '0px 0px 4px #888';

//     const cardTitle = document.querySelector('.city-title');

//     cardTitle.append(selector);

//     selector.append(option);
//     card.append(img);
//     // selectCities.innerHTML
//     // populateCities();
//     alert('ok');


// });
// Populate cities
// apiFetch();
// fetchCities();

// Fetch weather info for iloilo


// Populate the courses in Web and Computer Programming...
function populateCourse() {

    // All courses...


    document.querySelector('#all').addEventListener('click', () => {


        const myCourses = document.querySelector('.courses');

        myCourses.innerHTML = '';

        let courseCredits = 0;
        let courseCreditsCompleted = 0;

        for (i = 0; i < courses.length; i++) {

            const courseItem = document.createElement('li');

            courseItem.style.listStyleType = 'none';
            courseItem.style.backgroundColor = '#fff';
            courseItem.style.border = '1px solid #ccc';
            courseItem.style.padding = '10px';
            courseItem.style.margin = '10px';
            courseItem.style.color = '#000';
            courseItem.style.borderRadius = '5px';
            courseItem.style.boxShadow = '0px 0px 3px #888';

            let status = '';

            if (courses[i].completed === true) {
                status = 'Complete';
                courseItem.style.backgroundColor = 'green';
            } else if (courses[i].completed === false) {
                status = 'In Progress';
                courseItem.style.backgroundColor = 'yellow';
            } else {
                status = 'Not started';
                courseItem.style.backgroundColor = 'gray';
            }

            // Accumulator for course credits
            courseCredits += courses[i].credits;

            let myCourselist = `${courses[i].subject} ${courses[i].number} - ${status} - ${courses[i].credits} credits`;
            courseItem.innerHTML = `${myCourselist}`;
            myCourses.appendChild(courseItem);


            if ((courses[i].subject === 'WDD' || courses[i].subject === 'CSE') && courses[i].completed === true) {
                // Accumulator for course credits
                courseCreditsCompleted += courses[i].credits;


            }

        }

        // Show credit total here...
        const myCourseCredits = document.createElement('li');
        myCourseCredits.style.textAlign = 'center';
        myCourseCredits.style.listStyleType = 'none';
        myCourseCredits.style.backgroundColor = '#fff';
        myCourseCredits.style.border = '1px solid #ccc';
        myCourseCredits.style.padding = '10px';
        myCourseCredits.style.margin = '10px';
        myCourseCredits.style.color = '#000';
        myCourseCredits.style.alignItems = 'center';
        myCourseCredits.style.boxShadow = '0px 0px 3px #888';
        myCourseCredits.innerHTML = `Total Credits Completed: ${courseCreditsCompleted}/${courseCredits}`;
        myCourses.appendChild(myCourseCredits);

    });

    // All CSEs...

    document.querySelector('#cse').addEventListener('click', () => {


        const myCourses = document.querySelector('.courses');

        myCourses.innerHTML = '';

        let courseCredits = 0;

        for (i = 0; i < courses.length; i++) {

            const courseItem = document.createElement('li');
            courseItem.style.listStyleType = 'none';
            courseItem.style.border = '1px solid #ccc';
            courseItem.style.padding = '10px';
            courseItem.style.margin = '10px';
            courseItem.style.color = '#000';
            courseItem.style.borderRadius = '5px';
            courseItem.style.boxShadow = '0px 0px 3px #888';

            let status = '';

            if (courses[i].completed === true) {
                status = 'Complete';
                courseItem.style.backgroundColor = 'green';
            } else if (courses[i].completed === false) {
                status = 'In Progress';
                courseItem.style.backgroundColor = 'yellow';
            } else {
                status = 'Not started';
                courseItem.style.backgroundColor = 'gray';
            }


            if (courses[i].subject === 'CSE' && courses[i].completed === true) {
                // Accumulator for course credits
                courseCredits += courses[i].credits;
                courseItem.innerHTML = `${courses[i].subject} ${courses[i].number} - ${status} - ${courses[i].credits} credits`;
                myCourses.appendChild(courseItem);

            }


        }

        // Show credit total here...
        const myCourseCredits = document.createElement('li');
        myCourseCredits.style.textAlign = 'center';
        myCourseCredits.style.listStyleType = 'none';
        myCourseCredits.style.backgroundColor = '#fff';
        myCourseCredits.style.border = '1px solid #ccc';
        myCourseCredits.style.padding = '10px';
        myCourseCredits.style.margin = '10px';
        myCourseCredits.style.color = '#000';
        myCourseCredits.style.alignItems = 'center';
        myCourseCredits.style.boxShadow = '0px 0px 3px #888';
        myCourseCredits.innerHTML = `Total Credits: ${courseCredits} credits`;
        myCourses.appendChild(myCourseCredits);


    });


    // All WDDs...

    document.querySelector('#wdd').addEventListener('click', () => {


        const myCourses = document.querySelector('.courses');

        myCourses.innerHTML = '';

        let courseCredits = 0;

        for (i = 0; i < courses.length; i++) {

            const courseItem = document.createElement('li');
            courseItem.style.listStyleType = 'none';
            courseItem.style.border = '1px solid #ccc';
            courseItem.style.padding = '10px';
            courseItem.style.margin = '10px';
            courseItem.style.color = '#000';
            courseItem.style.borderRadius = '5px';
            courseItem.style.boxShadow = '0px 0px 3px #888';

            let status = '';

            if (courses[i].completed === true) {
                status = 'Complete';
                courseItem.style.backgroundColor = 'green';
            } else if (courses[i].completed === false) {
                status = 'In Progress';
                courseItem.style.backgroundColor = 'yellow';
            } else {
                status = 'Not started';
                courseItem.style.backgroundColor = 'gray';
            }

            if (courses[i].subject === 'WDD' && courses[i].completed === true) {
                // Accumulator for course credits
                courseCredits += courses[i].credits;
                courseItem.innerHTML = `${courses[i].subject} ${courses[i].number} - ${status} - ${courses[i].credits} credits`;
                myCourses.appendChild(courseItem);

            }

        }

        // Show credit total here...
        const myCourseCredits = document.createElement('li');
        myCourseCredits.style.textAlign = 'center';
        myCourseCredits.style.listStyleType = 'none';
        myCourseCredits.style.backgroundColor = '#fff';
        myCourseCredits.style.border = '1px solid #ccc';
        myCourseCredits.style.padding = '10px';
        myCourseCredits.style.margin = '10px';
        myCourseCredits.style.color = '#000';
        myCourseCredits.style.alignItems = 'center';
        myCourseCredits.style.boxShadow = '0px 0px 3px #888';
        myCourseCredits.innerHTML = `Total Credits: ${courseCredits} credits`;
        myCourses.appendChild(myCourseCredits);

    });


}

// Call function above...
populateCourse();


// Select all course links
const courseLinks = document.querySelectorAll('.course-link');
const iframe = document.querySelector('#course-iframe');
const courseTitle = document.querySelector('#current-course-title');

// Create a dropdown for course selection
const dropdownCourseList = document.createElement('select');
dropdownCourseList.id = 'course-dropdown';
dropdownCourseList.innerHTML = `<option value="">Select a course</option>`;

// Loop through the course links to populate the dropdown
courseLinks.forEach(link => {
    const courseName = link.getAttribute('data-course');
    const courseUrl = link.getAttribute('data-url');

    // Create an option for each course
    const option = document.createElement('option');
    option.value = courseUrl;
    option.textContent = courseName;

    dropdownCourseList.appendChild(option);
});

// Append the dropdown to a container in the HTML (for example, below the course title)
document.querySelector('.course-work').insertBefore(dropdownCourseList, courseTitle.nextElementSibling);

// Add event listener to the dropdown to update iframe when a course is selected
dropdownCourseList.addEventListener('change', (e) => {
    const selectedUrl = e.target.value;

    // If a valid URL is selected, update iframe and course title
    if (selectedUrl) {
        iframe.src = selectedUrl;
        const selectedOption = e.target.options[e.target.selectedIndex];
        courseTitle.textContent = `Current Course: ${selectedOption.textContent}`;
    }
});

