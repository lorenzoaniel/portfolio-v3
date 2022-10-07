import React from "react";
import styled from "styled-components";

const AboutMainSubMenuContainer = styled.div`
	background-color: var(--grey-outlet-submenu-bg);
	grid-area: submenu;

	height: 75%;
	width: 120%; //extends container behind main
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-end;

	border-bottom-left-radius: 1rem;
	border-top-left-radius: 1rem;

	box-shadow: var(--black-shadow-outletmain-outset), var(--black-shadow-outletmain-inset);
`;

function AboutMainSubMenu(props) {
	const { children } = props;

	return <AboutMainSubMenuContainer>{children}</AboutMainSubMenuContainer>;
}

export default AboutMainSubMenu;
