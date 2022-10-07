import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import AboutMainSocial from "../../../Components/Outlet/About/AboutMainSocial/AboutMainSocial";
import { AboutOutletBaseStyle } from "../../../Styles/About/AboutOutletBaseStyle/AboutOutletBaseStyle";

import { nanoid } from "nanoid";

import { appearOpacityBaseAnimationVariants } from "../../../Animations/AppearOpacityBaseAnimation/appearOpacityBaseAnimation";

const SocialsContainer = styled(motion.div)`
	${AboutOutletBaseStyle};
	display: flex;
	justify-content: space-around;
	align-content: flex-start;
	flex-wrap: wrap;
`;

const createAboutMainSocial = (socialdata) => {
	return Object.keys(socialdata).map((currSocial) => {
		return (
			<AboutMainSocial
				descriptionprops={socialdata[currSocial].description}
				socialiconprops={socialdata[currSocial].icon}
				linkprops={socialdata[currSocial].link}
				key={nanoid()}
			/>
		);
	});
};

export default function Socials(props) {
	const { socialdataprops } = props;

	const SocialsContainerMotionVariants = {
		initial: appearOpacityBaseAnimationVariants.initial,
		appearanimation: appearOpacityBaseAnimationVariants.appearanimation,
	};

	const SocialsContainerMotionProps = {
		initial: SocialsContainerMotionVariants.initial,
		animate: SocialsContainerMotionVariants.appearanimation,
	};

	return (
		<SocialsContainer {...SocialsContainerMotionProps}>
			{createAboutMainSocial(socialdataprops)}
		</SocialsContainer>
	);
}
