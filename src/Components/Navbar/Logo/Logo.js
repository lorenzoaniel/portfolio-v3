import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
	background-color: blanchedalmond;
	height: 1vh;
	width: 1vw;

	grid-area: ${(props) => props.gridAreaProp};
`;

export default function Logo(props) {
	const { children, classNameProp, gridAreaProp } = props;
	return (
		<LogoContainer gridAreaProp={gridAreaProp} className={classNameProp}>
			{children}
		</LogoContainer>
	);
}
