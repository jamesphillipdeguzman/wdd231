// Define courses object details here...

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
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





// Populate the courses in Web and Computer Programming...
function populateCourse() {

    // All courses...

    document.querySelector('#all').onclick = function () {


        const myCourses = document.querySelector('.courses');

        myCourses.innerHTML = '';

        let courseCredits = 0;

        for (i = 0; i < courses.length; i++) {

            const courseItem = document.createElement('li');
            courseItem.style.listStyleType = 'none';
            courseItem.style.backgroundColor = '#fff';
            courseItem.style.border = '1px solid #000';
            courseItem.style.padding = '10px';
            courseItem.style.margin = '10px';
            courseItem.style.color = '#000';


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

            // Accumuluator for course credits
            courseCredits += courses[i].credits;

            let myCourselist = `${courses[i].subject} ${courses[i].number} - ${status} - ${courses[i].credits} credits`;
            courseItem.innerHTML = myCourselist;
            myCourses.appendChild(courseItem);

        }

        // Show credit total here...
        let courseCreditTotal = document.createTextNode(`Total Credits Required: ${courseCredits}`)
        myCourses.appendChild(courseCreditTotal);

    }



    // All CSEs...

    document.querySelector('#cse').onclick = function () {


        const myCourses = document.querySelector('.courses');

        myCourses.innerHTML = '';

        for (i = 0; i < courses.length; i++) {

            const courseItem = document.createElement('li');
            courseItem.style.listStyleType = 'none';
            courseItem.style.border = '1px solid #000';
            courseItem.style.padding = '10px';
            courseItem.style.margin = '10px';
            courseItem.style.color = '#000';

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

            if (courses[i].subject === 'CSE') {
                courseItem.innerHTML = `${courses[i].subject} ${courses[i].number} - ${status} - ${courses[i].credits} credits`;
                myCourses.appendChild(courseItem);

            }



        }

    }


    // All WDDs...

    document.querySelector('#wdd').onclick = function () {


        const myCourses = document.querySelector('.courses');

        myCourses.innerHTML = '';

        for (i = 0; i < courses.length; i++) {

            const courseItem = document.createElement('li');
            courseItem.style.listStyleType = 'none';
            courseItem.style.border = '1px solid #000';
            courseItem.style.padding = '10px';
            courseItem.style.margin = '10px';
            courseItem.style.color = '#000';

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

            if (courses[i].subject === 'WDD') {
                courseItem.innerHTML = `${courses[i].subject} ${courses[i].number} - ${status} - ${courses[i].credits} credits`;
                myCourses.appendChild(courseItem);

            }



        }

    }

}

// Call the function above...
populateCourse();


