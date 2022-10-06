import React from "react";
import styled from "styled-components";

const ContactFormLabelDynamicContainer = styled.div`
	align-self: flex-start;
	margin: 1vw 3vw;
`;

const ContactFormLabelDynamicLabel = styled.label`
	font-family: var(--default-Bebas-fontstyle);
	font-size: clamp(1.5rem, 1.5vw, 2vw);
	color: var(--grey-contact-form-main-font);
	text-shadow: var(--darkgrey-shadow-contact-form-text);
`;

function ContactFormLabelDynamic(props) {
	const { titleprops } = props;

	return (
		<ContactFormLabelDynamicContainer>
			<ContactFormLabelDynamicLabel>{titleprops}</ContactFormLabelDynamicLabel>
		</ContactFormLabelDynamicContainer>
	);
}

export default ContactFormLabelDynamic;
