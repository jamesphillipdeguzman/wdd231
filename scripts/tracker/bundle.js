(function () {
  'use strict';

  /* --- scripts/tracker/course-data.js --- */
  const COURSES_DATA = {
    "program": {
      "title": "Bachelor of Science in Software Development",
      "degree": "BS",
      "institution": "Brigham Young University - Idaho",
      "partner": "BYU-Pathway Worldwide",
      "status": "Active Candidate (In Progress)",
      "activeTerm": "2026 Block 5",
      "expectedGraduation": "December 2026 (2026 Block 6 / Fall 2026)",
      "totalRequiredCredits": 120,
      "totalEarnedCredits": 87,
      "creditsInProgress": 6,
      "creditsScheduled": 9
    },
    "credentials": [
      {
        "id": "pathway-connect",
        "title": "PathwayConnect Certificate",
        "type": "Certificate",
        "status": "Earned",
        "completed": true,
        "awardDate": "November 2023",
        "requiredCredits": 7,
        "earnedCredits": 7,
        "description": "Foundational life, professional, and university transition skills via BYU-Pathway."
      },
      {
        "id": "web-computer-programming",
        "title": "Web & Computer Programming Certificate",
        "type": "Certificate",
        "status": "Earned",
        "completed": true,
        "awardDate": "2024 Fall",
        "requiredCredits": 12,
        "earnedCredits": 12,
        "description": "Core programming syntax, classes, algorithms, functions, and responsive dynamic frontend foundations."
      },
      {
        "id": "web-development",
        "title": "Web Development Certificate",
        "type": "Certificate",
        "status": "Earned",
        "completed": true,
        "awardDate": "2025 Term 6",
        "requiredCredits": 15,
        "earnedCredits": 15,
        "description": "Comprehensive full-stack development, server APIs, RESTful services, databases, and modern JS architecture."
      },
      {
        "id": "aas-software-dev",
        "title": "Associate of Applied Science (AAS) in Software Development",
        "shortTitle": "AAS Software Development",
        "type": "Associate Degree",
        "status": "Earned / Conferred",
        "completed": true,
        "awardDate": "April 18, 2026",
        "requiredCredits": 60,
        "earnedCredits": 60,
        "description": "Associate of Applied Science (AAS) degree conferred by BYU-Idaho through integrated certificate pathways."
      },
      {
        "id": "bs-software-dev",
        "title": "Bachelor of Science (BS) in Software Development",
        "shortTitle": "BS Software Development",
        "type": "Bachelor's Degree",
        "status": "In Progress",
        "badgeText": "In Progress • Active Block 5",
        "completed": false,
        "awardDate": "December 2026",
        "requiredCredits": 120,
        "earnedCredits": 87,
        "description": "Encompasses stackable certificates (Web & Computer Programming, Web Development) along with general education, religion, and upper-division software development courses."
      }
    ],
    "courses": [
      {
        "subject": "PC",
        "number": 101,
        "code": "PC101",
        "title": "Life Skills",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2023 Spring Block 1",
        "courseCompletionDate": "6/7/2023",
        "certificate": "Pathway Connect",
        "description": "Focuses on foundational life skills, personal development, self-reliance, and basic academic and practical habits for university success.",
        "technology": [
          "Life Skills",
          "Foundational Academic Skills"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "PC",
        "number": 102,
        "code": "PC102",
        "title": "Professional Skills",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2023 Spring Block 2",
        "courseCompletionDate": "7/22/2023",
        "certificate": "Pathway Connect",
        "description": "Prepares students with professional communication, interpersonal, workplace etiquette, and career management skills.",
        "technology": [
          "Professional Skills",
          "Career Communication"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "CSE",
        "number": 110,
        "code": "CSEPC110",
        "title": "Introduction to Programming",
        "courseLevel": "Lower Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "A",
        "term": "2023 Fall Block 1",
        "courseCompletionDate": "10/28/2023",
        "certificate": "Web and Computer Programming",
        "description": "This course will introduce heros to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
        "technology": [
          "Python"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse110-ww-course/"
      },
      {
        "subject": "PCI",
        "number": 103,
        "code": "PCI103",
        "title": "University Skills (EQUIV)",
        "courseLevel": "Lower Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "A",
        "term": "2023 Fall Block 1",
        "courseCompletionDate": "11/1/2023",
        "certificate": "Pathway Connect",
        "description": "Helps students build effective learning methodologies, critical thinking, university transition readiness, and academic time-management routines.",
        "technology": [
          "Academic Strategy",
          "University Transition"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "REL",
        "number": 200,
        "code": "REL200IN",
        "title": "The Eternal Family",
        "courseLevel": "Lower Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "TR",
        "term": "Transfer Term",
        "courseCompletionDate": "10/30/2024",
        "certificate": "Religion",
        "description": "Study of the central role of the family in the plan of salvation as taught in the scriptures and by modern prophets.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "CIT",
        "number": 111,
        "code": "CIT111",
        "title": "Introduction to Databases",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2024 Winter Semester",
        "courseCompletionDate": "4/10/2024",
        "certificate": "Web Development",
        "description": "Introductory course covering basic database concepts and SQL.",
        "technology": [
          "SQL"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cit111-ww-course/"
      },
      {
        "subject": "CSE",
        "number": 111,
        "code": "CSE111",
        "title": "Programming with Functions",
        "courseLevel": "Lower Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "A",
        "term": "2024 Winter Semester",
        "courseCompletionDate": "4/10/2024",
        "certificate": "Web and Computer Programming",
        "description": "CSE 111 heros become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 heros write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
        "technology": [
          "Python"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse111-ww-course/"
      },
      {
        "subject": "EIL",
        "number": 170,
        "code": "EIL170",
        "title": "English International Language Listening",
        "courseLevel": "Lower Division",
        "credits": 0,
        "creditsEarned": 4.0,
        "grade": "Pass",
        "term": "2024 Winter Semester",
        "courseCompletionDate": "4/10/2024",
        "certificate": "Foundational Studies",
        "description": "Comprehensive academic listening comprehension course designed to support international and non-native English speakers.",
        "technology": [
          "English Language",
          "Listening Comprehension"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "EIL",
        "number": 172,
        "code": "EIL172",
        "title": "English International Language Reading",
        "courseLevel": "Lower Division",
        "credits": 0,
        "creditsEarned": 4.0,
        "grade": "Pass",
        "term": "2024 Winter Semester",
        "courseCompletionDate": "4/10/2024",
        "certificate": "Foundational Studies",
        "description": "Academic reading fluency and textual analysis course designed to develop advanced comprehension and critical analysis.",
        "technology": [
          "English Language",
          "Reading Comprehension"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "ENG",
        "number": 150,
        "code": "ENG150",
        "title": "Writing/Reasoning Foundation (EQUIV)",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2024 Winter Semester",
        "courseCompletionDate": "4/17/2024",
        "certificate": "General Education",
        "description": "Emphasizes academic argument, critical thinking, rhetorical analysis, and evidence-based composition across diverse disciplines.",
        "technology": [
          "Academic Writing",
          "Critical Reasoning"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "WDD",
        "number": 130,
        "code": "WDD130",
        "title": "Web Fundamentals",
        "courseLevel": "Lower Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "A-",
        "term": "2024 Winter Semester",
        "courseCompletionDate": "4/10/2024",
        "certificate": "Web and Computer Programming",
        "description": "This course introduces heros to the World Wide Web and to careers in web site design and development. The course is hands on with heros actually participating in simple web designs and programming. It is anticipated that heros who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
        "technology": [
          "HTML",
          "CSS"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/wdd130-ww-course/"
      },
      {
        "subject": "CSE",
        "number": 210,
        "code": "CSE210",
        "title": "Programming with Classes",
        "courseLevel": "Lower Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "A",
        "term": "2024 Spring Semester",
        "courseCompletionDate": "7/24/2024",
        "certificate": "Web and Computer Programming",
        "description": "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
        "technology": [
          "C#"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse210-ww-course/"
      },
      {
        "subject": "MATH",
        "number": 108,
        "code": "MATH108X",
        "title": "Math for the Real World",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "B",
        "term": "2024 Spring Semester",
        "courseCompletionDate": "7/31/2024",
        "certificate": "General Education",
        "description": "Practical quantitative reasoning and applied problem-solving using algebraic tools, financial formulas, statistical charts, and spreadsheet modeling.",
        "technology": [
          "Applied Mathematics",
          "Spreadsheet Modeling"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "REL",
        "number": 225,
        "code": "REL225CID",
        "title": "Foundations of Restoration",
        "courseLevel": "Lower Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "A-",
        "term": "2024 Spring Semester",
        "courseCompletionDate": "7/31/2024",
        "certificate": "Religion",
        "description": "Studies foundational events, doctrinal revelations, and historical developments in the restoration of the Church of Jesus Christ.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "WDD",
        "number": 131,
        "code": "WDD131",
        "title": "Dynamic Web Fundamentals",
        "courseLevel": "Lower Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "A",
        "term": "2024 Spring Semester",
        "courseCompletionDate": "7/24/2024",
        "certificate": "Web and Computer Programming",
        "description": "This course builds on prior experience in Web Fundamentals and programming. heros will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
        "technology": [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/wdd131-ww-course/"
      },
      {
        "subject": "BUS",
        "number": 301,
        "code": "BUS301",
        "title": "Adv Writing in Pro Contexts",
        "courseLevel": "Upper Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "B",
        "term": "2024 Fall Semester",
        "courseCompletionDate": "12/18/2024",
        "certificate": "Business Core",
        "description": "Advanced workplace communications, including business reports, proposals, digital correspondence, and executive presentations.",
        "technology": [
          "Professional Writing",
          "Executive Communication"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "REL",
        "number": 200,
        "code": "REL200CID",
        "title": "The Eternal Family",
        "courseLevel": "Lower Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "A",
        "term": "2024 Fall Semester",
        "courseCompletionDate": "12/18/2024",
        "certificate": "Religion",
        "description": "In-depth study of the doctrines and principles governing eternal marriage, family relationships, and parenting within the restored gospel.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "WDD",
        "number": 231,
        "code": "WDD231",
        "title": "Frontend Web Development I",
        "courseLevel": "Lower Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "A",
        "term": "2024 Fall Semester",
        "courseCompletionDate": "12/18/2024",
        "certificate": "Web and Computer Programming",
        "description": "This course builds on prior experience with Dynamic Web Fundamentals and programming. heros will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
        "technology": [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/wdd231-ww-course/"
      },
      {
        "subject": "GS",
        "number": 170,
        "code": "GS170",
        "title": "Career Development",
        "courseLevel": "Lower Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "A",
        "term": "2025 Term 1",
        "courseCompletionDate": "2/26/2025",
        "certificate": "General Studies",
        "description": "In this course, students develop resources, professional connections, and essential employability skills to obtain or improve employment in a field related to their university certificate. Students will network and apply for job opportunities in their industry, and life‑long skills are gained that will help both active and future job seekers.",
        "technology": [
          "Professional Development",
          "Career Planning",
          "Networking Skills",
          "Resume & Interview Skills"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://catalog.byupathway.edu/courses/GS170"
      },
      {
        "subject": "REL",
        "number": 250,
        "code": "REL250A",
        "title": "Jesus Christ and His Everlasting Gospel A",
        "courseLevel": "Lower Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "Pass",
        "term": "2025 Term 1",
        "courseCompletionDate": "2/26/2025",
        "certificate": "Religion",
        "description": "Explores the premortal role, mortal ministry, atonement, and post-mortal ministry of Jesus Christ as revealed in scripture.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "WDD",
        "number": 330,
        "code": "WDD330",
        "title": "Web Frontend Development II",
        "courseLevel": "Upper Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2025 Term 1",
        "courseCompletionDate": "2/22/2025",
        "certificate": "Web Development",
        "description": "Advanced frontend development with responsive design and JavaScript frameworks.",
        "technology": [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/wdd330-ww-course/"
      },
      {
        "subject": "REL",
        "number": 250,
        "code": "REL250B",
        "title": "Jesus Christ and His Everlasting Gospel B",
        "courseLevel": "Lower Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "Pass",
        "term": "2025 Term 3",
        "courseCompletionDate": "6/25/2025",
        "certificate": "Religion",
        "description": "Continuation of the study of Jesus Christ's eternal ministry, covenant promises, and his ongoing guidance in the modern dispensation.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "CSE",
        "number": 341,
        "code": "CSE341",
        "title": "Web Services",
        "courseLevel": "Upper Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2025 Term 3",
        "courseCompletionDate": "6/21/2025",
        "certificate": "Web Development",
        "description": "RESTful web services and integration with frontend applications.",
        "technology": [
          "Node.js",
          "REST API",
          "JSON",
          "HTTP"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse341-ww-course/"
      },
      {
        "subject": "CSE",
        "number": 212,
        "code": "CSE212",
        "title": "Programming with Data Structures",
        "courseLevel": "Lower Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "A",
        "term": "2025 Term 4",
        "courseCompletionDate": "8/20/2025",
        "certificate": "Software Development",
        "description": "Introduction to data structures and algorithms.",
        "technology": [
          "C#"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse212-ww-course/"
      },
      {
        "subject": "REL",
        "number": 275,
        "code": "REL275A",
        "title": "Teachings and Doctrine of the Book of Mormon A",
        "courseLevel": "Lower Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "Pass",
        "term": "2025 Term 4",
        "courseCompletionDate": "8/20/2025",
        "certificate": "Religion",
        "description": "Focuses on doctrine, covenants, sermons, and historical context across the first half of the Book of Mormon.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "CSE",
        "number": 340,
        "code": "CSE340",
        "title": "Web Backend Development",
        "courseLevel": "Upper Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2025 Term 5",
        "courseCompletionDate": "10/18/2025",
        "certificate": "Web Development",
        "description": "Server-side programming, APIs, and database integration.",
        "technology": [
          "Node.js",
          "Express",
          "MongoDB",
          "REST API"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse340-ww-course/"
      },
      {
        "subject": "REL",
        "number": 275,
        "code": "REL275B",
        "title": "Teachings and Doctrine of the Book of Mormon B",
        "courseLevel": "Lower Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "Pass",
        "term": "2025 Term 5",
        "courseCompletionDate": "10/22/2025",
        "certificate": "Religion",
        "description": "Analysis of theological themes, prophetic teachings, and Christ's ministry to the Nephites in the second half of the Book of Mormon.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "REL",
        "number": 290,
        "code": "REL290A",
        "title": "The Divine Gift of Forgiveness A",
        "courseLevel": "Lower Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "Pass",
        "term": "2025 Term 6",
        "courseCompletionDate": "12/18/2025",
        "certificate": "Religion",
        "description": "Examination of repentance, spiritual healing, personal accountability, and the infinite power of Christ's atonement.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "WDD",
        "number": 430,
        "code": "WDD430",
        "title": "Web Full-Stack Development",
        "courseLevel": "Upper Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2025 Term 6",
        "courseCompletionDate": "12/13/2025",
        "certificate": "Web Development",
        "description": "Combines frontend and backend skills to build full-stack web applications.",
        "technology": [
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/wdd430-ww-course/"
      },
      {
        "subject": "CSE",
        "number": 270,
        "code": "CSE270",
        "title": "Software Testing",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2026 Block 1",
        "courseCompletionDate": "2/25/2026",
        "certificate": "Software Development",
        "description": "Covers software testing concepts, methodologies, and tools.",
        "technology": [
          "Software Testing",
          "Test Automation",
          "Unit Testing",
          "Integration Testing",
          "Selenium"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse270-ww-course/"
      },
      {
        "subject": "REL",
        "number": 290,
        "code": "REL290B",
        "title": "The Divine Gift of Forgiveness B",
        "courseLevel": "Lower Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "Pass",
        "term": "2026 Block 1",
        "courseCompletionDate": "2/25/2026",
        "certificate": "Religion",
        "description": "Explores the redemptive power of the Savior's love, mercy, personal reconciliation, and continuous spiritual renewal.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "CSE",
        "number": 310,
        "code": "CSE310",
        "title": "Applied Programming",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2026 Block 2",
        "courseCompletionDate": "4/18/2026",
        "certificate": "Software Development",
        "description": "Practical programming projects applying advanced programming techniques.",
        "technology": [
          "Applied Programming Projects",
          "SQL Relational Databases",
          "Kotlin",
          "Python",
          "SQLite3",
          "mobile app development"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse310-ww-course/"
      },
      {
        "subject": "PUBH",
        "number": 132,
        "code": "PUBH132",
        "title": "Personal Health & Wellness",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2026 Block 2",
        "courseCompletionDate": "4/22/2026",
        "certificate": "General Education",
        "description": "Comprehensive introduction to personal fitness, nutrition, stress resilience, chronic disease prevention, and lifelong healthy behaviors.",
        "technology": [
          "Health Sciences",
          "Wellness Practices"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "REL",
        "number": 280,
        "code": "REL280A",
        "title": "Answering My Gospel Questions A",
        "courseLevel": "Lower Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "Pass",
        "term": "2026 Block 2",
        "courseCompletionDate": "4/23/2026",
        "certificate": "Religion",
        "description": "Develops sound historical, contextual, and faith-centered approaches to evaluating and answering complex gospel questions.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "CSE",
        "number": 325,
        "code": "CSE325",
        "title": ".NET Software Development",
        "courseLevel": "Upper Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2026 Block 3",
        "courseCompletionDate": "6/20/2026",
        "certificate": "Software Development",
        "description": ".NET framework and software development best practices.",
        "technology": [
          "C#",
          ".NET Ecosystem",
          "ASP.NET",
          "Blazor",
          ".NET MAUI"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse325-ww-course/"
      },
      {
        "subject": "FCS",
        "number": 160,
        "code": "FCS160",
        "title": "Family Leadership and Resource Management",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 3.0,
        "grade": "A",
        "term": "2026 Block 3",
        "courseCompletionDate": "6/20/2026",
        "certificate": "Family Studies",
        "description": "Covers foundational principles of managing family resources, budgeting, decision-making, and strengthening domestic leadership.",
        "technology": [
          "Resource Management",
          "Family Leadership"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "REL",
        "number": 333,
        "code": "REL333A",
        "title": "Teachings of Living Prophets A",
        "courseLevel": "Upper Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "Pass",
        "term": "2026 Block 3",
        "courseCompletionDate": "6/24/2026",
        "certificate": "Religion",
        "description": "Studies counsel, addresses, and doctrine given by living apostles and prophets during recent General Conferences.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "CSE",
        "number": 300,
        "code": "CSE300",
        "title": "Professional Readiness",
        "courseLevel": "Upper Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "A",
        "term": "2026 Block 4",
        "courseCompletionDate": "8/19/2026",
        "certificate": "Software Development",
        "description": "This course will help prepare students to be professionals in their major by completing activities that will provide professional connections, confidence, and employability.",
        "technology": [
          "Professional Networking",
          "Interview Preparation",
          "Career Development Tools"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse300-ww-course/"
      },
      {
        "subject": "CSE",
        "number": 370,
        "code": "CSE370",
        "title": "Software Engineering Principles",
        "courseLevel": "Upper Division",
        "credits": 2,
        "creditsEarned": 2.0,
        "grade": "A",
        "term": "2026 Block 4",
        "courseCompletionDate": "8/15/2026",
        "certificate": "Software Development",
        "description": "Students learn to analyze and make decisions in software projects through all phases of the software development lifecycle, including requirements elicitation, design, testing, verification, and maintenance.",
        "technology": [
          "SDLC Methodologies",
          "Requirements Elicitation",
          "Software Design Patterns",
          "Testing & Verification",
          "Project Management"
        ],
        "completed": true,
        "status": "Complete",
        "courselink": "https://byui-cse.github.io/cse370-ww-course/"
      },
      {
        "subject": "REL",
        "number": 333,
        "code": "REL333B",
        "title": "Teachings of Living Prophets B",
        "courseLevel": "Upper Division",
        "credits": 1,
        "creditsEarned": 1.0,
        "grade": "Pass",
        "term": "2026 Block 4",
        "courseCompletionDate": "8/15/2026",
        "certificate": "Religion",
        "description": "Examines prophetic counsel on contemporary challenges, family preservation, and current directives from church leaders.",
        "technology": [
          "Religious Studies"
        ],
        "completed": true,
        "status": "Fulfilled",
        "courselink": null
      },
      {
        "subject": "BUS",
        "number": 321,
        "code": "BUS321",
        "title": "Organizational Leadership",
        "courseLevel": "Upper Division",
        "credits": 3,
        "creditsEarned": 0.0,
        "grade": null,
        "term": "2026 Block 5",
        "courseCompletionDate": null,
        "certificate": "Business Core",
        "description": "Studies organizational behavior, strategic change management, interpersonal dynamics, motivational theories, and leadership principles.",
        "technology": [
          "Organizational Leadership",
          "Change Management"
        ],
        "completed": false,
        "status": "Current",
        "courselink": null
      },
      {
        "subject": "CSE",
        "number": 499,
        "code": "CSE499",
        "title": "Senior Project",
        "courseLevel": "Upper Division",
        "credits": 3,
        "creditsEarned": 0.0,
        "grade": null,
        "term": "2026 Block 5",
        "courseCompletionDate": null,
        "certificate": "Software Development",
        "description": "In this course, students will gain experience with directed individual or group research and study of a topic in computer science not covered by the curriculum. Students will demonstrate their ability to learn and apply new material by completing a significant project.",
        "technology": [
          "TypeScript",
          "Python",
          "FastAPI",
          "React",
          "Leaflet & GeoJSON",
          "NASA VIIRS Nightlight Data",
          "Google Gemini API",
          "Docker"
        ],
        "completed": false,
        "status": "Current",
        "courselink": "https://byui-cse.github.io/cse499-ww-course/"
      },
      {
        "subject": "HUM",
        "number": 110,
        "code": "HUM110",
        "title": "Discovery and Discernment Through the Arts",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 0.0,
        "grade": null,
        "term": "2026 Block 6",
        "courseCompletionDate": null,
        "certificate": "General Education",
        "description": "Introduces visual analysis, artistic techniques, cultural heritage, and aesthetic discernment across historic and modern art forms.",
        "technology": [
          "Visual Arts",
          "Aesthetic Analysis"
        ],
        "completed": false,
        "status": "Scheduled",
        "courselink": null
      },
      {
        "subject": "GESCI",
        "number": 110,
        "code": "GESCI110",
        "title": "Sustaining Human Life",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 0.0,
        "grade": null,
        "term": "2026 Block 6",
        "courseCompletionDate": null,
        "certificate": "General Education",
        "description": "Explores essential biological systems, environmental balance, cellular mechanisms, and sustainable practices supporting human physical life.",
        "technology": [
          "Biological Sciences",
          "Ecology"
        ],
        "completed": false,
        "status": "Scheduled",
        "courselink": null
      },
      {
        "subject": "PEACE",
        "number": 101,
        "code": "PEACE101",
        "title": "Conflict and Peace",
        "courseLevel": "Lower Division",
        "credits": 3,
        "creditsEarned": 0.0,
        "grade": null,
        "term": "2026 Block 6",
        "courseCompletionDate": null,
        "certificate": "General Education",
        "description": "Examines conflict dynamics, negotiation frameworks, interpersonal mediation, and principles of promoting enduring community peace.",
        "technology": [
          "Conflict Resolution",
          "Peacebuilding"
        ],
        "completed": false,
        "status": "Scheduled",
        "courselink": null
      }
    ]
  };

  /* --- scripts/tracker/gpa-calculator.js --- */
  /**
   * BYU-Idaho Academic & GPA Calculation Module
   * Provides pure functions for quality points, cumulative GPA, credit roll-ups,
   * and credential milestone validation.
   */

  // BYU-Idaho Standard 4.0 Grading Scale
  const GRADE_POINT_MAP = {
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.4,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.4,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.4,
    'D': 1.0,
    'D-': 0.7,
    'F': 0.0,
  };

  // Non-punitive / Non-GPA graded marks
  const NON_GPA_GRADES = new Set(['Pass', 'P', 'TR', 'CR', 'W', null, undefined]);

  /**
   * Checks whether a grade contributes to GPA quality points
   * @param {string|null} grade
   * @returns {boolean}
   */
  function isGpaEligibleGrade(grade) {
    if (!grade) return false;
    const normalized = grade.trim();
    return Object.prototype.hasOwnProperty.call(GRADE_POINT_MAP, normalized);
  }

  /**
   * Computes comprehensive degree progress stats from the course list
   * @param {Array<import('./types').Course>} courses
   * @param {number} totalRequiredCredits - standard bachelor degree requirement (120)
   * @returns {import('./types').DegreeProgressStats}
   */
  function calculateDegreeStats(courses, totalRequiredCredits = 120) {
    let totalAttemptedCredits = 0;
    let totalEarnedCredits = 0;
    let creditsInProgress = 0;
    let creditsScheduled = 0;

    let gradedCreditsAttempted = 0;
    let gradedCreditsEarned = 0;
    let nonGradedCreditsEarned = 0;
    let totalQualityPoints = 0;

    let upperDivisionCreditsEarned = 0;
    let majorCreditsEarned = 0;
    let religionCreditsEarned = 0;
    let generalEdCreditsEarned = 0;

    courses.forEach((course) => {
      const credits = Number(course.credits) || 0;
      const earned = Number(course.creditsEarned) || 0;
      const grade = course.grade ? course.grade.trim() : null;
      const isCompleted = course.completed || course.status === 'Complete' || course.status === 'Fulfilled';
      const isCurrent = course.status === 'Current';
      const isScheduled = course.status === 'Scheduled';

      if (isCompleted) {
        totalAttemptedCredits += credits;
        totalEarnedCredits += earned;

        if (course.courseLevel === 'Upper Division') {
          upperDivisionCreditsEarned += earned;
        }

        if (['CSE', 'WDD', 'CIT'].includes(course.subject)) {
          majorCreditsEarned += earned;
        } else if (course.subject === 'REL') {
          religionCreditsEarned += earned;
        } else if (['ENG', 'MATH', 'PUBH', 'ART', 'GESCI', 'PEACE', 'GS'].includes(course.subject) || course.certificate === 'General Education') {
          generalEdCreditsEarned += earned;
        }

        // GPA calculation
        if (isGpaEligibleGrade(grade)) {
          const qualityPointValue = GRADE_POINT_MAP[grade];
          const gpaCredits = earned > 0 ? earned : credits;
          gradedCreditsAttempted += gpaCredits;
          gradedCreditsEarned += gpaCredits;
          totalQualityPoints += (qualityPointValue * gpaCredits);
        } else {
          // Non-graded (Pass, TR)
          nonGradedCreditsEarned += earned;
        }
      } else if (isCurrent) {
        creditsInProgress += credits;
        totalAttemptedCredits += credits;
      } else if (isScheduled) {
        creditsScheduled += credits;
      }
    });

    const cumulativeGpa = gradedCreditsAttempted > 0
      ? Number((totalQualityPoints / gradedCreditsAttempted).toFixed(2))
      : 0.0;

    let gpaLetterEquivalent = 'N/A';
    let academicStanding = 'Good Standing';

    if (cumulativeGpa >= 3.85) {
      gpaLetterEquivalent = 'Summa Cum Laude / Dean’s List';
      academicStanding = 'Highest Honors';
    } else if (cumulativeGpa >= 3.7) {
      gpaLetterEquivalent = 'Magna Cum Laude';
      academicStanding = 'High Honors';
    } else if (cumulativeGpa >= 3.5) {
      gpaLetterEquivalent = 'Cum Laude';
      academicStanding = 'Honors';
    } else if (cumulativeGpa >= 2.0) {
      gpaLetterEquivalent = 'Satisfactory';
      academicStanding = 'Good Standing';
    } else if (gradedCreditsAttempted > 0) {
      academicStanding = 'Academic Warning';
    }

    const completionPercentage = Math.min(
      100,
      Number(((totalEarnedCredits / totalRequiredCredits) * 100).toFixed(1))
    );

    return {
      totalRequiredCredits,
      totalAttemptedCredits,
      totalEarnedCredits,
      creditsInProgress,
      creditsScheduled,
      gradedCreditsAttempted,
      gradedCreditsEarned,
      nonGradedCreditsEarned,
      totalQualityPoints: Number(totalQualityPoints.toFixed(1)),
      cumulativeGpa,
      gpaLetterEquivalent,
      academicStanding,
      upperDivisionCreditsEarned,
      upperDivisionCreditsRequired: 30, // BYU-Idaho upper division minimum
      majorCreditsEarned,
      religionCreditsEarned,
      generalEdCreditsEarned,
      completionPercentage,
    };
  }

  /**
   * Returns credential milestones and calculates their completion statuses
   * @param {Array<import('./types').Course>} courses
   * @returns {Array<import('./types').CredentialMilestone>}
   */
  function getCredentialMilestones(courses) {
    const completedCodes = new Set(
      courses
        .filter((c) => c.completed || c.status === 'Complete' || c.status === 'Fulfilled')
        .map((c) => c.code.toUpperCase().replace(/\s+/g, ''))
    );

    // Helper to check if any variant of codes are satisfied
    const hasCourse = (...codeVariants) => {
      return codeVariants.some((variant) => {
        const clean = variant.toUpperCase().replace(/\s+/g, '');
        return Array.from(completedCodes).some((code) => code.includes(clean) || clean.includes(code));
      });
    };

    const pathwayConnectComplete = hasCourse('PC101') && hasCourse('PC102') && hasCourse('PC103', 'PCI103');
    const webProgramCertComplete = hasCourse('CSE110', 'CSEPC110') &&
      hasCourse('CSE111') &&
      hasCourse('WDD130') &&
      hasCourse('CSE210') &&
      hasCourse('WDD131') &&
      hasCourse('WDD231');

    const webDevCertComplete = hasCourse('CIT111') &&
      hasCourse('WDD330') &&
      hasCourse('CSE341') &&
      hasCourse('CSE340') &&
      hasCourse('WDD430');

    // Total credits earned towards degrees
    const totalEarned = courses
      .filter((c) => c.completed || c.status === 'Complete' || c.status === 'Fulfilled')
      .reduce((sum, c) => sum + (Number(c.creditsEarned) || 0), 0);

    const bsSoftwareDevComplete = totalEarned >= 120;

    return [
      {
        id: 'pathway-connect',
        title: 'PathwayConnect Certificate',
        fullTitle: 'PathwayConnect Certificate',
        type: 'Certificate',
        requiredCredits: 7,
        earnedCredits: 7,
        completed: true,
        status: 'Earned',
        issuedTerm: 'November 2023',
        awardDate: 'November 2023',
        description: 'Foundational life, professional, and university transition skills via BYU-Pathway.',
      },
      {
        id: 'web-computer-programming',
        title: 'Web & Computer Programming Certificate',
        fullTitle: 'Web & Computer Programming Certificate',
        type: 'Certificate',
        requiredCredits: 12,
        earnedCredits: 12,
        completed: webProgramCertComplete || true,
        status: 'Earned',
        issuedTerm: '2024 Fall',
        awardDate: 'December 2024',
        description: 'Core programming syntax, classes, algorithms, functions, and responsive dynamic frontend foundations.',
      },
      {
        id: 'web-development',
        title: 'Web Development Certificate',
        fullTitle: 'Web Development Certificate',
        type: 'Certificate',
        requiredCredits: 15,
        earnedCredits: 15,
        completed: webDevCertComplete || true,
        status: 'Earned',
        issuedTerm: '2025 Term 6',
        awardDate: 'December 2025',
        description: 'Comprehensive full-stack development, server APIs, RESTful services, databases, and modern JS architecture.',
      },
      {
        id: 'aas-software-dev',
        title: 'AAS Software Development',
        fullTitle: 'Associate of Applied Science (AAS) in Software Development',
        type: 'Associate Degree',
        requiredCredits: 60,
        earnedCredits: 60,
        completed: true,
        status: 'Earned',
        issuedTerm: 'April 18, 2026',
        awardDate: 'April 18, 2026',
        description: 'Associate of Applied Science (AAS) in Software Development conferred by BYU-Idaho.',
      },
      {
        id: 'bs-software-dev',
        title: 'BS Software Development',
        fullTitle: 'Bachelor of Science (BS) in Software Development',
        type: "Bachelor's Degree",
        requiredCredits: 120,
        earnedCredits: totalEarned,
        completed: false,
        status: 'In Progress',
        badgeText: 'Active Block 5',
        issuedTerm: 'Expected: Dec 2026',
        targetCompletion: 'December 2026',
        awardDate: 'December 2026 (2026 Block 6 / Fall 2026)',
        description: 'Encompasses stackable certificates (Web & Computer Programming, Web Development) along with general education, religion, and upper-division software development courses.',
      },
    ];
  }


  /* --- scripts/tracker/state.js --- */
  /**
   * BYU-Idaho Degree Tracker - Reactive State Manager
   * Provides centralized reactive store for courses, filters, view modes, and modal states.
   */


  class TrackerState {
    constructor() {
      this.allCourses = [];
      this.filteredCourses = [];
      this.degreeStats = null;
      this.credentialMilestones = [];
      this.availableCertificates = [];
      this.availableTechnologies = [];
      this.allTermsChronological = [];

      this.filters = {
        searchQuery: '',
        status: 'All', // 'All' | 'Completed' | 'Current' | 'Scheduled'
        certificate: 'All',
        courseLevel: 'All', // 'All' | 'Lower Division' | 'Upper Division'
        technologyTag: null,
        sortBy: 'term-asc',
        viewMode: 'grid', // 'grid' | 'table' | 'timeline'
        selectedCourse: null,
        isDarkMode: false,
      };

      this.subscribers = new Set();
    }

    /**
     * Subscribe a callback to state change notifications
     * @param {Function} callback
     * @returns {Function} unsubscribe function
     */
    subscribe(callback) {
      this.subscribers.add(callback);
      return () => this.subscribers.delete(callback);
    }

    /**
     * Notify all registered subscribers of state updates
     */
    notify() {
      const snapshot = this.getSnapshot();
      this.subscribers.forEach((cb) => {
        try {
          cb(snapshot);
        } catch (err) {
          console.error('State subscriber error:', err);
        }
      });
    }

    /**
     * Retrieve an immutable snapshot of current state
     */
    getSnapshot() {
      return {
        allCourses: this.allCourses,
        filteredCourses: this.filteredCourses,
        degreeStats: this.degreeStats,
        credentialMilestones: this.credentialMilestones,
        availableCertificates: this.availableCertificates,
        availableTechnologies: this.availableTechnologies,
        allTermsChronological: this.allTermsChronological,
        filters: { ...this.filters },
      };
    }

    /**
     * Initialize state with courses loaded from courses.json
     * @param {Array<import('./types').Course>} courses
     */
    initCourses(courses) {
      this.allCourses = courses.map((course) => ({
        ...course,
        credits: Number(course.credits) || 0,
        creditsEarned: Number(course.creditsEarned) || 0,
        technology: Array.isArray(course.technology) ? course.technology : [],
        status: course.status || (course.completed ? 'Complete' : 'Scheduled'),
      }));

      // Extract unique certificates
      const certSet = new Set();
      const techCountMap = new Map();
      const termOrderMap = new Map();

      this.allCourses.forEach((c) => {
        if (c.certificate) certSet.add(c.certificate.trim());
        if (Array.isArray(c.technology)) {
          c.technology.forEach((tech) => {
            const t = tech.trim();
            techCountMap.set(t, (techCountMap.get(t) || 0) + 1);
          });
        }
        if (c.term) {
          if (!termOrderMap.has(c.term)) {
            termOrderMap.set(c.term, termOrderMap.size);
          }
        }
      });

      this.availableCertificates = Array.from(certSet).sort();
      this.availableTechnologies = Array.from(techCountMap.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([tech]) => tech);

      this.allTermsChronological = Array.from(termOrderMap.keys());

      // Initialize dark mode from system preference or localStorage
      const savedTheme = localStorage.getItem('dev-courses-theme') || localStorage.getItem('theme') || localStorage.getItem('degree-tracker-theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.filters.isDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
      this.applyDarkMode(this.filters.isDarkMode);

      // Listen for SET_THEME postMessage if embedded in iframe
      window.addEventListener('message', (event) => {
        if (event.data && (event.data.type === 'SET_THEME' || event.data.type === 'THEME_CHANGE')) {
          const isDark = event.data.theme === 'dark';
          if (this.filters.isDarkMode !== isDark) {
            this.filters.isDarkMode = isDark;
            this.applyDarkMode(isDark);
            this.notify();
          }
        }
      });

      this.recomputeStatsAndFilters();
    }

    /**
     * Recompute stats and filter course array based on active filters
     */
    recomputeStatsAndFilters() {
      this.degreeStats = calculateDegreeStats(this.allCourses);
      this.credentialMilestones = getCredentialMilestones(this.allCourses);

      const query = this.filters.searchQuery.trim().toLowerCase();
      const statusFilter = this.filters.status;
      const certFilter = this.filters.certificate;
      const levelFilter = this.filters.courseLevel;
      const techFilter = this.filters.technologyTag;

      let result = this.allCourses.filter((course) => {
        // Status filtering
        if (statusFilter !== 'All') {
          if (statusFilter === 'Completed') {
            const isDone = course.completed || course.status === 'Complete' || course.status === 'Fulfilled';
            if (!isDone) return false;
          } else if (statusFilter === 'Current') {
            if (course.status !== 'Current') return false;
          } else if (statusFilter === 'Scheduled') {
            if (course.status !== 'Scheduled') return false;
          }
        }

        // Certificate filtering
        if (certFilter !== 'All') {
          if (certFilter === 'General Education') {
            const isGE =
              course.certificate === 'General Education' ||
              course.certificate === 'Foundational Studies' ||
              course.certificate === 'Business Core' ||
              course.certificate === 'Family Studies' ||
              course.certificate === 'General Studies';
            if (!isGE) return false;
          } else if (certFilter === 'Pathway Connect') {
            const isPC = (course.certificate || '').toLowerCase().includes('pathway');
            if (!isPC) return false;
          } else if (course.certificate !== certFilter) {
            return false;
          }
        }

        // Course Level filtering
        if (levelFilter !== 'All' && course.courseLevel !== levelFilter) {
          return false;
        }

        // Specific Technology Tag filter
        if (techFilter) {
          const hasTech = course.technology.some(
            (t) => t.toLowerCase() === techFilter.toLowerCase()
          );
          if (!hasTech) return false;
        }

        // Text search query
        if (query) {
          const inCode = course.code.toLowerCase().includes(query);
          const inSubjectNum = `${course.subject} ${course.number}`.toLowerCase().includes(query);
          const inTitle = course.title.toLowerCase().includes(query);
          const inDesc = course.description ? course.description.toLowerCase().includes(query) : false;
          const inTerm = course.term ? course.term.toLowerCase().includes(query) : false;
          const inTech = course.technology.some((t) => t.toLowerCase().includes(query));

          if (!inCode && !inSubjectNum && !inTitle && !inDesc && !inTerm && !inTech) {
            return false;
          }
        }

        return true;
      });

      // Sorting
      result.sort((a, b) => {
        switch (this.filters.sortBy) {
          case 'code-asc':
            return a.code.localeCompare(b.code);
          case 'code-desc':
            return b.code.localeCompare(a.code);
          case 'credits-desc':
            return b.credits - a.credits;
          case 'grade-desc': {
            const gradeVal = (g) => {
              if (!g) return -1;
              if (g === 'A') return 4.0;
              if (g === 'A-') return 3.7;
              if (g === 'B+') return 3.3;
              if (g === 'B') return 3.0;
              if (g === 'Pass' || g === 'TR') return 2.5;
              return 0;
            };
            return gradeVal(b.grade) - gradeVal(a.grade);
          }
          case 'term-desc': {
            const idxA = this.allTermsChronological.indexOf(a.term);
            const idxB = this.allTermsChronological.indexOf(b.term);
            return idxB - idxA;
          }
          case 'term-asc':
          default: {
            const idxA = this.allTermsChronological.indexOf(a.term);
            const idxB = this.allTermsChronological.indexOf(b.term);
            return idxA - idxB;
          }
        }
      });

      this.filteredCourses = result;
      this.notify();
    }

    // --- Filter Mutation Actions ---

    setSearchQuery(query) {
      this.filters.searchQuery = query;
      this.recomputeStatsAndFilters();
    }

    setStatusFilter(status) {
      this.filters.status = status;
      this.recomputeStatsAndFilters();
    }

    setCertificateFilter(cert) {
      this.filters.certificate = cert;
      this.recomputeStatsAndFilters();
    }

    setCourseLevelFilter(level) {
      this.filters.courseLevel = level;
      this.recomputeStatsAndFilters();
    }

    setTechnologyFilter(tech) {
      // Toggle technology filter: clicking again clears it
      if (this.filters.technologyTag === tech) {
        this.filters.technologyTag = null;
      } else {
        this.filters.technologyTag = tech;
      }
      this.recomputeStatsAndFilters();
    }

    setSortBy(sortBy) {
      this.filters.sortBy = sortBy;
      this.recomputeStatsAndFilters();
    }

    setViewMode(viewMode) {
      this.filters.viewMode = viewMode;
      this.notify();
    }

    setSelectedCourse(course) {
      this.filters.selectedCourse = course;
      this.notify();
    }

    clearSelectedCourse() {
      this.filters.selectedCourse = null;
      this.notify();
    }

    resetAllFilters() {
      this.filters.searchQuery = '';
      this.filters.status = 'All';
      this.filters.certificate = 'All';
      this.filters.courseLevel = 'All';
      this.filters.technologyTag = null;
      this.filters.sortBy = 'term-asc';
      this.recomputeStatsAndFilters();
    }

    toggleDarkMode() {
      this.filters.isDarkMode = !this.filters.isDarkMode;
      this.applyDarkMode(this.filters.isDarkMode);
      const themeStr = this.filters.isDarkMode ? 'dark' : 'light';
      localStorage.setItem('degree-tracker-theme', themeStr);
      localStorage.setItem('dev-courses-theme', themeStr);
      localStorage.setItem('theme', themeStr);
      this.notify();
    }

    applyDarkMode(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  const trackerState = new TrackerState();


  /* --- scripts/tracker/components/course-card.js --- */
  /**
   * BYU-Idaho Degree Tracker - Course Card Component (Grid View)
   * Displays interactive course cards with pills, expandable description,
   * tech stack tags, direct link footer, and detail modal triggers.
   */


  /**
   * Returns color-coded Tailwind classes based on grade and status
   * @param {string|null} grade
   * @param {string} status
   */
  function getGradeBadgeStyles(grade, status) {
    if (status === 'Current') {
      return {
        bg: 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-700',
        label: 'Current Block',
        icon: 'active',
      };
    }

    if (status === 'Scheduled') {
      return {
        bg: 'bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600',
        label: 'Scheduled',
        icon: 'clock',
      };
    }

    if (!grade) {
      return {
        bg: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600',
        label: 'Pending',
        icon: 'pending',
      };
    }

    const clean = grade.trim();
    if (clean === 'Pass' || clean === 'P' || clean === 'TR' || clean === 'CR') {
      return {
        bg: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700',
        label: clean === 'TR' ? 'Transfer Credit' : 'Pass (Credit)',
        icon: 'check',
      };
    }

    if (clean.startsWith('A')) {
      return {
        bg: 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 font-bold',
        label: `Grade: ${clean}`,
        icon: 'check',
      };
    }

    if (clean.startsWith('B')) {
      return {
        bg: 'bg-teal-100 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-700 font-bold',
        label: `Grade: ${clean}`,
        icon: 'check',
      };
    }

    return {
      bg: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700',
      label: `Grade: ${clean}`,
      icon: 'info',
    };
  }

  /**
   * Returns certificate badge color theme
   * @param {string} cert
   */
  function getCertificateColor(cert) {
    if (!cert) return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    const c = cert.toLowerCase();
    if (c.includes('web and computer') || c.includes('web & computer')) {
      return 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800/60';
    }
    if (c.includes('web development')) {
      return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60';
    }
    if (c.includes('software development')) {
      return 'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
    }
    if (c.includes('religion')) {
      return 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800/60';
    }
    if (c.includes('general education')) {
      return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
    }
    if (c.includes('pathway')) {
      return 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60';
    }
    return 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
  }

  /**
   * Renders the Grid of Course Cards into the container
   * @param {HTMLElement} container
   * @param {Array<import('../types').Course>} courses
   */
  const TRACK_DEFINITIONS = [
    {
      id: 'pathway-connect',
      name: 'PathwayConnect Certificate',
      shortName: 'Pathway Connect',
      matchKeys: ['pathway connect', 'pathwayconnect'],
      awardBadge: 'Earned',
      badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700',
      type: 'Foundational Skills (BYU-Pathway)',
      order: 1,
    },
    {
      id: 'web-computer-programming',
      name: 'Web & Computer Programming Certificate',
      shortName: 'Web and Computer Programming',
      matchKeys: ['web and computer', 'web & computer', 'web and computer programming'],
      awardBadge: 'Earned',
      badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700',
      type: 'Stackable Certificate 1',
      order: 2,
    },
    {
      id: 'web-development',
      name: 'Web Development Certificate',
      shortName: 'Web Development',
      matchKeys: ['web development'],
      awardBadge: 'Earned',
      badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700',
      type: 'Stackable Certificate 2',
      order: 3,
    },
    {
      id: 'software-dev',
      name: 'Software Development Core (AAS / BS)',
      shortName: 'Software Development',
      matchKeys: ['software development'],
      awardBadge: 'Earned AAS • BS Active',
      badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-300 dark:border-blue-700',
      type: 'Associate (AAS) & Bachelor (BS) Core',
      order: 4,
    },
    {
      id: 'general-education',
      name: 'General Education & University Breadth',
      shortName: 'General Education',
      matchKeys: ['general education', 'foundational studies', 'business core', 'family studies', 'general studies'],
      awardBadge: 'Completed',
      badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700',
      type: 'University Breadth & Core',
      order: 5,
    },
    {
      id: 'religion',
      name: 'Cornerstone Religion',
      shortName: 'Religion',
      matchKeys: ['religion'],
      awardBadge: 'Completed',
      badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700',
      type: 'BYU-Idaho Religion Curriculum',
      order: 6,
    },
  ];

  function findTrackForCourse(course) {
    const cert = (course.certificate || '').toLowerCase().trim();
    for (const track of TRACK_DEFINITIONS) {
      if (track.matchKeys.some((k) => cert.includes(k))) {
        return track;
      }
    }
    return {
      id: 'other',
      name: course.certificate || 'General Electives',
      shortName: course.certificate || 'General Electives',
      matchKeys: [],
      awardBadge: 'Curriculum',
      badgeClass: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600',
      type: 'Academic Requirements',
      order: 99,
    };
  }

  function renderCourseCardHtml(course) {
    const gradeBadge = getGradeBadgeStyles(course.grade, course.status);
    const certBadgeClass = getCertificateColor(course.certificate);
    const isUpper = course.courseLevel === 'Upper Division';
    const cardId = `card-${course.code.replace(/[^a-zA-Z0-9]/g, '_')}`;

    return `
      <div
        id="${cardId}"
        class="course-card bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200/90 dark:border-slate-700/60 hover:shadow-lg hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all flex flex-col justify-between group relative"
      >
        <!-- Card Header -->
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <div class="flex flex-wrap items-center gap-1.5">
              <!-- Subject & Number Pill -->
              <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-100 shadow-sm">
                ${course.subject} ${course.number}
              </span>

              <!-- Division Level Pill -->
              <span class="text-[10px] uppercase font-semibold px-2 py-0.5 rounded ${isUpper ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}">
                ${isUpper ? 'Upper Div' : 'Lower Div'}
              </span>
            </div>

            <div class="flex items-center gap-1.5 shrink-0">
              <!-- Credits Badge -->
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/80 px-2 py-1 rounded-lg">
                ${course.credits} cr
              </span>

              <!-- Grade / Status Pill -->
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs ${gradeBadge.bg}">
                ${course.status === 'Current' ? '<span class="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>' : ''}
                ${gradeBadge.label}
              </span>
            </div>
          </div>

          <!-- Course Title & Term -->
          <h3
            class="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer card-title-trigger leading-snug"
            data-code="${course.code}"
            title="Click to view details"
          >
            ${escapeHtml(course.title)}
          </h3>

          <!-- Term and Certificate Tag -->
          <div class="flex flex-wrap items-center gap-1.5 mt-2 mb-3">
            <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
              <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              ${course.term}
            </span>

            ${course.certificate ? `
              <span class="text-[11px] font-medium px-2 py-0.5 rounded-md border ${certBadgeClass} truncate max-w-[190px]" title="${escapeHtml(course.certificate)}">
                ${escapeHtml(course.certificate)}
              </span>
            ` : ''}
          </div>

          <!-- Course Description (Expandable Accordion) -->
          <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed my-2">
            <p class="description-text line-clamp-2 transition-all">
              ${escapeHtml(course.description || 'No detailed description available for this course.')}
            </p>
            ${(course.description && course.description.length > 90) ? `
              <button class="toggle-desc-btn text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold mt-1 inline-flex items-center gap-0.5 focus:outline-none">
                <span class="desc-btn-text">Read more</span>
                <svg class="w-3 h-3 transform transition-transform desc-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            ` : ''}
          </div>

          <!-- Tech Stack Badges -->
          ${course.technology && course.technology.length > 0 ? `
            <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/60">
              <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">Tech & Competencies</span>
              <div class="flex flex-wrap gap-1">
                ${course.technology
                  .map(
                    (tech) => `
                  <button
                    class="tech-pill-btn text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 hover:bg-blue-100 dark:bg-slate-700/60 dark:hover:bg-blue-900/40 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 transition-colors border border-transparent hover:border-blue-300 dark:hover:border-blue-700 focus:outline-none"
                    data-tech="${escapeHtml(tech)}"
                    title="Filter by ${escapeHtml(tech)}"
                  >
                    ${escapeHtml(tech)}
                  </button>
                `
                  )
                  .join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Action Footer -->
        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
          <!-- Details Trigger -->
          <button
            class="card-details-btn inline-flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
            data-code="${course.code}"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>View Details</span>
          </button>

          <!-- Direct Course Site Link -->
          ${course.courselink ? `
            <a
              href="${course.courselink}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-800"
              title="Launch official course site / repo"
            >
              <span>Course Site</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          ` : `
            <span class="text-[11px] text-slate-400 dark:text-slate-500 italic">No public link</span>
          `}
        </div>
      </div>
    `;
  }

  function renderCourseGrid(container, courses) {
    if (!container) return;

    if (courses.length === 0) {
      container.innerHTML = `
      <div class="col-span-full bg-white dark:bg-slate-800/90 rounded-2xl p-12 text-center border border-dashed border-slate-300 dark:border-slate-700">
        <svg class="w-12 h-12 text-slate-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h4 class="text-base font-bold text-slate-800 dark:text-slate-200">No courses match your filter criteria</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Try resetting filters or searching for another subject or skill.</p>
        <button id="empty-reset-btn" class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all">
          Clear All Filters
        </button>
      </div>
    `;

      const resetBtn = container.querySelector('#empty-reset-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => trackerState.resetAllFilters());
      }
      return;
    }

    const snapshot = trackerState.getSnapshot();
    const filters = snapshot.filters;
    const activeCert = filters.certificate;
    const hasSearchOrTech = Boolean(
      (filters.searchQuery && filters.searchQuery.trim()) || filters.technologyTag
    );

    const trackMap = new Map();

    courses.forEach((course) => {
      const track = findTrackForCourse(course);
      if (!trackMap.has(track.id)) {
        trackMap.set(track.id, {
          track,
          courses: [],
          totalCredits: 0,
          earnedCredits: 0,
        });
      }
      const entry = trackMap.get(track.id);
      entry.courses.push(course);
      const cr = Number(course.credits) || 0;
      entry.totalCredits += cr;
      if (course.completed || course.status === 'Complete' || course.status === 'Fulfilled') {
        entry.earnedCredits += Number(course.creditsEarned) || cr;
      }
    });

    const trackGroups = Array.from(trackMap.values()).sort(
      (a, b) => a.track.order - b.track.order
    );

    const tracksWithOpenState = trackGroups.map((group) => {
      let isOpen = false;
      if (activeCert && activeCert !== 'All') {
        const activeNorm = activeCert.toLowerCase().trim();
        const matches =
          group.track.matchKeys.some((k) => activeNorm.includes(k) || k.includes(activeNorm)) ||
          group.track.name.toLowerCase().includes(activeNorm) ||
          group.track.shortName.toLowerCase().includes(activeNorm);
        isOpen = matches;
      } else if (hasSearchOrTech) {
        isOpen = true;
      } else {
        isOpen = false;
      }
      return { ...group, isOpen };
    });

    const anyOpen = tracksWithOpenState.some((g) => g.isOpen);

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Tracks Header Summary & Toggle All Button -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
              Stackable Tree
            </span>
            <span class="font-medium">
              ${trackGroups.length} certificate track${trackGroups.length === 1 ? '' : 's'} &bull; Click any track banner to expand/collapse
            </span>
          </div>
          <button
            id="toggle-all-tracks-btn"
            type="button"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors shadow-xs"
            title="Toggle all certificate accordions"
          >
            <span id="toggle-tracks-icon">${anyOpen ? '⤡' : '⤢'}</span>
            <span id="toggle-tracks-text">${anyOpen ? 'Collapse All Tracks' : 'Expand All Tracks'}</span>
          </button>
        </div>

        <!-- Collapsible Track Accordions -->
        <div class="space-y-4">
          ${tracksWithOpenState
            .map(({ track, courses: groupCourses, totalCredits, earnedCredits, isOpen }) => {
              return `
                <details
                  class="cert-track-accordion group bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-600"
                  data-track-id="${track.id}"
                  data-cert-short="${escapeHtml(track.shortName)}"
                  ${isOpen ? 'open' : ''}
                >
                  <summary class="flex items-center justify-between p-4 sm:p-5 cursor-pointer select-none bg-slate-50/80 dark:bg-slate-900/60 hover:bg-slate-100/80 dark:hover:bg-slate-900 transition-colors list-none gap-3">
                    <div class="flex items-center gap-3 sm:gap-4 flex-wrap">
                      <!-- Rotating Chevron -->
                      <span class="w-7 h-7 rounded-full bg-slate-200/70 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-90 group-open:bg-blue-100 dark:group-open:bg-blue-900/40 group-open:text-blue-600 dark:group-open:text-blue-400 transition-all duration-200 shrink-0">
                        <svg class="w-4 h-4 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>

                      <div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                            ${escapeHtml(track.name)}
                          </h3>
                          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${track.badgeClass}">
                            ${escapeHtml(track.awardBadge)}
                          </span>
                        </div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          ${escapeHtml(track.type)}
                        </p>
                      </div>
                    </div>

                    <!-- Summary Stats: Credits & Course Count -->
                    <div class="flex items-center gap-2 sm:gap-3 shrink-0 text-xs">
                      <span class="hidden sm:inline-flex items-center gap-1 font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xs">
                        <span class="font-bold text-slate-900 dark:text-white">${earnedCredits}/${totalCredits}</span> cr
                      </span>
                      <span class="inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-xs bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-sky-400 border border-blue-200 dark:border-slate-700 shadow-xs">
                        ${groupCourses.length} ${groupCourses.length === 1 ? 'course' : 'courses'}
                      </span>
                    </div>
                  </summary>

                  <!-- Expanded Course Card Grid -->
                  <div class="p-4 sm:p-5 border-t border-slate-200/80 dark:border-slate-700/60 bg-slate-50/40 dark:bg-slate-950/30">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      ${groupCourses.map(renderCourseCardHtml).join('')}
                    </div>
                  </div>
                </details>
              `;
            })
            .join('')}
        </div>
      </div>
    `;

    // Wire Card and Accordion Interactions
    wireCardEvents(container, courses);
  }

  function updateToggleAllTracksBtn(container) {
    const toggleBtn = container.querySelector('#toggle-all-tracks-btn');
    if (!toggleBtn) return;
    const accordions = container.querySelectorAll('.cert-track-accordion');
    const isAnyClosed = Array.from(accordions).some((acc) => !acc.open);
    const icon = toggleBtn.querySelector('#toggle-tracks-icon');
    const text = toggleBtn.querySelector('#toggle-tracks-text');
    if (icon && text) {
      icon.textContent = isAnyClosed ? '⤢' : '⤡';
      text.textContent = isAnyClosed ? 'Expand All Tracks' : 'Collapse All Tracks';
    }
  }

  function wireCardEvents(container, courses) {
    // Toggle all tracks button
    const toggleAllBtn = container.querySelector('#toggle-all-tracks-btn');
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', () => {
        const allTrackAccordions = container.querySelectorAll('.cert-track-accordion');
        const isAnyClosed = Array.from(allTrackAccordions).some((acc) => !acc.open);
        allTrackAccordions.forEach((acc) => {
          acc.open = isAnyClosed;
        });
        updateToggleAllTracksBtn(container);
      });
    }

    // Sync toggle all button when any accordion is opened/closed
    container.querySelectorAll('.cert-track-accordion').forEach((acc) => {
      acc.addEventListener('toggle', () => {
        updateToggleAllTracksBtn(container);
      });
    });
    // Expand/collapse description accordion
    container.querySelectorAll('.toggle-desc-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const parent = btn.closest('.course-card');
        const textEl = parent.querySelector('.description-text');
        const label = btn.querySelector('.desc-btn-text');
        const chevron = btn.querySelector('.desc-chevron');

        if (textEl.classList.contains('line-clamp-2')) {
          textEl.classList.remove('line-clamp-2');
          label.textContent = 'Show less';
          chevron.classList.add('rotate-180');
        } else {
          textEl.classList.add('line-clamp-2');
          label.textContent = 'Read more';
          chevron.classList.remove('rotate-180');
        }
      });
    });

    // Tech tag click to filter
    container.querySelectorAll('.tech-pill-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        trackerState.setTechnologyFilter(btn.dataset.tech);
      });
    });

    // Click card title or View Details button to open modal
    const openModal = (code) => {
      const found = courses.find((c) => c.code === code);
      if (found) {
        trackerState.setSelectedCourse(found);
      }
    };

    container.querySelectorAll('.card-title-trigger, .card-details-btn').forEach((el) => {
      el.addEventListener('click', () => {
        openModal(el.dataset.code);
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }


  /* --- scripts/tracker/components/course-table.js --- */
  /**
   * BYU-Idaho Degree Tracker - Compact Data Table View Component
   * Accessible, sortable data table providing high-density academic inspection.
   */


  /**
   * Renders the Compact Data Table View
   * @param {HTMLElement} container
   * @param {Array<import('../types').Course>} courses
   * @param {string} currentSortBy
   */
  function renderCourseTable(container, courses, currentSortBy) {
    if (!container) return;

    if (courses.length === 0) {
      container.innerHTML = `
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-12 text-center border border-dashed border-slate-300 dark:border-slate-700">
        <h4 class="text-base font-bold text-slate-800 dark:text-slate-200">No courses match your filter criteria</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Try resetting filters to show academic entries.</p>
        <button id="table-empty-reset-btn" class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all">
          Reset All Filters
        </button>
      </div>
    `;
      const resetBtn = container.querySelector('#table-empty-reset-btn');
      if (resetBtn) resetBtn.addEventListener('click', () => trackerState.resetAllFilters());
      return;
    }

    const renderSortIndicator = (key) => {
      if (currentSortBy.startsWith(key)) {
        const isDesc = currentSortBy.endsWith('desc');
        return `<svg class="w-3.5 h-3.5 ml-1 text-blue-600 dark:text-blue-400 inline-block transform ${isDesc ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>`;
      }
      return `<svg class="w-3.5 h-3.5 ml-1 text-slate-300 dark:text-slate-600 inline-block opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>`;
    };

    container.innerHTML = `
    <div class="bg-white dark:bg-slate-800/90 rounded-2xl shadow-sm border border-slate-200/90 dark:border-slate-700/60 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs" role="table" aria-label="Course list table">
          <thead class="bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-700/80 uppercase tracking-wider text-[11px]">
            <tr>
              <th scope="col" class="py-3.5 px-4 cursor-pointer group hover:text-blue-600 table-sort-th" data-sort="code">
                <div class="flex items-center">
                  <span>Code</span>
                  ${renderSortIndicator('code')}
                </div>
              </th>
              <th scope="col" class="py-3.5 px-4 min-w-[220px]">Course Title & Track</th>
              <th scope="col" class="py-3.5 px-3">Level</th>
              <th scope="col" class="py-3.5 px-3 text-center cursor-pointer group hover:text-blue-600 table-sort-th" data-sort="credits">
                <div class="flex items-center justify-center">
                  <span>Credits</span>
                  ${renderSortIndicator('credits')}
                </div>
              </th>
              <th scope="col" class="py-3.5 px-4 cursor-pointer group hover:text-blue-600 table-sort-th" data-sort="term">
                <div class="flex items-center">
                  <span>Term</span>
                  ${renderSortIndicator('term')}
                </div>
              </th>
              <th scope="col" class="py-3.5 px-3 text-center cursor-pointer group hover:text-blue-600 table-sort-th" data-sort="grade">
                <div class="flex items-center justify-center">
                  <span>Grade</span>
                  ${renderSortIndicator('grade')}
                </div>
              </th>
              <th scope="col" class="py-3.5 px-4 text-center">Status</th>
              <th scope="col" class="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-700 dark:text-slate-300">
            ${courses
        .map((course) => {
          const gradeBadge = getGradeBadgeStyles(course.grade, course.status);
          const certColor = getCertificateColor(course.certificate);
          const isUpper = course.courseLevel === 'Upper Division';

          return `
                  <tr class="hover:bg-blue-50/40 dark:hover:bg-slate-700/40 transition-colors group">
                    <!-- Code -->
                    <td class="py-3.5 px-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                      ${course.subject} ${course.number}
                    </td>

                    <!-- Title & Certificate -->
                    <td class="py-3.5 px-4">
                      <div class="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 cursor-pointer table-row-modal-trigger transition-colors" data-code="${course.code}">
                        ${escapeHtml(course.title)}
                      </div>
                      ${course.certificate ? `
                        <span class="inline-block mt-1 text-[10px] font-medium px-2 py-0.5 rounded border ${certColor}">
                          ${escapeHtml(course.certificate)}
                        </span>
                      ` : ''}
                    </td>

                    <!-- Level -->
                    <td class="py-3.5 px-3 whitespace-nowrap">
                      <span class="text-[10px] font-semibold px-2 py-0.5 rounded ${isUpper ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}">
                        ${isUpper ? 'Upper' : 'Lower'}
                      </span>
                    </td>

                    <!-- Credits -->
                    <td class="py-3.5 px-3 text-center whitespace-nowrap font-bold text-slate-800 dark:text-slate-200">
                      ${course.credits}
                    </td>

                    <!-- Term -->
                    <td class="py-3.5 px-4 whitespace-nowrap text-slate-600 dark:text-slate-400 font-medium">
                      ${course.term}
                    </td>

                    <!-- Grade -->
                    <td class="py-3.5 px-3 text-center whitespace-nowrap">
                      <span class="inline-block px-2.5 py-0.5 rounded text-[11px] ${gradeBadge.bg}">
                        ${course.grade || (course.status === 'Current' ? 'In Prog' : '—')}
                      </span>
                    </td>

                    <!-- Status -->
                    <td class="py-3.5 px-4 text-center whitespace-nowrap">
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${course.status === 'Complete' || course.status === 'Fulfilled'
              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
              : course.status === 'Current'
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300'
                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
            }">
                        <span class="w-1.5 h-1.5 rounded-full ${course.status === 'Complete' || course.status === 'Fulfilled'
              ? 'bg-emerald-500'
              : course.status === 'Current'
                ? 'bg-blue-500 animate-pulse'
                : 'bg-slate-400'
            }"></span>
                        ${course.status}
                      </span>
                    </td>

                    <!-- Actions -->
                    <td class="py-3.5 px-4 text-right whitespace-nowrap space-x-2">
                      <button
                        class="table-row-modal-trigger font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        data-code="${course.code}"
                        title="View Course Details"
                        aria-label="View Details for ${course.subject} ${course.number}"
                      >
                        <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      </button>

                      ${course.courselink ? `
                        <a
                          href="${course.courselink}"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 p-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 inline-block transition-colors"
                          title="Open Course Website"
                          aria-label="Open Course Website for ${course.subject} ${course.number}"
                        >
                          <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                      ` : ''}
                    </td>
                  </tr>
                `;
        })
        .join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

    // Attach Table Events
    container.querySelectorAll('.table-row-modal-trigger').forEach((el) => {
      el.addEventListener('click', () => {
        const code = el.dataset.code;
        const found = courses.find((c) => c.code === code);
        if (found) trackerState.setSelectedCourse(found);
      });
    });

    // Table header sorting
    container.querySelectorAll('.table-sort-th').forEach((th) => {
      th.addEventListener('click', () => {
        const key = th.dataset.sort;
        if (currentSortBy.startsWith(key)) {
          trackerState.setSortBy(currentSortBy.endsWith('asc') ? `${key}-desc` : `${key}-asc`);
        } else {
          trackerState.setSortBy(`${key}-asc`);
        }
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }


  /* --- scripts/tracker/components/timeline.js --- */
  /**
   * BYU-Idaho Degree Tracker - Chronological Timeline / Term Roadmap View Component
   * Groups courses by academic term from 2023 Spring Block 1 to 2026 Block 6,
   * with visual status indicators for past, current, and upcoming terms.
   */


  /**
   * Renders the Chronological Roadmap Timeline
   * @param {HTMLElement} container
   * @param {Array<import('../types').Course>} courses
   * @param {Array<string>} allTermsChronological
   */
  function renderTimelineRoadmap(container, courses, allTermsChronological) {
    if (!container) return;

    if (courses.length === 0) {
      container.innerHTML = `
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-12 text-center border border-dashed border-slate-300 dark:border-slate-700">
        <h4 class="text-base font-bold text-slate-800 dark:text-slate-200">No courses match your filter criteria</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Reset your filters to see the full academic roadmap.</p>
        <button id="timeline-empty-reset-btn" class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all">
          Reset All Filters
        </button>
      </div>
    `;
      const resetBtn = container.querySelector('#timeline-empty-reset-btn');
      if (resetBtn) resetBtn.addEventListener('click', () => trackerState.resetAllFilters());
      return;
    }

    // Group filtered courses by term
    const termMap = new Map();
    courses.forEach((c) => {
      const term = c.term || 'Unassigned Term';
      if (!termMap.has(term)) termMap.set(term, []);
      termMap.get(term).push(c);
    });

    // Sort terms based on defined chronological master list
    const orderedTerms = Array.from(termMap.keys()).sort((a, b) => {
      const idxA = allTermsChronological.indexOf(a);
      const idxB = allTermsChronological.indexOf(b);
      if (idxA === -1 && idxB === -1) return a.localeCompare(b);
      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });

    container.innerHTML = `
    <div class="relative pl-6 md:pl-10 space-y-10 before:absolute before:left-3 md:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
      ${orderedTerms
        .map((termName) => {
          const termCourses = termMap.get(termName);
          const termCredits = termCourses.reduce((sum, c) => sum + (c.credits || 0), 0);
          const termEarned = termCourses.reduce((sum, c) => sum + (c.creditsEarned || 0), 0);

          const hasCurrent = termCourses.some((c) => c.status === 'Current');
          const hasScheduled = termCourses.every((c) => c.status === 'Scheduled');
          const isCompleted = termCourses.every(
            (c) => c.completed || c.status === 'Complete' || c.status === 'Fulfilled'
          );

          let nodeStyle = {
            dot: 'bg-emerald-500 border-emerald-200 dark:border-emerald-900',
            badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
            label: 'Completed Term',
            icon: `<svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`,
          };

          if (hasCurrent) {
            nodeStyle = {
              dot: 'bg-blue-600 border-blue-200 dark:border-blue-900 animate-pulse ring-4 ring-blue-500/30',
              badge: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300 dark:border-blue-800 font-bold',
              label: 'Active Term (Current Block)',
              icon: `<span class="w-2 h-2 rounded-full bg-white"></span>`,
            };
          } else if (hasScheduled) {
            nodeStyle = {
              dot: 'bg-slate-400 border-slate-200 dark:border-slate-800',
              badge: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700',
              label: 'Upcoming Block',
              icon: `<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            };
          } else if (termName.toLowerCase().includes('transfer')) {
            nodeStyle = {
              dot: 'bg-purple-600 border-purple-200 dark:border-purple-900',
              badge: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300 dark:border-purple-800',
              label: 'Transfer Credits',
              icon: `<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
            };
          }

          return `
            <div class="relative group">
              <!-- Timeline node circle -->
              <div class="absolute -left-[30px] md:-left-[46px] top-1.5 w-6 h-6 rounded-full ${nodeStyle.dot} border-2 flex items-center justify-center shadow-md">
                ${nodeStyle.icon}
              </div>

              <!-- Term Header Card -->
              <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200/90 dark:border-slate-700/60">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700/60">
                  <div class="flex items-center gap-2.5">
                    <h3 class="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">${termName}</h3>
                    <span class="text-[11px] px-2.5 py-0.5 rounded-full border ${nodeStyle.badge}">
                      ${nodeStyle.label}
                    </span>
                  </div>

                  <div class="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                    <span class="bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 font-medium">
                      Credits: <strong class="text-slate-900 dark:text-white">${termEarned} earned</strong> / ${termCredits} total
                    </span>
                    <span class="text-slate-400 font-mono text-[11px]">${termCourses.length} course${termCourses.length > 1 ? 's' : ''}</span>
                  </div>
                </div>

                <!-- Courses in Term -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  ${termCourses
              .map((course) => {
                const gradeBadge = getGradeBadgeStyles(course.grade, course.status);
                const certColor = getCertificateColor(course.certificate);

                return `
                        <div class="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3.5 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between group/course">
                          <div>
                            <div class="flex items-center justify-between gap-2 mb-2">
                              <span class="font-mono text-xs font-bold text-slate-900 dark:text-white px-2 py-0.5 rounded bg-white dark:bg-slate-800 shadow-xs border border-slate-200 dark:border-slate-700">
                                ${course.subject} ${course.number}
                              </span>
                              <span class="text-[11px] px-2 py-0.5 rounded ${gradeBadge.bg}">
                                ${gradeBadge.label}
                              </span>
                            </div>

                            <h4
                              class="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover/course:text-blue-600 dark:group-hover/course:text-blue-400 cursor-pointer timeline-course-trigger leading-tight line-clamp-2"
                              data-code="${course.code}"
                            >
                              ${escapeHtml(course.title)}
                            </h4>

                            ${course.certificate ? `
                              <span class="inline-block mt-2 text-[10px] font-medium px-2 py-0.5 rounded border ${certColor} truncate max-w-full">
                                ${escapeHtml(course.certificate)}
                              </span>
                            ` : ''}
                          </div>

                          <div class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between text-[11px]">
                            <span class="text-slate-500 font-semibold">${course.credits} Credits</span>
                            <button
                              class="timeline-course-trigger text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                              data-code="${course.code}"
                            >
                              Details &rarr;
                            </button>
                          </div>
                        </div>
                      `;
              })
              .join('')}
                </div>
              </div>
            </div>
          `;
        })
        .join('')}
    </div>
  `;

    // Attach modal trigger events
    container.querySelectorAll('.timeline-course-trigger').forEach((el) => {
      el.addEventListener('click', () => {
        const code = el.dataset.code;
        const found = courses.find((c) => c.code === code);
        if (found) trackerState.setSelectedCourse(found);
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }


  /* --- scripts/tracker/components/course-modal.js --- */
  /**
   * BYU-Idaho Degree Tracker - Detail Modal / Drawer Component
   * Accessible dialog displaying in-depth course information, completion dates,
   * competencies, equivalencies, and syllabus links.
   */


  let activeKeyDownHandler = null;

  /**
   * Renders or hides the modal based on state.selectedCourse
   * @param {HTMLElement} modalContainer
   * @param {import('../types').Course|null} course
   */
  function renderCourseModal(modalContainer, course) {
    if (!modalContainer) return;

    if (!course) {
      modalContainer.innerHTML = '';
      modalContainer.classList.add('hidden');
      document.body.style.overflow = '';
      if (activeKeyDownHandler) {
        document.removeEventListener('keydown', activeKeyDownHandler);
        activeKeyDownHandler = null;
      }
      return;
    }

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    const gradeBadge = getGradeBadgeStyles(course.grade, course.status);
    const certColor = getCertificateColor(course.certificate);
    const isUpper = course.courseLevel === 'Upper Division';

    modalContainer.classList.remove('hidden');
    modalContainer.innerHTML = `
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-course-title"
    >
      <!-- Backdrop with blur -->
      <div id="modal-backdrop" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"></div>

      <!-- Modal Card Container -->
      <div class="relative bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden transform transition-all z-10 my-8">
        
        <!-- Header Banner with BYU Navy Accent -->
        <div class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 py-5 relative">
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-1.5">
                <span class="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                  ${course.subject} ${course.number} (${course.code})
                </span>
                <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                  ${isUpper ? 'Upper Division (300-400)' : 'Lower Division (100-200)'}
                </span>
                <span class="text-[11px] font-medium text-blue-200">
                  ${course.term}
                </span>
              </div>
              <h2 id="modal-course-title" class="text-xl sm:text-2xl font-black text-white leading-tight">
                ${escapeHtml(course.title)}
              </h2>
            </div>

            <!-- Close Icon Button -->
            <button
              id="modal-close-btn"
              class="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close course details"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-6 space-y-6 max-h-[calc(85vh-160px)] overflow-y-auto">
          
          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <!-- Credits -->
            <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
              <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Credits</span>
              <span class="text-base font-bold text-slate-900 dark:text-white">
                ${course.creditsEarned} <span class="text-xs font-normal text-slate-500">/ ${course.credits}</span>
              </span>
            </div>

            <!-- Grade / Mark -->
            <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
              <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Final Grade</span>
              <span class="inline-block font-bold text-sm px-2 py-0.5 rounded ${gradeBadge.bg}">
                ${course.grade || 'In Progress'}
              </span>
            </div>

            <!-- Completion Date -->
            <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
              <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Completion Date</span>
              <span class="text-xs font-semibold text-slate-800 dark:text-slate-200">
                ${course.courseCompletionDate || (course.status === 'Current' ? 'Target: Oct 2026' : 'Target: Dec 2026')}
              </span>
            </div>

            <!-- Status -->
            <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
              <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Status</span>
              <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-1">
                <span class="w-2 h-2 rounded-full ${course.status === 'Complete' || course.status === 'Fulfilled' ? 'bg-emerald-500' : course.status === 'Current' ? 'bg-blue-500 animate-pulse' : 'bg-slate-400'}"></span>
                ${course.status}
              </span>
            </div>
          </div>

          <!-- Academic Certificate Track -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Academic Pathway & Certificate</h4>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border ${certColor} text-xs font-semibold">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
              <span>${escapeHtml(course.certificate || 'General Bachelor Requirements')}</span>
            </div>
          </div>

          <!-- Detailed Course Description -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Description & Syllabus Overview</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200/70 dark:border-slate-700/60">
              ${escapeHtml(course.description || 'No detailed syllabus text provided for this course.')}
            </p>
          </div>

          <!-- Technology & Competencies -->
          ${course.technology && course.technology.length > 0 ? `
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Competencies & Tech Stack</h4>
              <div class="flex flex-wrap gap-1.5">
                ${course.technology
          .map(
            (tech) => `
                  <button
                    class="modal-tech-pill px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 hover:bg-blue-100 dark:bg-slate-700/60 dark:hover:bg-blue-900/40 text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 transition-colors border border-slate-200 dark:border-slate-700 focus:outline-none"
                    data-tech="${escapeHtml(tech)}"
                    title="Filter main tracker by ${escapeHtml(tech)}"
                  >
                    ${escapeHtml(tech)}
                  </button>
                `
          )
          .join('')}
              </div>
            </div>
          ` : ''}

          <!-- Equivalency & Academic Standing Note -->
          <div class="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2.5">
            <svg class="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div class="space-y-1">
              <p class="font-semibold">BYU-Idaho Academic Standing Record</p>
              <p class="text-blue-800 dark:text-blue-400">
                ${course.status === 'Current'
        ? 'Currently enrolled in 2026 Block 5. Progress actively monitored toward term graduation.'
        : course.grade === 'TR' || course.grade === 'Pass'
          ? 'Credit fulfilled without impacting letter-grade GPA calculation. Verified on degree transcript.'
          : 'Fulfills degree requirement with evaluated quality points.'}
              </p>
            </div>
          </div>

        </div>

        <!-- Modal Footer Actions -->
        <div class="p-4 px-6 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-700/70 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
            Press <kbd class="px-1.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">Esc</kbd> to close
          </div>

          <div class="flex items-center gap-2">
            <button
              id="modal-cancel-btn"
              class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>

            ${course.courselink ? `
              <a
                href="${course.courselink}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-sm transition-all"
              >
                <span>Launch Course Site</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            ` : ''}
          </div>
        </div>

      </div>
    </div>
  `;

    // Attach Close Events
    const closeModal = () => trackerState.clearSelectedCourse();

    const closeBtn = modalContainer.querySelector('#modal-close-btn');
    const cancelBtn = modalContainer.querySelector('#modal-cancel-btn');
    const backdrop = modalContainer.querySelector('#modal-backdrop');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    // Keyboard Escape listener
    activeKeyDownHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', activeKeyDownHandler);

    // Tech pill click inside modal filters tracker and closes modal
    modalContainer.querySelectorAll('.modal-tech-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        trackerState.setTechnologyFilter(btn.dataset.tech);
        closeModal();
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }


  /* --- scripts/tracker/components/metrics.js --- */
  /**
   * BYU-Idaho Degree Tracker - Hero Metrics Component
   * Visualizes total credits progress ring, cumulative GPA, quality points,
   * and credential milestone achievement badges.
   */

  /**
   * Renders the Hero Metric Cards into the specified container element
   * @param {HTMLElement} container
   * @param {import('../types').DegreeProgressStats} stats
   * @param {Array<import('../types').CredentialMilestone>} milestones
   */
  function renderHeroMetrics(container, stats, milestones) {
    if (!container || !stats) return;

    const circumference = 2 * Math.PI * 44; // radius 44
    const progressOffset = circumference - (stats.completionPercentage / 100) * circumference;

    container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      
      <!-- Card 1: Total Credits & Degree Progress Ring -->
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 transition-all hover:shadow-md flex flex-col justify-between">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center space-x-2.5">
            <span class="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Credits</p>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">${stats.totalEarnedCredits} <span class="text-xs font-normal text-slate-400 dark:text-slate-500">/ ${stats.totalRequiredCredits} req</span></h3>
            </div>
          </div>
          
          <!-- Circular Progress SVG -->
          <div class="relative w-16 h-16 flex items-center justify-center">
            <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" class="stroke-slate-100 dark:stroke-slate-700" stroke-width="8" fill="transparent"/>
              <circle cx="50" cy="50" r="44" class="stroke-blue-600 dark:stroke-blue-500 transition-all duration-1000 ease-out" stroke-width="8" stroke-dasharray="${circumference}" stroke-dashoffset="${progressOffset}" stroke-linecap="round" fill="transparent"/>
            </svg>
            <span class="absolute text-xs font-bold text-slate-800 dark:text-slate-200">${stats.completionPercentage}%</span>
          </div>
        </div>

        <div class="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
          <div class="flex justify-between text-slate-600 dark:text-slate-300">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Completed / Earned
            </span>
            <span class="font-semibold">${stats.totalEarnedCredits} cr</span>
          </div>
          <div class="flex justify-between text-slate-600 dark:text-slate-300">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> In Progress (Active)
            </span>
            <span class="font-semibold text-blue-600 dark:text-blue-400">${stats.creditsInProgress} cr</span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></span> Scheduled Final Block
            </span>
            <span class="font-semibold">${stats.creditsScheduled} cr</span>
          </div>
        </div>
      </div>

      <!-- Card 2: Cumulative GPA & Quality Points -->
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 transition-all hover:shadow-md flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-2.5">
            <span class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Cumulative GPA</p>
              <div class="flex items-baseline gap-2">
                <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">${stats.cumulativeGpa.toFixed(2)}</h3>
                <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                  ${stats.academicStanding}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
          <div class="flex justify-between text-slate-600 dark:text-slate-300">
            <span>Total Quality Points:</span>
            <span class="font-bold text-slate-900 dark:text-white">${stats.totalQualityPoints} pts</span>
          </div>
          <div class="flex justify-between text-slate-600 dark:text-slate-300">
            <span>Graded Credits Attempted:</span>
            <span class="font-semibold">${stats.gradedCreditsAttempted} cr</span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Pass / Transfer (Non-GPA):</span>
            <span class="font-medium">${stats.nonGradedCreditsEarned} cr</span>
          </div>
        </div>
      </div>

      <!-- Card 3: Academic Distribution & Upper Division -->
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 transition-all hover:shadow-md flex flex-col justify-between">
        <div class="flex items-center space-x-2.5 mb-2">
          <span class="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Credit Breakdown</p>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Distribution</h3>
          </div>
        </div>

        <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 text-xs">
          <!-- Upper Division Progress -->
          <div>
            <div class="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
              <span>Upper Division (300-400)</span>
              <span class="font-bold">${stats.upperDivisionCreditsEarned} / ${stats.upperDivisionCreditsRequired} cr</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
              <div class="bg-purple-600 h-1.5 rounded-full" style="width: ${Math.min(100, (stats.upperDivisionCreditsEarned / stats.upperDivisionCreditsRequired) * 100)}%"></div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 pt-1 text-slate-600 dark:text-slate-300">
            <div class="bg-slate-50 dark:bg-slate-700/40 p-2 rounded-lg">
              <span class="text-[10px] uppercase text-slate-400 block font-semibold">Major CSE/WDD</span>
              <span class="text-sm font-bold text-slate-800 dark:text-slate-100">${stats.majorCreditsEarned} cr</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-700/40 p-2 rounded-lg">
              <span class="text-[10px] uppercase text-slate-400 block font-semibold">Religion & GE</span>
              <span class="text-sm font-bold text-slate-800 dark:text-slate-100">${stats.religionCreditsEarned + stats.generalEdCreditsEarned} cr</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4: Credential Milestones Quick Summary -->
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 transition-all hover:shadow-md flex flex-col justify-between">
        <div class="flex items-center space-x-2.5 mb-2">
          <!-- Adaptive Dual-Brand Milestone Lockup -->
          <div class="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border shadow-sm transition-colors bg-slate-100 border-slate-200 text-slate-800 dark:bg-slate-800/90 dark:border-slate-700/80 dark:text-white milestone-brand-badge">
            <!-- BYU-Pathway Logo -->
            <img src="images/byupw-logo.png" alt="BYU-Pathway Worldwide" class="h-5 w-auto object-contain flex-shrink-0" />

            <span class="text-slate-300 dark:text-slate-600 text-xs select-none">/</span>

            <!-- BYU-Idaho Logo -->
            <img src="images/byu-idaho-logo.png" alt="BYU-Idaho" class="h-4 w-auto object-contain flex-shrink-0 dark:brightness-0 dark:invert byu-idaho-logo" />
          </div>
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Milestone Badges</p>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Credentials</h3>
          </div>
        </div>

        <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
          ${milestones
        .slice(0, 5)
        .map((m) => `
              <div class="flex items-center justify-between gap-2 text-xs py-1">
                <div class="flex items-start gap-2 min-w-0">
                  <div class="shrink-0 mt-0.5">
                    ${m.completed
              ? `<svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`
              : `<span class="relative flex h-2 w-2 mx-1 mt-1"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span></span>`}
                  </div>
                  <div class="flex flex-col min-w-0">
                    <span class="font-semibold text-slate-800 dark:text-white leading-snug">
                      ${m.title}
                    </span>
                    ${!m.completed
              ? `<span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight mt-0.5">Expected Dec 2026</span>`
              : ''}
                  </div>
                </div>
                <div class="shrink-0 ${!m.completed ? 'self-start mt-0.5' : 'self-center'}">
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${m.completed ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-blue-600 text-white dark:bg-sky-500/20 dark:text-sky-300 dark:border dark:border-sky-500/40 shadow-xs'}" title="${!m.completed ? 'Expected Dec 2026' : 'Earned'}">
                    ${m.completed ? 'Earned' : 'In Progress'}
                  </span>
                </div>
              </div>
            `)
        .join('')}
        </div>
      </div>

    </div>
  `;
  }

  /**
   * Renders the Credential Badges Showcase Row
   * @param {HTMLElement} container
   * @param {Array<import('../types').CredentialMilestone>} milestones
   */
  function renderCredentialBadgesShowcase(container, milestones) {
    if (!container || !milestones) return;

    container.innerHTML = `
    <div class="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 rounded-2xl p-6 text-white shadow-lg border border-blue-800/40 relative overflow-hidden">
      <!-- Decorative background glow -->
      <div class="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -left-16 -bottom-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 relative z-10">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-amber-400 text-slate-950 shadow-sm">
              BYU-Pathway Worldwide & BYU-Idaho
            </span>
            <span class="text-xs text-slate-300 font-mono">Bachelor of Science in Software Development (BS)</span>
          </div>
          <h2 class="text-2xl font-black tracking-tight text-white">Degree Milestones & Conferred Credentials</h2>
          <p class="text-sm text-slate-300 max-w-2xl">
            Stackable academic credentials awarded toward your Bachelor of Science degree at BYU-Idaho.
          </p>
        </div>
        <div class="text-right shrink-0">
          <span class="text-xs uppercase tracking-wider text-slate-400 block font-semibold">Active Program</span>
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span> Active Candidate • Expected Dec 2026 (Block 6)
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 relative z-10" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        ${milestones
        .map(
          (m) => `
          <div class="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl p-4 border ${m.completed ? 'border-emerald-400/40' : 'border-blue-400/40 bg-gradient-to-b from-blue-900/30 to-slate-900/30 shadow-lg shadow-blue-950/20'} transition-all group flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${m.completed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-blue-500/25 text-blue-200 border border-blue-400/40 font-semibold'}">
                  ${m.type}
                </span>
                ${m.completed
              ? `<span class="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                      Earned
                    </span>`
              : `<span class="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/30 text-blue-200 border border-blue-400/40">
                      <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                      In Progress &bull; ${m.badgeText || 'Active Block 5'}
                    </span>`}
              </div>
              <h4 class="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">${m.fullTitle || m.title}</h4>
              <p class="text-xs text-slate-300 mt-1 line-clamp-3 leading-relaxed">${m.description}</p>
            </div>
            
            <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
              <span>${m.completed ? 'Conferred' : 'Target'}: <strong class="text-white">${m.targetCompletion || m.issuedTerm || 'December 2026'}</strong></span>
              <span>Credits: <strong class="text-white">${m.earnedCredits}/${m.requiredCredits}</strong></span>
            </div>
          </div>
        `
        )
        .join('')}
      </div>
    </div>
  `;
  }


  /* --- scripts/tracker/components/filters.js --- */
  /**
   * BYU-Idaho Degree Tracker - Filter Controls Component
   * Provides debounced search bar, status tabs, certificate pills, level toggles,
   * sort controls, and view mode switchers.
   *
   * Scoped DOM updates ensure the search input is never re-rendered while typing,
   * preventing premature focus loss and cursor position resets.
   */


  let debounceTimeout = null;

  const statusOptions = [
    { label: 'All Courses', value: 'All' },
    { label: 'Completed / Fulfilled', value: 'Completed' },
    { label: 'In Progress (Current)', value: 'Current' },
    { label: 'Scheduled / Upcoming', value: 'Scheduled' },
  ];

  const trackPills = [
    { label: 'All Tracks', value: 'All' },
    { label: 'PathwayConnect', value: 'Pathway Connect' },
    { label: 'Web & Computer Programming', value: 'Web and Computer Programming' },
    { label: 'Web Development', value: 'Web Development' },
    { label: 'Software Development', value: 'Software Development' },
    { label: 'General Education', value: 'General Education' },
    { label: 'Religion', value: 'Religion' },
  ];

  /**
   * Mounts or incrementally updates the Filter Controls bar without destroying input focus.
   * @param {HTMLElement} container
   * @param {import('../types').FilterState} filters
   * @param {Array<string>} availableCertificates
   * @param {Array<string>} availableTechnologies
   * @param {number} totalCount
   * @param {number} filteredCount
   */
  function renderFilterControls(
    container,
    filters,
    availableCertificates,
    availableTechnologies,
    totalCount,
    filteredCount
  ) {
    if (!container) return;

    const searchInput = container.querySelector('#tracker-search-input');

    // 1. Initial Mount: If not yet built, construct HTML template and bind events
    if (!searchInput) {
      mountFilterTemplate(container, filters, totalCount, filteredCount);
      wireFilterEvents(container);
      return;
    }

    // 2. Incremental Update: Update state indicators WITHOUT touching the search input DOM
    updateFilterStateIndicators(container, filters, totalCount, filteredCount);
  }

  /**
   * Constructs the base filter scaffolding (rendered once)
   */
  function mountFilterTemplate(container, filters, totalCount, filteredCount) {
    container.innerHTML = `
    <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 space-y-4">
      
      <!-- Top Row: Search Bar, Level Filter, Sort Dropdown & View Mode Switcher -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        <!-- Live Search Input -->
        <div class="relative flex-1">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <input
            type="search"
            id="tracker-search-input"
            value="${escapeHtml(filters.searchQuery)}"
            placeholder="Search course code (e.g. CSE 310), title, or tech (e.g. C#, Python, React)..."
            class="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            aria-label="Search courses by code, title, or technology"
            autocomplete="off"
            spellcheck="false"
          />
          <button
            type="button"
            id="clear-search-btn"
            class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none ${filters.searchQuery ? '' : 'hidden'}"
            aria-label="Clear search input"
            title="Clear search"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="flex flex-wrap items-center gap-2.5">
          <!-- Course Level Selector (Lower vs Upper Division) -->
          <div class="inline-flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl text-xs font-medium border border-slate-200/60 dark:border-slate-700/60" role="group" aria-label="Course Level">
            <button
              type="button"
              class="level-filter-btn px-3 py-1.5 rounded-lg transition-all ${filters.courseLevel === 'All' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              data-level="All"
            >
              All Levels
            </button>
            <button
              type="button"
              class="level-filter-btn px-3 py-1.5 rounded-lg transition-all ${filters.courseLevel === 'Lower Division' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              data-level="Lower Division"
            >
              Lower Division (100-200)
            </button>
            <button
              type="button"
              class="level-filter-btn px-3 py-1.5 rounded-lg transition-all ${filters.courseLevel === 'Upper Division' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              data-level="Upper Division"
            >
              Upper Division (300-400)
            </button>
          </div>

          <!-- Sort Dropdown -->
          <div class="relative">
            <select
              id="tracker-sort-select"
              class="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium rounded-xl py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none"
              aria-label="Sort courses by"
            >
              <option value="term-asc" ${filters.sortBy === 'term-asc' ? 'selected' : ''}>Chronological (Past &rarr; Future)</option>
              <option value="term-desc" ${filters.sortBy === 'term-desc' ? 'selected' : ''}>Chronological (Future &rarr; Past)</option>
              <option value="code-asc" ${filters.sortBy === 'code-asc' ? 'selected' : ''}>Course Code (A-Z)</option>
              <option value="credits-desc" ${filters.sortBy === 'credits-desc' ? 'selected' : ''}>Highest Credits</option>
              <option value="grade-desc" ${filters.sortBy === 'grade-desc' ? 'selected' : ''}>Highest Grade</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>

          <!-- View Mode Switcher -->
          <div class="inline-flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl text-xs border border-slate-200/60 dark:border-slate-700/60" role="group" aria-label="View Mode">
            <button
              type="button"
              id="view-mode-grid"
              class="px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${filters.viewMode === 'grid' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              title="Grid Card View"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              <span>Cards</span>
            </button>
            <button
              type="button"
              id="view-mode-table"
              class="px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${filters.viewMode === 'table' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              title="Compact Table View"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              <span>Table</span>
            </button>
            <button
              type="button"
              id="view-mode-timeline"
              class="px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${filters.viewMode === 'timeline' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              title="Chronological Roadmap View"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Timeline</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Second Row: Status Filter Tabs -->
      <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Status:</span>
        <div id="status-tabs-group" class="flex flex-wrap gap-1.5">
          ${statusOptions
        .map(
          (opt) => `
            <button
              type="button"
              class="status-tab-btn px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${filters.status === opt.value
              ? 'bg-blue-600 text-white shadow-sm font-semibold ring-2 ring-blue-600/30'
              : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }"
              data-status="${opt.value}"
            >
              ${opt.label}
            </button>
          `
        )
        .join('')}
        </div>
      </div>

      <!-- Third Row: Certificate / Program Track Filter Pills -->
      <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Certificate Track:</span>
        <div id="track-pills-group" class="flex flex-wrap gap-1.5">
          ${trackPills
        .map(
          (track) => `
            <button
              type="button"
              class="track-pill-btn px-3 py-1 rounded-lg text-xs font-medium transition-all ${filters.certificate === track.value
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'
            }"
              data-cert="${escapeHtml(track.value)}"
            >
              ${track.label}
            </button>
          `
        )
        .join('')}
        </div>
      </div>

      <!-- Active Filters / Count Summary Row -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
        <div class="flex flex-wrap items-center gap-2">
          <span id="filter-results-count" class="text-slate-500 dark:text-slate-400">
            Showing <strong class="text-slate-900 dark:text-white font-bold">${filteredCount}</strong> of ${totalCount} courses
          </span>

          <span id="active-tech-pill-container"></span>
          <span id="reset-filters-container"></span>
        </div>

        <div class="text-slate-400 dark:text-slate-500 text-[11px] font-mono">
          Click any technology pill on course cards to filter
        </div>
      </div>

    </div>
  `;
  }

  /**
   * Incrementally updates filter UI elements without touching search input focus
   */
  function updateFilterStateIndicators(container, filters, totalCount, filteredCount) {
    // 1. Sync search input value ONLY if the user is not actively typing in it
    const searchInput = container.querySelector('#tracker-search-input');
    if (searchInput && document.activeElement !== searchInput) {
      if (searchInput.value !== filters.searchQuery) {
        searchInput.value = filters.searchQuery;
      }
    }

    // 2. Toggle custom Clear button visibility
    const clearBtn = container.querySelector('#clear-search-btn');
    if (clearBtn) {
      const hasValue = searchInput ? Boolean(searchInput.value.trim()) : Boolean(filters.searchQuery);
      clearBtn.classList.toggle('hidden', !hasValue);
    }

    // 3. Update Course Level active states
    container.querySelectorAll('.level-filter-btn').forEach((btn) => {
      const isActive = btn.dataset.level === filters.courseLevel;
      btn.className = `level-filter-btn px-3 py-1.5 rounded-lg transition-all ${isActive
          ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`;
    });

    // 4. Update Sort Dropdown selection if changed externally
    const sortSelect = container.querySelector('#tracker-sort-select');
    if (sortSelect && sortSelect.value !== filters.sortBy) {
      sortSelect.value = filters.sortBy;
    }

    // 5. Update View Mode buttons
    const viewModes = ['grid', 'table', 'timeline'];
    viewModes.forEach((mode) => {
      const btn = container.querySelector(`#view-mode-${mode}`);
      if (btn) {
        const isActive = filters.viewMode === mode;
        btn.className = `px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${isActive
            ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`;
      }
    });

    // 6. Update Status Tabs
    container.querySelectorAll('.status-tab-btn').forEach((btn) => {
      const isActive = btn.dataset.status === filters.status;
      btn.className = `status-tab-btn px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${isActive
          ? 'bg-blue-600 text-white shadow-sm font-semibold ring-2 ring-blue-600/30'
          : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
        }`;
    });

    // 7. Update Track Pills
    container.querySelectorAll('.track-pill-btn').forEach((btn) => {
      const isActive = btn.dataset.cert === filters.certificate;
      btn.className = `track-pill-btn px-3 py-1 rounded-lg text-xs font-medium transition-all ${isActive
          ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
          : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'
        }`;
    });

    // 8. Update Result Count Text
    const countEl = container.querySelector('#filter-results-count');
    if (countEl) {
      countEl.innerHTML = `Showing <strong class="text-slate-900 dark:text-white font-bold">${filteredCount}</strong> of ${totalCount} courses`;
    }

    // 9. Update Active Technology Filter Pill
    const techContainer = container.querySelector('#active-tech-pill-container');
    if (techContainer) {
      if (filters.technologyTag) {
        techContainer.innerHTML = `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-medium">
          <span>Tech: <strong>${escapeHtml(filters.technologyTag)}</strong></span>
          <button type="button" id="clear-tech-filter-btn" class="hover:text-blue-950 dark:hover:text-white" aria-label="Clear technology filter">&times;</button>
        </span>
      `;
        const clearTechBtn = techContainer.querySelector('#clear-tech-filter-btn');
        if (clearTechBtn) {
          clearTechBtn.addEventListener('click', () => {
            trackerState.setTechnologyFilter(null);
          });
        }
      } else {
        techContainer.innerHTML = '';
      }
    }

    // 10. Update Reset All Filters Button
    const resetContainer = container.querySelector('#reset-filters-container');
    if (resetContainer) {
      const isFiltered = Boolean(
        (searchInput && searchInput.value.trim()) ||
        filters.searchQuery ||
        filters.status !== 'All' ||
        filters.certificate !== 'All' ||
        filters.courseLevel !== 'All' ||
        filters.technologyTag
      );

      if (isFiltered) {
        resetContainer.innerHTML = `
        <button
          type="button"
          id="reset-all-filters-btn"
          class="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1 ml-2"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          Reset filters
        </button>
      `;
        const resetBtn = resetContainer.querySelector('#reset-all-filters-btn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            trackerState.resetAllFilters();
          });
        }
      } else {
        resetContainer.innerHTML = '';
      }
    }
  }

  /**
   * Attaches event listeners to the static filter controls
   */
  function wireFilterEvents(container) {
    const searchInput = container.querySelector('#tracker-search-input');
    const clearSearchBtn = container.querySelector('#clear-search-btn');

    // Debounced Search Input (280ms)
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const value = e.target.value;

        // Instantly toggle clear button visibility without waiting for debounce
        if (clearSearchBtn) {
          clearSearchBtn.classList.toggle('hidden', !value.trim());
        }

        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          trackerState.setSearchQuery(value);
        }, 280);
      });

      // Handle pressing Enter to search immediately
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          clearTimeout(debounceTimeout);
          trackerState.setSearchQuery(searchInput.value);
        }
      });
    }

    // Clear Search Button
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        clearTimeout(debounceTimeout);
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        clearSearchBtn.classList.add('hidden');
        trackerState.setSearchQuery('');
      });
    }

    // Course Level Filter Buttons
    container.querySelectorAll('.level-filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        trackerState.setCourseLevelFilter(btn.dataset.level);
      });
    });

    // Sort Dropdown
    const sortSelect = container.querySelector('#tracker-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        trackerState.setSortBy(e.target.value);
      });
    }

    // View Mode Switchers
    const gridBtn = container.querySelector('#view-mode-grid');
    const tableBtn = container.querySelector('#view-mode-table');
    const timelineBtn = container.querySelector('#view-mode-timeline');

    if (gridBtn) gridBtn.addEventListener('click', () => trackerState.setViewMode('grid'));
    if (tableBtn) tableBtn.addEventListener('click', () => trackerState.setViewMode('table'));
    if (timelineBtn) timelineBtn.addEventListener('click', () => trackerState.setViewMode('timeline'));

    // Status Tabs
    container.querySelectorAll('.status-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        trackerState.setStatusFilter(btn.dataset.status);
      });
    });

    // Track Pills
    container.querySelectorAll('.track-pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        trackerState.setCertificateFilter(btn.dataset.cert);
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }


  /* --- scripts/tracker/app.js --- */
  /**
   * BYU-Idaho / BYU-Pathway Degree & Course Tracker
   * Principal Application Orchestrator
   */



  /**
   * Loads course dataset from data/courses.json with fallback to embedded dataset
   * @returns {Promise<Array<import('./types').Course>>}
   */
  async function loadCourseDataset() {
    try {
      const response = await fetch('data/courses.json');
      if (response.ok) {
        const data = await response.json();
        if (data && Array.isArray(data.courses)) {
          console.info(`[Degree Tracker] Successfully loaded ${data.courses.length} courses from data/courses.json`);
          return data.courses;
        }
      }
    } catch (err) {
      console.warn('[Degree Tracker] Direct fetch note:', err.message);
    }

    // Graceful offline & local file:// protocol fallback
    if (COURSES_DATA && Array.isArray(COURSES_DATA.courses)) {
      console.info(`[Degree Tracker] Loaded ${COURSES_DATA.courses.length} courses from local module dataset.`);
      return COURSES_DATA.courses;
    }

    throw new Error('Unable to fetch courses dataset from data/courses.json.');
  }

  /**
   * Updates UI based on current tracker state snapshot
   * @param {ReturnType<typeof trackerState.getSnapshot>} snapshot
   */
  function renderApp(snapshot) {
    const {
      allCourses,
      filteredCourses,
      degreeStats,
      credentialMilestones,
      availableCertificates,
      availableTechnologies,
      allTermsChronological,
      filters,
    } = snapshot;

    // 1. Render Hero Metric Cards
    const heroContainer = document.getElementById('hero-metrics-container');
    if (heroContainer && degreeStats) {
      renderHeroMetrics(heroContainer, degreeStats, credentialMilestones);
    }

    // 2. Render Credential Badges Showcase
    const credContainer = document.getElementById('credential-showcase-container');
    if (credContainer && credentialMilestones) {
      renderCredentialBadgesShowcase(credContainer, credentialMilestones);
    }

    // 3. Render Filter & Search Controls
    const filtersContainer = document.getElementById('filters-container');
    if (filtersContainer) {
      renderFilterControls(
        filtersContainer,
        filters,
        availableCertificates,
        availableTechnologies,
        allCourses.length,
        filteredCourses.length
      );
    }

    // 4. Render Active View Mode
    const viewContainer = document.getElementById('view-container');
    if (viewContainer) {
      if (filters.viewMode === 'grid') {
        renderCourseGrid(viewContainer, filteredCourses);
      } else if (filters.viewMode === 'table') {
        renderCourseTable(viewContainer, filteredCourses, filters.sortBy);
      } else if (filters.viewMode === 'timeline') {
        renderTimelineRoadmap(viewContainer, filteredCourses, allTermsChronological);
      }
    }

    // 5. Render Detail Modal
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
      renderCourseModal(modalContainer, filters.selectedCourse);
    }

    // 6. Update Dark Mode Toggle Icon
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      const isDark = document.documentElement.classList.contains('dark');
      themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggleBtn.innerHTML = isDark
        ? `<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>`
        : `<svg class="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>`;
    }
  }

  /**
   * Global Keyboard shortcuts
   */
  function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Press '/' to jump to search bar if not already in input
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const searchInput = document.getElementById('tracker-search-input');
        if (searchInput) searchInput.focus();
      }
    });
  }

  /**
   * Initialize application lifecycle
   */
  async function initTracker() {
    const loadingEl = document.getElementById('loading-indicator');
    const errorEl = document.getElementById('error-container');

    try {
      // Wire State Subscription
      trackerState.subscribe(renderApp);

      // Dark Mode Toggle Button
      const themeToggleBtn = document.getElementById('theme-toggle-btn');
      if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
          trackerState.toggleDarkMode();
        });
      }

      // Load dataset
      const courses = await loadCourseDataset();
      trackerState.initCourses(courses);

      if (loadingEl) loadingEl.classList.add('hidden');
      setupKeyboardShortcuts();
    } catch (err) {
      console.error('[Degree Tracker] Fatal error initializing app:', err);
      if (loadingEl) loadingEl.classList.add('hidden');
      if (errorEl) {
        errorEl.classList.remove('hidden');
        errorEl.querySelector('#error-message').textContent = err.message;
      }
    }
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracker);
  } else {
    initTracker();
  }



})();