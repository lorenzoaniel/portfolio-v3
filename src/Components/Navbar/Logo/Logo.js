import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
	height: 1vh;
	width: 1vw;
`;

export default function Logo(props) {
	const { children } = props;
	return <LogoContainer>{children}</LogoContainer>;
}
