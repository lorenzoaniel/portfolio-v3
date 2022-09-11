import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
	background-color: blanchedalmond;
	height: ${(props) => props.dynamicSizeProp};
	width: ${(props) => props.dynamicSizeProp};
	margin: 1.5vw 0;
	margin-left: 1vw;

	grid-area: ${(props) => props.gridAreaProp};
`;

export default function Logo(props) {
	const { children, classNameProp, gridAreaProp, dynamicSizeProp } = props;
	return (
		<LogoContainer
			dynamicSizeProp={dynamicSizeProp}
			gridAreaProp={gridAreaProp}
			className={classNameProp}
		>
			{children}
		</LogoContainer>
	);
}
