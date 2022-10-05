import React from "react";
import styled from "styled-components";

const ContactFormMainContainer = styled.form`
	background-color: var(--grey-contact-form-main-bg);
	height: 80%;
	width: 80%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 25%);
	border-radius: 1rem;
	grid-template-areas: "firstname" "email" "comments" "submit";
	box-shadow: var(--darkgrey-shadow-contact-form-inset), var(--darkgrey-shadow-contact-form-outset);
`;

function ContactFormMain(props) {
	const { children } = props;
	return <ContactFormMainContainer>{children}</ContactFormMainContainer>;
}

export default ContactFormMain;
