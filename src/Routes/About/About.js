import React from "react";
import styled from "styled-components";
import { routePageBaseStyle } from "../../Styles/RoutePageBaseStyle/routePageBaseStyle";

const AboutContainer = styled.div`
	${routePageBaseStyle}
`;

export default function About(props) {
	const { pageTitleProp } = props;

	return <AboutContainer>{pageTitleProp}</AboutContainer>;
}
