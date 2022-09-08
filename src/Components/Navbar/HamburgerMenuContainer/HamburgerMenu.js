import React from "react";
import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
	height: 1vh;
	width: 1vw;
`;

export default function HamburgerMenu(props) {
	const { children } = props;
	return <HamburgerMenuContainer>{children}</HamburgerMenuContainer>;
}
