'use strict';

const favClassesDataSet = {
  linkedIn: 'fa fa-linkedin',
  twitter: 'fa fa-twitter',
  github: 'fa fa-github',
  facebook: 'fa fa-facebook'
};

const mapProfileLinksToFavClasses = profileName => {
	return favClassesDataSet[profileName];
};

const teamDetails = [
	{
		name: 'Hari Priya',
		position: 'The Board',
		image: 'hari_priya.jpeg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/hari-priya-207207191',
				github: 'https://github.com/haripriya9647',
				twitter: 'https://twitter.com/Haripri86007496'
			}
		]
	},

	{
		name: 'Aman Chopra',
		position: 'The Board',
		image: 'aman_chopra.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/aman-chopra-375a81171',
				github: 'https://github.com/Aman1905',
				twitter: 'https://twitter.com/iam_chopra_aman?s=09'
			}
		]
	},

	{
		name: 'Nikita Nishchal',
		position: 'The Board',
		image: 'nikita_nishchal.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/nikita-nishchal-0a92a01a1',
			}
		]
	},

	{
		name: 'Nilisha Jaiswal',
		position: 'The Board',
		image: 'nilisha_jaiswal.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/nilisha-jaiswal-7980061b2',
				github: 'https://github.com/nilisha-jais',
				twitter: 'https://twitter.com/jaiswal_nilu05?s=01'
			}
		]
	},

	{
		name: 'Priyanshu Haldar',
		position: 'The Board',
		image: 'priyanshu_haldar.jpeg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/priyanshu-haldar-61b2731aa/',
				github: 'https://github.com/priyanshuhaldar007',
				twitter: 'https://twitter.com/PriyanshuHalda5'
			}
		]
	},

	{
		name: 'Ankita Gupta',
		position: 'The Board',
		image: 'ankita_gupta.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/ankita-gupta-08b4301b1',
				github: 'https://github.com/AnkitaG39126259',
				twitter: 'https://twitter.com/AnkitaG39126259'
			}
		]
	},

	{
		name: 'Priya Bulbul Mondal',
		position: 'The Board',
		image: 'priya_bulbul_mondal.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/priya-mondal-0b343b1a0/',
				github: 'https://github.com/Priya96-sketch',
				twitter: 'https://twitter.com/PriyaMondal'
			}
		]
	},

	{
		name: 'Pratyush Mandal',
		position: 'The Board',
		image: 'pratyush_mandal.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/pratyush-mandal-72169718b',
				github: 'https://twitter.com/PratyushMandal1',
				twitter: 'https://github.com/pratyush-mandal'
			}
		]
	},

	{
		name: 'Hari Priya',
		position: 'The Lead',
		image: 'hari_priya.jpeg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/hari-priya-207207191',
				github: 'https://github.com/haripriya9647',
				twitter: 'https://twitter.com/Haripri86007496'
			}
		]
	},

	{
		name: 'Aman Chopra',
		position: 'Technical Team',
		image: 'aman_chopra.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/aman-chopra-375a81171',
				github: 'https://github.com/Aman1905',
				twitter: 'https://twitter.com/iam_chopra_aman?s=09'
			}
		]
	},

	{
		name: 'Nilisha Jaiswal',
		position: 'Technical Team',
		image: 'nilisha_jaiswal.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/nilisha-jaiswal-7980061b2',
				github: 'https://github.com/nilisha-jais',
				twitter: 'https://twitter.com/jaiswal_nilu05?s=01'
			}
		]
	},

	{
		name: 'Priya Bulbul Mondal',
		position: 'Creatives Team',
		image: 'priya_bulbul_mondal.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/priya-mondal-0b343b1a0/',
				github: 'https://github.com/Priya96-sketch',
				twitter: 'https://twitter.com/PriyaMondal'
			}
		]
	},

	{
		name: 'Pratyush Mandal',
		position: 'Creatives Team',
		image: 'pratyush_mandal.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/pratyush-mandal-72169718b',
				github: 'https://twitter.com/PratyushMandal1',
				twitter: 'https://github.com/pratyush-mandal'
			}
		]
	},

	{
		name: 'Ankita Gupta',
		position: 'Management Team',
		image: 'ankita_gupta.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/ankita-gupta-08b4301b1',
				github: 'https://github.com/AnkitaG39126259',
				twitter: 'https://twitter.com/AnkitaG39126259'
			}
		]
	},

	{
		name: 'Priyanshu Haldar',
		position: 'Marketing Team',
		image: 'priyanshu_haldar.jpeg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/priyanshu-haldar-61b2731aa/',
				github: 'https://github.com/priyanshuhaldar007',
				twitter: 'https://twitter.com/PriyanshuHalda5'
			}
		]
	},

	{
		name: 'Nikita Nishchal',
		position: 'Content Team',
		image: 'nikita_nishchal.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/nikita-nishchal-0a92a01a1',
			}
		]
	}
];

const generateProfileLinks = profileObject => {
	let result = [];
	for (let profile in profileObject) {
		const classtoAdd = mapProfileLinksToFavClasses(profile);
		const listItem = `
              <a href="${profileObject[profile]}" target="__blank">
                <i class="${classtoAdd}"></i>
              </a>`;
		result.push(listItem);
	}
	return result.join(' ');
};

const mapPositionToHtmlId = position => {
	const mappingSet = {
		The_Board: 'board',
		Technical_Team: 'technical',
		Creatives_Team: 'creatives',
		Management_Team: 'management',
		Content_Team: 'content',
		Marketing_Team: 'marketing',
		The_Lead: 'leader'
	};

	return mappingSet[position];
};

// Generates HTML for each team members from array
const generateCards = cardDetail => {
	const { name, position, image, profiles } = cardDetail;

	const getProfilesLinksDynamic = generateProfileLinks(profiles[0]);

	const teamCard = `
  <card data-image="./assets/Images/team/${image}">
    <h1 slot="header">${name}</h1>
    <p slot="content">
        ${getProfilesLinksDynamic}
        <br><br>
        <span>${position}</span>
    </p>
  </card>`;

	const mappingID = position.replace(' ', '_');

	const injectingPoint = document.getElementById(mapPositionToHtmlId(mappingID));
	injectingPoint.innerHTML += teamCard;
};

const injectCardsToPage = () => {
	teamDetails.forEach(teamMember => {
		generateCards(teamMember);
	});
};

injectCardsToPage();
