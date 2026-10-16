export { fetchFeaturedMembers };
import { getMemberImageUrl } from "./utils/member-image.js";

const displayFeatured = (members) => {
    const businesses = document.querySelector('#featured-businesses');
    if (!businesses || !Array.isArray(members)) return;
    businesses.innerHTML = '';

    // Filter Gold and Silver members
    const qualified = members.filter(
        (member) => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
    );

    if (qualified.length === 0) return;

    // Shuffle and pick 2-3 spotlight partners
    const shuffled = shuffleFeaturedMembers([...qualified]);
    const spotlights = shuffled.slice(0, 3);

    spotlights.forEach((member) => {
        const card = document.createElement('div');
        card.className = 'container spotlight-card';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'space-between';
        card.style.padding = '1.25rem';
        card.style.backgroundColor = '#fff';
        card.style.borderRadius = '10px';
        card.style.border = '1px solid rgba(0, 0, 0, 0.08)';
        card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.06)';

        const memberImgSrc = getMemberImageUrl(member.image);
        const fallbackSrc = getMemberImageUrl('');

        card.innerHTML = `
            <a href="${member.url}" target="_blank" rel="noopener noreferrer" style="display:block; text-align:center;">
                <img id="business-img" src="${memberImgSrc}" alt="${member.imageAlt || member.name}" onerror="this.onerror=null; this.src='${fallbackSrc}';" style="max-height:60px; max-width:160px; object-fit:contain; display:block; margin:0.5rem auto 1rem;">
            </a>
            <div class="business-info" style="flex:1; width:100%;">
                <h4 style="font-size:1.05rem; margin-bottom:0.5rem; text-align:center; color:#1E293B;">${member.name}</h4>
                <span class="business-labels">Membership:</span>
                <p><strong>${member.membershipLevel} Partner</strong></p>
                <span class="business-labels">Phone:</span>
                <p>${member.contact}</p>
                <span class="business-labels">Address:</span>
                <p>${member.address}</p>
            </div>
        `;

        businesses.appendChild(card);
    });
};

async function fetchFeaturedMembers() {
    try {
        let response = await fetch('/chamber/data/members.json');
        if (!response.ok) {
            response = await fetch('./data/members.json');
        }
        if (!response.ok) {
            throw new Error(`Failed to load members: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && !contentType.includes('application/json')) {
            throw new Error(`Expected JSON but received ${contentType}`);
        }

        const members = await response.json();
        displayFeatured(members);
        return members;
    } catch (error) {
        console.error('Failed to load featured members:', error);
        return [];
    }
}

function shuffleFeaturedMembers(members) {
    for (let i = members.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [members[i], members[j]] = [members[j], members[i]];
    }
    return members;
}
