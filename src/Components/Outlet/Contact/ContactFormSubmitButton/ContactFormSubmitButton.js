import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactFormSubmitButtonBtnMotionVariants = {
	hover: {
		backgroundColor: `rgba(32, 38, 44, 1)`,
		borderColor: `rgba(32, 38, 44, 1)`,
		transition: {
			ease: `linear`,
		},
	},
	click: {
		backgroundColor: `var(--darkgrey-contact-form-submit-bg)`,
		borderColor: `var(--darkgrey-contact-form-submit-bg)`,
	},
};

const ContactFormSubmitButtonBtnMotionProps = {
	whileHover: ContactFormSubmitButtonBtnMotionVariants.hover,
	whileTap: ContactFormSubmitButtonBtnMotionVariants.click,
};

function ContactFormSubmitButton(props) {
	const { gridareaprops } = props;

	return (
		<ContactFormSubmitButtonContainer gridareaprops={gridareaprops}>
			<ContactFormSubmitButtonBtn type="submit" {...ContactFormSubmitButtonBtnMotionProps}>
				Submit
			</ContactFormSubmitButtonBtn>
		</ContactFormSubmitButtonContainer>
	);
}

const ContactFormSubmitButtonContainer = styled.div`
	grid-area: ${(props) => props.gridareaprops};
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContactFormSubmitButtonBtn = styled(motion.button)`
	background-color: var(--darkgrey-contact-form-submit-bg);
	height: clamp(5rem, 5vw, 7vw);
	width: clamp(10rem, 20vw, 25vw);
	border-radius: 1rem;
	font-family: var(--default-Bebas-fontstyle);
	font-size: clamp(3rem, 3vw, 3.5vw);
	color: var(--grey-contact-form-submit-text);
	border-color: var(--darkgrey-contact-form-submit-bg);
	box-shadow: var(--black-contact-form-border-submit);
	text-shadow: var(--default-font-text-shadow);
`;

export default ContactFormSubmitButton;
