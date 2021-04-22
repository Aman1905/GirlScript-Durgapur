"use strict";

// import necessary SVG Files

import { openSourceSvg } from './svg.js';
import { researchWorkSvg } from './svg.js';
import { publicSpeakingSvg } from './svg.js';
import { interpersonalSvg } from './svg.js';

const breakPosition = {
	'0': 'top',
	'1': 'bottom'
};

const trendCardsDetails = [
	{
		backgroundCover: 'https://cdn.dribbble.com/users/132658/screenshots/14095717/media/c2dfb424808d6b39baf849054031fb1b.png?compress=1&resize=800x600',
		displayName: 'Machine Learning'
	},
	{
		backgroundCover: 'https://cdn.dribbble.com/users/410907/screenshots/9222503/media/c72ddfb2defe7a8d8d851064b6e94d89.jpg?compress=1&resize=800x600',
		displayName: 'Internet of Things'
	},
	{
		backgroundCover: 'https://cdn.dribbble.com/users/1751513/screenshots/14329055/media/71ace4877f1dd45a66f355cdf9dc1708.png?compress=1&resize=800x600',
		displayName: 'Web Development'
	},
	{
		backgroundCover: 'https://cdn.dribbble.com/users/2920041/screenshots/15469045/media/8ddd8485720aafff1fb1249f0ed388f3.png?compress=1&resize=800x600',
		displayName: 'Cloud Computing'
	},
	{
		backgroundCover: 'https://cdn.dribbble.com/users/1925451/screenshots/6051067/artboard_21_2x-100_copy.jpg?compress=1&resize=800x600',
		displayName: 'Cyber Security'
	},
	{
		backgroundCover: 'https://cdn.dribbble.com/users/112892/screenshots/14681965/media/0647dcbf7532a86087f7987927235690.png?compress=1&resize=800x600',
		displayName: 'Robotics'
	}
];

const initiativesDetails = [
	{
		mainHeading: 'Open Source',
		subHeading: 'Projects',
		description: `Open-source software code. Generally, open source refers to a computer program in
					which the source code is available to the general public for use.`,
		classFix: '',
		svg: openSourceSvg
	},
	{
		mainHeading: 'Research',
		subHeading: 'Work',
		description: `Research is "creative and systematic work undertaken to increase the stock of
					knowledge, and the use of this stock of knowledge to devise new applications."`,
		classFix: '',
		svg: researchWorkSvg
	},
	{
		mainHeading: 'Public',
		subHeading: 'Speaking',
		description: `GirlScript, with it's various conferences and meet- ups, helps its community to
					master the art of public speaking and build the leaders of tomorrow.`,
		classFix: 'fix-touch',
		svg: publicSpeakingSvg
	},
	{
		mainHeading: 'Interpersonal',
		subHeading: 'Development',
		description: `Interpersonal skills are the skills we use every day when we communicate and
					interact with other people, both individually and in groups.`,
		classFix: 'fix-touch',
		svg: interpersonalSvg
	}
];

const generateTrendsCard = (cardDetails, position) => {
	const { backgroundCover, displayName } = cardDetails;

	const trendCard = `<div class="ih-item circle effect">
					<a>
						<div class="img">
							<img src=${backgroundCover} alt=${displayName} aria-label=${displayName} />
						</div>
						<div class="info">
							<div class="info-back">
								<h3>${displayName}</h3>
							</div>
						</div>
					</a>
                </div>`;

	let injectionSection = document.getElementById(`trends-${position}`);

	injectionSection.innerHTML += trendCard;
};

const injectTrendsCards = () => {
	trendCardsDetails.forEach((trendCard, index) => {
		const breakPoint = Math.floor(index / 3);
		generateTrendsCard(trendCard, breakPosition[breakPoint]);
	});
};


const generateInitiavesCard = (initiativeDetail, position) => {
	const { mainHeading, subHeading, description, classFix, svg } = initiativeDetail;
	const initiativeCard = `<div class="flip-card ${classFix}">
						<div class="flip-card-content">
							<div class="flip-card-front">
								<h5 class="flip-card-head">
								${mainHeading}<span>${subHeading}
								</span>
								</h5>
								<div class="flip-card-img">
									${svg}
								</div>
							</div>
							<div class="flip-card-back">
								<p class="flip-card-detail">
									${description}
								</p>
							</div>
						</div>
					</div>`;
	
	const injectionPoint = document.getElementById(`initiatives-${position}`);
	injectionPoint.innerHTML += initiativeCard;
}

const injectInitiavesCards = () => {
	initiativesDetails.forEach((initiativeDetail, index) => {
		if (index < 2)
			generateInitiavesCard(initiativeDetail, 'upper');
		else
			generateInitiavesCard(initiativeDetail, 'lower');
	});
}

injectInitiavesCards();
injectTrendsCards();

