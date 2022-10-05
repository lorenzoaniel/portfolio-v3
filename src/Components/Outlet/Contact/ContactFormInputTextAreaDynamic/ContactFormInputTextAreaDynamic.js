import React from "react";
import styled from "styled-components";
import { contactFormInputDynamicInputBaseStyle } from "../../../../Styles/Contact/ContactFormInputDynamicInputBaseStyle/contactFormInputDynamicInputBaseStyle";
import { contactFormInputDynamicInputCommentsStyle } from "../../../../Styles/Contact/ContactFormInputDynamicInputCommentsStyle/contactFormInputDynamicInputCommentsStyle";

const ContactFormInputTextAreaDynamicContainer = styled.div`
	grid-area: ${(props) => props.gridareaprops};
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-shrink: 1;
`;

const ContactFormInputTextAreaDynamicInput = styled.textarea`
	${contactFormInputDynamicInputBaseStyle}
	${(props) => (props.id === "contact-comments" ? contactFormInputDynamicInputCommentsStyle : "")}
`;

function ContactFormInputTextAreaDynamic(props) {
	const { inputtypeprops, placeholderprops, gridareaprops, idprops, children } = props;

	return (
		<ContactFormInputTextAreaDynamicContainer gridareaprops={gridareaprops}>
			{children}
			<ContactFormInputTextAreaDynamicInput
				id={idprops}
				placeholder={placeholderprops}
				type={inputtypeprops}
			/>
		</ContactFormInputTextAreaDynamicContainer>
	);
}

export default ContactFormInputTextAreaDynamic;
