import React from "react";
import styled from "styled-components";
import { routePageBaseStyle } from "../../Styles/RoutePageBaseStyle/routePageBaseStyle";

const NoMatchContainer = styled.div`
	${routePageBaseStyle}
`;

export default function NoMatch(props) {
	const { pageTitleProp, classNameProp } = props;

	return <NoMatchContainer className={classNameProp}>{pageTitleProp}</NoMatchContainer>;
}
