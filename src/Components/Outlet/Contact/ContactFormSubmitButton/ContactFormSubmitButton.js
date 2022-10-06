import React from "react";
import styled from "styled-components";

const ContactFormSubmitButtonContainer = styled.div`
	grid-area: ${(props) => props.gridareaprops};
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContactFormSubmitButtonBtn = styled.button`
	background-color: var(--darkgrey-contact-form-submit-bg);
	height: clamp(5rem, 5vw, 7vw);
	width: clamp(10rem, 20vw, 25vw);
	border-radius: 1rem;
	font-family: var(--default-Bebas-fontstyle);
	font-size: clamp(3rem, 3vw, 3.5vw);
	color: var(--grey-contact-form-submit-text);
	border: 0.5rem solid var(--darkgrey-contact-form-submit-bg);
	box-shadow: var(--black-contact-form-border-submit);
	text-shadow: var(--default-font-text-shadow);
`;

function ContactFormSubmitButton(props) {
	const { gridareaprops } = props;

	return (
		<ContactFormSubmitButtonContainer gridareaprops={gridareaprops}>
			<ContactFormSubmitButtonBtn>Submit</ContactFormSubmitButtonBtn>
		</ContactFormSubmitButtonContainer>
	);
}

export default ContactFormSubmitButton;
