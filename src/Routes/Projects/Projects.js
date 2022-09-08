import React from "react";
import styled from "styled-components";
import { routePageBaseStyle } from "../../Styles/RoutePageBaseStyle/routePageBaseStyle";

const ProjectsContainer = styled.div`
	${routePageBaseStyle}
`;

export default function Projects(props) {
	const { pageTitleProp } = props;

	return <ProjectsContainer>{pageTitleProp}</ProjectsContainer>;
}
