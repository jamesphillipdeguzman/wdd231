export { fetchMembers, dropdownMembers };

async function fetchMembers() {
    try {
        // Try root-absolute first, fallback to relative if needed
        let response = await fetch('/chamber/data/members.json');

        if (!response.ok) {
            response = await fetch('./data/members.json');
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error(`Expected JSON but received ${contentType || 'unknown type'}`);
        }

        const members = await response.json();
        dropdownMembers(members);
        return members;
    } catch (error) {
        console.error('Error fetching members in fetchMembers():', error);
        return [];
    }
}

// Populate dropdown with chamber member names
const dropdownMembers = (members) => {
    const selector = document.querySelector('#dynamic-businesses');
    if (!selector || !Array.isArray(members)) return;

    // Use a Set of existing option values for fast O(1) duplicate checks
    const existingValues = new Set(Array.from(selector.options, (opt) => opt.value));

    members.forEach((member) => {
        const memberValue = `${member.id} ${member.name}`;

        if (!existingValues.has(memberValue)) {
            const option = document.createElement('option');
            option.value = memberValue;
            option.textContent = member.name; // User-facing label looks cleaner with just the name
            selector.append(option);
            existingValues.add(memberValue);
        }
    });
};