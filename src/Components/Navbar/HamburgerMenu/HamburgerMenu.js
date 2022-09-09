import React from "react";
import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
	background-color: blue;
	height: 3rem;
	width: 3rem;

	grid-area: ${(props) => props.gridAreaProp};
`;

export default function HamburgerMenu(props) {
	const { children, toggleBurgerMenuProp, classNameProp, gridAreaProp } = props;
	return (
		<HamburgerMenuContainer
			gridAreaProp={gridAreaProp}
			className={classNameProp}
			onClick={() => toggleBurgerMenuProp((curr) => !curr)}
		>
			{children}
		</HamburgerMenuContainer>
	);
}
