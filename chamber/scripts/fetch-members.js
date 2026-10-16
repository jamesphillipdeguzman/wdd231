export { fetchMembers, dropdownMembers };

async function fetchMembers() {
    try {
        const response = await fetch('/chamber/data/members.json').catch(() => fetch('data/members.json'));
        if (!response.ok) {
            throw new Error('Could not fetch /chamber/data/members.json');
        }

        const members = await response.json();
        dropdownMembers(members);
        return members;
    } catch (error) {
        console.error('Error fetching members in fetchMembers():', error);
        return [];
    }
}

// Populate your dropdown with the chamber's member's names.
const dropdownMembers = (members) => {
    const selector = document.querySelector('#dynamic-businesses');
    if (!selector || !Array.isArray(members)) return;

    members.forEach((member) => {


        // populate the dropdown with the member's names
        const memberName = `${member.id} ${member.name}`;

        // Check if the option already exists...
        const existingOption = Array.from(selector.options).some(option => option.value === `${member.id} ${member.name}`);
        // Create the dropdown list only if empty initially...
        if (!existingOption) {

            const option = document.createElement('option');

            option.value = memberName;
            option.textContent = memberName;

            selector.append(option);


        }


    });

}

