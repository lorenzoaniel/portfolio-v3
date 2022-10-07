import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import AboutMainSkill from "../../../Components/Outlet/About/AboutMainSkill/AboutMainSkill";
import { AboutOutletBaseStyle } from "../../../Styles/About/AboutOutletBaseStyle/AboutOutletBaseStyle";

import { nanoid } from "nanoid";

import { appearOpacityBaseAnimationVariants } from "../../../Animations/AppearOpacityBaseAnimation/appearOpacityBaseAnimation";

const SkillsContainer = styled(motion.div)`
	${AboutOutletBaseStyle};

	display: flex;
	justify-content: space-around;
	align-content: flex-start;
	/* align-items: center; */
	flex-wrap: wrap;
	/* flex-grow: 2; //adds a unique effect on the container */
`;

const createAboutMainSkill = (skilldata) => {
	return Object.keys(skilldata).map((currSkill) => {
		return (
			<AboutMainSkill
				descriptionprops={skilldata[currSkill].description}
				skilliconprops={skilldata[currSkill].icon}
				key={nanoid()}
			/>
		);
	});
};

export default function Skills(props) {
	const { skilldataprop } = props;

	const SkillsContainerMotionVariants = {
		initial: appearOpacityBaseAnimationVariants.initial,
		appearanimation: appearOpacityBaseAnimationVariants.appearanimation,
	};

	const SkillsContainerMotionProps = {
		initial: SkillsContainerMotionVariants.initial,
		animate: SkillsContainerMotionVariants.appearanimation,
	};

	return (
		<SkillsContainer {...SkillsContainerMotionProps}>
			{createAboutMainSkill(skilldataprop)}
		</SkillsContainer>
	);
}
