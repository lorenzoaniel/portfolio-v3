import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
	background-color: var(--grey-navbar-bg);
	grid-area: navbar;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "logo . . . . . about projects contact burgermenu";
	gap: 0 2vw;
	justify-content: space-around;
	align-items: center;
	box-shadow: var(--black-shadow-inset);
`;

export default function NavBar(props) {
	const { children } = props;

	return <NavbarContainer>{children}</NavbarContainer>;
}
