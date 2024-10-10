const displayFeatured = (members) => {

    members.forEach((member) => {

        const businesses = document.querySelector('#featured-businesses');
        // const card = document.createElement('p');

        // const memberName = `${member.name}`;
        const membershipLevel = `${member.membershipLevel}`;

        if (membershipLevel == 'Gold' || membershipLevel == 'Silver') {

            // Shuffle members



            businesses.style.display = 'grid';
            businesses.style.gridTemplateColumns = 'repeat(auto-fit, minmax(100px, 1fr))';
            businesses.style.gap = '0.2rem';
            businesses.style.alignItems = 'center';
            businesses.style.alignContent = 'center';
            businesses.style.justifyContent = 'center';
            // businesses.style.fontFamily = 'Montserrat';
            // businesses.style.maxWidth = '65vw';
            businesses.style.padding = '5px 0';
            // businesses.style.margin = '0 auto';

            // dynamicBusinesses.style.gridColumn = '2/3';

            const wrapper = document.createElement('div'); // create a div 
            wrapper.className = 'wrapper';
            wrapper.style.display = 'flex';
            wrapper.style.flexDirection = 'column';
            wrapper.style.alignContent = 'center';
            wrapper.style.alignItems = 'left';
            wrapper.style.justifyContent = 'center';

            wrapper.style.maxWidth = '100vw';// This ensures the business card is within the frame in mobile view
            wrapper.style.listStyleType = 'none';
            wrapper.style.backgroundColor = '#fff';
            wrapper.style.border = '1px solid #ccc';
            wrapper.style.color = '#000';
            wrapper.style.borderRadius = '5px';
            wrapper.style.boxShadow = '0px 0px 3px #888';
            wrapper.style.height = '25rem';
            // wrapper.style.width = '15rem';


            const subcontainer = document.createElement('div');

            subcontainer.className = 'subcontainer';



            const p = document.createElement('p');
            p.className = 'business-labels';

            const img = document.createElement('img');
            img.id = 'business-img';
            img.alt = `${member.imageAlt}`;



            const ul = document.createElement('ul');
            ul.id = 'business-ul';
            ul.style.display = 'flex';
            ul.style.alignItems = 'center';
            ul.style.justifyItems = 'center';
            ul.style.alignContent = 'center';
            ul.style.margin = '0 auto';

            const li = document.createElement('li');
            li.id = 'business-li';

            const a = document.createElement('a');
            a.id = 'business-links';


            wrapper.innerHTML = ` <a href='${member.url}' aria-label='This is a ${member.imageAlt}'><img id='business-img' src=${member.image} alt=${member.imageAlt} width='150px' height='auto'></a>
                                    <span class='business-labels'> Name: </span> <p>${member.name}</p>  
                                    <span class='business-labels'> Address: </span> <p> ${member.address}</p>
                                    <span class='business-labels'> Phone: </span> <p>${member.contact}</p>
                                    <span class='business-labels'> Membership: </span> <p>${member.membershipLevel}</p>`;
            subcontainer.appendChild(a);
            subcontainer.appendChild(li);
            subcontainer.appendChild(ul);
            // subcontainer.appendChild(membershipLvl);
            subcontainer.appendChild(p);
            subcontainer.appendChild(img);
            subcontainer.appendChild(wrapper);
            businesses.appendChild(wrapper);

        }



    });

    shuffleFeaturedMembers(members);

}

async function fetchFeaturedMembers() {
    try {
        const response = await fetch('data/members.json'); // fetch the json file from a relative path


        if (!response.ok) { // Check if no response 
            throw new Error('Could not fetch resource');
        }

        const members = await response.json();  // await for Promise to resolve or be rejected and parse the result as json object

        // console.table(members);

        displayFeatured(members);

        return members;


    } catch (error) {
        console.error(error);
    }
}


fetchFeaturedMembers();




function shuffleFeaturedMembers(members) {
    for (let i = members.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [members[i], members[j] = members[j], members[i]];
    }

    return members;
}




