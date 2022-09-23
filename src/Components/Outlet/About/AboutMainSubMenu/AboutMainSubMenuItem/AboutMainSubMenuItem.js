import React from "react";
import styled from "styled-components";

const AboutMainSubMenuItemContainer = styled.div`
	background-color: var(--grey-outlet-submenuitem-bg);
	height: 25%;
	width: 90%;

	display: flex;
	justify-content: center;
	align-items: center;

	border-bottom-left-radius: 1rem;
	border-top-left-radius: 1rem;

	padding-right: 1.5vw;

	box-shadow: var(--darkgrey-shadow-submenu-menu-outset), var(--darkgrey-shadow-submenu-menu-inset);
`;

const AboutMainSubMenuItemTitle = styled.span`
	font-size: 2.5vw;
	font-family: "Bebas Neue", cursive;
	color: var(--grey-outlet-submenuitem-title);

	text-shadow: var(--darkgrey-shadow-submenu-menuitems);
`;

function AboutMainSubMenuItem(props) {
	const { titleprops } = props;

	return (
		<AboutMainSubMenuItemContainer>
			<AboutMainSubMenuItemTitle>{titleprops}</AboutMainSubMenuItemTitle>
		</AboutMainSubMenuItemContainer>
	);
}

export default AboutMainSubMenuItem;
