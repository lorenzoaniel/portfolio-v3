import React from "react";
import styled from "styled-components";

const NavbarMenuItemContainer = styled.div`
	font-family: "Bebas Neue", cursive;
	grid-area: ${(props) => props.gridAreaProp};

	a {
		text-decoration: none;
		font-size: ${(props) => props.dynamicSizeProp};
	}
`;

export default function NavbarMenuItem(props) {
	const { children, classNameProp, gridAreaProp, dynamicSizeProp } = props;

	return (
		<NavbarMenuItemContainer
			dynamicSizeProp={dynamicSizeProp}
			gridAreaProp={gridAreaProp}
			className={classNameProp}
		>
			{children}
		</NavbarMenuItemContainer>
	);
}
