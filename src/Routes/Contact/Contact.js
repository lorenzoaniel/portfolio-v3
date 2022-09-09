import React from "react";
import styled from "styled-components";
import { routePageBaseStyle } from "../../Styles/RoutePageBaseStyle/routePageBaseStyle";

const ContactContainer = styled.div`
	${routePageBaseStyle}
`;

export default function Contact(props) {
	const { pageTitleProp, classNameProp } = props;

	return <ContactContainer className={classNameProp}>{pageTitleProp}</ContactContainer>;
}
