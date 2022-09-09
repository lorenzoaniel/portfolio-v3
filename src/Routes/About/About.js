import React from "react";
import styled from "styled-components";
import { routePageBaseStyle } from "../../Styles/RoutePageBaseStyle/routePageBaseStyle";

const AboutContainer = styled.div`
	${routePageBaseStyle}
`;

export default function About(props) {
	const { pageTitleProp, classNameProp } = props;

	return <AboutContainer className={classNameProp}>{pageTitleProp}</AboutContainer>;
}
