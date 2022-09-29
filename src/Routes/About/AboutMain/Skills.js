import React from "react";
import styled from "styled-components";
import AboutMainSkill from "../../../Components/Outlet/About/AboutMainSkill/AboutMainSkill";
import { AboutOutletBaseStyle } from "../../../Styles/About/AboutOutletBaseStyle/AboutOutletBaseStyle";
import { nanoid } from "nanoid";

const SkillsContainer = styled.div`
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
	return <SkillsContainer>{createAboutMainSkill(skilldataprop)}</SkillsContainer>;
}
