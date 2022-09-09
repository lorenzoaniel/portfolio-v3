import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
	background-color: orange;
	grid-area: navbar;
	display: grid;
	grid-template-areas: "logo about projects contact burgermenu";
`;

export default function NavBar(props) {
	const { children } = props;

	return <NavbarContainer>{children}</NavbarContainer>;
}
