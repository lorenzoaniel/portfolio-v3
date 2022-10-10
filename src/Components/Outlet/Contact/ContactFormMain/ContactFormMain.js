import React from "react";
import styled from "styled-components";

const handleSubmit = (event) => {
	event.preventDefault();
	alert("form submitted");

	//TODO ADD MODAL AND BACKGROUND DISABLE WHEN SUBMIT IS CLICKED
};

function ContactFormMain(props) {
	const { children } = props;
	return (
		<ContactFormMainFrame>
			<ContactFormMainContainer onSubmit={handleSubmit}>{children}</ContactFormMainContainer>
		</ContactFormMainFrame>
	);
}

const ContactFormMainFrame = styled.div`
	background-color: var(--grey-contact-form-main-frame-bg);
	height: 80%;
	width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;
	box-shadow: var(--darkgrey-shadow-contact-form-inset), var(--darkgrey-shadow-contact-form-outset);
`;

const ContactFormMainContainer = styled.form`
	background-color: var(--grey-contact-form-main-bg);
	height: 95%;
	width: 95%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 25%);
	border-radius: 1rem;
	grid-template-areas: "firstname" "email" "comments" "submit";
	box-shadow: var(--darkgrey-shadow-contact-form-outset);
`;

export default ContactFormMain;
