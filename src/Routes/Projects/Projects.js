import React from "react";
import styled from "styled-components";
import { routePageBaseStyle } from "../../Styles/RoutePageBaseStyle/routePageBaseStyle";

const ProjectsContainer = styled.div`
	${routePageBaseStyle}
`;

export default function Projects(props) {
	const { pageTitleProp, classNameProp } = props;

	return <ProjectsContainer className={classNameProp}>{pageTitleProp}</ProjectsContainer>;
}
