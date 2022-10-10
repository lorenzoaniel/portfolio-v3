import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutMainTitleh1MotionVariants = {
	initial: {
		scaleX: 0,
		transition: {
			duration: 0.3,
		},
	},
	onload: {
		scaleX: 1,
	},
};

const AboutMainTitleh3MotionVariants = {
	initial: {
		scaleX: 0,
		transition: {
			duration: 0.3,
		},
	},
	onload: {
		scaleX: 1,
	},
};

const AboutMainTitleh1MotionProps = {
	initial: AboutMainTitleh1MotionVariants.initial,
	animate: AboutMainTitleh1MotionVariants.onload,
};

const AboutMainTitleh3MotionProps = {
	initial: AboutMainTitleh3MotionVariants.initial,
	animate: AboutMainTitleh3MotionVariants.onload,
};

function AboutMainTitle() {
	return (
		<AboutMainTitleContainer>
			<AboutMainTitleh1 {...AboutMainTitleh1MotionProps}>
				{"Mikhail Lorenzo Aniel"}
			</AboutMainTitleh1>
			<AboutMainTitleh3 {...AboutMainTitleh3MotionProps}>{"Front End Developer"}</AboutMainTitleh3>
		</AboutMainTitleContainer>
	);
}

const AboutMainTitleContainer = styled.div`
	height: 90%;
	width: 90%;
	grid-area: maintitle;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
`;

const AboutMainTitleh1 = styled(motion.h1)`
	font-size: 2vh;
	color: var(--grey-outlet-maintitle);

	padding: 0.3rem;
	border-radius: 0.5rem;
	background-color: var(--darkgrey-outlet-maintitle-container);
	box-shadow: var(--black-shadow-outletmaintitle-outset);
`;

const AboutMainTitleh3 = styled(motion.h3)`
	font-size: clamp(1vh, 1.5vh, 1.5vh);
	color: var(--grey-outlet-sectitle);

	padding: 0.3rem;
	border-radius: 0.5rem;
	background-color: var(--darkgrey-outlet-sectitle-container);
	box-shadow: var(--black-shadow-outletmaintitle-outset);
`;

export default AboutMainTitle;
