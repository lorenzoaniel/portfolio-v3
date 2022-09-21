import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LogoLetterSpan = styled(motion.span)`
	display: inline-block;
	height: 100%;
	width: min-content;
	font-size: ${(props) => props.dynamicsizeprop};
	font-family: "Bebas Neue", cursive;
	text-shadow: var(--darkgrey-shadow-text-menuitems);
	color: var(--grey-navbar-items);
	display: flex;
	align-items: center;
`;

export default function LogoLetter(props) {
	const { children, dynamicsizeprop } = props;

	return <LogoLetterSpan dynamicsizeprop={dynamicsizeprop}>{children}</LogoLetterSpan>;
}
