import React from "react";
import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
	background-color: blue;
	height: ${(props) => props.dynamicSizeProp};
	width: ${(props) => props.dynamicSizeProp};
	margin: 1.5vw 0;
	margin-right: 1vw;

	grid-area: ${(props) => props.gridAreaProp};
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 25%);
	grid-template-areas: "m-1" "m-2" "m-3" "m-4";
	justify-content: space-around;
	align-items: center;
`;

export default function HamburgerMenu(props) {
	const { children, toggleBurgerMenuProp, classNameProp, gridAreaProp, dynamicSizeProp } = props;
	return (
		<HamburgerMenuContainer
			dynamicSizeProp={dynamicSizeProp}
			gridAreaProp={gridAreaProp}
			className={classNameProp}
			onClick={() => toggleBurgerMenuProp((curr) => !curr)}
		>
			{children}
		</HamburgerMenuContainer>
	);
}
