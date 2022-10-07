import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutMainSocialDescriptionMotionVariants = {
	initial: {
		backgroundColor: `var(--darkgrey-skills-skilldescframe-bg)`,
		transition: {
			duration: 0.3,
		},
	},
	hover: {
		cursor: `pointer`,
		backgroundColor: `var(--darkgrey-skills-skilldescframe-bg-hover)`,
		transition: {
			duration: 0.3,
		},
	},
	click: {
		backgroundColor: `var(--darkgrey-skills-skilldescframe-bg)`,
		transition: {
			duration: 0.3,
		},
	},
};

const AboutMainSocialDescriptionMotionProps = {
	initial: AboutMainSocialDescriptionMotionVariants.initial,
	whileHover: AboutMainSocialDescriptionMotionVariants.hover,
	whileTap: AboutMainSocialDescriptionMotionVariants.click,
};

function AboutMainSocial(props) {
	const { socialiconprops, descriptionprops, linkprops } = props;

	return (
		<AboutMainSocialContainer>
			<AboutMainSocialIcon>{socialiconprops}</AboutMainSocialIcon>
			<AboutMainSocialDescription {...AboutMainSocialDescriptionMotionProps}>
				<a target={"_blank"} rel="noreferrer" href={linkprops}>
					{descriptionprops}
				</a>
			</AboutMainSocialDescription>
		</AboutMainSocialContainer>
	);
}

const AboutMainSocialContainer = styled.div`
	height: 26vw;
	width: 34vw;
	flex: 1 1 20vw;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-content: flex-start;
	padding: 1rem;
`;

const AboutMainSocialIcon = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		height: 7vw;
		width: 7vw;
		fill: var(--lightgrey-skills-icon-color);
	}
`;

const AboutMainSocialDescription = styled(motion.span)`
	a {
		color: var(--lightgrey-skills-font-color);
		text-shadow: var(--default-font-text-shadow);
		font-family: var(--default-Bebas-fontstyle);
		font-size: 2vw;
		text-decoration: none;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;
	box-shadow: var(--black-shadow-skillsframe-inset), var(--black-shadow-skillsframe-outset);
`;

export default AboutMainSocial;
