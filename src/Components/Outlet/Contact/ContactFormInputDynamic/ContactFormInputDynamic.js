import React from "react";
import styled from "styled-components";
import { contactFormInputDynamicInputBaseStyle } from "../../../../Styles/Contact/ContactFormInputDynamicInputBaseStyle/contactFormInputDynamicInputBaseStyle";

const ContactFormInputDynamicContainer = styled.div`
	grid-area: ${(props) => props.gridareaprops};
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-shrink: 1;
`;

const ContactFormInputDynamicInput = styled.input`
	${contactFormInputDynamicInputBaseStyle}
`;

function ContactFormInputDynamic(props) {
	const { inputtypeprops, placeholderprops, gridareaprops, idprops, children } = props;

	return (
		<ContactFormInputDynamicContainer gridareaprops={gridareaprops}>
			{children}
			<ContactFormInputDynamicInput
				id={idprops}
				placeholder={placeholderprops}
				type={inputtypeprops}
			/>
		</ContactFormInputDynamicContainer>
	);
}

export default ContactFormInputDynamic;
