import { FaReact, FaGithub, FaCss3 } from "react-icons/fa";
import { SiStyledcomponents, SiLinkedin, SiFramer } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import { HiBadgeCheck } from "react-icons/hi";
import { DiJavascript1 } from "react-icons/di";

const aboutPageData = {
	mainSectionTitle: {
		mainTitle: "Mikhail Lorenzo Aniel",
		secondaryTitle: "Junior Front-End Developer",
	},
	mainSection: {
		introduction: `Hi my name is Lorenzo, I am an aspiring junior REACT front-end developer, with a background in Computer Networking and IT Support. 
			 Feel free to explore my portfolio website; as a break-down the "About" page which you are currently on has basically a summary of my resume as well as
			 links to other sites that you can find more information about me (refer to "Socials"). The other categories on the navigation bar is pretty self explanatory
			 and I will leave it up to your curiosity. 
			`,
	},
	socialsSection: {
		linkedin: {
			icon: <SiLinkedin />,
			link: "https://www.linkedin.com/in/mikhail-lorenzo-aniel-283022127/",
			description: "LinkedIn",
		},
		github: {
			icon: <FaGithub />,
			link: "https://github.com/lorenzoaniel",
			description: "Github",
		},
		credly: {
			icon: <HiBadgeCheck />,
			link: "https://www.credly.com/users/mikhail-lorenzo-aniel/badges",
			description: "Credly",
		},
	},
	skillsSection: {
		react: {
			description: "ReactJS",
			icon: <FaReact />,
		},
		js: {
			description: "JS",
			icon: <DiJavascript1 />,
		},
		styledcomponent: {
			description: "Styled-Components",
			icon: <SiStyledcomponents />,
		},
		html: {
			description: "HTML5",
			icon: <ImHtmlFive2 />,
		},
		css: {
			description: "CSS3",
			icon: <FaCss3 />,
		},
		framermotion: {
			description: "Framer-Motion",
			icon: <SiFramer />,
		},
		// framermotions: {
		// 	//test
		// 	description: "Framer-Motion",
		// 	icon: <SiFramer />,
		// },
	},
};

export default aboutPageData;
