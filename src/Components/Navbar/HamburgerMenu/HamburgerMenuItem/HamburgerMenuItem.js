import React from "react";
import styled from "styled-components";

const HamburgerMenuItemIcon = styled.span`
	background-color: black;
	display: inline-block;
	width: 90%;
	height: 40%;
`;

export default function HamburgerMenuItem() {
	return <HamburgerMenuItemIcon />;
}
