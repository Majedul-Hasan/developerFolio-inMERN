


const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
	username: "Majedul Hasan",
	title: "Hi all, I'm Majedul",
	subTitle: (
		"A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
		),
	resumeLink:
	"https://drive.google.com/drive/folders/1hfpQrERlzkDHjzvRTwzvvniLqIg0kDI5",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: "https://github.com/Majedul-Hasan",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "hasanmajedul@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/h.majedul",
//   medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/13937484/majedul-hasan",
  instagram: 'https://www.instagram.com/majedul.hasan_m31',
  twitter: 'https://twitter.com/hmajedul',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: "What I do",
	subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
	(
		"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
	("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
	(
		"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		)
	],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
  	skillName: "html-5",
  	fontAwesomeClassname: "fab fa-html5"
  },
  {
  	skillName: "css3",
  	fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
  	skillName: "sass",
  	fontAwesomeClassname: "fab fa-sass"
  },
  {
  	skillName: "JavaScript",
  	fontAwesomeClassname: "fab fa-js"
  },
  {
  	skillName: "reactjs",
  	fontAwesomeClassname: "fab fa-react"
  },
  {
  	skillName: "nodejs",
  	fontAwesomeClassname: "fab fa-node"
  },
//   {
//   	skillName: "swift",
//   	fontAwesomeClassname: "fab fa-swift"
//   },
  {
  	skillName: "npm",
  	fontAwesomeClassname: "fab fa-npm"
  },
//   {
//   	skillName: "sql-database",
//   	fontAwesomeClassname: "fas fa-database"
//   },
  {
  	skillName: "firebase",
  	fontAwesomeClassname: "fas fa-fire"
  }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  {
  	schoolName: "Jagannath University of Dhaka",
  

 logo: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958897/jagannathUniversity_ucpsqa.png",
	
  	subHeader: "Bachelor of Science in Physics",
  	// duration: "September 2009 - April 2014",
  	desc: "Participated in the research of EM rediation.",
  	descBullets: [
  	"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  	]
  },
  {
  	schoolName: "Narsingdi Govt. College",
  	logo: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958898/narsingdiGovtCollege_tipsw3.png",
  	subHeader: " Higher Secondary Certificate in science",
  	// duration: "September 2013 - April 2017",
  	desc:
  	"I have studied here for 2 years  ",
  	descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
  },
  {
  	schoolName: "Madhabdi S.P. Institution",
  	logo:"https://res.cloudinary.com/dxt629rgo/image/upload/v1642958899/Mspi_z5xgnb.png",
  	subHeader: "Secondary School Certificate in science",
  	// duration: "September 2013 - April 2017",
  	// desc:
  	// "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
  	// descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
  }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
  {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
  },
  {
  	Stack: "React",
  	progressPercentage: "85%"
  },
   {
  	Stack: "Backend",
  	progressPercentage: "75%"
  },
  {
  	Stack: "JS Programming",
  	progressPercentage: "85%"
  }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
  {
  	role: "Software Engineer",
  	company: "PriyaHasan it",
  	companylogo: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958898/priyaHasanlogo_ipwnc9.png",
  	date: "September 2020 – Present",
  	desc:
  	"Changing lives of developers one line of code at a time.",
  	descBullets: [
  	"Custom building applications",
  	"Coaching",
  	"Streaming live on YouTube",
  	"Creating tutorials"
  	]
  },
  {
  	role: "Instructor",
  	company: "OnlineSchool",
  	companylogo: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958899/oLS_lf7q5a.jpg",
  	date: "March 2020- present",
  	desc:
  	"I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
  },
  {
  	role: "Mathematics Teacher",
  	company: "Shahajpath High School",
  	companylogo: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958899/shahajpath_mnzscn.png",
  	date: "October 2017 – March 2020",
  	desc:
  	"My responsibility was to teach Math and Physics"
  },
  {
  	role: "Researching, Script writing & Derection",
  	company: "Desh Television",
  	companylogo: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958902/deshtvlogo_fdzfm9.jpg",
  	date: "October 2015 – june 2018",
  	desc:
  	"My responsibility was to Researching about the topic, Script writing for shooting and Derection from back to the camera & editing pennel"
  }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN ,
  githubUserName: "Majedul-Hasan", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: "Big Projects",
	subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
	projects: [
		{
		image: "https://res.cloudinary.com/dxt629rgo/image/upload/v1643230258/PROSHOP_Logo-03-01_bh8ubn.png",
		projectName: "PROSHOP E-commerce Website with mern stack",
		projectDesc: "I have create this site for my practice",
		footerLink: [
		{
			name: "Visit Website",
			url: "https://merntestesrote.herokuapp.com"
		}
        //  you can add extra buttons here.
        ]
    },
		{
		image: "https://res.cloudinary.com/dxt629rgo/image/upload/v1643227395/crown_clothing_dhrhau.png",
		projectName: "Crown Clothing E-Clothing shop",
		projectDesc: "I have create this site for my practice",
		footerLink: [
		{
			name: "Visit Website",
			url: "https://cwnclothing.netlify.app"
		}
        //  you can add extra buttons here.
        ]
    },
	{
		image: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958915/amazonClone-01_fwtppe.jpg",
		projectName: "Amazone Clone",
		projectDesc: "I have create this site for my practice",
		footerLink: [
		{
			name: "Visit Website",
			url: "https://clone-ch.web.app/"
		}
        //  you can add extra buttons here.
        ]
    },
	
    {
    	image: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958901/slackClone-01-02_n3dzup.jpg",
    	projectName: "slack Clone",
    	projectDesc: "I have create this site for my practice",
    	footerLink: [
    	{
    		name: "Visit Website",
    		url: "https://slack-clone-fb7db.web.app/"
    	}
    	]
    },
	{
    	image: "https://res.cloudinary.com/dxt629rgo/image/upload/v1643231740/disney_plus-Logo-04_cslydi.png",
    	projectName: "disney plus Clone",
    	projectDesc: "I have create this site for my practice",
    	footerLink: [
    	{
    		name: "Visit Website",
    		url: "https://disneyplusclon-e.netlify.app"
    	}
    	]
    },
    ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title:"Achievements And Certifications 🏆 ",
	subtitle:
	"Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

	achievementsCards: [
	{
		title: "Google Code-In Finalist",
		subtitle:
		"First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
		image: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958901/codeInLogo_jcpqol.webp",
		footerLink: [
		{
			name: "Certification",
			url:
			""
		},
		{
			name: "Award Letter",
			url:
			""
		},
		{
			name: "Google Code-in Blog",
			url:
			""
		}
		]
	},
	{
		title: "Google Assistant Action",
		subtitle:
		"Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
		image: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958897/googleAssistantLogo_naubru.webp",
		footerLink: [
		{
			name: "View Google Assistant Action",
			url:
			""
		}
		]
	},

	{
		title: "PWA Web App Developer",
		subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
		image: "https://res.cloudinary.com/dxt629rgo/image/upload/v1642958899/pwaLogo_lwsask.webp",
		footerLink: [
		{name: "Certification", url: ""},
		{
			name: "Final Project",
			url: ""
		}
		]
	}
	],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
	title: "Blogs",
	subtitle:
	"With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

	blogs: [
	{
		url:
		"https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
		title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
		description:
		"Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
	},
	{
		url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
		title: "Why REACT is The Best?",
		description:
		"React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
	}
	],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: 
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ,

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    },
  ],
  display: false // Set false to hide this section, defaults to true
};
// Podcast Section

const podcastSection = {
	title: ("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
  "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: ("Contact Me ☎️"),
	subtitle:
	"Discuss a project or just want to say hi? My Inbox is open for all.",
	number: "(+8801) 684 214 383",
	email_address: "hasanmajedul@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "hmajedul", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
	illustration,
	greeting,
	socialMediaLinks,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails
};