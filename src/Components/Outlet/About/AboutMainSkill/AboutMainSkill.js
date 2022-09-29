import React from "react";
import styled from "styled-components";

const AboutMainSkillContainer = styled.div`
	/* background-color: orange; */
	height: 13vw;
	width: 17vw;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 70% 30%;
	grid-template-areas: "skillicon" "skilldescription";
	margin: 1vw;
`;

const AboutMainSkillDescription = styled.span`
	background-color: var(--darkgrey-skills-skilldescframe-bg);
	grid-area: skilldescription;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom-left-radius: 1rem;
	border-bottom-right-radius: 1rem;
	box-shadow: var(--black-shadow-skillsframe-inset), var(--black-shadow-skillsframe-outset);
	color: var(--lightgrey-skills-font-color);
	text-shadow: var(--default-font-text-shadow);
	font-family: var(--default-Bebas-fontstyle);
	font-size: 2vw;
`;

const AboutMainSkillIcon = styled.span`
	background-color: var(--darkgrey-skills-skilliconframe-bg);
	grid-area: skillicon;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
	box-shadow: var(--black-shadow-skillsframe-inset), var(--black-shadow-skillsframe-outset);

	svg {
		height: 7vw;
		width: 7vw;
		fill: var(--lightgrey-skills-icon-color);
	}
`;

function AboutMainSkill(props) {
	const { descriptionprops, skilliconprops } = props;

	return (
		<AboutMainSkillContainer>
			<AboutMainSkillIcon>{skilliconprops}</AboutMainSkillIcon>
			<AboutMainSkillDescription>{descriptionprops}</AboutMainSkillDescription>
		</AboutMainSkillContainer>
	);
}

export default AboutMainSkill;
