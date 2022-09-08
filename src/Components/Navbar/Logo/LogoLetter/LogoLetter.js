import React from "react";
import styled from "styled-components";

const LogoLetterSpan = styled.span`
	font-size: 1vw;
`;

export default function LogoLetter(props) {
	const { letter } = props;
	return <LogoLetterSpan>{letter}</LogoLetterSpan>;
}
