import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
	height: inherit;
	width: inherit;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: min-content minmax(min-content, 1fr);
	grid-template-areas: "navbar" "outlet";
`;

export default function Layout(props) {
	const { children, classNameProp } = props;

	return <LayoutContainer className={classNameProp}>{children}</LayoutContainer>;
}
