const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg'
    },
    {
      name:'‘Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg'
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg'
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg'
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg'
    },
  ];

  console.log(team);

const teamWrapper = document.querySelector('.team-container');

function createCard(name, role, image) {
    teamWrapper.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src="img/${image}" alt="${name}"/>
        </div>
        <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
        </div>
    </div>
    `
}

function createData(team) {
    for (i = 0; i < team.length; i++) {
        createCard(team[i].name, team[i].role, team[i].image);
    }
}

createData(team);

const buttonNewMember = document.getElementById('addMemberButton');

buttonNewMember.addEventListener('click', createNewMember);

function createNewMember() {
    const newMember = {
        'name' : document.getElementById('name').value,
        'role' : document.getElementById('role').value,
        'image' : document.getElementById('image').value,
    }

    team.push(newMember);
    
    console.log(newMember);
}