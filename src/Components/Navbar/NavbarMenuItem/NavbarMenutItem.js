import React from "react";
import styled from "styled-components";

const NavbarMenutItemContainer = styled.div`
	font-family: "Bebas Neue", cursive;
	grid-area: ${(props) => props.gridAreaProp};

	a {
		text-decoration: none;
	}
`;

export default function NavbarMenutItem(props) {
	const { children, classNameProp, gridAreaProp } = props;

	return (
		<NavbarMenutItemContainer gridAreaProp={gridAreaProp} className={classNameProp}>
			{children}
		</NavbarMenutItemContainer>
	);
}
