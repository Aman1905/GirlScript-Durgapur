const announcementTimeline = [
	{
		eventName: 'Introduction to UI/UX Design',
		eventDescription: `GirlScript Durgapur in collaboration with GirlScript Hoogly.`,
		eventDate: 'April 29, 2021',
		eventPageLink: './event1.html'
	},
	{
		eventName: 'Introductory webinar on Docker',
		eventDescription: `GirlScript Durgapur in collaboration with GS Jalandhar.`,
		eventDate: 'May 29, 2021',
		eventPageLink: './event2.html'
	},
	{
		eventName: 'Talks on GitHub and Open Source',
		eventDescription: `Our lead speaker Aman Chopra(MLSA) will introduce you to GitHub and open source.`,
		eventDate: 'July 19, 2021',
		eventPageLink: './event3.html'
	}
	
];

const recentEventsDetails = [
	{
		coverImage: 'assets/Images/announcement/Event1.png',
		eventName: 'Introduction to UI/UX Design',
		altName: 'Introduction to UI/UX Design',
		eventDescription: `For this, we come up with an enormous speaker Shubham Ranjan, a product designer at prodX `,
		referencePage: 'https://docs.google.com/forms/d/e/1FAIpQLSdvn_QehI6fHz1XQEpgmg16iIKrXzofSLB6HGKEes-XXWpzXQ/viewform'
	},
	{
		coverImage: 'assets/Images/announcement/Event2.jpg',
		eventName: 'Introductory webinar on Docker',
		altName: 'Introductory webinar on Docker',
		eventDescription: `For this, we come up with an enormous speaker Seema Sharan, Associate System Engineer at IBM  `,
		referencePage: 'http://bit.ly/3hJQm3Z'
	},
	{
		coverImage: 'assets/Images/announcement/Event3.jpg',
		eventName: 'Talks on GitHub and Open Source',
		altName: 'Talks on GitHub and Open Source',
		eventDescription: `For this, we come up with an enormous speaker Aman Chpra, a mentor, MLSA and Web Developer `,
		referencePage: 'https://bit.ly/3wEICoR'
	}
];

const generateTimelineCard = (timelineDetail, position) => {
	const { eventName, eventDescription, eventDate, eventPageLink } = timelineDetail;

	const dateType = position === 'right' ? 'time-2' : 'time-1';

	const timeline = `<div class="timeline-container ${position}">
						<div class="timeline-content">
							<h3>${eventName}</h3>
							<hr class="mw-100 line1" />
							<p class="description">
								${eventDescription}
							</p>
							<div class="time ${dateType}">
								<h5>${eventDate}</h5>
							</div>
							<div class="card-stats">
								<a href="${eventPageLink}" class="btn card-btn card1-text" target="__blank">Read More</a>
							</div>
						</div>
					</div>`;

	const timelineSection = document.getElementById('timeline');
	timelineSection.innerHTML += timeline;
};

const generateEventsCard = (eventDetail, fixClassIndex) => {
	const { coverImage, eventName, altName, eventDescription, referencePage } = eventDetail;
	const eventCard = `<div class="card r-events-card">
						<div class="card-image">
							<img
								src="${coverImage}"
								alt="${altName}"
								aria-label="${altName}"
							/>
						</div>
						<div class="card-text">
							<h2 class="rh${fixClassIndex}">${eventName}</h2>
							<p class="pt-1 event-body">
								${eventDescription}
							</p>
						</div>
						<div class="card-stats">
							<a href="${referencePage}" class="btn card-btn card1-text card-btn2" target="_blank"> Register</a>
						</div>
					</div>`;

	const recentEventsSection = document.getElementById('eventCards');
	recentEventsSection.innerHTML += eventCard;
};

const insertAnnouncementTimeline = () => {
	// position of events on timeline will be judged automatically
	announcementTimeline.forEach((details, index) => {
		const position = index % 2 === 0 ? 'left' : 'right';
		generateTimelineCard(details, position);
	});
};
const insertEventCards = () => {
	recentEventsDetails.forEach((detail, index) => {
		generateEventsCard(detail, index + 1);
	});
};

insertAnnouncementTimeline();
insertEventCards();
