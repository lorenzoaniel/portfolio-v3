import React from "react";
import styled from "styled-components";

const AboutMainContainer = styled.div`
	background-color: var(--darkgrey-outlet-bg);
	grid-area: main;

	height: 90%;

	border-radius: 1rem;
	box-shadow: var(--black-shadow-outletmain-outset), var(--black-shadow-outletmain-inset);
	display: flex;
	justify-content: center;
	align-items: center;
`;

function AboutMain(props) {
	const { children } = props;
	return <AboutMainContainer>{children}</AboutMainContainer>;
}

export default AboutMain;
