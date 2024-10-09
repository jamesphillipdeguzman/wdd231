const displayFeatured = (members) => {

    members.forEach((member) => {

        const businesses = document.querySelector('#featured-businesses');
        // const card = document.createElement('p');

        // const memberName = `${member.name}`;
        const membershipLevel = `${member.membershipLevel}`;

        if (membershipLevel == 'Gold' || membershipLevel == 'Silver') {

            // Shuffle members



            businesses.style.display = 'grid';
            businesses.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
            businesses.style.gap = '0.5rem';
            businesses.style.alignItems = 'center';
            businesses.style.alignContent = 'center';
            businesses.style.justifyContent = 'center';
            // businesses.style.fontFamily = 'Montserrat';
            // businesses.style.maxWidth = '80vw';
            businesses.style.padding = '5px 0';
            businesses.style.margin = '0 auto';

            // dynamicBusinesses.style.gridColumn = '2/3';

            const container = document.createElement('div'); // create a div 
            container.className = 'container';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.alignContent = 'center';
            container.style.alignItems = 'left';
            container.style.maxWidth = '100vw';
            container.style.listStyleType = 'none';
            container.style.backgroundColor = '#fff';
            container.style.border = '1px solid #ccc';
            container.style.color = '#000';
            container.style.borderRadius = '5px';
            container.style.boxShadow = '0px 0px 3px #888';
            container.style.height = '30rem';
            container.style.width = '400px';
            // container.style.margin = '0 1rem';
            // container.style.maxWidth = '100vw';

            const subcontainer = document.createElement('div');

            subcontainer.className = 'subcontainer';



            const p = document.createElement('p');
            p.className = 'business-labels';

            const img = document.createElement('img');
            img.id = 'business-img';


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


            container.innerHTML = ` <a href='${member.url}'><img id='business-img' src=${member.image} width='150px' height='auto'></a>
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
            subcontainer.appendChild(container);
            businesses.appendChild(container);

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

        console.table(members)

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




