async function fetchCourses() {
    try {

        const response = await fetch('data/courses.json');
        if (!response.ok) {
            throw new Error('No network response.');
        }
        else {

            const data = await response.json();
            const courses = data.courses;
            console.table(courses);
            // dropdownCities(cities);
            return courses;
        }

    }
    catch (error) {
        console.error(error.message);
    }
}

export { fetchCourses };
