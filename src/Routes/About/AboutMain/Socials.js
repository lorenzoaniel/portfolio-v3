import React from "react";
import styled from "styled-components";
import AboutMainSocial from "../../../Components/Outlet/About/AboutMainSocial/AboutMainSocial";
import { AboutOutletBaseStyle } from "../../../Styles/About/AboutOutletBaseStyle/AboutOutletBaseStyle";
import { nanoid } from "nanoid";

const SocialsContainer = styled.div`
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
	return <SocialsContainer>{createAboutMainSocial(socialdataprops)}</SocialsContainer>;
}
