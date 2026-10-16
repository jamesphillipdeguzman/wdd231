import { fetchMembers } from "./fetch-members.js";
import { getDateTimeInfo, showHideHamburger, windowScroll } from "./base.js";

document.addEventListener('DOMContentLoaded', () => {
    showHideHamburger();
    getDateTimeInfo();
    windowScroll();
    fetchMembers();
    fetchMembersGrid(); // Automatically initialize with grid view on page load
});

const grid = document.querySelector('#grid');
if (grid) {
    grid.addEventListener('click', () => {
        grid.classList.add('active');
        const listBtn = document.querySelector('#list');
        if (listBtn) listBtn.classList.remove('active');
        fetchMembersGrid();
    });
}

const list = document.querySelector('#list');
if (list) {
    list.addEventListener('click', () => {
        list.classList.add('active');
        const gridBtn = document.querySelector('#grid');
        if (gridBtn) gridBtn.classList.remove('active');
        fetchMembersList();
    });
}

const dynamicBusinesses = document.querySelector('#dynamic-businesses');
if (dynamicBusinesses) {
    dynamicBusinesses.addEventListener('change', () => {
        const choice = dynamicBusinesses.value;
        if (!choice) {
            fetchMembersGrid();
            return;
        }
        const id = choice.split(' ');
        const filter = parseInt(id[0], 10);
        main(filter);
    });
}

async function main(filter) {
    try {
        const members = await fetchMembers();
        filterMembers(members, filter);
    } catch (error) {
        console.error('Error fetching member by filter:', error);
    }
}

// ============== FILTER SINGLE MEMBER ====================
const filterMembers = (members, filter) => {
    const businesses = document.querySelector('#businesses');
    if (!businesses) return;
    businesses.innerHTML = ''; // Ensure container is completely emptied

    businesses.style.display = 'grid';
    businesses.style.gridTemplateColumns = 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))';
    businesses.style.gap = '1.5rem';
    businesses.style.alignItems = 'stretch';
    businesses.style.justifyContent = 'center';
    businesses.style.maxWidth = '100%';
    businesses.style.padding = '10px 0';
    businesses.style.margin = '0 auto';

    const member = members[filter - 1];
    if (!member) return;

    const card = document.createElement('section');
    card.className = 'container';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'space-between';
    card.style.maxWidth = '100%';
    card.style.backgroundColor = '#fff';
    card.style.border = '1px solid rgba(0, 0, 0, 0.08)';
    card.style.borderRadius = '10px';
    card.style.margin = '0 auto';
    card.style.padding = '1.5rem 1.25rem';
    card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.06)';
    card.style.width = '100%';
    card.style.height = 'auto';
    card.style.minHeight = '100%';

    const name = document.createElement('h4');
    name.style.color = '#1E293B';
    name.style.fontFamily = 'var(--heading-font)';
    name.style.textAlign = 'center';
    name.style.marginBottom = '0.5rem';
    name.textContent = member.name;

    const address = document.createElement('p');
    address.innerHTML = `<span class="business-labels">Address:</span> ${member.address}`;

    const contact = document.createElement('p');
    contact.innerHTML = `<span class="business-labels">Phone:</span> ${member.contact}`;

    const stats = document.createElement('div');
    stats.className = 'label';
    stats.style.fontSize = '0.9rem';
    stats.style.width = '100%';

    const logo = document.createElement('img');
    logo.id = 'business-img';
    logo.setAttribute('src', getMemberImageUrl(member.image));
    logo.setAttribute('alt', `Logo of ${member.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('onerror', "this.onerror=null; this.src='/chamber/images/favicon/android-chrome-192x192.png';");
    logo.style.maxHeight = '60px';
    logo.style.maxWidth = '160px';
    logo.style.objectFit = 'contain';
    logo.style.display = 'block';
    logo.style.margin = '0.5rem auto 1rem';

    const logolink = document.createElement('a');
    logolink.setAttribute('href', member.url);
    logolink.setAttribute('target', '_blank');
    logolink.setAttribute('rel', 'noopener noreferrer');
    logolink.append(logo);

    stats.append(name);
    stats.append(address);
    stats.append(contact);

    card.append(logolink);
    card.append(stats);
    businesses.append(card);
};

function getMemberImageUrl(img) {
    if (!img) return '/chamber/images/favicon/android-chrome-192x192.png';
    if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('//')) return img;
    if (img.startsWith('/chamber/')) return img;
    if (img.startsWith('chamber/')) return '/' + img;
    if (img.startsWith('/')) return '/chamber' + img;
    return '/chamber/' + img;
}

// ============== GRID VIEW ====================
async function fetchMembersGrid() {
    if (dynamicBusinesses) dynamicBusinesses.value = '';

    try {
        const response = await fetch('/chamber/data/members.json').catch(() => fetch('data/members.json'));
        if (!response.ok) throw new Error('Could not fetch members resource');
        const members = await response.json();

        const businesses = document.getElementById('businesses');
        if (!businesses) return;
        businesses.innerHTML = ''; // Always empty before appending new cards

        businesses.style.display = 'grid';
        businesses.style.gridTemplateColumns = 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))';
        businesses.style.gap = '1.5rem';
        businesses.style.alignItems = 'stretch';
        businesses.style.justifyContent = 'center';
        businesses.style.padding = '10px 0';
        businesses.style.margin = '0 auto';

        members.forEach(member => {
            const container = document.createElement('div');
            container.className = 'container';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.justifyContent = 'space-between';
            container.style.height = 'auto';
            container.style.minHeight = '100%';
            container.style.width = '100%';
            container.style.backgroundColor = '#fff';
            container.style.border = '1px solid rgba(0, 0, 0, 0.08)';
            container.style.borderRadius = '10px';
            container.style.padding = '1.5rem 1.25rem';
            container.style.boxShadow = '0 2px 4px rgba(0,0,0,0.06)';

            const imgSrc = getMemberImageUrl(member.image);

            container.innerHTML = `
                <a href="${member.url}" target="_blank" rel="noopener noreferrer" style="display:block; text-align:center;">
                    <img id="business-img" src="${imgSrc}" alt="${member.name} logo" onerror="this.onerror=null; this.src='/chamber/images/favicon/android-chrome-192x192.png';" style="max-height:60px; max-width:160px; object-fit:contain; display:block; margin:0.5rem auto 1rem;">
                </a>
                <div class="business-info" style="flex:1; width:100%; display:flex; flex-direction:column; justify-content:flex-start;">
                    <h4 style="font-size:1.05rem; margin-bottom:0.5rem; text-align:center; color:#1E293B;">${member.name}</h4>
                    <span class="business-labels">Address:</span>
                    <p>${member.address}</p>
                    <span class="business-labels">Phone:</span>
                    <p>${member.contact}</p>
                </div>
            `;
            businesses.appendChild(container);
        });
    } catch (error) {
        console.error('Error rendering grid members:', error);
    }
}

// ============== LIST VIEW ====================
async function fetchMembersList() {
    if (dynamicBusinesses) dynamicBusinesses.value = '';

    try {
        const response = await fetch('/chamber/data/members.json').catch(() => fetch('data/members.json'));
        if (!response.ok) throw new Error('Could not fetch members resource');
        const members = await response.json();

        const businesses = document.getElementById('businesses');
        if (!businesses) return;
        businesses.innerHTML = ''; // Always empty before appending new cards

        businesses.style.display = 'flex';
        businesses.style.flexDirection = 'column';
        businesses.style.gap = '0.75rem';
        businesses.style.alignItems = 'stretch';
        businesses.style.margin = '0 auto';

        members.forEach(member => {
            const container = document.createElement('div');
            container.className = 'container list-card';
            container.style.display = 'flex';
            container.style.flexDirection = 'row';
            container.style.alignItems = 'center';
            container.style.justifyContent = 'space-between';
            container.style.flexWrap = 'wrap';
            container.style.gap = '1rem';
            container.style.backgroundColor = '#fff';
            container.style.border = '1px solid rgba(0, 0, 0, 0.08)';
            container.style.borderRadius = '8px';
            container.style.padding = '1rem 1.25rem';
            container.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
            container.style.height = 'auto';
            container.style.width = '100%';

            container.innerHTML = `
                <div style="flex:1; min-width:200px;">
                    <h4 style="font-size:1rem; color:#1E293B; margin-bottom:0.25rem;">${member.name}</h4>
                    <p style="margin:0; font-size:0.875rem; color:#64748B;">${member.address}</p>
                </div>
                <div style="font-size:0.875rem; color:#475569; min-width:140px;">
                    <strong>Phone:</strong> ${member.contact}
                </div>
                <div>
                    <a href="${member.url}" target="_blank" rel="noopener noreferrer" style="font-size:0.875rem; font-weight:600; color:var(--secondary-color); text-decoration:none;">Visit Website →</a>
                </div>
            `;
            businesses.appendChild(container);
        });
    } catch (error) {
        console.error('Error rendering list members:', error);
    }
}
