import React from "react";
import styled from "styled-components";
import { routePageBaseStyle } from "../../Styles/RoutePageBaseStyle/routePageBaseStyle";

const ContactContainer = styled.div`
	${routePageBaseStyle}
`;

export default function Contact(props) {
	const { pageTitleProp } = props;

	return <ContactContainer>{pageTitleProp}</ContactContainer>;
}
