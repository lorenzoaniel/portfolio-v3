import React from "react";
import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
	background-color: blue;
	height: 3rem;
	width: 3rem;
`;

export default function HamburgerMenu(props) {
	const { children, toggleBurgerMenuProp } = props;
	return (
		<HamburgerMenuContainer onClick={() => toggleBurgerMenuProp((curr) => !curr)}>
			{children}
		</HamburgerMenuContainer>
	);
}
