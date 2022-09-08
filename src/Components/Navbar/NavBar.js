import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
	background-color: orange;
	grid-area: navbar;
`;

export default function NavBar(props) {
	const { children } = props;

	return <NavbarContainer>{children}</NavbarContainer>;
}
